// get elements
const name = document.getElementById("name");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const comment = document.getElementById("comment");
const submitBtn = document.querySelector("button[type='submit']");

// check email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // eg: user@gmail.com
    return emailPattern.test(email); // returns true or false
}

// form validation
function validateForm() {
    // Give error message when email format is incorrect
    if (email.value.trim() !== "" && !isValidEmail(email.value.trim())) {
        emailError.textContent = "Invalid email address.";
    } 
    else {
        emailError.textContent = "";
    }

    // Enabling / disabling submit button by checking email format and emply fields 
    if (name.value.trim() !== "" && email.value.trim() !== "" && isValidEmail(email.value.trim()) && comment.value.trim() !== "") {
        submitBtn.disabled = false; 
        submitBtn.textContent = "Submit";
    } 
    else {
        submitBtn.disabled = true; 
        submitBtn.textContent = "Submit (Disabled)";
    }
}

// sets the initial submit button state on page load
window.addEventListener("DOMContentLoaded", validateForm);

// form submission
 function submit(event) {
    event.preventDefault();
    alert("Submitted successfully!");
    document.querySelector("form").reset();
    validateForm();
};

// Real-time validation
name.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
comment.addEventListener("input", validateForm);

document.querySelector("form").addEventListener("submit", submit);

//  Make reset button revalidate when user clicks reset button
document.querySelector("button[type='reset']").addEventListener("click", () => {
    setTimeout(validateForm, 0); 
});
