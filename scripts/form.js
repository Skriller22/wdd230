// Utility function to toggle error messages
function toggleError(input, errorElement, condition, message = '') {
    if (condition) {
        errorElement.style.display = 'block';
        input.setCustomValidity(message);
    } else {
        errorElement.style.display = 'none';
        input.setCustomValidity('');
    }
}

// Password validation
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordMatchError = document.getElementById('password-match-error');
const passwordFormatError = document.getElementById('password-format-error');

password.addEventListener('blur', () => {
    toggleError(password, passwordFormatError, !password.validity.valid);
});

confirmPassword.addEventListener('blur', () => {
    toggleError(
        confirmPassword,
        passwordMatchError,
        password.value !== confirmPassword.value,
        'Passwords do not match'
    );
});

// Email validation
const email = document.getElementById('email');
const emailFormatError = document.getElementById('email-format-error');

email.addEventListener('blur', () => {
    toggleError(
        email,
        emailFormatError,
        !email.validity.valid || !email.value.endsWith('@byui.edu'),
        'Email must end with @byui.edu'
    );
});

// Form submission validation
document.querySelector('form').addEventListener('submit', (event) => {
    let hasError = false;

    if (!password.validity.valid) {
        toggleError(password, passwordFormatError, true);
        password.focus();
        hasError = true;
    }

    if (password.value !== confirmPassword.value) {
        toggleError(confirmPassword, passwordMatchError, true, 'Passwords do not match');
        confirmPassword.focus(); // Focus on confirm password instead of clearing fields
        hasError = true;
    }

    if (!email.validity.valid || !email.value.endsWith('@byui.edu')) {
        toggleError(email, emailFormatError, true, 'Email must end with @byui.edu');
        email.focus();
        hasError = true;
    }

    if (hasError) {
        event.preventDefault(); // Block form submission
    }
});

// Page rating validation
const ratingInput = document.getElementById('rating');
const ratingValue = document.getElementById('rating-value');

ratingInput.addEventListener('input', () => {
    ratingValue.textContent = ratingInput.value;
});
