# VPS Backend API Integration Guide

## Overview
Your VPS backend (vps/main.py) provides 6 conversion endpoints. This guide shows how to integrate them into your HTML conversion tools.

## API Configuration

### Backend Endpoints
- **POST** `/convert/pdf-to-word`
- **POST** `/convert/word-to-pdf`
- **POST** `/convert/pdf-to-excel`
- **POST** `/convert/excel-to-pdf`
- **POST** `/convert/pdf-to-powerpoint`
- **POST** `/convert/powerpoint-to-pdf`

### Required Headers
```javascript
headers: {
    'x-api-key': 'YOUR_API_KEY_HERE'
}
```

### Request Format
```javascript
const formData = new FormData();
formData.append('file', fileObject);  // Single file upload
```

### Response Format
- Success: FileResponse with converted file
- Content-Type: Appropriate MIME type for converted file
- File download via blob

---

## Files Already Updated ✅

### 1. pdf-to-word.html
- **Line 1344-1345**: API endpoint and key configured
- **Line 1563-1570**: Fetch call updated with x-api-key header
- **Endpoint**: `http://YOUR_VPS_IP/convert/pdf-to-word`

### 2. word-to-pdf.html
- **Line 1244-1245**: API endpoint and key configured
- **Line 1411-1417**: Fetch call updated with x-api-key header
- **Endpoint**: `http://YOUR_VPS_IP/convert/word-to-pdf`

---

## Files Needing Updates 🔧

### 3. pdf-to-excel.html

**Location to update:**
Find the constructor (around line ~1258):
```javascript
constructor() {
    this.apiEndpoint = 'http://79.137.72.251:8080/convert'; // CHANGE THIS
    // ADD THIS LINE:
    this.apiKey = 'YOUR_API_KEY_HERE';
```

Update to:
```javascript
constructor() {
    this.apiEndpoint = 'http://YOUR_VPS_IP/convert/pdf-to-excel';
    this.apiKey = 'YOUR_API_KEY_HERE';
```

**Find the fetch call** (around line ~1423-1428):
```javascript
const response = await fetch(this.apiEndpoint, {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'  // REMOVE THIS FORMAT
    }
});
```

Update to:
```javascript
const response = await fetch(this.apiEndpoint, {
    method: 'POST',
    headers: {
        'x-api-key': this.apiKey
    },
    body: formData
});
```

**Handle file response** (after line ~1426):
Your backend returns a file directly, not JSON. Update response handling:
```javascript
if (!response.ok) {
    throw new Error(`Conversion failed: ${response.status}`);
}

// Get the file blob
const blob = await response.blob();
const fileName = response.headers.get('content-disposition')?.match(/filename="?(.+)"?/)?.[1] || 'converted.xlsx';

// Create download link
const url = URL.createObjectURL(blob);
return {
    filesConverted: 1,
    outputFormat: 'Excel',
    downloadLinks: [{
        original: files[0].name,
        converted: fileName,
        url: url
    }]
};
```

---

### 4. excel-to-pdf.html

**Location to update:**
Find the constructor (around line ~1243):
```javascript
constructor() {
    this.apiEndpoint = 'http://79.137.72.251:8080/excel-to-pdf'; // CHANGE THIS
    // ADD THIS LINE:
    this.apiKey = 'YOUR_API_KEY_HERE';
```

Update to:
```javascript
constructor() {
    this.apiEndpoint = 'http://YOUR_VPS_IP/convert/excel-to-pdf';
    this.apiKey = 'YOUR_API_KEY_HERE';
```

**Find the convertFiles method** (around line ~1390):
This file currently uses SIMULATED conversion with setTimeout. Replace with real API call:

```javascript
async convertFiles(files) {
    const formData = new FormData();
    formData.append('file', files[0]);

    this.updateProgress(10);

    const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
            'x-api-key': this.apiKey
        },
        body: formData
    });

    this.updateProgress(60);

    if (!response.ok) {
        throw new Error(`Conversion failed: ${response.status}`);
    }

    // Get the file blob
    const blob = await response.blob();
    const fileName = response.headers.get('content-disposition')?.match(/filename="?(.+)"?/)?.[1] || 'converted.pdf';

    this.updateProgress(100);

    // Create download link
    const url = URL.createObjectURL(blob);
    return {
        filesConverted: 1,
        outputFormat: 'PDF',
        downloadLinks: [{
            original: files[0].name,
            converted: fileName,
            url: url
        }]
    };
}
```

---

### 5. pdf-to-powerpoint.html

**Constructor update** (find around line ~1250):
```javascript
constructor() {
    this.apiEndpoint = 'http://YOUR_VPS_IP/convert/pdf-to-powerpoint';
    this.apiKey = 'YOUR_API_KEY_HERE';
```

**Fetch call update** (find the fetch call in convertFiles method):
```javascript
const response = await fetch(this.apiEndpoint, {
    method: 'POST',
    headers: {
        'x-api-key': this.apiKey
    },
    body: formData
});
```

**Response handling**:
```javascript
if (!response.ok) {
    throw new Error(`Conversion failed: ${response.status}`);
}

const blob = await response.blob();
const fileName = response.headers.get('content-disposition')?.match(/filename="?(.+)"?/)?.[1] || 'converted.pptx';

const url = URL.createObjectURL(blob);
return {
    filesConverted: 1,
    outputFormat: 'PowerPoint',
    downloadLinks: [{
        original: files[0].name,
        converted: fileName,
        url: url
    }]
};
```

---

### 6. powerpoint-to-pdf.html

**Constructor update** (find around line ~1246):
```javascript
constructor() {
    this.apiEndpoint = 'http://YOUR_VPS_IP/convert/powerpoint-to-pdf';
    this.apiKey = 'YOUR_API_KEY_HERE';
```

**Fetch call update** (find in convertFiles method):
```javascript
const response = await fetch(this.apiEndpoint, {
    method: 'POST',
    headers: {
        'x-api-key': this.apiKey
    },
    body: formData
});
```

**Response handling**:
```javascript
if (!response.ok) {
    throw new Error(`Conversion failed: ${response.status}`);
}

const blob = await response.blob();
const fileName = response.headers.get('content-disposition')?.match(/filename="?(.+)"?/)?.[1] || 'converted.pdf';

const url = URL.createObjectURL(blob);
return {
    filesConverted: 1,
    outputFormat: 'PDF',
    downloadLinks: [{
        original: files[0].name,
        converted: fileName,
        url: url
    }]
};
```

---

## Configuration Steps

### Step 1: Set API Key
In your VPS, create a `.env` file in the `vps/` folder:
```bash
API_KEY=your_secure_api_key_here
```

### Step 2: Update HTML Files
Replace all instances of:
- `YOUR_VPS_IP` with your actual VPS IP address or domain
- `YOUR_API_KEY_HERE` with the same API key from Step 1

Example:
```javascript
this.apiEndpoint = 'http://123.45.67.89/convert/pdf-to-word';
this.apiKey = 'your_secure_api_key_here';
```

Or with domain:
```javascript
this.apiEndpoint = 'https://api.pdfrow.com/convert/pdf-to-word';
this.apiKey = 'your_secure_api_key_here';
```

### Step 3: Deploy VPS Backend
```bash
cd vps
docker-compose up -d
```

### Step 4: Test Each Converter
1. Open each HTML file in browser
2. Upload a test file
3. Click convert
4. Verify file downloads correctly

---

## Important Notes

### Security
1. **Never commit API keys to Git** - Use environment variables
2. **Use HTTPS in production** - HTTP is only for testing
3. **Configure CORS properly** - Already set to `*` in your backend for development

### File Size Limits
- Default: 50MB per file
- Configured in `main.py` line 60: `API_KEY`
- Backend validates file size and returns 400 error if exceeded

### Timeout Settings
- Frontend: 120 seconds (120000ms)
- Backend Gunicorn: 120 seconds (in Dockerfile CMD)
- Adjust if conversions take longer for large files

### Error Handling
Your backend returns these HTTP status codes:
- `200`: Success
- `400`: Bad request (invalid file type, size, etc.)
- `401`: Invalid API key
- `500`: Server error (conversion failed)

Handle them in frontend:
```javascript
if (!response.ok) {
    const error = await response.text();
    throw new Error(`Server error (${response.status}): ${error}`);
}
```

---

## Testing Checklist

- [ ] pdf-to-word.html ✅ (Already updated)
- [ ] word-to-pdf.html ✅ (Already updated)
- [ ] pdf-to-excel.html (Update needed)
- [ ] excel-to-pdf.html (Update needed)
- [ ] pdf-to-powerpoint.html (Update needed)
- [ ] powerpoint-to-pdf.html (Update needed)

---

## Quick Reference

### Your VPS Backend Stack
- **Framework**: FastAPI (Python)
- **Server**: Gunicorn + Uvicorn workers
- **Container**: Docker
- **Port**: 80 (HTTP)
- **Conversion Engine**: LibreOffice + pdf2docx + pytesseract

### Response Handling Pattern
```javascript
const blob = await response.blob();
const url = URL.createObjectURL(blob);
// Create download link with url
```

### Common Issues
1. **CORS Error**: Check backend CORS settings (already configured as `*`)
2. **401 Error**: API key mismatch between frontend and backend .env
3. **Timeout**: Increase timeout for large files
4. **File not downloading**: Check blob handling and URL.createObjectURL

---

## Next Steps

1. Update the 4 remaining HTML files using the patterns above
2. Set your actual VPS IP and API key
3. Deploy the Docker container on your VPS
4. Test each conversion tool
5. Monitor backend logs: `docker-compose logs -f`

