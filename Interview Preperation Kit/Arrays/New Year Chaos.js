// Test 0
const q0a = [2, 1, 5, 3, 4];
const q0b = [2, 5, 1, 3, 4];
// Expected output:
// 3
// Too chaotic

// Test 1
const q1a = [5, 1, 2, 3, 7, 8, 6, 4];
const q1b = [1, 2, 5, 3, 7, 8, 6, 4];
const aaa = [1, 2, 3, 4, 5, 6, 7, 8];
// Expected output:
// Too chaotic
// 7

// Test 2
const q2a = [1, 2, 5, 3, 4, 7, 8, 6];
// Expected output:
// 4

//

//

function minimumBribes(q) {
  let count = 0;

  // reduce each int by 1 making it easier to match up with i.
  const line = q.map(p => p - 1);

  for (let i = 0; i < line.length; i++) {
    if (line[i] > i + 2) {
      count = "Too chaotic";
    }
  }
  console.log(count);
}

minimumBribes(q0a);
minimumBribes(q0b);
minimumBribes(q1a);
minimumBribes(q1b);
