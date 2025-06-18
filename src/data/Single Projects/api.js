const apiData = {
  id: 12,
  title: "Jobs API Backend",
  description:
    "A RESTful API built with Node.js, Express, and MongoDB. Includes authentication, job CRUD operations, and secure route protection.",
  stack: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Postman"],
  liveLink: "", // fill this later
  githubLink: "https://github.com/AryanMir15/Jobs-Api", // fill this later
  details: `
This project serves as the backend of a job tracking platform built entirely with Node.js and Express.js. MongoDB is used as the database, and authentication is managed using JWT.

### Core Features:
- **Authentication**: Register/Login with hashed passwords using bcrypt and secure token handling via JWT.
- **Jobs CRUD**: Authenticated users can create, retrieve, update, and delete job entries.
- **Protected Routes**: Only authorized users can access their job data.
- **Middlewares**: Centralized error handling, request validation, and auth middleware included.
- **Testing**: Fully tested via Postman for every route and scenario.

The project emphasizes modular architecture and code readability.`,
  image: "/projects/API.png",
};

export default apiData;
