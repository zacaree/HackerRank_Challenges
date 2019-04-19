// Sample input
const s = 2; // houseCornerLeft
const t = 3; // houseCornerRight
const a = 1; // appleTreePos
const b = 5; // orangeTreePos
const apples = [2];
const oranges = [-2];

// Expected output
// 1
// 1

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let apCount = 0;
  let orCount = 0;

  for (const ap of apples) {
    let pos = 0;
    if (ap > 0) {
      pos = a + ap;
    } else continue;
    if (pos >= s && pos <= t) apCount++;
  }

  for (const or of oranges) {
    let pos = 0;
    if (or < 0) {
      pos = b - Math.abs(or);
    } else continue;
    if (pos >= s && pos <= t) orCount++;
  }

  console.log(apCount);
  console.log(orCount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
