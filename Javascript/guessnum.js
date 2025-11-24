 function guessingGame() {
      // Generate a random number between 1 and 10
      var secretNumber = Math.floor(Math.random() * 10) + 1;
      var guess;
      var attempts = 0;

      // Loop until the correct guess
      while (guess !== secretNumber) {
        // Prompt user for input (synchronous)
        guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
        attempts++;

        if (guess === secretNumber) {
          alert("🎉 Correct! The number was " + secretNumber + ". You guessed it in " + attempts + " tries.");
          break;
        } else if (guess < secretNumber) {
          alert("Too low! Try again.");
        } else if (guess > secretNumber) {
          alert("Too high! Try again.");
        } else {
          alert("Invalid input. Please enter a number.");
        }
      }
    }

    // Start the game
    guessingGame();