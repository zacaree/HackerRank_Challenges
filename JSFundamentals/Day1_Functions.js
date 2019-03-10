// Implement a function named factorial that has one parameter: an integer, n.
// It must return the value of n! (i.e., n factorial).

function factorial(n) {
  let total = n;
  while (1 < n) {
    n = n - 1;
    total = total * n;
  }

  return total;
}

factorial(4);
