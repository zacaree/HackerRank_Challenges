// Sample input
const num0 = 6;
const num1 = 18;

function staircase(n) {
  let str = "";

  // Fill str with n spaces.
  for (let i = 0; i < n; i++) str += " ";

  // For n, remove 1st char and add hash to end of str.
  for (let i = 0; i < n; i++) {
    str = str.slice(1, n);
    str += "#";
    console.log(str);
  }
}

staircase(num1);
