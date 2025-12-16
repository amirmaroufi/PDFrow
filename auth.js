// Modern Supabase Authentication System for PDFrow
// Matches site design and provides complete auth functionality

class PDFrowAuth {
    constructor() {
        this.user = null;
        this.isInitialized = false;
        this.currentModal = null;
        this.init();
    }

    async init() {
        console.log('🚀 Initializing PDFrow Authentication...');
        
        // Wait for Supabase to be available
        if (!window.supabaseClient) {
            console.warn('⚠️ Supabase client not available, retrying...');
            setTimeout(() => this.init(), 1000);
            return;
        }

        try {
            // Check for password recovery tokens in URL (from Supabase email links)
            await this.handlePasswordRecoveryFromURL();
            
            // Also check for manual #password-reset hashes
            const urlHash = window.location.hash;
            if (urlHash === '#password-reset') {
                console.log('🔑 Manual password reset hash detected');
                setTimeout(() => {
                    this.showPasswordResetModal();
                }, 1000);
            }

            // Get current session
            const { data: { session }, error } = await window.supabaseClient.auth.getSession();
            
            if (error) {
                console.error('❌ Error getting session:', error);
                return;
            }

            if (session) {
                this.user = session.user;
                console.log('✅ User session found:', this.user.email);
            }

            // Listen for auth state changes
            window.supabaseClient.auth.onAuthStateChange((event, session) => {
                console.log('🔄 Auth state changed:', event);
                
                this.user = session?.user || null;
                this.updateUI();

                // Handle specific events
                if (event === 'SIGNED_IN') {
                    const userName = this.user?.user_metadata?.full_name || this.user?.email?.split('@')[0] || 'there';
                    const provider = this.user?.app_metadata?.provider;
                    
                    let welcomeMessage = `Welcome back, ${userName}!`;
                    if (provider === 'google') {
                        welcomeMessage = `Welcome back, ${userName}! Signed in with Google.`;
                    }
                    
                    this.showToast(welcomeMessage, 'success');
                } else if (event === 'SIGNED_OUT') {
                    this.showToast('You have been signed out successfully.', 'success');
                } else if (event === 'PASSWORD_RECOVERY') {
                    console.log('🔑 Password recovery event detected via auth state change');
                    this.hideToasts(); // Hide any existing messages
                    setTimeout(() => {
                        this.showPasswordResetModal();
                    }, 300);
                }
            });

            this.isInitialized = true;
            this.updateUI();
            this.bindEvents();
            
            console.log('✅ PDFrow Authentication initialized successfully');
            
        } catch (error) {
            console.error('❌ Error initializing auth:', error);
        }
    }


    // Bind event listeners
    bindEvents() {
        // Navigation buttons
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const profileBtn = document.getElementById('profileBtn');
        
        if (loginBtn) loginBtn.addEventListener('click', () => this.showLoginModal());
        if (signupBtn) signupBtn.addEventListener('click', () => this.showSignupModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.signOut());
        if (profileBtn) profileBtn.addEventListener('click', () => this.showProfileModal());

        // User dropdown
        const userAvatar = document.getElementById('userAvatar');
        if (userAvatar) {
            userAvatar.addEventListener('click', () => this.toggleUserDropdown());
        }

        // Close modals on outside click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('auth-modal-overlay')) {
                this.hideModal();
            }
        });

        // Close modals on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.hideModal();
            }
        });
    }

    // Update UI based on auth state
    updateUI() {
        const authButtons = document.getElementById('auth-buttons');
        const userMenu = document.getElementById('user-menu');
        
        if (this.user) {
            // User is logged in
            if (authButtons) authButtons.style.display = 'none';
            if (userMenu) {
                userMenu.style.display = 'flex';
                const userEmail = userMenu.querySelector('.user-email');
                const userAvatar = userMenu.querySelector('.user-avatar');
                
                if (userEmail) userEmail.textContent = this.user.email;
                if (userAvatar) {
                    // Clear existing content
                    userAvatar.innerHTML = '';
                    
                    // Check if user has a profile picture (from Google OAuth)
                    const avatarUrl = this.user.user_metadata?.avatar_url || this.user.user_metadata?.picture;
                    
                    if (avatarUrl) {
                        // Show Google profile picture
                        const img = document.createElement('img');
                        img.src = avatarUrl;
                        img.alt = 'Profile Picture';
                        img.style.width = '100%';
                        img.style.height = '100%';
                        img.style.borderRadius = '50%';
                        img.style.objectFit = 'cover';
                        
                        // Fallback to initials if image fails to load
                        img.onerror = () => {
                            userAvatar.innerHTML = '';
                            const displayName = this.user.user_metadata?.full_name || this.user.email;
                            userAvatar.textContent = displayName.charAt(0).toUpperCase();
                        };
                        
                        userAvatar.appendChild(img);
                    } else {
                        // Show first letter of email or name
                        const displayName = this.user.user_metadata?.full_name || this.user.email;
                        userAvatar.textContent = displayName.charAt(0).toUpperCase();
                    }
                }
            }
        } else {
            // User is not logged in
            if (authButtons) authButtons.style.display = 'flex';
            if (userMenu) userMenu.style.display = 'none';
        }
    }

    // Show login modal
    showLoginModal() {
        const modal = this.createModal('login', 'Welcome Back', 'Sign in to your PDFrow account', `
            <form class="auth-form" id="loginForm">
                <div class="form-group">
                    <label for="loginEmail">Email</label>
                    <input type="email" id="loginEmail" class="auth-input" placeholder="Enter your email" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                </div>
                
                <div class="form-group">
                    <label for="loginPassword">Password</label>
                    <input type="password" id="loginPassword" class="auth-input" placeholder="Enter your password" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <button type="submit" class="auth-submit-btn">Sign In</button>
                
                <div id="loginError" class="auth-error" style="display: none;"></div>
            </form>
            
            <div class="auth-divider"><span>or</span></div>
            
            <button class="google-auth-btn" id="googleLoginBtn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
            </button>
            
            <div class="auth-footer">
                <p>Don't have an account? <a href="#" id="showSignupLink">Sign up</a></p>
                <p><a href="#" id="forgotPasswordLink">Forgot your password?</a></p>
            </div>
        `);

        // Bind form submission
        const form = modal.querySelector('#loginForm');
        form.addEventListener('submit', (e) => this.handleLogin(e));

        // Bind navigation links
        modal.querySelector('#showSignupLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal();
            this.showSignupModal();
        });

        modal.querySelector('#forgotPasswordLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal();
            this.showForgotPasswordModal();
        });

        // Bind Google auth
        modal.querySelector('#googleLoginBtn').addEventListener('click', () => this.signInWithGoogle());
    }

    // Render hCaptcha with retry logic
    renderHCaptcha(modal, attempt = 1) {
        const maxAttempts = 5;
        const captchaElement = modal.querySelector('#signup-captcha');
        
        if (!captchaElement) {
            console.warn('⚠️ hCaptcha element not found');
            return;
        }

        if (typeof hcaptcha !== 'undefined') {
            try {
                console.log('🔒 Rendering hCaptcha (attempt ' + attempt + ')...');
                
                // Clear any existing content
                captchaElement.innerHTML = '';
                
                const widgetId = hcaptcha.render(captchaElement, {
                    sitekey: '0d1af27e-28de-4c60-8bce-5cb49414df58',
                    theme: 'dark',
                    size: 'normal',
                    callback: function(token) {
                        console.log('✅ hCaptcha completed successfully, token:', token.substring(0, 20) + '...');
                        // Store the widget ID on the element for later reference
                        captchaElement.setAttribute('data-widget-id', widgetId);
                    },
                    'error-callback': function(e) {
                        console.error('❌ hCaptcha error:', e);
                    }
                });
                
                // Store the widget ID immediately
                captchaElement.setAttribute('data-widget-id', widgetId);
                console.log('✅ hCaptcha rendered successfully with widget ID:', widgetId);
                
            } catch (error) {
                console.error('❌ hCaptcha render error:', error);
                captchaElement.innerHTML = '<div style="width: 300px; height: 78px; background: rgba(255,0,0,0.1); border: 1px solid #ff4444; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #ff4444; font-size: 0.85rem; text-align: center;">Security verification failed to load.<br>Please refresh the page.</div>';
            }
        } else if (attempt <= maxAttempts) {
            console.log('⏳ hCaptcha not ready, retrying in ' + (attempt * 500) + 'ms...');
            setTimeout(() => {
                this.renderHCaptcha(modal, attempt + 1);
            }, attempt * 500);
        } else {
            console.error('❌ hCaptcha failed to load after ' + maxAttempts + ' attempts');
            captchaElement.innerHTML = '<div style="width: 300px; height: 78px; background: rgba(255,193,7,0.1); border: 1px solid #ffc107; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #ffc107; font-size: 0.85rem; text-align: center;">Security verification unavailable.<br>Please refresh the page and try again.</div>';
        }
    }

    // Show signup modal
    showSignupModal() {
        const modal = this.createModal('signup', 'Create Account', 'Join PDFrow and access all features', `
            <form class="auth-form" id="signupForm">
                <div class="form-group">
                    <label for="signupName">Full Name</label>
                    <input type="text" id="signupName" class="auth-input" placeholder="Enter your full name" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                </div>
                
                <div class="form-group">
                    <label for="signupEmail">Email</label>
                    <input type="email" id="signupEmail" class="auth-input" placeholder="Enter your email" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                </div>
                
                <div class="form-group">
                    <label for="signupPassword">Password</label>
                    <input type="password" id="signupPassword" class="auth-input" placeholder="Create a password (min 6 characters)" required minlength="6">
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" class="auth-input" placeholder="Confirm your password" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <div class="checkbox-group">
                    <input type="checkbox" id="agreeTerms" required>
                    <label for="agreeTerms">I agree to the <a href="terms-conditions.html" target="_blank">Terms & Conditions</a> and <a href="privacy-policy.html" target="_blank">Privacy Policy</a></label>
                </div>
                
                <div class="captcha-group">
                    <div class="h-captcha" id="signup-captcha" data-sitekey="0d1af27e-28de-4c60-8bce-5cb49414df58" data-theme="dark" data-size="normal">
                        <div style="width: 300px; height: 78px; background: rgba(0, 102, 255, 0.1); border: 1px solid var(--accent-primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--accent-primary); font-size: 0.9rem;">
                            Loading security verification...
                        </div>
                    </div>
                </div>
                
                <button type="submit" class="auth-submit-btn">Create Account</button>
                
                <div id="signupError" class="auth-error" style="display: none;"></div>
            </form>
            
            <div class="auth-divider"><span>or</span></div>
            
            <button class="google-auth-btn" id="googleSignupBtn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
            </button>
            
            <div class="auth-footer">
                <p>Already have an account? <a href="#" id="showLoginLink">Sign in</a></p>
            </div>
        `);

        // Bind form submission
        const form = modal.querySelector('#signupForm');
        form.addEventListener('submit', (e) => this.handleSignup(e));

        // Bind navigation links
        modal.querySelector('#showLoginLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal();
            this.showLoginModal();
        });

        // Bind Google auth
        modal.querySelector('#googleSignupBtn').addEventListener('click', () => this.signInWithGoogle());

        // Render hCaptcha after modal is in DOM
        this.renderHCaptcha(modal);
    }

    // Show forgot password modal
    showForgotPasswordModal() {
        const modal = this.createModal('forgot', 'Reset Password', 'Enter your email to receive a password reset link', `
            <form class="auth-form" id="forgotForm">
                <div class="form-group">
                    <label for="resetEmail">Email</label>
                    <input type="email" id="resetEmail" class="auth-input" placeholder="Enter your email address" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                </div>
                
                <button type="submit" class="auth-submit-btn">Send Reset Link</button>
                
                <div id="forgotError" class="auth-error" style="display: none;"></div>
                <div id="forgotSuccess" class="auth-success" style="display: none;"></div>
            </form>
            
            <div class="auth-footer">
                <p>Remember your password? <a href="#" id="backToLoginLink">Sign in</a></p>
            </div>
        `);

        // Bind form submission
        const form = modal.querySelector('#forgotForm');
        form.addEventListener('submit', (e) => this.handleForgotPassword(e));

        // Bind navigation links
        modal.querySelector('#backToLoginLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal();
            this.showLoginModal();
        });
    }

    // Show password reset modal (for recovery from email)
    showPasswordResetModal() {
        const modal = this.createModal('reset', 'Set New Password', 'Enter your new password below', `
            <form class="auth-form" id="resetForm">
                <div class="form-group">
                    <label for="newPassword">New Password</label>
                    <input type="password" id="newPassword" class="auth-input" placeholder="Enter new password (min 6 characters)" required minlength="6">
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <div class="form-group">
                    <label for="confirmNewPassword">Confirm New Password</label>
                    <input type="password" id="confirmNewPassword" class="auth-input" placeholder="Confirm your new password" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <button type="submit" class="auth-submit-btn">Update Password</button>
                
                <div id="resetError" class="auth-error" style="display: none;"></div>
                <div id="resetSuccess" class="auth-success" style="display: none;"></div>
            </form>
        `);

        // Bind form submission
        const form = modal.querySelector('#resetForm');
        form.addEventListener('submit', (e) => this.handlePasswordReset(e));
    }

    // Create modal helper
    createModal(type, title, subtitle, content) {
        // Remove existing modal
        this.hideModal();

        const modal = document.createElement('div');
        modal.className = 'auth-modal active';
        modal.id = `${type}Modal`;
        modal.innerHTML = `
            <div class="auth-modal-overlay"></div>
            <div class="auth-form-container">
                <button class="auth-close-btn">&times;</button>
                <div class="auth-form-header">
                    <h2>${title}</h2>
                    <p>${subtitle}</p>
                </div>
                ${content}
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        this.currentModal = modal;

        // Bind close button
        modal.querySelector('.auth-close-btn').addEventListener('click', () => this.hideModal());

        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 100);

        return modal;
    }

    // Hide current modal
    hideModal() {
        if (this.currentModal) {
            this.currentModal.remove();
            this.currentModal = null;
            document.body.style.overflow = '';
        }
    }

    // Toggle user dropdown
    toggleUserDropdown() {
        const dropdown = document.querySelector('.user-dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    }

    // Handle login form submission
    async handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const submitBtn = e.target.querySelector('.auth-submit-btn');
        const errorDiv = document.getElementById('loginError');
        
        this.setLoading(submitBtn, true);
        this.hideError(errorDiv);

        try {
            const { data, error } = await window.supabaseClient.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            this.hideModal();
            // Toast will be shown by auth state change listener
            
        } catch (error) {
            console.error('Login error:', error);
            this.showError(errorDiv, error.message);
        } finally {
            this.setLoading(submitBtn, false);
        }
    }

    // Handle signup form submission
    async handleSignup(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        const submitBtn = e.target.querySelector('.auth-submit-btn');
        const errorDiv = document.getElementById('signupError');
        
        this.hideError(errorDiv);

        // Validate terms agreement
        if (!agreeTerms) {
            this.showError(errorDiv, 'You must agree to the Terms & Conditions and Privacy Policy');
            return;
        }

        // Validate hCaptcha
        let captchaResponse = null;
        const captchaElement = document.getElementById('signup-captcha');
        
        if (typeof hcaptcha !== 'undefined' && captchaElement) {
            try {
                const widgetId = captchaElement.getAttribute('data-widget-id');
                if (widgetId) {
                    captchaResponse = hcaptcha.getResponse(widgetId);
                    console.log('🔍 hCaptcha response for widget', widgetId + ':', captchaResponse ? 'COMPLETED' : 'NOT_COMPLETED');
                } else {
                    // Fallback to get any response
                    captchaResponse = hcaptcha.getResponse();
                    console.log('🔍 hCaptcha response (fallback):', captchaResponse ? 'COMPLETED' : 'NOT_COMPLETED');
                }
            } catch (error) {
                console.error('❌ Error getting hCaptcha response:', error);
            }
        }
        
        if (!captchaResponse || captchaResponse.length === 0) {
            this.showError(errorDiv, 'Please complete the security verification (captcha).');
            return;
        }
        
        console.log('✅ hCaptcha validation passed with token:', captchaResponse.substring(0, 20) + '...');

        // Validate passwords match
        if (password !== confirmPassword) {
            this.showError(errorDiv, 'Passwords do not match');
            return;
        }

        this.setLoading(submitBtn, true);

        try {
            const { data, error } = await window.supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name
                    }
                }
            });

            if (error) throw error;

            this.hideModal();
            this.showToast('Account created successfully! Please check your email to verify your account.', 'success');
            
        } catch (error) {
            console.error('Signup error:', error);
            this.showError(errorDiv, error.message);
        } finally {
            this.setLoading(submitBtn, false);
        }
    }

    // Handle forgot password form submission
    async handleForgotPassword(e) {
        e.preventDefault();
        
        const email = document.getElementById('resetEmail').value;
        const submitBtn = e.target.querySelector('.auth-submit-btn');
        const errorDiv = document.getElementById('forgotError');
        const successDiv = document.getElementById('forgotSuccess');
        
        this.setLoading(submitBtn, true);
        this.hideError(errorDiv);
        this.hideSuccess(successDiv);

        try {
            const { error } = await window.supabaseClient.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/`
            });

            if (error) throw error;

            this.showSuccess(successDiv, 'Password reset link sent! Check your email for instructions.');
            
        } catch (error) {
            console.error('Forgot password error:', error);
            this.showError(errorDiv, error.message);
        } finally {
            this.setLoading(submitBtn, false);
        }
    }

    // Handle password recovery from URL tokens (Supabase email links)
    async handlePasswordRecoveryFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlHash = window.location.hash;
        const fullURL = window.location.href;
        
        console.log('🔍 Checking URL for password recovery tokens:', fullURL);
        console.log('🔍 URL Hash:', urlHash);
        console.log('🔍 URL Search:', window.location.search);
        
        // Check for recovery tokens in URL fragments (format: #access_token=...&type=recovery)
        let accessToken = null;
        let refreshToken = null;
        let recoveryType = null;
        
        if (urlHash.includes('access_token')) {
            // Parse tokens from hash
            const hashParams = new URLSearchParams(urlHash.substring(1));
            accessToken = hashParams.get('access_token');
            refreshToken = hashParams.get('refresh_token');
            recoveryType = hashParams.get('type');
            console.log('🔑 Tokens found in URL hash - type:', recoveryType);
        } else if (urlParams.has('access_token')) {
            // Parse tokens from query parameters
            accessToken = urlParams.get('access_token');
            refreshToken = urlParams.get('refresh_token');
            recoveryType = urlParams.get('type');
            console.log('🔑 Tokens found in URL query - type:', recoveryType);
        }
        
        // Check if we have password recovery tokens
        if (accessToken && recoveryType === 'recovery') {
            console.log('🔄 Processing password recovery token...');
            console.log('🔄 Access token length:', accessToken.length);
            
            try {
                // Try using the session directly first
                const { data, error } = await window.supabaseClient.auth.setSession({
                    access_token: accessToken,
                    refresh_token: refreshToken
                });
                
                if (error) {
                    console.error('❌ Session setup failed:', error);
                    // Try alternative method with verifyOtp
                    console.log('🔄 Trying verifyOtp method...');
                    
                    const { data: otpData, error: otpError } = await window.supabaseClient.auth.verifyOtp({
                        token_hash: accessToken,
                        type: 'recovery'
                    });
                    
                    if (otpError) {
                        console.error('❌ Token verification failed:', otpError);
                        this.showToast('Password reset link has expired or is invalid. Please request a new one.', 'error');
                        this.cleanupURL();
                        return;
                    }
                    
                    console.log('✅ Token verified with verifyOtp');
                } else {
                    console.log('✅ Session established successfully');
                }
                
                console.log('✅ Password recovery token processed successfully');
                this.showToast('Password reset link verified! Please set your new password.', 'success');
                
                // Clean up URL before showing modal
                this.cleanupURL();
                
                // Show password reset modal after a short delay
                setTimeout(() => {
                    this.showPasswordResetModal();
                }, 1000);
                
            } catch (error) {
                console.error('❌ Error processing recovery token:', error);
                this.showToast('An error occurred while processing the password reset link.', 'error');
                this.cleanupURL();
            }
        } else if (accessToken) {
            console.log('🔍 Access token found but type is not recovery:', recoveryType);
        } else {
            console.log('🔍 No recovery tokens found in URL');
        }
    }

    // Clean up URL from recovery tokens
    cleanupURL() {
        const url = new URL(window.location);
        url.search = '';
        url.hash = '';
        window.history.replaceState({}, '', url.toString());
        console.log('🧹 URL cleaned up from recovery tokens');
    }

    // Handle password reset form submission
    async handlePasswordReset(e) {
        e.preventDefault();
        
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmNewPassword').value;
        const submitBtn = e.target.querySelector('.auth-submit-btn');
        const errorDiv = document.getElementById('resetError');
        const successDiv = document.getElementById('resetSuccess');
        
        this.hideError(errorDiv);
        this.hideSuccess(successDiv);

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            this.showError(errorDiv, 'Passwords do not match');
            return;
        }

        this.setLoading(submitBtn, true);

        try {
            const { error } = await window.supabaseClient.auth.updateUser({
                password: newPassword
            });

            if (error) throw error;

            this.showSuccess(successDiv, 'Password updated successfully! You are now logged in.');
            
            // Clear URL hash and close modal after delay
            setTimeout(() => {
                window.location.hash = '';
                this.hideModal();
            }, 2000);
            
        } catch (error) {
            console.error('Password reset error:', error);
            this.showError(errorDiv, error.message);
        } finally {
            this.setLoading(submitBtn, false);
        }
    }

    // Sign in with Google
    async signInWithGoogle() {
        try {
            // Close any open modals
            this.hideModal();
            
            const { data, error } = await window.supabaseClient.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    }
                }
            });

            if (error) throw error;
            
            // The user will be redirected to Google, then back to our site
            // No need to show a success message here as the page will redirect
            
        } catch (error) {
            console.error('Google sign in error:', error);
            
            // Show specific error messages for common Google OAuth issues
            let errorMessage = error.message;
            if (error.message.includes('popup')) {
                errorMessage = 'Please allow popups for this site and try again.';
            } else if (error.message.includes('redirect_uri_mismatch')) {
                errorMessage = 'Google OAuth configuration error. Please contact support.';
            } else if (error.message.includes('access_denied')) {
                errorMessage = 'Google sign-in was cancelled.';
            }
            
            this.showToast(errorMessage, 'error');
        }
    }

    // Sign out
    async signOut() {
        try {
            const { error } = await window.supabaseClient.auth.signOut();
            
            if (error) throw error;
            
            // Toast will be shown by auth state change listener
            
        } catch (error) {
            console.error('Sign out error:', error);
            this.showToast(error.message, 'error');
        }
    }

    // Utility methods
    setLoading(button, loading) {
        if (loading) {
            button.disabled = true;
            button.innerHTML = '<div class="loading-spinner"></div> Loading...';
        } else {
            button.disabled = false;
            button.innerHTML = button.dataset.originalText || 'Submit';
        }
    }

    showError(element, message) {
        element.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            <span>${message}</span>
        `;
        element.style.display = 'flex';
    }

    hideError(element) {
        element.style.display = 'none';
    }

    showSuccess(element, message) {
        element.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            <span>${message}</span>
        `;
        element.style.display = 'flex';
    }

    hideSuccess(element) {
        element.style.display = 'none';
    }

    showToast(message, type = 'success') {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll('.toast');
        existingToasts.forEach(toast => toast.remove());

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success' ? 
                    '<polyline points="20,6 9,17 4,12"/>' : 
                    '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                }
            </svg>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            toast.remove();
        }, 5000);
    }

    hideToasts() {
        const existingToasts = document.querySelectorAll('.toast');
        existingToasts.forEach(toast => toast.remove());
    }

    // Show profile modal
    showProfileModal() {
        if (!this.isAuthenticated()) {
            this.showToast('Please sign in to view your profile.', 'error');
            return;
        }

        const user = this.user;
        const joinDate = new Date(user.created_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long',
            day: 'numeric'
        });
        
        const provider = user.app_metadata?.provider || 'email';
        const isGoogleUser = provider === 'google';
        const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
        
        const modal = this.createModal('profile', 'My Profile', 'Manage your account', `
            <div class="modern-profile">
                <!-- Profile Header -->
                <div class="profile-header">
                    <div class="avatar-wrapper">
                        ${avatarUrl ? 
                            `<img src="${avatarUrl}" alt="Profile Picture" class="user-avatar">` :
                            `<div class="user-avatar avatar-initial">${(user.user_metadata?.full_name || user.email).charAt(0).toUpperCase()}</div>`
                        }
                        <div class="verification-dot ${user.email_confirmed_at ? 'verified' : 'unverified'}"></div>
                    </div>
                    <div class="user-details">
                        <h2 class="user-name">${user.user_metadata?.full_name || 'User'}</h2>
                        <p class="user-email">${user.email}</p>
                        <div class="user-badges">
                            <span class="badge ${isGoogleUser ? 'google-badge' : 'email-badge'}">
                                ${isGoogleUser ? 'Google Account' : 'Email Account'}
                            </span>
                            <span class="badge join-badge">Member since ${joinDate}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Profile Info Cards -->
                <div class="info-cards">
                    <div class="info-card">
                        <div class="card-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 12l2 2 4-4"/>
                                <circle cx="12" cy="12" r="9"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <h4>Account Status</h4>
                            <p class="${user.email_confirmed_at ? 'status-verified' : 'status-pending'}">
                                ${user.email_confirmed_at ? 'Verified' : 'Pending Verification'}
                            </p>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <div class="card-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <circle cx="12" cy="16" r="1"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <h4>Security</h4>
                            <p>${isGoogleUser ? 'Google Authentication' : 'Password Protection'}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="action-buttons">
                    ${!isGoogleUser ? `
                    <button class="btn btn-primary" id="changePasswordBtn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <circle cx="12" cy="16" r="1"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        Change Password
                    </button>
                    ` : ''}
                    <button class="btn btn-outline" id="signOutBtn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16,17 21,12 16,7"/>
                            <line x1="21" y1="12" x2="9" y2="12"/>
                        </svg>
                        Sign Out
                    </button>
                </div>
            </div>
        `);

        // Add futuristic profile styles matching app design
        const styles = document.createElement('style');
        styles.textContent = `
            /* Override modal container for profile */
            #profileModal .auth-form-container {
                max-width: 520px;
                max-height: 90vh;
                overflow-y: auto;
                padding: 1.5rem;
            }
            
            .modern-profile {
                width: 100%;
                background: var(--card-bg);
                border: 1px solid rgba(0, 102, 255, 0.2);
                border-radius: 20px;
                padding: 1.5rem;
                position: relative;
                overflow: hidden;
            }
            
            .modern-profile::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: var(--gradient-primary);
            }
            
            .profile-header {
                display: flex;
                align-items: center;
                gap: 1.25rem;
                margin-bottom: 1.5rem;
                padding-bottom: 1.25rem;
                border-bottom: 1px solid rgba(0, 102, 255, 0.1);
            }
            
            .avatar-wrapper {
                position: relative;
                flex-shrink: 0;
            }
            
            .user-avatar {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: 2px solid var(--accent-primary);
                box-shadow: 0 0 20px rgba(0, 102, 255, 0.3);
            }
            
            .avatar-initial {
                background: var(--gradient-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                font-weight: bold;
                color: white;
            }
            
            .verification-dot {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 3px solid var(--card-bg);
            }
            
            .verification-dot.verified {
                background: #10b981;
            }
            
            .verification-dot.unverified {
                background: #f59e0b;
            }
            
            .user-details {
                flex: 1;
            }
            
            .user-name {
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--text-primary);
                margin: 0 0 0.5rem 0;
                background: var(--gradient-primary);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .user-email {
                color: var(--text-secondary);
                margin: 0 0 1rem 0;
            }
            
            .user-badges {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            }
            
            .badge {
                font-size: 0.75rem;
                font-weight: 600;
                padding: 0.25rem 0.75rem;
                border-radius: 15px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .google-badge {
                background: rgba(255, 0, 128, 0.1);
                color: var(--accent-secondary);
                border: 1px solid rgba(255, 0, 128, 0.3);
            }
            
            .email-badge {
                background: rgba(0, 102, 255, 0.1);
                color: var(--accent-primary);
                border: 1px solid rgba(0, 102, 255, 0.3);
            }
            
            .join-badge {
                background: rgba(128, 0, 255, 0.1);
                color: var(--accent-tertiary);
                border: 1px solid rgba(128, 0, 255, 0.3);
            }
            
            .info-cards {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .info-card {
                background: rgba(30, 31, 43, 0.8);
                border: 1px solid rgba(0, 102, 255, 0.2);
                border-radius: 15px;
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                transition: all 0.3s ease;
            }
            
            .info-card:hover {
                border-color: rgba(0, 102, 255, 0.5);
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(0, 102, 255, 0.15);
            }
            
            .card-icon {
                width: 36px;
                height: 36px;
                background: var(--gradient-primary);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
            }
            
            .card-content h4 {
                font-size: 0.9rem;
                font-weight: bold;
                color: var(--text-primary);
                margin: 0 0 0.5rem 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .card-content p {
                font-size: 0.85rem;
                color: var(--text-secondary);
                margin: 0;
            }
            
            .status-verified {
                color: #10b981 !important;
            }
            
            .status-pending {
                color: #f59e0b !important;
            }
            
            .action-buttons {
                display: flex;
                gap: 1rem;
            }
            
            .btn {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                padding: 0.875rem 1.5rem;
                border-radius: 12px;
                font-size: 0.9rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .btn-primary {
                background: var(--gradient-primary);
                color: white;
                border: none;
                box-shadow: 0 4px 20px rgba(0, 102, 255, 0.3);
            }
            
            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 30px rgba(0, 102, 255, 0.4);
            }
            
            .btn-outline {
                background: transparent;
                color: var(--text-primary);
                border: 1px solid rgba(0, 102, 255, 0.3);
            }
            
            .btn-outline:hover {
                background: rgba(0, 102, 255, 0.1);
                border-color: rgba(0, 102, 255, 0.5);
                transform: translateY(-2px);
            }
            
            /* Light mode overrides */
            body.light-mode .info-card {
                background: rgba(255, 255, 255, 0.9);
                border-color: rgba(0, 102, 255, 0.2);
            }
            
            body.light-mode .info-card:hover {
                border-color: rgba(0, 102, 255, 0.5);
                box-shadow: 0 10px 30px rgba(0, 102, 255, 0.15);
            }
            
            /* Mobile responsive */
            @media (max-width: 640px) {
                .modern-profile {
                    padding: 1.5rem;
                }
                
                .profile-header {
                    flex-direction: column;
                    text-align: center;
                    gap: 1rem;
                }
                
                .info-cards {
                    grid-template-columns: 1fr;
                }
                
                .action-buttons {
                    flex-direction: column;
                }
            }
        `;
        modal.appendChild(styles);

        // Bind event handlers
        const changePasswordBtn = modal.querySelector('#changePasswordBtn');
        const signOutBtn = modal.querySelector('#signOutBtn');

        if (changePasswordBtn) {
            changePasswordBtn.addEventListener('click', () => {
                this.hideModal();
                this.showChangePasswordModal();
            });
        }

        if (signOutBtn) {
            signOutBtn.addEventListener('click', async () => {
                this.hideModal();
                await this.signOut();
            });
        }

        // Close dropdown if open
        const dropdown = document.querySelector('.user-dropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
        }
    }

    // Show change password modal
    showChangePasswordModal() {
        if (!this.isAuthenticated()) {
            this.showToast('Please sign in to change your password.', 'error');
            return;
        }

        const user = this.user;
        const isGoogleUser = user.app_metadata?.provider === 'google';

        if (isGoogleUser) {
            this.showToast('Google users cannot change password here. Please manage your password in your Google account.', 'error');
            return;
        }

        const modal = this.createModal('changePassword', 'Change Password', 'Enter your current password and new password', `
            <form class="auth-form" id="changePasswordForm">
                <div class="form-group">
                    <label for="currentPassword">Current Password</label>
                    <input type="password" id="currentPassword" class="auth-input" placeholder="Enter your current password" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <div class="form-group">
                    <label for="newPasswordChange">New Password</label>
                    <input type="password" id="newPasswordChange" class="auth-input" placeholder="Enter new password (min 6 characters)" required minlength="6">
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <div class="form-group">
                    <label for="confirmPasswordChange">Confirm New Password</label>
                    <input type="password" id="confirmPasswordChange" class="auth-input" placeholder="Confirm your new password" required>
                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                
                <button type="submit" class="auth-submit-btn">Update Password</button>
                
                <div id="changePasswordError" class="auth-error" style="display: none;"></div>
                <div id="changePasswordSuccess" class="auth-success" style="display: none;"></div>
            </form>
            
            <div class="auth-footer">
                <p><a href="#" id="backToProfileLink">← Back to Profile</a></p>
            </div>
        `);

        // Bind form submission
        const form = modal.querySelector('#changePasswordForm');
        form.addEventListener('submit', (e) => this.handleChangePassword(e));

        // Bind navigation links
        modal.querySelector('#backToProfileLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal();
            this.showProfileModal();
        });
    }

    // Handle change password form submission
    async handleChangePassword(e) {
        e.preventDefault();
        
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPasswordChange').value;
        const confirmPassword = document.getElementById('confirmPasswordChange').value;
        const submitBtn = e.target.querySelector('.auth-submit-btn');
        const errorDiv = document.getElementById('changePasswordError');
        const successDiv = document.getElementById('changePasswordSuccess');
        
        this.hideError(errorDiv);
        this.hideSuccess(successDiv);

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            this.showError(errorDiv, 'New passwords do not match');
            return;
        }

        // Validate password length
        if (newPassword.length < 6) {
            this.showError(errorDiv, 'New password must be at least 6 characters long');
            return;
        }

        this.setLoading(submitBtn, true);

        try {
            // First verify current password by signing in
            const { error: verifyError } = await window.supabaseClient.auth.signInWithPassword({
                email: this.user.email,
                password: currentPassword
            });

            if (verifyError) {
                this.showError(errorDiv, 'Current password is incorrect');
                return;
            }

            // Update password
            const { error } = await window.supabaseClient.auth.updateUser({
                password: newPassword
            });

            if (error) throw error;

            this.showSuccess(successDiv, 'Password updated successfully!');
            
            // Clear form after success
            setTimeout(() => {
                this.hideModal();
                this.showToast('Password changed successfully!', 'success');
            }, 2000);
            
        } catch (error) {
            console.error('Change password error:', error);
            this.showError(errorDiv, error.message);
        } finally {
            this.setLoading(submitBtn, false);
        }
    }

    // Public API
    isAuthenticated() {
        return !!this.user;
    }

    getUser() {
        return this.user;
    }
}

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.pdfrowAuth = new PDFrowAuth();
});

// Handle clicks outside user dropdown
document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('user-menu');
    const dropdown = document.querySelector('.user-dropdown');
    
    if (dropdown && userMenu && !userMenu.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});