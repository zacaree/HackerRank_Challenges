// These notes are based on this lecture:
// https://www.youtube.com/watch?v=RRyxCmLX_ag

// decimal | binary

let n = 10; // 1010
let i = 6; ///  110

// If you pass a number to the toString method this tells the method what base you're asking for.
// Do you want binary, do you want base 10, do you want base 16, etc?
// With that in mind, the logs below will return the binary values for 10 and 6. Cool!
console.log(n.toString(2));
console.log(i.toString(2));

// Bitwise AND operator &
console.log("Bitwise AND:", n & i);
// n = 1010 in binary
// i = 0110 in binary
// r = 0010 Result <- 2 in decimal
// This is the result of using the & operator between n and i above.
// & checks each column looking for columns where both are ones.
// If both are ones it results in a one for that place in the result.

// Bitwise OR operator |
console.log("Bitwise OR:", n | i);
// n = 1010 in binary
// i = 0110 in binary
// r = 1110 Result <- 14 in decimal
// When using the OR operator it checks to see if at least
// one number in a column is a one. If there is a one, it results in a one
// for that place in the result.

// Bitwise OR operator |
console.log(n | i);
// n = 1010 in binary
// i = 0110 in binary
// r = 1110 Result <-
// When using the OR operator it checks to see if at least
// one number in a column is a one. If there is a one, it results in a one
// for that place in the result.
