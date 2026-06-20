/* ============================================
   CATEGORIES Component
   ============================================ */

const Categories = (() => {
    const grid = Utils.$('#categoriesGrid');

    function render() {
        const categories = GalleryData.getCategories();
        
        grid.innerHTML = categories.map(cat => `
            <div class="category-card" data-category="${cat.slug}">
                <img class="category-card__image" src="${Utils.sanitize(cat.image)}" alt="${Utils.sanitize(cat.name)}" loading="lazy">
                <div class="category-card__overlay">
                    <h3 class="category-card__name">${Utils.sanitize(cat.name)}</h3>
                    <span class="category-card__count">${cat.count} Photos</span>
                </div>
            </div>
        `).join('');

        // Click to filter gallery
        Utils.$$('.category-card', grid).forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                // Scroll to gallery and set filter
                Utils.scrollTo('#gallery');
                setTimeout(() => {
                    // Activate corresponding filter button
                    const filterBtns = Utils.$$('.filter-btn');
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                    const targetBtn = Utils.$(`.filter-btn[data-filter="${category}"]`);
                    if (targetBtn) targetBtn.classList.add('active');
                    Gallery.setFilter(category);
                }, 500);
            });
        });
    }

    function init() {
        render();
    }

    return { init };
})();
