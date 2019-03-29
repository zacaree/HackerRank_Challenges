// Test 0
const q0a = [2, 1, 5, 3, 4];
const q0b = [2, 5, 1, 3, 4];
// const  = [1, 4, 0, 2, 3];
// Expected output:
// 3
// Too chaotic

// Test 1
const q1a = [5, 1, 2, 3, 7, 8, 6, 4];
const q1b = [1, 2, 5, 3, 7, 8, 6, 4];
// Expected output:
// Too chaotic
// 7

// Test 2
const q2a = [1, 2, 5, 3, 4, 7, 8, 6];
// Expected output:
// 4

//

//

// The key:
// For each person `line[i]`, determine how many numbers
// to the right of this person are less than this person `line[i]`.

function minimumBribes(q) {
  let bribes = 0;

  // reduce each int by 1 making it easier to match up with i.
  const line = q.map(p => p - 1);

  for (let i = 0; i < line.length; i++) {
    if (line[i] > i + 2) {
      return "Too chaotic";
    } else {
      // Only make comparisons with numbers that occur to the right of i.
      for (let j = i + 1; j < line.length; j++) {
        if (line[i] > line[j]) bribes++;
      }
    }
  }

  return bribes;
}

console.log(minimumBribes(q0a));
console.log(minimumBribes(q0b));
console.log(minimumBribes(q1a));
console.log(minimumBribes(q1b));
console.log(minimumBribes(q2a));
