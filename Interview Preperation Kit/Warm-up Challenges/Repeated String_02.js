const s1 = "aba";
const n1 = 10;
const s2 = "a";
const n2 = 1000000000000;

// This is my second attempt to solve the problem.
// I discarded the loop and now have an O(n) solution.
// But there are still some HackerRank tests it isn't passing...
// Try again.

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
