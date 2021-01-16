// Setup the calculator display.
const display = document.querySelector('.calculator-screen');

const calculator = {
    displayValue: '0', // Keep track of what should displayed on the screen.
    operandOne: null, // Initialize the variable for the first operand.
    waitingForOperandTwo: false, // Makes sure that 2 operands are input before performing a calculation.
    operator: null, // +, -, /, or *
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
        addDigits();
        return;
    }

    if (target.classList.contains('minus')) {
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

// Handles clearing the display when the all clear button is clicked.
function allClear() {
    calculator.displayValue = "0";
    updateDisplay();
}



