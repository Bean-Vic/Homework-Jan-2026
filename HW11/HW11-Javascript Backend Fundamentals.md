# HW: JavaScript Backend Fundamentals

### 1. 问答练习(八股）

准备以下⼋股题⽬答案, 写在`note.md`⾥

```
1. What is an API? What problem does it solve?
2. What is JSON? What are common JSON format mistakes?
3. What is RESTful API?
4. RESTful API vs GraphQL
5. What is CRUD? How does it map to HTTP methods?
6. What is the difference between POST and PUT?
7. What does idempotent mean in HTTP? Which methods are idempotent?
8. What is the difference between req.params, req.query, and req.body in Express?
9. List some common HTTP status codes and explain when you would use them
10. What is the difference between 400 and 500 errors?
11. What is Node.js?
12. Why can Node.js handle high concurrency even though JavaScript is single-threaded?
13. What is the Event Loop?
14. What is the execution order of synchronous code, process.nextTick, Promise.then, setTimeout, and setImmediate?
15. What kinds of operations can block the Node.js event loop?
16. require vs import
17. What is the difference between callback, Promise, and async/await?
18. What is unhandledRejection? Why should backend services care about it?
19. What is Express?
20. What is middleware in Express? What is the execution order?
21. How does Express handle errors?
22. Why do async route handlers usually need try/catch or an asyncHandler wrapper?
23. What are some common security practices in Express applications?
24. What is MongoDB?
25. Collection vs Document vs SQL table/row
26. What is the difference between MongoDB and relational databases?
27. Why does updateOne() usually need $set?
28. What is Mongoose?
29. Schema vs Model in Mongoose
30. What does lean() do? When would you use it?
31. What does populate() do? What is its tradeoff?
32. What are Mongoose hooks / middleware?
33. Why should you avoid arrow functions in some Mongoose hooks?
34. What is an index in MongoDB? What are the benefits and costs?
35. When should you use MongoDB aggregation pipeline?
36. What is authentication vs authorization?
37. Briefly explain the JWT authentication flow in a typical Express app.
```

⼩组间Peer Mock，录⾳并上传

---

### 2. Coding

1. Build a `Task Management REST API`:
    1. use `Express + MongoDB + Mongoose`
    2. create the following routes for `tasks`
        1. `GET /tasks`
        2. `GET /tasks/:id`
        3. `POST /tasks`
        4. `PATCH /tasks/:id`
        5. `DELETE /tasks/:id`
    3. each task should contain at least the following fields
        1. `title`
        2. `description`
        3. `status` (`todo`, `in_progress`, `done`)
        4. `priority` (`low`, `medium`, `high`)
        5. `dueDate`
    4. `GET /tasks` should support
        1. filtering by `status`
        2. filtering by `priority`
        3. pagination with `page` and `limit`
        4. sorting with `sortBy=createdAt` or `sortBy=dueDate`
    5. all responses should be JSON
    6. handle invalid input, invalid id, and not found cases properly
    7. Extra Credit: support keyword search on `title`
    8. Bonus: implement `soft delete` 

---

1. Build common `Express middleware`:
    1. create a `requestLogger` middleware
        1. log method, url, statusCode, and response time
    2. create a `requestId` middleware
        1. generate a unique id for each request
        2. attach it to `req.requestId`
    3. create an `auth` middleware
        1. read Bearer token from `Authorization` header
        2. return `401` if token is missing or invalid
        3. attach current user info to `req.user` if token is valid
    4. create a `requireRole('admin')` middleware
        1. return `403` for non-admin users
    5. create a global error-handling middleware
        1. return a consistent JSON error format
    6. create at least 2 routes to test those middlewares
        1. `GET /profile`
        2. `GET /admin/reports`
    7. Extra Credit: add a simple rate limit middleware
    8. Bonus: include request id in the logs and error responses

---

1. Build `MongoDB + Mongoose` data models for a mini project system:
    1. create models for
        1. `User`
        2. `Project`
        3. `Task`
    2. use `Mongoose Schema` and `Model`
    3. each model should include a few proper fields, for example
        1. `User`: `name`, `email`, `role`
        2. `Project`: `name`, `slug`, `owner`
        3. `Task`: `title`, `status`, `assignee`, `project`, `dueDate`
    4. your schemas should demonstrate at least
        1. `required`
        2. `enum`
        3. `default`
        4. `unique`
        5. `timestamps`
    5. implement at least one Mongoose hook
        1. for example, auto-generate `slug` before saving a project
    6. implement at least 2 routes
        1. create project
        2. create task and link it to project / assignee
    7. implement at least one `populate()` query
    8. Extra Credit: enable `runValidators` on update routes
    9. Bonus: add one `virtual` field

---

1. Build a `Reporting API` with `MongoDB aggregation pipeline`:
    1. based on your `tasks` collection, create reporting routes such as
        1. `GET /reports/tasks/summary`
        2. `GET /reports/tasks/by-project`
        3. `GET /reports/tasks/by-assignee`
    2. you must use `aggregation pipeline`
    3. use at least 4 of the following stages
        1. `$match`
        2. `$group`
        3. `$sort`
        4. `$project`
        5. `$limit`
        6. `$lookup`
    4. the report should include at least
        1. total task count
        2. task count by status
        3. task count by project
        4. task count by assignee
    5. support date range filtering such as `startDate` and `endDate`
    6. do not fetch all data into JavaScript first and then manually summarize it
    7. Extra Credit: support dynamic `groupBy`
    8. Bonus: cache report result with memory cache or Redis

---

1. Build a `Node.js batch import job`:
    1. create a Node.js script to import local data into MongoDB
    2. input file can be `tasks.json`, `users.json`, or `events.ndjson`
    3. use `fs/promises` or stream to read the file
    4. clean and validate the input data before writing into database
    5. handle the following cases
        1. file does not exist
        2. invalid JSON format
        3. missing required fields
        4. duplicate records
    6. output an import summary including
        1. how many records were inserted
        2. how many were skipped
        3. how many failed
    7. de-duplicate by a field such as `email` or `externalId`
    8. use `insertMany` or `bulkWrite`
    9. Extra Credit: add a `-dry-run` mode
    10. Bonus: write failed records to a separate JSON file