# Google OAuth Setup for PDFrow + Supabase

## Step 1: Create Google OAuth Credentials

### 1.1 Go to Google Cloud Console
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project or select existing one

### 1.2 Enable Google+ API
1. Go to **APIs & Services** > **Library**
2. Search for "Google+ API" or "Google Identity"
3. Click **Enable**

### 1.3 Create OAuth 2.0 Credentials
1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS** > **OAuth 2.0 Client IDs**
3. If prompted, configure the OAuth consent screen first:
   - Choose **External** user type
   - Fill in app name: "PDFrow"
   - Add your email as developer contact
   - Add test users if needed

### 1.4 Configure OAuth Client ID
1. Application type: **Web application**
2. Name: "PDFrow Auth"
3. **Authorized JavaScript origins:**
   ```
   http://localhost:8080
   https://yourdomain.com
   ```
4. **Authorized redirect URIs:**
   ```
   https://amnbtpnuqpqlngjfybgw.supabase.co/auth/v1/callback
   ```
5. Click **Create**
6. **Copy the Client ID and Client Secret** - you'll need these!

## Step 2: Configure Supabase

### 2.1 Enable Google Provider
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/amnbtpnuqpqlngjfybgw)
2. Navigate to **Authentication** > **Providers**
3. Find **Google** and toggle it **ON**

### 2.2 Add Google Credentials
1. Paste your **Client ID** from Google Console
2. Paste your **Client Secret** from Google Console
3. Click **Save**

### 2.3 Configure Redirect URLs
1. Go to **Authentication** > **Settings**
2. Under **Site URL**, add:
   ```
   http://localhost:8080
   ```
   (or your production domain)
3. Under **Redirect URLs**, add:
   ```
   http://localhost:8080
   https://yourdomain.com
   ```

## Step 3: Test Google OAuth

1. Open your PDFrow website
2. Click **Login** or **Sign Up**
3. Click **Continue with Google**
4. You should be redirected to Google's consent screen
5. After authorization, you'll be redirected back to your site
6. Check if you're logged in successfully

## Troubleshooting

### "redirect_uri_mismatch" Error
- Double-check the redirect URI in Google Console
- Make sure it's exactly: `https://amnbtpnuqpqlngjfybgw.supabase.co/auth/v1/callback`
- No trailing slashes or extra characters

### "OAuth consent screen" Error
- Make sure your OAuth consent screen is configured
- Add test users if your app is in testing mode
- Consider publishing your app for public use

### "Invalid client" Error
- Verify Client ID and Secret are correct in Supabase
- Make sure Google+ API is enabled
- Check that your project is active in Google Console

### Users Can't Sign In
- Verify the user's email is added as a test user (if app is in testing mode)
- Check that the Google provider is enabled in Supabase
- Look at browser network tab for specific error messages

## Security Considerations

🔒 **Client Secret**: Keep your Google Client Secret secure in Supabase only  
🔒 **HTTPS**: Always use HTTPS in production  
🔒 **Domain Verification**: Verify your domain in Google Console for production  
🔒 **Scope Limits**: Google OAuth only requests basic profile information  

## What Google OAuth Provides

When users sign in with Google, your app receives:
- ✅ Email address
- ✅ Full name
- ✅ Profile picture URL
- ✅ Google User ID
- ✅ Email verification status (always verified)

## Production Checklist

Before going live:
- [ ] Update authorized origins to your production domain
- [ ] Update redirect URIs to production domain
- [ ] Update Supabase Site URL to production domain
- [ ] Verify OAuth consent screen is properly configured
- [ ] Test Google OAuth flow on production domain
- [ ] Consider publishing OAuth app for public use

Your Google OAuth integration is now ready! Users can sign in with their Google accounts seamlessly. 🚀