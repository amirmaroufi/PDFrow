// Blog post functionality - Fixed version
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog post page loaded');
    
    // Function to safely get elements
    function getElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with id '${id}' not found`);
        }
        return element;
    }
    
    // Get post ID and slug from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id') || urlParams.get('post'); // Support both parameters
    const slug = urlParams.get('slug');
    
    console.log('URL search params:', window.location.search);
    console.log('Post ID extracted:', postId, typeof postId);
    console.log('Slug extracted:', slug);
    
    const loadingState = getElement('loading-state');
    const errorState = getElement('error-state');
    const blogPost = getElement('blog-post');
    const relatedPosts = getElement('related-posts');
    
    if (!postId && !slug) {
        console.log('No post ID or slug found, showing error');
        showError();
        return;
    }
    
    // Wait for blog data to be available and then load the post
    function initializeBlogPost() {
        if (typeof getBlogPost !== 'function' || typeof blogData === 'undefined') {
            console.log('Blog data not ready yet, waiting...');
            setTimeout(initializeBlogPost, 50);
            return;
        }
        
        console.log('Blog data ready, loading post...');
        loadBlogPost(slug, postId);
    }
    
    // Start initialization
    initializeBlogPost();
    
    function loadBlogPost(slug, id) {
        console.log('loadBlogPost called with slug:', slug, 'and ID:', id);
        
        try {
            // Get post data using slug or ID
            const post = getBlogPostBySlugOrId ? getBlogPostBySlugOrId(slug, id) : getBlogPost(id);
            console.log('Retrieved post data:', post);
            
            if (!post) {
                console.log('Post not found, showing error');
                showError();
                return;
            }
            
            console.log('Post found, populating content...');
            
            // Update page title and meta
            const pageTitle = getElement('page-title');
            const pageDescription = getElement('page-description');
            if (pageTitle) pageTitle.textContent = `${post.title} - PDFrow Blog`;
            if (pageDescription) pageDescription.setAttribute('content', post.excerpt);
            
            // Update breadcrumb
            const breadcrumbTitle = getElement('breadcrumb-title');
            if (breadcrumbTitle) breadcrumbTitle.textContent = post.title;
            
            // Populate post content
            const postCategory = getElement('post-category');
            const postDate = getElement('post-date');
            const postReadTime = getElement('post-read-time');
            const postTitle = getElement('post-title');
            const postExcerpt = getElement('post-excerpt');
            const postContent = getElement('post-content');
            
            if (postCategory) postCategory.textContent = post.category;
            if (postDate) postDate.textContent = post.date;
            if (postReadTime) postReadTime.textContent = post.readTime;
            if (postTitle) postTitle.textContent = post.title;
            if (postExcerpt) postExcerpt.textContent = post.excerpt;
            if (postContent) postContent.innerHTML = post.content;
            
            // Setup sharing
            setupSharing(post);
            
            // Load related posts
            loadRelatedPosts(id);
            
            // Hide loading and show content
            if (loadingState) loadingState.style.display = 'none';
            if (blogPost) blogPost.style.display = 'block';
            if (relatedPosts) relatedPosts.style.display = 'block';
            
            console.log('Blog post loaded successfully');
            
        } catch (error) {
            console.error('Error loading blog post:', error);
            showError();
        }
    }
    
    function showError() {
        console.log('Showing error state');
        if (loadingState) loadingState.style.display = 'none';
        if (errorState) errorState.style.display = 'block';
    }
    
    function setupSharing(post) {
        try {
            const currentUrl = window.location.href;
            const title = encodeURIComponent(post.title);
            
            // Copy link
            const shareCopy = getElement('share-copy');
            if (shareCopy) {
                shareCopy.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (navigator.clipboard) {
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
                        }).catch(err => {
                            console.error('Failed to copy URL:', err);
                        });
                    }
                });
            }
            
            // Email share
            const shareEmail = getElement('share-email');
            if (shareEmail) {
                shareEmail.href = `mailto:?subject=Check out this article&body=I found this interesting article: ${encodeURIComponent(currentUrl)}`;
            }
        } catch (error) {
            console.error('Error setting up sharing:', error);
        }
    }
    
    function loadRelatedPosts(currentId) {
        try {
            if (typeof getRelatedPosts !== 'function') {
                console.log('getRelatedPosts function not available');
                return;
            }
            
            const related = getRelatedPosts(currentId, 3);
            const container = getElement('related-posts-grid');
            
            if (!container || related.length === 0) {
                const relatedSection = getElement('related-posts');
                if (relatedSection) relatedSection.style.display = 'none';
                return;
            }
            
            container.innerHTML = related.map(post => {
                const postUrl = getBlogPostUrl ? getBlogPostUrl(post) : `blog-post.html?post=${post.id}`;
                return `
                <div class="related-post-card">
                    <div class="related-post-image" style="background-color: ${post.color}">
                        <div class="related-post-category">${post.category}</div>
                    </div>
                    <div class="related-post-content">
                        <h3 class="related-post-title">
                            <a href="${postUrl}">${post.title}</a>
                        </h3>
                        <p class="related-post-excerpt">${post.excerpt}</p>
                        <div class="related-post-meta">
                            <span class="related-post-date">${post.date}</span>
                            <span class="related-post-read-time">${post.readTime}</span>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        } catch (error) {
            console.error('Error loading related posts:', error);
        }
    }
    
    // Theme toggle functionality
    const themeToggle = getElement('theme-toggle');
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
    const currentYearElement = getElement('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});