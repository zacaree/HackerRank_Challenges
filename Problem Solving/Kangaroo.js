const k1 = [0, 3, 4, 2]; // YES
const k2 = [0, 2, 5, 3]; // NO
const k3 = [43, 2, 70, 2]; // NO
const k4 = [2564, 5393, 5121, 2836]; // YES // My algorithm answered NO... why?

function kangaroo(x1, v1, x2, v2) {
  let i = 2;
  while (true) {
    let p1 = x1 + v1 * i; // p = position
    let p2 = x2 + v2 * i;

    let nextP1 = x1 + v1 * (i + 1);
    let nextP2 = x2 + v2 * (i + 1);

    console.log('--------------------');
    console.log(Math.abs(p1 - p2));
    console.log(Math.abs(nextP1 - nextP2));
    console.log('--------------------');

    if (p1 === p2) return 'YES';
    if (Math.abs(p1 - p2) <= Math.abs(nextP1 - nextP2)) return 'NO';

    i++;
  }
}

// console.log(kangaroo(...k1));
// console.log(kangaroo(...k2));
// console.log(kangaroo(...k3));
console.log(kangaroo(...k4));
// kangaroo(...k1);
// kangaroo(...k2);
