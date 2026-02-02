1. What are the differences between call, apply, & bind?
call and apply invoke a function immediately while setting the value of this, but call accepts arguments individually and apply accepts them as an array. bind returns a new function with this permanently bound and does not execute it immediately.

2. Explain the this keyword in JavaScript.
The this keyword refers to the object that is executing the current function. Its value depends on how the function is called, such as a method call, constructor, or regular function invocation.

3. What does the event loop do? What data structures does it use?
The event loop manages asynchronous operations by continuously checking whether the call stack is empty. It uses the call stack, callback (task) queue, microtask queue, and the heap.

4. What are closures?
A closure is created when a function retains access to variables from its outer scope even after the outer function has finished executing. Closures allow data encapsulation and persistent state.

5. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?
Asynchronous code allows tasks to run without blocking the main thread. JavaScript achieves this using callbacks, promises, async/await, and the event loop.

6. What is async & await? How do we use them?
async and await provide a cleaner way to work with promises. async functions always return a promise, and await pauses execution until the promise resolves.

7. How many HTTP methods are there? Explain each one.
Common HTTP methods include GET (retrieve data), POST (create data), PUT (update or replace data), PATCH (partially update data), and DELETE (remove data). Others like OPTIONS and HEAD are used for metadata and communication control.

7a. What is the difference between POST and PUT?
POST is used to create new resources and is not idempotent. PUT updates or replaces a resource and is idempotent.

8. What is a Promise?
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows handling async results using .then() and .catch().

9. What is promise chaining?
Promise chaining allows multiple asynchronous operations to run sequentially. Each .then() returns a new promise, passing its result to the next handler.

10. Explain the three states of a Promise.
A promise can be in one of three states: pending, fulfilled, or rejected. Once fulfilled or rejected, the state becomes settled and cannot change.

11. What is the use of Promise.all()? How is it different from Promise.allSettled()?
Promise.all() resolves when all promises succeed and rejects if any fail. Promise.allSettled() waits for all promises to finish, regardless of success or failure.

12. What is a callback function?
A callback function is passed as an argument to another function and executed later. It is commonly used for asynchronous operations and event handling.

13. Difference between 401 and 403 error code.
401 indicates that authentication is required or has failed. 403 means the user is authenticated but does not have permission to access the resource.

14. What does response.json() do when fetching an API?
response.json() reads the response body and parses it into a JavaScript object. It returns a promise that resolves with the parsed data.

15. Describe the difference between a cookie, sessionStorage, and localStorage in browsers.
Cookies are sent to the server with each request and can have expiration dates. sessionStorage stores data per session, while localStorage persists data until manually cleared.

16. Explain the Event Loop in JavaScript.
The event loop allows JavaScript to perform non-blocking operations despite being single-threaded. It moves tasks from the task queues to the call stack when it becomes empty.

17. What is the output of the following code?
(function (a) {
 return (function () {
 console.log(a);
 a = 23;
 })();
})(45);

The output is 45. The inner function forms a closure over a, so it logs the original value before a is reassigned to 23.