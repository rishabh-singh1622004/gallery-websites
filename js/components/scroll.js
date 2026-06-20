/* ============================================
   SCROLL Component - Back to Top & Reveal
   ============================================ */

const Scroll = (() => {
    const backToTopBtn = Utils.$('#backToTop');

    function handleBackToTop() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function revealElements() {
        const elements = Utils.$$('.reveal');
        elements.forEach(el => {
            if (Utils.isInViewport(el, CONFIG.REVEAL_THRESHOLD)) {
                el.classList.add('visible');
            }
        });
    }

    function init() {
        window.addEventListener('scroll', Utils.throttle(handleBackToTop, 100));
        window.addEventListener('scroll', Utils.throttle(revealElements, 100));
        backToTopBtn.addEventListener('click', scrollToTop);

        // Initial check
        revealElements();
    }

    return { init };
})();
