1. What is dynamic typing?
Dynamic typing means variable types are determined at runtime rather than at declaration. In JavaScript, a variable can hold values of different types at different times.

2. Explain the difference between var, let, & const.
var is function-scoped and can be redeclared, which may lead to bugs. let and const are block-scoped, but const does not allow reassignment while let does.

3. What is immutability? What data types in JS are immutable?
Immutability means a value cannot be changed once created. All JavaScript primitive types—string, number, boolean, null, undefined, symbol, and bigint—are immutable.

4. What is the difference between == and ===?
== compares values after performing type coercion. === compares both value and type, making it more strict and reliable.

5. What is the difference between undefined and null?
undefined means a variable has been declared but not assigned a value. null is an intentional assignment representing the absence of a value.

6. List falsy values in JS.
Falsy values are values that evaluate to false in a boolean context. They include false, 0, "", null, undefined, and NaN.

7. Explain hoisting in JavaScript.
Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during compilation. Variables declared with var are initialized as undefined, while let and const are hoisted but not initialized.

8. Explain variable shadowing in JavaScript.
Variable shadowing occurs when a variable declared in a local scope has the same name as one in an outer scope. The inner variable takes precedence within that scope.

9. What are 3 ways to declare functions?
Functions can be declared using function declarations, function expressions, and arrow functions. Each has different behaviors regarding hoisting and this binding.

10. What is a callback function?
A callback function is a function passed as an argument to another function. It is executed later, often after an asynchronous operation or event completes.

11. What’s the difference between primitive data types and reference data types in JS?
Primitive data types store simple values and are passed by value. Reference data types like objects and arrays store references in memory and are passed by reference.

12. What’s the difference between array for loop and forEach?
A for loop provides more control, allowing the use of break and continue. forEach iterates over each element but cannot be stopped early.

13. What’s the difference between array map and forEach?
map returns a new array with transformed values. forEach returns undefined and is mainly used for executing side effects.

14. What is the difference between array slice and splice?
slice returns a new array without modifying the original. splice modifies the original array by adding or removing elements.

15. What is an arguments object?
The arguments object is an array-like object available inside regular (non-arrow) functions. It contains all arguments passed to the function, regardless of how many parameters are defined.

