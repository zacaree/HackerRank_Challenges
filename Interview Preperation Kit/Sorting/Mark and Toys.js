const budget = 50;
const toyPrices = [1, 12, 5, 111, 200, 1000, 10];

function maximumToys(prices, k) {
  let toyCount = 0;
  let totalPrice = 0;

  const sortedToys = prices.sort((a, b) => a - b);

  for (let i = 0; i < prices.length; i++) {
    if (sortedToys[i] + totalPrice < k) {
      totalPrice += sortedToys[i];
      toyCount++;
    } else break;
  }

  return toyCount;
}

console.log(maximumToys(toyPrices, budget));
