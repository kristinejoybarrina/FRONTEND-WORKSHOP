function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Invalid operator";
    }
}

function startCalculator() {
    while (true) {
        let num1 = parseFloat(prompt("Enter the first number:"));
        if (isNaN(num1)) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        let num2 = parseFloat(prompt("Enter the second number:"));
        if (isNaN(num2)) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        let operator = prompt("Choose an operation (+, -, *, /):");
        if (!['+', '-', '*', '/'].includes(operator)) {
            alert("Invalid operator. Please enter one of (+, -, *, /).");
            continue;
        }

        let result = calculate(num1, num2, operator);

        alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
        console.log(`Calculation: ${num1} ${operator} ${num2} = ${result}`);

        let anotherCalculation = confirm("Do you want to perform another calculation?");
        if (!anotherCalculation) {
            alert("Thanks for using the calculator!");
            break;
        }
    }
}

startCalculator();
