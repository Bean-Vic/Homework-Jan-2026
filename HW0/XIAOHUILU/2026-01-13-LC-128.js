// 128.longest consecutive sequence
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    // create a set to store unique numbers
    const numSet = new Set(nums);
    let longestStreak = 0;
    // we only start counting when we find the start of a sequence
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, -1])); // Output: 2          
