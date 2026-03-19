1. What is an API? What problem does it solve?
	An API, or Application Programming Interface, is a set of rules that allows different systems to communicate with each other.
	It abstracts the underlying implementation and exposes only necessary functionalities.
	For example, a frontend app calls a backend API to fetch or update data.

2. What is JSON? What are common JSON format mistakes?
	JSON is a lightweight data format used for data exchange.
	It uses key-value pairs and is easy for both humans and machines to read and write.
	Common errors:
    Missing double quotes around keys
    Using single quotes instead of double quotes
    Trailing commas
    Invalid data types, such as undefined or functions

3. What is RESTful API?
	A RESTful API follows REST principles, where resources are identified by URLs, and HTTP methods are used to perform operations like 	GET, POST, PUT, and DELETE.

4. RESTful API vs GraphQL
	REST uses multiple endpoints and returns fixed data structures.
	GraphQL uses a single endpoint and allows clients to request exactly the data they need.

5. What is CRUD? How does it map to HTTP methods?
	CRUD stands for Create, Read, Update, and Delete.
	It represents the four basic operations for managing data.

	In RESTful APIs, CRUD maps to HTTP methods as follows:

	Create → POST
	Read → GET
	Update → PUT or PATCH
	Delete → DELETE

6. What is the difference between POST and PUT?
	POST is used to create a new resource and is not idempotent.
	PUT is used to update or replace a resource and is idempotent.

7. What does idempotent mean in HTTP? Which methods are idempotent?
	An idempotent operation means that making the same request multiple times will always produce the same result.
	GET 
	PUT 
	DELETE

8. What is the difference between req.params, req.query, and
req.body in Express?
	req.params → URL path variables
	req.query → query string
	req.body → request payload

9. List some common HTTP status codes and explain when you would use them
	200 → success
	201 → created
	400 → bad request
	401 → unauthorized
	403 → forbidden
	404 → not found
	500 → server error

10. What is the difference between 400 and 500 errors?
	400 errors are caused by client mistakes, such as invalid input.
	500 errors are caused by server-side issues.

11. What is Node.js?
	Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows JavaScript to run on the server side.
	It is designed for building scalable network applications.

12. Why can Node.js handle high concurrency even though JavaScript is single-threaded?
	Even though JavaScript is single-threaded, Node.js uses an event-driven, non-blocking I/O model and the event loop to handle many concurrent requests efficiently.

13. What is the Event Loop?
	The Event Loop is a mechanism that continuously checks the call stack and the task queue, and executes callbacks when the call stack is empty.

14. What is the execution order of synchronous code, process.
nextTick, Promise.then, setTimeout, and setImmediate?
	The execution order is:
	1.	synchronous code
	2.	process.nextTick
	3.	Promise.then (microtasks)
	4.	setTimeout (timers phase)
	5.	setImmediate (check phase)

15. What kinds of operations can block the Node.js event loo
p?
	Any synchronous, CPU-intensive operations can block the event loop, such as large loops, heavy calculations, or synchronous file operations.
	
16. require vs import
	require → CommonJS, synchronous, used in Node.js
	import → ES Modules, static and asynchronous, modern standard
	
17. What is the difference between callback, Promise, and asy
nc/await?
	•	Callback: function passed to handle result, can lead to callback hell
	•	Promise: handles async results with .then() and .catch()
	•	async/await: syntactic sugar over Promise, makes async code look synchronous

18. What is unhandledRejection? Why should backend services care about it?
	UnhandledRejection occurs when a Promise is rejected but no .catch() handler is provided.
	Backend services should handle it because it may crash the process or leave the system in an inconsistent state.
	
19. What is Express?
	Express is a minimal and flexible Node.js web framework used to build APIs and web applications.
	
20. What is middleware in Express? What is the execution order?
	Middleware is a function that runs between the request and response cycle.
	It has access to req, res, and next.
	Execution order is based on the order they are defined in the code.

21. How does Express handle errors?
	Express handles errors using error-handling middleware, which has four parameters: (err, req, res, next).

22. Why do async route handlers usually need try/catch or an asyncHandler wrapper?
	Because Express does not automatically catch errors in async functions, so unhandled errors may crash the server.
	Using try/catch or an async wrapper ensures errors are properly passed to error middleware.

23. What are some common security practices in Express applications?
	Use helmet for secure headers
	Validate input
	Sanitize data
	Use HTTPS
	Rate limiting
	Authentication & authorization

24. What is MongoDB?
	MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.

25. Collection vs Document vs SQL table/row
	Collection → table

	Document → row

26. What is the difference between MongoDB and relational databases?
	MongoDB is schema-less and flexible, while relational databases use fixed schemas and structured tables.

27. Why does updateOne() usually need $set?
	Because without $set, MongoDB will replace the entire document instead of updating specific fields.

28. What is Mongoose?
	Mongoose is an ODM (Object Data Modeling) library for MongoDB that provides schema and validation.

29. Schema vs Model in Mongoose
	Schema defines the structure
	Model is used to interact with the database

30. What does lean() do? When would you use it?
	lean() returns plain JavaScript objects instead of full Mongoose documents, which improves performance.

31. What does populate() do? What is its tradeoff?
	populate() replaces referenced IDs with actual documents.
	tradeoff: slower performance (extra query)

32. What are Mongoose hooks / middleware?
	Hooks are middleware functions that run before or after certain operations, such as save or update.
	They are commonly used to perform tasks like validation, logging, or modifying data before it is persisted.

33. Why should you avoid arrow functions in some Mongoose hooks?
	Because arrow functions do not have their own this, so they cannot access the document context.

34. What is an index in MongoDB? What are the benefits and costs?
	An index improves query performance by allowing faster data lookup.

	cost: uses extra storage + slower writes

35. When should you use MongoDB aggregation pipeline?
	Use aggregation when you need complex data processing, such as grouping, filtering, or reporting.

36. What is authentication vs authorization?
	Authentication verifies who you are
	Authorization determines what you can do

37. Briefly explain the JWT authentication flow in a typicalExpress app.
	User logs in with credentials
	Server verifies and returns a JWT
	Client stores the token
	Client sends token in Authorization header
	Server verifies token and grants access
	
