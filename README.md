# JobShield - Full Stack Job Safety Platform

JobShield is a full-stack web application designed to help job seekers identify safer opportunities and manage applications with confidence. The platform combines a React front-end with an Express + MongoDB backend to provide a complete job-search experience, including browsing verified listings, viewing job details, creating an account, logging in, and submitting applications.

## Features

- Responsive landing page and navigation
- Job browsing and detailed job view
- User registration and login
- JWT-based protected routes
- Job application submission workflow
- My Applications dashboard
- Express REST API with secure validation
- MongoDB data models for users, jobs, and applications

## Tech Stack

- Frontend: React + Vite + React Router
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: JWT + bcryptjs
- Styling: Custom CSS

## Project Structure

```text
job-scam-platform/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── README.md
│   ├── package.json
│   └── server.js
├── src/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── public/
```

## Prerequisites

- Node.js 18+
- MongoDB Atlas or a local MongoDB instance

## Environment Setup

Create a `.env` file in the `backend` folder with:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run the App Locally

1. Install frontend dependencies:

```bash
npm install
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Start the backend:

```bash
cd backend
npm run dev
```

4. Start the frontend in a second terminal:

```bash
cd ..
npm run dev
```

5. Open the frontend URL shown in the terminal, typically http://localhost:5173

## Main Routes

### Frontend

- `/` — Home page
- `/jobs` — Browse jobs
- `/job-details?id=...` — Job details
- `/login` — Login page
- `/signup` — Registration page
- `/dashboard` — User dashboard
- `/my-applications` — Application list
- `/how-it-works` — Process overview
- `/about` — Platform information

### Backend API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`
- `GET /api/jobs`
- `GET /api/jobs/:id`
- `POST /api/jobs`
- `PUT /api/jobs/:id`
- `DELETE /api/jobs/:id`
- `POST /api/applications`
- `GET /api/applications/my`
- `GET /api/applications/:id`
- `PUT /api/applications/:id/status`

## Development Notes

The project follows a modular structure with separate components and API layers. Authentication is enforced using JWT tokens, while database operations are handled through Mongoose schemas. The front-end is designed to be responsive and user-friendly, with route-based navigation and simple state-driven interactions.

## Validation

The current project has been verified with:

- `npm run build` for the frontend
- `npm run lint` for quality checks
- backend startup using `node server.js`

This confirms the app compiles and the backend runs successfully in the current workspace setup.