/* ============================================
   GALLERY Component - Render & Manage Cards
   ============================================ */

const Gallery = (() => {
    const grid = Utils.$('#galleryGrid');
    const loadMoreBtn = Utils.$('#loadMore');
    
    let currentPage = 1;
    let currentFilter = 'all';
    let currentView = 'grid';
    let favorites = Utils.getStorage(CONFIG.STORAGE_FAVORITES, []);

    function createCard(image) {
        const isFav = favorites.includes(image.id);
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.dataset.category = image.category;
        card.dataset.id = image.id;

        card.innerHTML = `
            <img class="gallery-card__image" src="${Utils.sanitize(image.url)}" alt="${Utils.sanitize(image.title)}" loading="lazy">
            <div class="gallery-card__overlay">
                <span class="gallery-card__category">${Utils.sanitize(image.category)}</span>
                <h3 class="gallery-card__title">${Utils.sanitize(image.title)}</h3>
            </div>
            <div class="gallery-card__actions">
                <button class="gallery-card__like ${isFav ? 'liked' : ''}" data-id="${image.id}" aria-label="Like">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="gallery-card__expand" data-id="${image.id}" aria-label="Expand">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
        `;

        // Click to open lightbox
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.gallery-card__actions')) {
                const filteredImages = GalleryData.getByCategory(currentFilter);
                const index = filteredImages.findIndex(img => img.id === image.id);
                Lightbox.open(filteredImages, index);
            }
        });

        // Like button
        const likeBtn = card.querySelector('.gallery-card__like');
        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(image.id, likeBtn);
        });

        // Expand button
        const expandBtn = card.querySelector('.gallery-card__expand');
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filteredImages = GalleryData.getByCategory(currentFilter);
            const index = filteredImages.findIndex(img => img.id === image.id);
            Lightbox.open(filteredImages, index);
        });

        return card;
    }

    function toggleFavorite(id, btn) {
        const index = favorites.indexOf(id);
        if (index > -1) {
            favorites.splice(index, 1);
            btn.classList.remove('liked');
            Toast.show('Removed from favorites', 'info');
        } else {
            favorites.push(id);
            btn.classList.add('liked');
            Toast.show('Added to favorites!', 'success');
        }
        Utils.setStorage(CONFIG.STORAGE_FAVORITES, favorites);
    }

    function render() {
        const allImages = GalleryData.getByCategory(currentFilter);
        const images = GalleryData.paginate(allImages, currentPage);
        
        grid.innerHTML = '';
        images.forEach(image => {
            grid.appendChild(createCard(image));
        });

        // Show/hide load more
        if (images.length >= allImages.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = '';
        }
    }

    function setFilter(category) {
        currentFilter = category;
        currentPage = 1;
        render();
    }

    function setView(view) {
        currentView = view;
        grid.className = 'gallery';
        if (view === 'masonry') grid.classList.add('gallery--masonry');
        if (view === 'list') grid.classList.add('gallery--list');
    }

    function loadMore() {
        currentPage++;
        render();
    }

    function init() {
        render();
        loadMoreBtn.addEventListener('click', loadMore);
    }

    return { init, setFilter, setView, render };
})();
