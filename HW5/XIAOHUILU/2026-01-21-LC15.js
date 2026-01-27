// lc15 3sun
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] == nums[i -1]) {
            continue;
        }
        let l = i+1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while(l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
                while(l < r && nums[r] === nums[r + 1]) {
                    r--;
                }
            }else if (sum < 0) {
                l++;
            }else {
                r--;
            }
        }
        
    }
    return result;       
};
