const res = document.getElementById("res");
const btns = [...document.querySelectorAll("button")];

let memory = 0;
let currentExp = "";

function action(e) {
  let pressed = document.getElementById(e.target.id);
  if (pressed.id === "btn1") {
    currentExp += "1";
    res.innerHTML = currentExp;
  }
  if (pressed.id === "btnSum") {
    currentExp += "+";
    res.innerHTML = currentExp;
  }
  if (pressed.id === "btnEql") {
    currentExp = eval(currentExp);
    res.innerHTML = currentExp;
  }
}

btns.forEach(btn => btn.addEventListener("click", action));
