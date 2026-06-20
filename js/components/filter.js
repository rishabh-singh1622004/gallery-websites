/* ============================================
   FILTER Component
   ============================================ */

const Filter = (() => {
    const filterBtns = Utils.$$('.filter-btn');
    const viewBtns = Utils.$$('.view-btn');

    function handleFilter(e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.filter;
        Gallery.setFilter(category);
    }

    function handleView(e) {
        const btn = e.target.closest('.view-btn');
        if (!btn) return;

        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const view = btn.dataset.view;
        Gallery.setView(view);
    }

    function init() {
        const filterContainer = Utils.$('#filterCategories');
        filterContainer.addEventListener('click', handleFilter);

        const viewContainer = Utils.$('.filter-bar__view');
        viewContainer.addEventListener('click', handleView);
    }

    return { init };
})();
