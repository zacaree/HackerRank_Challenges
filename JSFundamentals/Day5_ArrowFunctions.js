// Modify and return the given array so that all even numbers are doubled
// and all odd numbers are tripled.

const numbers = [1, 2, 3, 4, 5];

function modifyArray(nums) {
  return nums.map(n => (n % 2 ? n * 3 : n * 2));
}

console.log(modifyArray(numbers));
