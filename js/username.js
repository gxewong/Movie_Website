// display the logged in user's name
document.addEventListener("DOMContentLoaded", function() {
    const usernameText = document.getElementById("usernameText");
    const userFullName = localStorage.getItem("userFullName");

    if (userFullName && usernameText) {
        usernameText.textContent = userFullName;
    }
});
