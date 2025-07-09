// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

function updateDisplay() {
  display.value = currentInput || "0";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.key;

    if (key === "C") {
      currentInput = "";
    } else if (key === "←") {
      currentInput = currentInput.slice(0, -1);
    } else if (key === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      currentInput += key;
    }

    updateDisplay();
  });
});

document.addEventListener("keydown", (e) => {
  const allowed = "0123456789/*-+.=EnterBackspace";
  if (!allowed.includes(e.key)) return;

  if (e.key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (e.key === "=") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else {
    currentInput += e.key;
  }

  updateDisplay();
});

updateDisplay();
