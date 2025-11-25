// Simple synchronous counter app
var counterValue = 0;

var counterDisplay = document.getElementById("counter");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");
var resetBtn = document.getElementById("resetBtn");

increaseBtn.onclick = function() {
  counterValue++;
  counterDisplay.textContent = counterValue;
};

decreaseBtn.onclick = function() {
  counterValue--;
  counterDisplay.textContent = counterValue;
};

resetBtn.onclick = function() {
  counterValue = 0;
  counterDisplay.textContent = counterValue;
};