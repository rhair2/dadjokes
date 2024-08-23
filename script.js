



const jokeElement = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')
const JOKE_URL = `https://icanhazdadjoke.com/`
let jokeText = '';
generateJoke();


jokeBtn.addEventListener('click', generateJoke);

async function generateJoke(){
    const config = { headers:{
        'Accept' : 'application/json',
       }};


   const resp = await fetch(JOKE_URL, config);
   const data = await resp.json();
   jokeText = data.joke;
   jokeElement.innerHTML = jokeText;
}


