# Supabase Authentication Setup for PDFrow

## Quick Setup (5 minutes)

### Step 1: Create Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up with GitHub or email
4. Click "New project"
5. Choose organization and create project
6. Wait for setup to complete (~2 minutes)

### Step 2: Get Your Credentials
1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy these two values:
   - **Project URL** (starts with `https://`)
   - **anon public key** (long string starting with `eyJ`)

### Step 3: Configuration ✅ COMPLETED
Your Supabase configuration is already set up with your real credentials:

**Project URL:** `https://amnbtpnuqpqlngjfybgw.supabase.co`  
**Public Key:** Already configured in `supabase-config.js`  
**Status:** Ready to use! 🚀

### Step 4: Configure Authentication Settings ⚠️ IMPORTANT
1. In Supabase dashboard, go to **Authentication** > **Settings**
2. Under **Site URL**, add your domain:
   - For local development: `http://localhost:8080`
   - For production: `https://yourdomain.com`
3. Under **Redirect URLs**, add:
   - For local: `http://localhost:8080`
   - For production: `https://yourdomain.com`
   
**Note:** The system automatically handles multiple password reset URL patterns from Supabase emails.

### Step 5: Enable Email Templates (Optional)
1. Go to **Authentication** > **Email Templates**
2. Customize the default templates for:
   - Confirm signup
   - Reset password
   - Email change confirmation

### Step 6: Configure Google OAuth ✅ READY
Google OAuth is already implemented in your auth system!

**To enable Google OAuth:**
1. Follow the detailed setup guide in `GOOGLE_OAUTH_SETUP.md`
2. Create Google OAuth credentials in Google Cloud Console
3. Enable Google provider in your Supabase dashboard
4. Add your Google Client ID and Secret to Supabase

**Your Supabase redirect URI for Google:**
```
https://amnbtpnuqpqlngjfybgw.supabase.co/auth/v1/callback
```

**Features included:**
- ✅ "Continue with Google" buttons in login/signup modals
- ✅ Google profile picture display in user avatar
- ✅ Personalized welcome messages for Google users
- ✅ Automatic email verification (Google accounts are pre-verified)
- ✅ Enhanced error handling for Google OAuth issues

### Step 7: Test Authentication
1. Open `index.html` in your browser
2. Click "Sign Up" to create a test account
3. Check your email for verification link
4. Try logging in with your credentials
5. Test password reset functionality

## Features Included

✅ **User Registration** - Sign up with email and password  
✅ **Email Verification** - Automatic email verification  
✅ **User Login/Logout** - Secure authentication  
✅ **Password Reset** - Email-based password recovery (FIXED - works with Supabase emails)  
✅ **Google OAuth** - Sign in with Google (if configured)  
✅ **User Profile** - Complete profile modal with user info and actions  
✅ **Change Password** - Secure password change for email users  
✅ **Session Management** - Automatic session handling  
✅ **Modern UI** - Responsive design matching your site  
✅ **Toast Notifications** - User-friendly feedback  
✅ **Form Validation** - Client-side validation  
✅ **Error Handling** - Comprehensive error messages  
✅ **Profile Pictures** - Google users get their profile pictures displayed  
✅ **Provider Detection** - Different features for Google vs email users  

## Troubleshooting

**"Supabase not initialized" error:**
- Check your URL and anon key are correct
- Make sure you changed `DEMO_CONFIG` to `SUPABASE_CONFIG`
- Verify the Supabase CDN script is loading

**"Invalid login credentials":**
- Make sure user verified email first
- Check email/password are correct
- Verify user exists in Supabase Auth dashboard

**Password reset not working:**
- Check redirect URLs are configured correctly
- Make sure Site URL matches your domain
- Verify email templates are enabled

**Google OAuth issues:**
- Ensure Google provider is enabled in Supabase
- Check redirect URIs in Google Console
- Verify client ID and secret are correct

**Styling issues:**
- Make sure `auth.css` is loaded after `styles.css`
- Check browser console for CSS errors
- Verify all CSS classes are properly defined

## Security Notes

🔒 **Row Level Security (RLS)**: Enable RLS on your tables  
🔒 **API Keys**: Never expose your service key in frontend code  
🔒 **HTTPS**: Always use HTTPS in production  
🔒 **Validation**: Validate all inputs on both client and server  
🔒 **Rate Limiting**: Configure rate limiting in Supabase  

## Next Steps

Once basic auth is working, you can:
- Add user profiles and metadata
- Implement role-based access control
- Add social auth providers (GitHub, Twitter, etc.)
- Create protected routes and content
- Add email preferences and notifications
- Implement user settings and preferences

## Need Help?

- Check browser console for error messages
- Verify your Supabase project is active
- Test with demo configuration first
- Check Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)

## Files Created

- `supabase-config.js` - Supabase configuration
- `auth.js` - Authentication logic and UI
- `auth.css` - Authentication styles
- `SUPABASE_SETUP.md` - This setup guide

Your modern Supabase authentication system is now ready! 🚀