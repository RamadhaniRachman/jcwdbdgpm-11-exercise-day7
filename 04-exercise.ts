function maxProfit(prices: any[]) {
  let buyPrices = prices[0];
  let highest = 0;

  for (let i = 0; i < prices.length; i++) {
    // apabila harga hari ini lebih murah dari sebelumnya maka ubah beli di harga termurah saat ini
    if (prices[i] < buyPrices) {
      buyPrices = prices[i];
    } else {
      const profit = prices[i] - buyPrices;
      if (profit > highest) {
        highest = profit;
      }
    }
  }
  return highest;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
