const nums = [12, 1012];

function findDigits(n) {
  let count = 0;
  const numAsString = n.toString();

  for (let i = 0; i < numAsString.length; i++) {
    let remainder = n % numAsString[i];
    if (remainder === 0) count++;
  }

  console.log(count); // this is here just so we can see the return value in the console.
  return count;
}

nums.forEach(num => findDigits(num));
