# PDFrow Deployment Guide - Word to PDF Fix

## Problem
Your Word to PDF converter was failing on the deployed site (https://www.pdfrow.com) because:

1. **Mixed Content Error**: Your site uses HTTPS but the VPS API uses HTTP
2. **CORS Issues**: Cross-Origin Resource Sharing blocks requests from different domains

## Solution
We've created a Vercel serverless function that acts as a proxy between your frontend and VPS backend.

## What Changed

### 1. New Files Created
- `api/convert-word-to-pdf.js` - Vercel serverless function (proxy)
- `package.json` - Dependencies for the API
- `.env` - Environment variables (don't commit this!)

### 2. Modified Files
- `word-to-pdf.html` - Updated to use the new proxy endpoint
- `vercel.json` - Added API route configuration

## Deployment Steps

### Step 1: Install Dependencies
```bash
cd C:\Users\amirm\Desktop\PDFrow
npm install
```

### Step 2: Set Environment Variables in Vercel
Go to your Vercel dashboard (https://vercel.com/dashboard) and:

1. Select your PDFrow project
2. Go to **Settings** → **Environment Variables**
3. Add these variables:
   - Key: `VPS_API_ENDPOINT`
   - Value: `http://79.137.72.251/convert/word-to-pdf`

   - Key: `VPS_API_KEY`
   - Value: `pdfrowsecretapi41`

### Step 3: Deploy to Vercel
```bash
# Commit your changes
git add .
git commit -m "Fix Word to PDF conversion with Vercel proxy"
git push

# Or deploy directly with Vercel CLI
npx vercel --prod
```

### Step 4: Test the Deployment
1. Go to https://www.pdfrow.com/word-to-pdf.html
2. Upload a Word document (.docx, .doc, or .rtf)
3. Click "Convert to PDF"
4. You should see the conversion succeed without CORS errors

## How It Works

```
Browser (HTTPS) → Vercel Proxy (HTTPS) → VPS Backend (HTTP)
     ↓                                          ↓
  pdfrow.com         /api/convert-word-to-pdf   79.137.72.251
```

The proxy:
1. Receives the file upload from the browser (HTTPS)
2. Forwards it to your VPS backend (HTTP) - no CORS issues since it's server-side
3. Returns the converted PDF to the browser

## Troubleshooting

### Check Vercel Logs
```bash
npx vercel logs
```

### Common Issues

1. **"Module not found" errors**
   - Run `npm install` in your project root
   - Make sure `package.json` exists

2. **"VPS API error"**
   - Check if your VPS server is running
   - Verify the VPS_API_ENDPOINT is correct
   - Test the VPS endpoint directly: `curl -X POST http://79.137.72.251/convert/word-to-pdf`

3. **"File upload failed"**
   - Check file size limit (10MB max)
   - Verify file format (.docx, .doc, .rtf)

## Testing Locally

To test the proxy locally before deploying:

```bash
# Install Vercel CLI
npm install -g vercel

# Run local development server
vercel dev
```

Then open http://localhost:3000/word-to-pdf.html

## Alternative Solution (Future)

For better performance and security, consider:

1. **Set up HTTPS on your VPS**: Use Let's Encrypt SSL certificate
   - Then you can call the VPS directly without needing a proxy
   - Better performance (no middle hop)

2. **Move conversion to Vercel Edge Functions**:
   - Host the conversion logic on Vercel
   - No need for external VPS

## Need Help?

If you encounter any issues:
1. Check Vercel deployment logs
2. Check browser console for errors (F12)
3. Verify environment variables are set in Vercel dashboard
