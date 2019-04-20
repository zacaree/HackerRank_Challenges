// Sample input
const s1 = [1, 2, 1, 3, 2];
const [d1, m1] = [3, 2];
// Expected output
// 2

function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = i; j < m + i; j++) {
      sum += s[j];
    }
    if (sum === d) count++;
  }

  return count;
}

console.log(birthday(s1, d1, m1));
