const k1 = [0, 3, 4, 2]; // YES
const k2 = [0, 2, 5, 3]; // NO

function kangaroo(x1, v1, x2, v2) {
  // console.log(x1, v1, x2, v2);
  // if (x2 > x1 && v2 > v1) return 'NO';

  let runLoop = true;
  let i = 2;
  while (runLoop) {
    let pos1 = x1 + v1 * i;
    let pos2 = x2 + v2 * i;
    // console.log(pos1, pos2);
    if (pos1 === pos2) runLoop = false;
    console.log(Math.abs(pos1 - pos2));
    // if (Math.abs(pos1 - pos2) > Math.abs(pos1 + 1 - (pos2 + 1))) return 'NO';
    i++;
  }

  if (runLoop === false) return 'YES';
  // 3*2+0, 3*3+0, 3*4+0, 3*5+0
}

// console.log(kangaroo(...k1));
console.log(kangaroo(...k2));
// kangaroo(...k1);
// kangaroo(...k2);
