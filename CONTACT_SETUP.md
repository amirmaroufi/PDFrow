# PDFrow Contact Form Setup Guide

This guide provides complete setup instructions for connecting your PDFrow contact form to email delivery using two different approaches.

## 📋 Overview

Your contact form has been updated with:
- ✅ Required fields: `name`, `email`, `message`
- ✅ Spam protection with honeypot field
- ✅ File attachment support
- ✅ Success/error messages
- ✅ Form validation
- ✅ Multi-language support

## 🚀 Option 1: FormSubmit.co (Serverless - RECOMMENDED)

### Setup Steps

1. **Email Verification**: 
   - Submit a test form from your live website
   - FormSubmit.co will send a verification email to `contact@pdfrow.com`
   - Click the confirmation link to activate the endpoint

2. **Form Configuration** (Already Done):
   ```html
   <form id="contact-form" action="https://formsubmit.co/contact@pdfrow.com" method="POST">
       <!-- Hidden fields for configuration -->
       <input type="hidden" name="_next" value="https://pdfrow.com">
       <input type="hidden" name="_subject" value="New Contact Form Submission - PDFrow">
       <input type="hidden" name="_captcha" value="false">
       <input type="hidden" name="_template" value="table">
       <input type="text" name="_honey" style="display:none"> <!-- Spam protection -->
   ```

3. **Features Included**:
   - ✅ Custom email templates
   - ✅ Spam protection
   - ✅ File attachments
   - ✅ Redirect after submission
   - ✅ No backend required

### FormSubmit.co Advanced Options

You can customize the form by adding these hidden fields:

```html
<!-- Redirect to custom thank you page -->
<input type="hidden" name="_next" value="https://pdfrow.com/thank-you.html">

<!-- Custom subject line -->
<input type="hidden" name="_subject" value="New PDFrow Contact: ">

<!-- Auto-reply to user -->
<input type="hidden" name="_autoresponse" value="Thank you for contacting PDFrow! We'll get back to you soon.">

<!-- CC additional emails -->
<input type="hidden" name="_cc" value="support@pdfrow.com,admin@pdfrow.com">
```

## 🖥️ Option 2: Node.js Backend with Nodemailer

### Prerequisites

- Node.js 16+ installed
- Email account with SMTP access (Gmail, Outlook, etc.)

### Setup Steps

1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Environment Configuration**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   PORT=3000
   FRONTEND_URL=https://pdfrow.com
   
   # Gmail Configuration (Recommended)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   CONTACT_EMAIL=contact@pdfrow.com
   ```

3. **Gmail App Password Setup** (if using Gmail):
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use the App Password in `SMTP_PASS`

4. **Start the Server**:
   ```bash
   npm run dev  # Development
   npm start    # Production
   ```

5. **Update Frontend Code**:
   - Replace the `handleContactFormSubmission` function in `script.js`
   - Use the code from `contact-backend.js`
   - Update the form action to point to your backend:
   ```html
   <form id="contact-form" action="/api/contact" method="POST">
   ```

### Backend Features

- ✅ Rate limiting (5 requests per 15 minutes per IP)
- ✅ File upload validation and size limits
- ✅ Email templates with styling
- ✅ Auto-reply to users
- ✅ Input validation and sanitization
- ✅ Security headers with Helmet
- ✅ CORS protection
- ✅ Error handling

## 📧 Email Providers

### Gmail Setup
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
```

### Outlook/Hotmail Setup
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Custom Domain Email
```env
SMTP_HOST=mail.pdfrow.com
SMTP_PORT=587
SMTP_USER=contact@pdfrow.com
SMTP_PASS=your-email-password
```

## 🔧 Testing

### Test FormSubmit.co
1. Deploy your website with the updated form
2. Submit a test message
3. Check `contact@pdfrow.com` for the verification email
4. Click the confirmation link
5. Submit another test to verify it works

### Test Node.js Backend
```bash
# Health check
curl http://localhost:3000/health

# Test contact endpoint
curl -X POST http://localhost:3000/api/contact \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "subject=question" \
  -F "message=This is a test message"
```

## 🔐 Security Features

### Spam Protection
- Honeypot field (`_honey`) - hidden input that bots fill but humans don't
- Rate limiting on backend option
- Input validation and sanitization
- Email validation

### File Upload Security
- File type restrictions (.pdf, .jpg, .png, .txt, .doc, .docx)
- File size limits (10MB max)
- Virus scanning (recommended for production)

## 🚨 Troubleshooting

### Common Issues

1. **FormSubmit.co emails not arriving**:
   - Check spam folder
   - Verify email confirmation was completed
   - Test with a simple form first

2. **Gmail authentication errors**:
   - Ensure 2FA is enabled
   - Use App Password, not regular password
   - Check "Less secure app access" is disabled

3. **File uploads not working**:
   - Check file size (10MB limit)
   - Verify file type is allowed
   - Test without attachments first

4. **CORS errors**:
   - Update `FRONTEND_URL` in backend `.env`
   - Check domain spelling

### Debug Mode

For the backend option, add this to see detailed logs:
```env
NODE_ENV=development
DEBUG=*
```

## 🌐 Deployment

### FormSubmit.co
- No deployment needed - works immediately after verification

### Backend Deployment Options

1. **Heroku**:
   ```bash
   heroku create pdfrow-contact-api
   heroku config:set SMTP_USER=your-email@gmail.com
   heroku config:set SMTP_PASS=your-app-password
   git push heroku main
   ```

2. **Vercel**:
   ```bash
   vercel --prod
   ```

3. **DigitalOcean/VPS**:
   ```bash
   pm2 start server.js --name "pdfrow-contact"
   ```

## ✅ Verification Checklist

- [ ] Form includes all required fields (name, email, message)
- [ ] Spam protection is active
- [ ] File attachments work (optional)
- [ ] Success/error messages display properly
- [ ] Email delivery is working
- [ ] Auto-reply is sent (backend option)
- [ ] Form validation prevents empty submissions
- [ ] Mobile responsiveness maintained

## 📞 Support

If you need help with setup:
1. Check the troubleshooting section above
2. Test with simple examples first
3. Verify all credentials and endpoints
4. Check browser console for JavaScript errors

## 🔄 Switching Between Options

### From FormSubmit.co to Backend:
1. Set up the backend server
2. Update form action attribute
3. Replace JavaScript handler function
4. Test thoroughly

### From Backend to FormSubmit.co:
1. Revert form action to FormSubmit.co URL
2. Restore original JavaScript handler
3. Complete email verification
4. Remove backend server

Choose FormSubmit.co for simplicity, or the Node.js backend for more control and features.