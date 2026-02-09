function convert(romawi) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let count = 0;
  for (let i = 0; i < romawi.length; i++) {
    const current = values[romawi[i]];
    const next = values[romawi[i + 1]];

    if (next && current < next) {
      count = count - current;
    } else {
      count = count + current;
    }
  }
  return count;
}

console.log(convert("III"));
console.log(convert("LVIII"));
console.log(convert("MCMXCIV"));
