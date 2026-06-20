/* ============================================
   LOADER Component
   ============================================ */

const Loader = (() => {
    const loader = Utils.$('#loader');

    function hide() {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
        }, CONFIG.LOADER_DELAY);
    }

    function init() {
        document.body.style.overflow = 'hidden';
        hide();
    }

    return { init };
})();
