// Setup the calculator display.
const display = document.querySelector('.calculator-screen');

const calculator = {
    displayValue: '0', // Keep track of what should displayed on the screen.
    firstNumber: null, // Initialize the variable for the first number.
    secondNumber: null, // Initialize the variable for the second number.
    waitingForSecondNumber: false, // Set to false, will be set to true upon the first number and operator being input.
    operator: null, // +, -, /, or * (for now)
};

// Handles updating the display.
function updateDisplay() {
    display.value = calculator.displayValue; // Set the value of the display.
}

// Call the method to update the display.
updateDisplay();

// Configure the keys of the calculator.
const keys = document.querySelector('.calculator-keys');

// Listen for a click event.
keys.addEventListener('click', (event) => {
    const target = event.target;

    // possibly add a check to exit the function.
    if (!target.matches('button')) {
        return;
    }

    // Checks for the various function buttons on the calculator interface.
    if (target.classList.contains('operator')) {
        return;
    }

    // Clean up if-statements with a switch statement?

    if (target.classList.contains('subtract')) {
        subtractDigits();
        return;
    }

    if (target.classList.contains('divide')) {
        divideDigits();
        return;
    }
    
    if (target.classList.contains('multiply')) {
        multiplyDigits();
        return;
    }

    if (target.classList.contains('decimal')) {
        decimal(target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        allClear(target.value);
        return;
    }

    if (target.classList.contains('equal-sign')) {

    }
    
    digit(target.value);
});

// Handles inputting digits.
function digit(digit) {
    const displayValue = calculator.displayValue;
    calculator.displayValue = displayValue == '0' ? digit : displayValue + digit;
    updateDisplay();
}

// Handles inputting the decimal point.
function decimal() {
    const dot = ".";
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
        updateDisplay();
    }
}

// Resets the calculator to it's default values.
function allClear() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForOperandTwo = false;
    calculator.operator = null;
    updateDisplay();
}

function calculate(n1, operator, n2) {
    switch (operator) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            return n1 / n2;
    }
}



