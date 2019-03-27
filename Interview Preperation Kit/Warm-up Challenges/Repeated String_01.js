const s1 = "aba";
const n1 = 10;

const s2 = "a";
const n2 = 1000000000000;

// This was my first attempt at solving the problem.
// It works with the first set of inputs but doesn't scale
// to work with the second set. Because n2 is such a large number,
// using a loop in the algorithm causes tests to time out.

function repeatedString(s, n) {
  let count = 0;
  let pattern = s.split("");
  let charArr = [];

  for (let i = 0; i < n; i++) {
    charArr.push(pattern.shift());
    if (pattern.length === 0) pattern = s.split("");
  }

  charArr.forEach(char => {
    if (char === "a") count++;
  });

  return count;
}

console.log(repeatedString(s1, n1));
