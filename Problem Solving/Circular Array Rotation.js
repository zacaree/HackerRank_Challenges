// 3 2 3
// 3 nums
// 2 rotations
// 3 queries
const nums = [1, 2, 3];
const rotationCount = 2;
const queries = [0, 1, 2]; // After the rotation, what's in position 0? position 1? position 2?

function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) a.unshift(a.pop());
  queries.forEach(query => console.log(a[query]));
}

circularArrayRotation(nums, rotationCount, queries);
