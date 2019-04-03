// Given five positive integers, find the minimum and maximum values
// that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as
// a single line of two space-separated long integers.

// Sample input
const nums = [1, 5, 3, 2, 4];

// Expected output
// 10 14

//

//

function miniMaxSum(arr) {
  // Find the total of all numbers in the array.
  let total = 0;
  arr.forEach(n => (total += n));

  // Sort the array so we can easily remove the lowest and highest nums.
  const sorted = arr.sort((a, b) => a - b);
  const max = total - sorted.shift();
  const min = total - sorted.pop();

  console.log(min, max);
}

miniMaxSum(nums);
