// Two cats and a mouse are at various positions on a line.
// Determine which cat will reach the mouse first,
// assuming the mouse doesn't move and the cats travel at equal speed.
// If the cats arrive at the same time, the mouse will
// be allowed to move and will escape while they fight.

// Sample input
const [x1, y1, z1] = [1, 2, 3]; // Cat A, Cat B, Mouse C
// Expected output: Cat B

// Sample input
const [x2, y2, z2] = [1, 3, 2]; // Cat A, Cat B, Mouse C
// Expected output: Mouse C

function catAndMouse(x, y, z) {
  const distBetweenCats = Math.abs(x - y);
  const distFromMouse = x - z;
  console.log(distBetweenCats);
  console.log(distFromMouse);
}

// console.log(catAndMouse(x1, y1, z1));
// console.log(catAndMouse(x2, y2, z2));
catAndMouse(x1, y1, z1);
catAndMouse(x2, y2, z2);
