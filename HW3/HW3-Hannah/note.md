1. What is dynamic typing?
    - JavaScript is dynamically typed, meaning variable types are determined at runtime, not at compile time. A variable can hold values of different types during execution.
  
2. Explain the difference between var, let, & const.
    - | Feature    | var                            | let         | const       |
      | ---------- | ------------------------------ | ----------- | ----------- |
      | Scope      | Function scope                 | Block scope | Block scope |
      | Hoisting   | Yes (initialized as undefined) | Yes (TDZ*)  | Yes (TDZ*)  |
      | Re-declare | Allowed                        | Not allowed | Not allowed |
      | Re-assign  | Allowed                        | Allowed     | Not allowed |

3. What is immutability? What data types in JS are immutable?
    - Immutability means a value cannot be changed after it is created. A new value must be created instead.
    - Immutable types in JS (primitives): Number, String, Boolean, Null, Undefined, Symbol, BigInt
    - Mutable types: Object, Array, Function
  
4. What is the difference between == and ===?
    - | Operator | Meaning                            |
      | -------- | ---------------------------------- |
      | `==`     | Loose equality (type coercion)     |
      | `===`    | Strict equality (no type coercion) |
    - Always prefer ===.
  
5. What are some examples of falsy values in JS?
    - false, 0, -0, 0n, "", null, undefined, NaN

6. Explain hoisting in JavaScript.
    - Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope during compilation.
    - let and const are hoisted but in the Temporal Dead Zone.
  
7. Explain variable shadowing in Javascript.
    - When a variable in a local scope has the same name as one in an outer scope.
    ```let x = 10;

    function test() {
    let x = 20;  // shadows outer x
    console.log(x); // 20
    }

    console.log(x); // 10`
    ```
  
8. What is a callback function?
    - A function passed as an argument to another function and executed later.
  
9. What’s the difference between primitive data types and reference data types in JS?
    -   | Primitive       | Reference           |
        | --------------- | ------------------- |
        | Stored by value | Stored by reference |
        | Immutable       | Mutable             |
        | Simple types    | Complex structures  |

10. What’s the difference between array for loop and forEach?
    -   | for loop           | forEach                  |
        | ------------------ | ------------------------ |
        | Can break/continue | Cannot break or continue |
        | More control       | Cleaner syntax           |
        | Slightly faster    | More readable            |

11. What’s the difference between array map and forEach?
    -   | map                     | forEach               |
        | ----------------------- | --------------------- |
        | Returns a new array     | Returns undefined     |
        | Used for transformation | Used for side effects |

12. What is the difference between array slice and splice?
    -   | slice             | splice                      |
        | ----------------- | --------------------------- |
        | Non-mutating      | Mutates original array      |
        | Returns new array | Returns removed elements    |
        | Used for copying  | Used for inserting/deleting |

13. What is ‘use strict’? What are the major eﬀects that it has?
    - It enables strict mode, which enforces safer coding rules.
    - Major effects:
    - Prevents use of undeclared variables
    - Disallows duplicate parameters
    - Makes this undefined in functions
    - Prevents silent errors
    - Disallows deleting variables
    - Makes eval safer

14. What is an arguments object?
    - An array-like object available inside regular functions that contains all passed arguments.
    - Not available in arrow functions, Not a real array (no map, filter unless converted), Modern JS prefers rest parameters