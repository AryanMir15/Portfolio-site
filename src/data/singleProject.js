const singleProjectData = [
  {
    id: 14,
    title: "Client Portal – Freelance Tracker (SaaS)",
    description:
      "A fullstack MERN SaaS app that lets freelancers manage client project submissions, track statuses, and update timelines via an admin dashboard.",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "", // add later
    githubLink: "", // add later
    details: `🧠 **Client Portal – Freelance Project Tracker App (Fullstack SaaS)**

A fullstack client management platform where clients can submit project requests and the admin can manage them through a dedicated dashboard. Built from scratch using the MERN stack, this app is fully responsive, secured with JWT, and structured with modular clean code both on the frontend and backend.

### 🔧 Key Features:
- **Client Auth**: Register/login & submit new projects
- **Admin Dashboard**: View, edit, delete, and update project statuses
- **Full CRUD**: Secure routes, protected data access
- **Custom Components**: ProjectCard, FormRow, StatusBadge, ConfirmModal, Toasts
- **React Context**: Global project state management
- **Frontend**: Tailwind CSS + dark/light theme ready
- **Backend**: JWT, secure cookies, modular Express server

All API endpoints tested. Built like a real startup tool, not a student demo.

### 💥 Tech Stack:
React · Tailwind · Node.js · Express · MongoDB · JWT · Context API

### 📈 Future Upgrades:
- Client-side dashboard
- Project filtering & sorting
- Email notifications
- Stripe payments
- Mobile version

This isn’t just a toy project. It’s my first real-world SaaS and I'm stupidly proud of it.`,
    image: "/projects/client-portal.png", // replace with your image path
  },

  {
    id: 11,
    title: "Amazon Clone (FakeCommerce™)",
    description:
      "A complete front-end e-commerce clone built with HTML, CSS, and JavaScript. Includes product browsing, cart functionality, and an order tracking system.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveLink: "", // fill this later
    githubLink: "", // fill this later
    details: `
This project replicates the core functionality of an e-commerce platform using only HTML, CSS, and JavaScript.

### Pages and Features:
- **Products Page**: Displays a list of sample products in a responsive grid layout.
- **Search Functionality**: Users can filter products by name using a client-side search bar.
- **Cart Page**: Divided into two sections — Order Summary and Payment Summary. Items can be added or removed dynamically, and total prices update accordingly.
- **Track Orders Page**: Shows a list of placed orders. Each order includes a button to view its delivery progress.
- **Progress Tracker**: Simulates order delivery using animated progress bars and estimated times.

All data is managed with localStorage for persistence, and the site is fully responsive across screen sizes.
    `,
    image: "/projects/amazon.png",
  },

  {
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
  },

  {
    id: 13,
    title: "Cocktail Explorer",
    description:
      "A multi-page React application that allows users to browse, search, and view details of cocktails using the CocktailDB API.",
    stack: ["React", "React Router", "CocktailDB API", "Tailwind"],
    liveLink: "", // fill this later
    githubLink: "", // fill this later
    details: `
A responsive front-end application built in React that interacts with the CocktailDB API.

### Main Features:
- **Home Page**: Displays a list of all cocktails retrieved from the API.
- **Search Functionality**: Users can filter the list of drinks by entering keywords in real time.
- **Single Cocktail View**: Clicking a drink navigates to a details page showing its ingredients, instructions, and category.
- **Routing**: Implemented using React Router, with clean URL handling and fallback routes.
- **Styling**: Built with Tailwind CSS for consistent and responsive design.

This project demonstrates strong understanding of API integration, component-based architecture, and modern React practices.
    `,
    image: "/projects/cocktail.png",
  },
];

export default singleProjectData;
