# URL Import Feature Implementation Guide

This guide explains how to add the URL import feature to any tool page on PDFrow.

## Files Created

1. **url-import.js** - Universal JavaScript module for URL importing
2. **url-import.css** - Styling for URL import UI
3. **url-import-template.html** - HTML template with all required elements

## Implementation Steps

### Step 1: Add CSS Link in HEAD Section

Add this line after other stylesheet links:
```html
<link rel="stylesheet" href="url-import.css">
```

### Step 2: Add HTML Elements

Add the following HTML **BEFORE** the `<div class="upload-area">` element in your tool-card:

```html
<!-- Upload Method Toggle -->
<div class="upload-method-toggle">
    <button class="upload-method-btn active" data-method="local" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        Upload from Computer
    </button>
    <button class="upload-method-btn" data-method="url" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
        Import from URL
    </button>
</div>

<!-- URL Import Section -->
<div class="url-import-section" id="url-import-section">
    <div class="url-input-container">
        <svg class="url-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
        <input
            type="url"
            class="url-input"
            id="url-input"
            placeholder="Paste Dropbox or Google Drive link here..."
            aria-label="Enter file URL from Dropbox or Google Drive"
        >
    </div>
    <button class="url-import-btn" id="url-import-btn" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Import File
    </button>

    <div class="download-progress" id="download-progress">
        <div class="progress-info">
            <span id="download-status">Downloading...</span>
            <span id="download-size">0 MB / 0 MB</span>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" id="download-progress-fill"></div>
        </div>
    </div>

    <div class="url-error-message" id="url-error-message"></div>
    <div class="url-success-message" id="url-success-message"></div>

    <div class="url-hints">
        <div class="url-hints-title">Supported Services:</div>
        <ul class="url-hints-list">
            <li>Dropbox: Share link and paste here</li>
            <li>Google Drive: Get shareable link (Anyone with the link can view)</li>
            <li>Direct file URLs (supported format only)</li>
            <li>Maximum file size: 50MB</li>
        </ul>
    </div>
</div>
```

### Step 3: Add Scripts BEFORE Closing </body> Tag

Add this after other script tags:
```html
<script src="url-import.js"></script>
<script>
    // Initialize URL Import with appropriate file type
    document.addEventListener('DOMContentLoaded', () => {
        initializeURLImport('FILE_TYPE_HERE');
    });
</script>
```

## File Type Configuration

Replace `'FILE_TYPE_HERE'` with the appropriate value for each tool:

### PDF Tools
- compress-pdf.html → `'pdf'`
- merge-pdf.html → `'pdf'`
- split-pdf.html → `'pdf'`
- rotate-pdf.html → `'pdf'`
- crop-pdf.html → `'pdf'`
- sign-pdf.html → `'pdf'`
- organize-pdf.html → `'pdf'`
- add-watermark.html → `'pdf'`
- add-page-numbers.html → `'pdf'`
- pdf-to-word.html → `'pdf'`
- pdf-to-excel.html → `'pdf'`
- pdf-to-powerpoint.html → `'pdf'`
- pdf-to-jpg.html → `'pdf'`

### Office to PDF Converters
- word-to-pdf.html → `'doc'`
- excel-to-pdf.html → `'xls'`
- powerpoint-to-pdf.html → `'ppt'`

### Image Converters
- jpg-to-pdf.html → `'jpg'` (already implemented)
- jpg-to-png.html → `'jpg'`
- png-to-jpg.html → `'png'`

## Features

✅ **Supported Services:**
- Dropbox (automatic URL conversion)
- Google Drive (automatic URL conversion)
- Direct file URLs

✅ **Validation:**
- File type validation via magic bytes
- File size limit (50MB)
- URL format validation

✅ **User Experience:**
- Progress tracking during download
- Error and success messages
- Drag-and-drop style upload area toggle
- Responsive design

✅ **Security:**
- Client-side file validation
- Magic byte verification
- CORS-compliant requests

## Example Implementation

See `jpg-to-pdf.html` for a complete working implementation.

## Troubleshooting

**Issue:** URL import button doesn't respond
- Check that `url-import.js` is loaded
- Verify the file type parameter matches the tool
- Check browser console for errors

**Issue:** File type validation fails
- Ensure the magic bytes configuration is correct for your file type
- Verify the file from the URL is actually the correct format

**Issue:** Download fails
- Check that the URL is publicly accessible
- Verify Dropbox/Google Drive links have proper sharing permissions
- Check CORS headers on direct URLs

## Notes

- All file processing happens client-side for security
- Files are automatically validated for type and size
- The UI automatically toggles between local upload and URL import
- Import progress is displayed with percentage and file size
