const arr0 = [3, -7, 0];
// Expected output: 3
const arr1 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
// Expected output: 1
const arr2 = [1, -3, 71, 68, 17];
// Expected output: 3

function minimumAbsoluteDifference(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentDiff = Math.abs(arr[i] - arr[j]);
      if (min === undefined || currentDiff < min) min = currentDiff;
    }
  }

  return min;
}

console.log(minimumAbsoluteDifference(arr2));
