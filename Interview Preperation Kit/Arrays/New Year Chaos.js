// Test 0
const q0 = [[2, 1, 5, 3, 4], [2, 5, 1, 3, 4]];
// Expected output:
// 3
// Too chaotic

// Test 1
const q0 = [[5, 1, 2, 3, 7, 8, 6, 4], [1, 2, 5, 3, 7, 8, 6, 4]];
// Expected output:
// 3
// Too chaotic

// Test 2
const q0 = [1, 2, 5, 3, 4, 7, 8, 6];
// Expected output:
// 4

//

//

function minimumBribes(q) {
  let count = 0;
  for (let i = 1; i <= q.length; i++) {
    if (q[i - 1] === i) {
      console.log("👍");
    } else if (q[i - 1] === i + 1) {
      count++;
      i = i += 1;
    } else if (q[i - 1] === i + 2) {
      count += 2;
      i = i += 2;
    } else {
      count = "Too chaotic";
    }
  }
  return count;
}

console.log(minimumBribes(q0));
console.log(minimumBribes(q1));
