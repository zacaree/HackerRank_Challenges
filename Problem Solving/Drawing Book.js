// Print an integer denoting the minimum number of pages Brie must turn to get to page p.
// She may start at the beginning or the end of the book,
// turning one page at a time.

// Sample Input
const [n1, p1] = [6, 2]; // n number of pgs in book. p page to turn to.
// Expected output
// 1

// Sample Input
const [n2, p2] = [5, 4]; // n number of pgs in book. p page to turn to.
// Expected output
// 0

function pageCount(n, p) {}

pageCount(n1, p1);
// pageCount(n2, p2);

// ---------------------
// Observations

// evens are always on the left
// 1, 2 3, 4 5, 6

// *
// could we just count by odds in either direction?
// each count would be a page turn.
// each step we'd evaluate whether the target num is still higher or lower.
// *

// ---------------------
// Moving forward ↓ ↓ ↓

// evens
// pg6 / 2 = 3
// 3 + 1 = num of pages forward

// odds
// pg5 / 2 = 2.5
// 2.5 rounded up is 3
// 3 is the number of pages forward

// ---------------------
// Moving backward ↓ ↓ ↓

// if last num in array is even, the next num going back will be a page turn.
