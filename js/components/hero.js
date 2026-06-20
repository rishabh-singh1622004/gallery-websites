/* ============================================
   HERO Component - Slideshow
   ============================================ */

const Hero = (() => {
    const slides = Utils.$$('.hero__slide');
    let currentSlide = 0;
    let interval;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function startSlideshow() {
        interval = setInterval(nextSlide, CONFIG.HERO_SLIDE_INTERVAL);
    }

    function init() {
        if (slides.length > 1) {
            startSlideshow();
        }
    }

    return { init };
})();
