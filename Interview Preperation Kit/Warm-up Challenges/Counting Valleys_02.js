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

  s.forEach(step => {
    // If we're just below sea level and the next step is uphill, add to count.
    if (pos === -1 && step === "U") count++;
    // Ternary. If uphill add to position otherwise decrement.
    step === "U" ? pos++ : pos--;
  });

  console.log(pos, count);
  return count;
}

countingValleys(steps);
