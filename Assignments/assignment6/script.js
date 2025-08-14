const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting by default
  resetErrors();
  
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Password
  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.style.display = 'block';
    form.reset(); // Clear the form fields
  } else {
    successMessage.style.display = 'none';
  }
});

function resetErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
}