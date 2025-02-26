document.addEventListener("DOMContentLoaded", function () {
    let randomNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 5;
    
    const guessInput = document.getElementById("guess-input");
    const guessBtn = document.getElementById("guess-btn");
    const resultDiv = document.getElementById("result-div");
    const guessContainer = document.getElementById("guess-container");
    const newGameBtn = document.querySelector("#new-game-div button");
    
    guessBtn.addEventListener("click", handleGuess);
    newGameBtn.addEventListener("click", resetGame);
    
    function handleGuess() {
        const userGuess = parseInt(guessInput.value);
        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }
        
        attempts++;
        const guessElement = document.createElement("span");
        guessElement.textContent = userGuess;
        guessElement.classList.add("previous-guess");
        
        if (userGuess < randomNumber) {
            resultDiv.textContent = "Higher!";
            guessElement.classList.add("higher-than-guess");
        } else if (userGuess > randomNumber) {
            resultDiv.textContent = "Lower!";
            guessElement.classList.add("lower-than-guess");
        } else {
            resultDiv.textContent = `Congratulations! The number is ${randomNumber}`;
            guessElement.classList.add("correct-guess");
            endGame();
            return;
        }
        
        guessContainer.appendChild(guessElement);
        
        if (attempts >= maxAttempts) {
            resultDiv.textContent = `Game Over! The correct number was ${randomNumber}.`;
            endGame();
        }
    }
    
    function endGame() {
        guessInput.disabled = true;
        guessBtn.disabled = true;
    }
    
    function resetGame() {
        randomNumber = generateRandomNumber();
        attempts = 0;
        resultDiv.textContent = "";
        guessContainer.innerHTML = "";
        guessInput.value = "";
        guessInput.disabled = false;
        guessBtn.disabled = false;
    }
    
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
});
