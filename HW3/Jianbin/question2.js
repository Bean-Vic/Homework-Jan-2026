/**
 * Given an array of numbers, return a new array
 * containing only even numbers.
 * Do NOT use for / while loops.
 */

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Example
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
