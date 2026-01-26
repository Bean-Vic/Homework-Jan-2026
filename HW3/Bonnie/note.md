1. What is dynamic typing?

Dynamic typing means variable types are determined at runtime, not at compile time.

2. Explain the difference between var, let, and const.

var: function-scoped, hoisted and initialized as undefined, allows redeclaration.
let: block-scoped, hoisted but in the temporal dead zone, no redeclaration.
const: block-scoped, must be initialized, cannot be reassigned

3. What is immutability? What data types in JS are immutable?
Immutability means a value cannot be changed after it is created.
All primitive types in JavaScript are immutable:
string, number, boolean, null, undefined, symbol, bigint.

4. What is the difference between == and ===?

== compares values after type coercion.
=== compares both value and type without coercion.

5. What is the difference between undefined and null?

undefined means a variable has been declared but not assigned a value.
null is an intentional assignment representing no value.

6. List falsy values in JavaScript.

Falsy values are:
false, 0, -0, 0n, "", null, undefined, NaN.

7. Explain hoisting in JavaScript.

Hoisting is JavaScript’s behavior of moving declarations to the top of their scope.
var is hoisted and initialized as undefined.
let and const are hoisted but not accessible before declaration.
Function declarations are fully hoisted.

8. Explain variable shadowing in JavaScript.
Variable shadowing occurs when a variable in an inner scope has the same name as one in an outer scope, 
hiding the outer variable.

9. What are three ways to declare functions?

Function declaration
Function expression
Arrow function

10. What is a callback function?

A callback function is a function passed as an argument to another function and executed later, 
often used for asynchronous operations.

11. Difference between primitive and reference data types.

Primitive types store values directly and are copied by value.
Reference types store references to objects and are copied by reference.

12. Difference between a for loop and forEach.

for loops allow break, continue, and return.
forEach does not support breaking the loop early.

13. Difference between map and forEach.

map returns a new array with transformed elements.
forEach returns undefined and is used for side effects.

14. Difference between slice and splice.

slice does not modify the original array and returns a new array.
splice modifies the original array and can remove or insert elements.

15. What is the arguments object?

The arguments object is an array-like object available in regular functions
that contains all passed arguments.
