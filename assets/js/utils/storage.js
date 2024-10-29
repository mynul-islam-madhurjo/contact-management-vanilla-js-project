// storage.js
export function getContactsFromStorage() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    console.log('Fetched Contacts:', contacts);
    return contacts;
}

export function saveContactToStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('Contacts Saved:', contacts);
}
