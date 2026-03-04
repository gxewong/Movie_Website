// get elements
const name = document.getElementById("name");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmpwd = document.getElementById("confirmpwd");
const confirmpwdError = document.getElementById("confirmpwdError");
const agree = document.getElementById("agree");
const signUpBtn = document.querySelector("button[type='submit']");
const form = document.querySelector("form.right-bar");

// check email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // eg: user@gmail.com
    return emailPattern.test(email); // returns true or false
}

// check password
function isValidPassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/; // eg: Hello7@
    // At least 6 characters
    // Contains at least 1 letter
    // Contains at least 1 number
    // Special characters (@$!%*?&) are allowed but optional
    return passwordPattern.test(password); // returns true or false
}

// check confirm password
function passwordMatch(password, confirmpwd) {
    return password === confirmpwd; // returns true or false
}

// form validation
function validateSignUp() {
    // Give error message if email format is incorrect
    if (email.value.trim() !== "" && !isValidEmail(email.value.trim())) {
        emailError.textContent = "Invalid email address.";
    } 
    else {
        emailError.textContent = "";
    }

    // Give error message if password format is invalid
    if (password.value !== "" && !isValidPassword(password.value)) {
        passwordError.textContent = 
        "Invalid password. Password must be:\n" +
        "- At least 6 characters\n" +
        "- Contains at least 1 letter\n" +
        "- Contains at least 1 number\n" +
        "- Special characters (@$!%*?&) are allowed but optional";
    } 
    else {
        passwordError.textContent = "";
    }

    // Give error message if confirm password does not match
    if (confirmpwd.value !== "" && !passwordMatch(password.value, confirmpwd.value)) {
        confirmpwdError.textContent = "Passwords do not match."; 
    } 
    else {
        confirmpwdError.textContent = "";
    }
}

// form submission
function handleSubmit(event){
    event.preventDefault(); 

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" || !isValidEmail(email.value.trim()) ||
        password.value === "" || !isValidPassword(password.value) ||
        confirmpwd.value === "" || !passwordMatch(password.value, confirmpwd.value) ||
        !agree.checked) {
        alert("Please fill in all fields correctly before creating an account.");
        return;
    }

    alert("Account created successfully! You can now log in.");

    // store for login validation
    localStorage.setItem("userFullName", name.value.trim());
    localStorage.setItem("userEmail", email.value.trim());
    localStorage.setItem("userPassword", password.value);

    window.location.href = "log in.html";
}

// sets the initial submit button state on page load
window.addEventListener("DOMContentLoaded", validateSignUp);
form.addEventListener("submit", handleSubmit);

// Real-time validation
name.addEventListener("input", validateSignUp);
email.addEventListener("input", validateSignUp);
password.addEventListener("input", validateSignUp);
confirmpwd.addEventListener("input", validateSignUp);
agree.addEventListener("change", validateSignUp);