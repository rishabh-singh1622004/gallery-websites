/* ============================================
   THEME Component - Dark/Light Mode
   ============================================ */

const Theme = (() => {
    const toggleBtn = Utils.$('#themeToggle');
    const icon = toggleBtn.querySelector('i');
    let isDark = false;

    function apply(dark) {
        isDark = dark;
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
        Utils.setStorage(CONFIG.STORAGE_THEME, dark ? 'dark' : 'light');
    }

    function toggle() {
        apply(!isDark);
    }

    function init() {
        // Check saved preference or system preference
        const saved = Utils.getStorage(CONFIG.STORAGE_THEME);
        if (saved) {
            apply(saved === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            apply(prefersDark);
        }

        toggleBtn.addEventListener('click', toggle);

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!Utils.getStorage(CONFIG.STORAGE_THEME)) {
                apply(e.matches);
            }
        });
    }

    return { init };
})();
