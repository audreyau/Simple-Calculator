const display = document.getElementById('display');

let currentSolution = "";   // overall solution
let currentNumber = "";     // last entered number

function addToDisplay(input) {
    if (input === '+' || input === '-' || input === '*' || input === '/' || input === '%') {
        if (currentNumber) {
            currentSolution += currentNumber;
            currentNumber = "";
        }
        currentSolution += input;
    } 
    else if (input === '.') {
        if (!currentNumber.includes('.')) {
            currentNumber += input;
        }
    } 
    else {
        currentNumber += input;
    }

    display.value = currentSolution + currentNumber;
}

function clearDisplay() {
    display.value = "";
    currentSolution = "";
    currentNumber = "";
}

function calculate() {
    try {
        if (currentNumber) {
            currentSolution += currentNumber;
        }
        display.value = eval(currentSolution);
        currentSolution = display.value;
        currentNumber = "";
    } catch (error) {
        display.value = "Error";
        currentSolution = "";
        currentNumber = "";
    }
}

function toggleSign() {
    if (currentNumber) {
        currentNumber = (parseFloat(currentNumber) * -1).toString();
        display.value = currentSolution + currentNumber;
    }
}

function percentage() {
    if (currentNumber) {
        // Convert the current number to percentage (divide by 100)
        currentNumber = (parseFloat(currentNumber) / 100).toString();
        display.value = currentSolution + currentNumber;
    } else if (currentSolution) {
        // If there's no current number, apply percentage to the last solution
        currentSolution = (parseFloat(currentSolution) / 100).toString();
        display.value = currentSolution;
    }
}
