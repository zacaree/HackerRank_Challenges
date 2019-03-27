// Initial test
const s1 = "aba";
const n1 = 10;

// Huge n
const s2 = "a";
const n2 = 1000000000000;

// No target letters in string
const s3 = "bcd";
const n3 = 15;

// This solution passes all HackerRank tests in O(n);
function repeatedString(s, n) {
  const findTargetChars = string => {
    const matches = string.match(/a/g);
    return matches ? matches.length : 0;
  };

  // How many times does s fit into n?
  const wholeStringsInN = Math.floor(n / s.length);
  // How many "a"s are in s? Multiply that by the number of whole strings in n.
  const targetCharsInWhole = findTargetChars(s) * wholeStringsInN;

  // What part of the string gets chopped off to fit in n?
  const remainder = n % s.length;
  let remainingString;
  let targetCharsInRem = 0;

  if (remainder) {
    remainingString = s.substring(0, remainder);
    // How many "a"s appear in the remaining string?
    targetCharsInRem = findTargetChars(remainingString);
  }

  // Add the two together and return the value.
  return targetCharsInWhole + targetCharsInRem;
}

console.log(repeatedString(s1, n1));
console.log(repeatedString(s2, n2));
console.log(repeatedString(s3, n3));
