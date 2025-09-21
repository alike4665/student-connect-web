document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Smooth Scroll for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- NEW CODE: Functionality for the "Join Now" button ---
    const ctaBtn = document.getElementById('cta-btn');
    const contactSection = document.getElementById('contact');

    if (ctaBtn && contactSection) { // Check if elements exist to prevent errors
        ctaBtn.addEventListener('click', () => {
            contactSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // --- 2. Contact Form Validation and Submission ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = '#dc3545';
            formMessage.classList.remove('hidden');
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.style.color = '#28a745';
            formMessage.classList.remove('hidden');
            contactForm.reset(); // Clear the form
        }, 1000);
    });
});
