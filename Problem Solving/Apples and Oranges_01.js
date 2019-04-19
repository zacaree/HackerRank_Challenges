// This one failed the tests.

// Sample input
const s = 7; // houseCornerLeft
const t = 11; // houseCornerRight
const a = 5; // appleTreePos
const b = 15; // orangeTreePos
const apples = [-2, 2, 1];
const oranges = [5, -6];

// Expected output
// 1
// 1

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let apCount = 0;
  let orCount = 0;

  for (const ap of apples) {
    const near = s - a;
    const far = t - a;
    if (ap >= near && ap <= far) apCount++;
  }

  for (const or of oranges) {
    const far = b - s;
    const near = b - t;
    if (or <= far && or >= near) orCount++;
  }

  console.log(apCount);
  console.log(orCount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
