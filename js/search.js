// --MOVIE DATA--
const movies = [
    // movie
    { title: "The Lord of the Rings: The Return of the King", page: "media details/Movies HTML/lordofrings.html" },
    { title: "Star Wars: Episode VII The Force Awakens", page: "media details/Movies HTML/starwars.html" },
    { title: "Before Sunset", page: "media details/Movies HTML/sunset.html" },
    { title: "The Truman Show", page: "media details/Movies HTML/trumanshow.html" },
    { title: "La La Land", page: "media details/Movies HTML/LaLaLand.html" },
    { title: "Spider-man: No Way Home", page: "media details/Movies HTML/spiderman.html" },
    { title: "Interstellar", page: "media details/Movies HTML/interstellar.html" },
    { title: "Joker", page: "media details/Movies HTML/joker.html" },
    { title: "The Legend of 1900", page: "media details/Movies HTML/1900.html" },
    { title: "The Great Gatsby", page: "media details/Movies HTML/greatgatsby.html" },
    // cartoon
    { title: "Up", page: "media details/Cartoon HTML/up.html" },
    { title: "Coco", page: "media details/Cartoon HTML/coco.html" },
    { title: "Inside Out 2", page: "media details/Cartoon HTML/insideout2.html" },
    { title: "Big Hero 6", page: "media details/Cartoon HTML/bighero.html" },
    { title: "Zootopia 2", page: "media details/Cartoon HTML/zootopia2.html" },
    { title: "Kung Fu Panda 4", page: "media details/Cartoon HTML/kungfupanda.html" },
    { title: "Migration", page: "media details/Cartoon HTML/migration.html" },
    { title: "Minions: Despicable Me 3", page: "media details/Cartoon HTML/minions.html" },
    { title: "Elemental", page: "media details/Cartoon HTML/elemental.html" },
    { title: "The Boss Baby", page: "media details/Cartoon HTML/thebossbaby.html" },
    // anime
    { title: "Your Name", page: "media details/Anime HTML/yourname.html" },
    { title: "The First Slam Dunk", page: "media details/Anime HTML/dunk.html" },
    { title: "Suzume", page: "media details/Anime HTML/suzume.html" },
    { title: "The Wind Rises", page: "media details/Anime HTML/thewindrises.html" },
    { title: "The Boy and The Heron", page: "media details/Anime HTML/boyandheron.html" },
    { title: "When Marnie Was There", page: "media details/Anime HTML/marnie.html" },
    { title: "Weathering With You", page: "media details/Anime HTML/weatheringwithyou.html" },
    { title: "Ocean Waves", page: "media details/Anime HTML/oceanwaves.html" },
    { title: "Crayon Shin-chan: Intense Battle! Robo Dad Strikes Back", page: "media details/Anime HTML/shinchan.html" },
    { title: "Bubble", page: "media details/Anime HTML/bubble.html" }
];

// --SEARCH BAR SETUP--
document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");

    // create a suggestion box
    const suggestionBox = document.createElement("div");
    suggestionBox.className = "suggestion-box"; // create a CSS class for suggestion box for styling
    searchBar.parentNode.appendChild(suggestionBox); // append after search bar

    // input event
    searchBar.addEventListener("input", function() {
        const input = searchBar.value.trim().toLowerCase();
        suggestionBox.innerHTML = ""; // clear previous suggestions to avoid stacking

        if (input === "") return; // don't show anything if input is empty

        // filter the movies by titles containing the input text
        const matchedMovies = movies.filter(function(movie) {
            return movie.title.toLowerCase().includes(input);
        });

        // if no match found
        if (matchedMovies.length === 0) {
            const notFound = document.createElement("div");
            notFound.className = "suggestion-item disabled";
            notFound.textContent = "Movie not found";
            suggestionBox.appendChild(notFound);
            return;
        }

        // Matches found, create suggestion items
        matchedMovies.forEach(function(movie) {
            const item = document.createElement("div");
            item.className = "suggestion-item";
            item.textContent = movie.title;

            // when clicking a suggestion
            item.addEventListener("click", function() {
                searchBar.value = movie.title;
                suggestionBox.innerHTML = ""; // clear suggestions
            });

            suggestionBox.appendChild(item);
        });
    });

    // enter key event
    searchBar.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            searchSite();
        }
    });

    // click outside to close suggestion
    document.addEventListener("click", function(e) {
        if (!searchBar.contains(e.target)) { // make sure is click outside the search bar
            suggestionBox.innerHTML = "";
        }
    });
});


function searchSite() {
    const searchBar = document.getElementById("searchBar");
    const input = searchBar.value.trim();

    if (input === "") {
        alert("Please enter a movie title");
        return;
    }

    const movie = movies.find(function(m) {
        return m.title.toLowerCase() === input.toLowerCase();
    });

    if (movie) {
        alert("Movie found. Redirecting to <" + movie.title + "> page");
        // detect the current folder depth automatically
        const isDetailsPage = window.location.pathname.includes("media details") || 
                              window.location.pathname.includes("media%20details");

        // define the path prefix (if in a subfolder (detail pages), we need "../../" to go back to the root)
        const prefix = isDetailsPage ? "../../" : "";
        
        // final Path: replace spaces with %20 for better browser compatibility
        let finalPath = prefix + movie.page;
        window.location.href = finalPath.replace(/ /g, "%20");
    } 

    else {
        alert("Movie not found");
        searchBar.value = ""; 
    }
}