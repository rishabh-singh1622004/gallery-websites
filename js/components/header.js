/* ============================================
   HEADER Component
   ============================================ */

const Header = (() => {
    const header = Utils.$('#header');
    const nav = Utils.$('#nav');
    const hamburger = Utils.$('#hamburger');
    const navLinks = Utils.$$('.header__nav-link');

    function handleScroll() {
        if (window.scrollY > CONFIG.SCROLL_THRESHOLD) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    function toggleMobileNav() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    }

    function closeMobileNav() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }

    function setActiveLink() {
        const sections = Utils.$$('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = Utils.$(`.header__nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    function init() {
        window.addEventListener('scroll', Utils.throttle(handleScroll, 50));
        window.addEventListener('scroll', Utils.throttle(setActiveLink, 100));
        hamburger.addEventListener('click', toggleMobileNav);
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                Utils.scrollTo(target);
                closeMobileNav();
            });
        });
    }

    return { init };
})();
