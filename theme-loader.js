// Theme Loader - Prevents flash of wrong theme on page load
// This script runs immediately to apply the saved theme before page render
(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themes = {
        light: 'light-mode',
        dimmed: 'dimmed-mode',
        dark: 'dark-mode'
    };
    const themeClass = themes[savedTheme] || 'dark-mode';

    // Add theme to html element immediately
    document.documentElement.classList.add(themeClass);

    // Also add to body when it's available
    if (document.body) {
        document.body.classList.remove('dark-mode', 'light-mode', 'dimmed-mode');
        document.body.classList.add(themeClass);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.classList.remove('dark-mode', 'light-mode', 'dimmed-mode');
            document.body.classList.add(themeClass);
        });
    }
})();
