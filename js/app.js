/* ============================================
   APP - Main Application Entry Point
   ============================================ */

const App = (() => {
    function init() {
        // Initialize all components
        Loader.init();
        Theme.init();
        Header.init();
        Hero.init();
        Stats.init();
        Gallery.init();
        Lightbox.init();
        Filter.init();
        Search.init();
        Categories.init();
        Contact.init();
        Scroll.init();

        console.log(`%c${CONFIG.APP_NAME} v${CONFIG.VERSION}`, 'color: #6c5ce7; font-size: 16px; font-weight: bold;');
        console.log('%cModular Gallery Viewer - 4th Year Project', 'color: #636e72;');
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return { init };
})();
