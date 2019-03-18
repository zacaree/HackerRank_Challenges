const s1 = "adeogjsketa"; //True
const s2 = "adeogjskete"; //False

//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// * => for 0 or more occurrances
// \1 => matches to previously stored match.
////// \2 would look for matched item stored 2 instances ago
////// \3 would look for matched item stored 3 ago, etc
// $ ensures that matched item is at end of the sequence

const firstAndLast_SameVowel = /^([aeiou]).*\1$/;

console.log(firstAndLast_SameVowel.test(s1));
console.log(firstAndLast_SameVowel.test(s2));
