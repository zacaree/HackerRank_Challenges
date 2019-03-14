// Determine the original side lengths and return an array:
// - The first element is the length of the shorter side
// - The second element is the length of the longer side
// Parameter(s):
// literals: The tagged template literal's array of strings.
// expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).

function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const main = Math.sqrt(p * p - 16 * a);
  const output = [];
  const s1 = (p + main) / 4;
  const s2 = (p - main) / 4;
  output.push(s1);
  output.push(s2);
  return output.sort((a, b) => a + b);
}
