# JavaScript Interview Questions – Answers

## 1. What is dynamic typing?
Dynamic typing means you don’t have to declare the data type of a variable.  
In JavaScript, a variable can hold different types of values at different times, and the type is checked at runtime, not at compile time.

---

## 2. Explain the difference between `var`, `let`, and `const`.
`var` is function-scoped and can be redeclared and reassigned.  
`let` is block-scoped and can be reassigned but not redeclared in the same scope.  
`const` is also block-scoped, but it cannot be reassigned after it’s declared.

---

## 3. What is immutability? What data types in JS are immutable?
Immutability means a value cannot be changed after it’s created.  
In JavaScript, primitive data types like `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint` are immutable.

---

## 4. What is the difference between `==` and `===`?
`==` compares values after type conversion (loose equality).  
`===` compares both value and type without type conversion (strict equality).  
Using `===` is generally recommended.

---

## 5. What are some examples of falsy values in JS?
Common falsy values include:  
`false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`, and `-0`.

---

## 6. Explain hoisting in JavaScript.
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before code execution.  
Variables declared with `var` are hoisted but initialized as `undefined`, while `let` and `const` are hoisted but not accessible before declaration.

---

## 7. Explain variable shadowing in JavaScript.
Variable shadowing happens when a variable declared in an inner scope has the same name as a variable in an outer scope.  
The inner variable “shadows” the outer one within that scope.

---

## 8. What is a callback function?
A callback function is a function passed as an argument to another function and executed later.  
It’s commonly used for asynchronous operations like timers, events, and API calls.

---

## 9. What’s the difference between primitive data types and reference data types in JS?
Primitive data types store values directly and are immutable.  
Reference data types store a reference to the value in memory, not the value itself, and they are mutable.  
Examples of reference types include objects, arrays, and functions.

---

## 10. What’s the difference between an array `for` loop and `forEach`?
A `for` loop gives more control, such as using `break` or `continue`.  
`forEach` is a higher-order function that runs a callback for each element but cannot be stopped early.

---

## 11. What’s the difference between array `map` and `forEach`?
`map` returns a new array with transformed values.  
`forEach` does not return a new array and is mainly used for side effects like logging or updating external variables.

---

## 12. What is the difference between array `slice` and `splice`?
`slice` returns a new array and does not change the original array.  
`splice` modifies the original array by adding, removing, or replacing elements.

---

## 13. What is `'use strict'`? What are the major effects that it has?
`'use strict'` enables strict mode in JavaScript.  
It helps catch common errors, prevents the use of undeclared variables, disallows duplicate parameters, and makes code more secure and predictable.

---

## 14. What is an `arguments` object?
The `arguments` object is an array-like object available inside regular functions.  
It contains all the arguments passed to the function, even if they were not explicitly defined as parameters.