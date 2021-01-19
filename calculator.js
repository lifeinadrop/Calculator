// Setup the calculator display.
const display = document.querySelector('.calculator-screen');

// Configure the keys of the calculator.
const keys = document.querySelector('.calculator-keys');

// Listen for a click event.
keys.addEventListener('click', (event) => {
    const target = event.target;
    const value = target.value;

    // possibly add a check to exit the function.
    if (!target.matches('button')) {
        return;
    }

    // Check which event value is used and handle appropriately. 
    switch (value) {
        case '-':
        case '+':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case '.':
            decimal(value);
            break;
        case 'all-clear':
            allClear();
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                inputNumber(value);
            }
        }

    updateDisplay();
});