// Setup the calculator display.
const display = document.querySelector('.calculator-screen');

const calculator = {
    displayValue: '0', // Keep track of what should displayed on the screen.
    firstNumber: null, // Initialize the variable for the first number.
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
    
    inputNumber(target.value);
    handleOperator(target.value);
});

// Handles inputting digits. Write the digit pressed if the current number is 0 OR if there is already a number there.
function inputNumber(number) {
    const displayValue = calculator.displayValue;
    const waitingForSecondNumber = calculator.waitingForSecondNumber;

    if (waitingForSecondNumber === true) {
        calculator.displayValue = number;
        calculator.waitingForSecondNumber = false;
    }
    else {
        calculator.displayValue = displayValue == '0' ? number : displayValue + number;
    }
}

// Handles inputting a single decimal point per number (num1 & num2).
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
    calculator.waitingForSecondNumber = false;
    calculator.operator = null;
    updateDisplay();
}

// Handles when an operator button is clicked.
function handleOperator(nextOperator) {
    const firstNumber = calculator.firstNumber;
    const displayValue = calculator.displayValue;
    const operator = calculator.operator;

    // displayValue is a string, it needs to be a number with a decimal point.
    const firstValueAsFloat = parseFloat(displayValue);

    if (firstNumber === null) {
        if (!isNaN(firstValueAsFloat)) {
            calculator.firstNumber = firstValueAsFloat;
        }        
    }

    // Because an operator has been pushed, we are now waiting for the 2nd number so this property needs to be set to true.
    calculator.waitingForSecondNumber = true;
    calculator.operator = nextOperator;
}

// Handles the calculations for each operator.
// Needs to return a value.
function calculate(n1, operator, n2) {
    // Alter these to use the value of the HTML element, not a class.
    switch (operator) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
    }
}






