# Task Manager REST API

A RESTful API for managing tasks built with Node.js, Express, and MongoDB.

## Live API

https://taskmanagerapibackend-bmb6iz24.b4a.run

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Express Validator

## Features

- User registration and login with JWT
- Create, read, update, delete tasks
- Filter tasks by status and priority
- Search tasks by title or description
- Sort tasks by due date, priority, or title
- Input validation on all endpoints

## API Endpoints

### Auth

| Method | Endpoint           | Description       | Auth |
| ------ | ------------------ | ----------------- | ---- |
| POST   | /api/auth/register | Register new user | No   |
| POST   | /api/auth/login    | Login user        | No   |
| GET    | /api/auth/profile  | Get user profile  | Yes  |

### Tasks

| Method | Endpoint              | Description        | Auth |
| ------ | --------------------- | ------------------ | ---- |
| GET    | /api/tasks            | Get all tasks      | Yes  |
| POST   | /api/tasks            | Create a task      | Yes  |
| GET    | /api/tasks/:id        | Get single task    | Yes  |
| PUT    | /api/tasks/:id        | Update task        | Yes  |
| DELETE | /api/tasks/:id        | Delete task        | Yes  |
| PATCH  | /api/tasks/:id/status | Update task status | Yes  |

## Query Parameters

- `?status=todo` — Filter by status (todo, in-progress, completed)
- `?priority=high` — Filter by priority (low, medium, high)
- `?search=keyword` — Search by title or description
- `?sort=dueDate` — Sort by dueDate, priority, or title

## Request Examples

### Register

```json
POST /api/auth/register
{
  "name": "Maria Farooq",
  "email": "maria@gmail.com",
  "password": "123456"
}
```

### Create Task

```json
POST /api/tasks
Authorization: Bearer <token>
{
  "title": "Build Portfolio",
  "description": "Create portfolio website",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2026-08-30"
}
```

## Installation

```bash
git clone https://github.com/mariafarooq55/task-manager-api
cd task-manager-api
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

```bash
npm run dev
```
