const fs = require('fs');
const path = require('path');

// Import blog data directly
try {
    var { blogData } = require('./blog-data.js');
    console.log('Blog data loaded successfully');
    console.log('Number of posts:', Object.keys(blogData).length);
} catch (error) {
    console.error('Error loading blog data:', error);
    process.exit(1);
}

// Function to create clean URL slug from title
function createSlug(title) {
    return title.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and dashes
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/-+/g, '-') // Replace multiple dashes with single dash
        .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
}

// HTML template for blog posts
function createBlogHTML(post) {
    const slug = createSlug(post.title);
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title}</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="keywords" content="PDF, ${post.title.split(' ').slice(0, 5).join(', ')}, PDFrow">
    <meta name="author" content="PDFrow">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    
    <!-- Open Graph meta tags -->
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://pdfrow.com/blog/${slug}">
    <meta property="og:image" content="https://pdfrow.com/og-image.png">
    <meta property="og:site_name" content="PDFrow">
    
    <!-- Twitter Card meta tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.excerpt}">
    <meta name="twitter:image" content="https://pdfrow.com/og-image.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://pdfrow.com/blog/${slug}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../favicon.ico">
    <link rel="icon" type="image/png" sizes="192x192" href="../icon-192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="../icon-512.png">
    <link rel="apple-touch-icon" href="../icon-192.png">
    
    <!-- Manifest -->
    <link rel="manifest" href="../manifest.json">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../auth.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Logo Size Customization -->
    <style>
        .logo-image {
            width: 56px !important;
            height: 56px !important;
        }
        
        .logo-text {
            font-size: 1.6rem !important;
            font-weight: 600 !important;
        }
        
        .footer .logo-image {
            width: 48px !important;
            height: 48px !important;
        }
        
        .footer .logo-text {
            font-size: 1.3rem !important;
        }
        
        .logo {
            align-items: center !important;
            gap: 0.75rem !important;
        }
    </style>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${post.title}",
        "description": "${post.excerpt}",
        "author": {
            "@type": "Organization",
            "name": "PDFrow"
        },
        "publisher": {
            "@type": "Organization",
            "name": "PDFrow",
            "logo": {
                "@type": "ImageObject",
                "url": "https://pdfrow.com/Official Logo PDFrow.png"
            }
        },
        "url": "https://pdfrow.com/blog/${slug}",
        "mainEntityOfPage": "https://pdfrow.com/blog/${slug}",
        "datePublished": "2025-01-01",
        "dateModified": "2025-01-01"
    }
    </script>
</head>
<body class="dark-mode">
    <div class="container">
        <!-- Navigation -->
        <nav class="main-nav">
            <div class="nav-container">
                <a href="../" class="logo">
                    <div class="logo-icon">
                        <img src="../Official Logo PDFrow.png" alt="PDFrow Logo" class="logo-image">
                    </div>
                    <h1 class="logo-text">PDFrow</h1>
                </a>
                
                <div class="nav-links">
                    <a href="../" class="nav-link">Tools</a>
                    <a href="../" class="nav-link">Features</a>
                    <a href="../" class="nav-link">How It Works</a>
                    <a href="../all-posts.html" class="nav-link">Blog</a>
                    <a href="../" class="nav-link">FAQ</a>
                    <button class="support-btn" id="supportBtn">Support Us ❤️</button>
                </div>

                <div class="nav-actions">
                    <!-- Auth Buttons -->
                    <div id="auth-buttons" class="auth-buttons">
                        <button class="btn-auth btn-login" id="loginBtn">Login</button>
                        <button class="btn-auth btn-signup" id="signupBtn">Sign Up</button>
                    </div>

                    <!-- User Menu -->
                    <div id="user-menu" class="user-menu" style="display: none;">
                        <div class="user-avatar" id="userAvatar">U</div>
                        <span class="user-email">user@example.com</span>
                        <div class="user-dropdown">
                            <button class="dropdown-item" id="profileBtn">Profile</button>
                            <button class="dropdown-item" id="logoutBtn">Logout</button>
                        </div>
                    </div>
                    
                    <div class="theme-toggle" id="theme-toggle">
                        <div class="theme-toggle-track">
                            <div class="theme-toggle-thumb">
                                <svg class="theme-icon sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="5"/>
                                    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                                </svg>
                                <svg class="theme-icon dimmed-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                                    <path d="M20 3v4m-2-2h4"/>
                                </svg>
                                <svg class="theme-icon moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Blog Post Content -->
        <article class="blog-post-container">
            <header class="blog-post-header">
                <div class="breadcrumb">
                    <a href="../">Home</a>
                    <span>›</span>
                    <a href="../all-posts.html">Blog</a>
                    <span>›</span>
                    <span class="current">${post.title}</span>
                </div>
                
                <h1 class="blog-post-title">${post.title}</h1>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                
                <div class="blog-post-meta">
                    <div class="blog-post-author">
                        <img src="../Official Logo PDFrow.png" alt="PDFrow" class="author-avatar">
                        <div class="author-info">
                            <span class="author-name">PDFrow Team</span>
                            <span class="publish-date">Published on PDFrow Blog</span>
                        </div>
                    </div>
                    
                    <div class="blog-post-actions">
                        <button class="share-btn" onclick="sharePost()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="18" cy="5" r="3"/>
                                <circle cx="6" cy="12" r="3"/>
                                <circle cx="18" cy="19" r="3"/>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                            </svg>
                            Share
                        </button>
                    </div>
                </div>
            </header>
            
            <main class="blog-post-content">
                ${post.content}
            </main>
            
            <!-- Call to Action -->
            <div class="blog-cta">
                <div class="cta-content">
                    <h3>Try PDFrow Tools Now</h3>
                    <p>Experience our fast, free, and secure PDF tools that millions trust worldwide.</p>
                    <div class="cta-buttons">
                        <a href="../compress-pdf.html" class="cta-btn primary">Compress PDF</a>
                        <a href="../merge-pdf.html" class="cta-btn secondary">Merge PDFs</a>
                        <a href="../add-watermark.html" class="cta-btn secondary">Add Watermark</a>
                    </div>
                </div>
            </div>
        </article>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-main">
                    <div class="footer-brand">
                        <div class="logo">
                            <div class="logo-icon">
                                <img src="../Official Logo PDFrow.png" alt="PDFrow Logo" class="logo-image">
                            </div>
                            <h3 class="logo-text">PDFrow</h3>
                        </div>
                        <p class="footer-description">
                            Next-generation document processing platform. Fast, secure, and always free.
                        </p>
                        <div class="footer-social">
                            <a href="https://instagram.com/pdfrow" class="social-link" aria-label="Follow us on Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                </svg>
                            </a>
                            <a href="mailto:contact@pdfrow.com" class="social-link" aria-label="Contact us via email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>Tools</h4>
                            <ul>
                                <li><a href="../compress-pdf.html">PDF Compressor</a></li>
                                <li><a href="../merge-pdf.html">PDF Merger</a></li>
                                <li><a href="../split-pdf.html">PDF Splitter</a></li>
                                <li><a href="../pdf-to-jpg.html">PDF to JPG</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Features</h4>
                            <ul>
                                <li><a href="../add-watermark.html">Add Watermarks</a></li>
                                <li><a href="../add-page-numbers.html">Page Numbers</a></li>
                                <li><a href="../jpg-to-pdf.html">Image to PDF</a></li>
                                <li><a href="../">Privacy First</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="../">FAQ</a></li>
                                <li><a href="../">How It Works</a></li>
                                <li><a href="../" id="footerContactLink">Contact</a></li>
                                <li><a href="../terms-conditions.html">Terms & Conditions</a></li>
                                <li><a href="../privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Language</h4>
                            <div class="language-dropdown">
                                <button class="language-btn" id="languageBtn">
                                    <span class="flag" id="currentFlag">🇺🇸</span>
                                    <span id="currentLang">English</span>
                                    <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="6,9 12,15 18,9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; <span id="current-year">2025</span> PDFrow. All rights reserved. Made with ❤️ for document processing.</p>
                </div>
            </div>
        </footer>
    </div>

    <!-- Scripts -->
    <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
    <script src="../supabase-config.js"></script>
    <script src="../auth.js"></script>
    <script src="../support.js"></script>
    <script src="../script.js"></script>
    
    <script>
        // Share functionality
        function sharePost() {
            if (navigator.share) {
                navigator.share({
                    title: '${post.title}',
                    text: '${post.excerpt}',
                    url: window.location.href,
                });
            } else {
                // Fallback: copy URL to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Link copied to clipboard!');
                });
            }
        }
        
        // Set current year
        document.getElementById('current-year').textContent = new Date().getFullYear();
    </script>
</body>
</html>`;
}

// Generate HTML files for each blog post
Object.values(blogData).forEach(post => {
    if (post && post.title) {
        const slug = createSlug(post.title);
        const html = createBlogHTML(post);
        const filename = path.join('blog', `${slug}.html`);
        
        fs.writeFileSync(filename, html, 'utf8');
        console.log(`Generated: ${filename}`);
    }
});

console.log('\\nAll blog post HTML files generated successfully!');
console.log('\\nGenerated URLs:');
Object.values(blogData).forEach(post => {
    if (post && post.title) {
        const slug = createSlug(post.title);
        console.log(`https://pdfrow.com/blog/${slug}`);
    }
});