const amazonCloneData = {
  id: 11,
  title: "Amazon Clone",
  description:
    "A sleek Amazon-style shopping experience built entirely using <span class='text-orange-400'>HTML</span>, <span class='text-blue-400'>CSS</span>, and <span class='text-yellow-300'>JavaScript</span>. From browsing to checkout and even order tracking  all running without a backend.",

  stack: ["HTML", "CSS", "JavaScript"],
  liveLink: "", // fill this later
  githubLink: "https://github.com/AryanMir15/Amazon-Clone", // fill this later
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
};

export default amazonCloneData;
