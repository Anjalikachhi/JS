const button = document.getElementById('colorBtn');
const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#9D4EDD'];

button.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});