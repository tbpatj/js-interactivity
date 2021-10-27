console.log("Hello World");
let message = document.querySelector("#message");

function deleteMovie(event){
    event.target.parentNode.remove();
    console.log();
    message.textContent = `'${event.target.previousSibling.textContent}' has been eliminated from the watchlist`;
    revealMessage();
}




function crossOffMovie(event){
    event.target.classList.toggle("checked");
    if(event.target.classList.contains("checked")){
        let randomReponse = Math.ceil(Math.random() * 5);
        switch (randomReponse){
            case 1:
                message.textContent = `You've watched "${event.target.textContent}"??? That like just came out.`;
                break;
            case 2:
                message.textContent = `Welp so much for watching "${event.target.textContent}"" with you.`;
                break;
            case 3:
                message.textContent = `Sheesh, I see you, throwin round money on all those movie tickets`;
                break;
            case 4:
                message.textContent = `Wow I'm jealous, "${event.target.textContent}" is on the top of my watchlist`;
                break;
            case 5:
                message.textContent = `Oooo "${event.target.textContent}"! The trailer was amazing! was it any good?`;
                break;
        }
    } else {
        message.textContent = `You mean to tell me you haven't watched "${event.target.textContent}"`;
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove("hide")
    console.log("hiding");
    setTimeout(() => {
        message.classList.add("hide");
    },1000)
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