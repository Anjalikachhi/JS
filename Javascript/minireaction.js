const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");

let startTime;
let gameActive = false;

startBtn.addEventListener("click", () => {
  box.style.background = "yellow";
  message.textContent = "Wait for green...";
  result.textContent = "";
  gameActive = false;

  const randomTime = Math.random() * 3000 + 1000;

  setTimeout(() => {
    box.style.background = "green";
    message.textContent = "CLICK NOW!";
    startTime = new Date().getTime();
    gameActive = true;
  }, randomTime);
});

box.addEventListener("click", () => {
  if (!gameActive) {
    result.textContent = "Too early! 😅";
    return;
  }

  const reactionTime = new Date().getTime() - startTime;
  result.textContent = `Your reaction time: ${reactionTime} ms`;
  gameActive = false;
});
