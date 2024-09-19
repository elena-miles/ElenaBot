function generatePoem (event) {
    event.preventDefault();
    
    let boxElement = document.querySelector(".poem-text-box");
    boxElement.innerHTML = "you are a massive dork"; 
}

let poemFormElement = document.querySelector("#poem-generator-form"); 
poemFormElement.addEventListener("submit", generatePoem);
