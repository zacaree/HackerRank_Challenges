function getLetter(s) {
  let letter;

  const a = ["a", "e", "i", "o", "u"];
  const b = ["b", "c", "d", "f", "g"];
  const c = ["h", "j", "k", "l", "m"];
  const d = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  switch (true) {
    case a.includes(s[0]):
      letter = "A";
      break;
    case b.includes(s[0]):
      letter = "B";
      break;
    case c.includes(s[0]):
      letter = "C";
      break;
    case d.includes(s[0]):
      letter = "D";
  }

  return letter;
}

console.log(getLetter("udfsgt"));
