// Setup the calculator display.
const display = document.querySelector('.calculator-screen');

const calculator = {
    displayValue: '0', // Keep track of what should displayed on the screen.
    firstNumber: null, // Initialize the variable for the first number.
    waitingForSecondNumber: false, // Set to false, will be set to true upon the first number and operator being input.
    operator: null, // +, -, /, or * (for now)
};

// Configure the keys of the calculator.
const keys = document.querySelector('.calculator-keys');