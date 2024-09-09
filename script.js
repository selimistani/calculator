function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
}

// Populating Display with numbers

let displayValue = "";
let operator = "";
const buttons = document.querySelectorAll(".calculator-btns button");
const displayDiv = document.querySelector("#output");
const previousDisplayDiv = document.querySelector("#output-previous");
let num1 = NaN,
  num2 = NaN;

buttons.forEach((button) => {
  if (button.classList.contains("number")) {
    button.addEventListener("click", () => {
      displayValue += button.id;
      displayDiv.textContent = displayValue;
    });
  } else if (button.classList.contains("operator")) {
    button.addEventListener("click", () => {
      if (!num1) {
        num1 = displayValue;
        previousDisplayDiv.textContent = num1;
        displayValue = "";
        displayDiv.textContent = displayValue;
        operator = button.value;
      }
    });
  } else if (button.id === "=") {
    button.addEventListener("click", () => {
      if (num1 && operator) {
        previousDisplayDiv.textContent = "";
        num2 = displayValue;
        displayValue = operate(num1, num2, operator);
        displayDiv.textContent = displayValue;
      }
    });
  } else if (button.id === "C") {
    button.addEventListener("click", () => {
      (previousDisplayDiv.textContent = ""),
        (displayValue = ""),
        (displayDiv.textContent = "");
      (num1 = NaN), (num2 = NaN), (operate = NaN);
    });
  }
});
