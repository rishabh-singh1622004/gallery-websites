/* ============================================
   CONFIG - Application Configuration
   ============================================ */

const CONFIG = Object.freeze({
    APP_NAME: 'Lumina Gallery',
    VERSION: '1.0.0',

    // Timing
    LOADER_DELAY: 1500,
    HERO_SLIDE_INTERVAL: 5000,
    TOAST_DURATION: 3000,
    DEBOUNCE_DELAY: 300,

    // Gallery
    ITEMS_PER_PAGE: 9,
    IMAGE_QUALITY: 'w=800',

    // Animation
    SCROLL_THRESHOLD: 100,
    REVEAL_THRESHOLD: 0.15,

    // Storage Keys
    STORAGE_THEME: 'lumina-theme',
    STORAGE_FAVORITES: 'lumina-favorites',
});
