# Security Configuration Guide for PDFrow

## 🚨 CRITICAL SECURITY NOTICE

**NEVER expose secret keys in client-side code!** This document explains how to properly configure PDFrow's security features.

## Fixed Security Issues

✅ **Removed hCaptcha SECRET_KEY** from client-side code
- Secret keys should only be stored on the server/backend
- Use environment variables for all sensitive configuration

## Client-Side Configuration (Safe to expose)

### hCaptcha
- **SITE_KEY**: Safe to expose in client-side code
- **SECRET_KEY**: ⚠️ MUST be kept server-side only

### Supabase
- **URL**: Safe to expose (public endpoint)
- **ANON_KEY**: Safe to expose (designed for client-side use)  
- **SERVICE_ROLE_KEY**: ⚠️ MUST be kept server-side only

## Server-Side Configuration (Keep secure)

Create a `.env` file on your server with:

```bash
# hCaptcha Server-Side Validation
HCAPTCHA_SECRET_KEY=your_actual_secret_key_here

# Supabase Admin Operations (if needed)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Security Best Practices

1. **Never commit secret keys** to version control
2. **Use environment variables** for all sensitive data
3. **Validate on server-side** - Never trust client-side validation alone
4. **Rotate keys regularly** if compromised
5. **Use HTTPS** in production

## Files That Should Be Secure

❌ **Never expose these in client code:**
- Database passwords
- API secret keys
- Service account keys
- Private keys

✅ **Safe to expose in client code:**
- Public API keys (like hCaptcha site key)
- Public endpoints
- Anonymous/read-only keys

## If Keys Are Compromised

1. **Immediately revoke** the compromised keys
2. **Generate new keys** in the service dashboard
3. **Update your server configuration**
4. **Review commit history** and remove any exposed secrets

## Additional Security Measures

- Enable CORS restrictions
- Use rate limiting
- Monitor for suspicious activity
- Keep dependencies updated
- Use CSP headers