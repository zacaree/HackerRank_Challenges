// Work in progress!!!

const numsInSequence = [5, 8, 2];
const maxBitwiseAllowed = [2, 5, 2];

function getMaxLessThanK(n, k) {
  let maxResult = 0;
  // n is an integer.
  // Iterate through a sequence of numbers starting at 1
  // counting up to the given integer.
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if ((i & j) > maxResult && (i & j) < k) {
        maxResult = i & j;
      }
    }
  }
  return maxResult;
}

getMaxLessThanK();
