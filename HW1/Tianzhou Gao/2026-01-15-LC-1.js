/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dic = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (target - num in dic) {
            return [i, dic[target - num]];
        }
        dic[num] = i;
    }
};