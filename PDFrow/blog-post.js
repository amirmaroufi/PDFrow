// Blog post functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get post ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');
    
    const loadingState = document.getElementById('loading-state');
    const errorState = document.getElementById('error-state');
    const blogPost = document.getElementById('blog-post');
    const relatedPosts = document.getElementById('related-posts');
    
    if (!postId) {
        showError();
        return;
    }
    
    // Load the blog post
    loadBlogPost(postId);
    
    function loadBlogPost(id) {
        // Get post data
        const post = getBlogPost(id);
        
        if (!post) {
            showError();
            return;
        }
        
        // Update page title and meta
        document.getElementById('page-title').textContent = `${post.title} - PDFrow Blog`;
        document.getElementById('page-description').setAttribute('content', post.excerpt);
        
        // Update breadcrumb
        document.getElementById('breadcrumb-title').textContent = post.title;
        
        // Populate post content
        document.getElementById('post-category').textContent = post.category;
        document.getElementById('post-date').textContent = post.date;
        document.getElementById('post-read-time').textContent = post.readTime;
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-excerpt').textContent = post.excerpt;
        document.getElementById('post-content').innerHTML = post.content;
        
        // Setup sharing
        setupSharing(post);
        
        // Load related posts
        loadRelatedPosts(id);
        
        // Hide loading and show content
        loadingState.style.display = 'none';
        blogPost.style.display = 'block';
        relatedPosts.style.display = 'block';
    }
    
    function showError() {
        loadingState.style.display = 'none';
        errorState.style.display = 'block';
    }
    
    function setupSharing(post) {
        const currentUrl = window.location.href;
        const title = encodeURIComponent(post.title);
        const excerpt = encodeURIComponent(post.excerpt);
        
        // Twitter share
        document.getElementById('share-twitter').href = 
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${title}`;
        
        // Facebook share
        document.getElementById('share-facebook').href = 
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        
        // Copy link
        document.getElementById('share-copy').addEventListener('click', function(e) {
            e.preventDefault();
            navigator.clipboard.writeText(currentUrl).then(() => {
                // Show temporary feedback
                const btn = e.currentTarget;
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                `;
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            });
        });
    }
    
    function loadRelatedPosts(currentId) {
        const related = getRelatedPosts(currentId, 3);
        const container = document.getElementById('related-posts-grid');
        
        if (related.length === 0) {
            document.getElementById('related-posts').style.display = 'none';
            return;
        }
        
        container.innerHTML = related.map(post => `
            <div class="related-post-card">
                <div class="related-post-image" style="background-color: ${post.color}">
                    <div class="related-post-category">${post.category}</div>
                </div>
                <div class="related-post-content">
                    <h3 class="related-post-title">
                        <a href="blog-post.html?post=${post.id}">${post.title}</a>
                    </h3>
                    <p class="related-post-excerpt">${post.excerpt}</p>
                    <div class="related-post-meta">
                        <span class="related-post-date">${post.date}</span>
                        <span class="related-post-read-time">${post.readTime}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            document.body.classList.toggle('dark-mode');
            
            // Save theme preference
            const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
        });
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.remove('dark-mode', 'light-mode');
        document.body.classList.add(savedTheme + '-mode');
    }
    
    // Update current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

