## 1. What are the differences between call, apply & bind?

`call` and `apply` both run the function immediately.The difference is that the apply() method takes the arguments of the function as an array instead of the individual arguments.
`bind` does not call the function immediately. It returns a new function where this is already set.

---

## 2. Explain the `this` keyword in JavaScript.

This refers to the object that is calling the current function.
Its value is determined by how the function is called, not where it is defined.

---

## 3. What does the event loop do? What data structures does it use?

The event loop is responsible for handling asynchronous operations.
It uses the call stack and the callback queues to decide when tasks should be run.

---

## 4. What are closures?

A closure allows inner functions to access outer values after the outer function has finished.

---

## 5. What is asynchronous code in JavaScript? How does JavaScript achieve it?

Asynchronous code does not always run in the order it is written.
JavaScript achieves this using callbacks, Promises, async/await, the event loop, and browser APIs.

---

## 6. What is async & await? How do we use them?

aAsync and await make asynchronous code easier to read.
An async function returns a Promise, and await waits for the result before continuing the code..

---

## 7. How many HTTP methods are there? Explain each one.

Common HTTP methods include GET, POST, PUT, PATCH, and DELETE.
GET is used to retrieve data, POST is used to create new data, PUT is used to update or replace existing data, PATCH is used to partially update data, and DELETE is used to remove data.

### What is the difference between POST and PUT?

POST usually creates new data, and PUT updates or replaces data that already exists.

---

## 8. What is a Promise?

a promise is an object that returns a value which you hope to receive in the future, but not now. A Promise represents the final result of an asynchronous operation.

---

## 9. What is promise chaining?

Promise chaining means using `.then()` multiple times so that the result of one Promise is passed to the next.

---

## 10. Explain the three states of a Promise.

A Promise has three states: pending, fulfilled, and rejected.
Pending means the task is still running, fulfilled means it finished successfully, and rejected means it failed.

---

## 11. What is the use of Promise.all()? How is it different from Promise.allSettled()?

Promise.all() waits for all Promises to succeed and fails if any of them fail.
Promise.allSettled() waits for all Promises to finish and returns the results, no matter what happens.

---

## 12. What is a callback function?

A callback function is a function passed as an argument to another function and is usually run after an operation is completed.

---

## 13. Difference between 401 and 403 error code.

401 means the user is not authenticated.  
403 means the user is authenticated but does not have permission.

---

## 14. What does response.json() do when fetching an API?

It reads the response body and converts it into a JavaScript object.

---

## 15. Describe the difference between a cookie, sessionStorage and localStorage.

Cookies are small pieces of data that have an expiration time and are sent to the server with each request.
sessionStorage stores data for one browser session and is cleared when the tab is closed.
localStorage stores data until it is manually cleared.

---

## 16. Explain the Event Loop in JavaScript.

The Event Loop prevents JavaScript from being blocked by long tasks.
It allows asynchronous code to run in the background.
When the call stack is empty, the Event Loop moves finished tasks from the queue into the stack so they can run.


---

## 17. What is the output of the following code?

```js
(function (a) {
  return (function () {
    console.log(a);
    a = 23;
  })();
})(45);

The output is 45 because a is logged before it is changed.
The inner function can access a, so it prints the original value first.
