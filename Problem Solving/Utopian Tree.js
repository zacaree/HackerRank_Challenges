// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring.
// How tall will her tree be after a given number of growth cycles?

// Sample Input
const growthCycles_1 = [0, 1, 4];
// Expected Output: 1 2 7

function utopianTree(n) {
  let height = 1;
  for (let i = 1; i <= n; i++) {
    i % 2 ? (height *= 2) : (height += 1);
  }
  return height;
}

for (const cycle of growthCycles_1) utopianTree(cycle);
