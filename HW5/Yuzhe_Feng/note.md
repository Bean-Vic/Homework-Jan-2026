# HW5 Q&A

### 1. What is the difference between innerHTML and textContent?

innerHTML gets or sets the HTML markup inside an element and causes the browser to parse and render any HTML tags.
textContent gets or sets only the textual content of an element and treats all input as plain text.
Compared to innerHTML, textContent is more secure and generally performs better because it does not reparse the DOM.
innerHTML should be used only when inserting trusted HTML content.

### 2. What are the diﬀerences between call, apply & bind?

call, apply, and bind are methods used to explicitly control the value of this when invoking a function.
Both call and apply invoke the function immediately, with call accepting arguments individually and apply accepting arguments as an array.
bind does not invoke the function immediately but instead returns a new function with a fixed this value.
These methods are commonly used to control execution context and avoid losing this.

### 3. Explain the this keyword in JavaScript.

In JavaScript, `this` refers to the execution context of a function, and its value is determined by how the function is called, not where it is defined.
When a function is called with `new`, `this` refers to the newly created object.
Second, with `call`, `apply`, or `bind`, `this` is explicitly set by the developer.
Third, when a function is called as an `obj.method()`, `this` refers to the object before the dot.
Otherwise, default binding applies — `this` is undefined in strict mode and the global object in non-strict mode.
Arrow functions do not have their own this; they lexically inherit this from the surrounding scope.

### 4. What does the event loop do? What data structures does it use?

The event loop is the scheduling mechanism that lets JavaScript handle asynchronous callbacks while staying single-threaded. It monitors the call stack, and when the stack becomes empty, it pulls the next callback from the queues and pushes it onto the stack to run.

The main data structures are the call stack, the macrotask queue (task queue) for things like timers and DOM events, and the microtask queue for Promise callbacks and similar jobs. A key rule is that the runtime drains the microtask queue before moving on to the next macrotask, which is why Promise.then typically runs before setTimeout.

### 5. What is the callback queue?

The callback queue is a data structure that stores callbacks from asynchronous operations, such as timers and DOM events, after they complete.
These callbacks do not run immediately. Instead, the event loop waits until the call stack is empty and then moves a callback from the queue onto the call stack for execution.
The callback queue is also known as the macrotask queue and has lower priority than the microtask queue, which is why Promise callbacks run first.

### 6. What are closures?

A closure is when a function can still access variables from its outer scope, even after that outer function has finished executing.
This happens because functions in JavaScript remember the scope in which they were created.
Closures are often used to keep data private, create reusable functions, and handle asynchronous callbacks.

### 7. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?

Asynchronous code in JavaScript refers to operations that do not block the main execution thread while waiting for a result, such as timers, network requests, or user events.

JavaScript achieves asynchronous behavior by delegating time-consuming tasks to the runtime environment, like the browser or Node.js, while continuing to execute synchronous code.

Once an asynchronous operation completes, its callback or Promise handler is placed into a queue, and the event loop schedules it to run when the call stack is empty.

This allows JavaScript to remain single-threaded while still handling asynchronous tasks efficiently.

### 8. What is async & await? How do we use them?

async and await are syntax sugar in JavaScript that simplify working with asynchronous code.

An async function always returns a Promise, and await pauses the execution of that function until the Promise resolves.
This allows asynchronous code to be written in a more readable, synchronous-looking style without blocking the JavaScript thread.

Internally, async / await is built on top of Promises and works with the event loop.

### 9. How many HTTP methods are there? Explain each one.

There are several HTTP methods defined by the specification, but the most commonly used ones are GET, POST, PUT, PATCH, and DELETE.

GET is used to retrieve data and should not modify server state.
POST is used to create resources or submit data to the server.
PUT updates an entire resource, while PATCH updates only part of a resource.
DELETE removes a resource from the server.
Other methods like HEAD and OPTIONS are also used in specific scenarios, such as checking headers or handling CORS.

### 10. What is the diﬀerence between GET and POST? What about POST and PUT?

GET is used to retrieve data and should not modify server state, while POST is used to submit data and usually causes a change on the server.

Between POST and PUT, POST is typically used to create new resources where the server assigns the resource identifier, whereas PUT is used to update or replace a resource at a specific URI provided by the client.

Another key difference is idempotency: PUT is idempotent, while POST is not.

### 11. What is a Promise?

A Promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that is not yet available, allowing JavaScript to continue executing other code without blocking the main thread.

It can be in one of three states: pending, fulfilled, or rejected, and once it is settled, its state cannot change.

Promises allow asynchronous code to be handled in a more structured and readable way through chaining and centralized error handling, and they form the foundation of async / await.

### 12. What is promise chaining?

Promise chaining is a pattern where multiple asynchronous operations are linked together using then(), so that each step waits for the previous one to complete.

Each then() returns a new Promise, allowing results to be passed down the chain and errors to be handled centrally with catch().

This makes asynchronous code more readable and avoids deeply nested callbacks.

### 13. Explain the three states of a Promise.

A Promise in JavaScript can be in one of three states.
Pending means the asynchronous operation has started but has not completed yet.
Fulfilled means the operation completed successfully and produced a value.
Rejected means the operation failed and produced an error.

A Promise can only transition from pending to either fulfilled or rejected, and once it is settled, its state cannot change.

### 14. What is the use of Promise.all()? How is it different from Promise.allSettled?

Promise.all() is used to run multiple Promises in parallel and waits until all of them are fulfilled. When successful, it resolves with an array of results in the same order as the input Promises. If any Promise rejects, Promise.all() immediately rejects with that error.

Promise.allSettled(), on the other hand, waits for all Promises to settle, regardless of whether they are fulfilled or rejected.
It always resolves with an array describing the outcome of each Promise.

The key difference is that Promise.all() is fail-fast, while Promise.allSettled() is useful when partial failures are acceptable.

### 15. What is the advantage of Promises over callbacks?

Promises improve asynchronous code by making it more readable, composable, and easier to manage compared to callbacks.

They avoid deeply nested callback structures, allow centralized error handling through chaining, and make control flow more explicit.

In addition, Promises provide built-in utilities for coordinating multiple asynchronous operations and serve as the foundation for async / await.

### 16. Describe the difference between a cookie, sessionStorage and localStorage in browsers.

They are all used to store data in the browser, but they differ in scope and behavior.

Cookies are small pieces of data that are automatically sent to the server with each HTTP request and are commonly used for authentication and session management.

localStorage stores data persistently on the client and remains available even after the browser is closed. It is not sent to the server automatically.

sessionStorage is similar to localStorage, but its data is limited to a single browser tab and is cleared when the tab is closed.
