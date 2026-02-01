/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // method 1: 2 for loop
    // method 2: hashmap here
    const map = new Map(); // store characer with index
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target-nums[i]),i]
        }else{
            map.set(nums[i],i)
        }
    }

};