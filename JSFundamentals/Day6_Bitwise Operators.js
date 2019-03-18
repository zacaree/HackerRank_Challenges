const q = ["5 2", "8 5", "2 2"];

function getMaxLessThanK(n, k) {
  let maxResult = 0;
  // n is an integer.
  // Iterate through a sequence of numbers starting at 1
  // counting up to the given integer.
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if ((i & j) > maxResult && (i & j) < k) {
        maxResult = i & j;
      }
    }
  }
  console.log(maxResult); // Just to see the result in the console.
  return maxResult;
}

q.forEach(set => {
  [n, k] = set.split(" "); // Destructuring what is split into variables n and k.
  getMaxLessThanK(n, k);
});
