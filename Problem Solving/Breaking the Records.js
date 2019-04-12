// Return two integers describing the respective numbers of times Maria's
// best (highest) score increased and her worst (lowest) score decreased.

const scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// Expected output
// 2 4

const scores2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// Expected output
// 4 0

//

//

function breakingRecords(scores) {
  let min = 0;
  let max = 0;
  let countMin = 0;
  let countMax = 0;

  scores.forEach((score, i) => {
    // Handles Min
    if (i === 0) {
      min = score;
    } else if (score < min) {
      min = score;
      countMin++;
    }

    // Handles Max
    if (i === 0) {
      max = score;
    } else if (score > max) {
      max = score;
      countMax++;
    }
  });

  return [countMax, countMin];
}

breakingRecords(scores1);
breakingRecords(scores2);
