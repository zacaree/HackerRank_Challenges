// Given an array of integers, find and print the maximum number of integers
// you can select from the array such that the absolute difference
// between any two of the chosen integers is less than or equal to 1.

// Sample Input
const nums1 = [4, 6, 5, 3, 3, 1];
// const nums1 = [1, 3, 3, 4, 5, 6];
// Expected output
// 3

// Sample Input
const nums2 = [1, 2, 2, 3, 1, 2];
// Expected output
// 5

function pickingNumbers(a) {
  const s = a.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let current = 0;
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] - s[i] <= 1) current++;
    }
    if (current > max) max = current;
    current = 0;
  }

  return max + 1;
}

console.log(pickingNumbers(nums1));
console.log(pickingNumbers(nums2));
