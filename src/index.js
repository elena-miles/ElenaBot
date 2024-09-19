function generatePoem(event) {
  event.preventDefault();
  document.querySelector('#poem').innerHTML = "";
  
 
  new Typewriter('#poem', {
      strings: ["la tombe dit a la rose"], // Text to type
      autoStart: true,
      delay: 50, // Adjust typing speed
      cursor: null  // Remove cursor if desired
  });
}

let poemFormElement = document.querySelector("#poem-generator-form"); 
poemFormElement.addEventListener("submit", generatePoem);
