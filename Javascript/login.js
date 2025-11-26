function login() {
  // Hardcoded credentials (synchronous check)
  var validUser = "admin";
  var validPass = "1234";

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var messageBox = document.getElementById("message");

  if (user === validUser && pass === validPass) {
    messageBox.textContent = "✅ Login successful!";
    messageBox.className = "message success";
  } else {
    messageBox.textContent = "❌ Invalid username or password.";
    messageBox.className = "message error";
  }

  // Prevent form submission (no async, just synchronous return)
  return false;
}