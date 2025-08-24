// Support Modal Controller
class SupportManager {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.loadStoredData();
    }

    initializeElements() {
        // Button and modal elements
        this.supportBtn = document.getElementById('supportBtn');
        this.supportModal = document.getElementById('supportModal');
        this.supportCloseBtn = document.getElementById('supportCloseBtn');
        
        // Form inputs
        this.paypalEmail = document.getElementById('paypalEmail');
        this.patreonUrl = document.getElementById('patreonUrl');
        
        // Donate buttons
        this.paypalDonateBtn = document.getElementById('paypalDonateBtn');
        this.patreonSupportBtn = document.getElementById('patreonSupportBtn');
    }

    bindEvents() {
        // Modal controls
        if (this.supportBtn) {
            this.supportBtn.addEventListener('click', () => this.showSupportModal());
        }
        if (this.supportCloseBtn) {
            this.supportCloseBtn.addEventListener('click', () => this.hideSupportModal());
        }

        // Overlay click to close
        if (this.supportModal) {
            const overlay = this.supportModal.querySelector('.modal-overlay');
            if (overlay) {
                overlay.addEventListener('click', () => this.hideSupportModal());
            }
        }

        // Input validation
        if (this.paypalEmail) {
            this.paypalEmail.addEventListener('input', () => this.validatePayPalEmail());
            this.paypalEmail.addEventListener('blur', () => this.savePayPalEmail());
        }
        if (this.patreonUrl) {
            this.patreonUrl.addEventListener('input', () => this.validatePatreonUrl());
            this.patreonUrl.addEventListener('blur', () => this.savePatreonUrl());
        }

        // Donation buttons
        if (this.paypalDonateBtn) {
            this.paypalDonateBtn.addEventListener('click', () => this.handlePayPalDonation());
        }
        if (this.patreonSupportBtn) {
            this.patreonSupportBtn.addEventListener('click', () => this.handlePatreonSupport());
        }

        // ESC key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isModalOpen()) {
                this.hideSupportModal();
            }
        });
    }

    showSupportModal() {
        if (this.supportModal) {
            this.supportModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Focus first input if empty
            setTimeout(() => {
                if (this.paypalEmail && !this.paypalEmail.value) {
                    this.paypalEmail.focus();
                } else if (this.patreonUrl && !this.patreonUrl.value) {
                    this.patreonUrl.focus();
                }
            }, 100);
        }
    }

    hideSupportModal() {
        if (this.supportModal) {
            this.supportModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    isModalOpen() {
        return this.supportModal && this.supportModal.style.display === 'flex';
    }

    validatePayPalEmail() {
        if (!this.paypalEmail) return false;
        
        const email = this.paypalEmail.value.trim();
        const isValid = this.isValidEmail(email);
        
        if (this.paypalDonateBtn) {
            this.paypalDonateBtn.disabled = !isValid;
        }
        
        return isValid;
    }

    validatePatreonUrl() {
        if (!this.patreonUrl) return false;
        
        const url = this.patreonUrl.value.trim();
        const isValid = this.isValidPatreonUrl(url);
        
        if (this.patreonSupportBtn) {
            this.patreonSupportBtn.disabled = !isValid;
        }
        
        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPatreonUrl(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname === 'patreon.com' || urlObj.hostname === 'www.patreon.com';
        } catch {
            return false;
        }
    }

    handlePayPalDonation() {
        const email = this.paypalEmail.value.trim();
        if (!this.isValidEmail(email)) {
            this.showError('Please enter a valid PayPal email address.');
            return;
        }

        // Create PayPal donation URL
        const donationUrl = `https://paypal.me/pdfrow`;
        
        // Open PayPal in new tab
        window.open(donationUrl, '_blank', 'noopener,noreferrer');
        
        // Show thank you message
        this.showSuccess('Thank you for your support! Redirecting to PayPal...');
        
        // Optional: Track donation attempt
        this.trackSupportAttempt('paypal', email);
    }

    handlePatreonSupport() {
        const url = this.patreonUrl.value.trim();
        if (!this.isValidPatreonUrl(url)) {
            this.showError('Please enter a valid Patreon URL.');
            return;
        }

        // Open Patreon in new tab
        window.open(url, '_blank', 'noopener,noreferrer');
        
        // Show thank you message
        this.showSuccess('Thank you for your support! Redirecting to Patreon...');
        
        // Optional: Track support attempt
        this.trackSupportAttempt('patreon', url);
    }

    savePayPalEmail() {
        const email = this.paypalEmail.value.trim();
        if (this.isValidEmail(email)) {
            localStorage.setItem('pdfrow_paypal_email', email);
        }
    }

    savePatreonUrl() {
        const url = this.patreonUrl.value.trim();
        if (this.isValidPatreonUrl(url)) {
            localStorage.setItem('pdfrow_patreon_url', url);
        }
    }

    loadStoredData() {
        // Load saved PayPal email
        const savedPayPalEmail = localStorage.getItem('pdfrow_paypal_email');
        if (savedPayPalEmail && this.paypalEmail) {
            this.paypalEmail.value = savedPayPalEmail;
            this.validatePayPalEmail();
        }

        // Load saved Patreon URL
        const savedPatreonUrl = localStorage.getItem('pdfrow_patreon_url');
        if (savedPatreonUrl && this.patreonUrl) {
            this.patreonUrl.value = savedPatreonUrl;
            this.validatePatreonUrl();
        }
    }

    trackSupportAttempt(platform, identifier) {
        // Optional: Send analytics or tracking data
        console.log(`Support attempt: ${platform} - ${identifier}`);
        
        // You can add analytics tracking here if needed
        // Example: gtag('event', 'support_attempt', { platform: platform });
    }

    showSuccess(message) {
        this.showToast(message, 'success');
    }

    showError(message) {
        this.showToast(message, 'error');
    }

    showToast(message, type) {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll('.support-toast');
        existingToasts.forEach(toast => toast.remove());

        const toast = document.createElement('div');
        toast.className = `toast support-toast toast-${type}`;
        toast.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Toast notification icon">
                ${type === 'success' ? 
                    '<polyline points="20,6 9,17 4,12"/>' : 
                    '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                }
            </svg>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        // Auto-remove after 4 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 4000);
    }

    // Utility method to set PayPal and Patreon info programmatically
    setSupportInfo(paypalEmail = '', patreonUrl = '') {
        if (paypalEmail && this.paypalEmail) {
            this.paypalEmail.value = paypalEmail;
            this.validatePayPalEmail();
            this.savePayPalEmail();
        }
        
        if (patreonUrl && this.patreonUrl) {
            this.patreonUrl.value = patreonUrl;
            this.validatePatreonUrl();
            this.savePatreonUrl();
        }
    }
}

// Initialize support manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.supportManager = new SupportManager();
    
    // Example: Uncomment and modify these lines to set your support info
    window.supportManager.setSupportInfo(
        'pdfrow@paypal.me',
        'https://patreon.com/PDFrow'
    );
});