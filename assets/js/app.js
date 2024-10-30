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
    const modalOverlay = document.getElementById('modal-overlay');


    // Show form when create button is clicked
    createButton.addEventListener('click', () => {
        formSection.classList.remove('hidden');
        modalOverlay.classList.add('active');
    });

    // Hide form and overlay
    function hideForm() {
        formSection.classList.add('hidden');
        modalOverlay.classList.remove('active');
        contactForm.reset();
    }

    closeButton.addEventListener('click', hideForm);
    modalOverlay.addEventListener('click', hideForm);

    // Prevent modal from closing when clicking inside the form
    formSection.addEventListener('click', (e) => {
        e.stopPropagation();
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
        displayContacts();
        hideForm();
    });
});