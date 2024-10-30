import { getContactsFromStorage } from '../utils/storage.js';

export function displayContacts(searchTerm = '') {
    const contacts = getContactsFromStorage();
    const contactsBody = document.getElementById('contacts-body');

    // Filter contacts if search term exists
    const filteredContacts = contacts.filter(contact => {
        const searchString = searchTerm.toLowerCase();
        return contact.name.toLowerCase().includes(searchString) ||
            contact.phone.includes(searchString);
    });

    // Clear existing contacts
    contactsBody.innerHTML = '';

    // Display filtered contacts
    filteredContacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td>${contact.address}</td>
            <td class="action-buttons">
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        contactsBody.appendChild(row);
    });
}

export function initializeContactList() {
    // Add search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        displayContacts(e.target.value);
    });

    // Initial display
    displayContacts();
}