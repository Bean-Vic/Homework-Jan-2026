/**
 * Given an array of numbers, return a new array
 * where each number is squared.
 * Do NOT use for / while loops.
 */

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

// Example
console.log(squareNumbers([1, 2, 3, 4]));
