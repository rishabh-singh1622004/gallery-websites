/* ============================================
   UTILS - Utility Functions
   ============================================ */

const Utils = (() => {
    /**
     * Select a single DOM element
     */
    function $(selector, parent = document) {
        return parent.querySelector(selector);
    }

    /**
     * Select multiple DOM elements
     */
    function $$(selector, parent = document) {
        return [...parent.querySelectorAll(selector)];
    }

    /**
     * Debounce function calls
     */
    function debounce(fn, delay = CONFIG.DEBOUNCE_DELAY) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    /**
     * Throttle function calls
     */
    function throttle(fn, limit = 100) {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                fn(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    /**
     * Animate counting numbers
     */
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(start));
            }
        }, 16);
    }

    /**
     * Format number with suffix
     */
    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K+';
        }
        return num.toString() + '+';
    }

    /**
     * Sanitize HTML to prevent XSS
     */
    function sanitize(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Check if element is in viewport
     */
    function isInViewport(element, threshold = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * (1 - threshold)) &&
            rect.bottom >= 0
        );
    }

    /**
     * Smooth scroll to element
     */
    function scrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            const offset = element.offsetTop - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    }

    /**
     * Local storage helpers
     */
    function getStorage(key, fallback = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch {
            return fallback;
        }
    }

    function setStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Storage full or blocked
        }
    }

    return { $, $$, debounce, throttle, animateCounter, formatNumber, sanitize, isInViewport, scrollTo, getStorage, setStorage };
})();
