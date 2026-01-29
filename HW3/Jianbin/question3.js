/**
 * Given an array of numbers, return the sum.
 * Do NOT use for / while loops.
 */

function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Example
console.log(sumNumbers([1, 2, 3, 4]));
