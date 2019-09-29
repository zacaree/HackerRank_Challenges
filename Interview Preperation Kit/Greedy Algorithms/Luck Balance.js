// How can Lena maximize her luck balance?
// She needs to win as few rounds as possible and
// the rounds she does win must have the lowest luck factor.

// The maximum number of important contests Lena can lose.
const k1 = 3;
// Each set contains that contest's luck balance and its importance rating.
// 1. How much luck she'll add to her balance if she loses or how much she'll
//    lose from her balance if she wins that round.
// 2. 1 means its an important round, 0 means it's not important.
const contests1 = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];
// Expected output
// 29

function luckBalance(k, contests) {
  let balance = 0;
  let importantContests = [];

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      balance += contests[i][0];
    }
  }

  return balance;
}

console.log(luckBalance(k1, contests1));
