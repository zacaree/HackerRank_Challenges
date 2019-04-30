// This works for some but not all test cases.
// It's timing out for some cases.

// Each array below contains nums representing the following in this order.
// n = Number of prisoners
// m = Number of treats
// s = Number of the starting chair

const case1 = [5, 2, 1];
// 2

const case2 = [5, 2, 2];
// 3

const case3 = [7, 19, 2];
// 6

const case4 = [3, 7, 3];
// 3

function saveThePrisoner(n, m, s) {
  let current = s;

  for (let i = 1; i < m; i++) {
    current === n ? (current = 1) : (current += 1);
  }

  console.log(current);
}

saveThePrisoner(...case1);
saveThePrisoner(...case2);
saveThePrisoner(...case3);
saveThePrisoner(...case4);
