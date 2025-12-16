/**
 * GDPR Cookie Consent Banner
 * Manages cookie consent preferences with localStorage
 * Supports dark/light theme from PDFrow design system
 */

(function() {
    'use strict';

    // Configuration
    const STORAGE_KEY = 'pdfrow_cookie_consent';
    const CONSENT_TYPES = {
        ACCEPTED: 'accepted',
        NECESSARY_ONLY: 'necessary_only',
        DECLINED: 'declined'
    };

    /**
     * Initialize the cookie consent banner
     */
    function initCookieBanner() {
        const banner = document.getElementById('cookieConsentBanner');

        if (!banner) {
            console.warn('Cookie consent banner element not found');
            return;
        }

        // Check if user has already made a choice
        const existingConsent = getConsentStatus();

        if (existingConsent) {
            // User has already made a choice, don't show the banner
            banner.classList.add('hidden');
            applyConsent(existingConsent);
            return;
        }

        // Show the banner with a slight delay for better UX
        setTimeout(() => {
            banner.style.display = 'block';
        }, 1000);

        // Attach event listeners to buttons
        attachEventListeners();
    }

    /**
     * Attach click event listeners to consent buttons
     */
    function attachEventListeners() {
        const acceptAllBtn = document.getElementById('cookieAcceptAll');
        const necessaryOnlyBtn = document.getElementById('cookieNecessaryOnly');
        const learnMoreBtn = document.getElementById('cookieLearnMore');

        if (acceptAllBtn) {
            acceptAllBtn.addEventListener('click', () => {
                handleConsent(CONSENT_TYPES.ACCEPTED);
            });
        }

        if (necessaryOnlyBtn) {
            necessaryOnlyBtn.addEventListener('click', () => {
                handleConsent(CONSENT_TYPES.NECESSARY_ONLY);
            });
        }

        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => {
                // Redirect to privacy policy page
                window.location.href = '/privacy-policy.html';
            });
        }
    }

    /**
     * Handle user consent choice
     * @param {string} consentType - Type of consent given
     */
    function handleConsent(consentType) {
        // Save consent to localStorage
        saveConsentStatus(consentType);

        // Apply the consent (enable/disable analytics, etc.)
        applyConsent(consentType);

        // Hide the banner with animation
        hideBanner();

        // Log consent for debugging (remove in production if needed)
        console.log(`Cookie consent: ${consentType}`);
    }

    /**
     * Save consent status to localStorage
     * @param {string} consentType - Type of consent
     */
    function saveConsentStatus(consentType) {
        const consentData = {
            type: consentType,
            timestamp: new Date().toISOString(),
            version: '1.0' // Useful if you update your privacy policy
        };

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
        } catch (error) {
            console.error('Failed to save cookie consent:', error);
        }
    }

    /**
     * Get consent status from localStorage
     * @returns {string|null} Consent type or null if not set
     */
    function getConsentStatus() {
        try {
            const consentData = localStorage.getItem(STORAGE_KEY);

            if (!consentData) {
                return null;
            }

            const parsed = JSON.parse(consentData);
            return parsed.type || null;
        } catch (error) {
            console.error('Failed to retrieve cookie consent:', error);
            return null;
        }
    }

    /**
     * Apply consent settings (enable/disable tracking scripts)
     * @param {string} consentType - Type of consent
     */
    function applyConsent(consentType) {
        if (consentType === CONSENT_TYPES.ACCEPTED) {
            // Enable all cookies and tracking
            enableAnalytics();
            enableMarketing();
            enableFunctional();
        } else if (consentType === CONSENT_TYPES.NECESSARY_ONLY) {
            // Only enable necessary cookies
            disableAnalytics();
            disableMarketing();
            disableFunctional();
        }
    }

    /**
     * Hide the banner with smooth animation
     */
    function hideBanner() {
        const banner = document.getElementById('cookieConsentBanner');

        if (banner) {
            banner.style.animation = 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

            // Add slideDown animation
            if (!document.querySelector('#cookieAnimationStyle')) {
                const style = document.createElement('style');
                style.id = 'cookieAnimationStyle';
                style.textContent = `
                    @keyframes slideDown {
                        from {
                            transform: translateY(0);
                            opacity: 1;
                        }
                        to {
                            transform: translateY(100%);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            setTimeout(() => {
                banner.style.display = 'none';
                banner.classList.add('hidden');
            }, 400);
        }
    }

    // ========== Analytics & Tracking Functions ==========
    // Customize these based on your actual tracking implementation

    /**
     * Enable analytics tracking (Google Analytics, etc.)
     */
    function enableAnalytics() {
        // Example: Initialize Google Analytics
        // window.gtag('consent', 'update', {
        //     'analytics_storage': 'granted'
        // });

        console.log('Analytics enabled');
    }

    /**
     * Disable analytics tracking
     */
    function disableAnalytics() {
        // Example: Disable Google Analytics
        // window.gtag('consent', 'update', {
        //     'analytics_storage': 'denied'
        // });

        console.log('Analytics disabled');
    }

    /**
     * Enable marketing cookies
     */
    function enableMarketing() {
        // Example: Enable marketing pixels (Facebook, etc.)
        console.log('Marketing cookies enabled');
    }

    /**
     * Disable marketing cookies
     */
    function disableMarketing() {
        console.log('Marketing cookies disabled');
    }

    /**
     * Enable functional cookies
     */
    function enableFunctional() {
        console.log('Functional cookies enabled');
    }

    /**
     * Disable functional cookies
     */
    function disableFunctional() {
        console.log('Functional cookies disabled');
    }

    // ========== Public API ==========

    /**
     * Reset consent (useful for testing or user preference changes)
     */
    window.resetCookieConsent = function() {
        try {
            localStorage.removeItem(STORAGE_KEY);
            console.log('Cookie consent reset');
            location.reload();
        } catch (error) {
            console.error('Failed to reset cookie consent:', error);
        }
    };

    /**
     * Get current consent status
     */
    window.getCookieConsent = function() {
        return getConsentStatus();
    };

    // ========== Initialize on DOM Ready ==========

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
        initCookieBanner();
    }

})();
