# PowerShell script to add URL import feature to all tool pages
# Run with: powershell -ExecutionPolicy Bypass -File apply-url-import.ps1

$toolPages = @(
    @{File="merge-pdf.html"; FileType="pdf"},
    @{File="split-pdf.html"; FileType="pdf"},
    @{File="rotate-pdf.html"; FileType="pdf"},
    @{File="crop-pdf.html"; FileType="pdf"},
    @{File="sign-pdf.html"; FileType="pdf"},
    @{File="organize-pdf.html"; FileType="pdf"},
    @{File="add-watermark.html"; FileType="pdf"},
    @{File="add-page-numbers.html"; FileType="pdf"},
    @{File="pdf-to-word.html"; FileType="pdf"},
    @{File="pdf-to-excel.html"; FileType="pdf"},
    @{File="pdf-to-powerpoint.html"; FileType="pdf"},
    @{File="pdf-to-jpg.html"; FileType="pdf"},
    @{File="word-to-pdf.html"; FileType="doc"},
    @{File="excel-to-pdf.html"; FileType="xls"},
    @{File="powerpoint-to-pdf.html"; FileType="ppt"},
    @{File="jpg-to-png.html"; FileType="jpg"},
    @{File="png-to-jpg.html"; FileType="png"}
)

$cssLink = '    <link rel="stylesheet" href="url-import.css">'

$urlImportHTML = @'

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

'@

function Add-URLImport {
    param (
        [string]$FilePath,
        [string]$FileType
    )

    try {
        $content = Get-Content $FilePath -Raw -Encoding UTF8

        # 1. Add CSS link (if not already present)
        if ($content -notmatch 'url-import\.css') {
            $content = $content -replace '(<link rel="stylesheet" href="auth\.css">)', "`$1`n$cssLink"
        }

        # 2. Add URL import HTML before upload-area (if not already present)
        if ($content -notmatch 'upload-method-toggle') {
            $content = $content -replace '(<div class="privacy-badge">[\s\S]*?</div>)\s*(<div class="upload-area")', "`$1`n$urlImportHTML                    `$2"

            # Add id="upload-area" if not present
            if ($content -notmatch 'id="upload-area"') {
                $content = $content -replace '<div class="upload-area"', '<div class="upload-area" id="upload-area"'
            }
        }

        # 3. Add scripts before </body> (if not already present)
        if ($content -notmatch 'url-import\.js') {
            $scriptToAdd = @"
    <script src="url-import.js"></script>
    <script>
        // Initialize URL Import for $($FileType.ToUpper()) files
        document.addEventListener('DOMContentLoaded', () => {
            initializeURLImport('$FileType');
        });
    </script>

"@
            $content = $content -replace '(<script src="script\.js"></script>)', "`$1`n$scriptToAdd"
        }

        Set-Content -Path $FilePath -Value $content -Encoding UTF8 -NoNewline
        Write-Host "✓ Applied URL import to $(Split-Path $FilePath -Leaf)" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "✗ Error processing $(Split-Path $FilePath -Leaf): $_" -ForegroundColor Red
        return $false
    }
}

# Main execution
Write-Host "`nStarting URL import feature application...`n" -ForegroundColor Cyan
$successCount = 0
$failCount = 0

foreach ($tool in $toolPages) {
    $filePath = Join-Path $PSScriptRoot $tool.File
    if (Test-Path $filePath) {
        if (Add-URLImport -FilePath $filePath -FileType $tool.FileType) {
            $successCount++
        }
        else {
            $failCount++
        }
    }
    else {
        Write-Host "✗ File not found: $($tool.File)" -ForegroundColor Yellow
        $failCount++
    }
}

Write-Host "`n=== Summary ===" -ForegroundColor Cyan
Write-Host "Successfully updated: $successCount files" -ForegroundColor Green
Write-Host "Failed: $failCount files" -ForegroundColor Red
Write-Host "Total: $($toolPages.Count) files" -ForegroundColor Cyan
