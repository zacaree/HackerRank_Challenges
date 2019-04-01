// Sample input
const nums = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  arr.forEach(num => {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    } else zero++;
  });

  [pos, neg, zero].forEach(num => console.log((num / arr.length).toFixed(6)));
}

plusMinus(nums);
