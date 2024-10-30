import { addContact } from './components/contactForm.js';
import { initializeContactList, displayContacts } from './components/contactList.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize contact list
    initializeContactList();

    // Form handling
    const contactForm = document.getElementById('contact-form');
    const formSection = document.getElementById('contact-form-section');
    const createButton = document.getElementById('create-contact');
    const closeButton = document.getElementById('close-form');

    // Show form when create button is clicked
    createButton.addEventListener('click', () => {
        formSection.classList.remove('hidden');
    });

    // Hide form when close button is clicked
    closeButton.addEventListener('click', () => {
        formSection.classList.add('hidden');
        contactForm.reset();
    });

    // Handle form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newContact = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value
        };

        addContact(newContact);
        displayContacts(); // Refresh the contact list
        formSection.classList.add('hidden'); // Hide the form
        contactForm.reset(); // Reset the form
    });
});