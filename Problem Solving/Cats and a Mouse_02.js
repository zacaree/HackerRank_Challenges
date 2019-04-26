// HackerRank – Cats and a Mouse

// Two cats and a mouse are at various positions on a line.
// Determine which cat will reach the mouse first,
// assuming the mouse doesn't move and the cats travel at equal speed.
// If the cats arrive at the same time, the mouse will escape while they fight.

const [a, b, m] = [1, 2, 3]; // Cat A, Cat B, Mouse
// Expected output: Cat B

function catAndMouse(a, b, m) {
  const [aFromMouse, bFromMouse] = [Math.abs(a - m), Math.abs(b - m)];
  if (aFromMouse === bFromMouse) return 'Mouse Escapes!';
  return aFromMouse < bFromMouse ? 'Cat A' : 'Cat B';
}

console.log(catAndMouse(a, b, m));
