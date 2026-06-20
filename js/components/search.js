/* ============================================
   SEARCH Component
   ============================================ */

const Search = (() => {
    const overlay = Utils.$('#searchOverlay');
    const input = Utils.$('#searchInput');
    const results = Utils.$('#searchResults');
    const toggleBtn = Utils.$('#searchToggle');
    const closeBtn = Utils.$('#searchClose');

    function open() {
        overlay.classList.add('active');
        setTimeout(() => input.focus(), 300);
    }

    function close() {
        overlay.classList.remove('active');
        input.value = '';
        results.innerHTML = '';
    }

    function handleSearch() {
        const query = input.value.trim();
        if (query.length < 2) {
            results.innerHTML = '';
            return;
        }

        const matches = GalleryData.search(query);
        renderResults(matches);
    }

    function renderResults(items) {
        if (items.length === 0) {
            results.innerHTML = '<p style="color: rgba(255,255,255,0.5); text-align: center;">No results found</p>';
            return;
        }

        results.innerHTML = items.map(item => `
            <div class="search-result-item" data-id="${item.id}">
                <img src="${Utils.sanitize(item.thumbnail)}" alt="${Utils.sanitize(item.title)}">
                <div class="search-result-item__info">
                    <div class="search-result-item__title">${Utils.sanitize(item.title)}</div>
                    <div class="search-result-item__category">${Utils.sanitize(item.category)} • ${Utils.sanitize(item.author)}</div>
                </div>
            </div>
        `).join('');

        // Click handlers
        Utils.$$('.search-result-item', results).forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id, 10);
                const allImages = GalleryData.getAll();
                const index = allImages.findIndex(img => img.id === id);
                close();
                Lightbox.open(allImages, index);
            });
        });
    }

    function init() {
        toggleBtn.addEventListener('click', open);
        closeBtn.addEventListener('click', close);
        input.addEventListener('input', Utils.debounce(handleSearch, 200));

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                close();
            }
        });
    }

    return { init };
})();
