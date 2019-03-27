// Test 0
// Expected output: 19
const arr0 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

// Test 1
// Expected output: 13
const arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

// Test 2
// Expected output: 28
const arr2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

function hourglassSum(arr) {
  let sums = [];

  // Step through arrays in an hourglass pattern,
  // pushing values to sums as you go.
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      let top = arr[c][r] + arr[c][r + 1] + arr[c][r + 2];
      let mid = arr[c + 1][r + 1];
      let bot = arr[c + 2][r] + arr[c + 2][r + 1] + arr[c + 2][r + 2];
      sums.push(top + mid + bot);
    }
  }

  // return the highest value in sums.
  return sums.sort((a, b) => a - b).pop();
}

console.log(hourglassSum(arr0));
console.log(hourglassSum(arr1));
console.log(hourglassSum(arr2));
