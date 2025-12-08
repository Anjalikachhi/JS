const buttons = document.querySelectorAll("button");
const message = document.getElementById("message");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = btn.style.backgroundColor;
    message.textContent = `You chose: ${btn.textContent} mood ✨`;
  });
});