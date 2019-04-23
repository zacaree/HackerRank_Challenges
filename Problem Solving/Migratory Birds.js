// Migratory Birds
// There are five types of birds and each is represented by a number 1 - 5.
// Each time a bird is spotted, its number is added to an array.
// Return the number representing the bird which was spotted most frequently.
// If there was a tie, return the number that comes first.

// Sample input
const birdSightings_1 = [1, 4, 4, 4, 5, 3];
// Expected output
// 4

// Sample input
const birdSightings_2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// Expected output
// 3

function migratoryBirds(arr) {
  let sightings = new Array(5).fill(0); // array with 5 zeros to tally sightings
  for (const int of arr) sightings[int - 1]++; // for each sighting add a tally
  return sightings.indexOf(Math.max(...sightings)) + 1; // return most sighted bird
}

console.log(migratoryBirds(birdSightings_1));
console.log(migratoryBirds(birdSightings_2));
