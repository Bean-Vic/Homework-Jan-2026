/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // sort method
    // nums.sort((a,b)=>a-b);
    // let j = 0; // starting from 0 - n
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] !== j) {
    //         return j
    //     }
    //     j++;
    // }
    // return nums.length;
    // array from 0, n and put count on it;
    // const arr = new Array(nums.length+1).fill(0); // use map 
    // for(let i = 0; i < nums.length; i++){
    //     arr[nums[i]] = 1; 
    // }
    // //console.log(arr);
    // for(let j = 0; j < arr.length; j++){
    //     if(arr[j] === 0) {
    //         return j;
    //     }
    // }
    // use math
    let n = nums.length;
    let sum = (0+n) * (n+1)/2;
    let total = 0;
    for(let item of nums){
        total += item;
    }
    return sum - total;
};