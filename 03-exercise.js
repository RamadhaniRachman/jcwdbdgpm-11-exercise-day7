function pascalTriangle(total) {
  let triangle = [];

  // loop baris
  for (let i = 0; i < total; i++) {
    let row = [];

    //loop ke kanan
    for (let j = 0; j <= i; j++) {
      //ujung kiri dan kanan harus selalu 1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        //ambil dari baris sebelumnya
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}

console.log(pascalTriangle(5));
