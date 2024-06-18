async function getJoke() {
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = 'Loading...';

    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        if (data.type === 'single') {
            jokeElement.textContent = data.joke;
        } else {
            jokeElement.textContent = `${data.setup} ... ${data.delivery}`;
        }
    } catch (error) {
        jokeElement.textContent = 'Failed to fetch a joke. Please try again later.';
    }
}
