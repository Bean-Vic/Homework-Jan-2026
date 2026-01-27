1. What is the difference between innerHTML and textContent?
    - innerHTML treats the content as HTML. If you put tags in it, the browser will parse and render them.
    - textContent treats everything as plain text. Tags are shown literally. So, innerHTML is for inserting HTML structure, while textContent is safer for showing text only.
  
2. What are the diﬀerences between call, apply & bind?
    - They are all used to control what this refers to inside a function.
    - call runs the function immediately and passes arguments one by one.
    - apply runs the function immediately but passes arguments as an array.
    - bind does not run the function right away; it returns a new function with this permanently set.

3. Explain the this keyword in JavaScript.
    - this refers to the object that is currently calling the function.
    - Its value depends on how the function is called, not where it is written.
    - In simple terms: “Who is calling me?” is what decides this.

4. What does the event loop do? What data structures does it use?
    - The event loop is what allows JavaScript to handle asynchronous tasks even though it is single-threaded.
    - It checks whether the call stack is empty, and if so, it takes tasks from queues and puts them into the stack to run.

5. What is the callback queue?
    - The callback queue holds tasks like: setTimeout callbacks, DOM event handlers
    - They wait there until the call stack is empty.

6. What are closures?
    - A closure is when a function remembers the variables from where it was created, even after that outer function has finished running.
    - It lets functions keep access to their original scope.

7. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?
    - Asynchronous code allows JavaScript to start a task and continue running other code instead of waiting.
    - JavaScript achieves this using:
    - Browser APIs
    - Event loop
    - Queues
    - Promises and async/await

8. What is async & await? How do we use them?
    - They make asynchronous code look like synchronous code.
    - async marks a function that returns a Promise.
    - await pauses execution until a Promise finishes.

9. How many HTTP methods are there? Explain each one.
 i. What is the diﬀerence between GET and POST? What about POST and PUT?
    Common ones:
    - GET: read data
    - POST: create data
    - PUT: update or replace data
    - PATCH: partially update data
    - DELETE: remove data
    - GET vs POST: GET retrieves data and sends parameters in the URL. POST sends data in the body and usually creates something.
    - POST vs PUT: POST creates new resources. PUT updates existing resources and is idempotent.

10.  What is a Promise?
    - A Promise represents a value that will be available in the future, either success or failure.
    - It is a way to handle asynchronous operations cleanly.

11.  What is promise chaining?
    - Promise chaining means linking multiple .then() calls so each step uses the result of the previous one.
    - It avoids nested callbacks.

12.  Explain the three states of a Promise.
    Three states of a Promise
    - Pending: still running
    - Fulfilled: finished successfully
    - Rejected: finished with an error

13.  What is the use of Promise.all()? How is it different from Promise.allSettled?
    - Promise.all fails immediately if any Promise fails.
    - Promise.allSettled waits for all Promises and reports each result, success or failure.

14.  What is the advantage of Promises over callbacks?
    - Avoid deeply nested code
    - Have clearer error handling
    - Are easier to read and maintain
    - Work naturally with async/await

15.  Describe the difference between a cookie, sessionStorage and localStorage in browsers.
    Cookies:
    - Small
    - Sent to the server with every request
    - Often used for authentication
    sessionStorage:
    - Only exists during one browser tab session
    - Not sent to the server
    localStorage:
    - Persists even after closing the browser
    - Not sent to the server
    - Used for long-term client-side data