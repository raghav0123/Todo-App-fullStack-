# 📝 Todo Application API Documentation

A RESTful API specification for managing tasks in the Todo Application.

---

## 🚀 API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/todos` | Retrieve all tasks |
| `POST` | `/todos` | Create a new task |
| `GET` | `/todos/:id` | Retrieve a single task by ID |
| `PUT` | `/todos/:id` | Update an existing task by ID |
| `DELETE` | `/todos/:id` | Permanently delete a task by ID |

---

## 📋 Endpoint Details

### 1. Get All Tasks
Retrieve a list of all existing tasks stored in the application.

* **Route:** `/todos`
* **Method:** `GET`
* **URL Parameters:** None
* **Request Body:** None

#### Response (200 OK)
```json
[
  {
    "_id": "651a2b3c4d5e6f7a8b9c0d1e",
    "name": "Complete Project Proposal",
    "description": "Finish drafting the backend API specification",
    "isCompleted": false
  }
]
new commit