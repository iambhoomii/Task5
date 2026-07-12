# DevOps Task 5 - Persistence Layer with Prisma & PostgreSQL

## Objective

This project demonstrates the implementation of a safe and reliable persistence layer for a Node.js application using Prisma ORM and PostgreSQL. It includes CRUD operations, transaction management, connection pooling, and graceful database error handling.

---

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* dotenv
* Git & GitHub
* Postman

---

## Project Structure

```
Task5/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── db/
│   │   └── prisma.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── services/
│   │   └── userService.js
│   └── server.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Features

* Data Access Layer using Prisma ORM
* Parameterized database queries to prevent SQL Injection
* Transaction support using `prisma.$transaction()`
* Connection pooling through a shared Prisma Client
* CRUD operations (Create, Read, Update, Delete)
* Graceful database error handling
* PostgreSQL integration
* API testing using Postman

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd Task5
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure your PostgreSQL connection:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/task5db?schema=public"
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the server:

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## API Endpoints

### Create User

**POST**

```
/api/users
```

### Get All Users

**GET**

```
/api/users
```

### Update User

**PUT**

```
/api/users/:id
```

### Delete User

**DELETE**

```
/api/users/:id
```

---

## Testing

The API was tested using Postman for:

* Successful user creation
* Fetching all users
* Updating users
* Deleting users
* Duplicate email validation
* User not found scenarios

---

## Task Requirements Covered

* Data Access Layer
* Parameterized Queries / Prisma ORM
* Transactions
* Connection Pooling
* CRUD Operations
* Database Error Handling
* Failure Case Testing
* PostgreSQL Database Integration

---

