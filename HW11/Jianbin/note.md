# HW11 - JavaScript Backend Fundamentals

## 1. What is an API? What problem does it solve?
An API (Application Programming Interface) is a set of rules that lets different software systems communicate with each other. It solves the problem of how a frontend, mobile app, or another service can request data or trigger actions from a backend in a consistent way.

## 2. What is JSON? What are common JSON format mistakes?
JSON (JavaScript Object Notation) is a lightweight text format for storing and exchanging data.
Common mistakes:
- using single quotes instead of double quotes
- leaving a trailing comma
- forgetting quotes around property names
- using `undefined`, functions, or comments inside JSON
- missing commas or braces

## 3. What is RESTful API?
A RESTful API is an API designed around resources and standard HTTP methods like GET, POST, PATCH, PUT, and DELETE. It usually uses URLs to represent resources and JSON for request/response bodies.

## 4. RESTful API vs GraphQL
REST uses multiple endpoints and each endpoint usually returns a fixed data shape. GraphQL usually has one endpoint and lets the client ask for exactly the fields it needs. REST is simpler and easier to cache with HTTP. GraphQL is more flexible but can be more complex to design and secure.

## 5. What is CRUD? How does it map to HTTP methods?
CRUD means Create, Read, Update, Delete.
- Create -> POST
- Read -> GET
- Update -> PUT or PATCH
- Delete -> DELETE

## 6. What is the difference between POST and PUT?
POST is usually used to create a new resource, and it is not idempotent. PUT is usually used to fully replace a resource at a known URL, and it is idempotent.

## 7. What does idempotent mean in HTTP? Which methods are idempotent?
Idempotent means making the same request multiple times gives the same result on the server as making it once. GET, PUT, DELETE, HEAD, and OPTIONS are idempotent. POST is usually not idempotent.

## 8. What is the difference between req.params, req.query, and req.body in Express?
- `req.params`: values from the URL path, such as `/tasks/:id`
- `req.query`: values from the query string, such as `?page=1&limit=10`
- `req.body`: data sent in the request body, usually JSON for POST/PATCH/PUT

## 9. List some common HTTP status codes and explain when you would use them
- 200 OK: request succeeded
- 201 Created: resource created successfully
- 204 No Content: request succeeded but no response body
- 400 Bad Request: invalid input from client
- 401 Unauthorized: missing or invalid authentication
- 403 Forbidden: authenticated but not allowed
- 404 Not Found: resource does not exist
- 409 Conflict: duplicate or conflicting data
- 500 Internal Server Error: unexpected server failure

## 10. What is the difference between 400 and 500 errors?
A 400-level error means the client sent a bad request, such as invalid input or missing fields. A 500-level error means the server failed while handling a valid or seemingly valid request.

## 11. What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 engine. It lets developers run JavaScript on the server side.

## 12. Why can Node.js handle high concurrency even though JavaScript is single-threaded?
Node.js uses non-blocking I/O and an event-driven architecture. JavaScript runs on a single main thread, but I/O operations like file access, network calls, and database work are handled by the system or thread pool, so the event loop can keep serving many requests.

## 13. What is the Event Loop?
The Event Loop is the mechanism that checks the call stack and task queues, and decides when callbacks, timers, promises, and I/O handlers should run.

## 14. What is the execution order of synchronous code, process.nextTick, Promise.then, setTimeout, and setImmediate?
General order:
1. synchronous code
2. `process.nextTick`
3. `Promise.then` / other microtasks
4. `setTimeout`
5. `setImmediate`
The exact order between `setTimeout(..., 0)` and `setImmediate()` can depend on context, but this is the common interview explanation.

## 15. What kinds of operations can block the Node.js event loop?
CPU-heavy calculations, large synchronous loops, sync file operations like `readFileSync`, blocking JSON parsing on huge data, regex backtracking, and other long synchronous work can block the event loop.

## 16. require vs import
`require` is the CommonJS module syntax, mainly used in older Node.js code. `import` is the ES module syntax. `import` is more modern and supports static analysis better, but project configuration matters.

## 17. What is the difference between callback, Promise, and async/await?
A callback passes a function to run later. A Promise represents a future result and supports `.then()` and `.catch()`. `async/await` is syntax built on Promises that makes async code look more like synchronous code and is usually easier to read.

## 18. What is unhandledRejection? Why should backend services care about it?
`unhandledRejection` happens when a Promise is rejected and no error handler catches it. Backend services should care because it can hide failures, cause unstable behavior, and make debugging production issues much harder.

## 19. What is Express?
Express is a lightweight web framework for Node.js used to build APIs and web servers. It provides routing, middleware support, and utilities for handling requests and responses.

## 20. What is middleware in Express? What is the execution order?
Middleware is a function that runs between receiving the request and sending the response. It can read or modify `req` and `res`, end the request, or call `next()`. Express executes middleware in the order it is registered.

## 21. How does Express handle errors?
Express handles synchronous thrown errors automatically. For async code, errors usually need to be passed to `next(err)` or caught with try/catch. A global error-handling middleware with `(err, req, res, next)` can format the final error response.

## 22. Why do async route handlers usually need try/catch or an asyncHandler wrapper?
Because rejected Promises in async handlers may not be caught automatically in older Express patterns. `try/catch` or an `asyncHandler` wrapper ensures errors are forwarded to the global error middleware.

## 23. What are some common security practices in Express applications?
Validate input, sanitize data, use HTTPS, hash passwords, protect JWT secrets, set proper CORS rules, add rate limiting, use Helmet, avoid exposing stack traces in production, and check authorization on protected routes.

## 24. What is MongoDB?
MongoDB is a NoSQL document database that stores data as flexible BSON-like documents instead of fixed rows and columns.

## 25. Collection vs Document vs SQL table/row
A MongoDB collection is similar to a SQL table. A MongoDB document is similar to a SQL row, but a document can have nested objects and flexible structure.

## 26. What is the difference between MongoDB and relational databases?
MongoDB is schema-flexible and document-based, which works well for rapidly changing or nested data. Relational databases use structured tables, fixed schemas, and joins, which are strong for complex relationships and transactional consistency.

## 27. Why does updateOne() usually need $set?
Without `$set`, MongoDB may replace the whole matched document with the provided object. Using `$set` updates only the specified fields.

## 28. What is Mongoose?
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and query helpers.

## 29. Schema vs Model in Mongoose
A Schema defines the structure and rules of documents. A Model is the compiled class created from a schema and used to query and update the collection.

## 30. What does lean() do? When would you use it?
`lean()` returns plain JavaScript objects instead of full Mongoose documents. It improves performance and uses less memory, so it is useful for read-only queries when you do not need document methods, virtuals, or save functionality.

## 31. What does populate() do? What is its tradeoff?
`populate()` replaces referenced ObjectIds with actual related documents. It makes related data easier to read, but it can add extra queries or overhead and may hurt performance if overused.

## 32. What are Mongoose hooks / middleware?
Hooks are functions that run before or after certain Mongoose actions like `save`, `validate`, or `findOneAndUpdate`. They are used for logic like hashing passwords or generating slugs.

## 33. Why should you avoid arrow functions in some Mongoose hooks?
Arrow functions do not bind their own `this`, so inside a hook they may not refer to the current document or query correctly. Regular functions are safer when you need `this`.

## 34. What is an index in MongoDB? What are the benefits and costs?
An index is a data structure that helps MongoDB find documents faster. Benefits are faster queries and sorting. Costs are extra storage and slower writes because indexes must also be updated.

## 35. When should you use MongoDB aggregation pipeline?
Use aggregation when you need server-side data processing such as grouping, counting, filtering, joining collections, reshaping fields, or building reports.

## 36. What is authentication vs authorization?
Authentication verifies who the user is. Authorization decides what the user is allowed to do.

## 37. Briefly explain the JWT authentication flow in a typical Express app.
A user logs in and the server verifies credentials. The server signs a JWT and sends it to the client. The client stores it and sends it in the `Authorization: Bearer <token>` header on future requests. The server verifies the token on protected routes and attaches the decoded user info to `req.user`.
