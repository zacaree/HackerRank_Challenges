const grades = [73, 67, 38, 33];

// Expected output
// 75
// 67
// 40
// 33

function gradingStudents(grades) {
  let modGrades = [];

  grades.forEach(n => {
    if (n % 5 > 2 && !(n < 38)) {
      modGrades.push(Math.ceil(n / 5) * 5);
    } else {
      modGrades.push(n);
    }
  });

  return modGrades;
}

console.log(gradingStudents(grades));
