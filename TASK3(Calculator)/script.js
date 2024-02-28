let input = document.getElementById("input-box");
let button = document.querySelectorAll("button");
let spclChars = ["+", "-", "*", "/", "=", "%"];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DE") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && spclChars.includes(btnValue)) return;
    output=output+btnValue
  }
  input.value = output;
};

button.forEach((btn) => {
  btn.addEventListener("click", (e) => calculate(e.target.value));
});
