console.log("Hello World");

function deleteMovie(event){
    event.target.parentNode.remove();
    
}
function crossOffMovie(event){
    event.target.classList.toggle("checked");
}

function addMovie(evt){
    //stop the submit from sending us somehwere else
    evt.preventDefault();
    //get what the user has entered and create a new list element with that value
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    console.log(inputField.value);
    movieTitle.textContent = (inputField.value);
    //set the value of inputfield to nothing as to clear it for the next input
    inputField.value = "";

    //make sure the span has an event listener so we can cross of if clicked
    movieTitle.addEventListener('click',crossOffMovie);

    //make sure we add these elements to the document
    movie.appendChild(movieTitle);
    let ulEl = document.querySelector("ul");
    ulEl.appendChild(movie);

    //create a deletion button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click',deleteMovie);
    movie.appendChild(deleteBtn);
}

let form = document.querySelector("form");
form.addEventListener("submit",addMovie);