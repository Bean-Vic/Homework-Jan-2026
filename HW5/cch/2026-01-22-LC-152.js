var maxProduct = function (nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];

    const tempMax = Math.max(n, curMax * n, curMin * n);
    const tempMin = Math.min(n, curMax * n, curMin * n);

    curMax = tempMax;
    curMin = tempMin;

    result = Math.max(result, curMax);
  }

  return result;
};
