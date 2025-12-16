// hCaptcha Setup Helper Script
// Run this script after getting your production site key from hCaptcha

(function() {
    'use strict';
    
    console.log('🛡️ hCaptcha Setup Helper for PDFrow');
    console.log('=====================================');
    
    // Check if we're running with placeholder keys
    function checkHCaptchaSetup() {
        const hcaptchaElements = document.querySelectorAll('.h-captcha');
        let needsSetup = false;
        
        hcaptchaElements.forEach((element, index) => {
            const siteKey = element.getAttribute('data-sitekey');
            if (siteKey === 'YOUR_PRODUCTION_SITE_KEY_HERE') {
                needsSetup = true;
                console.warn(`⚠️  hCaptcha widget ${index + 1} still has placeholder site key`);
            } else {
                console.log(`✅ hCaptcha widget ${index + 1} has production site key: ${siteKey}`);
            }
        });
        
        if (needsSetup) {
            console.log('\n🚀 Setup Instructions:');
            console.log('1. Register at https://www.hcaptcha.com/');
            console.log('2. Go to https://dashboard.hcaptcha.com/sites');
            console.log('3. Click "New Site" and add your domain');
            console.log('4. Copy your Site Key');
            console.log('5. Replace all instances of "YOUR_PRODUCTION_SITE_KEY_HERE" with your actual site key in:');
            console.log('   - index.html (contact form)');
            console.log('   - modern-auth.js (signup form)');
            console.log('   - hcaptcha-config.js (configuration file)');
            console.log('   - test files (if you want to test with production key)');
        } else {
            console.log('✅ All hCaptcha widgets are configured with production keys!');
        }
        
        return !needsSetup;
    }
    
    // Check if hCaptcha script is loaded
    function checkHCaptchaScript() {
        if (typeof hcaptcha !== 'undefined') {
            console.log('✅ hCaptcha script is loaded and ready');
            return true;
        } else {
            console.error('❌ hCaptcha script not loaded. Check your internet connection.');
            return false;
        }
    }
    
    // Test hCaptcha functionality
    function testHCaptchaFunctionality() {
        if (!checkHCaptchaScript()) return false;
        
        const hcaptchaElements = document.querySelectorAll('.h-captcha');
        if (hcaptchaElements.length === 0) {
            console.warn('⚠️  No hCaptcha widgets found on this page');
            return false;
        }
        
        console.log(`📊 Found ${hcaptchaElements.length} hCaptcha widget(s) on this page`);
        
        // Test utility functions
        if (window.HCaptchaUtils) {
            console.log('✅ HCaptchaUtils helper functions are available');
            console.log('   - getResponse(), reset(), isReady(), validate()');
        } else {
            console.warn('⚠️  HCaptchaUtils not found. Using direct hCaptcha API.');
        }
        
        return true;
    }
    
    // Main setup check
    function runSetupCheck() {
        console.log('\n🔍 Running hCaptcha Setup Check...\n');
        
        const scriptLoaded = checkHCaptchaScript();
        const keysConfigured = checkHCaptchaSetup();
        const functionalityOK = testHCaptchaFunctionality();
        
        console.log('\n📊 Setup Status:');
        console.log(`hCaptcha Script: ${scriptLoaded ? '✅ Loaded' : '❌ Not loaded'}`);
        console.log(`Site Keys: ${keysConfigured ? '✅ Configured' : '⚠️  Needs setup'}`);
        console.log(`Functionality: ${functionalityOK ? '✅ Ready' : '⚠️  Needs attention'}`);
        
        if (scriptLoaded && keysConfigured && functionalityOK) {
            console.log('\n🎉 hCaptcha is fully configured and ready to use!');
        } else {
            console.log('\n⚠️  hCaptcha setup is incomplete. Please follow the setup instructions above.');
        }
    }
    
    // Run check when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(runSetupCheck, 1000); // Wait for hCaptcha to load
        });
    } else {
        setTimeout(runSetupCheck, 1000);
    }
    
    // Export setup checker for manual use
    window.checkHCaptchaSetup = runSetupCheck;
    
})();

// Instructions for manual testing:
// Open browser console and run: checkHCaptchaSetup();