// Sample input
const s0 = "AAAA";
const s1 = "BBBBB";
const s2 = "ABABABAB";
const s3 = "BABABA";
const s4 = "AAABBB";

// Expected output
// 3
// 4
// 0
// 0
// 4

//

//

function alternatingCharacters(s) {
  let deleteChar = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) deleteChar++;
  }

  return deleteChar;
}

console.log(alternatingCharacters(s0));
console.log(alternatingCharacters(s1));
console.log(alternatingCharacters(s2));
console.log(alternatingCharacters(s3));
console.log(alternatingCharacters(s4));
