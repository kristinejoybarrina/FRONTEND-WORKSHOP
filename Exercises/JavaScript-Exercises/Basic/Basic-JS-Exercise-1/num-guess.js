function playGame() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    let guessedCorrectly = false;

    console.log(`Random number (for debugging): ${randomNum}`);

    for (let attempts = 1; attempts <= 5; attempts++) {
        const userGuess = prompt(`Attempt ${attempts}: Guess the number (between 1 and 100):`);

        if (userGuess === null) {
            alert("Game cancelled.");
            return;
        }

        const guess = Number(userGuess);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Invalid input. Please enter a number between 1 and 100.");
            attempts--; 
            continue;
        }

        console.log(`Attempt ${attempts}: User guessed ${guess}`);

        if (guess === randomNum) {
            alert(`Congratulations! You guessed the number ${randomNum} correctly in ${attempts} attempts.`);
            guessedCorrectly = true;
            break;
        } else if (guess < randomNum) {
            alert("Higher!");
        } else {
            alert("Lower!");
        }
    }

    if (!guessedCorrectly) {
        alert(`Sorry, you've used all 5 attempts. The correct number was ${randomNum}.`);
    }

    if (confirm("Do you want to play again?")) {
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

playGame();
