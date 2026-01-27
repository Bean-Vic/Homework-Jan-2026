/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    set.add(item);
  }
  return false;
};
