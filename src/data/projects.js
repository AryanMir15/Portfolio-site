import { SiNodedotjs } from "@icons-pack/react-simple-icons";

const projectData = [
  {
    id: 14,
    title: "Client Portal – Freelance Tracker (SaaS)",
    description:
      "A fullstack SaaS that lets clients submit project requests and gives you a dashboard to manage, track, and update them — built from scratch with MERN.",
    image: "/projects/CPM.png",
    to: "client-portal", // route path for Link to work
  },
  {
    id: 11,
    title: "Amazon Clone",
    description:
      "A clone of the Amazon site built using vanilla HTML, CSS and JavaScript. Fully responsive and styled to mimic real product pages.",
    image: "/projects/amazon.png",
    tech: [
      { icon: "si si-html5", color: "text-orange-400" },
      { icon: "si si-css3", color: "text-blue-400" },
      { icon: "si si-javascript", color: "text-yellow-300" },
    ],
    to: "amazon-clone",
  },
  {
    id: 12,
    title: "Full Auth API",
    description:
      "Login / Register / CRUD / Protected routes / REST API. Made for scale & security.",
    image: "/projects/API.png",
    tech: [
      { icon: SiNodedotjs, color: "text-green-400" },
      { icon: "si si-express", color: "text-gray-300" },
      { icon: "si si-mongodb", color: "text-green-400" },
    ],

    to: "jobs-API-Backend",
  },
  {
    id: 13,
    title: "Cocktail App",
    description:
      "A React-based project fetching cocktail recipes from an external API. Dynamic search & detailed drink info included.",
    image: "/projects/cocktail.png",
    tech: [
      { icon: "si si-react", color: "text-sky-400" },
      { icon: "si si-javascript", color: "text-yellow-300" },
      { icon: "si si-api", color: "text-white" },
    ],

    to: "cocktail-explorer",
  },
];

export default projectData;
