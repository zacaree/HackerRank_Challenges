// Challenge
// First, print each vowel in  on a new line (in the same order as they appeared in ).
// Second, print each consonant (i.e., non-vowel) in on a new line (in the same order as they appeared in ).

function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let isVowel = [];
  let isConsonant = [];
  s.split("").forEach(char => {
    vowels.includes(char) ? isVowel.push(char) : isConsonant.push(char);
  });
  function printArray(arr) {
    arr.forEach(char => console.log(char));
  }
  printArray(isVowel);
  printArray(isConsonant);
}

vowelsAndConsonants("javascriptloops");
