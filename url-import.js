// Universal URL Import Feature for PDFrow
// This script adds URL import functionality to all tool pages

class UniversalURLImporter {
    constructor(fileType) {
        this.fileType = fileType; // 'pdf', 'jpg', 'png', 'doc', 'xls', 'ppt'
        this.maxSize = 50 * 1024 * 1024; // 50MB
        this.timeout = 60000; // 60 seconds
        this.setupFileTypes();
    }

    setupFileTypes() {
        const fileTypeConfig = {
            'pdf': {
                allowedTypes: ['application/pdf'],
                magicBytes: '25504446', // %PDF
                errorMessage: 'Only PDF files are supported for this tool'
            },
            'jpg': {
                allowedTypes: ['image/jpeg', 'image/jpg'],
                magicBytes: 'ffd8ff',
                errorMessage: 'Only JPG/JPEG images are supported for this tool'
            },
            'png': {
                allowedTypes: ['image/png'],
                magicBytes: '89504e47',
                errorMessage: 'Only PNG images are supported for this tool'
            },
            'doc': {
                allowedTypes: [
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ],
                magicBytes: ['d0cf11e0', '504b0304'], // DOC and DOCX
                errorMessage: 'Only Word documents (.doc, .docx) are supported for this tool'
            },
            'xls': {
                allowedTypes: [
                    'application/vnd.ms-excel',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                ],
                magicBytes: ['d0cf11e0', '504b0304'], // XLS and XLSX
                errorMessage: 'Only Excel files (.xls, .xlsx) are supported for this tool'
            },
            'ppt': {
                allowedTypes: [
                    'application/vnd.ms-powerpoint',
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                ],
                magicBytes: ['d0cf11e0', '504b0304'], // PPT and PPTX
                errorMessage: 'Only PowerPoint files (.ppt, .pptx) are supported for this tool'
            }
        };

        const config = fileTypeConfig[this.fileType];
        if (config) {
            this.allowedTypes = config.allowedTypes;
            this.magicBytes = Array.isArray(config.magicBytes) ? config.magicBytes : [config.magicBytes];
            this.fileErrorMessage = config.errorMessage;
        }
    }

    // Validate URL format
    isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    // Convert Dropbox URLs
    convertDropboxURL(url) {
        if (url.includes('dropbox.com')) {
            if (url.includes('www.dropbox.com')) {
                return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
            }
            if (!url.includes('dl=1')) {
                return url.replace('dl=0', 'dl=1');
            }
        }
        return url;
    }

    // Convert Google Drive URLs
    convertGoogleDriveURL(url) {
        if (url.includes('drive.google.com')) {
            const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
            const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
            const fileId = fileIdMatch ? fileIdMatch[1] : (idMatch ? idMatch[1] : null);

            if (fileId) {
                return `https://drive.google.com/uc?export=download&id=${fileId}`;
            }
        }
        return url;
    }

    // Convert cloud storage URLs to direct download links
    convertToDirectURL(url) {
        url = this.convertDropboxURL(url);
        url = this.convertGoogleDriveURL(url);
        return url;
    }

    // Validate if URL is from supported services
    isSupportedService(url) {
        const supportedDomains = [
            'dropbox.com',
            'dropboxusercontent.com',
            'drive.google.com',
            'googleusercontent.com'
        ];

        // Also allow direct file URLs
        const fileExtensions = this.fileType === 'pdf' ? ['pdf'] :
                              this.fileType === 'jpg' ? ['jpg', 'jpeg'] :
                              this.fileType === 'png' ? ['png'] :
                              this.fileType === 'doc' ? ['doc', 'docx'] :
                              this.fileType === 'xls' ? ['xls', 'xlsx'] :
                              this.fileType === 'ppt' ? ['ppt', 'pptx'] : [];

        const hasValidExtension = fileExtensions.some(ext =>
            url.toLowerCase().endsWith(`.${ext}`)
        );

        if (hasValidExtension) {
            return true;
        }

        return supportedDomains.some(domain => url.includes(domain));
    }

    // Validate file type from magic bytes
    async validateFileType(arrayBuffer) {
        const arr = new Uint8Array(arrayBuffer).subarray(0, 8);
        let header = '';
        for (let i = 0; i < arr.length; i++) {
            header += arr[i].toString(16).padStart(2, '0');
        }

        const isValid = this.magicBytes.some(magic => header.startsWith(magic));

        if (!isValid) {
            throw new Error(this.fileErrorMessage);
        }

        return this.allowedTypes[0];
    }

    // Download file from URL with progress tracking
    async downloadFile(url, onProgress) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const directURL = this.convertToDirectURL(url);

            const response = await fetch(directURL, {
                signal: controller.signal,
                mode: 'cors',
                credentials: 'omit'
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const contentLength = response.headers.get('content-length');
            const total = contentLength ? parseInt(contentLength, 10) : 0;

            if (total > this.maxSize) {
                throw new Error(`File size (${(total / (1024 * 1024)).toFixed(1)}MB) exceeds maximum allowed size (50MB)`);
            }

            const reader = response.body.getReader();
            const chunks = [];
            let received = 0;

            while (true) {
                const { done, value } = await reader.read();

                if (done) break;

                chunks.push(value);
                received += value.length;

                if (onProgress) {
                    onProgress({
                        loaded: received,
                        total: total || received,
                        percentage: total ? (received / total) * 100 : 0
                    });
                }

                if (received > this.maxSize) {
                    reader.cancel();
                    throw new Error('File size exceeds 50MB limit');
                }
            }

            const allChunks = new Uint8Array(received);
            let position = 0;
            for (const chunk of chunks) {
                allChunks.set(chunk, position);
                position += chunk.length;
            }

            // Validate file type using magic bytes
            const fileType = await this.validateFileType(allChunks.buffer);

            return new Blob([allChunks], { type: fileType });

        } catch (error) {
            clearTimeout(timeoutId);

            if (error.name === 'AbortError') {
                throw new Error('Download timeout - file took too long to download');
            }

            throw error;
        }
    }

    // Create File object from Blob
    createFileFromBlob(blob, url) {
        let filename = `imported-file.${this.fileType}`;
        try {
            const urlObj = new URL(url);
            const pathname = urlObj.pathname;
            const parts = pathname.split('/');
            const lastPart = parts[parts.length - 1];
            if (lastPart && lastPart.includes('.')) {
                filename = lastPart;
            }
        } catch (e) {
            // Use default filename
        }

        return new File([blob], filename, { type: blob.type });
    }

    // Main import function
    async importFromURL(url, callbacks = {}) {
        const { onProgress, onSuccess, onError } = callbacks;

        try {
            if (!this.isValidURL(url)) {
                throw new Error('Invalid URL format');
            }

            if (!this.isSupportedService(url)) {
                throw new Error(`Unsupported URL. Please use Dropbox, Google Drive, or direct ${this.fileType.toUpperCase()} links`);
            }

            const blob = await this.downloadFile(url, onProgress);

            if (!this.allowedTypes.includes(blob.type)) {
                throw new Error(this.fileErrorMessage);
            }

            const file = this.createFileFromBlob(blob, url);

            if (onSuccess) {
                onSuccess(file);
            }

            return file;

        } catch (error) {
            if (onError) {
                onError(error);
            }
            throw error;
        }
    }
}

// Initialize URL Import UI and functionality
function initializeURLImport(fileType) {
    const urlImporter = new UniversalURLImporter(fileType);

    // DOM Elements
    const uploadMethodBtns = document.querySelectorAll('.upload-method-btn');
    const urlImportSection = document.getElementById('url-import-section');
    const uploadArea = document.getElementById('upload-area') || document.querySelector('.upload-area');
    const urlInput = document.getElementById('url-input');
    const urlImportBtn = document.getElementById('url-import-btn');
    const downloadProgress = document.getElementById('download-progress');
    const downloadProgressFill = document.getElementById('download-progress-fill');
    const downloadStatus = document.getElementById('download-status');
    const downloadSize = document.getElementById('download-size');
    const urlErrorMessage = document.getElementById('url-error-message');
    const urlSuccessMessage = document.getElementById('url-success-message');
    const fileInput = document.querySelector('.file-input');

    if (!uploadMethodBtns.length || !urlImportSection) {
        console.warn('URL Import UI elements not found. Skipping initialization.');
        return;
    }

    // Toggle between upload methods
    uploadMethodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const method = btn.dataset.method;

            uploadMethodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (method === 'url') {
                urlImportSection.classList.add('active');
                if (uploadArea) uploadArea.style.display = 'none';
            } else {
                urlImportSection.classList.remove('active');
                if (uploadArea) uploadArea.style.display = 'block';
            }

            hideMessages();
        });
    });

    // Helper functions
    function showError(message) {
        if (urlErrorMessage) {
            urlErrorMessage.textContent = message;
            urlErrorMessage.classList.add('show');
        }
        if (urlSuccessMessage) {
            urlSuccessMessage.classList.remove('show');
        }
    }

    function showSuccess(message) {
        if (urlSuccessMessage) {
            urlSuccessMessage.textContent = message;
            urlSuccessMessage.classList.add('show');
        }
        if (urlErrorMessage) {
            urlErrorMessage.classList.remove('show');
        }
    }

    function hideMessages() {
        if (urlErrorMessage) urlErrorMessage.classList.remove('show');
        if (urlSuccessMessage) urlSuccessMessage.classList.remove('show');
    }

    function formatBytes(bytes) {
        return (bytes / (1024 * 1024)).toFixed(2);
    }

    // URL Import button click handler
    if (urlImportBtn) {
        urlImportBtn.addEventListener('click', async () => {
            const url = urlInput.value.trim();

            if (!url) {
                showError('Please enter a URL');
                return;
            }

            urlImportBtn.disabled = true;
            urlImportBtn.classList.add('loading');
            hideMessages();
            if (downloadProgress) downloadProgress.classList.add('show');

            try {
                const file = await urlImporter.importFromURL(url, {
                    onProgress: (progress) => {
                        const percentage = Math.round(progress.percentage);
                        if (downloadProgressFill) downloadProgressFill.style.width = `${percentage}%`;
                        if (downloadStatus) downloadStatus.textContent = `Downloading... ${percentage}%`;
                        if (downloadSize) {
                            downloadSize.textContent = `${formatBytes(progress.loaded)} MB${progress.total ? ` / ${formatBytes(progress.total)} MB` : ''}`;
                        }
                    },
                    onSuccess: (file) => {
                        showSuccess(`File imported successfully: ${file.name} (${formatBytes(file.size)} MB)`);

                        // Trigger file input with the imported file
                        if (fileInput) {
                            const dataTransfer = new DataTransfer();
                            dataTransfer.items.add(file);
                            fileInput.files = dataTransfer.files;

                            const event = new Event('change', { bubbles: true });
                            fileInput.dispatchEvent(event);
                        }

                        setTimeout(() => {
                            urlInput.value = '';
                            if (downloadProgress) downloadProgress.classList.remove('show');
                        }, 2000);
                    },
                    onError: (error) => {
                        showError(error.message || 'Failed to import file from URL');
                    }
                });

            } catch (error) {
                showError(error.message || 'Failed to import file. Please check the URL and try again.');
            } finally {
                urlImportBtn.disabled = false;
                urlImportBtn.classList.remove('loading');
            }
        });
    }

    // Allow Enter key to trigger import
    if (urlInput) {
        urlInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && urlImportBtn) {
                urlImportBtn.click();
            }
        });

        // Clear error message when user starts typing
        urlInput.addEventListener('input', () => {
            hideMessages();
        });
    }
}

// Export for use in HTML pages
window.initializeURLImport = initializeURLImport;
