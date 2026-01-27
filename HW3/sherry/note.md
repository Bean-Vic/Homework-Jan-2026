## 1. What is dynamic typing?

Dynamic typing means variable types are **checked at runtime**, and **not required variables types to be declared** in advance,  so a variable can **hold different kinds of values** over time. This makes languages like JavaScript and Python flexible but riskier. [Static typing, as in Java or TypeScript, **fixes types at compile time**, catching many errors earlier but requiring stricter declarations.]



## 2. Explain the difference between var, let, & const.

**`var`** is **function-scoped**, can be **redeclared**, and is **hoisted and initialized as `undefined`**, which can cause bugs.

**`let`** is **block-scoped**, can be **reassigned but not redeclared**, and is **hoisted but not initialized**, so using it before declaration throws an error.

**`const`** is also **block-scoped**, **must be initialized**, and **cannot be reassigned or redeclared**.
 Although **objects and arrays can still be mutated**, it is **hoisted but not initialized**, so accessing it before declaration also throws an error.



## 3. What is immutability? What data types in JS are immutable?

**Immutability** means **a value cannot be changed after it’s created**.
In JavaScript, **primitive types** like **string, number, boolean, null, undefined, symbol, and bigint** are **immutable**.



## 4. What is the difference between == and ===?

**`==`** performs **type coercion** before comparison, meaning JavaScript **converts operands to the same type**, which can lead to **unexpected results**, like **`undefined == null` being true**.

**`===`** is **strict equality**, so **both value and type must match**, and it **returns false if the types are different**, making it **safer and generally preferred**.



## 5. What is difference between undefined and null?

**Null** represents an **intentional empty value** and is usually assigned by the developer. 

**Undefined** means a variable has been **declared but not initialized**, and it is set by the **JavaScript engine**. 



## 6. List falsy values in JS.

In JavaScript, **falsy values** are values that evaluate to **false** in a **Boolean context**. 

There are exactly seven of them: **false**, **0**, **-0**, **0n** (BigInt zero), an **empty string** "", **null**, **undefined**, and **NaN**. All other values are considered **truthy**, including non-empty strings, objects, and arrays.



## 7. Explain hoisting in JavaScript.

**Hoisting** in JavaScript is the behavior where **variable** and **function declarations** are moved to the **top of their scope** during the compilation phase. 

**Function declarations** are fully hoisted, so they can be called before being defined. 

**`Var` declarations** are hoisted but initialized with **undefined**. In contrast, **`let`** and **`const`** are also hoisted but remain in the **temporal dead zone (TDZ)** until their declaration is evaluated, so accessing them earlier throws an error.



## 8. Explain variable shadowing in JavaScript.

**Variable shadowing** happens when **a variable in an inner scope has the same name as one in an outer scope**, causing the inner one to **override access** within that scope.



## 9. What are 3 ways to declare functions?

**Function declarations** use the function keyword and are **hoisted**, meaning they can be called before their definition. 

**Function expressions** assign a function to a variable and are **not hoisted**. 

**Arrow functions**, introduced in ES6, use the => syntax, provide a **shorter form**, and do not have their own **this** or **arguments** object.

```javascript
// keyword function
function f1(){ }
// function expression
var f2 = function (){ };
// arrow function (ES6)
var f3 =() =>{ };
```



## 10. What is a callback function?

A **callback function** is **a function passed as an argument to another function** and **executed later**, usually **after a task completes**.
Callbacks are commonly used for **asynchronous operations** and **event handling**.



## 11. Whatʼs the difference between primitive and reference data types?

**Primitive types** store **actual values** and are **immutable**.
**Reference types** store **references in memory**, so modifying one reference **affects all references to that object**.



## 12. Whatʼs the difference between array for loop and forEach?

A **for loop** gives **full control**, including **break and continue**.
**forEach** is more **readable and functional**, but **cannot be stopped early**.



## 13. Whatʼs the difference between array map and forEach?

**forEach** is used for simple iteration and typically handles **side effects**, such as logging or updating external variables. It does not return a new array.

**•map** transforms each element and **returns a new array** with the same length, making it ideal for value mapping or restructuring items.



## 14. What is the difference between array slice and splice?

**slice** returns a **new array** and **does not modify** the original.
**splice** **modifies the original array** by adding or removing elements.



## 15. What is an arguments object?

The **`arguments` object** is an **array-like object** available **inside regular functions** that contains **all arguments passed to the function**, regardless of how many parameters are defined.

It **is not a real array**, but it **supports index access** like `arguments[0]`, `arguments[1]`, and so on. In modern JavaScript, rest parameters (`...args`) are preferred over `arguments`.

