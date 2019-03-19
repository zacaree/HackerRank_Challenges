const n1 = "Dr.Pepper";
const n2 = "Mr.X";
const n3 = "Mrs.Y";
const n4 = "Ms. Y";

//  ^ => first item matches:
// () => stores matching value captured within
// | => Mr or Mrs or etc
// \. => backslash escapes the . so that . is read as a char
// [] => allows a range from a-z upper and lowercase
// + => there must be one or more of the preceding rule.
// / /In this case that means at least one char.
// $ ensures that matched item is at end of the sequence

const namePrefixTest = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;

console.log(namePrefixTest.test(n1));
console.log(namePrefixTest.test(n2));
console.log(namePrefixTest.test(n3));
console.log(namePrefixTest.test(n4));
