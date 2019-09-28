const arr0 = [3, -7, 0];
// Expected output: 3
const arr1 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
// Expected output: 1
const arr2 = [1, -3, 71, 68, 17];
// Expected output: 3

function minimumAbsoluteDifference(arr) {
  let min;

  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    const currentDiff = Math.abs(arr[i + 1] - arr[i]);
    if (min === undefined || currentDiff < min) min = currentDiff;
    if (min === 0) return 0;
  }

  return min;
}

console.log(minimumAbsoluteDifference(arr1));
