// Fade-up entrance animations using IntersectionObserver
(function() {
    'use strict';

    // Create IntersectionObserver for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize animations when DOM is ready
    function initAnimations() {
        // Select elements to animate
        const animateElements = document.querySelectorAll(
            '.feature-card, .tool-card-nav, .step-card, .blog-card, .section-header, .trust-badge'
        );

        // Add fade-up class and observe each element
        animateElements.forEach((element, index) => {
            // Add slight stagger delay for better visual effect
            element.style.transitionDelay = `${index * 0.05}s`;
            element.classList.add('fade-up');
            fadeUpObserver.observe(element);
        });
    }

    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }

    // Re-observe elements when tools are dynamically loaded
    window.reinitAnimations = function() {
        const newElements = document.querySelectorAll('.fade-up:not(.visible)');
        newElements.forEach(element => {
            fadeUpObserver.observe(element);
        });
    };
})();
