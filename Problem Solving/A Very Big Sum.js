function aVeryBigSum(ar) {
  let sum = 0;
  ar.forEach(num => (sum += num));
  return sum;
}

const nums = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(nums));
