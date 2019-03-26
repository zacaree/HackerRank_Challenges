//

function compareTriplets(a, b) {
  let scores = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      console.log("same");
    } else if (a[i] < b[i]) {
      scores[1]++;
    } else {
      scores[0]++;
    }
  }

  return scores;
}

//

const aliceScores = [17, 28, 30];
const bobScores = [99, 16, 8];

console.log(compareTriplets(aliceScores, bobScores));
