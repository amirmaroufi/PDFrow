const fs = require('fs');
const path = require('path');

// Manually define blog posts data for static generation
const blogPosts = [
    {
        id: 1,
        title: "Compress PDF Files Online – Fast, Free & Easy with PDFrow",
        excerpt: "Large PDF files can be frustrating. Learn how PDFrow solves this instantly, allowing you to compress PDF files online in seconds while keeping quality intact.",
        slug: "compress-pdf-files-online-fast-free-easy-with-pdfrow"
    },
    {
        id: 2,
        title: "Convert JPG to PDF Online – Free, Fast & High-Quality with PDFrow",
        excerpt: "Images are great for capturing moments, designs, or scanned documents — but they aren't always the easiest format to share or print. Convert JPG images into professional PDFs online, completely free.",
        slug: "convert-jpg-to-pdf-online-free-fast-high-quality-with-pdfrow"
    },
    {
        id: 3,
        title: "Convert PNG to JPG Online – Free, Fast & High-Quality with PDFrow",
        excerpt: "If you've ever worked with images online, you've probably come across PNG and JPG formats. Learn when and how to convert PNG to JPG for better compatibility and smaller file sizes.",
        slug: "convert-png-to-jpg-online-free-fast-high-quality-with-pdfrow"
    },
    {
        id: 4,
        title: "Convert JPG to PNG Online – Free, High-Quality & Easy with PDFrow",
        excerpt: "JPG is the most widely used image format in the world — compact, colorful, and perfect for photographs. But when it comes to editing, preserving fine details, or enabling transparent backgrounds, PNG is often the better choice.",
        slug: "convert-jpg-to-png-online-free-high-quality-easy-with-pdfrow"
    },
    {
        id: 5,
        title: "How to Convert PDF to JPG Online – The Complete Guide",
        excerpt: "In today's fast-paced digital world, the ability to convert documents into versatile formats is more important than ever. Learn how to convert PDF to JPG effortlessly with PDFrow's online tool.",
        slug: "how-to-convert-pdf-to-jpg-online-the-complete-guide"
    },
    {
        id: 6,
        title: "The Ultimate Guide to Merging PDFs Online for Free",
        excerpt: "In a world where digital documents rule, PDF has become the universal standard for sharing content. Learn how to combine multiple PDFs into one file with PDFrow's free merge tool.",
        slug: "the-ultimate-guide-to-merging-pdfs-online-for-free"
    },
    {
        id: 7,
        title: "How to Add Page Numbers to PDFs – A Complete Online Guide",
        excerpt: "Page numbers are essential for organizing documents, improving navigation, and maintaining professional presentation. Learn how to add page numbers to PDFs easily with PDFrow.",
        slug: "how-to-add-page-numbers-to-pdfs-a-complete-online-guide"
    },
    {
        id: 8,
        title: "Adding Watermarks to PDFs: Protect Your Documents Like a Pro",
        excerpt: "Watermarks are one of the most effective ways to protect your intellectual property, establish branding, and maintain document authenticity. Learn how to add professional watermarks to your PDFs with PDFrow.",
        slug: "adding-watermarks-to-pdfs-protect-your-documents-like-a-pro"
    }
];

// Create blog directory if it doesn't exist
if (!fs.existsSync('blog')) {
    fs.mkdirSync('blog');
    console.log('Created blog directory');
}

// HTML template
function createBlogHTML(post) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title}</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="keywords" content="PDF, tools, ${post.title.split(' ').slice(0, 5).join(', ')}, PDFrow">
    <meta name="author" content="PDFrow">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://pdfrow.com/blog/${post.slug}">
    <meta property="og:site_name" content="PDFrow">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://pdfrow.com/blog/${post.slug}">
    
    <!-- Assets -->
    <link rel="icon" href="../favicon.ico">
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>
        .logo-image { width: 56px !important; height: 56px !important; }
        .logo-text { font-size: 1.6rem !important; font-weight: 600 !important; }
        .blog-content { max-width: 800px; margin: 0 auto; padding: 2rem; }
        .blog-header { text-align: center; margin-bottom: 3rem; }
        .blog-title { font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-primary); }
        .blog-excerpt { font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2rem; }
        .breadcrumb { margin-bottom: 2rem; }
        .breadcrumb a { color: var(--accent-primary); text-decoration: none; }
        .breadcrumb span { margin: 0 0.5rem; color: var(--text-secondary); }
    </style>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${post.title}",
        "description": "${post.excerpt}",
        "url": "https://pdfrow.com/blog/${post.slug}",
        "author": { "@type": "Organization", "name": "PDFrow" },
        "publisher": { "@type": "Organization", "name": "PDFrow" }
    }
    </script>
</head>
<body class="dark-mode">
    <div class="container">
        <nav class="main-nav">
            <div class="nav-container">
                <a href="../" class="logo">
                    <div class="logo-icon">
                        <img src="../Official Logo PDFrow.png" alt="PDFrow" class="logo-image">
                    </div>
                    <h1 class="logo-text">PDFrow</h1>
                </a>
                <div class="nav-links">
                    <a href="../" class="nav-link">Tools</a>
                    <a href="../all-posts.html" class="nav-link">Blog</a>
                    <a href="../" class="nav-link">Support</a>
                </div>
            </div>
        </nav>

        <main class="blog-content">
            <div class="breadcrumb">
                <a href="../">Home</a>
                <span>›</span>
                <a href="../all-posts.html">Blog</a>
                <span>›</span>
                <span>${post.title}</span>
            </div>
            
            <article class="blog-header">
                <h1 class="blog-title">${post.title}</h1>
                <p class="blog-excerpt">${post.excerpt}</p>
            </article>
            
            <div id="blog-post-content">
                <!-- Content will be loaded by JavaScript from blog-data.js -->
                <script>
                    // Load and display blog content
                    document.addEventListener('DOMContentLoaded', function() {
                        if (typeof blogData !== 'undefined' && blogData[${post.id}]) {
                            document.getElementById('blog-post-content').innerHTML = blogData[${post.id}].content;
                        }
                    });
                </script>
            </div>
            
            <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: var(--card-bg); border-radius: 12px;">
                <h3>Try PDFrow Tools</h3>
                <p>Fast, free, and secure PDF tools</p>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                    <a href="../compress-pdf.html" style="padding: 0.75rem 1.5rem; background: var(--accent-primary); color: white; text-decoration: none; border-radius: 8px;">Compress PDF</a>
                    <a href="../merge-pdf.html" style="padding: 0.75rem 1.5rem; background: var(--card-bg); border: 1px solid var(--border-color); color: var(--text-primary); text-decoration: none; border-radius: 8px;">Merge PDF</a>
                </div>
            </div>
        </main>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo">
                        <img src="../Official Logo PDFrow.png" alt="PDFrow" class="logo-image">
                        <h3 class="logo-text">PDFrow</h3>
                    </div>
                    <p>Fast, secure, and free PDF tools</p>
                </div>
                <div class="footer-links">
                    <div>
                        <h4>Tools</h4>
                        <a href="../compress-pdf.html">Compress PDF</a>
                        <a href="../merge-pdf.html">Merge PDF</a>
                        <a href="../split-pdf.html">Split PDF</a>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <a href="../">FAQ</a>
                        <a href="../privacy-policy.html">Privacy</a>
                        <a href="../terms-conditions.html">Terms</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 PDFrow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>

    <script src="../blog-data.js"></script>
    <script src="../script.js"></script>
</body>
</html>`;
}

// Generate HTML files
blogPosts.forEach(post => {
    const html = createBlogHTML(post);
    const filename = path.join('blog', `${post.slug}.html`);
    
    fs.writeFileSync(filename, html, 'utf8');
    console.log(`✓ Generated: blog/${post.slug}.html`);
});

console.log('\n🎉 All 8 blog post HTML files generated successfully!');
console.log('\n📝 Clean URLs generated:');
blogPosts.forEach(post => {
    console.log(`   https://pdfrow.com/blog/${post.slug}`);
});