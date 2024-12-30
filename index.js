const pEle = document.querySelector(".joke-section p");
const btn = document.querySelector(".btn");

const URL = "https://official-joke-api.appspot.com/random_joke";

const getJokes = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Joke:", data.setup); 
            pEle.innerText = `${data.setup}`; 
        });
};

btn.addEventListener("click", () => {
    console.log("Button clicked!"); 
    getJokes();
});




