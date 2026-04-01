var findMin = function(nums) {
    const last = nums[nums.length - 1];
    let l = 0, r = nums.length - 1;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] <= last) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return nums[l];
};
