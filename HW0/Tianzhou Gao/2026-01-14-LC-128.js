/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let ans = 0;
    
    const s = new Set(nums);

    for (const num of s) {
        if (!s.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (s.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            ans = Math.max(ans, currentStreak);
        }
    }

    return ans
};