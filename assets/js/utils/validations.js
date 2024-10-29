// validations.js
export function validateContact(contact) {
    const nameValid = contact.name.trim() !== '';
    const phoneValid = /^[0-9]{11}$/.test(contact.phone);  // Example: Simple 11-digit phone check
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contact.email);
    const addressValid = contact.address.trim() !== '';

    // Log validation checks for debugging
    console.log('Name Valid:', nameValid);
    console.log('Phone Valid:', phoneValid);
    console.log('Email Valid:', emailValid);
    console.log('Address Valid:', addressValid);

    return nameValid && phoneValid && emailValid && addressValid;
}
