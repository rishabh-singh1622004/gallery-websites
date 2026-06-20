/* ============================================
   LIGHTBOX Component
   ============================================ */

const Lightbox = (() => {
    const lightbox = Utils.$('#lightbox');
    const image = Utils.$('#lightboxImage');
    const closeBtn = Utils.$('#lightboxClose');
    const prevBtn = Utils.$('#lightboxPrev');
    const nextBtn = Utils.$('#lightboxNext');
    const titleEl = Utils.$('.lightbox__title');
    const descEl = Utils.$('.lightbox__description');
    const categoryEl = Utils.$('.lightbox__category');
    const authorEl = Utils.$('.lightbox__author');
    const thumbnailsContainer = Utils.$('#lightboxThumbnails');

    let images = [];
    let currentIndex = 0;

    function open(imageList, index = 0) {
        images = imageList;
        currentIndex = index;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        showImage();
        renderThumbnails();
    }

    function close() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showImage() {
        const img = images[currentIndex];
        if (!img) return;

        image.src = img.url;
        image.alt = img.title;
        titleEl.textContent = img.title;
        descEl.textContent = img.description;
        categoryEl.textContent = img.category;
        authorEl.textContent = `by ${img.author}`;

        // Update active thumbnail
        Utils.$$('.lightbox__thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currentIndex);
        });
    }

    function next() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }

    function prev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }

    function renderThumbnails() {
        thumbnailsContainer.innerHTML = '';
        images.forEach((img, i) => {
            const thumb = document.createElement('img');
            thumb.className = `lightbox__thumbnail ${i === currentIndex ? 'active' : ''}`;
            thumb.src = img.thumbnail;
            thumb.alt = img.title;
            thumb.addEventListener('click', () => {
                currentIndex = i;
                showImage();
            });
            thumbnailsContainer.appendChild(thumb);
        });
    }

    function handleKeyboard(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
    }

    function init() {
        closeBtn.addEventListener('click', close);
        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);
        lightbox.querySelector('.lightbox__overlay').addEventListener('click', close);
        document.addEventListener('keydown', handleKeyboard);
    }

    return { init, open, close };
})();
