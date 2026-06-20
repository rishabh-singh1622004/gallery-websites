/* ============================================
   CONTACT Component
   ============================================ */

const Contact = (() => {
    const form = Utils.$('#contactForm');
    const newsletterForm = Utils.$('#newsletterForm');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const name = Utils.sanitize(form.name.value.trim());
        const email = form.email.value.trim();
        const subject = Utils.sanitize(form.subject.value.trim());
        const message = Utils.sanitize(form.message.value.trim());

        if (!name || !email || !subject || !message) {
            Toast.show('Please fill in all fields', 'error');
            return;
        }

        if (!validateEmail(email)) {
            Toast.show('Please enter a valid email', 'error');
            return;
        }

        // Simulate submission
        Toast.show('Message sent successfully!', 'success');
        form.reset();
    }

    function handleNewsletter(e) {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        const email = input.value.trim();

        if (!validateEmail(email)) {
            Toast.show('Please enter a valid email', 'error');
            return;
        }

        Toast.show('Subscribed successfully!', 'success');
        input.value = '';
    }

    function init() {
        form.addEventListener('submit', handleSubmit);
        newsletterForm.addEventListener('submit', handleNewsletter);
    }

    return { init };
})();
