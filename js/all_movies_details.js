// Select video and mute button
const video = document.querySelector('.movie-video');
const muteBtn = document.getElementById('muteBtn');

// Set initial state so they match
video.muted = true; 
muteBtn.textContent = 'Unmute';

// Toggle mute/unmute on button click
muteBtn.addEventListener('click', function() {
    if (video.muted === true) {
        video.muted = false;
        muteBtn.textContent = 'Mute';
    } 

    else {
        video.muted = true;
        muteBtn.textContent = 'Unmute';
    }
});

// Carousel scrolling for cast list
function scrollCast(direction) {
    const castList = document.querySelector(".cast-list");
    
    const scrollAmount = castList.clientWidth * 0.8;
    castList.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}