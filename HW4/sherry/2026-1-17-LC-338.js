/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = new Array(n + 1).fill(0);
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) {
      res[i] = res[i / 2];
    } else {
      res[i] = res[i - 1] + 1;
    }
  }
  return res;
};
