# JobShield Backend API

## 📌 Project Overview

JobShield is a job management and application platform designed to provide secure RESTful APIs for user authentication, job management, and job applications.

The backend provides APIs for:

* User registration and login
* JWT-based authentication
* User profile access
* Job creation and management
* Job applications
* Application status management

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* CORS
* dotenv
* Postman
* Nodemon

---

## 📁 Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── jobController.js
│   └── applicationController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Job.js
│   └── Application.js
│
├── routes/
│   ├── authRoutes.js
│   ├── jobRoutes.js
│   └── applicationRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## ⚙️ Installation

Clone or download the project and open the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not upload the `.env` file to GitHub.

---

## ▶️ Run the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server runs on:

```text
http://localhost:5000
```

---

# 🔑 Authentication APIs

## 1. Register User

**POST**

```text
/api/auth/register
```

Example request:

```json
{
  "name": "Puja",
  "email": "puja@example.com",
  "password": "123456"
}
```

---

## 2. Login User

**POST**

```text
/api/auth/login
```

Example request:

```json
{
  "email": "puja@example.com",
  "password": "123456"
}
```

Returns a JWT token after successful authentication.

---

## 3. Get User Profile

**GET**

```text
/api/auth/profile
```

Authentication:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

# 💼 Job APIs

## 4. Create Job

**POST**

```text
/api/jobs
```

Requires JWT authentication.

Example:

```json
{
  "title": "React Developer Intern",
  "company": "JobShield Technologies",
  "location": "Remote",
  "description": "Looking for a React developer intern.",
  "skills": [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  "salary": "₹12,000/month",
  "jobType": "Internship",
  "experience": "Fresher",
  "applyLink": "https://example.com/apply"
}
```

---

## 5. Get All Jobs

**GET**

```text
/api/jobs
```

Returns all available jobs.

---

## 6. Get Single Job

**GET**

```text
/api/jobs/:id
```

Example:

```text
/api/jobs/6a92c912fa4a77f99b6f5496
```

---

## 7. Update Job

**PUT**

```text
/api/jobs/:id
```

Requires JWT authentication.

---

## 8. Delete Job

**DELETE**

```text
/api/jobs/:id
```

Requires JWT authentication.

Only the user who created the job can update or delete it.

---

# 📄 Application APIs

## 9. Apply for a Job

**POST**

```text
/api/applications
```

Requires JWT authentication.

Example:

```json
{
  "jobId": "JOB_ID",
  "coverLetter": "I am interested in this internship."
}
```

A user cannot apply for the same job more than once.

---

## 10. Get My Applications

**GET**

```text
/api/applications/my
```

Requires JWT authentication.

Returns all applications submitted by the logged-in user.

---

## 11. Get Single Application

**GET**

```text
/api/applications/:id
```

Requires JWT authentication.

---

## 12. Update Application Status

**PUT**

```text
/api/applications/:id/status
```

Requires JWT authentication.

Supported statuses:

```text
Applied
Shortlisted
Rejected
Selected
```

Example:

```json
{
  "status": "Shortlisted"
}
```

Only the job owner can update the application status.

---

# 🔒 Security Features

* Passwords are hashed using bcryptjs.
* JWT is used for authentication.
* Protected routes require a valid JWT token.
* Users cannot update or delete jobs created by other users.
* Users cannot submit duplicate applications for the same job.
* Sensitive environment variables are stored in `.env`.
* `.env` and `node_modules` are excluded using `.gitignore`.

---

# 🧪 API Testing

All APIs were tested using Postman.

Tested functionality includes:

* User registration
* User login
* JWT authentication
* Protected profile access
* Job creation
* Job listing
* Single job retrieval
* Job update
* Job deletion
* Job application
* Application listing
* Single application retrieval
* Application status update

---

## ✅ Backend Status

The JobShield REST API backend is successfully implemented and connected to MongoDB Atlas.

The backend is ready for frontend API integration.
