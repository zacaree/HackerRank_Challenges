// Determine the original side lengths and return an array:
// - The first element is the length of the shorter side
// - The second element is the length of the longer side
// Parameter(s):
// literals: The tagged template literal's array of strings.
// expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).

// WORK IN PROGRESS
function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const main = Math.sqrt(p * p - 16 * a);
  let s1 = (p + main) / 4;
  let s2 = (p - main) / 4;
  console.log([s1, s2]);
  // return [s1, s2];
}
