// Test 0
const q0 = [2, 1, 5, 3, 4];

// Test 1
const q1 = [2, 5, 1, 3, 4];

//

//

function minimumBribes(q) {
  for (let i = 1; i <= q.length; i++) {
    if (q[i] === i) {
      console.log("👍");
    } else if (i - q[i]) {
      // wip - check this
    }
  }
}

console.log(minimumBribes(q0));
// console.log(minimumBribes(q1));
