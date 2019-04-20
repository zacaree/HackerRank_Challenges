// If Brian did not overcharge Anna, print Bon Appetit on a new line;
// otherwise, print the difference that Brian must refund to Anna.

// Sample input
const k_1 = 1; // Index of item Anna didn't eat.
const bill_1 = [3, 10, 2, 9]; // Cost of each item ordered.
const charged_1 = 12; // Amount Brian charged Anna.
// Expected output
// 5

// Sample input
const k_2 = 1; // Index of item Anna didn't eat.
const bill_2 = [3, 10, 2, 9]; // Cost of each item ordered.
const charged_2 = 7; // Amount Brian charged Anna.
// Expected output
// "Bon Appetit"

function bonAppetit(bill, k, b) {
  const totalBill = bill.reduce((prev, next) => prev + next);
  const annaOwes = (totalBill - bill[k]) / 2;
  if (annaOwes === b) console.log('Bon Appetit');
  // Math.abs() is great because either way, b - anna or anna - b,
  // it returns the same positive number
  else console.log(Math.abs(b - annaOwes));
}

bonAppetit(bill_1, k_1, charged_1);
bonAppetit(bill_2, k_2, charged_2);
