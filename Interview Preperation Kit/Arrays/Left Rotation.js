// Given an array a of n integers and a number, d, perform d left rotations on the array.
// Return the updated array to be printed as a single line of space-separated integers.

const a = [1, 2, 3, 4, 5]; // Array of integers
const d = 4; // The number of rotations

function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    // shift removes and returns the first item in the array.
    // push adds the given item to the end of the array.
    a.push(a.shift());
  }
  return a;
}

console.log(rotLeft(a, d));
