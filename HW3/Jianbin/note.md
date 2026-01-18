# HW3 - JavaScript 1 Notes

## Part 0: LeetCode
- I practice 1–3 LeetCode problems daily using JavaScript/TypeScript (ongoing).

---

## Part 1: Q&A (八股题)

### 1) What is dynamic typing?
Dynamic typing means a variable’s type is determined at runtime (based on the value assigned), and the same variable can hold values of different types over time (e.g., number → string).

### 2) Explain the difference between var, let, & const.
- **var**: function-scoped (or globally scoped), can be re-declared and re-assigned; hoisted and initialized as `undefined`.
- **let**: block-scoped, cannot be re-declared in the same scope, can be re-assigned; hoisted but in **TDZ** (Temporal Dead Zone) until initialized.
- **const**: block-scoped, cannot be re-declared or re-assigned; hoisted but in **TDZ** until initialized. (Objects/arrays declared with const can still have their contents mutated.)

### 3) What is immutability? What data types in JS are immutable?
Immutability means a value cannot be changed after it is created.  
In JS, **primitive values** are immutable:
- `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`  
Objects/arrays/functions are **mutable** (their properties/elements can change), though you can enforce immutability with patterns/tools like `Object.freeze()` or copying.

### 4) What is the difference between == and ===?
- `==` (loose equality): compares after **type coercion**.
- `===` (strict equality): compares **without coercion** (type + value must match).  
Example: `0 == "0"` is true, but `0 === "0"` is false.

### 5) What is difference between undefined and null?
- `undefined`: a variable is declared but not assigned a value (or a missing property).
- `null`: an explicit “no value” assigned intentionally.  
`typeof undefined` is `"undefined"`, `typeof null` is `"object"` (historical quirk).

### 6) List falsy values in JS.
Falsy values are:
- `false`
- `0`, `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### 7) Explain hoisting in JavaScript.
Hoisting means declarations are processed before code execution.
- `var` is hoisted and initialized to `undefined`.
- `let`/`const` are hoisted but not initialized (TDZ).
- **Function declarations** are hoisted (you can call them before they appear in the code).
- Function expressions assigned to `var/let/const` follow the variable hoisting rules.

### 8) Explain variable shadowing in JavaScript.
Shadowing happens when an inner-scope variable has the same name as an outer-scope variable, so the inner one “shadows” the outer one within that scope.
Example: a `let x` inside a block shadows an outer `let x`.

### 9) What are 3 ways to declare functions?
1. **Function Declaration**: `function foo() {}`
2. **Function Expression**: `const foo = function() {}`
3. **Arrow Function**: `const foo = () => {}`

### 10) What is a callback function?
A callback function is a function passed as an argument to another function and executed later (e.g., after an event, a timer, or async operation).
Example: `arr.map(x => x * 2)` where `(x => x * 2)` is a callback.

### 11) What’s the difference between primitive data types and reference data types in JS?
- **Primitive types** store the actual value and are copied by value (e.g., `number`, `string`).
- **Reference types** (objects, arrays, functions) store a reference (memory address) and are copied by reference; multiple variables can point to the same object.

### 12) What’s the difference between array for loop and forEach?
- `for` loop:
  - can use `break` / `continue`
  - more control over index and looping behavior
- `forEach`:
  - uses a callback for each element
  - cannot `break`/`continue` directly (you’d need other methods like `some`, `every`, or `for...of`)

### 13) What’s the difference between array map and forEach?
- `map`:
  - returns a **new array** of the same length (transformed elements)
  - should be used when you want to build a new array
- `forEach`:
  - returns `undefined`
  - used for side effects (logging, updating external variables)

### 14) What is the difference between array slice and splice?
- `slice(start, end)`:
  - **does not mutate** the original array
  - returns a **new array** containing selected elements
- `splice(start, deleteCount, ...items)`:
  - **mutates** the original array
  - can remove and/or insert elements
  - returns the removed elements

### 15) What is an arguments object?
`arguments` is an array-like object available inside **non-arrow** functions that contains all arguments passed to the function.
- It is not a real array (no `.map()` directly unless converted).
- Arrow functions do not have their own `arguments` (use rest parameters `(...args)` instead).

---

## Part 2: Peer Mock (Audio Uploaded)
- We conducted a group peer mock interview practice.
- The audio recording has been uploaded as required (submission platform/link provided by the instructor).
