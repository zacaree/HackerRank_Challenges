// Test 0
const q0 = [2, 1, 5, 3, 4];

// Test 1
const q1 = [2, 5, 1, 3, 4];

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
