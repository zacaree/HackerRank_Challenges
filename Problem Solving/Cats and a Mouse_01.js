// Two cats and a mouse are at various positions on a line.
// Determine which cat will reach the mouse first,
// assuming the mouse doesn't move and the cats travel at equal speed.
// If the cats arrive at the same time, the mouse will escape while they fight.

// Sample input
const [x1, y1, z1] = [1, 2, 3]; // Cat A, Cat B, Mouse C
// Expected output: Cat B

// Sample input
const [x2, y2, z2] = [1, 3, 2]; // Cat A, Cat B, Mouse C
// Expected output: Mouse C

function catAndMouse(x, y, z) {
  const xFromMouse = Math.abs(x - z);
  const yFromMouse = Math.abs(y - z);
  if (xFromMouse === yFromMouse) return 'Mouse C';
  return xFromMouse < yFromMouse ? 'Cat A' : 'Cat B';
}

console.log(catAndMouse(x1, y1, z1));
console.log(catAndMouse(x2, y2, z2));
// catAndMouse(x1, y1, z1);
// catAndMouse(x2, y2, z2);

// If both are negitive -1 is closer than -2
// If both are positive 1 is closer than 1
