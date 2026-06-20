/* ============================================
   STATS Component - Animated Counters
   ============================================ */

const Stats = (() => {
    let animated = false;

    function animateStats() {
        if (animated) return;
        
        const statsSection = Utils.$('.stats');
        if (!statsSection || !Utils.isInViewport(statsSection, 0.3)) return;

        animated = true;
        const numbers = Utils.$$('.stats__number');
        numbers.forEach(el => {
            const target = parseInt(el.dataset.target, 10);
            Utils.animateCounter(el, target);
        });
    }

    function init() {
        window.addEventListener('scroll', Utils.throttle(animateStats, 200));
        // Check on load too
        animateStats();
    }

    return { init };
})();
