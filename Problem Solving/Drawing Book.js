// Print an integer denoting the minimum number of pages Brie must turn to get to the target page.
// She may start at the beginning or the end of the book, turning one page at a time.

// Sample Input
const [n1, p1] = [6, 2]; // n number of pgs in book. p page to turn to.
// Expected output
// 1

// Sample Input
const [n2, p2] = [5, 4]; // n number of pgs in book. p page to turn to.
// Expected output
// 0

// Sample Input
const [n3, p3] = [6, 5]; // n number of pgs in book. p page to turn to.
// Expected output
// 1

function pageCount(n, p) {
  const [pages, target] = [n, p];

  const fromBeginning = Math.floor(target / 2);
  let fromEnd = Math.floor((pages - target) / 2);

  if (pages % 2 === 0 && pages - target === 1) fromEnd++;

  return fromBeginning < fromEnd ? fromBeginning : fromEnd;
}

console.log(pageCount(n1, p1));
console.log(pageCount(n2, p2));
console.log(pageCount(n3, p3));
