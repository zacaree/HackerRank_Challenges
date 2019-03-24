const nums = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  let sum = 0;
  ar.forEach(num => (sum += num));
  return sum;
}

console.log(simpleArraySum(nums));
