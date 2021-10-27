console.log("Hello World");
function addMovie(evt){
    console.log("atempting to add a movie");
    evt.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    console.log(inputField.value);
    movieTitle.textContent = (inputField.value);
    inputField.value = "";
    movie.appendChild(movieTitle);

    let ulEl = document.querySelector("ul");
    ulEl.appendChild(movie);
}

let form = document.querySelector("form");
form.addEventListener("submit",addMovie);