// Sample input 1
const a1 = [2, 4];
const b1 = [16, 32, 96];
// Expected output
// 3

// Sample input 2
const a2 = [3, 4];
const b2 = [24, 48];
// Expected output
// 2

function getTotalX(a, b) {
  // Here we sort the 2 arrays so we can easily grab the high and low values.
  const A = a.sort((a, b) => a - b);
  const B = b.sort((a, b) => a - b);
  const highA = A.slice(-1).pop();
  const lowB = B.slice(0, 1).pop();

  // Here we build a range of possible values between highA and lowB.
  let range = [];
  range.push(highA);
  for (let i = highA * 2; i <= lowB / 2; i++) range.push(i);
  range.push(lowB);

  // Here we test against the first array and remove impossible values
  // from the range array.
  for (const int of a) {
    for (let i = 0; i < range.length; i++) {
      if (range[0] % int) {
        range.shift();
        i--;
      } else range.push(range.shift());
    }
  }

  // Here we test against the second array and remove impossible values
  // from the range array.
  for (const int of b) {
    for (let i = 0; i < range.length; i++) {
      if (int % range[0]) {
        range.shift();
        i--;
      } else range.push(range.shift());
    }
  }

  // Here we output the number of values left in range.
  return range.length;
}

console.log(getTotalX(a1, b1));
console.log(getTotalX(a2, b2));
