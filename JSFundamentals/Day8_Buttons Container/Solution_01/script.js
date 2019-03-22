const btns = document.getElementById("btns");

// Will contain all buttons except #5
let btnsArr = [];

// Generate buttons
[...Array(9)].forEach((item, i) => {
  const btn = document.createElement("button");
  btn.innerHTML = i + 1;
  btn.id = `btn${i + 1}`;
  btn.classList.add("btn");
  btns.appendChild(btn);
  if (btn.id !== "btn5") {
    btnsArr.push(btn);
  }
});

function cycleNums() {
  btnsArr.forEach(b => {
    if (b.innerHTML == 1) {
      b.innerHTML = 4;
    } else if (b.innerHTML == 4) {
      b.innerHTML = 7;
    } else if (b.innerHTML == 6) {
      b.innerHTML = 3;
    } else if (b.innerHTML == 9) {
      b.innerHTML = 6;
    } else if (b.innerHTML == 2 || b.innerHTML == 3) {
      b.innerHTML = parseInt(b.innerHTML) - 1;
    } else {
      b.innerHTML = parseInt(b.innerHTML) + 1;
    }
  });
}

btn5.addEventListener("click", cycleNums);
