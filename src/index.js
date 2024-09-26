function displayPoem (response) {
console.log(`prompt:${response.data.prompt}`);
let poemBox = document.querySelector("#box");
poemBox.classList.remove("hidden"); //make box visible
    new Typewriter("#box", {
        strings: response.data.answer,
        autoStart: true,
        delay: 70, 
        cursor: null,
    });
}

// API call
function generatePoem (event) {
        event.preventDefault();

        let instructionsInput = document.querySelector("#user-instructions");
        let apiKey = "ffoa584b071af31b9db038336tec0bd6";
        let context = "You are a sarcastic cheeky Poem expert and love to write short silly poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
        let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
        let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

        console.log("⏳ generating response...");
        console.log(`prompt:${prompt}`);
        console.log(`context:${context}`);
// API request
        axios.get(apiURL).then(displayPoem);
}
// event listener
let poemFormElement = document.querySelector("#poem-generator-form"); 
poemFormElement.addEventListener("submit", generatePoem);
