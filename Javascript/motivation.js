const strongQuotes = [
  { text: "You are allowed to be both a masterpiece and a work in progress at the same time.", author: "Unknown" },
  { text: "You have done harder things than this. You can do this too.", author: "Reminder" },
  { text: "Someone who didn’t give up is living the life you’re dreaming about. Stay in the fight.", author: "Future You" },
  { text: "Your pace is valid. Progress is still progress, even if nobody else notices.", author: "Soft Truth" },
  { text: "You are not late. You are arriving exactly on your own timeline.", author: "The Universe" },
  { text: "You don’t have to feel ready to be capable. You are allowed to start scared.", author: "Inner Coach" },
  { text: "Every skill you admire in others was once something they were terrible at.", author: "Growth Mindset" },
  { text: "You are building a version of you that younger you would be proud of.", author: "Inner Child" }
];

const gentleQuotes = [
  { text: "Hey, breathe. You are doing enough, and you are allowed to rest.", author: "Gentle Reminder" },
  { text: "Even on days you feel heavy, you are still worthy of good things.", author: "Soft Voice" },
  { text: "You don’t have to earn your right to exist by being productive.", author: "Kindness" },
  { text: "It’s okay if today is slower. Healing and learning don’t follow a perfect schedule.", author: "Reality" },
  { text: "You are not a problem to fix. You are a human to understand.", author: "Compassion" }
];

let gentleMode = false;
let lastIndex = -1;

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const moodFill = document.getElementById("moodFill");
const moodLabel = document.getElementById("moodLabel");
const boostBtn = document.getElementById("boostBtn");
const softBtn = document.getElementById("softBtn");

function getRandomQuote() {
  const list = gentleMode ? gentleQuotes : strongQuotes;
  let index;
  do { index = Math.floor(Math.random() * list.length); }
  while (index === lastIndex);
  lastIndex = index;
  return list[index];
}

function updateMood() {
  const base = gentleMode ? 0.25 : 0.45;
  const randomBonus = Math.random() * 0.4;
  let value = Math.min(base + randomBonus, 1);
  const percentage = Math.round(value * 100);

  moodFill.style.width = percentage + "%";

  if (percentage < 35) moodLabel.textContent = "Just starting… be kind.";
  else if (percentage < 60) moodLabel.textContent = "Rising. Don’t underestimate yourself.";
  else if (percentage < 85) moodLabel.textContent = "You’re stronger than you feel.";
  else moodLabel.textContent = "Limitless energy unlocked.";
}

function typeText(element, text) {
  element.textContent = "";
  let index = 0;
  const speed = 20;

  const interval = setInterval(() => {
    if (index >= text.length) {
      clearInterval(interval);
      return;
    }
    element.textContent += text.charAt(index);
    index++;
  }, speed);
}

function showNewQuote() {
  const { text, author } = getRandomQuote();
  typeText(quoteEl, text);
  authorEl.textContent = "— " + author;
  updateMood();
}

boostBtn.addEventListener("click", showNewQuote);

softBtn.addEventListener("click", () => {
  gentleMode = !gentleMode;
  softBtn.textContent = gentleMode ? "Gentle mode on" : "Gentle mode";
  const keySpan = document.createElement("span");
  keySpan.className = "key";
  keySpan.textContent = "G";
  softBtn.appendChild(keySpan);
  showNewQuote();
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    showNewQuote();
  }
  if (e.key.toLowerCase() === "g") {
    e.preventDefault();
    softBtn.click();
  }
});

updateMood();