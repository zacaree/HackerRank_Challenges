// The Challenge
// Given two strings, a and b, that may or may not be of the same length,
// determine the minimum number of character deletions required to make a and b anagrams.

const a1 = "cde";
const b1 = "abc";
// Expected output
// 4

const a2 = "fcrxzwscanmligyxyvym";
const b2 = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";
// Expected output
// 30

const a3 = "showman";
const b3 = "woman";
// Expected output
// 2

//

//

function makeAnagram(a, b) {
  let A = [...a];
  let B = [...b];
  let matches = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        matches.push(B.splice(j, 1).join());
        break;
      }
    }
  }

  return [...a, ...b].length - matches.length * 2;
}

console.log(makeAnagram(a1, b1));
console.log(makeAnagram(a2, b2));
console.log(makeAnagram(a3, b3));
