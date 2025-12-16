// Blog initialization - runs immediately when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog initialization started');
    
    // Initialize blog grid on main page
    const blogGrid = document.getElementById('blogGrid');
    if (blogGrid) {
        console.log('Blog grid found, initializing...');
        initializeBlogGrid();
    } else {
        console.log('Blog grid not found on this page');
    }
});

// Blog grid functionality for main page
function initializeBlogGrid() {
    console.log('Initializing blog grid...');
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) {
        console.log('Blog grid element not found');
        return;
    }
    
    // Clear any existing noscript content when JavaScript is available
    const noscriptElements = blogGrid.querySelectorAll('noscript');
    noscriptElements.forEach(noscript => noscript.remove());
    
    if (typeof getAllBlogPosts !== 'function') {
        console.error('getAllBlogPosts function not found');
        return;
    }
    
    const posts = getAllBlogPosts().slice(0, 4); // Show first 4 posts
    console.log('Found posts:', posts.length);
    
    blogGrid.innerHTML = posts.map(post => `
        <div class="blog-card" style="background-color: ${post.color}">
            <div class="blog-card-content">
                <div class="blog-card-category">${post.category}</div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-meta">
                    <span class="blog-card-date">${post.date}</span>
                    <span class="blog-card-read-time">${post.readTime}</span>
                </div>
                <a href="${getBlogPostUrl ? getBlogPostUrl(post) : `blog-post.html?post=${post.id}`}" class="blog-card-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div class="blog-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Blog post icon">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                </svg>
            </div>
        </div>
    `).join('');
    
    console.log('Blog grid initialized successfully');
}