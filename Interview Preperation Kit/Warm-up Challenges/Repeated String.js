const s1 = "aba";
const n1 = 10;
const s2 = "a";
const n2 = 1000000000000;

// 👇  Works with s1 👇

// function repeatedString(s, n) {
//   let count = 0;
//   let pattern = s.split("");
//   let charArr = [];

//   for (let i = 0; i < n; i++) {
//     charArr.push(pattern.shift());
//     if (pattern.length === 0) pattern = s.split("");
//   }

//   charArr.forEach(char => {
//     if (char === "a") count++;
//   });

//   return count;
// }

// console.log(repeatedString(s1, n1));

//

//

//

// 👇  Build for s2 👇

// So the problem here is it takes too long to loop through n
// Need to find a mathmatical way to solve...
function repeatedString(s, n) {
  let count = 0;
  let pattern = [...s];
  let charArr = [];

  // console.log(pattern);

  for (let i = 0; i < n; i++) {
    console.log(pattern);
    charArr.push(pattern.shift());
    console.log(pattern);
    if (pattern.length === 0) pattern = [...s];
    console.log(pattern);
  }

  // charArr.forEach(char => {
  //   if (char === "a") count++;
  // });

  // return count;
}

console.log(repeatedString(s2, n2));
