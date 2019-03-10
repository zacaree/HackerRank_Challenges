// Return the second largest number in the given array.
const numsArray = [7, 3, 6, 6, 5, 9, 3, 1, 2, 13];

function getSecondLargest(nums) {
  // Put nums in a set because sets weed out duplicate values.
  // Then make it an array so we can use array methods on it.
  let numbers = Array.from(new Set(nums));
  // Bubble sort the set in descending order.
  numbers.sort((a, b) => b - a);
  // Return the second item in the array which will be the second largest number.
  return numbers[1];
}

console.log(getSecondLargest(numsArray));
