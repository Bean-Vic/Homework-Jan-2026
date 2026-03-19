# HW11 Backend Submission

## Features included
- note.md with 37 backend interview questions
- Task Management REST API
- Express middleware: requestLogger, requestId, auth, requireRole, global error handler
- MongoDB + Mongoose models: User, Project, Task
- Project/task routes with populate()
- Reporting API using aggregation pipeline
- Batch import script with validation, duplicate handling, summary, dry-run, and failed-record export
- Soft delete for tasks
- Keyword search on task title
- runValidators on update routes
- virtual field on Task (`isOverdue`)

## Setup
```bash
npm install
cp .env.example .env
# edit .env if needed
npm start
```

## Sample routes
### Task API
- GET /tasks
- GET /tasks/:id
- POST /tasks
- PATCH /tasks/:id
- DELETE /tasks/:id

Examples:
```bash
curl "http://localhost:3000/tasks?status=todo&priority=high&page=1&limit=5&sortBy=dueDate&keyword=report"
```

### Middleware test routes
```bash
GET /token/user
GET /token/admin
GET /profile
GET /admin/reports
```

### Example auth flow
1. `GET /token/admin`
2. copy token
3. call protected route:
```bash
curl http://localhost:3000/admin/reports \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Project routes
- POST /projects
- POST /projects/:projectId/tasks

### Report routes
- GET /reports/tasks/summary
- GET /reports/tasks/by-project
- GET /reports/tasks/by-assignee

## Example JSON bodies
### Create user (insert directly in MongoDB or script)
```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "role": "admin"
}
```

### Create project
```json
{
  "name": "Website Redesign",
  "owner": "PUT_A_REAL_USER_ID_HERE"
}
```

### Create task
```json
{
  "title": "Finish homepage",
  "description": "Complete hero section and navbar",
  "status": "todo",
  "priority": "high",
  "dueDate": "2026-03-20T00:00:00.000Z",
  "assignee": "PUT_A_REAL_USER_ID_HERE"
}
```

## Import script
```bash
node scripts/importData.js users.json
node scripts/importData.js tasks.json --dry-run
```

## Notes for demo / submission
- Explain `req.params`, `req.query`, and `req.body` with `/tasks/:id` and `/tasks?page=1`
- Mention that `PATCH` uses `$set` and `runValidators: true`
- Mention that soft delete keeps records instead of removing them permanently
- Mention that report routes use MongoDB aggregation instead of summarizing in JavaScript
