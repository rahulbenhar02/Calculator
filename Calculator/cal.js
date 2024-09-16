let displayValue = '0';
let operator = '';
let firstOperand = '';
let awaitingNextOperand = false;

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
  if (awaitingNextOperand) {
    displayValue = number.toString();
    awaitingNextOperand = false;
  } else {
    displayValue = displayValue === '0' ? number.toString() : displayValue + number;
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== '') {
    calculate();
  }
  operator = op;
  firstOperand = displayValue;
  awaitingNextOperand = true;
}

function calculate() {
  let result;
  const secondOperand = displayValue;
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  }

  displayValue = result.toString();
  operator = '';
  awaitingNextOperand = true;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = '';
  awaitingNextOperand = false;
  updateDisplay();
}

updateDisplay();
