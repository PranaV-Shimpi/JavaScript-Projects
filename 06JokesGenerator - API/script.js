let jokeText = document.querySelector("#joke");
let btn = document.querySelector("#jokeBtn");

API_URL = "https://icanhazdadjoke.com/";


const getJoke = async () => {
  const jokeData = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  jokeText.innerHTML = jokeObj.joke;
};

getJoke();

btn.addEventListener("click", getJoke);
