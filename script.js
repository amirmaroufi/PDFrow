class PDFrowConverter {
    constructor() {
        this.tools = new Map();
        this.librariesLoaded = new Set();
        this.libraryPromises = new Map();
        this.currentTool = null;
        
        // Initialize URL routing first
        this.initializeRouting();

        this.initializeTools();
        this.initializeEventListeners();
        this.initializeThemeToggle();

        // Initialize FAQ functionality
        this.initializeFAQ();
        
        // Initialize smooth scrolling
        this.initializeSmoothScrolling();
        
        // Update footer year automatically
        this.updateFooterYear();
        
        // Initialize language selector
        this.initializeLanguageSelector();
        
        // Initialize contact form
        this.initializeContactForm();
        
        // Initialize page modals (Terms & Privacy)
        this.initializePageModals();
        
        // Initialize blog
        this.initializeBlog();
        
        // Check for tool selection from blog
        this.checkBlogToolSelection();
        
        // Initialize mobile tool collapse functionality
        this.initializeMobileCollapse();
        
        // Initialize toast system
        this.initializeToastSystem();
        
        // Handle initial URL
        this.handleRoute();
    }

    // Immediate library loading for performance optimization
    async loadLibrary(name, url) {
        if (this.librariesLoaded.has(name)) {
            return true;
        }

        if (this.libraryPromises.has(name)) {
            return this.libraryPromises.get(name);
        }

        const promise = new Promise((resolve, reject) => {
            console.log(`📦 Loading ${name} library...`);
            this.showLibraryLoadingToast(name, true);
            
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => {
                this.librariesLoaded.add(name);
                console.log(`✅ ${name} loaded successfully`);
                this.showLibraryLoadingToast(name, false);
                resolve(true);
            };
            script.onerror = () => {
                console.error(`❌ Failed to load ${name}`);
                this.showLibraryLoadingToast(name, false);
                reject(new Error(`Failed to load ${name} library`));
            };
            document.head.appendChild(script);
        });

        this.libraryPromises.set(name, promise);
        return promise;
    }

    // Preload libraries immediately when user shows intent to use tools
    async preloadLibrariesForTool(toolType) {
        const librariesToLoad = [];

        switch (toolType) {
            case 'jpg-to-pdf':
            case 'png-to-jpg':
            case 'jpg-to-png':
                librariesToLoad.push(['jsPDF', 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js']);
                break;
            
            case 'pdf-to-jpg':
            case 'add-page-numbers':
            case 'add-watermark':
            case 'split-pdf':
            case 'crop-pdf':
                librariesToLoad.push(
                    ['pdfjsLib', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'],
                    ['PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js']
                );
                break;
            
            case 'compress-pdf':
            case 'merge-pdf':
            case 'rotate-pdf':
                librariesToLoad.push(['PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js']);
                break;
        }

        // Load all required libraries immediately
        const loadPromises = librariesToLoad.map(([name, url]) => this.loadLibrary(name, url));
        
        try {
            await Promise.all(loadPromises);
            console.log(`🚀 All libraries loaded immediately for ${toolType}`);
        } catch (error) {
            console.error(`Error loading libraries for ${toolType}:`, error);
        }
    }

    // URL Routing System
    initializeRouting() {
        // Listen for URL changes
        window.addEventListener('popstate', () => this.handleRoute());
        
        // Override tool card clicks to use routing (but not for interactive elements)
        document.addEventListener('click', (e) => {
            const toolCard = e.target.closest('.tool-card');
            
            // Don't interfere with interactive elements
            if (e.target.closest('.upload-area, .file-input, .convert-btn, .files-list, .results, button, input, select, textarea, .back-to-home-btn, .tool-options, .preview-section, .watermark-controls, .split-controls')) {
                return;
            }
            
            // Only navigate when clicking on the card header/title area
            if (toolCard && toolCard.dataset.tool && e.target.closest('.tool-header, .tool-title, .tool-description')) {
                e.preventDefault();
                this.navigateToTool(toolCard.dataset.tool);
            }
        });

        // Handle logo click to go home
        const logo = document.querySelector('.logo');
        if (logo) {
            // Only intercept logo clicks for SPA navigation on main page
            // Let natural href navigation work for tool pages
            logo.addEventListener('click', (e) => {
                const href = logo.getAttribute('href');
                // Only use SPA routing if it's a hash link on the main page
                if (href && (href.startsWith('#') && window.location.pathname === '/')) {
                    e.preventDefault();
                    this.navigateHome();
                }
                // For regular hrefs like '/', let browser handle navigation naturally
            });
            logo.style.cursor = 'pointer';
        }

        // Handle navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#tools') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.navigateHome();
                });
            }
        });
    }

    navigateToTool(toolType) {
        const url = `/tools/${toolType}`;
        history.pushState({ tool: toolType }, '', url);
        this.showTool(toolType);
        
        // Update page title for SEO
        this.updatePageTitle(toolType);
    }

    navigateHome() {
        history.pushState({}, '', '/');
        this.showHomePage();
    }

    handleRoute() {
        const path = window.location.pathname;
        const toolMatch = path.match(/^\/tools\/(.+)$/);
        
        if (toolMatch) {
            const toolType = toolMatch[1];
            this.showTool(toolType);
            this.updatePageTitle(toolType);
        } else {
            this.showHomePage();
        }
    }

    showTool(toolType) {
        // Hide all sections
        const sections = ['hero', 'tools', 'features', 'how-it-works', 'faq'];
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) element.style.display = 'none';
        });

        // Show tools section
        const toolsSection = document.getElementById('tools');
        if (toolsSection) {
            toolsSection.style.display = 'block';
        }

        // Hide all tool cards and show only the selected one
        const allCards = document.querySelectorAll('.tool-card');
        allCards.forEach(card => card.style.display = 'none');

        const targetCard = document.querySelector(`[data-tool="${toolType}"]`);
        if (targetCard) {
            targetCard.style.display = 'block';
            this.currentTool = toolType;
            
            // Ensure the tool is properly initialized
            if (!this.tools.has(toolType)) {
                console.warn(`Tool ${toolType} not found in tools Map, reinitializing...`);
                this.initializeSpecificTool(targetCard, toolType);
            }
            
            // Add back button if not already present
            this.addBackButton(targetCard);
            
            // Scroll to tools section
            toolsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    addBackButton(toolCard) {
        // Check if back button already exists
        if (toolCard.querySelector('.back-to-home-btn')) {
            return;
        }

        // Create back button using proper <a> tag for SEO and accessibility
        const backButton = document.createElement('a');
        backButton.href = '/';
        backButton.className = 'back-to-home-btn';
        backButton.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
            </svg>
            Back to All Tools
        `;
        backButton.style.cssText = `
            position: absolute;
            top: 10px;
            left: 10px;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 6px;
            z-index: 10;
            transition: all 0.2s ease;
            text-decoration: none;
        `;

        // Only intercept for SPA navigation if on main page
        backButton.addEventListener('click', (e) => {
            if (window.location.pathname === '/') {
                e.preventDefault();
                this.navigateHome();
            }
            // Otherwise let natural <a> tag navigation work
        });
        backButton.addEventListener('mouseenter', () => {
            backButton.style.background = 'var(--accent-primary)';
            backButton.style.color = 'white';
        });
        backButton.addEventListener('mouseleave', () => {
            backButton.style.background = 'var(--bg-secondary)';
            backButton.style.color = 'var(--text-primary)';
        });

        // Make tool card relative positioned
        toolCard.style.position = 'relative';
        toolCard.insertBefore(backButton, toolCard.firstChild);
    }

    showHomePage() {
        // Show all sections
        const sections = ['hero', 'tools', 'features', 'how-it-works', 'faq'];
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) element.style.display = 'block';
        });

        // Show all tool cards and remove back buttons
        const allCards = document.querySelectorAll('.tool-card');
        allCards.forEach(card => {
            card.style.display = 'block';
            const backButton = card.querySelector('.back-to-home-btn');
            if (backButton) {
                backButton.remove();
            }
        });

        this.currentTool = null;
        document.title = 'PDFrow - Free Online PDF & Image Converter Tools';
        
        // Restore original meta tags
        this.updateMetaDescription('Convert, compress, merge PDFs and other document tools online for free. Fast, secure, and no software required. Try PDFrow today!');
        this.updateMetaKeywords('PDF converter, JPG to PDF, PNG to JPG, PDF compress, PDF merge, online PDF tools, free PDF editor, document converter');
        this.updateCanonicalUrl(null);
        this.restoreOriginalOpenGraphTags();
    }

    updatePageTitle(toolType) {
        const toolData = {
            'jpg-to-pdf': {
                title: 'JPG to PDF Converter - Convert Images to PDF Online Free | PDFrow',
                description: 'Convert JPG images to PDF documents online for free. Fast, secure, and easy-to-use JPG to PDF converter. No software installation required.',
                keywords: 'JPG to PDF, convert JPG to PDF, image to PDF converter, free JPG PDF converter'
            },
            'png-to-jpg': {
                title: 'PNG to JPG Converter - Convert PNG to JPEG Online Free | PDFrow',
                description: 'Convert PNG images to JPG format online for free. High-quality PNG to JPEG conversion with customizable quality settings. No software needed.',
                keywords: 'PNG to JPG, convert PNG to JPEG, image converter, free PNG JPG converter'
            },
            'jpg-to-png': {
                title: 'JPG to PNG Converter - Convert JPEG to PNG Online Free | PDFrow',
                description: 'Convert JPG/JPEG images to PNG format online for free. Maintain transparency and quality with our easy-to-use JPG to PNG converter.',
                keywords: 'JPG to PNG, JPEG to PNG, convert JPG to PNG, image converter, free JPG PNG converter'
            },
            'pdf-to-jpg': {
                title: 'PDF to JPG Converter - Convert PDF to Images Online Free | PDFrow',
                description: 'Convert PDF documents to JPG images online for free. Extract images from PDF files with high quality. Fast and secure PDF to JPG conversion.',
                keywords: 'PDF to JPG, convert PDF to image, PDF to JPEG, extract images from PDF, free PDF converter'
            },
            'compress-pdf': {
                title: 'Compress PDF - Reduce PDF File Size Online Free | PDFrow',
                description: 'Compress PDF files online for free. Reduce PDF file size while maintaining quality. Fast, secure, and easy PDF compression tool.',
                keywords: 'compress PDF, reduce PDF size, PDF compressor, shrink PDF, optimize PDF, free PDF compression'
            },
            'merge-pdf': {
                title: 'Merge PDF - Combine Multiple PDF Files Online Free | PDFrow',
                description: 'Merge multiple PDF files into one document online for free. Combine PDFs quickly and securely without software installation.',
                keywords: 'merge PDF, combine PDF, join PDF files, PDF merger, free PDF merge tool'
            },
            'split-pdf': {
                title: 'Split PDF - Separate PDF Pages & Extract Pages Online Free | PDFrow',
                description: 'Split PDF documents online for free. Extract specific pages or separate PDF into multiple files. Fast and secure PDF splitting tool.',
                keywords: 'split PDF, separate PDF pages, extract PDF pages, PDF splitter, divide PDF, free PDF split tool'
            },
            'rotate-pdf': {
                title: 'Rotate PDF - Rotate PDF Pages Online Free | PDFrow',
                description: 'Rotate PDF pages online for free. Turn single pages or entire PDF documents by 90°, 180°, 270° or custom angles.',
                keywords: 'rotate PDF, PDF rotation, rotate PDF pages, turn PDF, flip PDF, rotate document, free PDF rotation'
            },
            'add-page-numbers': {
                title: 'Add Page Numbers to PDF - Number PDF Pages Online Free | PDFrow',
                description: 'Add page numbers to PDF documents online for free. Customize position, format, and style of page numbers. Easy-to-use PDF page numbering tool.',
                keywords: 'add page numbers PDF, PDF page numbering, number PDF pages, PDF page numbers, free PDF numbering tool'
            },
            'add-watermark': {
                title: 'Add Watermark to PDF - Protect PDF Documents Online Free | PDFrow',
                description: 'Add watermarks to PDF documents online for free. Protect your PDFs with text or image watermarks. Secure and easy-to-use watermark tool.',
                keywords: 'add watermark PDF, PDF watermark, protect PDF, PDF security, watermark tool, free PDF watermark'
            }
        };
        
        const tool = toolData[toolType];
        if (tool) {
            document.title = tool.title;
            this.updateMetaDescription(tool.description);
            this.updateMetaKeywords(tool.keywords);
            this.updateCanonicalUrl(toolType);
            this.updateOpenGraphTags(toolType, tool);
        } else {
            document.title = `${toolType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} - PDFrow`;
            this.updateCanonicalUrl(toolType);
        }
    }

    updateMetaDescription(description) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = description;
        }
    }

    updateMetaKeywords(keywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.content = keywords;
        }
    }

    updateCanonicalUrl(toolType) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            const baseUrl = window.location.origin;
            canonical.href = toolType ? `${baseUrl}/tools/${toolType}` : `${baseUrl}/`;
        }
    }

    updateOpenGraphTags(toolType, toolData) {
        if (!toolData) return;
        
        // Update OG title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.content = toolData.title;
        }
        
        // Update OG description
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.content = toolData.description;
        }
        
        // Update OG URL
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            const baseUrl = window.location.origin;
            ogUrl.content = toolType ? `${baseUrl}/tools/${toolType}` : `${baseUrl}/`;
        }
    }

    restoreOriginalOpenGraphTags() {
        // Restore original OG tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.content = 'Free PDF Converter, Compress, Merge & Edit Documents Online - PDFrow';
        }
        
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.content = 'Convert, compress, merge PDFs and other document tools online for free. Fast, secure, and no software required. Try PDFrow today!';
        }
        
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.content = window.location.origin + '/';
        }
    }

    initializeTools() {
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach(card => {
            const toolType = card.dataset.tool;
            const toolData = {
                card: card,
                files: [],
                uploadArea: card.querySelector('.upload-area'),
                fileInput: card.querySelector('.file-input'),
                filesList: card.querySelector('.files-list'),
                convertBtn: card.querySelector('.convert-btn'),
                results: card.querySelector('.results'),
                convertedFiles: []
            };
            
            // Add preview-specific elements for page numbering tool
            if (toolType === 'add-page-numbers') {
                toolData.previewSection = card.querySelector('#preview-section');
                toolData.previewCanvas = card.querySelector('#preview-canvas');
                toolData.pageInfo = card.querySelector('#page-info');
                toolData.prevPageBtn = card.querySelector('#prev-page');
                toolData.nextPageBtn = card.querySelector('#next-page');
                toolData.currentPreviewPage = 0;
                toolData.previewPDF = null;
            }
            
            // Add preview-specific elements for watermark tool
            if (toolType === 'add-watermark') {
                toolData.previewSection = card.querySelector('#watermark-preview-section');
                toolData.previewCanvas = card.querySelector('#watermark-preview-canvas');
                toolData.pageInfo = card.querySelector('#watermark-page-info');
                toolData.prevPageBtn = card.querySelector('#watermark-prev-page');
                toolData.nextPageBtn = card.querySelector('#watermark-next-page');
                toolData.currentPreviewPage = 0;
                toolData.previewPDF = null;
                toolData.watermarkImage = null;
            }
            
            // Add specific elements for split PDF tool
            if (toolType === 'split-pdf') {
                toolData.previewSection = card.querySelector('.pdf-preview-section');
                toolData.thumbnailsContainer = card.querySelector('.page-thumbnails');
                toolData.splitOptions = card.querySelector('.split-options');
                toolData.selectAllBtn = card.querySelector('.select-all-btn');
                toolData.clearSelectionBtn = card.querySelector('.clear-selection-btn');
                toolData.selectionInfo = card.querySelector('.selection-info');
                toolData.splitTabs = card.querySelectorAll('.split-tab');
                toolData.splitModes = card.querySelectorAll('.split-mode');
                toolData.pageInput = card.querySelector('.page-input');
                toolData.rangeStart = card.querySelector('.range-start');
                toolData.rangeEnd = card.querySelector('.range-end');
                toolData.splitActionBtns = card.querySelectorAll('.split-action-btn');
                toolData.selectedPages = new Set();
                toolData.currentPDF = null;
                toolData.pdfPages = [];
                toolData.isDragging = false;
                toolData.dragStartIndex = null;
                // File navigation elements
                toolData.fileNavigation = card.querySelector('#fileNavigation');
                toolData.prevFileBtn = card.querySelector('#prevFile');
                toolData.nextFileBtn = card.querySelector('#nextFile');
                toolData.currentFileNum = card.querySelector('#currentFileNum');
                toolData.totalFiles = card.querySelector('#totalFiles');
                toolData.currentFileName = card.querySelector('#currentFileName');
                toolData.currentFileIndex = 0;
            }
            
            this.tools.set(toolType, toolData);
        });
    }

    initializeSpecificTool(card, toolType) {
        // Initialize the tool data structure
        const toolData = {
            card: card,
            files: [],
            uploadArea: card.querySelector('.upload-area'),
            fileInput: card.querySelector('.file-input'),
            filesList: card.querySelector('.files-list'),
            convertBtn: card.querySelector('.convert-btn'),
            results: card.querySelector('.results'),
            convertedFiles: []
        };
        
        // Add preview-specific elements for page numbering tool
        if (toolType === 'add-page-numbers') {
            toolData.previewSection = card.querySelector('#preview-section');
            toolData.previewCanvas = card.querySelector('#preview-canvas');
            toolData.pageInfo = card.querySelector('#page-info');
            toolData.prevPageBtn = card.querySelector('#prev-page');
            toolData.nextPageBtn = card.querySelector('#next-page');
            toolData.currentPreviewPage = 0;
            toolData.previewPDF = null;
            
            console.log('Navigation buttons found:', {
                prevBtn: toolData.prevPageBtn,
                nextBtn: toolData.nextPageBtn,
                previewSection: toolData.previewSection
            });
        }
        
        // Add preview-specific elements for watermark tool
        if (toolType === 'add-watermark') {
            toolData.previewSection = card.querySelector('#watermark-preview-section');
            toolData.previewCanvas = card.querySelector('#watermark-preview-canvas');
            toolData.pageInfo = card.querySelector('#watermark-page-info');
            toolData.prevPageBtn = card.querySelector('#watermark-prev-page');
            toolData.nextPageBtn = card.querySelector('#watermark-next-page');
            toolData.currentPreviewPage = 0;
            toolData.previewPDF = null;
            toolData.watermarkImage = null;
        }
        
        // Add specific elements for split PDF tool
        if (toolType === 'split-pdf') {
            toolData.previewSection = card.querySelector('.pdf-preview-section');
            toolData.thumbnailsContainer = card.querySelector('.page-thumbnails');
            toolData.splitOptions = card.querySelector('.split-options');
            toolData.selectAllBtn = card.querySelector('.select-all-btn');
            toolData.clearSelectionBtn = card.querySelector('.clear-selection-btn');
            toolData.selectionInfo = card.querySelector('.selection-info');
            toolData.splitTabs = card.querySelectorAll('.split-tab');
            toolData.splitModes = card.querySelectorAll('.split-mode');
            toolData.pageInput = card.querySelector('.page-input');
            toolData.rangeStart = card.querySelector('.range-start');
            toolData.rangeEnd = card.querySelector('.range-end');
            toolData.splitActionBtns = card.querySelectorAll('.split-action-btn');
            toolData.selectedPages = new Set();
            toolData.currentPDF = null;
            toolData.pdfPages = [];
            toolData.isDragging = false;
            toolData.dragStartIndex = null;
            // File navigation elements
            toolData.fileNavigation = card.querySelector('#fileNavigation');
            toolData.prevFileBtn = card.querySelector('#prevFile');
            toolData.nextFileBtn = card.querySelector('#nextFile');
            toolData.currentFileNum = card.querySelector('#currentFileNum');
            toolData.totalFiles = card.querySelector('#totalFiles');
            toolData.currentFileName = card.querySelector('#currentFileName');
            toolData.currentFileIndex = 0;
        }
        
        this.tools.set(toolType, toolData);
        
        // Initialize event listeners for this specific tool
        this.initializeSpecificToolListeners(toolType);
    }

    initializeSpecificToolListeners(toolType) {
        const tool = this.tools.get(toolType);
        if (!tool) return;
        
        const { uploadArea, fileInput, convertBtn, card } = tool;

        // Immediate library loading on first user interaction for performance
        const loadLibrariesOnce = (() => {
            let loaded = false;
            return () => {
                if (!loaded) {
                    loaded = true;
                    this.preloadLibrariesForTool(toolType);
                }
            };
        })();

        // Trigger immediate loading on any tool interaction
        card.addEventListener('mouseenter', loadLibrariesOnce, { once: true });
        uploadArea.addEventListener('click', () => {
            loadLibrariesOnce();
            fileInput.click();
        });
        uploadArea.addEventListener('dragover', (e) => {
            loadLibrariesOnce();
            this.handleDragOver(e, uploadArea);
        });
        uploadArea.addEventListener('dragleave', (e) => this.handleDragLeave(e, uploadArea));
        uploadArea.addEventListener('drop', (e) => {
            loadLibrariesOnce();
            this.handleDrop(e, toolType);
        });

        fileInput.addEventListener('change', (e) => {
            loadLibrariesOnce();
            this.handleFileSelect(e, toolType);
        });
        if (convertBtn) {
            convertBtn.addEventListener('click', () => {
                loadLibrariesOnce();
                if (toolType === 'split-pdf') {
                    // For split PDF, the convert button triggers preview initialization
                    this.initializePDFPreview(toolType);
                } else {
                    this.processFiles(toolType);
                }
            });
        }

        // Add tool-specific event listeners
        this.addToolSpecificListeners(toolType, tool);
    }

    addToolSpecificListeners(toolType, tool) {
        // Add preview-specific listeners for page numbering tool
        if (toolType === 'add-page-numbers') {
            // Preview navigation (these exist from the start)
            console.log('Setting up navigation buttons:', tool.prevPageBtn, tool.nextPageBtn);
            if (tool.prevPageBtn) {
                console.log('Adding click listener to previous button');
                tool.prevPageBtn.addEventListener('click', (e) => {
                    console.log('Previous button clicked, event:', e);
                    e.preventDefault();
                    e.stopPropagation();
                    this.navigatePreview(toolType, -1);
                });
            } else {
                console.error('Previous button not found!');
            }
            if (tool.nextPageBtn) {
                console.log('Adding click listener to next button');
                tool.nextPageBtn.addEventListener('click', (e) => {
                    console.log('Next button clicked, event:', e);
                    e.preventDefault();
                    e.stopPropagation();
                    this.navigatePreview(toolType, 1);
                });
            } else {
                console.error('Next button not found!');
            }
        }
        
        // Add event listeners for watermark options
        if (toolType === 'add-watermark') {
            const addTextBtn = tool.card.querySelector('#add-text-btn');
            const imageUploadBtn = tool.card.querySelector('.watermark-image-btn');
            const imageInput = tool.card.querySelector('.watermark-image-input');
            const transparencySlider = tool.card.querySelector('#watermark-transparency');
            const positionSelect = tool.card.querySelector('#watermark-position');
            
            [transparencySlider, positionSelect].forEach(element => {
                if (element) {
                    element.addEventListener('change', () => {
                        if (tool.previewPDF) {
                            this.updateWatermarkPreview(toolType);
                        }
                    });
                }
            });
            
            if (imageUploadBtn) {
                imageUploadBtn.addEventListener('click', () => imageInput.click());
            }
            
            if (imageInput) {
                imageInput.addEventListener('change', (e) => {
                    if (e.target.files.length > 0) {
                        this.handleWatermarkImageUpload(toolType, e.target.files[0]);
                    }
                });
            }
            
            // Add text functionality
            if (addTextBtn) {
                addTextBtn.addEventListener('click', () => this.addWatermarkText(toolType));
            }
            this.setupWatermarkTextListeners(toolType);
            
            // Other options
            const clearImageBtn = tool.card.querySelector('.clear-image-btn');
            if (clearImageBtn) {
                clearImageBtn.addEventListener('click', () => {
                    tool.watermarkImage = null;
                    this.updateWatermarkPreview(toolType);
                });
            }
            
            // Preview navigation
            tool.prevPageBtn.addEventListener('click', () => this.navigatePreview(toolType, -1));
            tool.nextPageBtn.addEventListener('click', () => this.navigatePreview(toolType, 1));
        }
        
        // Add event listeners for split PDF tool
        if (toolType === 'split-pdf') {
            // Tab switching
            tool.splitTabs.forEach(tab => {
                tab.addEventListener('click', () => this.switchSplitMode(toolType, tab.dataset.mode));
            });
            
            // Selection controls
            tool.selectAllBtn.addEventListener('click', () => this.selectAllPages(toolType));
            tool.clearSelectionBtn.addEventListener('click', () => this.clearPageSelection(toolType));

            // File navigation
            if (tool.prevFileBtn) {
                console.log('Setting up prevFileBtn click listener');
                tool.prevFileBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Previous file button clicked', {
                        currentIndex: tool.currentFileIndex,
                        totalFiles: tool.files.length
                    });
                    if (tool.currentFileIndex > 0) {
                        tool.currentFileIndex--;
                        this.initializeSplitPDFPreview(toolType);
                        this.updateSplitPDFFileNavigation(toolType);
                    } else {
                        console.log('Already at first file');
                    }
                });
            } else {
                console.error('prevFileBtn not found!');
            }
            if (tool.nextFileBtn) {
                console.log('Setting up nextFileBtn click listener');
                tool.nextFileBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Next file button clicked', {
                        currentIndex: tool.currentFileIndex,
                        totalFiles: tool.files.length
                    });
                    if (tool.currentFileIndex < tool.files.length - 1) {
                        tool.currentFileIndex++;
                        this.initializeSplitPDFPreview(toolType);
                        this.updateSplitPDFFileNavigation(toolType);
                    } else {
                        console.log('Already at last file');
                    }
                });
            } else {
                console.error('nextFileBtn not found!');
            }

            // Split action buttons
            tool.splitActionBtns.forEach(btn => {
                btn.addEventListener('click', () => this.handleSplitAction(toolType, btn.dataset.action));
            });
            
            // Page input for manual page selection
            if (tool.pageInput) {
                tool.pageInput.addEventListener('input', () => this.handleManualPageInput(toolType));
            }
            
            // Range inputs
            if (tool.rangeStart && tool.rangeEnd) {
                tool.rangeStart.addEventListener('input', () => this.handleRangeInput(toolType));
                tool.rangeEnd.addEventListener('input', () => this.handleRangeInput(toolType));
            }
        }
    }

    initializeEventListeners() {
        this.tools.forEach((tool, toolType) => {
            const { uploadArea, fileInput, convertBtn, card } = tool;

            // Immediate library loading on first user interaction for performance
            const loadLibrariesOnce = (() => {
                let loaded = false;
                return () => {
                    if (!loaded) {
                        loaded = true;
                        this.preloadLibrariesForTool(toolType);
                    }
                };
            })();

            // Trigger immediate loading on any tool interaction
            card.addEventListener('mouseenter', loadLibrariesOnce, { once: true });
            uploadArea.addEventListener('click', () => {
                loadLibrariesOnce();
                fileInput.click();
            });
            uploadArea.addEventListener('dragover', (e) => {
                loadLibrariesOnce();
                this.handleDragOver(e, uploadArea);
            });
            uploadArea.addEventListener('dragleave', (e) => this.handleDragLeave(e, uploadArea));
            uploadArea.addEventListener('drop', (e) => {
                loadLibrariesOnce();
                this.handleDrop(e, toolType);
            });

            fileInput.addEventListener('change', (e) => {
                loadLibrariesOnce();
                this.handleFileSelect(e, toolType);
            });
            if (convertBtn) {
                convertBtn.addEventListener('click', () => {
                    loadLibrariesOnce();
                    if (toolType === 'split-pdf') {
                        // For split PDF, the convert button triggers preview initialization
                        if (tool.files.length > 0) {
                            this.initializeSplitPDFPreview(toolType);
                        }
                    } else {
                        this.convertFiles(toolType);
                    }
                });
            }
            
            // Add event listeners for page numbering options
            if (toolType === 'add-page-numbers') {
                const fontSizeRange = tool.card.querySelector('#font-size');
                const rangeValue = tool.card.querySelector('.range-value');
                const positionSelect = tool.card.querySelector('#position');
                const fontFamilySelect = tool.card.querySelector('#font-family');
                const numberFormatSelect = tool.card.querySelector('#number-format');
                const startPageInput = tool.card.querySelector('#start-page');
                
                fontSizeRange.addEventListener('input', (e) => {
                    rangeValue.textContent = e.target.value + 'pt';
                    this.updatePreview(toolType);
                });
                
                positionSelect.addEventListener('change', () => this.updatePreview(toolType));
                fontFamilySelect.addEventListener('change', () => this.updatePreview(toolType));
                numberFormatSelect.addEventListener('change', () => this.updatePreview(toolType));
                startPageInput.addEventListener('input', () => this.updatePreview(toolType));
                
                // Color options
                const colorOptions = tool.card.querySelectorAll('input[name="text-color"]');
                colorOptions.forEach(option => {
                    option.addEventListener('change', () => this.updatePreview(toolType));
                });
                
                // Preview navigation
                tool.prevPageBtn.addEventListener('click', () => this.navigatePreview(toolType, -1));
                tool.nextPageBtn.addEventListener('click', () => this.navigatePreview(toolType, 1));
            }
            
            // Add event listeners for watermark options
            if (toolType === 'add-watermark') {
                const watermarkTypeOptions = tool.card.querySelectorAll('input[name="watermark-type"]');
                const watermarkTextsContainer = tool.card.querySelector('.watermark-texts-container');
                const addTextBtn = tool.card.querySelector('#add-text-btn');
                const watermarkFontSize = tool.card.querySelector('#watermark-font-size');
                const watermarkFont = tool.card.querySelector('#watermark-font');
                const watermarkColorOptions = tool.card.querySelectorAll('input[name="watermark-color"]');
                const watermarkImage = tool.card.querySelector('#watermark-image');
                const watermarkPosition = tool.card.querySelector('#watermark-position');
                const watermarkOpacity = tool.card.querySelector('#watermark-opacity');
                const watermarkRotation = tool.card.querySelector('#watermark-rotation');
                
                // Type switching
                watermarkTypeOptions.forEach(option => {
                    option.addEventListener('change', (e) => {
                        const textOptions = tool.card.querySelector('#text-watermark-options');
                        const imageOptions = tool.card.querySelector('#image-watermark-options');
                        
                        if (e.target.value === 'text') {
                            textOptions.style.display = 'block';
                            imageOptions.style.display = 'none';
                        } else {
                            textOptions.style.display = 'none';
                            imageOptions.style.display = 'block';
                        }
                        this.updateWatermarkPreview(toolType);
                    });
                });
                
                // Font size select with live values
                watermarkFontSize.addEventListener('change', (e) => {
                    console.log('🎯 Font size changed to:', e.target.value);
                    this.updateWatermarkPreview(toolType);
                });
                
                watermarkOpacity.addEventListener('input', (e) => {
                    const effectItem = watermarkOpacity.closest('.effect-item');
                    const rangeValue = effectItem ? effectItem.querySelector('.range-value') : null;
                    if (rangeValue) {
                        rangeValue.textContent = e.target.value + '%';
                    }
                    this.updateWatermarkPreview(toolType);
                });
                
                watermarkRotation.addEventListener('input', (e) => {
                    console.log('🔄 Rotation changed to:', e.target.value + '°');
                    const effectItem = watermarkRotation.closest('.effect-item');
                    const rangeValue = effectItem ? effectItem.querySelector('.range-value') : null;
                    if (rangeValue) {
                        rangeValue.textContent = e.target.value + '°';
                    }
                    this.updateWatermarkPreview(toolType);
                });
                
                // Add text functionality
                addTextBtn.addEventListener('click', () => this.addWatermarkText(toolType));
                this.setupWatermarkTextListeners(toolType);
                
                // Other options
                watermarkFont.addEventListener('change', () => this.updateWatermarkPreview(toolType));
                watermarkPosition.addEventListener('change', () => this.updateWatermarkPreview(toolType));
                
                // Position dropdown
                const positionCurrent = tool.card.querySelector('#position-current');
                const positionOptions = tool.card.querySelector('#position-options');
                const positionDropdown = tool.card.querySelector('.position-dropdown');
                
                // Toggle dropdown
                positionCurrent.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isOpen = positionOptions.style.display === 'block';
                    
                    // Close all other dropdowns first
                    document.querySelectorAll('.position-options').forEach(dropdown => {
                        dropdown.style.display = 'none';
                    });
                    document.querySelectorAll('.position-current').forEach(btn => {
                        btn.classList.remove('open');
                    });
                    
                    // Toggle current dropdown
                    if (!isOpen) {
                        positionOptions.style.display = 'block';
                        positionCurrent.classList.add('open');
                    }
                });
                
                // Position option selection
                const positionOptionButtons = tool.card.querySelectorAll('.pos-option');
                positionOptionButtons.forEach(btn => {
                    btn.addEventListener('click', () => {
                        // Remove active from all options
                        positionOptionButtons.forEach(b => b.classList.remove('active'));
                        // Add active to clicked option
                        btn.classList.add('active');
                        
                        // Update current display
                        const positionText = positionCurrent.querySelector('.position-text');
                        positionText.textContent = btn.textContent;
                        
                        // Update hidden select
                        const position = btn.dataset.position;
                        watermarkPosition.value = position;
                        
                        // Close dropdown
                        positionOptions.style.display = 'none';
                        positionCurrent.classList.remove('open');
                        
                        console.log('📍 Position changed to:', position);
                        this.updateWatermarkPreview(toolType);
                    });
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', () => {
                    positionOptions.style.display = 'none';
                    positionCurrent.classList.remove('open');
                });
                
                watermarkColorOptions.forEach(option => {
                    option.addEventListener('change', () => this.updateWatermarkPreview(toolType));
                });
                
                watermarkImage.addEventListener('change', (e) => {
                    this.loadWatermarkImage(e.target.files[0], toolType);
                });
                
                // Preview navigation
                tool.prevPageBtn.addEventListener('click', () => this.navigatePreview(toolType, -1));
                tool.nextPageBtn.addEventListener('click', () => this.navigatePreview(toolType, 1));
            }
            
            // Add event listeners for split PDF tool
            if (toolType === 'split-pdf') {
                // Tab switching
                tool.splitTabs.forEach(tab => {
                    tab.addEventListener('click', () => this.switchSplitMode(toolType, tab.dataset.mode));
                });
                
                // Selection controls
                tool.selectAllBtn.addEventListener('click', () => this.selectAllPages(toolType));
                tool.clearSelectionBtn.addEventListener('click', () => this.clearPageSelection(toolType));

                // File navigation
                if (tool.prevFileBtn) {
                    tool.prevFileBtn.addEventListener('click', () => {
                        if (tool.currentFileIndex > 0) {
                            tool.currentFileIndex--;
                            this.initializeSplitPDFPreview(toolType);
                            this.updateSplitPDFFileNavigation(toolType);
                        }
                    });
                }
                if (tool.nextFileBtn) {
                    tool.nextFileBtn.addEventListener('click', () => {
                        if (tool.currentFileIndex < tool.files.length - 1) {
                            tool.currentFileIndex++;
                            this.initializeSplitPDFPreview(toolType);
                            this.updateSplitPDFFileNavigation(toolType);
                        }
                    });
                }

                // Split action buttons
                tool.splitActionBtns.forEach(btn => {
                    btn.addEventListener('click', () => this.handleSplitAction(toolType, btn.dataset.action));
                });
                
                // Page input for manual page selection
                tool.pageInput.addEventListener('input', () => this.updatePageSelectionFromInput(toolType));
                
                // Range inputs
                tool.rangeStart.addEventListener('input', () => this.updateRangePreview(toolType));
                tool.rangeEnd.addEventListener('input', () => this.updateRangePreview(toolType));
                
                // File upload specific to split PDF (single file only)
                fileInput.addEventListener('change', (e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                        // Clear existing files first for split PDF (single file mode)
                        tool.files = [];
                        this.addFiles([files[0]], toolType); // Only take first file
                    }
                });
            }
        });
    }

    handleDragOver(e, uploadArea) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    }

    handleDragLeave(e, uploadArea) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    }

    handleDrop(e, toolType) {
        e.preventDefault();
        const tool = this.tools.get(toolType);
        tool.uploadArea.classList.remove('dragover');
        const files = Array.from(e.dataTransfer.files);
        this.addFiles(files, toolType);
    }

    handleFileSelect(e, toolType) {
        const files = Array.from(e.target.files);
        this.addFiles(files, toolType);
    }

    addFiles(files, toolType) {
        const tool = this.tools.get(toolType);
        const acceptedTypes = this.getAcceptedTypes(toolType);
        const maxFileSize = 50 * 1024 * 1024; // 50MB in bytes

        const validFiles = files.filter(file => {
            if (!acceptedTypes.includes(file.type)) {
                return false;
            }
            if (file.size > maxFileSize) {
                alert(`File "${file.name}" is too large. Maximum file size is 50MB.`);
                return false;
            }
            return true;
        });

        validFiles.forEach(file => {
            if (!tool.files.some(f => f.name === file.name && f.size === file.size)) {
                tool.files.push(file);
            }
        });

        this.renderFilesList(toolType);
        this.updateConvertButton(toolType);
        
        // Show options when files are uploaded for advanced tools
        if ((toolType === 'add-page-numbers' || toolType === 'add-watermark' || toolType === 'rotate-pdf') && tool.files.length > 0) {
            this.showToolOptions(toolType);
        }
        
        // Initialize preview for page numbering tool
        if (toolType === 'add-page-numbers' && tool.files.length > 0) {
            this.initializePreview(toolType);
        }
        
        // Initialize preview for watermark tool
        if (toolType === 'add-watermark' && tool.files.length > 0) {
            this.initializeWatermarkPreview(toolType);
        }

        // For split PDF tool, we don't auto-initialize preview - user clicks convert button
    }

    /**
     * Handle file selection for tools (called from tool-specific upload handlers)
     * @param {File[]} files - Array of selected files
     * @param {string} toolType - The tool type identifier
     */
    handleFileSelection(files, toolType) {
        console.log('handleFileSelection called:', { files, toolType });
        const tool = this.tools.get(toolType);

        if (!tool) {
            console.error('Tool not found:', toolType);
            return;
        }

        // For split-pdf, support multiple files
        if (toolType === 'split-pdf') {
            // Clear existing files first
            tool.files = [];

            // Add all valid files
            files.forEach(file => {
                tool.files.push(file);
            });

            // Reset to first file
            tool.currentFileIndex = 0;

            // Update UI
            this.renderFilesList(toolType);
            this.updateConvertButton(toolType);

            // Show file navigation if multiple files
            if (tool.files.length > 1) {
                console.log('Multiple files uploaded, navigation will be available after preview');
            }

            console.log('Files added to split-pdf tool:', tool.files.length);
        } else {
            // For other tools, use the standard addFiles method
            this.addFiles(files, toolType);
        }
    }

    getAcceptedTypes(toolType) {
        switch (toolType) {
            case 'jpg-to-pdf':
            case 'jpg-to-png':
                return ['image/jpeg', 'image/jpg'];
            case 'png-to-jpg':
                return ['image/png'];
            case 'pdf-to-jpg':
            case 'compress-pdf':
            case 'merge-pdf':
            case 'rotate-pdf':
            case 'add-page-numbers':
            case 'add-watermark':
            case 'split-pdf':
            case 'crop-pdf':
                return ['application/pdf'];
            default:
                return [];
        }
    }

    removeFile(toolType, index) {
        try {
            const tool = this.tools.get(toolType);
            
            if (!tool) {
                console.error('Tool not found:', toolType);
                alert('Error: Tool not initialized. Please refresh the page and try again.');
                return;
            }
            
            if (!tool.files || index < 0 || index >= tool.files.length) {
                console.error('Invalid file index:', index, 'for tool:', toolType);
                alert('Error: Invalid file selection.');
                return;
            }
            
            tool.files.splice(index, 1);
            this.renderFilesList(toolType);
            this.updateConvertButton(toolType);
            
            // Reset file input when no files are left
            if (tool.files.length === 0) {
                tool.fileInput.value = '';
            }
            
            // Hide options if no files left for advanced tools
            if ((toolType === 'add-page-numbers' || toolType === 'add-watermark' || toolType === 'rotate-pdf') && tool.files.length === 0) {
                this.hideToolOptions(toolType);
            }
            
            // Hide preview for split PDF if no files
            if (toolType === 'split-pdf' && tool.files.length === 0) {
                this.hideSplitPDFPreview(toolType);
            }
            
            // Special handling for crop-pdf tool - call the custom removePDF function
            if (toolType === 'crop-pdf' && tool.files.length === 0 && window.pdfCutter) {
                window.pdfCutter.removePDF();
            }
        } catch (error) {
            console.error('Remove file error:', error);
            alert('Failed to remove file: ' + error.message);
        }
    }

    renderFilesList(toolType) {
        const tool = this.tools.get(toolType);
        
        if (tool.files.length === 0) {
            tool.filesList.innerHTML = '';
            return;
        }

        tool.filesList.innerHTML = tool.files.map((file, index) => `
            <div class="file-item">
                <div class="file-info">
                    <div class="file-icon">${this.getFileIcon(file.type)}</div>
                    <div class="file-details">
                        <h4>${file.name}</h4>
                        <p>${this.formatFileSize(file.size)} • ${file.type.split('/')[1].toUpperCase()}</p>
                    </div>
                </div>
                <div class="file-actions">
                    <button class="remove-btn" data-tool="${toolType}" data-index="${index}">Remove</button>
                </div>
            </div>
        `).join('');
        
        // Add event listeners to remove buttons
        const removeButtons = tool.filesList.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const toolType = e.target.dataset.tool;
                const index = parseInt(e.target.dataset.index);
                this.removeFile(toolType, index);
            });
        });
    }

    getFileIcon(type) {
        if (type.includes('jpeg') || type.includes('jpg')) return '🖼️';
        if (type.includes('png')) return '🖼️';
        if (type.includes('pdf')) return '📄';
        return '📄';
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    setButtonLoading(button, isLoading) {
        if (!button) return; // Safety check for null buttons
        
        if (isLoading) {
            button.disabled = true;
            button.dataset.originalText = button.textContent;
            button.innerHTML = '<div class="loading-spinner"></div> Processing...';
            button.classList.add('loading');
        } else {
            button.disabled = false;
            button.textContent = button.dataset.originalText || button.textContent.replace('Processing...', '');
            button.classList.remove('loading');
            delete button.dataset.originalText;
        }
    }

    showError(container, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <div class="error-icon">⚠️</div>
            <div class="error-text">${message}</div>
        `;
        container.appendChild(errorDiv);
        
        // Auto-remove error after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }

    showLibraryLoadingToast(libraryName, isLoading = true) {
        // Remove any existing library loading toasts
        const existingToast = document.querySelector('.library-loading-toast');
        if (existingToast) {
            existingToast.remove();
        }

        if (!isLoading) return;

        const toast = document.createElement('div');
        toast.className = 'library-loading-toast';
        toast.innerHTML = `
            <div class="loading-spinner"></div>
            <span>Loading ${libraryName} library...</span>
        `;
        
        document.body.appendChild(toast);
        
        // Auto-remove after 10 seconds if still there
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 10000);
    }

    updateConvertButton(toolType) {
        const tool = this.tools.get(toolType);
        const canConvert = tool.files.length > 0;
        if (tool.convertBtn) {
            tool.convertBtn.disabled = !canConvert;
        }
        
        // Update button text for split-pdf tool
        if (toolType === 'split-pdf' && tool.convertBtn) {
            tool.convertBtn.textContent = canConvert ? 'Preview & Split PDF' : 'Split PDF';
        }
        
        // Update convert hint visibility
        const convertHint = tool.card.querySelector('.convert-hint');
        if (convertHint) {
            if (canConvert) {
                convertHint.classList.add('hidden');
                tool.convertBtn.removeAttribute('title');
            } else {
                convertHint.classList.remove('hidden');
                // Re-add appropriate title based on tool type
                this.updateButtonTitle(toolType);
            }
        }
    }

    updateButtonTitle(toolType) {
        const tool = this.tools.get(toolType);
        const titles = {
            'jpg-to-pdf': 'Please upload JPG files first',
            'png-to-jpg': 'Please upload PNG files first', 
            'jpg-to-png': 'Please upload JPG files first',
            'pdf-to-jpg': 'Please upload PDF files first',
            'compress-pdf': 'Please upload PDF files first',
            'merge-pdf': 'Please upload multiple PDF files first',
            'add-page-numbers': 'Please upload PDF files first',
            'add-watermark': 'Please upload PDF files first',
            'split-pdf': 'Please upload a PDF file first'
        };
        
        if (titles[toolType]) {
            tool.convertBtn.setAttribute('title', titles[toolType]);
        }
    }

    async convertFiles(toolType) {
        const tool = this.tools.get(toolType);
        if (tool.files.length === 0) return;

        // Show loading state on convert button
        this.setButtonLoading(tool.convertBtn, true);
        
        // Show detailed progress bar with status
        tool.results.innerHTML = `
            <div class="conversion-progress">
                <div class="progress-header">
                    <div class="progress-status">
                        <div class="loading-spinner"></div>
                        <span class="progress-text">Preparing files...</span>
                    </div>
                    <span class="progress-counter">0 / ${tool.files.length}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
            </div>
        `;
        
        const progressFill = tool.results.querySelector('.progress-fill');
        const progressText = tool.results.querySelector('.progress-text');
        const progressCounter = tool.results.querySelector('.progress-counter');
        const convertedFiles = [];

        if (toolType === 'merge-pdf') {
            // Special handling for PDF merge
            try {
                progressText.textContent = 'Merging PDF files...';
                progressCounter.textContent = `Processing ${tool.files.length} files`;
                const mergedPDF = await this.mergePDFs(tool.files);
                convertedFiles.push(mergedPDF);
                progressFill.style.width = '100%';
                progressText.textContent = 'Merge complete!';
            } catch (error) {
                console.error('Error merging PDFs:', error);
                progressText.textContent = 'Error merging files';
                this.showError(tool.results, 'Failed to merge PDF files. Please try again.');
            }
        } else {
            // Regular file conversion
            for (let i = 0; i < tool.files.length; i++) {
                const file = tool.files[i];
                const progress = ((i + 1) / tool.files.length) * 100;
                
                // Update progress indicators
                progressFill.style.width = `${progress}%`;
                progressText.textContent = `Converting ${file.name}...`;
                progressCounter.textContent = `${i + 1} / ${tool.files.length}`;

                try {
                    const convertedFile = await this.convertFile(file, toolType);
                    if (convertedFile && convertedFile.multipleFiles) {
                        convertedFiles.push(...convertedFile.files);
                    } else if (convertedFile) {
                        convertedFiles.push(convertedFile);
                    }
                } catch (error) {
                    console.error(`Error converting ${file.name}:`, error);
                    progressText.textContent = `Error converting ${file.name}`;
                    // Continue with other files even if one fails
                }
            }
            
            if (convertedFiles.length > 0) {
                progressText.textContent = 'Conversion complete!';
            } else {
                progressText.textContent = 'No files were converted successfully';
            }
        }

        // Reset button loading state
        this.setButtonLoading(tool.convertBtn, false);
        
        tool.convertedFiles = convertedFiles;
        this.renderResults(toolType, convertedFiles);
    }

    async convertFile(file, toolType) {
        if (toolType === 'pdf-to-jpg') {
            return this.convertPDFToJPG(file);
        } else if (toolType === 'compress-pdf') {
            return this.compressPDF(file);
        } else if (toolType === 'merge-pdf') {
            return null; // Merge PDF is handled differently in convertFiles method
        } else if (toolType === 'rotate-pdf') {
            return this.rotatePDF(file);
        } else if (toolType === 'add-page-numbers') {
            return this.addPageNumbers(file);
        } else if (toolType === 'add-watermark') {
            return this.addWatermark(file);
        }

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);

                        if (toolType === 'jpg-to-pdf') {
                            this.convertToPDF(img, file.name).then(resolve).catch(reject);
                        } else if (toolType === 'png-to-jpg') {
                            const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.9);
                            const blob = this.dataURLToBlob(jpegDataUrl);
                            resolve({
                                name: this.changeFileExtension(file.name, 'jpg'),
                                blob: blob,
                                type: 'image/jpeg'
                            });
                        } else if (toolType === 'jpg-to-png') {
                            const pngDataUrl = canvas.toDataURL('image/png');
                            const blob = this.dataURLToBlob(pngDataUrl);
                            resolve({
                                name: this.changeFileExtension(file.name, 'png'),
                                blob: blob,
                                type: 'image/png'
                            });
                        }
                    };
                    img.src = e.target.result;
                } catch (error) {
                    reject(error);
                }
            };
            reader.readAsDataURL(file);
        });
    }

    async convertToPDF(img, originalName) {
        // Ensure jsPDF is loaded for immediate performance
        await this.loadLibrary('jsPDF', 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        
        const imgWidth = img.width;
        const imgHeight = img.height;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const width = imgWidth * ratio;
        const height = imgHeight * ratio;
        
        const x = (pdfWidth - width) / 2;
        const y = (pdfHeight - height) / 2;
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        ctx.drawImage(img, 0, 0);
        
        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        pdf.addImage(imgData, 'JPEG', x, y, width, height);
        
        const pdfBlob = pdf.output('blob');
        
        return {
            name: this.changeFileExtension(originalName, 'pdf'),
            blob: pdfBlob,
            type: 'application/pdf'
        };
    }

    dataURLToBlob(dataURL) {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    changeFileExtension(filename, newExtension) {
        const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;
        return `${nameWithoutExt}.${newExtension}`;
    }

    async convertPDFToJPG(file) {
        try {
            // Ensure PDF.js is loaded for immediate performance
            await this.loadLibrary('pdfjsLib', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
            
            // Initialize PDF.js worker
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            const convertedFiles = [];

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const scale = 2.0; // Higher scale for better quality
                const viewport = page.getViewport({ scale });

                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({
                    canvasContext: ctx,
                    viewport: viewport
                }).promise;

                const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.9);
                const blob = this.dataURLToBlob(jpegDataUrl);
                
                const baseFileName = this.changeFileExtension(file.name, '');
                const fileName = pdf.numPages > 1 ? 
                    `${baseFileName}_page_${pageNum}.jpg` : 
                    `${baseFileName}.jpg`;

                convertedFiles.push({
                    name: fileName,
                    blob: blob,
                    type: 'image/jpeg'
                });
            }

            return { multipleFiles: true, files: convertedFiles };
        } catch (error) {
            console.error('Error converting PDF to JPG:', error);
            throw error;
        }
    }

    async compressPDF(file) {
        try {
            // Ensure PDF-lib is loaded for immediate performance
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            
            // Compress by reducing image quality and removing unnecessary data
            const pdfBytes = await pdfDoc.save({
                useObjectStreams: false,
                addDefaultPage: false,
                objectsPerTick: 50,
            });

            // Additional compression by re-processing images at lower quality
            const compressedPdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
            const finalPdfBytes = await compressedPdfDoc.save({
                useObjectStreams: true,
                addDefaultPage: false,
            });

            const blob = new Blob([finalPdfBytes], { type: 'application/pdf' });
            const originalSize = file.size;
            const compressedSize = blob.size;
            const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

            return {
                name: this.changeFileExtension(file.name, '') + '_compressed.pdf',
                blob: blob,
                type: 'application/pdf',
                compressionInfo: `${compressionRatio}% reduction (${this.formatFileSize(originalSize)} → ${this.formatFileSize(compressedSize)})`
            };
        } catch (error) {
            console.error('Error compressing PDF:', error);
            throw error;
        }
    }

    async rotatePDF(file) {
        try {
            // Ensure PDF-lib is loaded
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            
            // Get rotation angle from the tool settings
            const tool = this.tools.get('rotate-pdf');
            const rotationAngle = tool.currentRotationAngle || 90;
            
            // Rotate all pages
            const pages = pdfDoc.getPages();
            pages.forEach(page => {
                page.setRotation(PDFLib.degrees(rotationAngle));
            });
            
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            
            return {
                name: this.changeFileExtension(file.name, '') + '_rotated.pdf',
                blob: blob,
                type: 'application/pdf',
                rotationInfo: `Rotated ${rotationAngle}° clockwise`
            };
        } catch (error) {
            console.error('Error rotating PDF:', error);
            throw error;
        }
    }

    async mergePDFs(files) {
        try {
            // Ensure PDF-lib is loaded for immediate performance
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            const mergedPdf = await PDFLib.PDFDocument.create();
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => mergedPdf.addPage(page));
            }

            const pdfBytes = await mergedPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            
            // Generate merged filename
            const baseNames = files.map(f => this.changeFileExtension(f.name, '')).slice(0, 2);
            const mergedName = baseNames.length > 1 ? 
                `${baseNames[0]}_and_${files.length - 1}_more_merged.pdf` : 
                `${baseNames[0]}_merged.pdf`;

            return {
                name: mergedName,
                blob: blob,
                type: 'application/pdf',
                mergeInfo: `${files.length} files merged into one PDF`
            };
        } catch (error) {
            console.error('Error merging PDFs:', error);
            throw error;
        }
    }

    async addPageNumbers(file) {
        try {
            // Ensure PDF-lib is loaded for immediate performance
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            
            // Get page numbering options from the UI
            const tool = this.tools.get('add-page-numbers');
            const position = tool.card.querySelector('#position').value;
            const fontSize = parseInt(tool.card.querySelector('#font-size').value);
            const fontFamily = tool.card.querySelector('#font-family').value;
            const numberFormat = tool.card.querySelector('#number-format').value;
            const startPage = parseInt(tool.card.querySelector('#start-page').value);
            const textColor = tool.card.querySelector('input[name="text-color"]:checked').value;
            
            const pages = pdfDoc.getPages();
            const totalPages = pages.length;
            
            // Embed font
            let font;
            switch (fontFamily) {
                case 'Times-Roman':
                    font = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman);
                    break;
                case 'Courier':
                    font = await pdfDoc.embedFont(PDFLib.StandardFonts.Courier);
                    break;
                default:
                    font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
            }
            
            pages.forEach((page, index) => {
                const pageNumber = index + startPage;
                const { width, height } = page.getSize();
                
                // Generate page number text based on format
                let pageText;
                switch (numberFormat) {
                    case 'page-of-total':
                        pageText = `Page ${pageNumber} of ${totalPages + startPage - 1}`;
                        break;
                    case 'dash-format':
                        pageText = `- ${pageNumber} -`;
                        break;
                    default:
                        pageText = pageNumber.toString();
                }
                
                // Calculate position
                const textWidth = font.widthOfTextAtSize(pageText, fontSize);
                let x, y;
                
                switch (position) {
                    case 'top-left':
                        x = 20;
                        y = height - 20;
                        break;
                    case 'top-center':
                        x = (width - textWidth) / 2;
                        y = height - 20;
                        break;
                    case 'top-right':
                        x = width - textWidth - 20;
                        y = height - 20;
                        break;
                    case 'bottom-left':
                        x = 20;
                        y = 20;
                        break;
                    case 'bottom-right':
                        x = width - textWidth - 20;
                        y = 20;
                        break;
                    default: // bottom-center
                        x = (width - textWidth) / 2;
                        y = 20;
                }
                
                // Add page number to page
                const colorRGB = this.getTextColor(textColor, false);
                page.drawText(pageText, {
                    x: x,
                    y: y,
                    size: fontSize,
                    font: font,
                    color: PDFLib.rgb(colorRGB.r, colorRGB.g, colorRGB.b),
                });
            });
            
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            
            return {
                name: this.changeFileExtension(file.name, '') + '_numbered.pdf',
                blob: blob,
                type: 'application/pdf',
                numberingInfo: `Page numbers added (${numberFormat} format, ${position} position)`
            };
        } catch (error) {
            console.error('Error adding page numbers:', error);
            throw error;
        }
    }

    setupPageNumberListeners(toolType) {
        const tool = this.tools.get(toolType);
        
        console.log('Setting up page number listeners after options are visible');
        
        // Options event listeners - using the actual form field names
        const positionSelect = tool.card.querySelector('[name="pageNumberPosition"]');
        const formatSelect = tool.card.querySelector('[name="pageNumberFormat"]');
        const colorSelect = tool.card.querySelector('[name="pageNumberColor"]');

        console.log('Found elements:', { positionSelect, formatSelect, colorSelect });

        [positionSelect, formatSelect, colorSelect].forEach((element, index) => {
            if (element) {
                const elementName = ['position', 'format', 'color'][index];
                console.log(`Adding change listener for ${elementName}:`, element);
                element.addEventListener('change', (e) => {
                    console.log(`${elementName} changed to:`, e.target.value);
                    if (tool.previewPDF) {
                        console.log('Triggering preview re-render...');
                        this.renderPreviewPage(toolType);
                    } else {
                        console.log('No preview PDF loaded yet');
                    }
                });
            } else {
                console.log(`Element not found: ${['position', 'format', 'color'][index]}`);
            }
        });
    }

    async initializePreview(toolType) {
        const tool = this.tools.get(toolType);
        if (tool.files.length === 0) return;
        
        try {
            // Ensure PDF.js is loaded for immediate performance
            await this.loadLibrary('pdfjsLib', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
            
            // Initialize PDF.js worker
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            
            const firstFile = tool.files[0];
            const arrayBuffer = await firstFile.arrayBuffer();
            tool.previewPDF = await pdfjsLib.getDocument(arrayBuffer).promise;
            tool.currentPreviewPage = 1;
            
            // Show preview section
            tool.previewSection.style.display = 'block';
            
            // Update page info
            tool.pageInfo.textContent = `Page ${tool.currentPreviewPage} of ${tool.previewPDF.numPages}`;
            
            // Update navigation buttons
            if (tool.prevPageBtn) {
                tool.prevPageBtn.disabled = tool.currentPreviewPage === 1;
                console.log('Previous button disabled:', tool.prevPageBtn.disabled);
            }
            if (tool.nextPageBtn) {
                tool.nextPageBtn.disabled = tool.currentPreviewPage === tool.previewPDF.numPages;
                console.log('Next button disabled:', tool.nextPageBtn.disabled);
            }
            
            // Render first page
            await this.renderPreviewPage(toolType);
        } catch (error) {
            console.error('Error initializing preview:', error);
        }
    }

    async renderPreviewPage(toolType) {
        const tool = this.tools.get(toolType);
        if (!tool.previewPDF) {
            console.log('No preview PDF available for rendering');
            return;
        }
        
        console.log('Rendering preview page:', tool.currentPreviewPage);
        
        try {
            const page = await tool.previewPDF.getPage(tool.currentPreviewPage);
            const scale = 1.8; // Larger scale for better quality preview
            const viewport = page.getViewport({ scale });
            
            const canvas = tool.previewCanvas;
            const ctx = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            
            // Clear canvas first
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Render PDF page
            await page.render({
                canvasContext: ctx,
                viewport: viewport
            }).promise;
            
            console.log('PDF page rendered, adding overlay');
            
            // Add page number overlay
            this.renderPageNumberOverlay(toolType, ctx, viewport);
            
            console.log('Preview rendering complete');
        } catch (error) {
            console.error('Error rendering preview page:', error);
        }
    }

    renderPageNumberOverlay(toolType, ctx, viewport) {
        const tool = this.tools.get(toolType);
        
        // Get current settings from the actual form elements
        const position = tool.card.querySelector('[name="pageNumberPosition"]')?.value || 'bottom-center';
        const fontSize = 12 * 1.8; // Scale for preview
        const fontFamily = 'Arial';
        const numberFormat = tool.card.querySelector('[name="pageNumberFormat"]')?.value || '1';
        const startPage = 1;
        const textColor = tool.card.querySelector('[name="pageNumberColor"]')?.value || 'black';
        
        console.log('Overlay settings:', { position, numberFormat, textColor, fontSize });
        
        const currentPageNumber = tool.currentPreviewPage + startPage - 1;
        const totalPages = tool.previewPDF.numPages + startPage - 1;
        
        // Generate page number text based on format
        let pageText;
        switch (numberFormat) {
            case 'i':
                pageText = this.toRoman(currentPageNumber).toLowerCase();
                break;
            case 'I':
                pageText = this.toRoman(currentPageNumber);
                break;
            case 'a':
                pageText = this.toAlpha(currentPageNumber).toLowerCase();
                break;
            case 'A':
                pageText = this.toAlpha(currentPageNumber);
                break;
            default:
                pageText = currentPageNumber.toString();
        }
        
        // Set font
        let fontName = 'Arial';
        switch (fontFamily) {
            case 'Times-Roman':
                fontName = 'Times, serif';
                break;
            case 'Courier':
                fontName = 'Courier, monospace';
                break;
            default:
                fontName = 'Arial, sans-serif';
        }
        
        ctx.font = `${fontSize}px ${fontName}`;
        ctx.fillStyle = this.getTextColor(textColor, true); // Get color with preview visibility
        ctx.textAlign = 'left';
        
        // Calculate position
        const textMetrics = ctx.measureText(pageText);
        const textWidth = textMetrics.width;
        let x, y;
        
        switch (position) {
            case 'top-left':
                x = 20;
                y = 30;
                break;
            case 'top-center':
                x = (viewport.width - textWidth) / 2;
                y = 30;
                break;
            case 'top-right':
                x = viewport.width - textWidth - 20;
                y = 30;
                break;
            case 'bottom-left':
                x = 20;
                y = viewport.height - 10;
                break;
            case 'bottom-center':
                x = (viewport.width - textWidth) / 2;
                y = viewport.height - 10;
                break;
            case 'bottom-right':
                x = viewport.width - textWidth - 20;
                y = viewport.height - 10;
                break;
            default: // bottom-center fallback
                x = (viewport.width - textWidth) / 2;
                y = viewport.height - 10;
        }
        
        // Draw page number without background
        
        ctx.fillStyle = this.getTextColor(textColor, true);
        ctx.fillText(pageText, x, y);
        
        console.log('Drew page number:', { pageText, x, y, position, color: textColor });
    }

    getTextColor(colorValue, forPreview = false) {
        // Handle hex color values
        if (colorValue.startsWith('#')) {
            const hex = colorValue.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            
            if (forPreview) {
                return `rgba(${r}, ${g}, ${b}, 0.9)`;
            } else {
                return { r: r / 255, g: g / 255, b: b / 255 };
            }
        }
        
        // Fallback for named colors (for backward compatibility)
        const colors = {
            black: forPreview ? 'rgba(0, 0, 0, 0.9)' : { r: 0, g: 0, b: 0 },
            gray: forPreview ? 'rgba(102, 102, 102, 0.9)' : { r: 0.4, g: 0.4, b: 0.4 },
            blue: forPreview ? 'rgba(33, 150, 243, 0.9)' : { r: 0.13, g: 0.59, b: 0.95 },
            red: forPreview ? 'rgba(244, 67, 54, 0.9)' : { r: 0.96, g: 0.26, b: 0.21 },
            green: forPreview ? 'rgba(76, 175, 80, 0.9)' : { r: 0.3, g: 0.69, b: 0.31 }
        };
        
        return colors[colorValue] || colors.black;
    }

    async updatePreview(toolType) {
        const tool = this.tools.get(toolType);
        if (tool.previewPDF) {
            await this.renderPreviewPage(toolType);
        }
    }

    navigatePreview(toolType, direction) {
        const tool = this.tools.get(toolType);
        if (!tool.previewPDF) {
            console.log('No preview PDF loaded');
            return;
        }
        
        const newPage = tool.currentPreviewPage + direction;
        console.log(`Navigating from page ${tool.currentPreviewPage} to ${newPage} (total: ${tool.previewPDF.numPages})`);
        
        if (newPage >= 1 && newPage <= tool.previewPDF.numPages) {
            tool.currentPreviewPage = newPage;
            
            // Update page info
            tool.pageInfo.textContent = `Page ${tool.currentPreviewPage} of ${tool.previewPDF.numPages}`;
            
            // Update navigation buttons
            tool.prevPageBtn.disabled = tool.currentPreviewPage === 1;
            tool.nextPageBtn.disabled = tool.currentPreviewPage === tool.previewPDF.numPages;
            
            console.log(`Updated to page ${tool.currentPreviewPage}, prev disabled: ${tool.prevPageBtn.disabled}, next disabled: ${tool.nextPageBtn.disabled}`);
            
            // Re-render page
            this.renderPreviewPage(toolType);
        } else {
            console.log(`Page ${newPage} is out of range (1-${tool.previewPDF.numPages})`);
        }
    }

    renderResults(toolType, convertedFiles) {
        const tool = this.tools.get(toolType);
        
        // Store the converted files for download
        tool.convertedFiles = convertedFiles;
        
        if (convertedFiles.length === 0) {
            tool.results.innerHTML = '<p>No files were converted successfully.</p>';
            return;
        }

        tool.results.innerHTML = `
            <h3>Converted Files:</h3>
            ${convertedFiles.map((file, index) => `
                <div class="result-item">
                    <div class="result-info">
                        <div class="result-icon">${this.getResultIcon(file.type)}</div>
                        <div>
                            <h4>${file.name}</h4>
                            <p>${this.formatFileSize(file.blob.size)} • ${file.type.split('/')[1].toUpperCase()}</p>
                            ${file.compressionInfo ? `<p class="compression-info">📉 ${file.compressionInfo}</p>` : ''}
                            ${file.mergeInfo ? `<p class="merge-info">🔗 ${file.mergeInfo}</p>` : ''}
                            ${file.numberingInfo ? `<p class="numbering-info">🔢 ${file.numberingInfo}</p>` : ''}
                            ${file.watermarkInfo ? `<p class="watermark-info"><img src="add watermark.png" alt="" style="width: 70px; height: 70px; vertical-align: middle; margin-right: 4px;"> ${file.watermarkInfo}</p>` : ''}
                            ${file.extractInfo ? `<p class="extract-info">✂️ ${file.extractInfo}</p>` : ''}
                            ${file.splitInfo ? `<p class="split-info">📁 ${file.splitInfo}</p>` : ''}
                        </div>
                    </div>
                    <button class="download-btn" data-tool="${toolType}" data-index="${index}">Download</button>
                </div>
            `).join('')}
        `;
        
        // Add event listeners to download buttons
        const downloadButtons = tool.results.querySelectorAll('.download-btn');
        downloadButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const toolType = e.target.dataset.tool;
                const index = parseInt(e.target.dataset.index);
                this.downloadFile(toolType, index);
            });
        });
    }

    getResultIcon(type) {
        if (type.includes('pdf')) return '📄';
        if (type.includes('jpeg') || type.includes('jpg')) return '🖼️';
        if (type.includes('png')) return '🖼️';
        if (type.includes('zip')) return '📦';
        return '📁';
    }

    downloadFile(toolType, index) {
        try {
            const tool = this.tools.get(toolType);
            console.log('Download attempt - toolType:', toolType, 'index:', index);
            console.log('convertedFiles:', tool ? tool.convertedFiles : 'tool not found');
            
            if (!tool) {
                console.error('Tool not found:', toolType);
                alert('Error: Tool not initialized. Please refresh the page and try again.');
                return;
            }
            
            if (!tool.convertedFiles || !tool.convertedFiles[index]) {
                console.error('No file found at index', index);
                this.showError(tool.results, 'Download failed: File not found');
                return;
            }
            
            const file = tool.convertedFiles[index];
            console.log('Downloading file:', file.name, 'Size:', file.blob.size);
            
            // Use new download method with toast notification
            this.downloadWithToast(file.blob, file.name);
            
            // Show success banner after download
            this.showSuccessBanner();
            
            // Auto-remove file from the list after download
            this.removeFileAfterDownload(toolType, index);
        } catch (error) {
            console.error('Download error:', error);
            alert('Download failed: ' + error.message);
        }
    }

    async addPageNumbers(file) {
        try {
            // Load PDF-lib
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            // Get page number settings from the form
            const tool = this.tools.get('add-page-numbers');
            const position = document.querySelector('[name="pageNumberPosition"]')?.value || 'bottom-center';
            const format = document.querySelector('[name="pageNumberFormat"]')?.value || '1';
            const color = document.querySelector('[name="pageNumberColor"]')?.value || 'black';
            
            // Load the PDF file
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();
            
            // Define position coordinates
            const getPosition = (page, pageNumber) => {
                const { width, height } = page.getSize();
                const margin = 30;
                
                switch (position) {
                    case 'top-left':
                        return { x: margin, y: height - margin };
                    case 'top-center':
                        return { x: width / 2, y: height - margin };
                    case 'top-right':
                        return { x: width - margin, y: height - margin };
                    case 'bottom-left':
                        return { x: margin, y: margin };
                    case 'bottom-center':
                        return { x: width / 2, y: margin };
                    case 'bottom-right':
                        return { x: width - margin, y: margin };
                    default:
                        return { x: width / 2, y: margin };
                }
            };
            
            // Format page number
            const formatPageNumber = (pageNum) => {
                switch (format) {
                    case 'i':
                        return this.toRoman(pageNum).toLowerCase();
                    case 'I':
                        return this.toRoman(pageNum);
                    case 'a':
                        return this.toAlpha(pageNum).toLowerCase();
                    case 'A':
                        return this.toAlpha(pageNum);
                    default:
                        return pageNum.toString();
                }
            };
            
            // Add page numbers to each page
            pages.forEach((page, index) => {
                const pageNumber = index + 1;
                const formattedNumber = formatPageNumber(pageNumber);
                const { x, y } = getPosition(page, pageNumber);
                
                const colorRGB = this.getTextColor(color, false);
                page.drawText(formattedNumber, {
                    x: x - (formattedNumber.length * 3), // Rough centering
                    y: y,
                    size: 12,
                    color: PDFLib.rgb(colorRGB.r, colorRGB.g, colorRGB.b),
                });
            });
            
            // Save the PDF
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            
            return {
                name: this.changeFileExtension(file.name, 'pdf').replace('.pdf', '_numbered.pdf'),
                blob: blob,
                type: 'application/pdf'
            };
            
        } catch (error) {
            console.error('Add page numbers error:', error);
            throw error;
        }
    }
    
    // Helper method to convert number to Roman numerals
    toRoman(num) {
        const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        let result = '';
        
        for (let i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                result += numerals[i];
                num -= values[i];
            }
        }
        
        return result;
    }
    
    // Helper method to convert number to alphabetic
    toAlpha(num) {
        let result = '';
        while (num > 0) {
            num--;
            result = String.fromCharCode(65 + (num % 26)) + result;
            num = Math.floor(num / 26);
        }
        return result;
    }

    async addWatermark(file) {
        try {
            // Ensure PDF-lib is loaded for immediate performance
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            
            // Get watermark options from the UI
            const tool = this.tools.get('add-watermark');
            const watermarkType = tool.card.querySelector('input[name="watermark-type"]:checked').value;
            const position = tool.card.querySelector('#watermark-position').value;
            const opacity = parseInt(tool.card.querySelector('#watermark-opacity').value) / 100;
            const rotation = parseInt(tool.card.querySelector('#watermark-rotation').value);
            
            const pages = pdfDoc.getPages();
            
            for (const page of pages) {
                const { width, height } = page.getSize();
                
                if (watermarkType === 'text') {
                    await this.addTextWatermarkToPage(page, width, height, tool, opacity, position, rotation, pdfDoc);
                } else if (watermarkType === 'image' && tool.watermarkImage) {
                    await this.addImageWatermarkToPage(page, width, height, tool, opacity, position, rotation, pdfDoc);
                }
            }
            
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            
            return {
                name: this.changeFileExtension(file.name, '') + '_watermarked.pdf',
                blob: blob,
                type: 'application/pdf',
                watermarkInfo: `${watermarkType} watermark added (${position} position, ${Math.round(opacity * 100)}% opacity)`
            };
        } catch (error) {
            console.error('Error adding watermark:', error);
            throw error;
        }
    }

    async addTextWatermarkToPage(page, width, height, tool, opacity, position, rotation, pdfDoc) {
        const texts = this.getWatermarkTexts('add-watermark');
        if (texts.length === 0) return;
        
        const fontSize = parseInt(tool.card.querySelector('#watermark-font-size').value);
        const fontFamily = tool.card.querySelector('#watermark-font').value;
        const textColor = tool.card.querySelector('input[name="watermark-color"]:checked').value;
        
        // Embed font
        let font;
        switch (fontFamily) {
            case 'Times-Roman':
                font = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman);
                break;
            case 'Courier':
                font = await pdfDoc.embedFont(PDFLib.StandardFonts.Courier);
                break;
            default:
                font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        }
        
        // Get color
        const colorRGB = this.getTextColor(textColor, false);
        
        // For diagonal positioning, create multiple copies across the page
        if (position === 'diagonal') {
            // Combine all texts into one string for the diagonal pattern
            const combinedText = texts.join(' • ');
            const textWidth = font.widthOfTextAtSize(combinedText, fontSize);
            const textHeight = fontSize;
            
            // Simple diagonal pattern with proper spacing
            // Calculate minimum safe spacing to avoid overlaps
            const rotatedTextWidth = Math.abs(textWidth * Math.cos(Math.PI/4)) + Math.abs(textHeight * Math.sin(Math.PI/4));
            const rotatedTextHeight = Math.abs(textWidth * Math.sin(Math.PI/4)) + Math.abs(textHeight * Math.cos(Math.PI/4));
            
            const spacingX = rotatedTextWidth + 100; // Safe horizontal spacing
            const spacingY = rotatedTextHeight + 80; // Safe vertical spacing
            
            // Create diagonal lines covering the entire page area
            // Calculate how many lines needed to cover width + extra for corners
            const totalWidth = width + height; // Include diagonal coverage
            const numDiagonalLines = Math.ceil(totalWidth / spacingX) + 4;
            
            for (let line = 0; line < numDiagonalLines; line++) {
                // Start each diagonal line further back to ensure full coverage
                const startX = (line * spacingX) - height - spacingX;
                
                // Start from top and go all the way down past bottom
                let currentX = startX;
                let currentY = height + spacingY; // Start above the page
                
                // Continue until we're completely past the page
                while (currentX < width + textWidth + spacingX) {
                    // Draw if any part of text would be visible on page
                    if (currentX + textWidth > -50 && currentX < width + 50 && 
                        currentY - textHeight > -50 && currentY < height + 50) {
                        
                        // Only apply bounds if text is actually on the page
                        if (currentX + textWidth > 0 && currentX < width && 
                            currentY > 0 && currentY < height) {
                            
                            const finalX = Math.max(10, Math.min(currentX, width - textWidth - 10));
                            const finalY = Math.max(textHeight + 10, Math.min(currentY, height - 10));
                            
                            page.drawText(combinedText, {
                                x: finalX,
                                y: finalY,
                                size: fontSize,
                                font: font,
                                color: PDFLib.rgb(colorRGB.r, colorRGB.g, colorRGB.b),
                                opacity: opacity * 0.5, // More subtle for better readability
                                rotate: PDFLib.degrees(rotation - 45), // Diagonal angle + user rotation
                            });
                        }
                    }
                    
                    // Move to next position along the diagonal
                    currentX += spacingX;
                    currentY -= spacingY;
                }
            }
        } else {
            // For other positions, stack texts vertically
            const spacing = fontSize * 1.2;
            const totalHeight = texts.length * spacing;
            
            texts.forEach((text, index) => {
                const textWidth = font.widthOfTextAtSize(text, fontSize);
                const textHeight = font.heightAtSize(fontSize);
                
                // Calculate base position for the first text
                const basePos = this.calculateWatermarkPosition(position, width, height, textWidth, totalHeight);
                
                // Adjust y position for each text
                const x = basePos.x;
                const y = basePos.y - index * spacing;
                
                page.drawText(text, {
                    x: x,
                    y: y,
                    size: fontSize,
                    font: font,
                    color: PDFLib.rgb(colorRGB.r, colorRGB.g, colorRGB.b),
                    opacity: opacity,
                    rotate: PDFLib.degrees(rotation),
                });
            });
        }
    }

    async addImageWatermarkToPage(page, width, height, tool, opacity, position, rotation, pdfDoc) {
        if (!tool.watermarkImage) return;
        
        try {
            const imageBytes = await tool.watermarkImage.arrayBuffer();
            let image;
            
            if (tool.watermarkImage.type === 'image/png') {
                image = await pdfDoc.embedPng(imageBytes);
            } else {
                image = await pdfDoc.embedJpg(imageBytes);
            }
            
            const imageDims = image.scale(0.5); // Increased from 0.3 to 0.5 for better quality
            
            // For diagonal positioning, create multiple copies across the page
            if (position === 'diagonal') {
                const imageWidth = imageDims.width;
                const imageHeight = imageDims.height;
                
                // Simple diagonal pattern with proper spacing (same as text algorithm)
                // Calculate minimum safe spacing to avoid overlaps
                const rotatedImageWidth = Math.abs(imageWidth * Math.cos(Math.PI/4)) + Math.abs(imageHeight * Math.sin(Math.PI/4));
                const rotatedImageHeight = Math.abs(imageWidth * Math.sin(Math.PI/4)) + Math.abs(imageHeight * Math.cos(Math.PI/4));
                
                const spacingX = rotatedImageWidth + 120; // Safe horizontal spacing
                const spacingY = rotatedImageHeight + 100; // Safe vertical spacing
                
                // Create diagonal lines covering the entire page area
                // Calculate how many lines needed to cover width + extra for corners
                const totalWidth = width + height; // Include diagonal coverage
                const numDiagonalLines = Math.ceil(totalWidth / spacingX) + 4;
                
                for (let line = 0; line < numDiagonalLines; line++) {
                    // Start each diagonal line further back to ensure full coverage
                    const startX = (line * spacingX) - height - spacingX;
                    
                    // Start from top and go all the way down past bottom
                    let currentX = startX;
                    let currentY = height + spacingY; // Start above the page
                    
                    // Continue until we're completely past the page
                    while (currentX < width + imageWidth + spacingX) {
                        // Draw if any part of image would be visible on page
                        if (currentX + imageWidth > -50 && currentX < width + 50 && 
                            currentY - imageHeight > -50 && currentY < height + 50) {
                            
                            // Only apply bounds if image is actually on the page
                            if (currentX + imageWidth > 0 && currentX < width && 
                                currentY > 0 && currentY < height) {
                                
                                const finalX = Math.max(10, Math.min(currentX, width - imageWidth - 10));
                                const finalY = Math.max(imageHeight + 10, Math.min(currentY, height - 10));
                                
                                page.drawImage(image, {
                                    x: finalX,
                                    y: finalY,
                                    width: imageWidth,
                                    height: imageHeight,
                                    opacity: opacity * 0.5, // More subtle for better readability
                                    rotate: PDFLib.degrees(rotation - 45), // Diagonal angle + user rotation
                                });
                            }
                        }
                        
                        // Move to next position along the diagonal
                        currentX += spacingX;
                        currentY -= spacingY;
                    }
                }
            } else {
                // Calculate position for single image
                const { x, y } = this.calculateWatermarkPosition(position, width, height, imageDims.width, imageDims.height);
                
                // Add single image watermark
                page.drawImage(image, {
                    x: x,
                    y: y,
                    width: imageDims.width,
                    height: imageDims.height,
                    opacity: opacity,
                    rotate: PDFLib.degrees(rotation),
                });
            }
        } catch (error) {
            console.error('Error adding image watermark:', error);
        }
    }

    calculateWatermarkPosition(position, pageWidth, pageHeight, itemWidth, itemHeight) {
        let x, y;
        const margin = 50;
        
        switch (position) {
            // User says "top" -> they want visual top -> PDF needs Y near pageHeight
            case 'top-left':
                x = margin;
                y = pageHeight - margin - itemHeight;
                break;
            case 'top-center':
                x = (pageWidth - itemWidth) / 2;
                y = pageHeight - margin - itemHeight;
                break;
            case 'top-right':
                x = pageWidth - margin - itemWidth;
                y = pageHeight - margin - itemHeight;
                break;
            // User says "center" vertically -> middle of page
            case 'center-left':
                x = margin;
                y = (pageHeight - itemHeight) / 2;
                break;
            case 'center-right':
                x = pageWidth - margin - itemWidth;
                y = (pageHeight - itemHeight) / 2;
                break;
            // User says "bottom" -> they want visual bottom -> PDF needs Y near 0
            case 'bottom-left':
                x = margin;
                y = margin;
                break;
            case 'bottom-center':
                x = (pageWidth - itemWidth) / 2;
                y = margin;
                break;
            case 'bottom-right':
                x = pageWidth - margin - itemWidth;
                y = margin;
                break;
            case 'diagonal':
                // For diagonal, return center - the diagonal logic is handled separately
                x = (pageWidth - itemWidth) / 2;
                y = (pageHeight - itemHeight) / 2;
                break;
            default: // center
                x = (pageWidth - itemWidth) / 2;
                y = (pageHeight - itemHeight) / 2;
        }
        
        return { x, y };
    }

    // Canvas coordinate system (Y=0 at top, increases downward)
    calculateCanvasWatermarkPosition(position, canvasWidth, canvasHeight, itemWidth, itemHeight) {
        let x, y;
        const margin = 50;
        
        switch (position) {
            // User says "top" -> Canvas Y near 0
            case 'top-left':
                x = margin;
                y = margin;
                break;
            case 'top-center':
                x = (canvasWidth - itemWidth) / 2;
                y = margin;
                break;
            case 'top-right':
                x = canvasWidth - margin - itemWidth;
                y = margin;
                break;
            // User says "center" vertically -> middle of canvas
            case 'center-left':
                x = margin;
                y = (canvasHeight - itemHeight) / 2;
                break;
            case 'center-right':
                x = canvasWidth - margin - itemWidth;
                y = (canvasHeight - itemHeight) / 2;
                break;
            // User says "bottom" -> Canvas Y near canvasHeight
            case 'bottom-left':
                x = margin;
                y = canvasHeight - margin - itemHeight;
                break;
            case 'bottom-center':
                x = (canvasWidth - itemWidth) / 2;
                y = canvasHeight - margin - itemHeight;
                break;
            case 'bottom-right':
                x = canvasWidth - margin - itemWidth;
                y = canvasHeight - margin - itemHeight;
                break;
            case 'diagonal':
                // For diagonal, return center - the diagonal logic is handled separately
                x = (canvasWidth - itemWidth) / 2;
                y = (canvasHeight - itemHeight) / 2;
                break;
            default: // center
                x = (canvasWidth - itemWidth) / 2;
                y = (canvasHeight - itemHeight) / 2;
        }
        
        return { x, y };
    }

    async loadWatermarkImage(file, toolType) {
        if (!file) return;
        
        const tool = this.tools.get(toolType);
        tool.watermarkImage = file;
        this.updateWatermarkPreview(toolType);
    }

    async initializeWatermarkPreview(toolType) {
        const tool = this.tools.get(toolType);
        if (tool.files.length === 0) return;
        
        try {
            // Ensure PDF.js is loaded for immediate performance
            await this.loadLibrary('pdfjsLib', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
            
            // Initialize PDF.js worker
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            
            const firstFile = tool.files[0];
            const arrayBuffer = await firstFile.arrayBuffer();
            tool.previewPDF = await pdfjsLib.getDocument(arrayBuffer).promise;
            tool.currentPreviewPage = 1;
            
            // Show preview section
            tool.previewSection.style.display = 'block';
            
            // Update page info
            tool.pageInfo.textContent = `Page ${tool.currentPreviewPage} of ${tool.previewPDF.numPages}`;
            
            // Update navigation buttons
            tool.prevPageBtn.disabled = tool.currentPreviewPage === 1;
            tool.nextPageBtn.disabled = tool.currentPreviewPage === tool.previewPDF.numPages;
            
            // Render first page
            await this.renderWatermarkPreviewPage(toolType);
        } catch (error) {
            console.error('Error initializing watermark preview:', error);
        }
    }

    async renderWatermarkPreviewPage(toolType) {
        const tool = this.tools.get(toolType);
        if (!tool.previewPDF) return;
        
        try {
            const page = await tool.previewPDF.getPage(tool.currentPreviewPage);
            const scale = 1.2; // Better scale for quality preview
            const viewport = page.getViewport({ scale });
            
            const canvas = tool.previewCanvas;
            const ctx = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            
            // Render PDF page
            await page.render({
                canvasContext: ctx,
                viewport: viewport
            }).promise;
            
            // Add watermark overlay
            this.renderWatermarkOverlay(toolType, ctx, viewport);
        } catch (error) {
            console.error('Error rendering watermark preview page:', error);
        }
    }

    renderWatermarkOverlay(toolType, ctx, viewport) {
        const tool = this.tools.get(toolType);
        
        // Get current settings
        const watermarkType = tool.card.querySelector('input[name="watermark-type"]:checked').value;
        const position = tool.card.querySelector('#watermark-position').value;
        const opacity = parseInt(tool.card.querySelector('#watermark-opacity').value) / 100;
        const rotation = parseInt(tool.card.querySelector('#watermark-rotation').value);
        
        ctx.save();
        ctx.globalAlpha = opacity;
        
        if (watermarkType === 'text') {
            this.renderTextWatermarkOverlay(tool, ctx, viewport, position, rotation);
        } else if (watermarkType === 'image' && tool.watermarkImage) {
            this.renderImageWatermarkOverlay(tool, ctx, viewport, position, rotation);
        }
        
        ctx.restore();
    }

    renderTextWatermarkOverlay(tool, ctx, viewport, position, rotation) {
        const texts = this.getWatermarkTexts('add-watermark');
        if (texts.length === 0) return;
        
        const fontSize = parseInt(tool.card.querySelector('#watermark-font-size').value) * 1.1; // Increased from 0.6 to 1.1 for better quality preview
        const fontFamily = tool.card.querySelector('#watermark-font').value;
        const textColor = tool.card.querySelector('input[name="watermark-color"]:checked').value;
        
        // Set font
        let fontName = 'Arial';
        switch (fontFamily) {
            case 'Times-Roman':
                fontName = 'Times, serif';
                break;
            case 'Courier':
                fontName = 'Courier, monospace';
                break;
            default:
                fontName = 'Arial, sans-serif';
        }
        
        ctx.font = `${fontSize}px ${fontName}`;
        ctx.fillStyle = this.getTextColor(textColor, true);
        
        // For diagonal positioning, create multiple copies across the page
        if (position === 'diagonal') {
            // Combine all texts into one string for the diagonal pattern
            const combinedText = texts.join(' • ');
            const textMetrics = ctx.measureText(combinedText);
            const textWidth = textMetrics.width;
            const textHeight = fontSize;
            
            // Simple diagonal pattern with proper spacing (scaled for preview)
            // Calculate minimum safe spacing to avoid overlaps
            const rotatedTextWidth = Math.abs(textWidth * Math.cos(Math.PI/4)) + Math.abs(textHeight * Math.sin(Math.PI/4));
            const rotatedTextHeight = Math.abs(textWidth * Math.sin(Math.PI/4)) + Math.abs(textHeight * Math.cos(Math.PI/4));
            
            const spacingX = rotatedTextWidth + 60; // Safe horizontal spacing (scaled for preview)
            const spacingY = rotatedTextHeight + 50; // Safe vertical spacing (scaled for preview)
            
            // Set reduced opacity for diagonal pattern
            const originalAlpha = ctx.globalAlpha;
            ctx.globalAlpha = originalAlpha * 0.5;
            
            // Create diagonal lines covering the entire preview area
            // Calculate how many lines needed to cover width + extra for corners
            const totalWidth = viewport.width + viewport.height; // Include diagonal coverage
            const numDiagonalLines = Math.ceil(totalWidth / spacingX) + 4;
            
            for (let line = 0; line < numDiagonalLines; line++) {
                // Start each diagonal line further back to ensure full coverage
                const startX = (line * spacingX) - viewport.height - spacingX;
                
                // Start from top and go all the way down past bottom
                let currentX = startX;
                let currentY = viewport.height + spacingY; // Start above the preview
                
                // Continue until we're completely past the preview
                while (currentX < viewport.width + textWidth + spacingX) {
                    // Draw if any part of text would be visible on preview
                    if (currentX + textWidth > -30 && currentX < viewport.width + 30 && 
                        currentY - textHeight > -30 && currentY < viewport.height + 30) {
                        
                        // Only apply bounds if text is actually on the preview
                        if (currentX + textWidth > 0 && currentX < viewport.width && 
                            currentY > 0 && currentY < viewport.height) {
                            
                            const finalX = Math.max(5, Math.min(currentX, viewport.width - textWidth - 5));
                            const finalY = Math.max(textHeight + 5, Math.min(currentY, viewport.height - 5));
                            
                            ctx.save();
                            
                            // Apply rotation (diagonal + user rotation)
                            ctx.translate(finalX + textWidth / 2, finalY);
                            ctx.rotate(((rotation - 45) * Math.PI) / 180);
                            ctx.translate(-textWidth / 2, 0);
                            
                            ctx.fillText(combinedText, 0, 0);
                            ctx.restore();
                        }
                    }
                    
                    // Move to next position along the diagonal
                    currentX += spacingX;
                    currentY -= spacingY;
                }
            }
            
            // Restore original alpha
            ctx.globalAlpha = originalAlpha;
        } else {
            // For other positions, stack texts vertically
            const spacing = fontSize * 1.2;
            const totalHeight = texts.length * spacing;
            
            texts.forEach((text, index) => {
                ctx.save();
                
                const textMetrics = ctx.measureText(text);
                const textWidth = textMetrics.width;
                const textHeight = fontSize;
                
                // Calculate base position for the first text (using canvas coordinate system)
                const basePos = this.calculateCanvasWatermarkPosition(position, viewport.width, viewport.height, textWidth, totalHeight);
                
                const x = basePos.x;
                const y = basePos.y - index * spacing;
                
                // Apply rotation
                ctx.translate(x + textWidth / 2, y + textHeight / 2);
                ctx.rotate((rotation * Math.PI) / 180);
                ctx.translate(-textWidth / 2, -textHeight / 2);
                
                ctx.fillText(text, 0, textHeight * 0.8);
                ctx.restore();
            });
        }
    }

    renderImageWatermarkOverlay(tool, ctx, viewport, position, rotation) {
        if (!tool.watermarkImageElement) return;
        
        const img = tool.watermarkImageElement;
        const scaledWidth = img.width * 0.35; // Increased from 0.2 to 0.35 for better quality
        const scaledHeight = img.height * 0.35; // Increased from 0.2 to 0.35 for better quality
        
        // For diagonal positioning, create multiple copies across the page
        if (position === 'diagonal') {
            // Simple diagonal pattern with proper spacing (scaled for preview, same as text algorithm)
            // Calculate minimum safe spacing to avoid overlaps
            const rotatedImageWidth = Math.abs(scaledWidth * Math.cos(Math.PI/4)) + Math.abs(scaledHeight * Math.sin(Math.PI/4));
            const rotatedImageHeight = Math.abs(scaledWidth * Math.sin(Math.PI/4)) + Math.abs(scaledHeight * Math.cos(Math.PI/4));
            
            const spacingX = rotatedImageWidth + 80; // Safe horizontal spacing (scaled for preview)
            const spacingY = rotatedImageHeight + 60; // Safe vertical spacing (scaled for preview)
            
            // Set reduced opacity for diagonal pattern
            const originalAlpha = ctx.globalAlpha;
            ctx.globalAlpha = originalAlpha * 0.5;
            
            // Create diagonal lines covering the entire preview area
            // Calculate how many lines needed to cover width + extra for corners
            const totalWidth = viewport.width + viewport.height; // Include diagonal coverage
            const numDiagonalLines = Math.ceil(totalWidth / spacingX) + 4;
            
            for (let line = 0; line < numDiagonalLines; line++) {
                // Start each diagonal line further back to ensure full coverage
                const startX = (line * spacingX) - viewport.height - spacingX;
                
                // Start from top and go all the way down past bottom
                let currentX = startX;
                let currentY = viewport.height + spacingY; // Start above the preview
                
                // Continue until we're completely past the preview
                while (currentX < viewport.width + scaledWidth + spacingX) {
                    // Draw if any part of image would be visible on preview
                    if (currentX + scaledWidth > -30 && currentX < viewport.width + 30 && 
                        currentY - scaledHeight > -30 && currentY < viewport.height + 30) {
                        
                        // Only apply bounds if image is actually on the preview
                        if (currentX + scaledWidth > 0 && currentX < viewport.width && 
                            currentY > 0 && currentY < viewport.height) {
                            
                            const finalX = Math.max(5, Math.min(currentX, viewport.width - scaledWidth - 5));
                            const finalY = Math.max(scaledHeight + 5, Math.min(currentY, viewport.height - 5));
                            
                            ctx.save();
                            
                            // Apply rotation (diagonal + user rotation)
                            ctx.translate(finalX + scaledWidth / 2, finalY - scaledHeight / 2);
                            ctx.rotate(((rotation - 45) * Math.PI) / 180);
                            ctx.translate(-scaledWidth / 2, -scaledHeight / 2);
                            
                            ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
                            ctx.restore();
                        }
                    }
                    
                    // Move to next position along the diagonal
                    currentX += spacingX;
                    currentY -= spacingY;
                }
            }
            
            // Restore original alpha
            ctx.globalAlpha = originalAlpha;
        } else {
            // Calculate position (using canvas coordinate system)
            const { x, y } = this.calculateCanvasWatermarkPosition(position, viewport.width, viewport.height, scaledWidth, scaledHeight);
            
            // Apply rotation
            ctx.translate(x + scaledWidth / 2, y + scaledHeight / 2);
            ctx.rotate((rotation * Math.PI) / 180);
            ctx.translate(-scaledWidth / 2, -scaledHeight / 2);
            
            ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
        }
    }

    async updateWatermarkPreview(toolType) {
        const tool = this.tools.get(toolType);
        
        // Load image for preview if needed
        const watermarkType = tool.card.querySelector('input[name="watermark-type"]:checked').value;
        if (watermarkType === 'image' && tool.watermarkImage && !tool.watermarkImageElement) {
            const img = new Image();
            img.onload = () => {
                tool.watermarkImageElement = img;
                if (tool.previewPDF) {
                    this.renderWatermarkPreviewPage(toolType);
                }
            };
            img.src = URL.createObjectURL(tool.watermarkImage);
        } else if (tool.previewPDF) {
            await this.renderWatermarkPreviewPage(toolType);
        }
    }

    addWatermarkText(toolType) {
        const tool = this.tools.get(toolType);
        const container = tool.card.querySelector('.watermark-texts-container');
        const addBtn = tool.card.querySelector('#add-text-btn');
        
        const textItem = document.createElement('div');
        textItem.className = 'watermark-text-item';
        textItem.innerHTML = `
            <input type="text" class="watermark-text-input" placeholder="Enter watermark text" value="">
            <button type="button" class="remove-text-btn">×</button>
        `;
        
        container.insertBefore(textItem, addBtn);
        
        // Add event listeners for the new text input
        const textInput = textItem.querySelector('.watermark-text-input');
        const removeBtn = textItem.querySelector('.remove-text-btn');
        
        textInput.addEventListener('input', () => this.updateWatermarkPreview(toolType));
        removeBtn.addEventListener('click', () => {
            textItem.remove();
            this.updateRemoveButtonsVisibility(toolType);
            this.updateWatermarkPreview(toolType);
        });
        
        this.updateRemoveButtonsVisibility(toolType);
        textInput.focus();
    }

    setupWatermarkTextListeners(toolType) {
        const tool = this.tools.get(toolType);
        const existingInputs = tool.card.querySelectorAll('.watermark-text-input');
        const existingRemoveBtns = tool.card.querySelectorAll('.remove-text-btn');
        
        existingInputs.forEach(input => {
            input.addEventListener('input', () => this.updateWatermarkPreview(toolType));
        });
        
        existingRemoveBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const textItem = e.target.closest('.watermark-text-item');
                textItem.remove();
                this.updateRemoveButtonsVisibility(toolType);
                this.updateWatermarkPreview(toolType);
            });
        });
        
        this.updateRemoveButtonsVisibility(toolType);
    }

    updateRemoveButtonsVisibility(toolType) {
        const tool = this.tools.get(toolType);
        const textItems = tool.card.querySelectorAll('.watermark-text-item');
        const removeButtons = tool.card.querySelectorAll('.remove-text-btn');
        
        // Show remove buttons only if there's more than one text item
        removeButtons.forEach(btn => {
            btn.style.display = textItems.length > 1 ? 'flex' : 'none';
        });
    }

    getWatermarkTexts(toolType) {
        const tool = this.tools.get(toolType);
        const textInputs = tool.card.querySelectorAll('.watermark-text-input');
        return Array.from(textInputs).map(input => input.value).filter(text => text.trim() !== '');
    }

    initializeThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        // Define theme order: light -> dimmed -> dark -> light...
        const themes = ['light', 'dimmed', 'dark'];
        
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem('theme') || 'dark';
        
        // Apply saved theme
        this.setTheme(savedTheme);
        
        // Theme toggle event listener - cycles through all three themes
        themeToggle.addEventListener('click', () => {
            const currentTheme = this.getCurrentTheme();
            const currentIndex = themes.indexOf(currentTheme);
            const nextIndex = (currentIndex + 1) % themes.length;
            const nextTheme = themes[nextIndex];
            
            this.setTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    getCurrentTheme() {
        const body = document.body;
        if (body.classList.contains('light-mode')) return 'light';
        if (body.classList.contains('dimmed-mode')) return 'dimmed';
        return 'dark';
    }

    setTheme(theme) {
        const body = document.body;
        
        // Remove all theme classes
        body.classList.remove('light-mode', 'dimmed-mode', 'dark-mode');
        
        // Add the appropriate theme class
        switch (theme) {
            case 'light':
                body.classList.add('light-mode');
                break;
            case 'dimmed':
                body.classList.add('dimmed-mode');
                break;
            case 'dark':
            default:
                body.classList.add('dark-mode');
                break;
        }
        
        // Add smooth transition effect
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    }
    
    initializeFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        });
    }
    
    initializeMobileCollapse() {
        // Only initialize on mobile/tablet screens
        const isMobile = () => window.innerWidth <= 768;
        
        const initCollapse = () => {
            if (!isMobile()) return;
            
            const toolCards = document.querySelectorAll('.tool-card');
            
            toolCards.forEach((card, index) => {
                // Skip if already initialized
                if (card.dataset.collapseInitialized) return;
                
                const collapseHeader = card.querySelector('.tool-collapse-header');
                const toolContent = card.querySelector('.tool-content');
                
                if (!collapseHeader || !toolContent) return;
                
                // Start collapsed by default (except first tool)
                if (index > 0) {
                    card.classList.add('collapsed');
                }
                
                // Add click handler
                collapseHeader.addEventListener('click', () => {
                    card.classList.toggle('collapsed');
                });
                
                card.dataset.collapseInitialized = 'true';
            });
        };
        
        // Initialize on load
        initCollapse();
        
        // Re-initialize on window resize (when switching between mobile/desktop)
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Reset initialization flags when switching to/from mobile
                document.querySelectorAll('.tool-card').forEach(card => {
                    if (!isMobile()) {
                        card.classList.remove('collapsed');
                        card.removeAttribute('data-collapse-initialized');
                    }
                });
                initCollapse();
            }, 250);
        });
    }
    
    initializeSmoothScrolling() {
        // Handle all navigation links and buttons with anchor hrefs
        const smoothScrollHandler = (e) => {
            const link = e.currentTarget;
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Get the actual navigation height
                    const nav = document.querySelector('.main-nav');
                    let navHeight = 0;
                    
                    if (nav) {
                        const navRect = nav.getBoundingClientRect();
                        navHeight = navRect.height;
                    }
                    
                    // Get target element position
                    const targetRect = targetElement.getBoundingClientRect();
                    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const targetPosition = targetRect.top + currentScrollTop - navHeight - 30;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                }
            }
        };
        
        // Apply to all relevant elements
        const navLinks = document.querySelectorAll('.nav-link, .btn-primary, .btn-secondary, a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', smoothScrollHandler);
        });
        
        // Also ensure any dynamically added links work
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link && !link.hasAttribute('data-scroll-handled')) {
                link.setAttribute('data-scroll-handled', 'true');
                smoothScrollHandler(e);
            }
        });
    }
    
    updateFooterYear() {
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            const currentYear = new Date().getFullYear();
            currentYearElement.textContent = currentYear;
        }
    }
    
    initializeLanguageSelector() {
        const languageBtn = document.getElementById('languageBtn');
        const languageMenu = document.getElementById('languageMenu');
        const languageDropdown = document.querySelector('.language-dropdown');
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        const languageItems = document.querySelectorAll('.language-item');
        
        // Get saved language or default to English
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        
        // Load saved language on page load
        this.loadLanguage(savedLanguage);
        
        // Toggle dropdown
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('open');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            languageDropdown.classList.remove('open');
        });
        
        // Handle language selection
        languageItems.forEach(item => {
            item.addEventListener('click', () => {
                const selectedLang = item.dataset.lang;
                const selectedFlag = item.dataset.flag;
                const selectedName = item.querySelector('span:last-child').textContent;
                
                // Update button display
                currentFlag.textContent = selectedFlag;
                currentLang.textContent = selectedName;
                
                // Save selected language
                localStorage.setItem('selectedLanguage', selectedLang);
                
                // Load translations
                this.loadLanguage(selectedLang);
                
                // Close dropdown
                languageDropdown.classList.remove('open');
            });
        });
    }
    
    loadLanguage(langCode) {
        const translations = this.getTranslations(langCode);
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Update current language display
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        const langInfo = this.getLanguageInfo(langCode);
        
        if (currentFlag && currentLang && langInfo) {
            currentFlag.textContent = langInfo.flag;
            currentLang.textContent = langInfo.name;
        }
    }
    
    getLanguageInfo(langCode) {
        const languages = {
            'en': { name: 'English', flag: '🇺🇸' },
            'es': { name: 'Español', flag: '🇪🇸' },
            'fr': { name: 'Français', flag: '🇫🇷' },
            'de': { name: 'Deutsch', flag: '🇩🇪' },
            'it': { name: 'Italiano', flag: '🇮🇹' },
            'tr': { name: 'Türkçe', flag: '🇹🇷' },
            'pt': { name: 'Português', flag: '🇵🇹' },
            'ru': { name: 'Русский', flag: '🇷🇺' },
            'zh': { name: '中文', flag: '🇨🇳' },
            'ja': { name: '日本語', flag: '🇯🇵' },
            'ar': { name: 'العربية', flag: '🇸🇦' },
            'hi': { name: 'हिन्दी', flag: '🇮🇳' }
        };
        return languages[langCode];
    }
    
    getTranslations(langCode) {
        const translations = {
            'en': {
                // Navigation
                'nav_tools': 'Tools',
                'nav_features': 'Features',
                'nav_how_it_works': 'How It Works',
                'nav_faq': 'FAQ',
                // Hero Section
                'hero_badge': 'Next-Gen Document Processing',
                'hero_title_1': 'Free Online PDF Tools — Convert, Compress &',
                'hero_title_2': 'Merge Files Instantly',
                'hero_subtitle': 'Smart processing: Maximum privacy for PDF tools, powerful server conversion for Office documents. All files protected.',
                'btn_start_converting': 'Start Converting',
                'stat_files_processed': 'Files Processed',
                'stat_uptime': 'Uptime',
                'stat_average_speed': 'Average Speed',
                // Tools Section
                'tools_title': 'Powerful Document Tools',
                'tools_subtitle': 'Choose from our comprehensive suite of document processing tools',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG to PDF',
                'tool_jpg_to_pdf_desc': 'Convert JPG images to PDF documents',
                'tool_png_to_jpg_title': 'PNG to JPG',
                'tool_png_to_jpg_desc': 'Convert PNG images to JPG format',
                'tool_jpg_to_png_title': 'JPG to PNG',
                'tool_jpg_to_png_desc': 'Convert JPG images to PNG format',
                'tool_pdf_to_jpg_title': 'PDF to JPG',
                'tool_pdf_to_jpg_desc': 'Convert PDF pages to JPG images',
                'tool_compress_pdf_title': 'Compress PDF',
                'tool_compress_pdf_desc': 'Reduce PDF file size for easier sharing',
                'tool_merge_pdf_title': 'Merge PDF',
                'tool_merge_pdf_desc': 'Combine multiple PDF files into one',
                'tool_add_page_numbers_title': 'Add Page Numbers',
                'tool_add_page_numbers_desc': 'Add page numbers to PDFs with custom positioning and styling',
                'tool_add_watermark_title': 'Add Watermark',
                'tool_add_watermark_desc': 'Add text or image watermarks to PDFs with custom styling',
                // Upload Areas
                'drop_jpg_files': 'Drop JPG files here',
                'drop_png_files': 'Drop PNG files here',
                'drop_pdf_files': 'Drop PDF files here',
                'or_click_browse': 'or click to browse',
                'or_click_browse_multiple': 'or click to browse (multiple files)',
                // Convert Buttons
                'convert_to_pdf': 'Convert to PDF',
                'convert_to_jpg': 'Convert to JPG',
                'convert_to_png': 'Convert to PNG',
                'compress_pdf_btn': 'Compress PDF',
                'merge_pdfs_btn': 'Merge PDFs',
                'add_page_numbers_btn': 'Add Page Numbers',
                'add_watermark_btn': 'Add Watermark',
                // Convert Hints
                'hint_upload_files_first': 'Upload files above to enable conversion',
                'hint_upload_multiple_files': 'Upload 2 or more PDF files above to enable merging',
                // Features Section
                'features_title': 'Why Choose PDFrow?',
                'features_subtitle': 'Experience the future of document processing with our advanced features',
                'feature_lightning_fast_title': 'Lightning Fast',
                'feature_lightning_fast_desc': 'Process documents in seconds with our optimized algorithms and advanced client-side processing technology.',
                'feature_secure_title': '100% Secure',
                'feature_secure_desc': 'PDF tools process locally in your browser. Office conversions use secure servers with automatic file deletion.',
                'feature_no_installation_title': 'No Installation',
                'feature_no_installation_desc': 'Works directly in your browser. No software downloads, no updates, no hassle. Just instant access.',
                'feature_multi_device_title': 'Multi-Device',
                'feature_multi_device_desc': 'Access from any device - desktop, tablet, or mobile. Responsive design ensures perfect experience everywhere.',
                'feature_high_quality_title': 'High Quality',
                'feature_high_quality_desc': 'Professional compression and conversion algorithms maintain document quality while optimizing file sizes.',
                'feature_always_free_title': 'Always Free',
                'feature_always_free_desc': 'Core functionality is completely free. No hidden costs, no subscriptions, no limitations on file processing.',
                // How It Works Section
                'how_it_works_title': 'How It Works',
                'how_it_works_subtitle': 'Simple, fast, and secure document processing in three easy steps',
                'step_upload_title': 'Upload Your Files',
                'step_upload_desc': 'Drag and drop your documents or click to browse. Supports PDF, JPG, PNG formats. Files are processed using our hybrid approach - locally in your browser for PDF tools, securely on our servers for Office conversions.',
                'step_choose_title': 'Choose Your Tool',
                'step_choose_desc': 'Select from our comprehensive toolkit: convert, compress, merge, add watermarks, or page numbers. Advanced options available for customization.',
                'step_download_title': 'Download Results',
                'step_download_desc': 'Get your processed files instantly. Download individually or batch download all files. Files are automatically cleaned up for your privacy.',
                // FAQ Section
                'faq_title': 'Frequently Asked Questions',
                'faq_subtitle': 'Everything you need to know about PDFrow',
                'faq_q1': 'Is PDFrow really free to use?',
                'faq_a1': 'Yes! PDFrow is completely free to use. All core functionality including conversion, compression, merging, and editing tools are available at no cost. No hidden fees or subscription required.',
                'faq_q2': 'Where are my files processed?',
                'faq_a2': 'We use a hybrid approach for your security and convenience:',
                'faq_a2_pdf': 'PDF tools (compress, merge, edit, etc.): Processed 100% in your browser - files never leave your device',
                'faq_a2_office': 'Office conversions (Word, Excel, PowerPoint): Processed on our secure servers with automatic file deletion after 1 hour',
                'faq_q3': 'What file formats are supported?',
                'faq_a3': 'We support the most common document and image formats: PDF, JPG, JPEG, and PNG. Each tool is optimized for specific format conversions and processing tasks.',
                'faq_q4': 'Is there a file size limit?',
                'faq_a4': 'Maximum file size is 50MB per file. This limit ensures optimal performance and processing speed for all users.',
                'faq_q5': 'Do I need to install any software?',
                'faq_a5': 'No installation required! PDFrow works entirely in your web browser. Just visit our website and start using the tools immediately. Compatible with Chrome, Firefox, Safari, and Edge.',
                'faq_q6': 'Can I use PDFrow on mobile devices?',
                'faq_a6': 'Yes! PDFrow is fully responsive and works on smartphones, tablets, and desktop computers. The interface adapts to your screen size for optimal user experience.',
                'faq_q7': 'Are my Office documents safe during conversion?',
                'faq_a7': 'Yes! Office conversions use our secure cloud servers with:',
                'faq_a7_ssl': 'SSL encryption during transfer',
                'faq_a7_deletion': 'Automatic file deletion within 1 hour',
                'faq_a7_access': 'No human access to your files',
                'faq_a7_isolation': 'Isolated processing environments',
                // Footer
                'language': 'Language',
                'footer_description': 'Next-generation document processing platform. Fast, secure, and always free.',
                'footer_tools_title': 'Tools',
                'footer_pdf_converter': 'PDF Converter',
                'footer_image_converter': 'Image Converter',
                'footer_pdf_compressor': 'PDF Compressor',
                'footer_pdf_merger': 'PDF Merger',
                'footer_features_title': 'Features',
                'footer_add_watermarks': 'Add Watermarks',
                'footer_page_numbers': 'Page Numbers',
                'footer_batch_processing': 'Batch Processing',
                'footer_privacy_first': 'Privacy First',
                'footer_support_title': 'Support',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'How It Works',
                'footer_contact': 'Contact',
                'footer_help_center': 'Help Center',
                'footer_copyright': '© 2025 PDFrow. All rights reserved. Made with ❤️ for document processing.',
                // Contact Form
                'contact_form_title': 'How can we help you today?',
                'contact_form_subtitle': 'Questions, bug reports, feature requests, or general feedback',
                'contact_select_topic': 'Select a topic',
                'contact_option_question': 'Ask a question',
                'contact_option_bug': 'Report a bug',
                'contact_option_feature': 'Request a feature',
                'contact_option_feedback': 'General feedback',
                'contact_option_business': 'Business inquiry',
                'contact_name_placeholder': 'Your full name',
                'contact_message_placeholder': 'Tell us more details...',
                'contact_attach_file': 'Attach a file (optional)',
                'contact_email_placeholder': 'Your email address',
                'contact_terms_text': 'I\'ve read and accepted the',
                'contact_terms_link': 'Terms & Conditions',
                'contact_and': 'and',
                'contact_privacy_link': 'Privacy Policy',
                'contact_submit_btn': 'Send Message',
                'contact_confidential_note': 'All your information will be treated confidentially'
            },
            'es': {
                // Navigation
                'nav_tools': 'Herramientas',
                'nav_features': 'Características',
                'nav_how_it_works': 'Cómo Funciona',
                'nav_faq': 'FAQ',
                // Hero Section
                'hero_badge': 'Procesamiento de Documentos de Nueva Generación',
                'hero_title_1': 'Transforma Tus Documentos con',
                'hero_title_2': 'Precisión Profesional',
                'hero_subtitle': 'Procesamiento inteligente: Máxima privacidad para herramientas PDF, conversión de servidor potente para documentos de Office. Todos los archivos protegidos.',
                'btn_start_converting': 'Comenzar a Convertir',
                'stat_files_processed': 'Archivos Procesados',
                'stat_uptime': 'Tiempo Activo',
                'stat_average_speed': 'Velocidad Promedio',
                // Tools Section
                'tools_title': 'Herramientas Potentes para Documentos',
                'tools_subtitle': 'Elige de nuestro completo conjunto de herramientas de procesamiento de documentos',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG a PDF',
                'tool_jpg_to_pdf_desc': 'Convierte imágenes JPG a documentos PDF',
                'tool_png_to_jpg_title': 'PNG a JPG',
                'tool_png_to_jpg_desc': 'Convierte imágenes PNG a formato JPG',
                'tool_jpg_to_png_title': 'JPG a PNG',
                'tool_jpg_to_png_desc': 'Convierte imágenes JPG a formato PNG',
                'tool_pdf_to_jpg_title': 'PDF a JPG',
                'tool_pdf_to_jpg_desc': 'Convierte páginas PDF a imágenes JPG',
                'tool_compress_pdf_title': 'Comprimir PDF',
                'tool_compress_pdf_desc': 'Reduce el tamaño del archivo PDF para compartir fácilmente',
                'tool_merge_pdf_title': 'Fusionar PDF',
                'tool_merge_pdf_desc': 'Combina múltiples archivos PDF en uno',
                'tool_add_page_numbers_title': 'Agregar Números de Página',
                'tool_add_page_numbers_desc': 'Agrega números de página a PDFs con posicionamiento y estilo personalizados',
                'tool_add_watermark_title': 'Agregar Marca de Agua',
                'tool_add_watermark_desc': 'Agrega marcas de agua de texto o imagen a PDFs con estilo personalizado',
                // Upload Areas
                'drop_jpg_files': 'Suelta archivos JPG aquí',
                'drop_png_files': 'Suelta archivos PNG aquí',
                'drop_pdf_files': 'Suelta archivos PDF aquí',
                'or_click_browse': 'o haz clic para navegar',
                'or_click_browse_multiple': 'o haz clic para navegar (múltiples archivos)',
                // Convert Buttons
                'convert_to_pdf': 'Convertir a PDF',
                'convert_to_jpg': 'Convertir a JPG',
                'convert_to_png': 'Convertir a PNG',
                'compress_pdf_btn': 'Comprimir PDF',
                'merge_pdfs_btn': 'Fusionar PDFs',
                'add_page_numbers_btn': 'Agregar Números de Página',
                'add_watermark_btn': 'Agregar Marca de Agua',
                // Convert Hints
                'hint_upload_files_first': 'Sube archivos arriba para habilitar la conversión',
                'hint_upload_multiple_files': 'Sube 2 o más archivos PDF arriba para habilitar la fusión',
                // Features Section
                'features_title': '¿Por Qué Elegir PDFrow?',
                'features_subtitle': 'Experimenta el futuro del procesamiento de documentos con nuestras características avanzadas',
                'feature_lightning_fast_title': 'Súper Rápido',
                'feature_lightning_fast_desc': 'Procesa documentos en segundos con nuestros algoritmos optimizados y tecnología avanzada de procesamiento del lado del cliente.',
                'feature_secure_title': '100% Seguro',
                'feature_secure_desc': 'Las herramientas PDF se procesan localmente en tu navegador. Las conversiones de Office usan servidores seguros con eliminación automática de archivos.',
                'feature_no_installation_title': 'Sin Instalación',
                'feature_no_installation_desc': 'Funciona directamente en tu navegador. Sin descargas de software, sin actualizaciones, sin complicaciones. Solo acceso instantáneo.',
                'feature_multi_device_title': 'Multi-Dispositivo',
                'feature_multi_device_desc': 'Accede desde cualquier dispositivo - escritorio, tablet o móvil. El diseño responsivo asegura una experiencia perfecta en todas partes.',
                'feature_high_quality_title': 'Alta Calidad',
                'feature_high_quality_desc': 'Los algoritmos profesionales de compresión y conversión mantienen la calidad del documento mientras optimizan los tamaños de archivo.',
                'feature_always_free_title': 'Siempre Gratis',
                'feature_always_free_desc': 'La funcionalidad principal es completamente gratuita. Sin costos ocultos, sin suscripciones, sin limitaciones en el procesamiento de archivos.',
                // How It Works Section
                'how_it_works_title': 'Cómo Funciona',
                'how_it_works_subtitle': 'Procesamiento de documentos simple, rápido y seguro en tres pasos fáciles',
                'step_upload_title': 'Sube Tus Archivos',
                'step_upload_desc': 'Arrastra y suelta tus documentos o haz clic para navegar. Compatible con formatos PDF, JPG, PNG. Los archivos se procesan usando nuestro enfoque híbrido: localmente en tu navegador para herramientas PDF, de forma segura en nuestros servidores para conversiones de Office.',
                'step_choose_title': 'Elige Tu Herramienta',
                'step_choose_desc': 'Selecciona de nuestro conjunto completo de herramientas: convertir, comprimir, fusionar, agregar marcas de agua o números de página. Opciones avanzadas disponibles para personalización.',
                'step_download_title': 'Descarga Resultados',
                'step_download_desc': 'Obtén tus archivos procesados instantáneamente. Descarga individualmente o descarga por lotes todos los archivos. Los archivos se limpian automáticamente para tu privacidad.',
                // FAQ Section
                'faq_title': 'Preguntas Frecuentes',
                'faq_subtitle': 'Todo lo que necesitas saber sobre PDFrow',
                'faq_q1': '¿PDFrow es realmente gratis de usar?',
                'faq_a1': '¡Sí! PDFrow es completamente gratis de usar. Toda la funcionalidad principal incluyendo conversión, compresión, fusión y herramientas de edición están disponibles sin costo. Sin tarifas ocultas o suscripción requerida.',
                'faq_q2': '¿Dónde se procesan mis archivos?',
                'faq_a2': 'Usamos un enfoque híbrido para tu seguridad y conveniencia:',
                'faq_a2_pdf': 'Herramientas PDF (comprimir, fusionar, editar, etc.): Procesadas 100% en tu navegador - los archivos nunca salen de tu dispositivo',
                'faq_a2_office': 'Conversiones de Office (Word, Excel, PowerPoint): Procesadas en nuestros servidores seguros con eliminación automática de archivos después de 1 hora',
                'faq_q3': '¿Qué formatos de archivo son compatibles?',
                'faq_a3': 'Soportamos los formatos de documento e imagen más comunes: PDF, JPG, JPEG y PNG. Cada herramienta está optimizada para conversiones de formato específicas y tareas de procesamiento.',
                'faq_q4': '¿Hay un límite de tamaño de archivo?',
                'faq_a4': 'El tamaño máximo de archivo es 50MB por archivo. Este límite asegura un rendimiento óptimo y velocidad de procesamiento para todos los usuarios.',
                'faq_q5': '¿Necesito instalar algún software?',
                'faq_a5': '¡No se requiere instalación! PDFrow funciona completamente en tu navegador web. Solo visita nuestro sitio web y comienza a usar las herramientas inmediatamente. Compatible con Chrome, Firefox, Safari y Edge.',
                'faq_q6': '¿Puedo usar PDFrow en dispositivos móviles?',
                'faq_a6': '¡Sí! PDFrow es completamente responsivo y funciona en smartphones, tablets y computadoras de escritorio. La interfaz se adapta al tamaño de tu pantalla para una experiencia de usuario óptima.',
                'faq_q7': '¿Mis documentos de Office están seguros durante la conversión?',
                'faq_a7': '¡Sí! Las conversiones de Office usan nuestros servidores en la nube seguros con:',
                'faq_a7_ssl': 'Cifrado SSL durante la transferencia',
                'faq_a7_deletion': 'Eliminación automática de archivos en 1 hora',
                'faq_a7_access': 'Sin acceso humano a tus archivos',
                'faq_a7_isolation': 'Entornos de procesamiento aislados',
                // Footer
                'language': 'Idioma',
                'footer_description': 'Plataforma de procesamiento de documentos de nueva generación. Rápida, segura y siempre gratuita.',
                'footer_tools_title': 'Herramientas',
                'footer_pdf_converter': 'Convertidor de PDF',
                'footer_image_converter': 'Convertidor de Imágenes',
                'footer_pdf_compressor': 'Compresor de PDF',
                'footer_pdf_merger': 'Fusionador de PDF',
                'footer_features_title': 'Características',
                'footer_add_watermarks': 'Agregar Marcas de Agua',
                'footer_page_numbers': 'Números de Página',
                'footer_batch_processing': 'Procesamiento por Lotes',
                'footer_privacy_first': 'Privacidad Primero',
                'footer_support_title': 'Soporte',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'Cómo Funciona',
                'footer_contact': 'Contacto',
                'footer_help_center': 'Centro de Ayuda',
                'footer_copyright': '© 2025 PDFrow. Todos los derechos reservados. Hecho con ❤️ para el procesamiento de documentos.',
                // Contact Form
                'contact_form_title': '¿Cómo podemos ayudarte hoy?',
                'contact_form_subtitle': 'Preguntas, reportes de errores, solicitudes de funciones o comentarios generales',
                'contact_select_topic': 'Selecciona un tema',
                'contact_option_question': 'Hacer una pregunta',
                'contact_option_bug': 'Reportar un error',
                'contact_option_feature': 'Solicitar una función',
                'contact_option_feedback': 'Comentarios generales',
                'contact_option_business': 'Consulta comercial',
                'contact_name_placeholder': 'Tu nombre completo',
                'contact_message_placeholder': 'Cuéntanos más detalles...',
                'contact_attach_file': 'Adjuntar un archivo (opcional)',
                'contact_email_placeholder': 'Tu dirección de correo electrónico',
                'contact_terms_text': 'He leído y aceptado los',
                'contact_terms_link': 'Términos y Condiciones',
                'contact_and': 'y la',
                'contact_privacy_link': 'Política de Privacidad',
                'contact_submit_btn': 'Enviar Mensaje',
                'contact_confidential_note': 'Toda tu información será tratada de forma confidencial'
            },
            'fr': {
                // Navigation
                'nav_tools': 'Outils',
                'nav_features': 'Fonctionnalités',
                'nav_how_it_works': 'Comment Ça Marche',
                'nav_faq': 'FAQ',
                // Hero Section
                'hero_badge': 'Traitement de Documents Nouvelle Génération',
                'hero_title_1': 'Transformez Vos Documents avec',
                'hero_title_2': 'Précision Professionnelle',
                'hero_subtitle': 'Traitement intelligent: Confidentialité maximale pour les outils PDF, conversion serveur puissante pour les documents Office. Tous les fichiers protégés.',
                'btn_start_converting': 'Commencer la Conversion',
                'stat_files_processed': 'Fichiers Traités',
                'stat_uptime': 'Temps de Fonctionnement',
                'stat_average_speed': 'Vitesse Moyenne',
                // Tools Section
                'tools_title': 'Outils Documentaires Puissants',
                'tools_subtitle': 'Choisissez parmi notre suite complète d\'outils de traitement de documents',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG vers PDF',
                'tool_jpg_to_pdf_desc': 'Convertir les images JPG en documents PDF',
                'tool_png_to_jpg_title': 'PNG vers JPG',
                'tool_png_to_jpg_desc': 'Convertir les images PNG au format JPG',
                'tool_jpg_to_png_title': 'JPG vers PNG',
                'tool_jpg_to_png_desc': 'Convertir les images JPG au format PNG',
                'tool_pdf_to_jpg_title': 'PDF vers JPG',
                'tool_pdf_to_jpg_desc': 'Convertir les pages PDF en images JPG',
                'tool_compress_pdf_title': 'Compresser PDF',
                'tool_compress_pdf_desc': 'Réduire la taille du fichier PDF pour un partage plus facile',
                'tool_merge_pdf_title': 'Fusionner PDF',
                'tool_merge_pdf_desc': 'Combiner plusieurs fichiers PDF en un seul',
                'tool_add_page_numbers_title': 'Ajouter Numéros de Page',
                'tool_add_page_numbers_desc': 'Ajouter des numéros de page aux PDFs avec positionnement et style personnalisés',
                'tool_add_watermark_title': 'Ajouter Filigrane',
                'tool_add_watermark_desc': 'Ajouter des filigranes de texte ou d\'image aux PDFs avec style personnalisé',
                // Upload Areas
                'drop_jpg_files': 'Déposez les fichiers JPG ici',
                'drop_png_files': 'Déposez les fichiers PNG ici',
                'drop_pdf_files': 'Déposez les fichiers PDF ici',
                'or_click_browse': 'ou cliquez pour parcourir',
                'or_click_browse_multiple': 'ou cliquez pour parcourir (plusieurs fichiers)',
                // Convert Buttons
                'convert_to_pdf': 'Convertir en PDF',
                'convert_to_jpg': 'Convertir en JPG',
                'convert_to_png': 'Convertir en PNG',
                'compress_pdf_btn': 'Compresser PDF',
                'merge_pdfs_btn': 'Fusionner PDFs',
                'add_page_numbers_btn': 'Ajouter Numéros de Page',
                'add_watermark_btn': 'Ajouter Filigrane',
                // Features Section
                'features_title': 'Pourquoi Choisir PDFrow ?',
                'features_subtitle': 'Découvrez l\'avenir du traitement de documents avec nos fonctionnalités avancées',
                'feature_lightning_fast_title': 'Ultra Rapide',
                'feature_lightning_fast_desc': 'Traitez des documents en quelques secondes grâce à nos algorithmes optimisés et à notre technologie avancée de traitement côté client.',
                'feature_secure_title': '100% Sécurisé',
                'feature_secure_desc': 'Les outils PDF sont traités localement dans votre navigateur. Les conversions Office utilisent des serveurs sécurisés avec suppression automatique des fichiers.',
                'feature_no_installation_title': 'Aucune Installation',
                'feature_no_installation_desc': 'Fonctionne directement dans votre navigateur. Pas de téléchargement de logiciel, pas de mises à jour, aucun tracas. Juste un accès instantané.',
                'feature_multi_device_title': 'Multi-Appareils',
                'feature_multi_device_desc': 'Accédez depuis n\'importe quel appareil - ordinateur, tablette ou mobile. Le design réactif assure une expérience parfaite partout.',
                'feature_high_quality_title': 'Haute Qualité',
                'feature_high_quality_desc': 'Les algorithmes professionnels de compression et de conversion maintiennent la qualité du document tout en optimisant les tailles de fichier.',
                'feature_always_free_title': 'Toujours Gratuit',
                'feature_always_free_desc': 'Les fonctionnalités principales sont entièrement gratuites. Pas de coûts cachés, pas d\'abonnements, pas de limitations sur le traitement des fichiers.',
                // How It Works Section
                'how_it_works_title': 'Comment Ça Marche',
                'how_it_works_subtitle': 'Traitement de documents simple, rapide et sécurisé en trois étapes faciles',
                'step_upload_title': 'Téléchargez Vos Fichiers',
                'step_upload_desc': 'Glissez-déposez vos documents ou cliquez pour parcourir. Prend en charge les formats PDF, JPG, PNG. Les fichiers sont traités selon notre approche hybride - localement dans votre navigateur pour les outils PDF, en toute sécurité sur nos serveurs pour les conversions Office.',
                'step_choose_title': 'Choisissez Votre Outil',
                'step_choose_desc': 'Sélectionnez dans notre boîte à outils complète : convertir, compresser, fusionner, ajouter des filigranes ou des numéros de page. Options avancées disponibles pour la personnalisation.',
                'step_download_title': 'Téléchargez les Résultats',
                'step_download_desc': 'Obtenez vos fichiers traités instantanément. Téléchargez individuellement ou par lots tous les fichiers. Les fichiers sont automatiquement nettoyés pour votre confidentialité.',
                // FAQ Section
                'faq_title': 'Questions Fréquemment Posées',
                'faq_subtitle': 'Tout ce que vous devez savoir sur PDFrow',
                'faq_q1': 'PDFrow est-il vraiment gratuit à utiliser ?',
                'faq_a1': 'Oui ! PDFrow est entièrement gratuit à utiliser. Toutes les fonctionnalités principales, y compris la conversion, la compression, la fusion et les outils d\'édition sont disponibles sans frais. Aucun frais caché ou abonnement requis.',
                'faq_q2': 'Où sont traités mes fichiers ?',
                'faq_a2': 'Nous utilisons une approche hybride pour votre sécurité et votre commodité :',
                'faq_a2_pdf': 'Outils PDF (compresser, fusionner, éditer, etc.) : Traités 100% dans votre navigateur - les fichiers ne quittent jamais votre appareil',
                'faq_a2_office': 'Conversions Office (Word, Excel, PowerPoint) : Traitées sur nos serveurs sécurisés avec suppression automatique des fichiers après 1 heure',
                'faq_q3': 'Quels formats de fichiers sont pris en charge ?',
                'faq_a3': 'Nous prenons en charge les formats de documents et d\'images les plus courants : PDF, JPG, JPEG et PNG. Chaque outil est optimisé pour des conversions de format spécifiques et des tâches de traitement.',
                'faq_q4': 'Y a-t-il une limite de taille de fichier ?',
                'faq_a4': 'La taille maximale de fichier est de 50MB par fichier. Cette limite garantit des performances optimales et une vitesse de traitement pour tous les utilisateurs.',
                'faq_q5': 'Dois-je installer un logiciel ?',
                'faq_a5': 'Aucune installation requise ! PDFrow fonctionne entièrement dans votre navigateur web. Visitez simplement notre site web et commencez à utiliser les outils immédiatement. Compatible avec Chrome, Firefox, Safari et Edge.',
                'faq_q6': 'Puis-je utiliser PDFrow sur des appareils mobiles ?',
                'faq_a6': 'Oui ! PDFrow est entièrement réactif et fonctionne sur smartphones, tablettes et ordinateurs de bureau. L\'interface s\'adapte à la taille de votre écran pour une expérience utilisateur optimale.',
                'faq_q7': 'Mes documents Office sont-ils sûrs pendant la conversion ?',
                'faq_a7': 'Oui ! Les conversions Office utilisent nos serveurs cloud sécurisés avec :',
                'faq_a7_ssl': 'Chiffrement SSL pendant le transfert',
                'faq_a7_deletion': 'Suppression automatique des fichiers dans 1 heure',
                'faq_a7_access': 'Aucun accès humain à vos fichiers',
                'faq_a7_isolation': 'Environnements de traitement isolés',
                // Footer
                'language': 'Langue',
                'footer_description': 'Plateforme de traitement de documents de nouvelle génération. Rapide, sécurisée et toujours gratuite.',
                'footer_tools_title': 'Outils',
                'footer_pdf_converter': 'Convertisseur PDF',
                'footer_image_converter': 'Convertisseur d\'Images',
                'footer_pdf_compressor': 'Compresseur PDF',
                'footer_pdf_merger': 'Fusionneur PDF',
                'footer_features_title': 'Fonctionnalités',
                'footer_add_watermarks': 'Ajouter Filigranes',
                'footer_page_numbers': 'Numéros de Page',
                'footer_batch_processing': 'Traitement par Lots',
                'footer_privacy_first': 'Confidentialité d\'Abord',
                'footer_support_title': 'Support',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'Comment Ça Marche',
                'footer_contact': 'Contact',
                'footer_help_center': 'Centre d\'Aide',
                'footer_copyright': '© 2025 PDFrow. Tous droits réservés. Fait avec ❤️ pour le traitement de documents.',
                // Contact Form
                'contact_form_title': 'Comment pouvons-nous vous aider aujourd\'hui ?',
                'contact_form_subtitle': 'Questions, rapports de bogues, demandes de fonctionnalités ou commentaires généraux',
                'contact_select_topic': 'Sélectionner un sujet',
                'contact_option_question': 'Poser une question',
                'contact_option_bug': 'Signaler un bogue',
                'contact_option_feature': 'Demander une fonctionnalité',
                'contact_option_feedback': 'Commentaires généraux',
                'contact_option_business': 'Demande commerciale',
                'contact_message_placeholder': 'Dites-nous plus de détails...',
                'contact_attach_file': 'Joindre un fichier (optionnel)',
                'contact_email_placeholder': 'Votre adresse e-mail',
                'contact_terms_text': 'J\'ai lu et accepté les',
                'contact_terms_link': 'Conditions Générales',
                'contact_and': 'et',
                'contact_privacy_link': 'Politique de Confidentialité',
                'contact_submit_btn': 'Envoyer le Message',
                'contact_confidential_note': 'Toutes vos informations seront traitées de manière confidentielle'
            },
            'de': {
                // Navigation
                'nav_tools': 'Werkzeuge',
                'nav_features': 'Funktionen',
                'nav_how_it_works': 'Wie es Funktioniert',
                'nav_faq': 'FAQ',
                // Hero Section
                'hero_badge': 'Dokumentenverarbeitung der Nächsten Generation',
                'hero_title_1': 'Verwandeln Sie Ihre Dokumente mit',
                'hero_title_2': 'Professioneller Präzision',
                'hero_subtitle': 'Intelligente Verarbeitung: Maximale Privatsphäre für PDF-Tools, leistungsstarke Serverkonvertierung für Office-Dokumente. Alle Dateien geschützt.',
                'btn_start_converting': 'Konvertierung Starten',
                'stat_files_processed': 'Verarbeitete Dateien',
                'stat_uptime': 'Betriebszeit',
                'stat_average_speed': 'Durchschnittsgeschwindigkeit',
                // Tools Section
                'tools_title': 'Leistungsstarke Dokument-Tools',
                'tools_subtitle': 'Wählen Sie aus unserer umfassenden Suite von Dokumentenverarbeitungstools',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG zu PDF',
                'tool_jpg_to_pdf_desc': 'JPG-Bilder in PDF-Dokumente umwandeln',
                'tool_png_to_jpg_title': 'PNG zu JPG',
                'tool_png_to_jpg_desc': 'PNG-Bilder in JPG-Format umwandeln',
                'tool_jpg_to_png_title': 'JPG zu PNG',
                'tool_jpg_to_png_desc': 'JPG-Bilder in PNG-Format umwandeln',
                'tool_pdf_to_jpg_title': 'PDF zu JPG',
                'tool_pdf_to_jpg_desc': 'PDF-Seiten in JPG-Bilder umwandeln',
                'tool_compress_pdf_title': 'PDF Komprimieren',
                'tool_compress_pdf_desc': 'PDF-Dateigröße für einfacheres Teilen reduzieren',
                'tool_merge_pdf_title': 'PDF Zusammenführen',
                'tool_merge_pdf_desc': 'Mehrere PDF-Dateien zu einer kombinieren',
                'tool_add_page_numbers_title': 'Seitenzahlen Hinzufügen',
                'tool_add_page_numbers_desc': 'Seitenzahlen zu PDFs mit benutzerdefinierter Positionierung und Styling hinzufügen',
                'tool_add_watermark_title': 'Wasserzeichen Hinzufügen',
                'tool_add_watermark_desc': 'Text- oder Bildwasserzeichen zu PDFs mit benutzerdefiniertem Styling hinzufügen',
                // Upload Areas
                'drop_jpg_files': 'JPG-Dateien hier ablegen',
                'drop_png_files': 'PNG-Dateien hier ablegen',
                'drop_pdf_files': 'PDF-Dateien hier ablegen',
                'or_click_browse': 'oder klicken zum Durchsuchen',
                'or_click_browse_multiple': 'oder klicken zum Durchsuchen (mehrere Dateien)',
                // Convert Buttons
                'convert_to_pdf': 'Zu PDF Konvertieren',
                'convert_to_jpg': 'Zu JPG Konvertieren',
                'convert_to_png': 'Zu PNG Konvertieren',
                'compress_pdf_btn': 'PDF Komprimieren',
                'merge_pdfs_btn': 'PDFs Zusammenführen',
                'add_page_numbers_btn': 'Seitenzahlen Hinzufügen',
                'add_watermark_btn': 'Wasserzeichen Hinzufügen',
                // Features Section
                'features_title': 'Warum PDFrow Wählen?',
                'features_subtitle': 'Erleben Sie die Zukunft der Dokumentenverarbeitung mit unseren fortschrittlichen Funktionen',
                'feature_lightning_fast_title': 'Blitzschnell',
                'feature_lightning_fast_desc': 'Verarbeiten Sie Dokumente in Sekunden mit unseren optimierten Algorithmen und fortschrittlicher Client-seitiger Verarbeitungstechnologie.',
                'feature_secure_title': '100% Sicher',
                'feature_secure_desc': 'PDF-Tools werden lokal in Ihrem Browser verarbeitet. Office-Konvertierungen verwenden sichere Server mit automatischer Dateilöschung.',
                'feature_no_installation_title': 'Keine Installation',
                'feature_no_installation_desc': 'Funktioniert direkt in Ihrem Browser. Keine Software-Downloads, keine Updates, kein Aufwand. Nur sofortiger Zugriff.',
                'feature_multi_device_title': 'Multi-Gerät',
                'feature_multi_device_desc': 'Zugriff von jedem Gerät - Desktop, Tablet oder Handy. Responsives Design sorgt für perfekte Erfahrung überall.',
                'feature_high_quality_title': 'Hohe Qualität',
                'feature_high_quality_desc': 'Professionelle Komprimierungs- und Konvertierungsalgorithmen erhalten die Dokumentqualität bei optimierten Dateigrößen.',
                'feature_always_free_title': 'Immer Kostenlos',
                'feature_always_free_desc': 'Kernfunktionalität ist vollständig kostenlos. Keine versteckten Kosten, keine Abonnements, keine Einschränkungen bei der Dateiverarbeitung.',
                // How It Works Section
                'how_it_works_title': 'Wie Es Funktioniert',
                'how_it_works_subtitle': 'Einfache, schnelle und sichere Dokumentenverarbeitung in drei einfachen Schritten',
                'step_upload_title': 'Dateien Hochladen',
                'step_upload_desc': 'Ziehen Sie Ihre Dokumente per Drag & Drop oder klicken Sie zum Durchsuchen. Unterstützt PDF-, JPG-, PNG-Formate. Dateien werden nach unserem hybriden Ansatz verarbeitet - lokal in Ihrem Browser für PDF-Tools, sicher auf unseren Servern für Office-Konvertierungen.',
                'step_choose_title': 'Tool Auswählen',
                'step_choose_desc': 'Wählen Sie aus unserem umfassenden Toolkit: konvertieren, komprimieren, zusammenführen, Wasserzeichen oder Seitenzahlen hinzufügen. Erweiterte Optionen für Anpassungen verfügbar.',
                'step_download_title': 'Ergebnisse Herunterladen',
                'step_download_desc': 'Erhalten Sie Ihre verarbeiteten Dateien sofort. Einzeln oder als Batch-Download aller Dateien. Dateien werden automatisch für Ihren Datenschutz bereinigt.',
                // FAQ Section
                'faq_title': 'Häufig Gestellte Fragen',
                'faq_subtitle': 'Alles was Sie über PDFrow wissen müssen',
                'faq_q1': 'Ist PDFrow wirklich kostenlos zu verwenden?',
                'faq_a1': 'Ja! PDFrow ist vollständig kostenlos zu verwenden. Alle Kernfunktionen einschließlich Konvertierung, Komprimierung, Zusammenführung und Bearbeitungstools sind kostenlos verfügbar. Keine versteckten Gebühren oder Abonnement erforderlich.',
                'faq_q2': 'Wo werden meine Dateien verarbeitet?',
                'faq_a2': 'Wir verwenden einen hybriden Ansatz für Ihre Sicherheit und Bequemlichkeit:',
                'faq_a2_pdf': 'PDF-Tools (komprimieren, zusammenführen, bearbeiten usw.): 100% in Ihrem Browser verarbeitet - Dateien verlassen niemals Ihr Gerät',
                'faq_a2_office': 'Office-Konvertierungen (Word, Excel, PowerPoint): Auf unseren sicheren Servern mit automatischer Dateilöschung nach 1 Stunde verarbeitet',
                'faq_q3': 'Welche Dateiformate werden unterstützt?',
                'faq_a3': 'Wir unterstützen die gängigsten Dokument- und Bildformate: PDF, JPG, JPEG und PNG. Jedes Tool ist für spezifische Formatkonvertierungen und Verarbeitungsaufgaben optimiert.',
                'faq_q4': 'Gibt es eine Dateigrößenbegrenzung?',
                'faq_a4': 'Die maximale Dateigröße beträgt 50MB pro Datei. Diese Grenze gewährleistet optimale Leistung und Verarbeitungsgeschwindigkeit für alle Benutzer.',
                'faq_q5': 'Muss ich Software installieren?',
                'faq_a5': 'Keine Installation erforderlich! PDFrow funktioniert vollständig in Ihrem Webbrowser. Besuchen Sie einfach unsere Website und beginnen Sie sofort mit der Nutzung der Tools. Kompatibel mit Chrome, Firefox, Safari und Edge.',
                'faq_q6': 'Kann ich PDFrow auf mobilen Geräten verwenden?',
                'faq_a6': 'Ja! PDFrow ist vollständig responsiv und funktioniert auf Smartphones, Tablets und Desktop-Computern. Die Benutzeroberfläche passt sich Ihrer Bildschirmgröße für optimale Benutzererfahrung an.',
                'faq_q7': 'Sind meine Office-Dokumente während der Konvertierung sicher?',
                'faq_a7': 'Ja! Office-Konvertierungen verwenden unsere sicheren Cloud-Server mit:',
                'faq_a7_ssl': 'SSL-Verschlüsselung während der Übertragung',
                'faq_a7_deletion': 'Automatische Dateilöschung innerhalb von 1 Stunde',
                'faq_a7_access': 'Kein menschlicher Zugriff auf Ihre Dateien',
                'faq_a7_isolation': 'Isolierte Verarbeitungsumgebungen',
                // Footer
                'language': 'Sprache',
                'footer_description': 'Dokumentenverarbeitungsplattform der nächsten Generation. Schnell, sicher und immer kostenlos.',
                'footer_tools_title': 'Werkzeuge',
                'footer_pdf_converter': 'PDF-Konverter',
                'footer_image_converter': 'Bild-Konverter',
                'footer_pdf_compressor': 'PDF-Komprimierer',
                'footer_pdf_merger': 'PDF-Zusammenführer',
                'footer_features_title': 'Funktionen',
                'footer_add_watermarks': 'Wasserzeichen Hinzufügen',
                'footer_page_numbers': 'Seitenzahlen',
                'footer_batch_processing': 'Batch-Verarbeitung',
                'footer_privacy_first': 'Datenschutz Zuerst',
                'footer_support_title': 'Support',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'Wie Es Funktioniert',
                'footer_contact': 'Kontakt',
                'footer_help_center': 'Hilfe-Center',
                'footer_copyright': '© 2025 PDFrow. Alle Rechte vorbehalten. Mit ❤️ für Dokumentenverarbeitung erstellt.',
                // Contact Form
                'contact_form_title': 'Wie können wir Ihnen heute helfen?',
                'contact_form_subtitle': 'Fragen, Fehlerberichte, Funktionsanfragen oder allgemeines Feedback',
                'contact_select_topic': 'Ein Thema auswählen',
                'contact_option_question': 'Eine Frage stellen',
                'contact_option_bug': 'Einen Fehler melden',
                'contact_option_feature': 'Eine Funktion anfragen',
                'contact_option_feedback': 'Allgemeines Feedback',
                'contact_option_business': 'Geschäftsanfrage',
                'contact_message_placeholder': 'Erzählen Sie uns mehr Details...',
                'contact_attach_file': 'Datei anhängen (optional)',
                'contact_email_placeholder': 'Ihre E-Mail-Adresse',
                'contact_terms_text': 'Ich habe die',
                'contact_terms_link': 'Allgemeinen Geschäftsbedingungen',
                'contact_and': 'und',
                'contact_privacy_link': 'Datenschutzrichtlinie',
                'contact_submit_btn': 'Nachricht Senden',
                'contact_confidential_note': 'Alle Ihre Informationen werden vertraulich behandelt'
            },
            'it': {
                // Navigation
                'nav_tools': 'Strumenti',
                'nav_features': 'Caratteristiche',
                'nav_how_it_works': 'Come Funziona',
                'nav_faq': 'FAQ',
                // Hero Section
                'hero_badge': 'Elaborazione Documenti di Nuova Generazione',
                'hero_title_1': 'Trasforma i Tuoi Documenti con',
                'hero_title_2': 'Precisione Professionale',
                'hero_subtitle': 'Elaborazione intelligente: Massima privacy per gli strumenti PDF, conversione server potente per i documenti Office. Tutti i file protetti.',
                'btn_start_converting': 'Inizia a Convertire',
                'stat_files_processed': 'File Elaborati',
                'stat_uptime': 'Tempo di Attività',
                'stat_average_speed': 'Velocità Media',
                // Tools Section
                'tools_title': 'Potenti Strumenti per Documenti',
                'tools_subtitle': 'Scegli dalla nostra suite completa di strumenti per l\'elaborazione dei documenti',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG in PDF',
                'tool_jpg_to_pdf_desc': 'Convertire immagini JPG in documenti PDF',
                'tool_png_to_jpg_title': 'PNG in JPG',
                'tool_png_to_jpg_desc': 'Convertire immagini PNG in formato JPG',
                'tool_jpg_to_png_title': 'JPG in PNG',
                'tool_jpg_to_png_desc': 'Convertire immagini JPG in formato PNG',
                'tool_pdf_to_jpg_title': 'PDF in JPG',
                'tool_pdf_to_jpg_desc': 'Convertire pagine PDF in immagini JPG',
                'tool_compress_pdf_title': 'Comprimi PDF',
                'tool_compress_pdf_desc': 'Ridurre le dimensioni del file PDF per una condivisione più facile',
                'tool_merge_pdf_title': 'Unisci PDF',
                'tool_merge_pdf_desc': 'Combinare più file PDF in uno',
                'tool_add_page_numbers_title': 'Aggiungi Numeri di Pagina',
                'tool_add_page_numbers_desc': 'Aggiungere numeri di pagina ai PDF con posizionamento e stile personalizzati',
                'tool_add_watermark_title': 'Aggiungi Filigrana',
                'tool_add_watermark_desc': 'Aggiungere filigrane di testo o immagine ai PDF con stile personalizzato',
                // Upload Areas
                'drop_jpg_files': 'Trascina i file JPG qui',
                'drop_png_files': 'Trascina i file PNG qui',
                'drop_pdf_files': 'Trascina i file PDF qui',
                'or_click_browse': 'o clicca per sfogliare',
                'or_click_browse_multiple': 'o clicca per sfogliare (file multipli)',
                // Convert Buttons
                'convert_to_pdf': 'Converti in PDF',
                'convert_to_jpg': 'Converti in JPG',
                'convert_to_png': 'Converti in PNG',
                'compress_pdf_btn': 'Comprimi PDF',
                'merge_pdfs_btn': 'Unisci PDF',
                'add_page_numbers_btn': 'Aggiungi Numeri di Pagina',
                'add_watermark_btn': 'Aggiungi Filigrana',
                // Features Section
                'features_title': 'Perché Scegliere PDFrow?',
                'features_subtitle': 'Sperimenta il futuro dell\'elaborazione dei documenti con le nostre funzionalità avanzate',
                'feature_lightning_fast_title': 'Veloce come un Fulmine',
                'feature_lightning_fast_desc': 'Elabora documenti in secondi con i nostri algoritmi ottimizzati e la tecnologia avanzata di elaborazione lato client.',
                'feature_secure_title': '100% Sicuro',
                'feature_secure_desc': 'Gli strumenti PDF vengono elaborati localmente nel tuo browser. Le conversioni Office utilizzano server sicuri con eliminazione automatica dei file.',
                'feature_no_installation_title': 'Nessuna Installazione',
                'feature_no_installation_desc': 'Funziona direttamente nel tuo browser. Nessun download di software, nessun aggiornamento, nessun problema. Solo accesso istantaneo.',
                'feature_multi_device_title': 'Multi-Dispositivo',
                'feature_multi_device_desc': 'Accesso da qualsiasi dispositivo - desktop, tablet o mobile. Il design responsive garantisce un\'esperienza perfetta ovunque.',
                'feature_high_quality_title': 'Alta Qualità',
                'feature_high_quality_desc': 'Gli algoritmi professionali di compressione e conversione mantengono la qualità del documento ottimizzando le dimensioni dei file.',
                'feature_always_free_title': 'Sempre Gratuito',
                'feature_always_free_desc': 'Le funzionalità principali sono completamente gratuite. Nessun costo nascosto, nessun abbonamento, nessuna limitazione nell\'elaborazione dei file.',
                // How It Works Section
                'how_it_works_title': 'Come Funziona',
                'how_it_works_subtitle': 'Elaborazione di documenti semplice, veloce e sicura in tre semplici passaggi',
                'step_upload_title': 'Carica i Tuoi File',
                'step_upload_desc': 'Trascina e rilascia i tuoi documenti o clicca per sfogliare. Supporta formati PDF, JPG, PNG. I file vengono elaborati utilizzando il nostro approccio ibrido - localmente nel tuo browser per strumenti PDF, in modo sicuro sui nostri server per conversioni Office.',
                'step_choose_title': 'Scegli il Tuo Strumento',
                'step_choose_desc': 'Seleziona dal nostro toolkit completo: convertire, comprimere, unire, aggiungere filigrane o numeri di pagina. Opzioni avanzate disponibili per la personalizzazione.',
                'step_download_title': 'Scarica i Risultati',
                'step_download_desc': 'Ottieni i tuoi file elaborati istantaneamente. Scarica individualmente o scarica in batch tutti i file. I file vengono automaticamente puliti per la tua privacy.',
                // FAQ Section
                'faq_title': 'Domande Frequenti',
                'faq_subtitle': 'Tutto quello che devi sapere su PDFrow',
                'faq_q1': 'PDFrow è davvero gratuito da usare?',
                'faq_a1': 'Sì! PDFrow è completamente gratuito da usare. Tutte le funzionalità principali inclusi conversione, compressione, unione e strumenti di modifica sono disponibili senza costi. Nessuna tariffa nascosta o abbonamento richiesto.',
                'faq_q2': 'Dove vengono elaborati i miei file?',
                'faq_a2': 'Utilizziamo un approccio ibrido per la tua sicurezza e comodità:',
                'faq_a2_pdf': 'Strumenti PDF (comprimere, unire, modificare, ecc.): Elaborati 100% nel tuo browser - i file non lasciano mai il tuo dispositivo',
                'faq_a2_office': 'Conversioni Office (Word, Excel, PowerPoint): Elaborate sui nostri server sicuri con eliminazione automatica dei file dopo 1 ora',
                'faq_q3': 'Quali formati di file sono supportati?',
                'faq_a3': 'Supportiamo i formati di documenti e immagini più comuni: PDF, JPG, JPEG e PNG. Ogni strumento è ottimizzato per conversioni di formato specifiche e attività di elaborazione.',
                'faq_q4': 'C\'è un limite di dimensione del file?',
                'faq_a4': 'La dimensione massima del file è 50MB per file. Questo limite garantisce prestazioni ottimali e velocità di elaborazione per tutti gli utenti.',
                'faq_q5': 'Devo installare qualche software?',
                'faq_a5': 'Nessuna installazione richiesta! PDFrow funziona interamente nel tuo browser web. Visita semplicemente il nostro sito web e inizia a usare gli strumenti immediatamente. Compatibile con Chrome, Firefox, Safari ed Edge.',
                'faq_q6': 'Posso usare PDFrow su dispositivi mobili?',
                'faq_a6': 'Sì! PDFrow è completamente responsive e funziona su smartphone, tablet e computer desktop. L\'interfaccia si adatta alla dimensione del tuo schermo per un\'esperienza utente ottimale.',
                'faq_q7': 'I miei documenti Office sono sicuri durante la conversione?',
                'faq_a7': 'Sì! Le conversioni Office utilizzano i nostri server cloud sicuri con:',
                'faq_a7_ssl': 'Crittografia SSL durante il trasferimento',
                'faq_a7_deletion': 'Eliminazione automatica dei file entro 1 ora',
                'faq_a7_access': 'Nessun accesso umano ai tuoi file',
                'faq_a7_isolation': 'Ambienti di elaborazione isolati',
                // Footer
                'language': 'Lingua',
                'footer_description': 'Piattaforma di elaborazione documenti di nuova generazione. Veloce, sicura e sempre gratuita.',
                'footer_tools_title': 'Strumenti',
                'footer_pdf_converter': 'Convertitore PDF',
                'footer_image_converter': 'Convertitore Immagini',
                'footer_pdf_compressor': 'Compressore PDF',
                'footer_pdf_merger': 'Unificatore PDF',
                'footer_features_title': 'Caratteristiche',
                'footer_add_watermarks': 'Aggiungi Filigrane',
                'footer_page_numbers': 'Numeri di Pagina',
                'footer_batch_processing': 'Elaborazione in Batch',
                'footer_privacy_first': 'Privacy Prima di Tutto',
                'footer_support_title': 'Supporto',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'Come Funziona',
                'footer_contact': 'Contatto',
                'footer_help_center': 'Centro Assistenza',
                'footer_copyright': '© 2025 PDFrow. Tutti i diritti riservati. Realizzato con ❤️ per l\'elaborazione dei documenti.',
                // Contact Form
                'contact_form_title': 'Come possiamo aiutarti oggi?',
                'contact_form_subtitle': 'Domande, segnalazioni di bug, richieste di funzionalità o feedback generale',
                'contact_select_topic': 'Seleziona un argomento',
                'contact_option_question': 'Fai una domanda',
                'contact_option_bug': 'Segnala un bug',
                'contact_option_feature': 'Richiedi una funzionalità',
                'contact_option_feedback': 'Feedback generale',
                'contact_option_business': 'Richiesta commerciale',
                'contact_message_placeholder': 'Raccontaci più dettagli...',
                'contact_attach_file': 'Allega un file (opzionale)',
                'contact_email_placeholder': 'Il tuo indirizzo email',
                'contact_terms_text': 'Ho letto e accettato i',
                'contact_terms_link': 'Termini e Condizioni',
                'contact_and': 'e',
                'contact_privacy_link': 'Informativa sulla Privacy',
                'contact_submit_btn': 'Invia Messaggio',
                'contact_confidential_note': 'Tutte le tue informazioni saranno trattate in modo confidenziale'
            },
            'tr': {
                // Navigation
                'nav_tools': 'Araçlar',
                'nav_features': 'Özellikler',
                'nav_how_it_works': 'Nasıl Çalışır',
                'nav_faq': 'SSS',
                // Hero Section
                'hero_badge': 'Yeni Nesil Belge İşleme',
                'hero_title_1': 'Belgelerinizi Dönüştürün',
                'hero_title_2': 'Profesyonel Hassasiyet ile',
                'hero_subtitle': 'Akıllı işleme: PDF araçları için maksimum gizlilik, Office belgeleri için güçlü sunucu dönüştürme. Tüm dosyalar korunur.',
                'btn_start_converting': 'Dönüştürmeye Başla',
                'stat_files_processed': 'İşlenen Dosyalar',
                'stat_uptime': 'Çalışma Süresi',
                'stat_average_speed': 'Ortalama Hız',
                // Tools Section
                'tools_title': 'Güçlü Belge Araçları',
                'tools_subtitle': 'Kapsamlı belge işleme araçları paketimizden seçim yapın',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG\'den PDF\'ye',
                'tool_jpg_to_pdf_desc': 'JPG resimlerini PDF belgelerine dönüştürün',
                'tool_png_to_jpg_title': 'PNG\'den JPG\'ye',
                'tool_png_to_jpg_desc': 'PNG resimlerini JPG formatına dönüştürün',
                'tool_jpg_to_png_title': 'JPG\'den PNG\'ye',
                'tool_jpg_to_png_desc': 'JPG resimlerini PNG formatına dönüştürün',
                'tool_pdf_to_jpg_title': 'PDF\'den JPG\'ye',
                'tool_pdf_to_jpg_desc': 'PDF sayfalarını JPG resimlerine dönüştürün',
                'tool_compress_pdf_title': 'PDF Sıkıştır',
                'tool_compress_pdf_desc': 'Daha kolay paylaşım için PDF dosya boyutunu küçültün',
                'tool_merge_pdf_title': 'PDF Birleştir',
                'tool_merge_pdf_desc': 'Birden fazla PDF dosyasını tek dosyada birleştirin',
                'tool_add_page_numbers_title': 'Sayfa Numarası Ekle',
                'tool_add_page_numbers_desc': 'PDF\'lere özel konumlandırma ve stil ile sayfa numaraları ekleyin',
                'tool_add_watermark_title': 'Filigran Ekle',
                'tool_add_watermark_desc': 'PDF\'lere özel stil ile metin veya resim filigranları ekleyin',
                // Upload Areas
                'drop_jpg_files': 'JPG dosyalarını buraya bırakın',
                'drop_png_files': 'PNG dosyalarını buraya bırakın',
                'drop_pdf_files': 'PDF dosyalarını buraya bırakın',
                'or_click_browse': 'veya göz atmak için tıklayın',
                'or_click_browse_multiple': 'veya göz atmak için tıklayın (çoklu dosyalar)',
                // Convert Buttons
                'convert_to_pdf': 'PDF\'ye Dönüştür',
                'convert_to_jpg': 'JPG\'ye Dönüştür',
                'convert_to_png': 'PNG\'ye Dönüştür',
                'compress_pdf_btn': 'PDF Sıkıştır',
                'merge_pdfs_btn': 'PDF\'leri Birleştir',
                'add_page_numbers_btn': 'Sayfa Numarası Ekle',
                'add_watermark_btn': 'Filigran Ekle',
                // Features Section
                'features_title': 'Neden PDFrow\'u Seçmelisiniz?',
                'features_subtitle': 'Gelişmiş özelliklerimizle belge işlemenin geleceğini deneyimleyin',
                'feature_lightning_fast_title': 'Şimşek Hızında',
                'feature_lightning_fast_desc': 'Optimize edilmiş algoritmalarımız ve gelişmiş istemci tarafı işleme teknolojimizle belgeleri saniyeler içinde işleyin.',
                'feature_secure_title': '%100 Güvenli',
                'feature_secure_desc': 'PDF araçları tarayıcınızda yerel olarak işlenir. Office dönüşümleri otomatik dosya silme ile güvenli sunucular kullanır.',
                'feature_no_installation_title': 'Kurulum Yok',
                'feature_no_installation_desc': 'Doğrudan tarayıcınızda çalışır. Yazılım indirme, güncelleme, karmaşa yok. Sadece anında erişim.',
                'feature_multi_device_title': 'Çoklu Cihaz',
                'feature_multi_device_desc': 'Herhangi bir cihazdan erişin - masaüstü, tablet veya mobil. Duyarlı tasarım her yerde mükemmel deneyim sağlar.',
                'feature_high_quality_title': 'Yüksek Kalite',
                'feature_high_quality_desc': 'Profesyonel sıkıştırma ve dönüştürme algoritmaları dosya boyutlarını optimize ederken belge kalitesini korur.',
                'feature_always_free_title': 'Her Zaman Ücretsiz',
                'feature_always_free_desc': 'Temel işlevsellik tamamen ücretsizdir. Gizli maliyet yok, abonelik yok, dosya işlemede sınırlama yok.',
                // How It Works Section
                'how_it_works_title': 'Nasıl Çalışır',
                'how_it_works_subtitle': 'Üç kolay adımda basit, hızlı ve güvenli belge işleme',
                'step_upload_title': 'Dosyalarınızı Yükleyin',
                'step_upload_desc': 'Belgelerinizi sürükleyip bırakın veya göz atmak için tıklayın. PDF, JPG, PNG formatlarını destekler. Dosyalar hibrit yaklaşımımız kullanılarak işlenir - PDF araçları için tarayıcınızda yerel olarak, Office dönüşümleri için sunucularımızda güvenli bir şekilde.',
                'step_choose_title': 'Aracınızı Seçin',
                'step_choose_desc': 'Kapsamlı araç setimizden seçin: dönüştür, sıkıştır, birleştir, filigran veya sayfa numaraları ekle. Özelleştirme için gelişmiş seçenekler mevcuttur.',
                'step_download_title': 'Sonuçları İndirin',
                'step_download_desc': 'İşlenmiş dosyalarınızı anında alın. Tek tek veya toplu olarak tüm dosyaları indirin. Gizliliğiniz için dosyalar otomatik olarak temizlenir.',
                // FAQ Section
                'faq_title': 'Sıkça Sorulan Sorular',
                'faq_subtitle': 'PDFrow hakkında bilmeniz gereken her şey',
                'faq_q1': 'PDFrow gerçekten ücretsiz mi?',
                'faq_a1': 'Evet! PDFrow tamamen ücretsiz kullanılabilir. Dönüştürme, sıkıştırma, birleştirme ve düzenleme araçları dahil tüm temel işlevler ücretsizdir. Gizli ücret veya abonelik gerekmez.',
                'faq_q2': 'Dosyalarım nerede işleniyor?',
                'faq_a2': 'Güvenliğiniz ve kolaylığınız için hibrit bir yaklaşım kullanıyoruz:',
                'faq_a2_pdf': 'PDF araçları (sıkıştırma, birleştirme, düzenleme vb.): %100 tarayıcınızda işlenir - dosyalar asla cihazınızdan ayrılmaz',
                'faq_a2_office': 'Office dönüşümleri (Word, Excel, PowerPoint): 1 saat sonra otomatik dosya silme ile güvenli sunucularımızda işlenir',
                'faq_q3': 'Hangi dosya formatları destekleniyor?',
                'faq_a3': 'En yaygın belge ve resim formatlarını destekliyoruz: PDF, JPG, JPEG ve PNG. Her araç özel format dönüşümleri ve işleme görevleri için optimize edilmiştir.',
                'faq_q4': 'Dosya boyutu sınırı var mı?',
                'faq_a4': 'Maksimum dosya boyutu dosya başına 50MB\'dır. Bu sınır tüm kullanıcılar için optimal performans ve işleme hızı sağlar.',
                'faq_q5': 'Herhangi bir yazılım kurmam gerekiyor mu?',
                'faq_a5': 'Kurulum gerekmez! PDFrow tamamen web tarayıcınızda çalışır. Sadece web sitemizi ziyaret edin ve araçları hemen kullanmaya başlayın. Chrome, Firefox, Safari ve Edge ile uyumludur.',
                'faq_q6': 'PDFrow\'u mobil cihazlarda kullanabilir miyim?',
                'faq_a6': 'Evet! PDFrow tamamen duyarlıdır ve akıllı telefonlar, tabletler ve masaüstü bilgisayarlarda çalışır. Arayüz optimum kullanıcı deneyimi için ekran boyutunuza uyum sağlar.',
                'faq_q7': 'Office belgelerim dönüştürme sırasında güvende mi?',
                'faq_a7': 'Evet! Office dönüşümleri güvenli bulut sunucularımızı kullanır:',
                'faq_a7_ssl': 'Aktarım sırasında SSL şifreleme',
                'faq_a7_deletion': '1 saat içinde otomatik dosya silme',
                'faq_a7_access': 'Dosyalarınıza insan erişimi yok',
                'faq_a7_isolation': 'İzole işleme ortamları',
                // Footer
                'language': 'Dil',
                'footer_description': 'Yeni nesil belge işleme platformu. Hızlı, güvenli ve her zaman ücretsiz.',
                'footer_tools_title': 'Araçlar',
                'footer_pdf_converter': 'PDF Dönüştürücü',
                'footer_image_converter': 'Resim Dönüştürücü',
                'footer_pdf_compressor': 'PDF Sıkıştırıcı',
                'footer_pdf_merger': 'PDF Birleştirici',
                'footer_features_title': 'Özellikler',
                'footer_add_watermarks': 'Filigran Ekle',
                'footer_page_numbers': 'Sayfa Numaraları',
                'footer_batch_processing': 'Toplu İşleme',
                'footer_privacy_first': 'Önce Gizlilik',
                'footer_support_title': 'Destek',
                'footer_faq': 'SSS',
                'footer_how_it_works': 'Nasıl Çalışır',
                'footer_contact': 'İletişim',
                'footer_help_center': 'Yardım Merkezi',
                'footer_copyright': '© 2025 PDFrow. Tüm hakları saklıdır. Belge işleme için ❤️ ile yapılmıştır.'
            },
            'pt': {
                // Navigation
                'nav_tools': 'Ferramentas',
                'nav_features': 'Recursos',
                'nav_how_it_works': 'Como Funciona',
                'nav_faq': 'FAQ',
                // Hero Section
                'hero_badge': 'Processamento de Documentos de Nova Geração',
                'hero_title_1': 'Transforme Seus Documentos com',
                'hero_title_2': 'Precisão Profissional',
                'hero_subtitle': 'Processamento inteligente: Máxima privacidade para ferramentas PDF, conversão de servidor poderosa para documentos Office. Todos os arquivos protegidos.',
                'btn_start_converting': 'Começar a Converter',
                'stat_files_processed': 'Arquivos Processados',
                'stat_uptime': 'Tempo Ativo',
                'stat_average_speed': 'Velocidade Média',
                // Tools Section
                'tools_title': 'Ferramentas Poderosas para Documentos',
                'tools_subtitle': 'Escolha do nosso conjunto abrangente de ferramentas de processamento de documentos',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG para PDF',
                'tool_jpg_to_pdf_desc': 'Converter imagens JPG em documentos PDF',
                'tool_png_to_jpg_title': 'PNG para JPG',
                'tool_png_to_jpg_desc': 'Converter imagens PNG para formato JPG',
                'tool_jpg_to_png_title': 'JPG para PNG',
                'tool_jpg_to_png_desc': 'Converter imagens JPG para formato PNG',
                'tool_pdf_to_jpg_title': 'PDF para JPG',
                'tool_pdf_to_jpg_desc': 'Converter páginas PDF em imagens JPG',
                'tool_compress_pdf_title': 'Comprimir PDF',
                'tool_compress_pdf_desc': 'Reduzir o tamanho do arquivo PDF para compartilhamento mais fácil',
                'tool_merge_pdf_title': 'Mesclar PDF',
                'tool_merge_pdf_desc': 'Combinar múltiplos arquivos PDF em um',
                'tool_add_page_numbers_title': 'Adicionar Números de Página',
                'tool_add_page_numbers_desc': 'Adicionar números de página aos PDFs com posicionamento e estilo personalizados',
                'tool_add_watermark_title': 'Adicionar Marca d\'Água',
                'tool_add_watermark_desc': 'Adicionar marcas d\'água de texto ou imagem aos PDFs com estilo personalizado',
                // Upload Areas
                'drop_jpg_files': 'Solte arquivos JPG aqui',
                'drop_png_files': 'Solte arquivos PNG aqui',
                'drop_pdf_files': 'Solte arquivos PDF aqui',
                'or_click_browse': 'ou clique para navegar',
                'or_click_browse_multiple': 'ou clique para navegar (múltiplos arquivos)',
                // Convert Buttons
                'convert_to_pdf': 'Converter para PDF',
                'convert_to_jpg': 'Converter para JPG',
                'convert_to_png': 'Converter para PNG',
                'compress_pdf_btn': 'Comprimir PDF',
                'merge_pdfs_btn': 'Mesclar PDFs',
                'add_page_numbers_btn': 'Adicionar Números de Página',
                'add_watermark_btn': 'Adicionar Marca d\'Água',
                // Features Section
                'features_title': 'Por Que Escolher PDFrow?',
                'features_subtitle': 'Experimente o futuro do processamento de documentos com nossos recursos avançados',
                'feature_lightning_fast_title': 'Ultrarrápido',
                'feature_lightning_fast_desc': 'Processe documentos em segundos com nossos algoritmos otimizados e tecnologia avançada de processamento do lado do cliente.',
                'feature_secure_title': '100% Seguro',
                'feature_secure_desc': 'Ferramentas PDF processam localmente no seu navegador. Conversões Office usam servidores seguros com exclusão automática de arquivos.',
                'feature_no_installation_title': 'Sem Instalação',
                'feature_no_installation_desc': 'Funciona diretamente no seu navegador. Sem downloads de software, sem atualizações, sem complicações. Apenas acesso instantâneo.',
                'feature_multi_device_title': 'Multi-Dispositivo',
                'feature_multi_device_desc': 'Acesse de qualquer dispositivo - desktop, tablet ou mobile. Design responsivo garante experiência perfeita em qualquer lugar.',
                'feature_high_quality_title': 'Alta Qualidade',
                'feature_high_quality_desc': 'Algoritmos profissionais de compressão e conversão mantêm a qualidade do documento enquanto otimizam os tamanhos dos arquivos.',
                'feature_always_free_title': 'Sempre Gratuito',
                'feature_always_free_desc': 'A funcionalidade principal é completamente gratuita. Sem custos ocultos, sem assinaturas, sem limitações no processamento de arquivos.',
                // How It Works Section
                'how_it_works_title': 'Como Funciona',
                'how_it_works_subtitle': 'Processamento de documentos simples, rápido e seguro em três passos fáceis',
                'step_upload_title': 'Envie Seus Arquivos',
                'step_upload_desc': 'Arraste e solte seus documentos ou clique para navegar. Suporta formatos PDF, JPG, PNG. Arquivos são processados usando nossa abordagem híbrida - localmente no seu navegador para ferramentas PDF, com segurança em nossos servidores para conversões Office.',
                'step_choose_title': 'Escolha Sua Ferramenta',
                'step_choose_desc': 'Selecione do nosso kit de ferramentas abrangente: converter, comprimir, mesclar, adicionar marcas d\'água ou números de página. Opções avançadas disponíveis para personalização.',
                'step_download_title': 'Baixe os Resultados',
                'step_download_desc': 'Obtenha seus arquivos processados instantaneamente. Baixe individualmente ou baixe todos os arquivos em lote. Arquivos são automaticamente limpos para sua privacidade.',
                // FAQ Section
                'faq_title': 'Perguntas Frequentes',
                'faq_subtitle': 'Tudo que você precisa saber sobre PDFrow',
                'faq_q1': 'PDFrow é realmente gratuito para usar?',
                'faq_a1': 'Sim! PDFrow é completamente gratuito para usar. Toda a funcionalidade principal incluindo conversão, compressão, mesclagem e ferramentas de edição estão disponíveis sem custo. Sem taxas ocultas ou assinatura necessária.',
                'faq_q2': 'Onde meus arquivos são processados?',
                'faq_a2': 'Usamos uma abordagem híbrida para sua segurança e conveniência:',
                'faq_a2_pdf': 'Ferramentas PDF (comprimir, mesclar, editar, etc.): Processadas 100% no seu navegador - arquivos nunca saem do seu dispositivo',
                'faq_a2_office': 'Conversões Office (Word, Excel, PowerPoint): Processadas em nossos servidores seguros com exclusão automática de arquivos após 1 hora',
                'faq_q3': 'Quais formatos de arquivo são suportados?',
                'faq_a3': 'Suportamos os formatos de documento e imagem mais comuns: PDF, JPG, JPEG e PNG. Cada ferramenta é otimizada para conversões de formato específicas e tarefas de processamento.',
                'faq_q4': 'Existe um limite de tamanho de arquivo?',
                'faq_a4': 'O tamanho máximo do arquivo é 50MB por arquivo. Este limite garante desempenho otimizado e velocidade de processamento para todos os usuários.',
                'faq_q5': 'Preciso instalar algum software?',
                'faq_a5': 'Nenhuma instalação necessária! PDFrow funciona inteiramente no seu navegador web. Apenas visite nosso site e comece a usar as ferramentas imediatamente. Compatível com Chrome, Firefox, Safari e Edge.',
                'faq_q6': 'Posso usar PDFrow em dispositivos móveis?',
                'faq_a6': 'Sim! PDFrow é totalmente responsivo e funciona em smartphones, tablets e computadores desktop. A interface se adapta ao tamanho da sua tela para experiência de usuário otimizada.',
                'faq_q7': 'Meus documentos Office estão seguros durante a conversão?',
                'faq_a7': 'Sim! Conversões Office usam nossos servidores em nuvem seguros com:',
                'faq_a7_ssl': 'Criptografia SSL durante a transferência',
                'faq_a7_deletion': 'Exclusão automática de arquivos em 1 hora',
                'faq_a7_access': 'Sem acesso humano aos seus arquivos',
                'faq_a7_isolation': 'Ambientes de processamento isolados',
                // Footer
                'language': 'Idioma',
                'footer_description': 'Plataforma de processamento de documentos de nova geração. Rápida, segura e sempre gratuita.',
                'footer_tools_title': 'Ferramentas',
                'footer_pdf_converter': 'Conversor PDF',
                'footer_image_converter': 'Conversor de Imagens',
                'footer_pdf_compressor': 'Compressor PDF',
                'footer_pdf_merger': 'Mesclador PDF',
                'footer_features_title': 'Recursos',
                'footer_add_watermarks': 'Adicionar Marcas d\'Água',
                'footer_page_numbers': 'Números de Página',
                'footer_batch_processing': 'Processamento em Lote',
                'footer_privacy_first': 'Privacidade em Primeiro Lugar',
                'footer_support_title': 'Suporte',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'Como Funciona',
                'footer_contact': 'Contato',
                'footer_help_center': 'Central de Ajuda',
                'footer_copyright': '© 2025 PDFrow. Todos os direitos reservados. Feito com ❤️ para processamento de documentos.'
            },
            'ru': {
                // Navigation
                'nav_tools': 'Инструменты',
                'nav_features': 'Функции',
                'nav_how_it_works': 'Как Это Работает',
                'nav_faq': 'FAQ',
                // Hero Section
                'hero_badge': 'Обработка Документов Нового Поколения',
                'hero_title_1': 'Преобразуйте Ваши Документы с',
                'hero_title_2': 'Профессиональной Точностью',
                'hero_subtitle': 'Умная обработка: Максимальная конфиденциальность для PDF-инструментов, мощная серверная конвертация для документов Office. Все файлы защищены.',
                'btn_start_converting': 'Начать Конвертацию',
                'stat_files_processed': 'Обработанных Файлов',
                'stat_uptime': 'Время Работы',
                'stat_average_speed': 'Средняя Скорость',
                // Tools Section
                'tools_title': 'Мощные Инструменты для Документов',
                'tools_subtitle': 'Выберите из нашего полного набора инструментов для обработки документов',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG в PDF',
                'tool_jpg_to_pdf_desc': 'Конвертация изображений JPG в документы PDF',
                'tool_png_to_jpg_title': 'PNG в JPG',
                'tool_png_to_jpg_desc': 'Конвертация изображений PNG в формат JPG',
                'tool_jpg_to_png_title': 'JPG в PNG',
                'tool_jpg_to_png_desc': 'Конвертация изображений JPG в формат PNG',
                'tool_pdf_to_jpg_title': 'PDF в JPG',
                'tool_pdf_to_jpg_desc': 'Конвертация страниц PDF в изображения JPG',
                'tool_compress_pdf_title': 'Сжать PDF',
                'tool_compress_pdf_desc': 'Уменьшение размера файла PDF для удобного обмена',
                'tool_merge_pdf_title': 'Объединить PDF',
                'tool_merge_pdf_desc': 'Объединение нескольких файлов PDF в один',
                'tool_add_page_numbers_title': 'Добавить Номера Страниц',
                'tool_add_page_numbers_desc': 'Добавление номеров страниц в PDF с настраиваемым позиционированием и стилем',
                'tool_add_watermark_title': 'Добавить Водяной Знак',
                'tool_add_watermark_desc': 'Добавление текстовых или графических водяных знаков в PDF с настраиваемым стилем',
                // Upload Areas
                'drop_jpg_files': 'Перетащите файлы JPG сюда',
                'drop_png_files': 'Перетащите файлы PNG сюда',
                'drop_pdf_files': 'Перетащите файлы PDF сюда',
                'or_click_browse': 'или нажмите для обзора',
                'or_click_browse_multiple': 'или нажмите для обзора (несколько файлов)',
                // Convert Buttons
                'convert_to_pdf': 'Конвертировать в PDF',
                'convert_to_jpg': 'Конвертировать в JPG',
                'convert_to_png': 'Конвертировать в PNG',
                'compress_pdf_btn': 'Сжать PDF',
                'merge_pdfs_btn': 'Объединить PDF',
                'add_page_numbers_btn': 'Добавить Номера Страниц',
                'add_watermark_btn': 'Добавить Водяной Знак',
                // Features Section
                'features_title': 'Почему Выбрать PDFrow?',
                'features_subtitle': 'Испытайте будущее обработки документов с нашими передовыми функциями',
                'feature_lightning_fast_title': 'Молниеносная Скорость',
                'feature_lightning_fast_desc': 'Обрабатывайте документы за секунды с помощью наших оптимизированных алгоритмов и передовой технологии клиентской обработки.',
                'feature_secure_title': '100% Безопасно',
                'feature_secure_desc': 'Инструменты PDF обрабатываются локально в вашем браузере. Преобразования Office используют защищенные серверы с автоматическим удалением файлов.',
                'feature_no_installation_title': 'Без Установки',
                'feature_no_installation_desc': 'Работает прямо в вашем браузере. Никаких загрузок программного обеспечения, никаких обновлений, никаких хлопот. Только мгновенный доступ.',
                'feature_multi_device_title': 'Мультиустройство',
                'feature_multi_device_desc': 'Доступ с любого устройства - настольного, планшета или мобильного. Адаптивный дизайн обеспечивает идеальный опыт везде.',
                'feature_high_quality_title': 'Высокое Качество',
                'feature_high_quality_desc': 'Профессиональные алгоритмы сжатия и конвертации сохраняют качество документов при оптимизации размеров файлов.',
                'feature_always_free_title': 'Всегда Бесплатно',
                'feature_always_free_desc': 'Основная функциональность полностью бесплатна. Никаких скрытых затрат, никаких подписок, никаких ограничений на обработку файлов.',
                // How It Works Section
                'how_it_works_title': 'Как Это Работает',
                'how_it_works_subtitle': 'Простая, быстрая и безопасная обработка документов в три простых шага',
                'step_upload_title': 'Загрузите Ваши Файлы',
                'step_upload_desc': 'Перетащите ваши документы или нажмите для обзора. Поддерживает форматы PDF, JPG, PNG. Файлы обрабатываются с использованием нашего гибридного подхода - локально в вашем браузере для инструментов PDF, безопасно на наших серверах для преобразований Office.',
                'step_choose_title': 'Выберите Ваш Инструмент',
                'step_choose_desc': 'Выберите из нашего полного набора инструментов: конвертация, сжатие, объединение, добавление водяных знаков или номеров страниц. Доступны расширенные опции для настройки.',
                'step_download_title': 'Скачайте Результаты',
                'step_download_desc': 'Получите ваши обработанные файлы мгновенно. Скачивайте по отдельности или пакетно все файлы. Файлы автоматически очищаются для вашей конфиденциальности.',
                // FAQ Section
                'faq_title': 'Часто Задаваемые Вопросы',
                'faq_subtitle': 'Все что вам нужно знать о PDFrow',
                'faq_q1': 'Действительно ли PDFrow бесплатен для использования?',
                'faq_a1': 'Да! PDFrow полностью бесплатен для использования. Все основные функции включая конвертацию, сжатие, объединение и инструменты редактирования доступны бесплатно. Никаких скрытых платежей или подписки не требуется.',
                'faq_q2': 'Где обрабатываются мои файлы?',
                'faq_a2': 'Мы используем гибридный подход для вашей безопасности и удобства:',
                'faq_a2_pdf': 'Инструменты PDF (сжатие, объединение, редактирование и т.д.): Обрабатываются на 100% в вашем браузере - файлы никогда не покидают ваше устройство',
                'faq_a2_office': 'Конвертация Office (Word, Excel, PowerPoint): Обрабатывается на наших защищенных серверах с автоматическим удалением файлов через 1 час',
                'faq_q3': 'Какие форматы файлов поддерживаются?',
                'faq_a3': 'Мы поддерживаем наиболее распространенные форматы документов и изображений: PDF, JPG, JPEG и PNG. Каждый инструмент оптимизирован для конкретных конверсий форматов и задач обработки.',
                'faq_q4': 'Есть ли ограничение размера файла?',
                'faq_a4': 'Максимальный размер файла составляет 10МБ на файл. Это ограничение обеспечивает оптимальную производительность и скорость обработки для всех пользователей.',
                'faq_q5': 'Нужно ли устанавливать какое-либо программное обеспечение?',
                'faq_a5': 'Установка не требуется! PDFrow работает полностью в вашем веб-браузере. Просто посетите наш сайт и начните использовать инструменты немедленно. Совместим с Chrome, Firefox, Safari и Edge.',
                'faq_q6': 'Могу ли я использовать PDFrow на мобильных устройствах?',
                'faq_a6': 'Да! PDFrow полностью адаптивен и работает на смартфонах, планшетах и настольных компьютерах. Интерфейс адаптируется к размеру вашего экрана для оптимального пользовательского опыта.',
                'faq_q7': 'Безопасны ли мои документы Office во время конвертации?',
                'faq_a7': 'Да! Конвертация Office использует наши защищенные облачные серверы с:',
                'faq_a7_ssl': 'SSL-шифрование при передаче',
                'faq_a7_deletion': 'Автоматическое удаление файлов в течение 1 часа',
                'faq_a7_access': 'Без доступа людей к вашим файлам',
                'faq_a7_isolation': 'Изолированные среды обработки',
                // Footer
                'language': 'Язык',
                'footer_description': 'Платформа обработки документов нового поколения. Быстрая, безопасная и всегда бесплатная.',
                'footer_tools_title': 'Инструменты',
                'footer_pdf_converter': 'Конвертер PDF',
                'footer_image_converter': 'Конвертер Изображений',
                'footer_pdf_compressor': 'Компрессор PDF',
                'footer_pdf_merger': 'Объединитель PDF',
                'footer_features_title': 'Функции',
                'footer_add_watermarks': 'Добавить Водяные Знаки',
                'footer_page_numbers': 'Номера Страниц',
                'footer_batch_processing': 'Пакетная Обработка',
                'footer_privacy_first': 'Конфиденциальность Прежде Всего',
                'footer_support_title': 'Поддержка',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'Как Это Работает',
                'footer_contact': 'Контакт',
                'footer_help_center': 'Центр Помощи',
                'footer_copyright': '© 2025 PDFrow. Все права защищены. Сделано с ❤️ для обработки документов.'
            },
            'zh': {
                // Navigation
                'nav_tools': '工具',
                'nav_features': '功能',
                'nav_how_it_works': '工作原理',
                'nav_faq': '常见问题',
                // Hero Section
                'hero_badge': '新一代文档处理',
                'hero_title_1': '用专业精度',
                'hero_title_2': '转换您的文档',
                'hero_subtitle': '智能处理：PDF工具的最大隐私保护，Office文档的强大服务器转换。所有文件均受保护。',
                'btn_start_converting': '开始转换',
                'stat_files_processed': '已处理文件',
                'stat_uptime': '运行时间',
                'stat_average_speed': '平均速度',
                // Tools Section
                'tools_title': '强大的文档工具',
                'tools_subtitle': '从我们全面的文档处理工具套件中选择',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG转PDF',
                'tool_jpg_to_pdf_desc': '将JPG图片转换为PDF文档',
                'tool_png_to_jpg_title': 'PNG转JPG',
                'tool_png_to_jpg_desc': '将PNG图片转换为JPG格式',
                'tool_jpg_to_png_title': 'JPG转PNG',
                'tool_jpg_to_png_desc': '将JPG图片转换为PNG格式',
                'tool_pdf_to_jpg_title': 'PDF转JPG',
                'tool_pdf_to_jpg_desc': '将PDF页面转换为JPG图片',
                'tool_compress_pdf_title': '压缩PDF',
                'tool_compress_pdf_desc': '减小PDF文件大小以便于分享',
                'tool_merge_pdf_title': '合并PDF',
                'tool_merge_pdf_desc': '将多个PDF文件合并为一个',
                'tool_add_page_numbers_title': '添加页码',
                'tool_add_page_numbers_desc': '为PDF添加自定义位置和样式的页码',
                'tool_add_watermark_title': '添加水印',
                'tool_add_watermark_desc': '为PDF添加自定义样式的文字或图片水印',
                // Upload Areas
                'drop_jpg_files': '将JPG文件拖放到这里',
                'drop_png_files': '将PNG文件拖放到这里',
                'drop_pdf_files': '将PDF文件拖放到这里',
                'or_click_browse': '或点击浏览',
                'or_click_browse_multiple': '或点击浏览（多个文件）',
                // Convert Buttons
                'convert_to_pdf': '转换为PDF',
                'convert_to_jpg': '转换为JPG',
                'convert_to_png': '转换为PNG',
                'compress_pdf_btn': '压缩PDF',
                'merge_pdfs_btn': '合并PDF',
                'add_page_numbers_btn': '添加页码',
                'add_watermark_btn': '添加水印',
                // Features Section
                'features_title': '为什么选择PDFrow？',
                'features_subtitle': '通过我们的先进功能体验文档处理的未来',
                'feature_lightning_fast_title': '闪电般快速',
                'feature_lightning_fast_desc': '借助我们优化的算法和先进的客户端处理技术，在几秒钟内处理文档。',
                'feature_secure_title': '100%安全',
                'feature_secure_desc': 'PDF工具在您的浏览器中本地处理。Office转换使用安全服务器并自动删除文件。',
                'feature_no_installation_title': '无需安装',
                'feature_no_installation_desc': '直接在您的浏览器中工作。无需软件下载，无需更新，无麻烦。只需即时访问。',
                'feature_multi_device_title': '多设备支持',
                'feature_multi_device_desc': '从任何设备访问 - 桌面、平板或手机。响应式设计确保在任何地方都有完美的体验。',
                'feature_high_quality_title': '高质量',
                'feature_high_quality_desc': '专业的压缩和转换算法在优化文件大小的同时保持文档质量。',
                'feature_always_free_title': '永远免费',
                'feature_always_free_desc': '核心功能完全免费。无隐藏费用，无订阅，无文件处理限制。',
                // How It Works Section
                'how_it_works_title': '工作原理',
                'how_it_works_subtitle': '简单、快速、安全的文档处理，只需三个简单步骤',
                'step_upload_title': '上传您的文件',
                'step_upload_desc': '拖放您的文档或点击浏览。支持PDF、JPG、PNG格式。文件使用我们的混合方法处理 - PDF工具在您的浏览器中本地处理，Office转换在我们的服务器上安全处理。',
                'step_choose_title': '选择您的工具',
                'step_choose_desc': '从我们全面的工具包中选择：转换、压缩、合并、添加水印或页码。提供高级选项进行自定义。',
                'step_download_title': '下载结果',
                'step_download_desc': '立即获取您处理过的文件。单独下载或批量下载所有文件。文件会自动清理以保护您的隐私。',
                // FAQ Section
                'faq_title': '常见问题',
                'faq_subtitle': '关于PDFrow您需要了解的一切',
                'faq_q1': 'PDFrow真的免费使用吗？',
                'faq_a1': '是的！PDFrow完全免费使用。包括转换、压缩、合并和编辑工具在内的所有核心功能都免费提供。没有隐藏费用或订阅要求。',
                'faq_q2': '我的文件在哪里处理？',
                'faq_a2': '我们采用混合方法确保您的安全和便利：',
                'faq_a2_pdf': 'PDF工具（压缩、合并、编辑等）：100%在您的浏览器中处理 - 文件永不离开您的设备',
                'faq_a2_office': 'Office转换（Word、Excel、PowerPoint）：在我们的安全服务器上处理，1小时后自动删除文件',
                'faq_q3': '支持哪些文件格式？',
                'faq_a3': '我们支持最常见的文档和图像格式：PDF、JPG、JPEG和PNG。每个工具都针对特定的格式转换和处理任务进行了优化。',
                'faq_q4': '有文件大小限制吗？',
                'faq_a4': '最大文件大小为每个文件50MB。此限制确保所有用户的最佳性能和处理速度。',
                'faq_q5': '我需要安装任何软件吗？',
                'faq_a5': '无需安装！PDFrow完全在您的网络浏览器中工作。只需访问我们的网站并立即开始使用工具。与Chrome、Firefox、Safari和Edge兼容。',
                'faq_q6': '我可以在移动设备上使用PDFrow吗？',
                'faq_a6': '可以！PDFrow完全响应式，可在智能手机、平板电脑和桌面计算机上运行。界面适应您的屏幕大小，提供最佳用户体验。',
                'faq_q7': '我的Office文档在转换过程中安全吗？',
                'faq_a7': '是的！Office转换使用我们的安全云服务器，具有：',
                'faq_a7_ssl': '传输期间的SSL加密',
                'faq_a7_deletion': '1小时内自动删除文件',
                'faq_a7_access': '无人工访问您的文件',
                'faq_a7_isolation': '隔离的处理环境',
                // Footer
                'language': '语言',
                'footer_description': '下一代文档处理平台。快速、安全、永远免费。',
                'footer_tools_title': '工具',
                'footer_pdf_converter': 'PDF转换器',
                'footer_image_converter': '图像转换器',
                'footer_pdf_compressor': 'PDF压缩器',
                'footer_pdf_merger': 'PDF合并器',
                'footer_features_title': '功能',
                'footer_add_watermarks': '添加水印',
                'footer_page_numbers': '页码',
                'footer_batch_processing': '批处理',
                'footer_privacy_first': '隐私优先',
                'footer_support_title': '支持',
                'footer_faq': '常见问题',
                'footer_how_it_works': '工作原理',
                'footer_contact': '联系',
                'footer_help_center': '帮助中心',
                'footer_copyright': '© 2025 PDFrow. 保留所有权利。用❤️为文档处理而制作。'
            },
            'ja': {
                // Navigation
                'nav_tools': 'ツール',
                'nav_features': '機能',
                'nav_how_it_works': '使い方',
                'nav_faq': 'よくある質問',
                // Hero Section
                'hero_badge': '次世代ドキュメント処理',
                'hero_title_1': 'あなたの文書を変換する',
                'hero_title_2': 'プロフェッショナルな精度で',
                'hero_subtitle': 'スマート処理：PDFツールの最大限のプライバシー、Officeドキュメントの強力なサーバー変換。すべてのファイルを保護。',
                'btn_start_converting': '変換を開始',
                'stat_files_processed': '処理済みファイル',
                'stat_uptime': '稼働時間',
                'stat_average_speed': '平均速度',
                // Tools Section
                'tools_title': '強力なドキュメントツール',
                'tools_subtitle': '包括的なドキュメント処理ツールスイートから選択',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPGかPDFへ',
                'tool_jpg_to_pdf_desc': 'JPG画像をPDFドキュメントに変換',
                'tool_png_to_jpg_title': 'PNGかJPGへ',
                'tool_png_to_jpg_desc': 'PNG画像をJPG形式に変換',
                'tool_jpg_to_png_title': 'JPGかPNGへ',
                'tool_jpg_to_png_desc': 'JPG画像をPNG形式に変換',
                'tool_pdf_to_jpg_title': 'PDFかJPGへ',
                'tool_pdf_to_jpg_desc': 'PDFページをJPG画像に変換',
                'tool_compress_pdf_title': 'PDF圧縮',
                'tool_compress_pdf_desc': '簡単な共有のためにPDFファイルサイズを減らす',
                'tool_merge_pdf_title': 'PDF結合',
                'tool_merge_pdf_desc': '複数のPDFファイルを一つに結合',
                'tool_add_page_numbers_title': 'ページ番号追加',
                'tool_add_page_numbers_desc': 'カスタム位置とスタイルでPDFにページ番号を追加',
                'tool_add_watermark_title': '透かし追加',
                'tool_add_watermark_desc': 'カスタムスタイルでPDFにテキストまたは画像の透かしを追加',
                // Upload Areas
                'drop_jpg_files': 'JPGファイルをここにドロップ',
                'drop_png_files': 'PNGファイルをここにドロップ',
                'drop_pdf_files': 'PDFファイルをここにドロップ',
                'or_click_browse': 'またはクリックして参照',
                'or_click_browse_multiple': 'またはクリックして参照（複数ファイル）',
                // Convert Buttons
                'convert_to_pdf': 'PDFに変換',
                'convert_to_jpg': 'JPGに変換',
                'convert_to_png': 'PNGに変換',
                'compress_pdf_btn': 'PDF圧縮',
                'merge_pdfs_btn': 'PDF結合',
                'add_page_numbers_btn': 'ページ番号追加',
                'add_watermark_btn': '透かし追加',
                // Features Section
                'features_title': 'なぜPDFrowを選ぶのか？',
                'features_subtitle': '先進的な機能でドキュメント処理の未来を体験',
                'feature_lightning_fast_title': '雷速',
                'feature_lightning_fast_desc': '最適化されたアルゴリズムと先進的なクライアントサイド処理技術で、数秒でドキュメントを処理。',
                'feature_secure_title': '100%セキュア',
                'feature_secure_desc': 'PDFツールはブラウザでローカル処理されます。Office変換は自動ファイル削除機能付きの安全なサーバーを使用します。',
                'feature_no_installation_title': 'インストール不要',
                'feature_no_installation_desc': 'ブラウザで直接動作。ソフトウェアのダウンロード、アップデート、面倒がありません。即座アクセスできます。',
                'feature_multi_device_title': 'マルチデバイス',
                'feature_multi_device_desc': 'どんなデバイスからでも - デスクトップ、タブレット、モバイル。レスポンシブデザインでどこでも完美な体験を保証。',
                'feature_high_quality_title': '高品質',
                'feature_high_quality_desc': 'プロフェッショナルな圧縮と変換アルゴリズムがファイルサイズを最適化しながらドキュメントの品質を維持。',
                'feature_always_free_title': '常に無料',
                'feature_always_free_desc': 'コア機能は完全に無料。隠れたコスト、サブスクリプション、ファイル処理の制限はありません。',
                // How It Works Section
                'how_it_works_title': '使い方',
                'how_it_works_subtitle': 'シンプル、高速、安全なドキュメント処理を簡単な3ステップで',
                'step_upload_title': 'ファイルをアップロード',
                'step_upload_desc': 'ドキュメントをドラッグ＆ドロップしてくださいまたはクリックして参照。PDF、JPG、PNG形式をサポート。ファイルはハイブリッドアプローチを使用して処理されます - PDFツールはブラウザでローカルに、Office変換はサーバーで安全に処理されます。',
                'step_choose_title': 'ツールを選択',
                'step_choose_desc': '包括的なツールキットから選択：変換、圧縮、結合、透かしやページ番号の追加。カスタマイズ用の高度なオプションも利用可能。',
                'step_download_title': '結果をダウンロード',
                'step_download_desc': '処理されたファイルを即座取得。個別ダウンロードまたはすべてのファイルの一括ダウンロード。プライバシーのためにファイルは自動的にクリーンアップされます。',
                // FAQ Section
                'faq_title': 'よくある質問',
                'faq_subtitle': 'PDFrowについて知っておくべきこと',
                'faq_q1': 'PDFrowは本当に無料で使えますか？',
                'faq_a1': 'はい！PDFrowは完全に無料で使えます。変換、圧縮、結合、編集ツールを含むすべてのコア機能が無料で利用できます。隠れた料金やサブスクリプションは必要ありません。',
                'faq_q2': 'ファイルはどこで処理されますか？',
                'faq_a2': 'セキュリティと利便性のためにハイブリッドアプローチを使用しています：',
                'faq_a2_pdf': 'PDFツール（圧縮、結合、編集など）：100%ブラウザで処理 - ファイルはデバイスを離れません',
                'faq_a2_office': 'Office変換（Word、Excel、PowerPoint）：1時間後に自動ファイル削除を伴う安全なサーバーで処理',
                'faq_q3': 'どのファイル形式がサポートされていますか？',
                'faq_a3': '最も一般的なドキュメントと画像形式をサポートしています：PDF、JPG、JPEG、PNG。各ツールは特定の形式変換と処理タスクに最適化されています。',
                'faq_q4': 'ファイルサイズの制限はありますか？',
                'faq_a4': '最大ファイルサイズはファイルあたり50MBです。この制限により、すべてのユーザーに最適なパフォーマンスと処理速度が保証されます。',
                'faq_q5': 'ソフトウェアのインストールが必要ですか？',
                'faq_a5': 'インストールは不要です！PDFrowはウェブブラウザで完全に動作します。単に私たちのウェブサイトを訪れて、すぐにツールの使用を開始してください。Chrome、Firefox、Safari、Edgeと互換性があります。',
                'faq_q6': 'モバイルデバイスでPDFrowを使えますか？',
                'faq_a6': 'はい！PDFrowは完全にレスポンシブで、スマートフォン、タブレット、デスクトップコンピュータで動作します。インターフェイスはスクリーンサイズに適応し、最適なユーザーエクスペリエンスを提供します。',
                'faq_q7': 'Office文書は変換中に安全ですか？',
                'faq_a7': 'はい！Office変換は安全なクラウドサーバーを使用し、以下の機能があります：',
                'faq_a7_ssl': '転送中のSSL暗号化',
                'faq_a7_deletion': '1時間以内の自動ファイル削除',
                'faq_a7_access': 'ファイルへの人的アクセスなし',
                'faq_a7_isolation': '隔離された処理環境',
                // Footer
                'language': '言語',
                'footer_description': '次世代ドキュメント処理プラットフォーム。高速、安全、常に無料。',
                'footer_tools_title': 'ツール',
                'footer_pdf_converter': 'PDFコンバータ',
                'footer_image_converter': '画像コンバータ',
                'footer_pdf_compressor': 'PDFコンプレッサ',
                'footer_pdf_merger': 'PDFマージャ',
                'footer_features_title': '機能',
                'footer_add_watermarks': '透かし追加',
                'footer_page_numbers': 'ページ番号',
                'footer_batch_processing': 'バッチ処理',
                'footer_privacy_first': 'プライバシー第一',
                'footer_support_title': 'サポート',
                'footer_faq': 'よくある質問',
                'footer_how_it_works': '使い方',
                'footer_contact': 'お問い合わせ',
                'footer_help_center': 'ヘルプセンター',
                'footer_copyright': '© 2025 PDFrow. すべての権利が保留されています。ドキュメント処理のために❤️で作られました。'
            },
            'ar': {
                // Navigation
                'nav_tools': 'الأدوات',
                'nav_features': 'الميزات',
                'nav_how_it_works': 'كيف يعمل',
                'nav_faq': 'الأسئلة الشائعة',
                // Hero Section
                'hero_badge': 'معالجة المستندات من الجيل التالي',
                'hero_title_1': 'حوّل مستنداتك مع',
                'hero_title_2': 'دقة احترافية',
                'hero_subtitle': 'معالجة ذكية: أقصى قدر من الخصوصية لأدوات PDF، تحويل خادم قوي لمستندات Office. جميع الملفات محمية.',
                'btn_start_converting': 'ابدأ التحويل',
                'stat_files_processed': 'الملفات المعالجة',
                'stat_uptime': 'وقت التشغيل',
                'stat_average_speed': 'السرعة المتوسطة',
                // FAQ Section
                'faq_title': 'الأسئلة الشائعة',
                'faq_subtitle': 'كل ما تحتاج معرفته عن PDFrow',
                'faq_q1': 'هل PDFrow مجاني حقاً للاستخدام؟',
                'faq_a1': 'نعم! PDFrow مجاني تماماً للاستخدام. جميع الوظائف الأساسية بما في ذلك التحويل والضغط والدمج وأدوات التحرير متاحة بدون تكلفة. لا توجد رسوم خفية أو اشتراك مطلوب.',
                'faq_q2': 'أين تتم معالجة ملفاتي؟',
                'faq_a2': 'نستخدم نهجًا هجينًا لأمانك وراحتك:',
                'faq_a2_pdf': 'أدوات PDF (ضغط، دمج، تحرير، إلخ): تتم معالجتها بنسبة 100% في متصفحك - الملفات لا تغادر جهازك أبدًا',
                'faq_a2_office': 'تحويلات Office (Word، Excel، PowerPoint): تتم معالجتها على خوادمنا الآمنة مع حذف تلقائي للملفات بعد ساعة واحدة',
                'faq_q3': 'ما هي تنسيقات الملفات المدعومة؟',
                'faq_a3': 'ندعم تنسيقات المستندات والصور الأكثر شيوعاً: PDF، JPG، JPEG، وPNG. كل أداة محسّنة لتحويلات تنسيق محددة ومهام معالجة.',
                'faq_q4': 'هل يوجد حد لحجم الملف؟',
                'faq_a4': 'الحد الأقصى لحجم الملف هو 10 ميجابايت لكل ملف. يضمن هذا الحد الأداء الأمثل وسرعة المعالجة لجميع المستخدمين.',
                'faq_q5': 'هل أحتاج إلى تثبيت أي برنامج؟',
                'faq_a5': 'لا يلزم التثبيت! PDFrow يعمل بالكامل في متصفح الويب الخاص بك. ما عليك سوى زيارة موقعنا الإلكتروني والبدء في استخدام الأدوات فوراً. متوافق مع Chrome وFirefox وSafari وEdge.',
                'faq_q6': 'هل يمكنني استخدام PDFrow على الأجهزة المحمولة؟',
                'faq_a6': 'نعم! PDFrow متجاوب بالكامل ويعمل على الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر المكتبية. تتكيف الواجهة مع حجم شاشتك لتجربة مستخدم مثالية.',
                'faq_q7': 'هل مستندات Office الخاصة بي آمنة أثناء التحويل؟',
                'faq_a7': 'نعم! تستخدم تحويلات Office خوادمنا السحابية الآمنة مع:',
                'faq_a7_ssl': 'تشفير SSL أثناء النقل',
                'faq_a7_deletion': 'حذف تلقائي للملفات خلال ساعة واحدة',
                'faq_a7_access': 'لا يوجد وصول بشري لملفاتك',
                'faq_a7_isolation': 'بيئات معالجة معزولة',
                // Footer
                'language': 'اللغة'
            },
            'hi': {
                // Navigation
                'nav_tools': 'उपकरण',
                'nav_features': 'विशेषताएं',
                'nav_how_it_works': 'कैसे काम करता है',
                'nav_faq': 'सामान्य प्रश्न',
                // Hero Section
                'hero_badge': 'अगली पीढ़ी का दस्तावेज़ प्रसंस्करण',
                'hero_title_1': 'अपने दस्तावेज़ों को बदलें',
                'hero_title_2': 'पेशेवर सटीकता के साथ',
                'hero_subtitle': 'स्मार्ट प्रोसेसिंग: PDF टूल्स के लिए अधिकतम गोपनीयता, Office दस्तावेज़ों के लिए शक्तिशाली सर्वर रूपांतरण। सभी फाइलें सुरक्षित।',
                'btn_start_converting': 'रूपांतरण शुरू करें',
                'stat_files_processed': 'प्रसंस्कृत फ़ाइलें',
                'stat_uptime': 'अपटाइम',
                'stat_average_speed': 'औसत गति',
                // Tools Section
                'tools_title': 'शक्तिशाली दस्तावेज़ उपकरण',
                'tools_subtitle': 'हमारे व्यापक दस्तावेज़ प्रसंस्करण उपकरणों के सूट से चुनें',
                // Tool Cards
                'tool_jpg_to_pdf_title': 'JPG से PDF',
                'tool_jpg_to_pdf_desc': 'JPG छवियों को PDF दस्तावेज़ों में बदलें',
                'tool_png_to_jpg_title': 'PNG से JPG',
                'tool_png_to_jpg_desc': 'PNG छवियों को JPG प्रारूप में बदलें',
                'tool_jpg_to_png_title': 'JPG से PNG',
                'tool_jpg_to_png_desc': 'JPG छवियों को PNG प्रारूप में बदलें',
                'tool_pdf_to_jpg_title': 'PDF से JPG',
                'tool_pdf_to_jpg_desc': 'PDF पृष्ठों को JPG छवियों में बदलें',
                'tool_compress_pdf_title': 'PDF संपीड़न',
                'tool_compress_pdf_desc': 'आसान साझाकरण के लिए PDF फ़ाइल का आकार कम करें',
                'tool_merge_pdf_title': 'PDF मर्ज',
                'tool_merge_pdf_desc': 'कई PDF फ़ाइलों को एक में मिलाएं',
                'tool_add_page_numbers_title': 'पृष्ठ संख्या जोड़ें',
                'tool_add_page_numbers_desc': 'कस्टम स्थिति और स्टाइलिंग के साथ PDF में पृष्ठ संख्या जोड़ें',
                'tool_add_watermark_title': 'वॉटरमार्क जोड़ें',
                'tool_add_watermark_desc': 'कस्टम स्टाइलिंग के साथ PDF में टेक्स्ट या इमेज वॉटरमार्क जोड़ें',
                // Upload Areas
                'drop_jpg_files': 'JPG फ़ाइलें यहाँ छोड़ें',
                'drop_png_files': 'PNG फ़ाइलें यहाँ छोड़ें',
                'drop_pdf_files': 'PDF फ़ाइलें यहाँ छोड़ें',
                'or_click_browse': 'या ब्राउज़ करने के लिए क्लिक करें',
                'or_click_browse_multiple': 'या ब्राउज़ करने के लिए क्लिक करें (कई फ़ाइलें)',
                // Convert Buttons
                'convert_to_pdf': 'PDF में बदलें',
                'convert_to_jpg': 'JPG में बदलें',
                'convert_to_png': 'PNG में बदलें',
                'compress_pdf_btn': 'PDF संपीड़न',
                'merge_pdfs_btn': 'PDF मर्ज',
                'add_page_numbers_btn': 'पृष्ठ संख्या जोड़ें',
                'add_watermark_btn': 'वॉटरमार्क जोड़ें',
                // Features Section
                'features_title': 'PDFrow क्यों चुनें?',
                'features_subtitle': 'हमारी उन्नत सुविधाओं के साथ दस्तावेज़ प्रसंस्करण के भविष्य का अनुभव करें',
                'feature_lightning_fast_title': 'बिजली की तेज़',
                'feature_lightning_fast_desc': 'हमारे अनुकूलित एल्गोरिदम और उन्नत क्लाइंट-साइड प्रसंस्करण तकनीक के साथ सेकंडों में दस्तावेज़ प्रसंस्करण।',
                'feature_secure_title': '100% सुरक्षित',
                'feature_secure_desc': 'PDF टूल आपके ब्राउज़र में स्थानीय रूप से प्रक्रिया करते हैं। Office रूपांतरण स्वचालित फ़ाइल विलोपन के साथ सुरक्षित सर्वर का उपयोग करते हैं।',
                'feature_no_installation_title': 'कोई इंस्टॉलेशन नहीं',
                'feature_no_installation_desc': 'सीधे आपके ब्राउज़र में काम करता है। कोई सॉफ़्टवेयर डाउनलोड नहीं, कोई अपडेट नहीं, कोई परेशानी नहीं। बस तत्काल पहुंच।',
                'feature_multi_device_title': 'मल्टी-डिवाइस',
                'feature_multi_device_desc': 'किसी भी डिवाइस से एक्सेस करें - डेस्कटॉप, टैबलेट या मोबाइल। रिस्पॉन्सिव डिज़ाइन हर जगह पूर्ण अनुभव सुनिश्चित करता है।',
                'feature_high_quality_title': 'उच्च गुणवत्ता',
                'feature_high_quality_desc': 'पेशेवर संपीड़न और रूपांतरण एल्गोरिदम फ़ाइल आकार को अनुकूलित करते समय दस्तावेज़ गुणवत्ता बनाए रखते हैं।',
                'feature_always_free_title': 'हमेशा मुफ़्त',
                'feature_always_free_desc': 'मुख्य कार्यक्षमता पूरी तरह से मुफ़्त है। कोई छुपी लागत नहीं, कोई सदस्यता नहीं, फ़ाइल प्रसंस्करण पर कोई सीमा नहीं।',
                // How It Works Section
                'how_it_works_title': 'यह कैसे काम करता है',
                'how_it_works_subtitle': 'तीन आसान चरणों में सरल, तेज़ और सुरक्षित दस्तावेज़ प्रसंस्करण',
                'step_upload_title': 'अपनी फ़ाइलें अपलोड करें',
                'step_upload_desc': 'अपने दस्तावेज़ों को ड्रैग और ड्रॉप करें या ब्राउज़ करने के लिए क्लिक करें। PDF, JPG, PNG प्रारूपों का समर्थन करता है। फ़ाइलें हमारे हाइब्रिड दृष्टिकोण का उपयोग करके प्रसंस्कृत की जाती हैं - PDF टूल के लिए आपके ब्राउज़र में स्थानीय रूप से, Office रूपांतरण के लिए हमारे सर्वर पर सुरक्षित रूप से।',
                'step_choose_title': 'अपना उपकरण चुनें',
                'step_choose_desc': 'हमारे व्यापक टूलकिट से चुनें: कन्वर्ट, कंप्रेस, मर्ज, वॉटरमार्क या पेज नंबर जोड़ें। कस्टमाइज़ेशन के लिए उन्नत विकल्प उपलब्ध हैं।',
                'step_download_title': 'परिणाम डाउनलोड करें',
                'step_download_desc': 'अपनी प्रसंस्कृत फ़ाइलें तुरंत प्राप्त करें। व्यक्तिगत रूप से या सभी फ़ाइलों को बैच डाउनलोड करें। आपकी गोपनीयता के लिए फ़ाइलें स्वचालित रूप से साफ़ हो जाती हैं।',
                // FAQ Section
                'faq_title': 'अक्सर पूछे जाने वाले प्रश्न',
                'faq_subtitle': 'PDFrow के बारे में जानने योग्य सब कुछ',
                'faq_q1': 'क्या PDFrow वास्तव में उपयोग करने के लिए मुफ़्त है?',
                'faq_a1': 'हाँ! PDFrow उपयोग करने के लिए पूरी तरह से मुफ़्त है। रूपांतरण, संपीड़न, मर्जिंग और संपादन उपकरण सहित सभी मुख्य कार्यक्षमता बिना किसी लागत के उपलब्ध है। कोई छुपी फ़ीस या सदस्यता आवश्यक नहीं।',
                'faq_q2': 'मेरी फ़ाइलें कहाँ प्रोसेस की जाती हैं?',
                'faq_a2': 'हम आपकी सुरक्षा और सुविधा के लिए एक हाइब्रिड दृष्टिकोण का उपयोग करते हैं:',
                'faq_a2_pdf': 'PDF टूल्स (कंप्रेस, मर्ज, एडिट, आदि): 100% आपके ब्राउज़र में प्रोसेस - फ़ाइलें कभी आपके डिवाइस को नहीं छोड़तीं',
                'faq_a2_office': 'Office रूपांतरण (Word, Excel, PowerPoint): 1 घंटे बाद स्वचालित फ़ाइल विलोपन के साथ हमारे सुरक्षित सर्वर पर प्रोसेस',
                'faq_q3': 'कौन से फ़ाइल प्रारूप समर्थित हैं?',
                'faq_a3': 'हम सबसे सामान्य दस्तावेज़ और छवि प्रारूपों का समर्थन करते हैं: PDF, JPG, JPEG, और PNG। प्रत्येक उपकरण विशिष्ट प्रारूप रूपांतरण और प्रसंस्करण कार्यों के लिए अनुकूलित है।',
                'faq_q4': 'क्या फ़ाइल आकार की कोई सीमा है?',
                'faq_a4': 'अधिकतम फ़ाइल आकार प्रति फ़ाइल 50MB है। यह सीमा सभी उपयोगकर्ताओं के लिए अनुकूल प्रदर्शन और प्रसंस्करण गति सुनिश्चित करती है।',
                'faq_q5': 'क्या मुझे कोई सॉफ़्टवेयर इंस्टॉल करना होगा?',
                'faq_a5': 'कोई इंस्टॉलेशन आवश्यक नहीं! PDFrow पूरी तरह से आपके वेब ब्राउज़र में काम करता है। बस हमारी वेबसाइट पर जाएं और तुरंत उपकरणों का उपयोग शुरू करें। Chrome, Firefox, Safari, और Edge के साथ संगत।',
                'faq_q6': 'क्या मैं मोबाइल डिवाइस पर PDFrow का उपयोग कर सकता हूँ?',
                'faq_a6': 'हाँ! PDFrow पूरी तरह से रिस्पॉन्सिव है और स्मार्टफ़ोन, टैबलेट और डेस्कटॉप कंप्यूटर पर काम करता है। इंटरफ़ेस इष्टतम उपयोगकर्ता अनुभव के लिए आपकी स्क्रीन के आकार के अनुकूल हो जाता है।',
                'faq_q7': 'क्या रूपांतरण के दौरान मेरे Office दस्तावेज़ सुरक्षित हैं?',
                'faq_a7': 'हाँ! Office रूपांतरण हमारे सुरक्षित क्लाउड सर्वर का उपयोग करते हैं:',
                'faq_a7_ssl': 'स्थानांतरण के दौरान SSL एन्क्रिप्शन',
                'faq_a7_deletion': '1 घंटे के भीतर स्वचालित फ़ाइल विलोपन',
                'faq_a7_access': 'आपकी फ़ाइलों तक कोई मानवीय पहुंच नहीं',
                'faq_a7_isolation': 'अलग-थलग प्रोसेसिंग वातावरण',
                // Footer
                'language': 'भाषा',
                'footer_description': 'अगली पीढ़ी का दस्तावेज़ प्रसंस्करण प्लेटफॉर्म। तेज़, सुरक्षित और हमेशा मुफ़्त।',
                'footer_tools_title': 'उपकरण',
                'footer_pdf_converter': 'PDF कन्वर्टर',
                'footer_image_converter': 'इमेज कन्वर्टर',
                'footer_pdf_compressor': 'PDF कंप्रेसर',
                'footer_pdf_merger': 'PDF मर्जर',
                'footer_features_title': 'विशेषताएं',
                'footer_add_watermarks': 'वॉटरमार्क जोड़ें',
                'footer_page_numbers': 'पृष्ठ संख्या',
                'footer_batch_processing': 'बैच प्रसंस्करण',
                'footer_privacy_first': 'गोपनीयता पहले',
                'footer_support_title': 'सहायता',
                'footer_faq': 'FAQ',
                'footer_how_it_works': 'यह कैसे काम करता है',
                'footer_contact': 'संपर्क',
                'footer_help_center': 'सहायता केंद्र',
                'footer_copyright': '© 2025 PDFrow। सभी अधिकार सुरक्षित। दस्तावेज़ प्रसंस्करण के लिए ❤️ से बनाया गया।'
            }
        };
        
        return translations[langCode] || translations['en'];
    }

    showToolOptions(toolType) {
        const tool = this.tools.get(toolType);
        
        if (toolType === 'add-page-numbers') {
            const options = tool.card.querySelector('.page-number-options');
            if (options) {
                options.style.display = 'block';
                
                // Now add event listeners after options are visible
                this.setupPageNumberListeners(toolType);
            }
        } else if (toolType === 'add-watermark') {
            const options = tool.card.querySelector('.watermark-options');
            if (options) {
                options.style.display = 'block';
            }
        } else if (toolType === 'rotate-pdf') {
            const options = tool.card.querySelector('.rotation-controls');
            if (options) {
                options.style.display = 'block';
                this.setupRotationListeners(toolType);
            }
            
            // Load PDF preview
            if (tool.files.length > 0 && window.pdfRotatePreview) {
                window.pdfRotatePreview.loadPDF(tool.files[0]);
            }
        }
    }

    hideToolOptions(toolType) {
        const tool = this.tools.get(toolType);
        
        if (toolType === 'add-page-numbers') {
            const options = tool.card.querySelector('.numbering-options');
            const preview = tool.card.querySelector('.preview-section');
            if (options) {
                options.style.display = 'none';
            }
            if (preview) {
                preview.style.display = 'none';
            }
        } else if (toolType === 'add-watermark') {
            const options = tool.card.querySelector('.watermark-options');
            const preview = tool.card.querySelector('.watermark-preview-section');
            if (options) {
                options.style.display = 'none';
            }
            if (preview) {
                preview.style.display = 'none';
            }
        } else if (toolType === 'rotate-pdf') {
            const options = tool.card.querySelector('.rotation-controls');
            const preview = tool.card.querySelector('.pdf-preview-section');
            if (options) {
                options.style.display = 'none';
            }
            if (preview) {
                preview.style.display = 'none';
            }
        }
    }

    setupRotationListeners(toolType) {
        const tool = this.tools.get(toolType);
        
        // Rotation buttons
        const rotationBtns = tool.card.querySelectorAll('.rotation-btn');
        const previewRotation = tool.card.querySelector('#previewRotation');
        const rotationDescription = tool.card.querySelector('#rotationDescription');
        
        // Store current rotation angle
        tool.currentRotationAngle = 90;
        
        const updateRotation = (angle) => {
            tool.currentRotationAngle = parseInt(angle);
            
            // Update preview
            if (previewRotation) {
                previewRotation.style.transform = `rotate(${angle}deg)`;
            }
            if (rotationDescription) {
                let description = `Rotating ${angle}° clockwise`;
                if (angle === 90) description = 'Rotating 90° clockwise (right)';
                else if (angle === 180) description = 'Rotating 180° (flip)';
                else if (angle === 270) description = 'Rotating 270° clockwise (left)';
                rotationDescription.textContent = description;
            }
            
            // Update button states
            rotationBtns.forEach(btn => {
                btn.classList.toggle('active', parseInt(btn.dataset.angle) === parseInt(angle));
            });
            
            // Update PDF preview rotation
            if (window.pdfRotatePreview) {
                window.pdfRotatePreview.setRotation(parseInt(angle));
            }
        };
        
        // Quick rotation buttons
        rotationBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                updateRotation(btn.dataset.angle);
            });
        });
        
        // Initialize with default angle
        updateRotation(90);
    }

    showSuccessBanner() {
        // Remove any existing success banner first
        const existingBanner = document.querySelector('.success-banner');
        if (existingBanner) {
            existingBanner.remove();
        }

        // Create success banner element
        const banner = document.createElement('div');
        banner.className = 'success-banner';
        banner.innerHTML = `
            <div class="success-banner-icon">🎉</div>
            <div class="success-banner-content">
                <div class="success-banner-title">Success!</div>
                <div class="success-banner-message">Your file has been processed successfully</div>
            </div>
            <button class="success-banner-close" aria-label="Close">&times;</button>
        `;

        // Add banner to the page
        document.body.appendChild(banner);

        // Add event listeners
        const closeBtn = banner.querySelector('.success-banner-close');

        closeBtn.addEventListener('click', () => {
            this.hideSuccessBanner(banner);
        });

        // Auto-hide banner after 8 seconds
        setTimeout(() => {
            if (document.body.contains(banner)) {
                this.hideSuccessBanner(banner);
            }
        }, 8000);

        // Hide banner when clicking outside
        setTimeout(() => {
            document.addEventListener('click', (e) => {
                if (!banner.contains(e.target) && document.body.contains(banner)) {
                    this.hideSuccessBanner(banner);
                }
            }, { once: true });
        }, 1000);
    }

    hideSuccessBanner(banner) {
        if (!banner || !document.body.contains(banner)) return;

        banner.classList.add('hide');
        setTimeout(() => {
            if (document.body.contains(banner)) {
                banner.remove();
            }
        }, 400); // Match the animation duration
    }

    removeFileAfterDownload(toolType, index) {
        const tool = this.tools.get(toolType);

        // Remove the downloaded file from converted files
        tool.convertedFiles.splice(index, 1);

        // Re-render results
        this.renderResults(toolType, tool.convertedFiles);

        // If no more converted files, clear results but keep original files for multi-file tools
        if (tool.convertedFiles.length === 0) {
            // List of tools that support multi-file navigation and should preserve files
            const multiFileTools = ['split-pdf', 'add-watermark', 'add-page-numbers', 'organize-pdf'];

            if (multiFileTools.includes(toolType)) {
                // For multi-file tools, only clear results but keep original files and preview
                tool.results.innerHTML = '';
            } else {
                // For other tools, clear everything
                this.clearAllFiles(toolType);
            }
        }
    }

    clearAllFiles(toolType) {
        const tool = this.tools.get(toolType);

        // Clear all files
        tool.files = [];
        tool.convertedFiles = [];

        // Clear uploadedFiles for multi-file tools (user explicitly wants to clear)
        if (tool.uploadedFiles) {
            tool.uploadedFiles = [];
            tool.currentFileIndex = 0;
        }

        // Reset file input
        tool.fileInput.value = '';

        // Clear file list display
        tool.filesList.innerHTML = '';

        // Clear results
        tool.results.innerHTML = '';

        // Reset convert button
        this.updateConvertButton(toolType);

        // Hide options for advanced tools
        if (toolType === 'add-page-numbers' || toolType === 'add-watermark') {
            this.hideToolOptions(toolType);
        }

        // Reset file input
        const fileInput = tool.card.querySelector('.file-input');
        if (fileInput) {
            fileInput.value = '';
        }
    }

    // Add download all functionality for batch processing
    downloadAllFiles(toolType) {
        const tool = this.tools.get(toolType);
        
        if (tool.convertedFiles.length === 0) return;
        
        // Download all files
        tool.convertedFiles.forEach((file, index) => {
            setTimeout(() => {
                const url = URL.createObjectURL(file.blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = file.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, index * 100); // Small delay between downloads
        });
        
        // Clear all files after a delay to allow downloads to start
        setTimeout(() => {
            this.clearAllFiles(toolType);
        }, tool.convertedFiles.length * 100 + 500);
    }

    initializeContactForm() {
        const contactModal = document.getElementById('contactModal');
        const contactOverlay = document.getElementById('contactOverlay');
        const contactCloseBtn = document.getElementById('contactCloseBtn');
        const contactForm = document.getElementById('contact-form');

        // Skip initialization if contact modal doesn't exist on this page
        if (!contactModal) {
            return;
        }

        // Open contact form
        this.openContactForm = () => {
            if (contactModal) {
                contactModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };

        // Close contact form
        this.closeContactForm = () => {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Event listeners
        if (contactCloseBtn) {
            contactCloseBtn.addEventListener('click', this.closeContactForm);
        }
        if (contactOverlay) {
            contactOverlay.addEventListener('click', this.closeContactForm);
        }
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && contactModal && contactModal.classList.contains('active')) {
                this.closeContactForm();
            }
        });

        // Basic form validation before submission
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
            if (!this.validateContactForm()) {
                e.preventDefault();
                return false;
            }
            
            // Show loading state
            const submitBtn = document.querySelector('.contact-submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                
                // Re-enable button after a delay (in case user stays on page)
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    // Reset hCaptcha if form submission fails and user stays on page
                    if (window.HCaptchaUtils && window.HCaptchaUtils.isReady()) {
                        window.HCaptchaUtils.reset();
                    } else if (typeof hcaptcha !== 'undefined') {
                        hcaptcha.reset();
                    }
                }, 3000);
            }
            
                // Let FormSubmit handle the actual submission
                // Form will redirect to thank-you.html on success
            });
        }

        // Update footer contact link
        const contactLinks = document.querySelectorAll('a[href="#contact"], a[data-translate="footer_contact"], #footerContactLink');
        contactLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.openContactForm();
            });
        });
        
        // Additional specific handler for footer contact link
        const footerContactLink = document.getElementById('footerContactLink');
        if (footerContactLink) {
            footerContactLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.openContactForm();
            });
        }
    }
    
    validateContactForm() {
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const contactType = document.getElementById('contactType').value;
        const message = document.getElementById('contactMessage').value;
        const termsAccepted = document.getElementById('contactTerms').checked;
        const honeypot = document.querySelector('input[name="_honey"]').value;
        
        // Honeypot spam protection
        if (honeypot) {
            this.showContactMessage('Spam detected. Please try again.', 'error');
            return false;
        }
        
        // Basic validation
        if (!name.trim() || !email.trim() || !contactType || !message.trim() || !termsAccepted) {
            this.showContactMessage('Please fill in all required fields and accept the terms.', 'error');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showContactMessage('Please enter a valid email address.', 'error');
            return false;
        }
        
        // hCaptcha validation
        if (window.HCaptchaUtils && window.HCaptchaUtils.isReady()) {
            const validation = window.HCaptchaUtils.validate();
            if (!validation.valid) {
                this.showContactMessage(validation.message, 'error');
                return false;
            }
        } else if (typeof hcaptcha !== 'undefined') {
            // Fallback to direct hCaptcha API
            const hcaptchaResponse = hcaptcha.getResponse();
            if (!hcaptchaResponse) {
                this.showContactMessage('Please complete the captcha verification.', 'error');
                return false;
            }
        }
        
        return true;
    }
    
    
    showContactMessage(message, type) {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `contact-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 20000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        
        if (type === 'success') {
            messageDiv.style.background = '#4CAF50';
        } else {
            messageDiv.style.background = '#F44336';
        }
        
        // Add to document
        document.body.appendChild(messageDiv);
        
        // Remove after 4 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 300);
        }, 4000);
    }

    initializePageModals() {
        // Terms & Conditions and Privacy Policy links now redirect to separate pages
    }
    
    initializeBlog() {
        // Blog initialization is handled by blog-init.js
        console.log('Blog initialization delegated to blog-init.js');
    }
    
    checkBlogToolSelection() {
        // Check if user came from blog post wanting to use specific tool
        const selectedTool = localStorage.getItem('selectedTool');
        if (selectedTool) {
            console.log('User selected tool from blog:', selectedTool);
            
            // Wait for page to fully load, then activate the tool
            setTimeout(() => {
                const toolCard = document.querySelector(`[data-tool="${selectedTool}"]`);
                if (toolCard) {
                    console.log('Activating tool:', selectedTool);
                    toolCard.click();
                    
                    // Scroll to tools section
                    document.getElementById('tools')?.scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                    
                    // Clear the selection
                    localStorage.removeItem('selectedTool');
                } else {
                    console.log('Tool not found:', selectedTool);
                }
            }, 1000);
        }
    }

    // ========================================
    // SPLIT PDF FUNCTIONALITY
    // ========================================

    /**
     * Initialize PDF preview for split PDF tool
     * @param {string} toolType - The tool type identifier
     */
    async initializeSplitPDFPreview(toolType) {
        const tool = this.tools.get(toolType);
        if (!tool || tool.files.length === 0) return;

        try {
            // Show loading state
            this.setButtonLoading(tool.selectAllBtn, true);
            tool.previewSection.style.display = 'block';
            tool.splitOptions.style.display = 'block';
            
            // Hide the convert button since preview is now active
            tool.convertBtn.style.display = 'none';
            
            // Load PDF.js library
            await this.loadLibrary('pdfjsLib', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
            
            // Initialize PDF.js worker
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

            const file = tool.files[tool.currentFileIndex];
            const arrayBuffer = await file.arrayBuffer();
            
            // Load PDF document
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            tool.currentPDF = pdf;
            tool.pdfPages = [];
            
            // Clear existing thumbnails
            tool.thumbnailsContainer.innerHTML = '';
            tool.selectedPages.clear();
            
            // Generate thumbnails for all pages
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const thumbnail = await this.createPageThumbnail(page, pageNum);
                tool.pdfPages.push({ page, pageNum });
                tool.thumbnailsContainer.appendChild(thumbnail);
            }
            
            // Update UI
            this.updateSelectionInfo(toolType);
            this.updateRangeInputs(toolType);
            this.updateSplitPDFFileNavigation(toolType);

            // Reset loading state
            this.setButtonLoading(tool.selectAllBtn, false);
            
        } catch (error) {
            console.error('Error initializing PDF preview:', error);
            this.showError(tool.results, `Failed to load PDF preview: ${error.message}`);
            this.setButtonLoading(tool.selectAllBtn, false);
        }
    }

    /**
     * Update file navigation for split PDF tool
     * @param {string} toolType - The tool type identifier
     */
    updateSplitPDFFileNavigation(toolType) {
        const tool = this.tools.get(toolType);
        if (!tool) {
            console.log('updateSplitPDFFileNavigation: tool not found for', toolType);
            return;
        }

        console.log('updateSplitPDFFileNavigation called:', {
            toolType,
            filesLength: tool.files.length,
            currentFileIndex: tool.currentFileIndex,
            fileNavigation: tool.fileNavigation,
            prevFileBtn: tool.prevFileBtn,
            nextFileBtn: tool.nextFileBtn
        });

        const fileNavigation = tool.fileNavigation;
        const prevFileBtn = tool.prevFileBtn;
        const nextFileBtn = tool.nextFileBtn;
        const currentFileNum = tool.currentFileNum;
        const totalFiles = tool.totalFiles;
        const currentFileName = tool.currentFileName;

        if (tool.files.length > 1) {
            console.log('Multiple files detected, showing navigation');
            if (fileNavigation) {
                fileNavigation.style.display = 'flex';
                console.log('Set fileNavigation display to flex');
            } else {
                console.log('fileNavigation element not found!');
            }
            if (currentFileNum) currentFileNum.textContent = tool.currentFileIndex + 1;
            if (totalFiles) totalFiles.textContent = tool.files.length;
            if (currentFileName) currentFileName.textContent = tool.files[tool.currentFileIndex]?.name || '-';
            if (prevFileBtn) prevFileBtn.disabled = tool.currentFileIndex === 0;
            if (nextFileBtn) nextFileBtn.disabled = tool.currentFileIndex === tool.files.length - 1;
        } else {
            console.log('Single file or no files, hiding navigation');
            if (fileNavigation) fileNavigation.style.display = 'none';
        }
    }

    /**
     * Create a thumbnail for a PDF page
     * @param {Object} page - PDF.js page object
     * @param {number} pageNum - Page number
     * @returns {HTMLElement} - Thumbnail element
     */
    async createPageThumbnail(page, pageNum) {
        const scale = 0.5; // Scale for thumbnail
        const viewport = page.getViewport({ scale });
        
        // Create canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Render page
        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;
        
        // Create thumbnail container
        const thumbnail = document.createElement('div');
        thumbnail.className = 'page-thumbnail';
        thumbnail.dataset.pageNum = pageNum;
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'page-checkbox';
        checkbox.addEventListener('change', () => this.handlePageSelection(pageNum));
        
        // Create page number label
        const pageLabel = document.createElement('div');
        pageLabel.className = 'page-number';
        pageLabel.textContent = pageNum;
        
        // Assemble thumbnail
        thumbnail.appendChild(canvas);
        thumbnail.appendChild(checkbox);
        thumbnail.appendChild(pageLabel);
        
        // Add click handlers
        thumbnail.addEventListener('click', (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                this.handlePageSelection(pageNum);
            }
        });
        
        // Add drag selection support
        thumbnail.addEventListener('mousedown', () => this.startDragSelection(pageNum));
        thumbnail.addEventListener('mouseenter', () => this.handleDragSelection(pageNum));
        thumbnail.addEventListener('mouseup', () => this.endDragSelection());
        
        return thumbnail;
    }

    /**
     * Handle page selection/deselection
     * @param {number} pageNum - Page number
     */
    handlePageSelection(pageNum) {
        const tool = this.tools.get('split-pdf');
        const checkbox = tool.thumbnailsContainer.querySelector(`[data-page-num="${pageNum}"] .page-checkbox`);
        const thumbnail = tool.thumbnailsContainer.querySelector(`[data-page-num="${pageNum}"]`);
        
        if (checkbox.checked) {
            tool.selectedPages.add(pageNum);
            thumbnail.classList.add('selected');
        } else {
            tool.selectedPages.delete(pageNum);
            thumbnail.classList.remove('selected');
        }
        
        this.updateSelectionInfo('split-pdf');
        this.updatePageInput('split-pdf');
    }

    /**
     * Start drag selection
     * @param {number} pageNum - Starting page number
     */
    startDragSelection(pageNum) {
        const tool = this.tools.get('split-pdf');
        tool.isDragging = true;
        tool.dragStartIndex = pageNum;
    }

    /**
     * Handle drag selection
     * @param {number} pageNum - Current page number
     */
    handleDragSelection(pageNum) {
        const tool = this.tools.get('split-pdf');
        if (!tool.isDragging) return;
        
        const start = Math.min(tool.dragStartIndex, pageNum);
        const end = Math.max(tool.dragStartIndex, pageNum);
        
        // Select range of pages
        for (let i = start; i <= end; i++) {
            const checkbox = tool.thumbnailsContainer.querySelector(`[data-page-num="${i}"] .page-checkbox`);
            const thumbnail = tool.thumbnailsContainer.querySelector(`[data-page-num="${i}"]`);
            if (checkbox && !checkbox.checked) {
                checkbox.checked = true;
                tool.selectedPages.add(i);
                thumbnail.classList.add('selected');
            }
        }
        
        this.updateSelectionInfo('split-pdf');
        this.updatePageInput('split-pdf');
    }

    /**
     * End drag selection
     */
    endDragSelection() {
        const tool = this.tools.get('split-pdf');
        tool.isDragging = false;
        tool.dragStartIndex = null;
    }

    /**
     * Select all pages
     * @param {string} toolType - The tool type identifier
     */
    selectAllPages(toolType) {
        const tool = this.tools.get(toolType);
        
        tool.thumbnailsContainer.querySelectorAll('.page-checkbox').forEach((checkbox, index) => {
            checkbox.checked = true;
            tool.selectedPages.add(index + 1);
            checkbox.closest('.page-thumbnail').classList.add('selected');
        });
        
        this.updateSelectionInfo(toolType);
        this.updatePageInput(toolType);
    }

    /**
     * Clear page selection
     * @param {string} toolType - The tool type identifier
     */
    clearPageSelection(toolType) {
        const tool = this.tools.get(toolType);
        
        tool.thumbnailsContainer.querySelectorAll('.page-checkbox').forEach(checkbox => {
            checkbox.checked = false;
            checkbox.closest('.page-thumbnail').classList.remove('selected');
        });
        
        tool.selectedPages.clear();
        this.updateSelectionInfo(toolType);
        this.updatePageInput(toolType);
    }

    /**
     * Update selection info display
     * @param {string} toolType - The tool type identifier
     */
    updateSelectionInfo(toolType) {
        const tool = this.tools.get(toolType);
        const count = tool.selectedPages.size;
        tool.selectionInfo.textContent = `${count} page${count !== 1 ? 's' : ''} selected`;
    }

    /**
     * Update page input field with selected pages
     * @param {string} toolType - The tool type identifier
     */
    updatePageInput(toolType) {
        const tool = this.tools.get(toolType);
        const selectedArray = Array.from(tool.selectedPages).sort((a, b) => a - b);
        
        // Format as ranges where possible (e.g., "1,3,5-7,9")
        const ranges = [];
        let start = selectedArray[0];
        let end = start;
        
        for (let i = 1; i <= selectedArray.length; i++) {
            if (i < selectedArray.length && selectedArray[i] === end + 1) {
                end = selectedArray[i];
            } else {
                if (start === end) {
                    ranges.push(start.toString());
                } else if (end === start + 1) {
                    ranges.push(`${start},${end}`);
                } else {
                    ranges.push(`${start}-${end}`);
                }
                start = selectedArray[i];
                end = start;
            }
        }
        
        tool.pageInput.value = ranges.join(',');
    }

    /**
     * Update page selection from input field
     * @param {string} toolType - The tool type identifier
     */
    updatePageSelectionFromInput(toolType) {
        const tool = this.tools.get(toolType);
        const input = tool.pageInput.value.trim();
        
        if (!input) {
            this.clearPageSelection(toolType);
            return;
        }
        
        try {
            const pageNumbers = this.parsePageNumbers(input, tool.currentPDF.numPages);
            
            // Clear current selection
            this.clearPageSelection(toolType);
            
            // Select parsed pages
            pageNumbers.forEach(pageNum => {
                const checkbox = tool.thumbnailsContainer.querySelector(`[data-page-num="${pageNum}"] .page-checkbox`);
                const thumbnail = tool.thumbnailsContainer.querySelector(`[data-page-num="${pageNum}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                    tool.selectedPages.add(pageNum);
                    thumbnail.classList.add('selected');
                }
            });
            
            this.updateSelectionInfo(toolType);
            
        } catch (error) {
            console.error('Invalid page range:', error);
            // Show error briefly
            tool.pageInput.style.borderColor = '#f44336';
            setTimeout(() => {
                tool.pageInput.style.borderColor = '';
            }, 2000);
        }
    }

    /**
     * Parse page numbers from string (e.g., "1,3,5-7,9")
     * @param {string} input - Input string
     * @param {number} maxPages - Maximum number of pages
     * @returns {number[]} - Array of page numbers
     */
    parsePageNumbers(input, maxPages) {
        const pages = new Set();
        const parts = input.split(',').map(part => part.trim());
        
        parts.forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(num => parseInt(num.trim()));
                if (isNaN(start) || isNaN(end) || start < 1 || end > maxPages || start > end) {
                    throw new Error(`Invalid range: ${part}`);
                }
                for (let i = start; i <= end; i++) {
                    pages.add(i);
                }
            } else {
                const pageNum = parseInt(part);
                if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPages) {
                    throw new Error(`Invalid page number: ${part}`);
                }
                pages.add(pageNum);
            }
        });
        
        return Array.from(pages).sort((a, b) => a - b);
    }

    /**
     * Switch split mode tab
     * @param {string} toolType - The tool type identifier
     * @param {string} mode - The mode to switch to
     */
    switchSplitMode(toolType, mode) {
        const tool = this.tools.get(toolType);
        
        // Update tabs
        tool.splitTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.mode === mode);
        });
        
        // Update mode panels - show/hide based on data-mode attribute
        tool.splitModes.forEach(modePanel => {
            const isActive = modePanel.dataset.mode === mode;
            modePanel.classList.toggle('active', isActive);
            modePanel.style.display = isActive ? 'block' : 'none';
        });
    }

    /**
     * Update range inputs
     * @param {string} toolType - The tool type identifier
     */
    updateRangeInputs(toolType) {
        const tool = this.tools.get(toolType);
        if (tool.currentPDF) {
            tool.rangeStart.max = tool.currentPDF.numPages;
            tool.rangeEnd.max = tool.currentPDF.numPages;
            tool.rangeEnd.placeholder = tool.currentPDF.numPages;
        }
    }

    /**
     * Update range preview
     * @param {string} toolType - The tool type identifier
     */
    updateRangePreview(toolType) {
        const tool = this.tools.get(toolType);
        const start = parseInt(tool.rangeStart.value);
        const end = parseInt(tool.rangeEnd.value);
        
        if (start && end && start <= end) {
            // Clear current selection
            this.clearPageSelection(toolType);
            
            // Select range
            for (let i = start; i <= end; i++) {
                const checkbox = tool.thumbnailsContainer.querySelector(`[data-page-num="${i}"] .page-checkbox`);
                const thumbnail = tool.thumbnailsContainer.querySelector(`[data-page-num="${i}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                    tool.selectedPages.add(i);
                    thumbnail.classList.add('selected');
                }
            }
            
            this.updateSelectionInfo(toolType);
            this.updatePageInput(toolType);
        }
    }

    /**
     * Handle split action
     * @param {string} toolType - The tool type identifier
     * @param {string} action - The action to perform
     */
    async handleSplitAction(toolType, action) {
        const tool = this.tools.get(toolType);
        
        if (!tool.currentPDF) {
            this.showError(tool.results, 'Please upload a PDF file first.');
            return;
        }
        
        switch (action) {
            case 'extract':
                await this.extractSelectedPages(toolType);
                break;
            case 'range':
                await this.extractPageRange(toolType);
                break;
            case 'single':
                await this.splitIntoSinglePages(toolType);
                break;
            default:
                console.error('Unknown split action:', action);
                this.showError(tool.results, `Unknown action: ${action}`);
        }
    }

    /**
     * Extract selected pages
     * @param {string} toolType - The tool type identifier
     */
    async extractSelectedPages(toolType) {
        const tool = this.tools.get(toolType);
        
        // Check if files are loaded
        if (!tool.files || tool.files.length === 0) {
            this.showError(tool.results, 'No PDF file uploaded. Please upload a PDF file first.');
            return;
        }
        
        // Check if PDF is loaded
        if (!tool.currentPDF) {
            this.showError(tool.results, 'PDF not loaded. Please click "Preview & Split PDF" first.');
            return;
        }
        
        if (tool.selectedPages.size === 0) {
            this.showError(tool.results, 'Please select at least one page to extract.');
            return;
        }
        
        // Show loading state
        const actionBtn = tool.card.querySelector('[data-action="extract"]');
        this.setButtonLoading(actionBtn, true);
        
        try {
            // Load PDF-lib
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            const selectedArray = Array.from(tool.selectedPages).sort((a, b) => a - b);
            const originalFile = tool.files[0];
            
            if (!originalFile) {
                throw new Error('No PDF file found in tool.files[0]');
            }
            
            console.log('Original file found:', originalFile.name, 'Size:', originalFile.size);
            const arrayBuffer = await originalFile.arrayBuffer();
            
            // Load original PDF
            const originalPdf = await PDFLib.PDFDocument.load(arrayBuffer);
            
            // Create new PDF with selected pages
            const newPdf = await PDFLib.PDFDocument.create();
            const pageIndices = selectedArray.map(pageNum => pageNum - 1); // Convert to 0-based
            const copiedPages = await newPdf.copyPages(originalPdf, pageIndices);
            
            copiedPages.forEach(page => newPdf.addPage(page));
            
            // Generate PDF bytes
            const pdfBytes = await newPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            
            // Generate filename
            const baseName = this.changeFileExtension(originalFile.name, '');
            const fileName = `${baseName}_pages_${selectedArray.join('-')}.pdf`;
            
            // Create result
            const result = {
                name: fileName,
                blob: blob,
                type: 'application/pdf',
                extractInfo: `Extracted ${selectedArray.length} page${selectedArray.length !== 1 ? 's' : ''}`
            };
            
            console.log('Split PDF: Created result file:', result.name, 'Size:', result.blob.size);
            this.renderResults(toolType, [result]);
            
        } finally {
            this.setButtonLoading(actionBtn, false);
        }
    }

    /**
     * Extract page range
     * @param {string} toolType - The tool type identifier
     */
    async extractPageRange(toolType) {
        const tool = this.tools.get(toolType);
        
        // Check if files are loaded
        if (!tool.files || tool.files.length === 0) {
            this.showError(tool.results, 'No PDF file uploaded. Please upload a PDF file first.');
            return;
        }
        
        // Check if PDF is loaded
        if (!tool.currentPDF) {
            this.showError(tool.results, 'PDF not loaded. Please click "Preview & Split PDF" first.');
            return;
        }
        
        const start = parseInt(tool.rangeStart.value);
        const end = parseInt(tool.rangeEnd.value);
        
        console.log('Split Range - Start:', start, 'End:', end, 'Total pages:', tool.currentPDF?.numPages);
        
        if (!start || !end || isNaN(start) || isNaN(end) || start > end || start < 1 || end > tool.currentPDF.numPages) {
            const errorMsg = `Invalid page range: ${start}-${end}. PDF has ${tool.currentPDF?.numPages} pages.`;
            console.error(errorMsg);
            this.showError(tool.results, errorMsg);
            return;
        }
        
        // Show loading state
        const actionBtn = tool.card.querySelector('[data-action="range"]');
        this.setButtonLoading(actionBtn, true);
        
        try {
            console.log('Loading PDF-lib library...');
            // Load PDF-lib
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            
            // Verify PDFLib is available
            if (typeof PDFLib === 'undefined') {
                throw new Error('PDF-lib library failed to load');
            }
            console.log('PDF-lib is available');
            
            console.log('Loading original PDF...');
            const originalFile = tool.files[0];
            
            if (!originalFile) {
                throw new Error('No PDF file found in tool.files[0]');
            }
            
            console.log('Original file found:', originalFile.name, 'Size:', originalFile.size);
            const arrayBuffer = await originalFile.arrayBuffer();
            
            // Load original PDF
            const originalPdf = await PDFLib.PDFDocument.load(arrayBuffer);
            console.log('Original PDF loaded, page count:', originalPdf.getPageCount());
            
            // Create new PDF with page range
            const newPdf = await PDFLib.PDFDocument.create();
            const pageIndices = [];
            for (let i = start - 1; i < end; i++) {
                pageIndices.push(i);
            }
            console.log('Page indices to copy:', pageIndices);
            
            const copiedPages = await newPdf.copyPages(originalPdf, pageIndices);
            console.log('Pages copied:', copiedPages.length);
            copiedPages.forEach(page => newPdf.addPage(page));
            
            // Generate PDF bytes
            console.log('Generating PDF bytes...');
            const pdfBytes = await newPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            console.log('PDF generated, size:', blob.size);
            
            // Generate filename
            const baseName = this.changeFileExtension(originalFile.name, '');
            const fileName = `${baseName}_pages_${start}-${end}.pdf`;
            
            // Create result
            const result = {
                name: fileName,
                blob: blob,
                type: 'application/pdf',
                extractInfo: `Extracted pages ${start}-${end}`
            };
            
            console.log('Split Range: Created result file:', result.name, 'Size:', result.blob.size);
            this.renderResults(toolType, [result]);
            
        } catch (error) {
            console.error('Split Range Error:', error);
            this.showError(tool.results, `Split range failed: ${error.message}`);
        } finally {
            this.setButtonLoading(actionBtn, false);
        }
    }

    /**
     * Split PDF into individual single page files
     * @param {string} toolType - The tool type identifier
     */
    async splitIntoSinglePages(toolType) {
        const tool = this.tools.get(toolType);
        const originalFile = tool.files[0];
        
        if (!originalFile || !tool.currentPDF) {
            this.showError(tool.results, 'Please upload a PDF file first.');
            return;
        }
        
        // Show loading state
        const actionBtn = tool.card.querySelector('[data-action="single"]');
        this.setButtonLoading(actionBtn, true);
        
        try {
            // Load PDF-lib
            console.log('Loading PDF-lib library...');
            await this.loadLibrary('PDFLib', 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');
            console.log('PDF-lib loaded successfully');
            
            // Parse original PDF
            console.log('Parsing original PDF...');
            const fileBuffer = await originalFile.arrayBuffer();
            const originalPdf = await PDFLib.PDFDocument.load(fileBuffer);
            const totalPages = originalPdf.getPageCount();
            console.log('Total pages in PDF:', totalPages);
            
            // Get start page from input (default to 1)
            const startPage = Math.max(1, parseInt(tool.pageInput.value) || 1);
            const startIndex = Math.min(startPage - 1, totalPages - 1);
            
            console.log('Splitting from page:', startPage, 'Index:', startIndex);
            
            // Create individual PDFs for each page
            const results = [];
            const baseName = this.changeFileExtension(originalFile.name, '');
            
            for (let i = startIndex; i < totalPages; i++) {
                console.log(`Creating PDF for page ${i + 1}...`);
                
                // Create new PDF document
                const newPdf = await PDFLib.PDFDocument.create();
                
                // Copy single page
                const [copiedPage] = await newPdf.copyPages(originalPdf, [i]);
                newPdf.addPage(copiedPage);
                
                // Generate PDF bytes
                const pdfBytes = await newPdf.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                
                // Generate filename
                const fileName = `${baseName}_page_${i + 1}.pdf`;
                
                // Create result
                const result = {
                    name: fileName,
                    blob: blob,
                    type: 'application/pdf',
                    extractInfo: `Page ${i + 1}`
                };
                
                results.push(result);
                console.log(`Created single page PDF: ${fileName} (${blob.size} bytes)`);
            }
            
            console.log(`Split into ${results.length} single page files`);
            this.renderResults(toolType, results);
            
        } catch (error) {
            console.error('Split Single Pages Error:', error);
            this.showError(tool.results, `Split into single pages failed: ${error.message}`);
        } finally {
            this.setButtonLoading(actionBtn, false);
        }
    }


    /**
     * Hide split PDF preview
     * @param {string} toolType - The tool type identifier
     */
    hideSplitPDFPreview(toolType) {
        const tool = this.tools.get(toolType);
        tool.previewSection.style.display = 'none';
        tool.splitOptions.style.display = 'none';
        tool.thumbnailsContainer.innerHTML = '';
        tool.selectedPages.clear();
        tool.currentPDF = null;
        tool.pdfPages = [];
        
        // Show the convert button again for next upload
        tool.convertBtn.style.display = 'block';
    }

    // === TOAST AND PROGRESS FUNCTIONALITY ===
    
    initializeToastSystem() {
        // Toast container should already be in HTML
        this.toastContainer = document.getElementById('toastContainer');
        if (!this.toastContainer) {
            console.warn('Toast container not found');
        }
    }
    
    showToast(type, title, message, duration = 4000) {
        if (!this.toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconMap = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        
        toast.innerHTML = `
            <div class="toast-icon">${iconMap[type] || '📄'}</div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" aria-label="Close notification">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;
        
        // Add close functionality
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.hideToast(toast));
        
        // Add toast to container
        this.toastContainer.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto-hide after duration
        if (duration > 0) {
            setTimeout(() => this.hideToast(toast), duration);
        }
        
        return toast;
    }
    
    hideToast(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }
    
    showProgress(toolType, text = 'Processing files...') {
        const tool = this.tools.get(toolType);
        if (!tool) return null;
        
        // Find or create progress container
        let progressContainer = tool.container.querySelector('.progress-container');
        if (!progressContainer) {
            progressContainer = document.createElement('div');
            progressContainer.className = 'progress-container';
            progressContainer.innerHTML = `
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <div class="progress-text">${text}</div>
            `;
            
            // Insert after upload area
            const uploadArea = tool.container.querySelector('.upload-area');
            if (uploadArea) {
                uploadArea.parentNode.insertBefore(progressContainer, uploadArea.nextSibling);
            }
        }
        
        // Show and reset progress
        progressContainer.classList.add('show');
        const progressFill = progressContainer.querySelector('.progress-fill');
        const progressText = progressContainer.querySelector('.progress-text');
        
        if (progressFill) progressFill.style.width = '0%';
        if (progressText) progressText.textContent = text;
        
        return {
            container: progressContainer,
            fill: progressFill,
            text: progressText,
            setProgress: (percent) => {
                if (progressFill) {
                    progressFill.style.width = `${Math.min(100, Math.max(0, percent))}%`;
                }
            },
            setText: (newText) => {
                if (progressText) {
                    progressText.textContent = newText;
                }
            },
            hide: () => {
                progressContainer.classList.remove('show');
            }
        };
    }
    
    hideProgress(toolType) {
        const tool = this.tools.get(toolType);
        if (!tool) return;
        
        const progressContainer = tool.container.querySelector('.progress-container');
        if (progressContainer) {
            progressContainer.classList.remove('show');
        }
    }
    
    // Enhanced download with toast notification
    downloadWithToast(blob, filename, type = 'success') {
        try {
            // Trigger download
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show success toast
            this.showToast(
                type,
                'Download Ready!',
                `${filename} has been saved to your device.`,
                3000
            );
            
        } catch (error) {
            console.error('Download error:', error);
            this.showToast(
                'error',
                'Download Failed',
                'There was an error downloading your file. Please try again.',
                5000
            );
        }
    }
}

const converter = new PDFrowConverter();

// Make converter globally accessible for onclick handlers
window.pdfTool = converter;
window.converter = converter;