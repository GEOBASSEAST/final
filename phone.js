function validatephone (input) {
    let phoneNumberPattern = /^\+995\d{9}$/;
    return phoneNumberPattern.test(input);
}

let phoneError = document.getElementById('phone-error');
let phoneInput = document.getElementById('phone-input');


phoneInput.addEventListener('input', function() {
    let phone = phoneInput.value;
    if (!validatePattern(phone)) {
        phoneError.classList.remove('hidden');
    }
    else {
        phoneError.classList.add('hidden');
    }
})