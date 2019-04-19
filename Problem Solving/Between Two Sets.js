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
  const highB = B.slice(-1).pop();

  for (const int of a) {
    let matchA = [];
    for (let i = highA; i <= lowB; i++) {
      if (int % i)
        // console.log(i);
        // console.log(int);
        console.log(i);
    }
  }
}

getTotalX(a, b);
