//
// Return a count of the total number of objects 'o' satisfying o.x == o.y.
//
// Parameter(s):
// objects: an array of objects with integer properties 'x' and 'y'
//

const numSets = [{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 5 }];

// Filter iterates over objects in the array checking to see if the given condition is true.
// If true the object is kept which adds one to the length.
const getCount = objects => objects.filter(o => o.x == o.y).length;

console.log(getCount(numSets));
