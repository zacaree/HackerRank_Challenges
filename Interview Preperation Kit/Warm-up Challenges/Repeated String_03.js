const s1 = "aba";
const n1 = 10;

const s2 = "a";
const n2 = 1000000000000;

// No target letters in string
const s3 = "bcd";
const n3 = 15;

// n is less than string
const s4 = "abcdefghijklmnopqrstuvwxyz";
const n4 = 6;

// n is less than string and target is not included
const s5 = "bcdefghijklmnopqrstuvwxyza";
const n5 = 6;

// Currently working to solve test 3
function repeatedString(s, n) {
  const findTargetChars = string => string.match(/a/g).length;

  const wholeStringsInN = Math.floor(n / s.length);
  const targetCharsInWhole = findTargetChars(s) * wholeStringsInN;

  const remainder = n % s.length;
  let remainingString;
  let targetCharsInRem = 0;

  if (remainder) {
    remainingString = s.substring(0, remainder);
    targetCharsInRem = findTargetChars(remainingString);
  }

  return targetCharsInWhole + targetCharsInRem;
}

console.log(repeatedString(s1, n1));
console.log(repeatedString(s2, n2));
console.log(repeatedString(s3, n3));
console.log(repeatedString(s4, n4));
console.log(repeatedString(s5, n5));
