async function fetchJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    const joke = await response.json();

    document.getElementById("setup").innerHTML = joke.setup;
    document.getElementById("punchline").innerHTML = joke.punchline;
}

fetchJoke();
