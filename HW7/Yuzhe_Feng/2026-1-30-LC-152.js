/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];

    // If current number is negative,
    // curMax and curMin will swap roles after multiplication
    if (x < 0) {
      const temp = curMax;
      curMax = curMin;
      curMin = temp;
    }

    // Either start a new subarray at x
    // or extend the previous subarray
    curMax = Math.max(x, curMax * x);
    curMin = Math.min(x, curMin * x);

    ans = Math.max(ans, curMax);
  }

  return ans;
};
