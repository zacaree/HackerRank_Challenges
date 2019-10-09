// Sample Input 0
const magazine_0 = ['give', 'me', 'one', 'grand', 'today', 'night'];
const note_0 = ['give', 'one', 'grand', 'today'];
// Sample Output 0
// Yes

// Sample Input 1
const magazine_1 = ['two', 'times', 'three', 'is', 'not', 'four'];
const note_1 = ['two', 'times', 'two', 'is', 'four'];
// Sample Output 1
// No --- Because 'two' only occurs once in the magazine.

// Sample Input 2
const magazine_2 = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
const note_2 = ['ive', 'got', 'some', 'coconuts'];
// Sample Output 2
// No --- Because Harold's magazine is missing the word 'some'.

function checkMagazine(magazine, note) {
  //
}

// console.log(checkMagazine(magazine_0, note_0));
console.log(checkMagazine(magazine_1, note_1));
// console.log(checkMagazine(magazine_2, note_2));
