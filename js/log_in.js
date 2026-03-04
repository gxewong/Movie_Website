// get elements
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const password = document.getElementById("password");
const form = document.querySelector("form.right-bar");

// check email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // eg: user@gmail.com
    return emailPattern.test(email);
}

function validateEmailFormat(){
    // Give error message if email format is incorrect
    if (email.value.trim() !== "" && !isValidEmail(email.value.trim())) {
        emailError.textContent = "Invalid email address.";
    } 
    else {
        emailError.textContent = "";
    }
}

// form submission
function handleSubmit(event){
    event.preventDefault(); 

    if (email.value.trim() === "" || !isValidEmail(email.value.trim()) || password.value === "") {
        alert("Please fill in all needed fields before logging in.");
        return;
    }

    // retrieve stored user data
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // check if user exists
    if (!storedEmail || email.value.trim() !== storedEmail) {
        alert("No account found. Please reenter or sign up.");
        return;
    }

    // check if password matches
    if (password.value !== storedPassword) {
        alert("Incorrect password.");
        return;
    }

    alert("Log in successfully.");
    window.location.href = "home.html";
}


// Real-time validation
email.addEventListener("input", validateEmailFormat);
form.addEventListener("submit", handleSubmit);
