document.addEventListener("DOMContentLoaded", function () {
    const counterText = document.getElementById("counter-text");
    const buttonAdd = document.getElementById("button-add");
    const buttonSubtract = document.getElementById("button-subtract");
    
    let counter = 0;
    const maxLimit = 100;

    buttonAdd.addEventListener("click", function () {
        if (counter < maxLimit) {
            counter++;
            updateCounter();
        } else {
            alert("Maximum limit reached!");
        }
    });

    buttonSubtract.addEventListener("click", function () {
        if (counter > 0) {
            counter--;
            updateCounter();
        } else {
            alert("Counter cannot go below 0!");
        }
    });

    window.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp") {
            if (counter < maxLimit) {
                counter++;
                updateCounter();
            }
        } else if (event.key === "ArrowDown") {
            if (counter > 0) {
                counter--;
                updateCounter();
            }
        }
    });

    function updateCounter() {
        counterText.textContent = counter;
    }

    updateCounter();
});
