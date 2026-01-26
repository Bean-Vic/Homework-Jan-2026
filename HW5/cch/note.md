JS 3

2026-01-19-LC-217

1. What are the diﬀerences between call, apply & bind?

All three methods are used to manually set this.
call and apply execute the function immediately, while bind returns a new function to be called later.
The difference between call and apply is how arguments are passed: call takes them individually, apply takes an array.

2. Explain the this keyword in JavaScript.

In JavaScript, this refers to the object that is currently calling the function.

3. What does the event loop do? What data structures does it use?

The event loop first checks if the call stack is empty.
If it is, it takes one task from the macrotask queue and pushes it onto the call stack.
After that task finishes, it runs all microtasks in the microtask queue.
Then it repeats the process.

4. What are closures?

A closure is created when a function remembers and can access variables from its lexical scope even after the outer function has finished executing.

5. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?

Asynchronous code means that tasks can be started without blocking the main thread, and the result is handled later when it’s ready, allowing other code to continue running.

JavaScript achieves asynchronous behavior using the event loop, along with Web APIs (or Node APIs), the callback queue, and the microtask queue. Long-running tasks are handled outside the main thread, and when they finish, their callbacks are queued to be executed later by the event loop.

Asynchronous code in JavaScript allows long-running tasks like network requests or timers to run without blocking the main thread. JavaScript achieves this using Web APIs or Node APIs, task queues, and the event loop. When async tasks finish, their callbacks are placed into queues, and the event loop executes them when the call stack is empty.

6. What is async & await? How do we use them?

Async and await are syntax sugar built on top of Promises that make asynchronous code look and behave more like synchronous code, making it easier to read and maintain.

7. How many HTTP methods are there? Explain each one.

Common HTTP methods include GET, POST, PUT, and DELETE.

GET is used to retrieve data, POST is used to create new resources, PUT replaces an entire resource, PATCH updates part of a resource, and DELETE removes a resource.
Other methods include HEAD and OPTIONS, which are mainly used for metadata and capability checks.

a. What is the diﬀerence between POST and PUT?

POST is used to create a new resource,
while PUT is used to replace or update a resource at a specific URL.

8. What is a Promise?

A Promise is a JavaScript object that represents a value that may be available now, in the future, or never.
It is used to handle asynchronous operations and has three states: pending, fulfilled, and rejected.

9. What is promise chaining?

Promise chaining is a pattern where multiple asynchronous operations are executed in sequence by returning a Promise inside each .then() callback.
The result of one Promise is passed to the next .then().

10. Explain the three states of a Promise.

A Promise starts in the pending state.
It becomes fulfilled when the operation completes successfully, or rejected when an error occurs.
Once settled, the state cannot change.

11. What is the use of Promise.all()? How is it different from Promise.allSettled?

Promise.all resolves when all promises resolve and rejects as soon as one promise rejects.
Promise.allSettled waits until all promises are settled, either fulfilled or rejected, and always resolves with the results.

12. What is a callback function?

A callback function is a function that is passed as an argument to another function and is executed later.

13. Difference between 401 and 403 error code.

401 Unauthorized
403 the user does not have permission to access the resource.

有些系统会故意返回 404 而不是 403：
👉 为了不让你知道资源存在（安全策略）

14. What does response.json() do when fetching an API?
    response.json() reads and parses the response body and returns another Promise with the parsed data.
    It reads the response body and converts the JSON string into a JavaScript object, and it returns a Promise.

fetch("/api/user")
.then(res => res.json())
.then(data => {
console.log(data); // JS object, not JSON string
});’

const res = await fetch("/api/user");
const data = await res.json();

15. Describe the difference between a cookie, sessionStorage and localStorage in browsers.

Cookies are used for server communication （session id）and are sent with every request.
localStorage persists even after the browser is closed, while sessionStorage only lasts for the lifetime of the tab.
Cookies are small and can have expiration and security flags, while localStorage and sessionStorage are only accessible by JavaScript.
httpOnly cookie + server-side validation
￼

登录凭证是放在浏览器哪？
Where is the credential stored?
Set-Cookie: session=abc123; HttpOnly

每次发请求时，是谁把凭证加上去的？🟢 Cookie

👉 浏览器自动做

只要：
• 域名匹配
• SameSite 允许

🟢 Cookie（httpOnly）

优势：
• JS 读不到
• XSS 也拿不到 token
• 后端可以控制过期、失效

配合：
• SameSite
• CSRF token

👉 非常安全

身份凭证可以存在 cookie 或 JS 可访问存储中；
cookie 会由浏览器自动附加到请求中，而 Authorization header 需要 JS 手动添加；
httpOnly cookie 更安全，因为 JS 无法读取；
Zero Trust Frontend 并不是不用 cookie，而是要求后端在每个请求中重新验证凭证，而不是相信前端状态。

16. Explain the Event Loop in JavaScript.

The event loop coordinates the call stack, macrotask queue, and microtask queue

- It decides when asynchronous callbacks are executed

17. What is the output of the following code?
    (function (a) {
    return (function () {
    console.log(a);
    a = 23;
    })();
    })(45);

45
