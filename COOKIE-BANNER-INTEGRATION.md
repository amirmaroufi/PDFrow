# GDPR Cookie Consent Banner - Integration Guide

## 📋 Overview
Complete GDPR/CCPA compliant cookie consent banner that matches the PDFrow design system with dark/light theme support.

## ✨ Features
- ✅ Fixed bottom position with smooth animations
- ✅ Dark/light theme support using existing CSS variables
- ✅ Three action buttons: "Accept All", "Necessary Only", "Learn More"
- ✅ LocalStorage persistence - shows only once
- ✅ Responsive design (mobile-friendly)
- ✅ GDPR/CCPA compliant
- ✅ Accessibility features (keyboard navigation, focus states)
- ✅ Matches PDFrow violet/teal design system

## 🚀 Quick Integration

### Step 1: Add CSS to your HTML files
Add this line in the `<head>` section of your HTML files (after your existing stylesheets):

```html
<link rel="stylesheet" href="cookie-banner.css">
```

**Example placement in index.html:**
```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="auth.css">
<link rel="stylesheet" href="index-custom.min.css">
<link rel="stylesheet" href="cookie-banner.css">  <!-- Add this line -->
```

### Step 2: Add HTML Banner
Add this code **before the closing `</body>` tag** in your HTML files:

```html
<!-- GDPR Cookie Consent Banner -->
<div id="cookieConsentBanner" class="cookie-consent-banner" style="display: none;">
    <div class="cookie-consent-container">
        <div class="cookie-consent-content">
            <div class="cookie-consent-text">
                <h3 class="cookie-consent-title">We value your privacy</h3>
                <p class="cookie-consent-description">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                    By clicking "Accept All", you consent to our use of cookies.
                </p>
            </div>
            <div class="cookie-consent-actions">
                <button id="cookieNecessaryOnly" class="cookie-btn cookie-btn-secondary">
                    Necessary Only
                </button>
                <button id="cookieLearnMore" class="cookie-btn cookie-btn-tertiary">
                    Learn More
                </button>
                <button id="cookieAcceptAll" class="cookie-btn cookie-btn-primary">
                    Accept All
                </button>
            </div>
        </div>
    </div>
</div>
```

### Step 3: Add JavaScript
Add this line **before the closing `</body>` tag** (after the HTML banner):

```html
<script src="cookie-banner.js"></script>
```

**Complete example:**
```html
    <!-- Other content -->

    <!-- GDPR Cookie Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner" style="display: none;">
        <!-- ... banner HTML ... -->
    </div>

    <script src="cookie-banner.js"></script>
</body>
</html>
```

## 📱 Responsive Behavior

- **Desktop**: Horizontal layout with buttons aligned to the right
- **Tablet (≤768px)**: Stacked layout with full-width buttons
- **Mobile (≤480px)**: Compact spacing with optimized font sizes

## 🎨 Theme Support

The banner automatically adapts to your dark/light theme toggle:

- **Dark Mode** (default): Uses `--card-bg`, `--text-primary`, violet gradients
- **Light Mode**: Uses lighter backgrounds, maintains violet/teal accents

## 💾 Data Storage

Cookie consent is stored in `localStorage` with the following structure:

```json
{
  "type": "accepted|necessary_only|declined",
  "timestamp": "2025-01-11T10:30:00.000Z",
  "version": "1.0"
}
```

**Storage Key:** `pdfrow_cookie_consent`

## ⚙️ Customization

### Change the text
Edit the HTML content in the banner:

```html
<h3 class="cookie-consent-title">Your custom title</h3>
<p class="cookie-consent-description">Your custom description</p>
```

### Change button labels
```html
<button id="cookieAcceptAll" class="cookie-btn cookie-btn-primary">
    Your Custom Text
</button>
```

### Modify colors
The banner uses your existing CSS variables. To customize specific elements:

```css
/* In cookie-banner.css */
.cookie-consent-banner {
    background: var(--card-bg);  /* Change background */
    border-top: 2px solid var(--accent-primary);  /* Add colored border */
}
```

### Change animation timing
```css
.cookie-consent-banner {
    animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);  /* Slower animation */
}
```

### Adjust initial delay
```javascript
// In cookie-banner.js, line ~42
setTimeout(() => {
    banner.style.display = 'block';
}, 2000);  // Change from 1000ms to 2000ms
```

## 🔧 JavaScript API

The banner exposes two utility functions:

### Reset consent (for testing)
```javascript
window.resetCookieConsent();
// Clears localStorage and reloads the page to show banner again
```

### Get current consent status
```javascript
const consent = window.getCookieConsent();
// Returns: 'accepted', 'necessary_only', or null
```

## 🔌 Analytics Integration

### Google Analytics (GA4)
Modify the `enableAnalytics()` and `disableAnalytics()` functions:

```javascript
function enableAnalytics() {
    window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
}

function disableAnalytics() {
    window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
    });
}
```

### Facebook Pixel
```javascript
function enableMarketing() {
    fbq('consent', 'grant');
}

function disableMarketing() {
    fbq('consent', 'revoke');
}
```

### Custom tracking
Add your tracking scripts in the respective functions in `cookie-banner.js`:
- `enableAnalytics()` - Google Analytics, Plausible, etc.
- `enableMarketing()` - Facebook Pixel, Google Ads, etc.
- `enableFunctional()` - Chat widgets, preferences, etc.

## 📋 GDPR/CCPA Compliance

### GDPR Requirements ✅
- ✅ **Clear information**: Explains what cookies are used for
- ✅ **Granular consent**: Separate "Accept All" and "Necessary Only" options
- ✅ **Easy to decline**: "Necessary Only" button is clearly visible
- ✅ **Access to policy**: "Learn More" links to privacy policy
- ✅ **Consent storage**: Records timestamp and version
- ✅ **Pre-consent blocking**: Analytics disabled until user accepts

### CCPA Requirements ✅
- ✅ **Notice at collection**: Banner displays on first visit
- ✅ **Opt-out mechanism**: "Necessary Only" provides opt-out
- ✅ **Privacy policy link**: "Learn More" redirects to privacy policy
- ✅ **Do Not Sell**: Can be configured to respect DNT headers

### Additional Compliance Tips

1. **Update your Privacy Policy** to list all cookies used
2. **Cookie duration**: Document how long each cookie lasts
3. **Third-party cookies**: List any third-party services (Google Analytics, etc.)
4. **Right to withdraw**: Users can call `window.resetCookieConsent()` to change their choice

## 🧪 Testing

### Test the banner appearance:
1. Open your website
2. The banner should appear after 1 second
3. Click "Accept All" - banner should disappear
4. Refresh page - banner should NOT appear (consent stored)

### Test localStorage:
```javascript
// In browser console
localStorage.getItem('pdfrow_cookie_consent')
// Should show: {"type":"accepted","timestamp":"...","version":"1.0"}
```

### Test reset:
```javascript
// In browser console
window.resetCookieConsent()
// Page reloads, banner appears again
```

### Test responsive design:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test at different breakpoints: 1920px, 768px, 480px, 375px

## 🐛 Troubleshooting

### Banner doesn't appear
- Check browser console for errors
- Verify all 3 files are loaded (CSS, HTML, JS)
- Clear localStorage: `localStorage.removeItem('pdfrow_cookie_consent')`

### Styling looks wrong
- Make sure `cookie-banner.css` loads AFTER `styles.css`
- Check that CSS variables are defined in `styles.css`
- Inspect element and verify CSS is applied

### Buttons don't work
- Check that button IDs match: `cookieAcceptAll`, `cookieNecessaryOnly`, `cookieLearnMore`
- Verify `cookie-banner.js` is loaded
- Check browser console for JavaScript errors

### Theme doesn't switch
- Ensure your body element toggles the `light-mode` class
- Verify CSS variables are defined for both themes in `styles.css`

## 🎯 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ✅ Requires localStorage support

## 📝 License & Usage

These files are created specifically for PDFrow and follow your existing design system. You're free to modify them as needed.

## 🔄 Version History

- **v1.0** (2025-01-11): Initial release with GDPR/CCPA compliance

---

## Quick Copy-Paste for index.html

Add to `<head>`:
```html
<link rel="stylesheet" href="cookie-banner.css">
```

Add before `</body>`:
```html
<!-- GDPR Cookie Consent Banner -->
<div id="cookieConsentBanner" class="cookie-consent-banner" style="display: none;">
    <div class="cookie-consent-container">
        <div class="cookie-consent-content">
            <div class="cookie-consent-text">
                <h3 class="cookie-consent-title">We value your privacy</h3>
                <p class="cookie-consent-description">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                    By clicking "Accept All", you consent to our use of cookies.
                </p>
            </div>
            <div class="cookie-consent-actions">
                <button id="cookieNecessaryOnly" class="cookie-btn cookie-btn-secondary">
                    Necessary Only
                </button>
                <button id="cookieLearnMore" class="cookie-btn cookie-btn-tertiary">
                    Learn More
                </button>
                <button id="cookieAcceptAll" class="cookie-btn cookie-btn-primary">
                    Accept All
                </button>
            </div>
        </div>
    </div>
</div>

<script src="cookie-banner.js"></script>
```

Need help? Check the troubleshooting section above or inspect the code comments in each file.
