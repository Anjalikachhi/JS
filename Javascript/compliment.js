const compliments = [
  "You bring a gentle light to the room.",
  "Your curiosity makes the world more interesting.",
  "The effort you put in really matters.",
  "You’ve got a quiet strength that inspires.",
  "Someone out there is grateful for you today."
];

document.getElementById("newCompliment").addEventListener("click", () => {
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("compliment").textContent = random;
});