# Lumina Gallery - Visual Portfolio

A modern, modular gallery viewer website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design** - Works on all screen sizes (mobile-first approach)
- **Dark/Light Theme** - Toggleable with system preference detection
- **Image Lightbox** - Full-screen image viewer with keyboard navigation
- **Category Filtering** - Filter images by categories with smooth transitions
- **Multiple View Modes** - Grid, Masonry, and List layouts
- **Search Functionality** - Real-time search across images
- **Animated Counters** - Stats section with scroll-triggered animations
- **Hero Slideshow** - Auto-playing background image slider
- **Favorites System** - Like/save images with localStorage persistence
- **Toast Notifications** - Non-intrusive feedback system
- **Contact Form** - Validated contact form
- **Back to Top** - Smooth scroll-to-top button
- **Lazy Loading** - Images load as needed for performance

## 📁 Project Structure (Modular Architecture)

```
gallery-websites/
├── index.html              # Main entry point
├── css/
│   ├── base.css            # CSS variables, reset, typography
│   ├── layout.css          # Container, grid, buttons, forms
│   ├── components.css      # Header, hero, footer, loader, search
│   ├── gallery.css         # Gallery grid, cards, categories
│   ├── lightbox.css        # Lightbox overlay styles
│   ├── animations.css      # Keyframes & scroll reveal
│   ├── toast.css           # Toast notification styles
│   └── responsive.css      # Media queries for all breakpoints
├── js/
│   ├── config.js           # App configuration constants
│   ├── utils.js            # Utility functions (DOM, storage, etc.)
│   ├── data.js             # Gallery image data & API
│   ├── app.js              # Main app initialization
│   └── components/
│       ├── loader.js       # Page loader
│       ├── header.js       # Sticky header & navigation
│       ├── hero.js         # Hero slideshow
│       ├── stats.js        # Animated statistics
│       ├── gallery.js      # Gallery rendering & cards
│       ├── lightbox.js     # Image lightbox viewer
│       ├── filter.js       # Category & view filtering
│       ├── search.js       # Search overlay
│       ├── categories.js   # Category cards
│       ├── contact.js      # Contact form handling
│       ├── theme.js        # Dark/light theme toggle
│       ├── toast.js        # Toast notifications
│       └── scroll.js       # Back to top & scroll reveal
└── README.md
```

## 🏗️ Design Patterns Used

- **Module Pattern (IIFE)** - Each component is self-contained
- **Separation of Concerns** - CSS, JS, and HTML are modular
- **Event Delegation** - Efficient event handling
- **Observer Pattern** - Scroll-based animations
- **Singleton Pattern** - Single instance components

## 🎨 Technologies

- HTML5 (Semantic markup)
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+, no frameworks)
- Google Fonts (Inter + Playfair Display)
- Font Awesome 6 (Icons)
- Unsplash (Sample images)

## 🚀 How to Run

1. Open `index.html` in any modern browser
2. Or use a local server: `npx serve .` or VS Code Live Server extension

## 📝 4th Year Project Notes

This project demonstrates:
- Clean, modular front-end architecture
- BEM-like CSS naming methodology
- Responsive design principles
- Accessibility considerations (ARIA labels, semantic HTML)
- Performance optimization (lazy loading, throttling, debouncing)
- State management with localStorage
- XSS prevention with input sanitization
