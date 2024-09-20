function generatePoem (event) {
    event.preventDefault();
    
    //let boxElement = document.querySelector(".poem-text-box");
    //boxElement.innerHTML = "you are a massive dork"; 
    new Typewriter(".poem-text-box", {
        strings: ["Hey, YOU. What do you want now?"],
        autoStart: true,
        delay: 70, 
        cursor: null
    });
}

let poemFormElement = document.querySelector("#poem-generator-form"); 
poemFormElement.addEventListener("submit", generatePoem);
