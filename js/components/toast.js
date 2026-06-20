/* ============================================
   TOAST Component - Notifications
   ============================================ */

const Toast = (() => {
    const container = Utils.$('#toastContainer');

    function show(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle'
        };

        toast.innerHTML = `
            <i class="fas ${icons[type] || icons.info}"></i>
            <span>${Utils.sanitize(message)}</span>
            <button class="toast__close"><i class="fas fa-times"></i></button>
        `;

        container.appendChild(toast);

        // Close button
        toast.querySelector('.toast__close').addEventListener('click', () => remove(toast));

        // Auto remove
        setTimeout(() => remove(toast), CONFIG.TOAST_DURATION);
    }

    function remove(toast) {
        toast.style.animation = 'slideOutRight 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }

    return { show };
})();
