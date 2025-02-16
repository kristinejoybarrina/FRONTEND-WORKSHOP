document.addEventListener("DOMContentLoaded", function () {
    const tempInput = document.getElementById("temp");
    const unitSelect = document.getElementById("unit");
    const convertBtn = document.querySelector("button");
    const resultText = document.getElementById("conversion-text");

    convertBtn.addEventListener("click", function () {
        const tempValue = parseFloat(tempInput.value);
        const selectedUnit = unitSelect.value;

        if (isNaN(tempValue)) {
            resultText.textContent = "Please enter a valid temperature value.";
            resultText.style.color = "red";
            return;
        }

        if (!selectedUnit) {
            resultText.textContent = "Please select a unit to convert to.";
            resultText.style.color = "red";
            return;
        }

        let convertedTemp, unitSymbol;

        if (selectedUnit === "celsius") {
            convertedTemp = (tempValue - 32) * 5 / 9;
            unitSymbol = "°C";
        } else if (selectedUnit === "fahrenheit") {
            convertedTemp = (tempValue * 9 / 5) + 32;
            unitSymbol = "°F";
        }

        resultText.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unitSymbol}`;
        resultText.style.color = "black";
    });
});
