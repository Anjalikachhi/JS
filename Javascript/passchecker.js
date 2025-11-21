const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let score = 0;


  if (password.length >= 8) score += 25;
   else if (password.length >= 5) score += 10;
if (/[a-z]/.test(password)) score += 15;
if (/[A-Z]/.test(password)) score += 15;
if (/[0-9]/.test(password)) score += 20;
if (/[^A-Za-z0-9]/.test(password)) score += 25;
if (score > 100) score = 100;
strengthFill.style.width = score + "%";
let strengthLabel = "Weak";
  let color = "red";
if (score >= 70) {
    strengthLabel = "Strong";
    color = "green";
  } else if (score >= 40) {
    strengthLabel = "Medium";
    color = "orange";
  }
strengthFill.style.background = color;
  strengthText.textContent = `Strength: ${score}/100 (${strengthLabel})`;
});