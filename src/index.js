function generatePoem(event) {
  event.preventDefault();
  document.querySelector('#poem').innerHTML = "";
  
  new Typewriter('#poem', {
      strings: ["la tombe dit a la rose"], 
      autoStart: true,
      delay: 1, 
      cursor: null, 
  });
}

let poemFormElement = document.querySelector("#poem-generator-form"); 
poemFormElement.addEventListener("submit", generatePoem);
