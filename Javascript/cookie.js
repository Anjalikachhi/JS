const fortunes = [
  "You will discover a hidden talent soon.",
  "Adventure awaits you in unexpected places.",
  "A small act of kindness will change your day.",
  "Your creativity will open new doors.",
  "Someone is thinking of you right now.",
  "Opportunities will knock when you least expect.",
  "A smile is your best accessory today."
];

const btn = document.getElementById("openBtn");
const fortuneEl = document.getElementById("fortune");

btn.addEventListener("click", () => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneEl.textContent = randomFortune;
  fortuneEl.style.opacity = 1;
});