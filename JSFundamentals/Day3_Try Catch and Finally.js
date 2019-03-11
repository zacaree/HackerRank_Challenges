// Reverse a string and print it. Use a try, catch.
// If there's a problem, print the original input along with the error.

const string = "1234";
// const string = 1234; // This one will produce an error

function reverseString(s) {
  try {
    let reversedString = s
      .split("")
      .reverse()
      .join("");
    console.log(reversedString);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
}

reverseString(string);
