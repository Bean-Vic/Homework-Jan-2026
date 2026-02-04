1. What are the differences between call, apply & bind?

    Call, apply, and bind are used to control the value of this in a function.
    call runs the function immediately and passes arguments one by one.
    apply also runs the function immediately, but it passes arguments as an array.
    bind does not run the function. It returns a new function with this fixed.

2. Explain the this keyword in JavaScript.

    The this keyword refers to who is calling the function.
    In a normal function, this usually refers to the global object.
    In an object method, this refers to the object itself.
    In an arrow function, this comes from the parent scope.
    We can also manually set this using call, apply, or bind.

3. What does the event loop do? What data structures does it use?

   The Event Loop controls how JavaScript handles asynchronous code.
    It checks the call stack and decides when to execute queued tasks.
    It uses the call stack, the task queue, and the microtask queue. 

4. What are closures?

    A closure is when a function remembers variables from its outer scope.
    Even after the outer function finishes, the inner function can still use those variables.

5. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?

    Asynchronous code allows JavaScript to do multiple tasks without blocking the main thread.
    JavaScript achieves this using callbacks, promises, async and await, the event loop, and browser Web APIs.  

6. What is async & await? How do we use them?

    Async and await are used to write asynchronous code in a synchronous style.
    An async function always returns a promise.
    The await keyword pauses the function until the promise is resolved.

7. How many HTTP methods are there? Explain each one.
    a. What is the difference between POST and PUT?

    There are 5 common HTTP methods.
    GET is used to retrieve data.
    POST is used to create new data.
    PUT is used to update an entire resource.
    PATCH is used to update part of a resource.
    DELETE is used to remove data.  

8. What is a Promise?

    A Promise represents a value that will be available in the future.
    It is used to handle asynchronous operations such as API calls.

9. What is promise chaining?

    Promise chaining means using multiple .then() calls together.
    Each .then() receives the result from the previous promise.

10. Explain the three states of a Promise.

    A promise has three states.
    Pending means the operation is still in progress.
    Fulfilled means the operation succeeded.
    Rejected means the operation failed.

11. What is the use of Promise.all()? How is it different from Promise.allSettled?

    Promise.all() takes an array of promises and returns a new promise that resolves when all of them are fulfilled, or rejects if any one of them rejects.
    Promise.allSettled() takes an array of promises and returns a new promise that resolves when all of them have settled (either fulfilled or rejected), providing an array of results for each promise.   

12. What is a callback function?

    A callback function is a function passed into another function.
    It runs after a task is completed.

13. Difference between 401 and 403 error code.
    
    401 error means the user is not aunthenticated.
    403 error means the user is authenticated but does not have permission to access the resource.

14. What does response.json() do when fetching an API?

    response.json() parses the JSON data from the API response and returns a promise that resolves to a JavaScript object.

15. Describe the difference between a cookie, sessionStorage and localStorage in browsers.

    Cookies are small and are sent to the server with every request.
    sessionStorage stores data for one browser tab and is cleared when the tab closes.
    localStorage stores data permanently until it is manually removed.

16. Explain the Event Loop in JavaScript.

    The Event Loop is a mechanism that allows JavaScript to perform non-blocking operations.
    It continuously checks the call stack and the task queue.
    If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution.
    This allows asynchronous code to run after synchronous code has completed.

17. What is the output of the following code?
```javascript 
(function (a) {
 return (function () {
 console.log(a);
 a = 23;
 })();
})(45);
```
    the outer function is called with a = 45.
    the inner function is immediately invoked.
    when console.log(a) is executed, a is not yet assigned to 23, so it logs 45.
    therefore, the output is 45.