// Print the area and perimeter of a circle based on the given radius.

function main(r) {
  const PI = Math.PI;
  const area = PI * (r * r);
  const perimeter = 2 * PI * r;
  console.log(area);
  console.log(perimeter);
}

main(2.6);
