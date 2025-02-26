document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("calc-screen");
    let currentInput = "0";
    let firstOperand = null;
    let operator = null;
    let awaitingSecondOperand = false;

    function updateScreen() {
        screen.textContent = currentInput;
    }

    function clearCalculator() {
        currentInput = "0";
        firstOperand = null;
        operator = null;
        awaitingSecondOperand = false;
        updateScreen();
    }

    function handleNumberInput(number) {
        if (awaitingSecondOperand) {
            currentInput = number;
            awaitingSecondOperand = false;
        } else {
            currentInput = currentInput === "0" ? number : currentInput + number;
        }
        updateScreen();
    }

    function handleOperatorInput(nextOperator) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else if (operator) {
            const result = performCalculation(firstOperand, parseFloat(currentInput), operator);
            currentInput = String(result);
            firstOperand = result;
        }
        operator = nextOperator;
        awaitingSecondOperand = true;
        updateScreen();
    }

    function performCalculation(first, second, operator) {
        switch (operator) {
            case '+': return first + second;
            case '−': return first - second;
            case '×': return first * second;
            case '÷': return second !== 0 ? first / second : "Error";
            default: return second;
        }
    }

    function handleEquals() {
        if (operator && !awaitingSecondOperand) {
            currentInput = String(performCalculation(firstOperand, parseFloat(currentInput), operator));
            firstOperand = null;
            operator = null;
            awaitingSecondOperand = false;
            updateScreen();
        }
    }

    function handleDecimal() {
        if (!currentInput.includes(".")) {
            currentInput += ".";
        }
        updateScreen();
    }

    function handleSignChange() {
        currentInput = String(parseFloat(currentInput) * -1);
        updateScreen();
    }

    function handlePercentage() {
        currentInput = String(parseFloat(currentInput) / 100);
        updateScreen();
    }

    function handleDelete() {
        currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
        updateScreen();
    }

    document.querySelectorAll(".numberKeys").forEach(button => {
        button.addEventListener("click", () => handleNumberInput(button.textContent.trim()));
    });

    document.querySelectorAll(".arithmeticKeys").forEach(button => {
        button.addEventListener("click", () => handleOperatorInput(button.textContent.trim()));
    });

    document.getElementById("clearBtn").addEventListener("click", clearCalculator);
    document.getElementById("equalsBtn").addEventListener("click", handleEquals);
    document.getElementById("decimalBtn").addEventListener("click", handleDecimal);
    document.getElementById("signBtn").addEventListener("click", handleSignChange);
    document.getElementById("percentBtn").addEventListener("click", handlePercentage);
    document.getElementById("deleteBtn").addEventListener("click", handleDelete);

    updateScreen();
});
