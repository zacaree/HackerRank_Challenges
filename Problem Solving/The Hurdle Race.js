// Sample Input
const initialHeight_1 = 4;
const hurdleHeights_1 = [1, 6, 3, 5, 2];
// Expected Output: 2

// Sample Input
const initialHeight_2 = 7;
const hurdleHeights_2 = [2, 5, 4, 5, 2];
// Expected Output: 0

function hurdleRace(k, height) {
  const tallestHurdle = Math.max(...height);
  return tallestHurdle > k ? tallestHurdle - k : 0;
}

console.log(hurdleRace(initialHeight_1, hurdleHeights_1));
console.log(hurdleRace(initialHeight_2, hurdleHeights_2));
