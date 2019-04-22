// Monica wants to buy a keyboard and a USB drive.
// She wants to spend as much as possible within her budget.
// Print either the highest possible total
// or print -1 if her budget won't allow her to purchase both items.

// Sample input
const budget1 = 10;
const keyboardPrices1 = [3, 1];
const usbDrivePrices1 = [5, 2, 8];
// Expected output
// 9

// Sample input
const budget2 = 5;
const keyboardPrices2 = [4];
const usbDrivePrices2 = [5];
// Expected output
// We print -1 because there is no way to buy a keyboard and USB drive given her budget.

function getMoneySpent(keyboards, drives, budget) {
  let total = 0;

  for (const k of keyboards) {
    for (const d of drives) {
      let sum = k + d;
      if (sum > total && sum <= budget) total = sum;
    }
  }

  return total > 0 ? total : -1;
}

console.log(getMoneySpent(keyboardPrices1, usbDrivePrices1, budget1));
console.log(getMoneySpent(keyboardPrices2, usbDrivePrices2, budget2));
