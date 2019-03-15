// These notes are based on this lecture:
// https://www.youtube.com/watch?v=mesu75PTDC8

// Decimal System | Binary System
// 8 bits represent 1 byte of information
//  0 = 00000000
//  1 = 00000001
//  2 = 00000010  <-
//  3 = 00000011
//  4 = 00000100  <-
//  5 = 00000101
//  6 = 00000110
//  7 = 00000111
//  8 = 00001000  <-
//  9 = 00001001
// 10 = 00001010
// 11 = 00001011
// 12 = 00001100
// 13 = 00001101
// 14 = 00001110
// 15 = 00001111
// 16 = 00010000  <-

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

//

// Possible use case | Describing user access permissions
// Read, Write, Execute
// 00000100     User has permission to read
// 00000110     User has permission to write
// 00000111     User has permission to execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

let message = permissionType => (myPermission & permissionType ? "yes" : "no");

console.log(message(readPermission));
console.log(message(writePermission));
console.log(message(executePermission));
