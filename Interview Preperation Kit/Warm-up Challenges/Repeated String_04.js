// Initial test
const s1 = "aba";
const n1 = 10;

// Huge n
const s2 = "a";
const n2 = 1000000000000;

// No target letters in string
const s3 = "bcd";
const n3 = 14;

//

//

// Further refined solution
function repeatedString(s, n) {
  const countChar = s => s.split("a").length - 1;

  const stringsInN = Math.floor(n / s.length);
  const remainder = s.slice(0, n % s.length);

  return stringsInN * countChar(s) + countChar(remainder);
}

console.log(repeatedString(s1, n1));
console.log(repeatedString(s2, n2));
console.log(repeatedString(s3, n3));
