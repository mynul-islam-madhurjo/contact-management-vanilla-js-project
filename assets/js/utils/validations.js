export function validateContact(contact) {
    const nameValid = contact.name.trim().length >= 2;
    const phoneValid = contact.phone.trim().length >= 11;
    const emailValid = contact.email.includes('@');
    const addressValid = contact.address.trim().length > 5;

    // Log validation checks for debugging
    console.log('Name Valid:', nameValid);
    console.log('Phone Valid:', phoneValid);
    console.log('Email Valid:', emailValid);
    console.log('Address Valid:', addressValid);

    return nameValid && phoneValid && emailValid && addressValid;
}
