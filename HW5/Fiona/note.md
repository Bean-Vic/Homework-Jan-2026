##  What are the differences between call, apply & bind?
    They’re all used to control the value of this.
    call takes arguments one by one, while apply takes arguments as an array.
    Both call and apply execute the function immediately, but bind returns a new function with this permanently bound 
    to a specific value.

##  Explain the this keyword in JavaScript.
    this refers to the object that calls the function.
    Its value is determined at runtime and depends on how the function is invoked, so it’s dynamic.
    In regular functions, this depends on the caller, while in arrow functions, this is inherited from the surrounding 
    scope.

##  What does the event loop do? What data structures does it use?
    The event loop allows JavaScript to handle asynchronous tasks without blocking the main thread.
    JavaScript is single-threaded, but the event loop schedules tasks so the app stays responsive.
    It coordinates the call stack, the callback queue, and the microtask queue.
    I like to think of it as cooking dinner — you’re not just cooking one dish at a time.
    You might be stir-frying vegetables, boiling soup, and roasting chicken in the oven, and everything gets finished 
    and served smoothly.

##  What are closures?
    A closure is when a function remembers variables from its outer scope, even after the outer function has finished 
    executing.
    For example, you can have an outer function with an inner function nested inside it.
    A variable is declared in the outer function, and even after the outer function finishes, the inner function can 
    still access it, so JavaScript keeps that variable in memory.
    Closures are useful for data encapsulation and async logic, but they need to be handled with care because they can 
    lead to memory leaks.

##  What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?
    Asynchronous code allows tasks to run without blocking the main thread.
    It’s handled through callbacks, Promises, and async/await, with the help of Web APIs and the event loop. This helps 
    keep the webpage responsive and smooth.
    If you dont handle the async code carefully, it can cause delayed updates or wrong execution order.

##  What is async & await? How do we use them?
    Async and await are built on top of Promises to make asynchronous code easier to read and write.
    You put async before a function and use await on a Promise, which pauses the execution of that function until the 
    Promise resolves, without blocking the main thread.

##  How many HTTP methods are there? Explain each one.
    Common HTTP methods include GET, POST, PUT, DELETE, and PATCH.
    GET retrieves data, POST creates data, PUT replaces data, PATCH updates part of data, and DELETE removes data.

### a What is the difference between POST and PUT? 
    POST is for creating new stuff where the server decides the ID—if you hit it twice, you get two records. PUT is for 
    replacing a specific resource at a specific URL, so no matter how many times you send the same request, the final 
    state of the server stays exactly the same.
##  What is a Promise?
    A Promise is an object that represents the result of a future asynchronous operation.
    It will eventually be settled, either fulfilled with a value or rejected with an error.
    This makes it easier to handle asynchronous success and failure in a structured way.

##  What is promise chaining?
    Promise chaining is linking multiple asynchronous operations together using .then(), where each step depends on the 
    result of the previous one.
    Each .then() returns a new Promise, which allows the chain to continue.
    I like to think of it as finding a book in a library — you first get the book ID, then use that to locate the 
    category, the shelf, and finally the exact spot.
    Promise chaining helps prevent callback hell by flattening the structure and making the code easier to read and 
    maintain.

##  Explain the three states of a Promise.
    There are three Promise states: pending, fulfilled, and rejected.
    A Promise starts in the pending state while the asynchronous operation is in progress.
    Once the operation finishes, the Promise is either fulfilled with a value or rejected with an error.
    Once a Promise is settled, its state can no longer be changed.

##  What is the use of Promise.all()? How is it different from Promise.allSettled?
    Promise.all() is all or nothing — it fails fast if any Promise rejects.
    Promise.allSettled() is more patient; it waits for all Promises to finish, regardless of success or failure, and 
    returns a full report of their results.
    You would use Promise.all when you need all results to succeed, and Promise.allSettled when partial success is 
    acceptable.

##  What is a callback function?
    A callback is a function passed into another function to be executed later.
    It’s often used for asynchronous operations like events or timers.
    I try to avoid deeply nested callbacks because they can lead to callback hell.

##  Difference between 401 and 403 error code.
    401 means authentication is missing or invalid, you can resolve it by login.
    403 means permission is denied, you do not have the right to access it eventhough you have already loged in. 

##  What does response.json() do when fetching an API?
    response.json() reads the response body, parses the JSON, and returns a Promise that resolves to a JavaScript object.
    It can only be called once because the response body is a stream and can only be consumed once.

## 1 Describe the difference between a cookie, sessionStorage and localStorage in browsers.
    Cookies are tiny and get sent to the server with every request, mostly for authorization. localStorage stays in the 
    browser forever (until deleted), while sessionStorage wiped clean the moment you close the browser tab.

##  Explain the Event Loop in JavaScript.
    The event loop is the mechanism that allows JavaScript to handle asynchronous jobs without blocking the main thread.
    JavaScript first runs synchronous code, then processes microtasks like Promises, and finally macrotasks such as 
    timers or events. The event loop continuously checks the call stack, and when it’s empty, it pulls tasks from the appropriate queue to 
    execute.

##  What is the output of the following code?
    response.json()
    (function (a) {
    return (function () {
    console.log(a);
    a = 23; 
    })();
    })(45);

    It logs 45.
    The outer function is an IIFE, so it executes immediately, and the inner function is also executed right away.
    The inner function doesn’t have its own variable a, so it looks it up from the outer scope.
    console.log(a) runs before a is reassigned, so it logs 45.
    The reassignment to 23 happens after the log, which is why the output is 45.
