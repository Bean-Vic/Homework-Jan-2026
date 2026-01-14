/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let best = 0;

  for (const x of set) {
    if (!set.has(x - 1)) {
      let cur = x;
      let len = 1;

      while (set.has(cur + 1)) {
        cur++;
        len++;
      }
      best = Math.max(best, len);
    }
  }

  return best;    
};