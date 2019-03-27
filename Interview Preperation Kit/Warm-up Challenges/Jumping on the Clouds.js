// Jumping on the clouds has a single input;
// an array of binary integers.
const clouds = [0, 0, 1, 0, 0, 1, 0];

// 0 represents a cumulus cloud - safe to land on.
// 1 represents a cumulonimbus thunder cloud - not safe to land on.

// You may jump a single 0 whenever possible but you must jump a 1.

// Goal: find the shortest number of jumps from the beginning to the
// end of the given set of clouds.

function jumpingOnClouds(c) {
  let count = 0;
  let currentPos = 0;

  while (currentPos < c.length - 1) {
    // Whenever possible jump 2 spaces.
    if (c[currentPos + 2] === 0) {
      currentPos += 2;
      count++;
    } else {
      currentPos++;
      count++;
    }
  }

  return count;
}

console.log(jumpingOnClouds(clouds));
