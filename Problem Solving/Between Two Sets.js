// Sample input
const a = [2, 4];
const b = [16, 32, 96];

// Expected output
// 3

function getTotalX(a, b) {
  const A = a.sort((a, b) => a - b);
  const B = b.sort((a, b) => a - b);

  const highA = A.slice(-1).pop();
  const lowB = B.slice(0, 1).pop();

  let range = [];
  for (let i = highA; i <= lowB; i++) {
    range.push(i);
  }

  for (const int of a) {
    for (let i = 0; i < range.length; i++) {
      if (range[i] % int) range.splice(i, 1);
    }
  }

  for (const int of b) {
    for (let i = 0; i < range.length; i++) {
      if (int % range[i]) range.splice(i, 1);
    }
  }

  return range.length;
}

getTotalX(a, b);
