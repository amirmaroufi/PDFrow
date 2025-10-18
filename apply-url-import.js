// Node.js script to apply URL import feature to all tool pages
// Run with: node apply-url-import.js

const fs = require('fs');
const path = require('path');

const toolPages = [
    { file: 'merge-pdf.html', fileType: 'pdf' },
    { file: 'split-pdf.html', fileType: 'pdf' },
    { file: 'rotate-pdf.html', fileType: 'pdf' },
    { file: 'crop-pdf.html', fileType: 'pdf' },
    { file: 'sign-pdf.html', fileType: 'pdf' },
    { file: 'organize-pdf.html', fileType: 'pdf' },
    { file: 'add-watermark.html', fileType: 'pdf' },
    { file: 'add-page-numbers.html', fileType: 'pdf' },
    { file: 'pdf-to-word.html', fileType: 'pdf' },
    { file: 'pdf-to-excel.html', fileType: 'pdf' },
    { file: 'pdf-to-powerpoint.html', fileType: 'pdf' },
    { file: 'pdf-to-jpg.html', fileType: 'pdf' },
    { file: 'word-to-pdf.html', fileType: 'doc' },
    { file: 'excel-to-pdf.html', fileType: 'xls' },
    { file: 'powerpoint-to-pdf.html', fileType: 'ppt' },
    { file: 'jpg-to-png.html', fileType: 'jpg' },
    { file: 'png-to-jpg.html', fileType: 'png' }
];

const urlImportHTML = `
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

`;

function applyURLImport(filePath, fileType) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // 1. Add CSS link in HEAD (if not already added)
        if (!content.includes('url-import.css')) {
            content = content.replace(
                /<link rel="stylesheet" href="auth\.css">/,
                '<link rel="stylesheet" href="auth.css">\n    <link rel="stylesheet" href="url-import.css">'
            );
        }

        // 2. Add URL import HTML before upload-area (if not already added)
        if (!content.includes('upload-method-toggle')) {
            // Find privacy-badge and add URL import HTML after it
            content = content.replace(
                /(<div class="privacy-badge">[\s\S]*?<\/div>)\s*(<div class="upload-area")/,
                `$1\n${urlImportHTML}                    $2`
            );

            // Add id="upload-area" to upload-area if not present
            if (!content.includes('id="upload-area"')) {
                content = content.replace(
                    /<div class="upload-area"/,
                    '<div class="upload-area" id="upload-area"'
                );
            }
        }

        // 3. Add scripts before </body> (if not already added)
        if (!content.includes('url-import.js')) {
            const scriptToAdd = `    <script src="url-import.js"></script>
    <script>
        // Initialize URL Import for ${fileType.toUpperCase()} files
        document.addEventListener('DOMContentLoaded', () => {
            initializeURLImport('${fileType}');
        });
    </script>\n    `;

            content = content.replace(
                /(<script src="script\.js"><\/script>)/,
                `$1\n${scriptToAdd}`
            );
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Applied URL import to ${path.basename(filePath)}`);
        return true;
    } catch (error) {
        console.error(`✗ Error processing ${path.basename(filePath)}:`, error.message);
        return false;
    }
}

// Main execution
console.log('Starting URL import feature application...\n');
let successCount = 0;
let failCount = 0;

toolPages.forEach(({ file, fileType }) => {
    const filePath = path.join(__dirname, file);
    if (applyURLImport(filePath, fileType)) {
        successCount++;
    } else {
        failCount++;
    }
});

console.log(`\n=== Summary ===`);
console.log(`Successfully updated: ${successCount} files`);
console.log(`Failed: ${failCount} files`);
console.log(`Total: ${toolPages.length} files`);
