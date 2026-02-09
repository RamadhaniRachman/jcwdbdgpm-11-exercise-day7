function majority(nums: any[]) {
  let majority = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } else if (nums === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
}

console.log(majority([3, 2, 3]));
console.log(majority([2, 2, 1, 1, 1, 2, 2]));

/*

- input
- hitung nilai yang muncul beberapa kali
- masukkan ke array apabila muncul lebih dari sekali
- apabila jumlah array yg muncul lebih dari sekali melebihi setengah dari array semula maka break
- setelah break, output array[0] dari array yg muncul
*/
