# HW5 – JavaScript 3 Notes (Q&A)

## 1. What are the differences between call, apply & bind?

All three methods are used to **explicitly set the value of `this`** when calling a function.

---

### `call(thisArg, arg1, arg2, ...)`
- **Calls the function immediately**
- Passes arguments **one by one**

```js
function fn(a, b) {
  console.log(this.name, a, b);
}

const obj = { name: "Alice" };

fn.call(obj, 1, 2); // Alice 1 2
```

### `apply(thisArg, [argsArray])`
- **Calls the function immediately**
- Passes arguments as an array

```js
fn.apply(obj, [1, 2]); // Alice 1 2
```

### `bind(thisArg, arg1, arg2, ...)`
- **Does NOT call the function immediately**
- Returns a **new function** with **this** permanently bound

```js
const boundFn = fn.bind(obj, 1, 2);
boundFn(); // Alice 1 2
```

### Quick Summary:
- **call**: immediate call, arguments as a list
- **apply**: immediate call, arguments as an array
- **bind**: returns a new function, call later

## 2. Explain the `this` keyword in JavaScript.

The `this` keyword in JavaScript refers to **the object that is executing the current function**.  
Its value is **determined by how the function is called**, not where it is defined.

---

### 1) `this` in the global context
- In the browser, `this` refers to the **global object (`window`)**

```js
console.log(this); // window
```

### 2) `this` inside a regular function
- In **non–strict mode**, `this` defaults to window
- In **strict mode**, `this` is `undefined`
```js
function show() {
  console.log(this);
}

show(); // window (non-strict)
```

### 3) `this` inside an object method
- `this` refers to the **object that calls the method**
```js
const user = {
  name: "Bob",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Bob
```

### 4) `this` in arrow functions
- Arrow functions **do NOT have their own** `this`
- They inherit this from the **surrounding lexical scope**
```js
const user = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); // undefined
```

### 5) `this` with call / apply / bind
- this can be **explicitly set**
```js
function sayName() {
  console.log(this.name);
}

const obj = { name: "Charlie" };

sayName.call(obj); // Charlie
```

### Summary
- `this` depends on **how a function is called**
- Arrow functions inherit `this`
- `call`, `apply`, and `bind` can manually control `this`

## 3. What does the event loop do? What data structures does it use?

The **Event Loop** is a mechanism in JavaScript that allows **asynchronous code** to be executed **without blocking** the single-threaded main execution.

JavaScript itself is **single-threaded**, but the event loop enables it to handle asynchronous tasks such as timers, promises, and API calls.

---

### How the Event Loop works

1. JavaScript executes synchronous code in the **Call Stack**
2. Asynchronous tasks are sent to:
   - Web APIs (browser)
3. When ready:
   - Callback-based tasks go to the **Task Queue**
   - Promise-based tasks go to the **Microtask Queue**
4. The Event Loop:
   - Checks if the Call Stack is empty
   - Executes all Microtasks first
   - Then executes one Task from the Task Queue

---

### Data structures used by the Event Loop

1. **Call Stack**
   - Stores function calls
   - Executes code line by line

2. **Web APIs**
   - Provided by the browser (e.g. `setTimeout`, `fetch`, DOM events)

3. **Microtask Queue**
   - Used for Promises (`then`, `catch`, `finally`)
   - Has higher priority than the Task Queue

4. **Task Queue (Callback Queue)**
   - Used for callbacks like `setTimeout`, `setInterval`, DOM events

---

## 4. What are closures?

A **closure** is a feature in JavaScript where an **inner function remembers and can access variables from its outer (enclosing) function**, even after the outer function has finished executing.

In other words, a closure allows a function to **retain access to its lexical scope**.

---

### Why closures exist

JavaScript functions create their own scope.  
When a function is defined inside another function, it forms a closure over the outer function’s variables.

---

### Basic example

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
```

## 5. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?

**Asynchronous code** in JavaScript allows long-running operations to execute **without blocking** the main execution thread.  
This ensures the UI remains responsive while tasks like API calls or timers are running.

---

### Why asynchronous code is needed

JavaScript is **single-threaded**, meaning it can only execute one task at a time.  
If a long task blocks the thread, the page may freeze.

Asynchronous code solves this problem.

---

### How JavaScript achieves asynchronous behavior

JavaScript uses the following components together:

1. **Call Stack**
2. **Web APIs** (provided by the browser)
3. **Task Queue / Callback Queue**
4. **Microtask Queue**
5. **Event Loop**

---

## 6. What is async & await? How do we use them?

`async` and `await` are keywords in JavaScript used to work with **Promises** in a more readable and synchronous-looking way.

They are built **on top of Promises** and do not replace them.

---

### `async`
- Used to declare an asynchronous function
- An `async` function **always returns a Promise**
- If a value is returned, it is automatically wrapped in a resolved Promise

```js
async function greet() {
  return "Hello";
}

greet().then(result => {
  console.log(result); // Hello
});
```

### `await`
- Used **inside an async function**
- Pauses the execution of the function until the Promise is settled
- Returns the resolved value of the Promise

```js
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
```

**Error handling with async / await**
- Errors are handled using `try...catch`.
```js
async function loadData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

**Advantages of async / await**
- Easier error handling
- Avoids callback hell
- Code looks synchronous but runs asynchronously

---

**Summary**
- `async` declares an async function
- `await` waits for a Promise to resolve
- async/await improves readability over `.then()` chains

---

## 7. How many HTTP methods are there? Explain each one.

HTTP methods define the **type of action** a client wants to perform on a server resource.  
In RESTful APIs, the most commonly used methods are:

---

### Common HTTP methods

- **GET**  
  Retrieves data from the server.  
  It should **not modify** server state.

- **POST**  
  Sends data to the server to **create a new resource**.  
  Often used for form submission or creating records.

- **PUT**  
  Updates or **replaces an existing resource completely**.  
  The client specifies the resource URL.

- **PATCH**  
  Partially updates an existing resource.  
  Only the changed fields are sent.

- **DELETE**  
  Removes a resource from the server.

- **HEAD**  
  Same as GET, but returns **only headers**, no response body.

- **OPTIONS**  
  Returns the HTTP methods supported by the server.  
  Commonly used in CORS preflight requests.

---

### Difference between POST and PUT

- **POST**
  - Used to create a new resource
  - Resource ID is usually generated by the server
  - Not idempotent (sending multiple times may create multiple resources)

- **PUT**
  - Used to update or replace a resource at a specific URL
  - Client knows the resource identifier
  - Idempotent (multiple requests result in the same state)

---

### Summary
- HTTP methods describe actions on resources
- GET reads data
- POST creates data
- PUT replaces data
- PATCH partially updates data
- DELETE removes data

---

## 8. What is a Promise?

A **Promise** is an object that represents the **eventual result** of an asynchronous operation.  
It allows JavaScript to handle async tasks in a more structured and readable way.

---

### States of a Promise
A Promise has three possible states:
- **Pending**: initial state, neither fulfilled nor rejected
- **Fulfilled**: the operation completed successfully
- **Rejected**: the operation failed with an error

---

### Creating a Promise
A Promise is created using the `Promise` constructor, which takes an executor function with `resolve` and `reject`.

```js
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success");
  } else {
    reject("Error");
  }
});
```

---

**Consuming a Promise**
- Promises are consumed using `.then()`, `.catch()`, and `.finally()`.

```js
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });
```

--- 

**Why Promises are useful**
- Avoids callback hell
- Supports chaining
- Makes async code easier to read and maintain

---

**Summary**
- A Promise represents a future value
- It can be pending, fulfilled, or rejected
- `.then()` handles success, `.catch()` handles errors

---

## 9. What is promise chaining?

**Promise chaining** is a technique where multiple asynchronous operations are executed **in sequence** by chaining `.then()` calls together.

Each `.then()` returns a new Promise, which allows the next `.then()` in the chain to wait for the previous one to complete.

---

### Basic example

```js
fetch("/user")
  .then(response => response.json())
  .then(user => {
    console.log(user);
    return fetch(`/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log(posts);
  })
  .catch(error => {
    console.error(error);
  });
```

---

**Key points of promise chaining**
- Each `.then()` waits for the previous Promise to resolve
- Returning a value passes it to the next `.then()`
- Returning a Promise allows chaining async operations
- `.catch()` can handle errors from **any step** in the chain

---

**Why promise chaining is useful**
- Avoids deeply nested callbacks
- Makes async code more readable
- Centralizes error handling

---

**Summary**
- Promise chaining executes async tasks sequentially
- `.then()` returns a Promise
- Errors propagate down the chain to `.catch()`

---

## 10. Explain the three states of a Promise.

A Promise in JavaScript can be in **one of three states**:

1. **Pending**  
   The initial state.  
   The asynchronous operation has started, but the Promise is **neither fulfilled nor rejected yet**.

2. **Fulfilled**  
   The asynchronous operation completed **successfully**.  
   The Promise is resolved with a value, and `.then()` is executed.

3. **Rejected**  
   The asynchronous operation **failed**.  
   The Promise is rejected with a reason (error), and `.catch()` is executed.

---

### Summary
- A Promise starts as **pending**
- It becomes **fulfilled** on success
- It becomes **rejected** on failure
- Once settled (fulfilled or rejected), the state cannot change

---

## 11. What is the use of Promise.all()? How is it different from Promise.allSettled()?

Both `Promise.all()` and `Promise.allSettled()` are used to handle **multiple Promises at the same time**, but they behave differently when errors occur.

---

### `Promise.all()`
- Takes an array of Promises
- Resolves **only when all Promises resolve**
- If **any Promise rejects**, it immediately rejects (fail-fast)

```js
Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results); // array of resolved values
  })
  .catch(error => {
    console.error(error);
  });
```

**Use case**:
- When all requests are required to succeed (e.g. load multiple required resources).

---

`Promise.allSettled()`
- Takes an array of Promises
- Resolves `after all Promises finish`, regardless of success or failure
- Returns an array of objects describing each Promise’s result

```js
Promise.allSettled([p1, p2, p3]).then(results => {
  results.forEach(result => {
    console.log(result.status, result.value || result.reason);
  });
});
```

Each result object:
- `{ status: "fulfilled", value: … }`
-  `{ status: "rejected", reason: ... }`

**Use case**:
- When you want results from **all Promises**, even if some fail.

---

**Summary**
- `Promise.all()` → fails fast if any Promise rejects
- `Promise.allSettled()` → waits for all Promises to finish
- Choose based on whether partial failure is acceptable

---

## 12. What is a callback function?

A **callback function** is a function that is **passed as an argument to another function** and is executed **after a specific task is completed**.

Callbacks are commonly used to handle **asynchronous operations**, such as timers, events, and API requests.

---

### Basic example

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Alice", sayBye);
```

---

**Callback in asynchronous code**
```js
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
```

---

**Why callbacks are used**
- To run code **after** another task finishes
- To handle asynchronous behavior
- To make functions more flexible and reusable

---

**Callback drawbacks**
- Too many nested callbacks can lead to **callback hell**
- Code becomes harder to read and maintain

---

**Summary**
- A callback is a function passed as an argument
- It is executed later by another function
- Commonly used in async operations and event handling

---

## 13. Difference between 401 and 403 error code.

Both **401** and **403** are HTTP client error status codes, but they indicate **different authorization problems**.

---

### 401 Unauthorized
- The client is **not authenticated**
- Authentication credentials are missing, invalid, or expired
- The server requires authentication

**Example cases:**
- User is not logged in
- Invalid or expired token
- Missing Authorization header

---

### 403 Forbidden
- The client **is authenticated** but **does not have permission**
- The server understands the request but refuses to authorize it

**Example cases:**
- User logged in but lacks required role
- Accessing a restricted resource
- Insufficient permissions

---

### Summary
- **401** → authentication problem (who you are)
- **403** → authorization problem (what you are allowed to do)

---

## 14. What does `response.json()` do when fetching an API?

`response.json()` is a method of the `Response` object returned by `fetch()`.  
It **reads the response body and parses it as JSON**, then returns a **Promise** that resolves to a JavaScript object or array.

---

### How it works
- The server sends data as a JSON string
- `response.json()`:
  1. Reads the response body stream
  2. Converts (parses) the JSON text into a JavaScript object
  3. Returns a Promise with the parsed result

---

### Example

```js
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

---

**Important notes**
- `response.json()` is **asynchronous**
- It can only be called **once** per response
- If the response body is not valid JSON, the Promise will be rejected

---

**Summary**
- `fetch()` returns a Response object
- `response.json()` parses the response body as JSON
- It returns a Promise that resolves to usable JavaScript data

---

## 15. Describe the difference between cookies, sessionStorage, and localStorage in browsers.

Cookies, `sessionStorage`, and `localStorage` are all used to store data in the browser, but they differ in **lifetime, storage size, and how data is sent to the server**.

---

### Cookies
- Stored in the browser and **automatically sent to the server** with every HTTP request
- Can be used for authentication and session management
- Small storage size (about 4KB)
- Can have an expiration time
- Can be configured with security flags (`HttpOnly`, `Secure`, `SameSite`)

**Use case:** user authentication, session tracking

---

### sessionStorage
- Stores data for **one browser tab/session**
- Data is cleared when the tab or window is closed
- Data is **not sent to the server automatically**
- Larger storage capacity than cookies

**Use case:** temporary data for a single session (e.g., form progress)

---

### localStorage
- Stores data **persistently** in the browser
- Data remains until it is manually cleared
- Data is **not sent to the server automatically**
- Larger storage capacity than cookies and sessionStorage

**Use case:** user preferences, theme settings

---

### Summary comparison

| Feature | Cookies | sessionStorage | localStorage |
|------|--------|----------------|--------------|
| Sent to server | Yes | No | No |
| Lifetime | Configurable | Until tab closes | Persistent |
| Storage size | Small | Larger | Larger |
| Common use | Auth, sessions | Temp data | Persistent data |

---

## 16. Explain the Event Loop in JavaScript.

The **Event Loop** is a mechanism that allows JavaScript to handle **asynchronous operations** while remaining **single-threaded**.

Its main job is to decide **when** asynchronous callbacks are executed.

---

### Key components involved

1. **Call Stack**
   - Executes synchronous JavaScript code
   - Uses LIFO (Last In, First Out)

2. **Web APIs** (browser environment)
   - Handle async tasks such as:
     - `setTimeout`
     - `fetch`
     - DOM events

3. **Microtask Queue**
   - Stores Promise callbacks:
     - `.then()`
     - `.catch()`
     - `.finally()`
   - Has **higher priority** than the Task Queue

4. **Task Queue (Macrotask Queue)**
   - Stores callbacks from:
     - `setTimeout`
     - `setInterval`
     - DOM events

5. **Event Loop**
   - Continuously checks the Call Stack and queues

---

### Execution order

1. Execute all synchronous code in the **Call Stack**
2. When the Call Stack is empty:
   - Execute **all Microtasks**
3. Then execute **one Task** from the Task Queue
4. Repeat the process

---

### Example

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

**Output**:
```css
A
D
C
B
```

**Explanation**:
- Synchronous code runs first (`A`, `D`)
- Promise callback (microtask) runs before `setTimeout`
- Timer callback runs last

---

**Summary**
- JavaScript is single-threaded
- The Event Loop enables async execution
- Microtasks run before macrotasks
- Promises have higher priority than timers

---

## 17. What is the output of the following code?

```js
(function (a) {
  return (function () {
    console.log(a);
    a = 23;
  })();
})(45);
```

**Output**:
```css
45
```

**Explaination**:
- The outer function is an IIFE and is immediately called with the argument `45`
- Inside the outer function, the parameter `a` is set to `45`
- The inner function forms a closure over the variable `a`
- `console.log(a)` is executed before `a` is reassigned to `23`
- Therefore, the value printed is `45`

