# Support Setup Guide

This guide explains how to configure your PayPal and Patreon support options for PDFrow.

## Quick Setup

### Method 1: Browser Console (Recommended)
1. Open your PDFrow website in a browser
2. Open Developer Tools (F12)
3. Go to the Console tab
4. Run this command with your details:

```javascript
supportManager.setSupportInfo(
    'your-paypal@email.com',           // Your PayPal email
    'https://patreon.com/your-username' // Your Patreon URL
);
```

### Method 2: Edit support.js File
1. Open `support.js` in a text editor
2. Find the commented lines at the bottom:
```javascript
// window.supportManager.setSupportInfo(
//     'your-paypal@email.com',
//     'https://patreon.com/your-username'
// );
```
3. Uncomment and update with your details:
```javascript
window.supportManager.setSupportInfo(
    'your-paypal@email.com',
    'https://patreon.com/your-username'
);
```

## PayPal Setup

### What You Need:
- Your PayPal email address (the one linked to your PayPal account)
- Optional: PayPal donation button ID for custom donation amounts

### Steps:
1. Make sure you have a PayPal account
2. Use your PayPal email address in the configuration
3. The system will generate donation links automatically

### Advanced PayPal Setup (Optional):
If you want custom donation amounts, create a PayPal donation button:
1. Log into PayPal
2. Go to PayPal Buttons & Tools
3. Create a "Donate" button
4. Copy the button ID
5. Update line 106 in `support.js`:
```javascript
const donationUrl = `https://www.paypal.com/donate/?hosted_button_id=YOUR_ACTUAL_BUTTON_ID&business=${encodeURIComponent(email)}`;
```

## Patreon Setup

### What You Need:
- A Patreon account
- Your Patreon page URL

### Steps:
1. Create a Patreon account at patreon.com
2. Set up your creator page
3. Copy your Patreon URL (e.g., https://patreon.com/yourusername)
4. Use this URL in the configuration

## Features

✅ **Smart Validation**
- Email format validation for PayPal
- URL validation for Patreon
- Real-time button enabling/disabling

✅ **User Experience**
- Remembers entered information
- Opens donation pages in new tabs
- Success/error notifications
- Mobile-responsive design

✅ **Security**
- No sensitive data stored
- Client-side validation only
- Secure external redirects

## Testing

1. Click the "Support Us ❤️" button in the navigation
2. Enter your PayPal email and Patreon URL
3. Test both donation buttons
4. Verify they open the correct pages

## Customization

### Changing Button Colors
Edit `styles.css` around line 2843:
```css
.support-btn {
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
    /* Change colors here */
}
```

### Changing Button Text
Edit `index.html` line 27:
```html
<button class="support-btn" id="supportBtn">Support Us ❤️</button>
```

### Adding More Payment Options
1. Add new HTML in the `support-options` div
2. Add corresponding CSS styles
3. Add JavaScript handlers in `support.js`

## Troubleshooting

**Button appears disabled:**
- Check that you've entered valid email/URL
- Email must be properly formatted
- Patreon URL must start with https://patreon.com/

**Links don't work:**
- Verify your PayPal email is correct
- Ensure your Patreon page is public
- Check browser console for errors

**Button doesn't show:**
- Ensure support.js is loaded
- Check that all IDs match between HTML and JavaScript
- Verify CSS is not hiding the button

## Examples

### PayPal Examples:
- ✅ john@example.com
- ✅ creator.name@gmail.com
- ❌ invalid-email

### Patreon Examples:
- ✅ https://patreon.com/johndoe
- ✅ https://www.patreon.com/creator_name
- ❌ https://someothersite.com/john

## Support

The support button will automatically:
1. Store entered information locally
2. Validate input in real-time
3. Open donation pages in new tabs
4. Show success/error messages
5. Work on all devices

Your users can now easily support PDFrow with just a few clicks! 🎉