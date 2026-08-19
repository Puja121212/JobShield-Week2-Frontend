# JobShield - Safe Job Search Platform

## Project Overview

JobShield is a responsive front-end web application designed to help job seekers explore job opportunities in a safer and more organized way. The application provides job listings, safety scores, job details, and a user dashboard through a clean and user-friendly interface.

This project was developed as part of the Week 2 Front-End Application Development task using React.js.

## Features

- Responsive landing page
- Find Jobs page
- Job listing cards
- Job safety scores
- Job details page
- User dashboard
- Login interaction
- Get Started navigation
- How It Works section
- About section
- Responsive mobile navigation
- Interactive page navigation

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite

## Pages and Views

### Home
The landing page introduces JobShield and provides information about safe job searching.

### Find Jobs
Displays available job opportunities with company name, location, employment type, description, and safety score.

### Job Details
Displays detailed information about a selected job opportunity.

### Dashboard
Provides an overview of the user's job-search activity and safety-related information.

### How It Works
Explains how JobShield helps users search for jobs and identify potentially unsafe opportunities.

### About
Provides information about the purpose of the JobShield platform.

## Development Process

The application was developed using a component-based React architecture. Different pages were created as separate React components and React Router DOM was used for navigation between views.

CSS was used to create a clean and responsive user interface. Media queries were added to make the application work properly on desktop, tablet, and mobile screen sizes.

The application was tested by navigating between pages and interacting with buttons, job listings, job details, dashboard, login functionality, and the mobile navigation menu.

## Project Structure

job-scam-platform/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Jobs.jsx
│   │   ├── Dashboard.jsx
│   │   └── JobDetails.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

## How to Run Locally

1. Open the project folder in VS Code.

2. Open the terminal.

3. Install the required dependencies:

npm install

4. Start the development server:

npm run dev

5. Open the localhost URL shown in the terminal.

## Testing

The application was tested for:

- Page navigation
- Job listing display
- Job details navigation
- Dashboard navigation
- Login interaction
- Mobile responsive layout
- Mobile navigation menu
- Button interactions
- Overall UI consistency

## Conclusion

JobShield demonstrates the development of a responsive and interactive front-end application using React.js. The project includes multiple interconnected views, responsive design, reusable components, navigation, and user interactions. It provides a simple and organized interface for users to explore job opportunities safely.