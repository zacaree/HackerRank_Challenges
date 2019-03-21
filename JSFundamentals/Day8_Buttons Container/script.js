const btns = document.getElementById("btns");

// Generate buttons
[...Array(9)].forEach((item, i) => {
  const btn = document.createElement("button");
  btn.innerHTML = i + 1;
  btn.id = `btn${i + 1}`;
  btn.classList.add("btn");
  btns.appendChild(btn);
});
