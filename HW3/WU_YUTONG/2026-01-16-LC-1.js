/*
 * Problem:
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 *
 * You may assume that:
 * - Each input would have exactly one solution
 * - You may not use the same element twice
 *
 * You can return the answer in any order.
 */

  var twoSum = function(nums, target) {
    const res = new Map(); 
    for (let i = 0; i < nums.length; i++) { 
        const x = nums[i];
        if (res.has(target - x)) { 
            return [res.get(target - x), i]; 
        }
        res.set(x, i); 
    }
};

