import { validateContact } from '../utils/validations.js';
import { saveContactToStorage, getContactsFromStorage } from '../utils/storage.js';

// Track which contact is being edited
let editingIndex = null;

// This adds the user contact
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
    return true;
}

// This updates the user contact
export function updateContact(contact, index) {
    if (!validateContact(contact)) {
        alert('Please check your input fields for errors.');
        return false;
    }

    const contacts = getContactsFromStorage();
    contacts[index] = contact;
    saveContactToStorage(contacts);
    return true;
}

// This loads the user contact for editing
export function loadContactForEdit(index) {
    const contacts = getContactsFromStorage();
    const contact = contacts[index];
    console.log(contact);

    // Fill form with contact data
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    document.getElementById('address').value = contact.address;

    // Update form state
    editingIndex = index;

    // Update UI elements
    document.querySelector('#contact-form button[type="submit"]').textContent = 'Update Contact';
    document.querySelector('#contact-form-section h2').textContent = 'Edit Contact';
}

// This resets the contact form
export function resetForm() {
    editingIndex = null;
    document.getElementById('contact-form').reset();
    document.querySelector('#contact-form button[type="submit"]').textContent = 'Add Contact';
    document.querySelector('#contact-form-section h2').textContent = 'Add New Contact';
}

// This deletes the user contact
export function deleteContact(index) {
    const contacts = getContactsFromStorage();
    contacts.splice(index, 1); // Remove contact at the specified index
    saveContactToStorage(contacts);
}

export { editingIndex };