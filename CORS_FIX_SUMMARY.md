# CORS and Mixed Content Fix - Summary

## Issue Overview
Your PDFrow site at https://www.pdfrow.com has CORS (Cross-Origin Resource Sharing) and Mixed Content errors when trying to call your VPS backend at http://79.137.72.251.

**Why this happens:**
- Your website uses HTTPS (secure)
- Your VPS API uses HTTP (not secure)
- Modern browsers block HTTPS → HTTP requests (Mixed Content)
- Different domains cause CORS restrictions

## Files Affected
The following conversion tools use the VPS API and need fixing:

1. ✅ **word-to-pdf.html** - FIXED (proxy created)
2. ❌ **pdf-to-word.html** - Needs fixing
3. ❌ **pdf-to-excel.html** - Needs fixing
4. ❌ **pdf-to-powerpoint.html** - Needs fixing
5. ❌ **excel-to-pdf.html** - Needs fixing
6. ❌ **powerpoint-to-pdf.html** - Needs fixing

## Solution Applied

Created a Vercel serverless function (API proxy) that:
- Accepts HTTPS requests from your frontend
- Forwards them to your HTTP VPS backend
- Returns the results to the frontend

### Architecture
```
Browser (HTTPS) → Vercel Proxy (HTTPS) → VPS Backend (HTTP)
```

## What Was Done for word-to-pdf

1. **Created**: `api/convert-word-to-pdf.js` - Proxy serverless function
2. **Created**: `package.json` - Dependencies (formidable, form-data, node-fetch)
3. **Updated**: `word-to-pdf.html` - Changed endpoint from VPS to `/api/convert-word-to-pdf`
4. **Updated**: `vercel.json` - Added API routes configuration
5. **Created**: `.env` - Environment variables for VPS endpoint

## Quick Fix for Other Tools

You need to create similar proxy functions for each tool:

### Option 1: Create Individual Proxies (Recommended)
```
api/
  ├── convert-word-to-pdf.js ✅ (Done)
  ├── convert-pdf-to-word.js ❌ (TODO)
  ├── convert-pdf-to-excel.js ❌ (TODO)
  ├── convert-pdf-to-powerpoint.js ❌ (TODO)
  ├── convert-excel-to-pdf.js ❌ (TODO)
  └── convert-powerpoint-to-pdf.js ❌ (TODO)
```

### Option 2: Create Generic Proxy
Create one proxy that handles all conversions by forwarding to different VPS endpoints.

## Deployment Checklist

### Before Deploying:
- [ ] Run `npm install` in project root
- [ ] Set environment variables in Vercel dashboard:
  - `VPS_API_ENDPOINT=http://79.137.72.251/convert/word-to-pdf`
  - `VPS_API_KEY=pdfrowsecretapi41`

### Deploy:
```bash
git add .
git commit -m "Fix CORS issues with Vercel proxy"
git push
```

Or with Vercel CLI:
```bash
npx vercel --prod
```

### After Deploying:
- [ ] Test word-to-pdf conversion on https://www.pdfrow.com/word-to-pdf.html
- [ ] Check Vercel logs for any errors: `npx vercel logs`

## Long-term Solutions

### Option A: Add HTTPS to VPS (Best)
1. Install SSL certificate on your VPS (Let's Encrypt is free)
2. Change VPS endpoint from HTTP to HTTPS
3. Configure CORS headers on VPS to allow pdfrow.com
4. Remove Vercel proxy (direct connection)

**Pros**: Faster (no proxy hop), more secure
**Cons**: Requires VPS configuration

### Option B: Keep Vercel Proxy (Current)
**Pros**: Works immediately, no VPS changes needed
**Cons**: Extra hop adds latency, Vercel function limits

### Option C: Move Conversion to Vercel
Move the entire conversion logic to Vercel Edge Functions
**Pros**: Simplest architecture, no VPS needed
**Cons**: Requires rewriting conversion logic

## Testing

### Test Locally:
```bash
vercel dev
# Open http://localhost:3000/word-to-pdf.html
```

### Test Production:
```bash
# After deploying
# Visit: https://www.pdfrow.com/word-to-pdf.html
```

## Need to Fix All Tools?

Would you like me to:
1. Create proxy functions for all the other conversion tools?
2. Create a single generic proxy that handles all conversions?
3. Help set up HTTPS on your VPS instead?

Let me know which approach you prefer!
