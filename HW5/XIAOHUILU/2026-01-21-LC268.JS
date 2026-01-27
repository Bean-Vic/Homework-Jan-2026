// lc268. missing number
var missingNumber = function(nums) {
    const set = new Set();
    let missNum = 0;
    for(const num of nums){
        set.add(num);
    }       
    for(let i = 0; i <= nums.length; i++) {
        if(!set.has(i)) {
            return i;
        }
    }
};


let nums = [9,6,4,2,3,5,7,0,1];

console.log(missingNumber(nums));