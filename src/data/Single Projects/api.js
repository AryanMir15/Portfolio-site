const apiData = {
  id: 12,
  title: "Jobs API Backend",
  description:
    "A RESTful API built with Node.js, Express, and MongoDB. Includes authentication, job CRUD operations, and secure route protection.",
  stack: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Postman"],
  liveLink: "", // fill this later
  githubLink: "", // fill this later
  details: `
A full-featured backend API designed for job listings and user account management.

### Core Features:
- **User Authentication**: Secure login and registration using JWT and bcrypt for password encryption.
- **CRUD Operations**: Users can create, read, update, and delete their job entries.
- **Protected Routes**: Authenticated users can only access their own data.
- **Middleware**: Includes centralized error handling and input validation.
- **Testing**: All endpoints tested using Postman.

This project emphasizes clean structure, modular code, and best practices in RESTful API development.
    `,
  image: "/projects/API.png",
};

export default apiData;
