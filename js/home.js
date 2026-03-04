let slideIndex = 1; // Current slide index (start from 1)
let autoTimer;

showSlide(slideIndex); // show the first slide initially
autoTimer = setTimeout(autoSlide, 3000); // Start automatic slideshow after 3 seconds

// Automatically move to the next slide every 3 seconds
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
    autoTimer = setTimeout(autoSlide, 3000);
}

// Manual navigation (prev / next buttons)
function manualSlide(n) {
    clearTimeout(autoTimer);
    slideIndex += n;
    showSlide(slideIndex);
    autoTimer = setTimeout(autoSlide, 3000);
}

// Show the slide corresponding to the current slide index
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) slideIndex = 1; // Loop back to first slide if n exceeds number of slides
    if (n < 1) slideIndex = slides.length; // Loop to last slide if n is less than 1

    // hide all the previous slides to avoid multiple slides overlapping on the page
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Redirect user with a transition effect when clicking
function goToMovie(page) {
    document.body.style.transition = "opacity 0.5s ease, transform 0.3s ease";

    document.body.style.transform = "translateX(-10px)";
  
    setTimeout(function() {
        document.body.style.transform = "translateX(10px)";
    }, 150);
  
    setTimeout(function() {
        document.body.style.transform = "translateX(0)";
        document.body.style.opacity = "0";
    }, 300);

    setTimeout(function() {
        window.location.href = page;
    }, 800);
}

// Carousel scrolling
function scrollCarousel(button, direction) {
    const wrapper = button.closest(".media-wrapper");
    const row = wrapper.querySelector(".media-row");

    const scrollAmount = row.clientWidth * 0.8;
    row.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}