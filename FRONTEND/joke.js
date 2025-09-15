// Function: Fetch joke data from API
async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) {
      throw new Error("API Error");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
}

// Function: Display joke on the page
function displayJoke(jokeData) {
  const jokeBox = document.getElementById("jokeBox");
  if (jokeData) {
    jokeBox.innerHTML = `
      <p><strong>Setup:</strong> ${jokeData.setup}</p>
      <p><strong>Punchline:</strong> ${jokeData.punchline}</p>
    `;
  } else {
    jokeBox.innerHTML = `<p class="error">❌ Couldn’t fetch a joke, try again!</p>`;
  }
}

// Event Listeners
document.getElementById("getJokeBtn").addEventListener("click", async () => {
  jokeBox.innerHTML = `<p>⏳ Fetching a joke...</p>`;
  let joke = await getJoke();
  displayJoke(joke);
});

document.getElementById("nextJokeBtn").addEventListener("click", async () => {
  jokeBox.innerHTML = `<p>⏳ Fetching a new joke...</p>`;
  let joke = await getJoke();
  displayJoke(joke);
});
