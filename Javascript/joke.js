function tellJoke() {
  const jokes = [
    "Why don’t programmers like nature? Too many bugs!",
    "I told my computer I needed a break… it said 'No problem, I’ll go to sleep.'",
    "Why do Java developers wear glasses? Because they don’t see sharp!",
    "Debugging: Being the detective in a crime movie where you are also the murderer."
  ];

  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("jokeArea").textContent = jokes[randomIndex];
}