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

// Store the original order of movie cards to allow restoring it when the user clears the sorting option
let originalOrder = [];

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".movies-container");
    originalOrder = Array.from(container.children);
});


function sortMovies() {
    const container = document.querySelector(".movies-container");
    const sortType = document.getElementById("sortSelect").value;

    if (sortType === "") {
        for (let i = 0; i < originalOrder.length; i++) {
            container.appendChild(originalOrder[i]);
        }
        return;
    }

    let cards = container.getElementsByClassName("movie-card");
    cards = Array.from(cards);

    for (let i = 0; i < cards.length - 1; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            let titleA = cards[i].querySelector("h3").innerText;
            let titleB = cards[j].querySelector("h3").innerText;

            if (sortType === "az") {
                if (titleA > titleB) {
                    let temp = cards[i];
                    cards[i] = cards[j];
                    cards[j] = temp;
                }
            } 
            
            else {
                if (titleA < titleB) {
                    let temp = cards[i];
                    cards[i] = cards[j];
                    cards[j] = temp;
                }
            }
        }
    }

    for (let i = 0; i < cards.length; i++) {
        container.appendChild(cards[i]);
    }
}