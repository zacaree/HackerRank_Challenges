// Modify and return the array so that all even elements are doubled
// and all odd elements are tripled.

const numbers = [1, 2, 3, 4, 5];

function modifyArray(nums) {
  return nums.map(n => (n % 2 ? n * 3 : n * 2));
}

console.log(modifyArray(numbers));
