// contactForm.js
import { validateContact } from '../utils/validations.js';
import { saveContactToStorage, getContactsFromStorage } from '../utils/storage.js';

export function addContact(contact) {
    // Validate the contact details
    if (!validateContact(contact)) {
        console.log('Validation Failed:', contact);
        alert('Please check your input fields for errors.');
        return;
    }

    // Fetch existing contacts, add the new one, and store it
    const contacts = getContactsFromStorage();
    contacts.push(contact);
    saveContactToStorage(contacts);

    console.log('Contact Added:', contact);
}
