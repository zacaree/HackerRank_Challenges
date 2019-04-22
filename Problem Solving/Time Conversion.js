// Convert the given 12 hour time format to a 24 hour time format.

// Sample input
const time1 = '07:05:45PM';
// Expected output
// 19:05:45

// Sample input
const time2 = '07:05:45AM';
// Expected output
// 07:05:45

// Sample input
const time3 = '12:05:45AM';
// Expected output
// 00:05:45

// Sample input
const time4 = '12:45:54PM';
// Expected output
// 12:45:54

function timeConversion(s) {
  s = s.split(':');
  if (s[2].includes('PM') && s[0] != '12') s[0] = parseInt(s[0]) + 12;
  if (s[2].includes('AM') && s[0] == '12') s[0] = '00';
  s = s.join(':');

  return s.substring(0, 8);
}

console.log(timeConversion(time1));
console.log(timeConversion(time2));
console.log(timeConversion(time3));
console.log(timeConversion(time4));
