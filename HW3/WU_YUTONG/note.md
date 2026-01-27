# JavaScript Basics

## 1. What is dynamic typing?
Dynamic typing means that variable types are determined at runtime, not at compile time.  
Variables in JavaScript are not directly associated with any particular value type, and any variable can
be assigned (and re-assigned) values of all types.

---

## 2. Explain the difference between var, let, and const.
- `var`: function-scoped, can be re-declared and updated.
- `let`: block-scoped, can be updated but not re-declared.
- `const`: block-scoped, cannot be re-declared or updated.

---

## 3. What is immutability? What data types in JS are immutable?
Immutability means a value cannot be changed after it is created.

Immutable data types in JavaScript:
- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`

---

## 4. What is the difference between == and ===?
- `==`: (Loose equality) performs type conversion if the operands have
different types before comparing their values. This can lead to unexpected results.

- `===`: (Strict equality) compares both the value and the data type of the
operands without any type conversion.

---

## 5. What is the difference between undefined and null?
- undefined means a variable is declared but not assigned, usually set by
JavaScript.
- null means an intentional absence of value, usually set by developers.

---

## 6. List falsy values in JavaScript.
Falsy values in JavaScript:
- `false`
- `0`
- `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

---

## 7. Explain hoisting in JavaScript.
Hoisting is a mechanism that the JavaScript engine moves all the variable 
declarations to the top of their scopes.
A variable can be declared after it has been used ↔ A variable can be used before it has been declared.
var , let , and const are all hoisted, but they are initialized differently.

---

## 8. Explain variable shadowing in JavaScript.
Variable Shadowing occurs when we declare the same name for the variable in the inner and outer scopes.
The inner variable will hide or override the outer variable.
The outer variable will become inaccessible in the inner scope.

---

## 9. What are 3 ways to declare functions?
1. Function declaration  
2. Function expression  
3. Arrow function  

---

## 10. What is a callback function?
A callback function is a function passed as an argument to another function and executed later, usually after an operation completes.

---

## 11. What’s the difference between primitive data types and reference data types in JS?
- Primitive types store values directly in memory.
- Reference types store references (memory addresses).

Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`  
Reference types: `object`, `array`, `function`

---

## 12. What’s the difference between array for loop and forEach?
- A for loop is more flexible: it can be interrupted, and it can return values inside the loop.
- forEach cannot exit early and it returns undefined.

---

## 13. What’s the difference between array map and forEach?
- 	map returns a new array and is used to transform data.
- 	forEach returns nothing and is used to just loop.
- 	map can be chained and does not modify the original array.
- 	forEach cannot be chained and may modify the original array.

---

## 14. What is the difference between array slice and splice?
- `slice`: does not modify the original array, returns a new array.
- `splice`: modifies the original array by adding/removing elements.

---

## 15. What is an arguments object?
The `arguments` object is an array-like object available inside regular functions that contains all arguments passed to the function.
