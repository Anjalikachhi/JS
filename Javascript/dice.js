const rollBtn = document.getElementById('rollBtn');
const diceResult = document.getElementById('diceResult');

rollBtn.addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = `You rolled: ${roll}`;
  diceResult.style.transform = "scale(1.3)";
  setTimeout(() => {
    diceResult.style.transform = "scale(1)";
  }, 300);
});