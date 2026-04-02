/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1; // n & (n - 1) 会 消掉 n 中最低位的那个 1
    count++;
  }
  return count;
};
