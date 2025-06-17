const singleProjectData = [
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
    image: "/projects/cocktails.png",
  },
];

export default singleProjectData;
