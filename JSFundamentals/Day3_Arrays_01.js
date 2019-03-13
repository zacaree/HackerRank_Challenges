// Return the second largest number in the given array.
const numsArray = [7, 3, 6, 6, 5, 9, 3, 1, 2, 13];

function getSecondLargest(nums) {
  let largest = 0;
  let second = 0;

  nums.forEach(num => {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  });

  return second;
}

console.log(getSecondLargest(numsArray));
