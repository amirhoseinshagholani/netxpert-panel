export function normalizePhoneNumber(phoneNumber) {
    if (phoneNumber.startsWith("98")) {
        return '0'+phoneNumber.slice(2); 
    } 
    return phoneNumber; 
}