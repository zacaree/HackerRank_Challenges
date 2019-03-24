const steps = [
  "U",
  "U",
  "D",
  "D",
  "D",
  "U",
  "U",
  "U",
  "U",
  "D",
  "D",
  "D",
  "U",
  "D",
  "D",
  "D",
  "U",
  "U",
  "U",
  "U",
  "U",
  "D",
  "D",
  "D",
  "D",
  "U"
];

function countingValleys(s) {
  let count = 0; // number of times to come out of a valley
  let pos = 0; // current position

  for (let i = 0; i < s.length; i++) {
    if (pos === -1 && s[i] === "U") {
      count++;
    }
    s[i] === "U" ? pos++ : pos--;
  }

  console.log(pos, count);
  return count;
}

countingValleys(steps);
