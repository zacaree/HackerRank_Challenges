/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

numbers = [1, 20, -2, 7, 4, 8, 0, 12];

function isPositive(a) {
  try {
    if (a < 0) {
      console.log("Negative Error");
      throw Error("Negative Error");
    } else if (a === 0) {
      console.log("Zero Error");
      throw Error("Zero Error");
    } else {
      console.log("YES");
      return "YES";
    }
  } catch (err) {
    return err.message;
  }
}

numbers.forEach(num => isPositive(num));
