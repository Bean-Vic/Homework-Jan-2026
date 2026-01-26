/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    if (nums[i] > 0) break;

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);

        const leftVal = nums[l];
        const rightVal = nums[r];
        while (l < r && nums[l] === leftVal) l++;
        while (l < r && nums[r] === rightVal) r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return res;
};
