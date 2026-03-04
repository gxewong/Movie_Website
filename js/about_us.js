function goToCV(url) {
    // Fade out the page before navigating to the CV page
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";

    // Redirects the user to the selected CV page after 0.5 seconds
    setTimeout(function() {
        window.location.href = url;
    }, 500);
}
