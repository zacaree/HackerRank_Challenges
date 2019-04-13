// Sample input
const itemsInArr = 6;
const divBy = 3;
const nums = [1, 3, 2, 6, 1, 2];

// Expected output
// 5

function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (ar[i] < ar[j]) {
        if ((ar[i] + ar[j]) % k === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(divisibleSumPairs(itemsInArr, divBy, nums));
