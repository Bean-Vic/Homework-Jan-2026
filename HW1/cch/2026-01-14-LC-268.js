/**

 * @param {number[]} nums

 * @return {number}

 */

var missingNumber = function (nums) {
  return (
    (nums.length * (nums.length + 1)) / 2 -
    nums.reduce((sum, current) => sum + current, 0)
  );
};
