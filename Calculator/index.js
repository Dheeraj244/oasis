const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

const calculate = (btnValue) => {
  // display.focus();
  
  switch (btnValue) {
    case "=":
      output = eval(output.replace("%", "/100"));
      break;
    case "AC":
      output = "";
      break;
    case "DEL":
      output = output.slice(0, -1);
      break;
    default:
      if (output === "" && ["%", "*", "/", "-", "+"].includes(btnValue)) return;
      output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
