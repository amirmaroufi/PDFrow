// hCaptcha Configuration for PDFrow
// Production configuration for spam protection

const HCAPTCHA_CONFIG = {
    // Production Site Key - Replace with your actual hCaptcha site key
    // Get your site key from: https://dashboard.hcaptcha.com/sites
    SITE_KEY: '0d1af27e-28de-4c60-8bce-5cb49414df58',
    
    // Secret Key - NEVER expose this in client-side code!
    // Keep the secret key secure on your server/backend only
    // SECRET_KEY should be stored in environment variables
    
    // hCaptcha API Configuration
    API_URL: 'https://js.hcaptcha.com/1/api.js',
    
    // Theme and appearance settings
    THEME: 'dark', // 'light' or 'dark'
    SIZE: 'normal', // 'normal', 'compact', or 'invisible'
    
    // Error messages
    MESSAGES: {
        REQUIRED: 'Please complete the captcha verification.',
        FAILED: 'Captcha verification failed. Please try again.',
        EXPIRED: 'Captcha has expired. Please complete it again.',
        NETWORK_ERROR: 'Network error. Please check your connection and try again.'
    }
};

// Initialize hCaptcha when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if hCaptcha script is loaded
    if (typeof hcaptcha === 'undefined') {
        console.warn('hCaptcha not loaded. Please check your internet connection.');
        return;
    }
    
    console.log('✅ hCaptcha initialized for production use');
});

// Utility functions for hCaptcha operations
window.HCaptchaUtils = {
    // Get response from hCaptcha widget
    getResponse: function(element = null) {
        if (typeof hcaptcha === 'undefined') {
            console.error('hCaptcha not loaded');
            return null;
        }
        return element ? hcaptcha.getResponse(element) : hcaptcha.getResponse();
    },
    
    // Reset hCaptcha widget
    reset: function(element = null) {
        if (typeof hcaptcha === 'undefined') {
            console.error('hCaptcha not loaded');
            return;
        }
        element ? hcaptcha.reset(element) : hcaptcha.reset();
    },
    
    // Check if hCaptcha is loaded and ready
    isReady: function() {
        return typeof hcaptcha !== 'undefined';
    },
    
    // Validate hCaptcha response
    validate: function(element = null) {
        const response = this.getResponse(element);
        if (!response) {
            return {
                valid: false,
                message: HCAPTCHA_CONFIG.MESSAGES.REQUIRED
            };
        }
        return {
            valid: true,
            response: response
        };
    }
};

/*
SETUP INSTRUCTIONS FOR PRODUCTION:

1. Register at hCaptcha:
   - Go to https://www.hcaptcha.com/
   - Click "Sign Up" and create an account
   - Verify your email address

2. Create a new site:
   - Go to https://dashboard.hcaptcha.com/sites
   - Click "New Site"
   - Enter your domain: pdfrow.com
   - Add additional domains if needed (www.pdfrow.com, localhost for testing)
   - Choose "I'm not a robot" Checkbox for the widget type
   - Click "Save"

3. Get your Site Key:
   - Copy the Site Key from the dashboard
   - Replace 'YOUR_PRODUCTION_SITE_KEY_HERE' above with your actual site key

4. Optional - Get Secret Key for server-side verification:
   - Go to https://dashboard.hcaptcha.com/settings
   - Copy your Secret Key (keep this secure on your server)
   - Use this for server-side validation with FormSubmit or your backend

5. Test your implementation:
   - Load your website with the new site key
   - Complete the captcha challenge
   - Verify that form submissions work correctly

Example Site Key format: 12345678-abcd-1234-abcd-123456789abc
*/