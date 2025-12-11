function tellJoke() {
  const jokes = [
    " 🐞 Why don’t programmers like nature? Too many bugs!",
" ⚡ Why did the electrical engineer dump her BF? Too much resistance.",
" 🛠️ Civil engineers at parties: “First, let’s build a solid foundation.",
" ☕ Coffee = engineer’s most stable energy source.",
" 👓 Why do Java devs wear glasses? Because they don’t C#.",
" 📐 Mechanical engineer’s motto: “Measure twice, cut once.",
" 🖥️ Debugging = being the detective in a crime where you’re also the murderer.",
" 🔩 Heavy metal = favorite music of engineers.",
" 🪜 Why don’t engineers trust stairs? They’re always up to something.",
" 📚 Exam motto: “If it works, don’t question how."

  ];

  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("jokeArea").textContent = jokes[randomIndex];
}