let memory = 0;
let currentExp;

function action(e) {
  let pressed = document.getElementById(e.target.id);
  if (pressed.id === "btn1") currentExp.innerHTML += 1;
  if (pressed.id === "btnSum") currentExp.innerHTML += "+";
  if (pressed.id === "btnEql") evaluate(currentExp);
}

const btns = [...document.querySelectorAll("button")];
btns.forEach(btn => btn.addEventListener("click", action));

function evaluate(exp) {
  return eval(exp);
}

// document.getElementById("btn0").addEventListener("click", action);
