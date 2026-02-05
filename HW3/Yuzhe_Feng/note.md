### 1. What is dynamic typing?

Dynamic typing is a programming approach where a variable's data type (like number, string, or boolean) is checked and assigned during program execution (runtime), not before (compile-time).
This allows a variable to hold different types of values during program execution, which makes development more flexible but can cause runtime type errors.

### 2. Explain the difference between var, let, & const.

var, let, and const are all used to declare variables in JavaScript, but they differ in scope and reassignment behavior.
var is function-scoped, is hoisted with an initial value of `undefined`, and can be redeclared/reassigned. let is block-scoped and can be reassigned but not redeclared, while const is block-scoped and cannot be reassigned or redeclared.

### 3. What is immutability? What data types in JS are immutable?

Immutability refers to the property that a value cannot be modified after it is created.
In JavaScript, all primitive data types are immutable, including strings, numbers, booleans, null, undefined, symbols, and bigints.
Any operation that appears to modify these values actually results in the creation of a new value, while the original value remains unchanged.
In contrast, objects and arrays are mutable and can be modified in place.

### 4. What is the difference between == and ===?

he == operator performs loose equality comparison and allows implicit type coercion before comparing values.
The === operator performs strict equality comparison and does not allow type coercion, meaning both the value and the type must be the same.
Using === is generally preferred in JavaScript, because it helps avoid unexpected results caused by automatic type conversion.

### 5. What are some examples of falsy values in JS?

Falsy values in JavaScript are values that evaluate to false when used in a boolean context.
Examples include false, 0, -0, 0n, an empty string, null, undefined, and NaN.

### 6. Explain hoisting in JavaScript.

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before code execution.
Only declarations are hoisted, not initializations.
Variables declared with var are hoisted and initialized as undefined, while let and const are hoisted but cannot be accessed before declaration due to the temporal dead zone.
Function declarations are fully hoisted, but function expressions are not.

### 7. Explain variable shadowing in Javascript.

Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, causing the inner variable to override access to the outer one within that scope.
The outer variable still exists, but it is hidden while the inner scope is active.
This is common with let and const in block scope, but it should be used carefully to avoid confusion.

### 8. What is a callback function?

A callback function is a function that is passed as an argument to another function and is executed later, usually after a specific task or operation is completed.
Callback functions are commonly used in JavaScript to handle asynchronous operations, such as events, timers, or API requests.

### 9. What’s the difference between primitive data types and reference data types in JS?

Primitive data types store simple, immutable values and are copied by value when assigned or passed to a function. Like ` strings`, `boolean`, and `numbers`.
Reference data types store references to objects in memory, are mutable, and are copied by reference, meaning multiple variables can point to the same underlying object. Like `objects`, `arrays`, and `functions`.

### 10. What’s the difference between array for loop and forEach?

A for loop provides full control over the iteration process, allowing the use of break, continue, and async/await.
forEach is an array method that executes a callback for each element and offers cleaner syntax, but it cannot be stopped early and does not work well with asynchronous control flow.
In general, for loops are more flexible, while forEach is better suited for simple iterations.

### 11. What’s the difference between array map and forEach?

The forEach method is used to iterate over an array and perform an operation on each element, but it does not return a new array.
The map method also iterates over an array, but it returns a new array containing the results of applying a function to each element.
In general, forEach is used for side effects, while map is used for transforming data.

### 12. What is the difference between array slice and splice?

The slice method returns a shallow copy of a portion of an array without modifying the original array.
The splice method modifies the original array by adding, removing, or replacing elements and returns the removed items.
In general, slice is used for non-destructive operations, while splice is used when in-place modification is needed.

### 13. What is ‘use strict’? What are the major eﬀects that it has?

`use strict` enables JavaScript’s strict mode, which enforces stricter parsing and error handling.
It prevents common mistakes such as creating implicit global variables, makes certain silent errors throw exceptions, and changes the default behavior of this to avoid accidental global references.

### 14. What is an arguments object?

The arguments object is an array-like object available inside non-arrow functions that contains all the arguments passed to the function.
It allows access to function arguments using indexed notation and has a length property, but it is not a real array.
In modern JavaScript, rest parameters are generally preferred as a cleaner alternative.
