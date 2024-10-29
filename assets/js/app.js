import { addContact } from './components/contactForm.js';

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        // Prevents page reload on form submission
        event.preventDefault();
        const newContact = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value
        };

        // Add the new contact and log the result to check
        addContact(newContact);
        console.log('Form Submitted:', newContact);

        // Reset the form
        contactForm.reset();
    });
});
