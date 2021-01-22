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
    calculator.firstNumber = null;
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
    else if (operator) {
        const result = calculate(firstNumber, operator, firstValueAsFloat);
        calculator.displayValue = String(result);
        calculator.firstNumber = result;
    }

    // Because an operator has been pushed, it's now waiting for the 2nd number so this property needs to be set to true.
    calculator.waitingForSecondNumber = true;
    calculator.operator = nextOperator;
}

// Handles the calculations for each operator.
function calculate(n1, operator, n2) {
    switch (operator) {
        case '+': return n1 + n2
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n1 / n2;
    }

    return n2;
}