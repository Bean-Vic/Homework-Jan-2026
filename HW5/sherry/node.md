## 1. What are the differences between **call**, **apply**, and **bind**?

The differences between `call()`, `apply()`, and `bind()` lie in how they handle the `this` keyword and arguments. Both call and apply **invoke the function immediately**, but call takes arguments individually while apply expects an array. bind, on the other hand, doesn’t run right away; it returns a new function with this fixed, which is useful in event handlers or delayed execution.

- The `call()` method executes a function with the **specified** `this` value and **individual arguments** passed as `arg1, arg2, ..., argN`.
- The `apply()` method also executes a function with the **specified** `this` value but accepts arguments as an **array** `[arg1, arg2, ..., argN]`.
- In contrast, the `bind()` method does not execute the function immediately but instead returns a new function where `this` is bound to the specified value, along with any additional arguments.
- The `call()` and `apply()` methods return the result of executing the function, while `bind()` returns the newly-bound function.



## 2. Explain the **this** keyword in JavaScript.

The **`this`** keyword in JavaScript **refers to the object that is executing the current function**, and its value is **determined at runtime** based on **how the function is called**, not where it is defined.

- In a **method**, `this` refers to the **owning object**
- In a **regular function**, `this` is the **global object** (or `undefined` in strict mode)
- In an **arrow function**, `this` is **lexically inherited** from the surrounding scope
- With **`call`, `apply`, or `bind`**, `this` is **explicitly set**





## 3. What does the **event loop** do? What data structures does it use?

The **event loop** is a **runtime mechanism** that coordinates the execution of **synchronous and asynchronous JavaScript code**.

It works with several **core data structures**: the **Call Stack**, **Web APIs**, the **Microtask Queue** (Promises), and the **Macrotask Queue** (timers and events).

The execution order is: **synchronous code first**, then **microtasks (Promises)**, and finally **macrotasks** like `setTimeout` and event callbacks.



## 4. What are **closures**?

A closure is a function that **remembers variables from its outer scope**. It allows inner functions to access outer variables **after the outer function has finished**.



## 5. What is **asynchronous code** in JavaScript? How does JavaScript achieve asynchronous code?

**Asynchronous code** in JavaScript allows **long-running operations** (such as API calls, timers, or I/O) to **run without blocking the main thread**, so the program can continue executing other code.

JavaScript achieves asynchronous behavior using a combination of the **single-threaded Call Stack**, **Web APIs**, **Promises / async-await**, **task queues (microtask and macrotask queues)**, and the **Event Loop**, which schedules callbacks to run when the stack is empty.



## 6. What is **async & await**? How do we use them?

**async & await** are **syntactic sugar built on top of Promises**, used to **write asynchronous code in a synchronous-looking way**, which makes it **easier to read, write, and debug**.

An **async** function **always returns a Promise**, and **await pauses execution** until a Promise is **resolved or rejected**, allowing developers to **handle async operations without `.then()` chaining** and with **clearer control flow**.



## 7. How many **HTTP methods** are there? Explain each one.

1. What is the difference between **POST** and **PUT**?

Mainly used HTTP methods are **GET, POST, PUT, PATCH and DELETE**. 

+ GET is **reques**t data from a specific resource , it should not have a body, when we typing the url in the browser is sending a GET request. 

+ POST is to send the data to the sever to **create** the recourse,

+ PUT can send data to a server to **replace** a resource

+ PATCH also used for update resources, but it only send data to a server to update **part of a resource**.

+ DELETE, which send data to a server, and telling it what resources to **delete**.

  

## 8. What is a **Promise**?

A **Promise** is an **object** that represents the **eventual** completion or failure of an **asynchronous** operation and its resulting value. It has three states: **Pending**, **Fulfilled**, and **Rejected**.



## 9. What is **promise chaining**?

**Promise chaining** is a technique where **multiple asynchronous operations are linked together** by **returning a Promise from `.then()`**, allowing them to **execute sequentially**.

Each `.then()` **receives the result of the previous Promise**, making it possible to **process async steps in order**, **avoid deeply nested callbacks**, and **handle errors in a single `.catch()`** at the end



## 10.Explain the **three states of a Promise**.

**Pending** — the Promise has been **created but not yet resolved or rejected**.

**Fulfilled** — the Promise has **successfully resolved** and produced a **result value**.

**Rejected** — the Promise has **failed** and produced a **reason (error)**.



## 11. What is the use of **Promise.all()**? How is it different from Promise.allSettled()?

**Promise.all()** takes an input **array of Promises** and returns **a single Promise** that resolves when all of them resolve (**all successful**). If **any Promise rejects**, `Promise.all()` **immediately rejects**. It resolves to an array of all the results. A common use case for `Promise.all()` is "**all-or-nothing**" situations where all Promises must resolve to continue execution.



**Promise.allSettled()** is similar to `Promise.all()`, but it always resolves with an **array of all results**, providing access to each Promise's status (`fulfilled` or `rejected`) and result, regardless of whether they succeed or fail.



## 12. What is a **callback function**?

A **callback function** is **a function passed as an argument to another function** and **executed later**, usually **after a task completes**. Callbacks are commonly used for **asynchronous operations** and **event handling** like setTimeInterval or setTimeout.



## 13. Difference between **401** and **403** error code.

A **401 Unauthorized** error means the request failed because **authentication is missing or invalid** — for example, the user is **not logged in**, or the **token/credentials have expired or are incorrect**.

A **403 Forbidden** error means the user **is authenticated**, but **access is denied due to insufficient permission** to access the requested resource.



## 14. What does **response.json()** do when fetching an API?

**`response.json()`** is a method that **reads the HTTP response body and parses it as JSON**.

It **returns a Promise** that **resolves to a JavaScript object**, allowing the response data to be **used in your code**.
 Because parsing is asynchronous, it must be handled with **`.then()` or `await`**.



## 15. Describe the difference between a **cookie**, **sessionStorage**, and **localStorage** in browsers.

A **cookie**, **sessionStorage**, and **localStorage** are all browser storage mechanisms, but they differ in **scope, lifetime, size, and usage**.

- **Cookies** are **small pieces of data** sent with **every HTTP request** to the server. They are often used for **authentication and session tracking**, have **size limits (~4KB)**, and can be configured with **expiration, domain, path, and security flags**.
- **sessionStorage** stores data for **one browser tab/session only**. The data is **cleared when the tab or window is closed** and is mainly used for **temporary state**.
- **localStorage** stores data **persistently in the browser**. The data **remains until explicitly cleared** and is commonly used for **saving user preferences or cached data**.



## 16. Explain the **Event Loop** in JavaScript.

The **event loop** is a **runtime mechanism** that coordinates the execution of **synchronous and asynchronous JavaScript code**.

It works with several **core data structures**: the **Call Stack**, **Web APIs**, the **Microtask Queue** (Promises), and the **Macrotask Queue** (timers and events).

The execution order is: **synchronous code first**, then **microtasks (Promises)**, and finally **macrotasks** like `setTimeout` and event callbacks.



## 17. What is the output of the following code?

```js
(function (a) {
  return (function () {
    console.log(a);
    a = 23;
  })();
})(45);
```

Answer would be 45, the outer IIFE is called with a =45, and inner IIFE runs immediately and logs `a` before it is reassigned, only the after console.log(a) does a get set to 23.
