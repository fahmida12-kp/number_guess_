let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (guess === 0) {
        message.textContent = "Please enter a number!";
    }
    else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
    }
    else if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
    }
    else {
        message.textContent = "🎉 Congratulations! You guessed it!";
    }
}

function resetGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";

}