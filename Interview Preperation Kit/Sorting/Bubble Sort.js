//
// Sample inputs:
const arr0 = [3, 2, 1];
const arr1 = [4, 2, 3, 1];

//

//

function countSwaps(a) {
  let swaps = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        // Using es6 array destructuring to swap elements
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log("First Element:", a[0]);
  console.log("Last Element:", a[a.length - 1]);
  console.log("----------");
}

countSwaps(arr0);
countSwaps(arr1);
