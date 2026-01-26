1. What are the differences between call, apply & bind?
    -call invokes inmediatlly  and accpets the argumentsindividyally
    -apply invokes the func imitediately and accepts arguments as an array
    - bind  does not invoke immediately; it returns a new function with this bound

2. Explain the this keyword in JavaScript.
    this refers to the object that is executing the current function, and its value is determined at call time, not at definition time.(it denpends on how a function is called)
    -In a regular function, this refers to the global object (or undefined in strict mode)
    -In an object method, this refers to the object
    -In a constructor, this refers to the new instance
    -Arrow functions do not have their own this

3. What does the event loop do? What data structures does it use?
    The Event Loop coordinates the execution of synchronous and asynchronous code in JavaScript.
    it works as: 
        -Execute the Call Stack
        -Process all microtasks
        -Execute one macrotask
        -Repeat
4. What are closures?
    A closure is created when a function remembers and accesses variables from its outer scope, even after the outer function has finished executing.
    (it used for: Data encapsulation, Private variables, Function factories)

5. What is asynchronous code in JavaScript? How does JavaScript
achieve asynchronous code?
    Asynchronous code allows JavaScript to perform long-running tasks without blocking the main thread. 
    JavaScript achieves this using: Web APIs, Callbacks, Promis, async/await, the event loop

    
6. What is async & await? How do we use them?
    -async makes a function return a Promise
    -await pauses execution until the Promise resolves
    So they provide a cleaner syntax for handling asynchronous code compared to .then().
    (they provides syntactic sugar which improves readability)

7. How many HTTP methods are there? Explain each one.
    The common HTTP methods like:
    -GET: retrieve data
    -POST: create a resource
    -PUT: UPDATE AND REPLACE A RESOURCE, need provide all fileds
    -PATCH: update a part of the resoure
    -DELETE: remove a resoure

    a. What is the difference between POST and PUT?
     -post: create a resoure, NOT idempotent, (many times post will create the different id of them)
     -put: replace a resourse,is idempotent

8. What is a Promise?
    it is an object which is the eventual result of an asynchronus operation
    it helps aviod callback hell and allows chaining

9. What is promise chaining?
    Promise chaining is using .then() to excute asynchronous operations sequentially.
    so each .then() receives the result of the previous one. So Promise chaining creates a readable async workflow.

10. Explain the three states of a Promise.
    Pending – initial state
    Fulfilled – operation succeeded
    Rejected – operation failed 
    Once settled, a Promise’s state cannot change.

11. What is the use of Promise.all()? How is it different
from Promise.allSettled?
    Promise.all() resolves only if all Promises succeed
    Promise.allSettled() resolves after all Promises finish, regardless of outcome


12. What is a callback function?
    A callback function is a function passed as an argument to another function and executed later.
    Callbacks are commonly used for asynchronous operations. it executed after another function finishes.

13. Difference between 401 and 403 error code.
    401 Unauthorized: user is not authenticated (not logged in)
    403 Forbidden: user is authenticated but lacks permission ( not allowed)

14. What does response.json() do when fetching an API?
    response.json() reads the response body and parses it into a JavaScript object.
    It returns a Promise.
    
15. Describe the difference between a cookie, sessionStorage
and localStorage in browsers.
    -Cookies are sent automatically with HTTP requests, while sessionStorage and localStorage stay on the client unless you manually send them. 
    -Cookies are commonly used for authentication and session management, and can be secured with HttpOnly, Secure, and SameSite.
    -lifecycle: Cookie( Session cookie, Persistent cookie has the expires and max-age); sessionStorage denpand on the current tab, and cleared when the tab is closed; localStroage can be stores untill be cleared manually.
    -Because both sessionStorage and  localStorage are accessible via JavaScript, they are vulnerable to XSS, so we should avoid storing sensitive tokens there.


16. Explain the Event Loop in JavaScript.
    The Event Loop coordinates the execution of synchronous and asynchronous code in JavaScript.
    it works as: 
        -Execute the Call Stack
        -Process all microtasks
        -Execute one macrotask
        -Repeat

17. What is the output of the following code?
(function (a) {
 return (function () {
 console.log(a);
 a = 23;
 })();
})(45);

for this code it output as 45;
Because the inner function forms a closure over a,
console.log(a) runs before a is reassigned