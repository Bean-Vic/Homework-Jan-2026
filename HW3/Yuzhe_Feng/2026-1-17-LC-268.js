/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let x = 0;

  for (let i = 0; i <= n; i++) x ^= i;

  for (let i = 0; i < n; i++) x ^= nums[i];

  return x;
};
