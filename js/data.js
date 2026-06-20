/* ============================================
   DATA - Gallery Image Data
   ============================================ */

const GalleryData = (() => {
    const images = [
        {
            id: 1,
            title: 'Mountain Serenity',
            description: 'A breathtaking view of snow-capped mountains at golden hour',
            category: 'nature',
            author: 'Alex Rivera',
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200'
        },
        {
            id: 2,
            title: 'Urban Geometry',
            description: 'Modern architectural lines creating mesmerizing patterns',
            category: 'architecture',
            author: 'Sarah Chen',
            url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200'
        },
        {
            id: 3,
            title: 'Golden Portrait',
            description: 'Natural light portrait with warm tones',
            category: 'portrait',
            author: 'Marcus Johnson',
            url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200'
        },
        {
            id: 4,
            title: 'Ocean Waves',
            description: 'Powerful waves crashing against the rocky coastline',
            category: 'nature',
            author: 'Emma Watson',
            url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=200'
        },
        {
            id: 5,
            title: 'Tokyo Nights',
            description: 'Neon-lit streets of Tokyo after midnight',
            category: 'travel',
            author: 'Kenji Tanaka',
            url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200'
        },
        {
            id: 6,
            title: 'Glass Cathedral',
            description: 'Intricate glass ceiling of a historic cathedral',
            category: 'architecture',
            author: 'Pierre Dubois',
            url: 'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=200'
        },
        {
            id: 7,
            title: 'Abstract Flow',
            description: 'Colorful fluid art creating organic shapes',
            category: 'abstract',
            author: 'Mia Torres',
            url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200'
        },
        {
            id: 8,
            title: 'Forest Path',
            description: 'A misty morning walk through an ancient forest',
            category: 'nature',
            author: 'David Wood',
            url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=200'
        },
        {
            id: 9,
            title: 'Street Emotion',
            description: 'Candid street portrait capturing raw emotion',
            category: 'portrait',
            author: 'Raj Patel',
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
        },
        {
            id: 10,
            title: 'Santorini Dreams',
            description: 'White-washed buildings against the deep blue sea',
            category: 'travel',
            author: 'Elena Greco',
            url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=200'
        },
        {
            id: 11,
            title: 'Neon Abstract',
            description: 'Vibrant neon lights creating abstract patterns',
            category: 'abstract',
            author: 'Chris Lee',
            url: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=200'
        },
        {
            id: 12,
            title: 'Skyline Reflections',
            description: 'City skyline reflected in calm waters at dusk',
            category: 'architecture',
            author: 'James Park',
            url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200'
        },
        {
            id: 13,
            title: 'Desert Silence',
            description: 'Vast sand dunes stretching to the horizon',
            category: 'nature',
            author: 'Omar Hassan',
            url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=200'
        },
        {
            id: 14,
            title: 'Venice Canal',
            description: 'Traditional gondola gliding through Venice canals',
            category: 'travel',
            author: 'Maria Rossi',
            url: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=200'
        },
        {
            id: 15,
            title: 'Smoke Art',
            description: 'Ethereal smoke tendrils frozen in time',
            category: 'abstract',
            author: 'Nina Volkov',
            url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=200'
        },
        {
            id: 16,
            title: 'Autumn Lake',
            description: 'Colorful fall foliage reflected in a peaceful lake',
            category: 'nature',
            author: 'Tom Fields',
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
        },
        {
            id: 17,
            title: 'Classic Portrait',
            description: 'Black and white portrait with dramatic lighting',
            category: 'portrait',
            author: 'Anna White',
            url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200'
        },
        {
            id: 18,
            title: 'Minimalist Tower',
            description: 'Clean lines of a minimalist skyscraper',
            category: 'architecture',
            author: 'Ken Nakamura',
            url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
            thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=200'
        }
    ];

    const categories = [
        { name: 'Nature', slug: 'nature', count: 5, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600' },
        { name: 'Architecture', slug: 'architecture', count: 4, image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600' },
        { name: 'Portrait', slug: 'portrait', count: 3, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600' },
        { name: 'Travel', slug: 'travel', count: 3, image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600' },
        { name: 'Abstract', slug: 'abstract', count: 3, image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600' },
    ];

    function getAll() {
        return [...images];
    }

    function getByCategory(category) {
        if (category === 'all') return getAll();
        return images.filter(img => img.category === category);
    }

    function getById(id) {
        return images.find(img => img.id === id);
    }

    function search(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        return images.filter(img =>
            img.title.toLowerCase().includes(q) ||
            img.category.toLowerCase().includes(q) ||
            img.author.toLowerCase().includes(q)
        );
    }

    function getCategories() {
        return [...categories];
    }

    function paginate(items, page, perPage = CONFIG.ITEMS_PER_PAGE) {
        const start = 0;
        const end = page * perPage;
        return items.slice(start, end);
    }

    return { getAll, getByCategory, getById, search, getCategories, paginate };
})();
