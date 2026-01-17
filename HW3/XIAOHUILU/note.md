1. **What is dynamic typing?**

    Dynamic typing means we do not need to declared the variables types at first. And we can change the variable’s type during the runtime. 

2. **Explain the difference between var, let, and const.**

    The var keyword is function-scoped and allows redeclaration, which can cause bugs, while let and const are block-scoped, where let allows reassignment and const does not allow reassignment after initialization.

3. **What is immutability, and what data types in JavaScript are immutable?**

    Immutability means that a value cannot be changed after it is created, and in JavaScript, all primitive data types such as number, string, boolean, null, undefined, symbol, and bigint are immutable.

4. **What is the difference between == and ===?**

    The == operator compares values after performing type conversion, while the === operator compares both value and type without type conversion, making === safer and more predictable.

5. **What are some examples of falsy values in JavaScript?**

Some common falsy values in JavaScript include false, 0, -0, "" (empty string), null, undefined, and NaN.

6. **Explain hoisting in JavaScript.**

    Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope during compilation, where var is initialized as undefined, but let and const remain in a temporal dead zone until declared.

7. **Explain variable shadowing in JavaScript.**

    Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, causing the inner variable to hide the outer one within that scope.

8. **What is a callback function?**

    A callback function is a function that is passed as an argument to another function and is executed later, usually after an asynchronous operation or event completes.

9. **What is the difference between primitive data types and reference data types in JavaScript?**

    Primitive data types store values directly and are immutable, while reference data types store references to objects in memory, which allows their internal data to be modified.

10. **What is the difference between an array for loop and forEach?**

    A traditional for loop allows full control over iteration, including breaking and continuing the loop, while forEach is a higher-order function that cannot be stopped early and is mainly used for simple iteration.

11. **What is the difference between array.map and array.forEach?**

    The map method returns a new array based on the transformation of each element, while forEach does not return a new array and is used only for executing side effects.

12. **What is the difference between slice and splice?**

    The slice method returns a shallow copy of a portion of an array and it does not  modify the original array, while splice modifies the original array by adding, removing, or replacing elements.

13. **What is 'use strict', and what are its major effects?**

    'use strict' enables strict mode in JavaScript, which helps catch common coding mistakes by preventing the use of undeclared variables, disallowing duplicate parameter names, and making JavaScript code more secure and predictable.


14. **What is the arguments object?**

    The arguments object is an array-like object available inside functions that contains all the arguments passed to the function, even if they are not explicitly defined as parameters.
