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
const numberButtons = document.querySelectorAll(".calculator-btns button");
const displayDiv = document.querySelector("#output");
const previousDisplayDiv = document.querySelector("#output-previous");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    displayValue += String(button.id);
    displayDiv.textContent = displayValue;
  })
);
