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
  if (num2 === 0) {
    return "undefined";
  }
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

let displayValue = "";
let operator = NaN;
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
      num1 = displayValue;
      if (num1 && !operator) {
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
        if (!num2) {
          displayValue = num1;
          displayDiv.textContent = displayValue;
        } else {
          displayValue = operate(num1, num2, operator);
          displayDiv.textContent = displayValue;
          (operator = NaN), (num2 = NaN), (num1 = displayValue);
        }
        if (displayDiv.textContent.length > 9) {
          displayDiv.textContent = displayValue.toFixed(9);
        }
      }
    });
  } else if (button.id === "C") {
    button.addEventListener("click", () => {
      (previousDisplayDiv.textContent = ""),
        (displayValue = ""),
        (displayDiv.textContent = "");
      (num1 = NaN), (num2 = NaN), (operate = NaN);
    });
  } else if (button.id === ".") {
    button.addEventListener("click", () => {
      if (displayValue.indexOf(".") < 0) {
        displayValue += ".";
        displayDiv.textContent = displayValue;
      }
    });
  }
});
