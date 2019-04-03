//
const matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// Expected output
// 15

//

//

function diagonalDifference(arr) {
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < arr.length; i++) {
    d1 += arr[i][i];
    d2 += arr[i][arr.length - 1 - i];
  }

  return Math.abs(d1 - d2);
}

console.log(diagonalDifference(matrix));
