const singleProjectData = [
  {
    id: 11,
    title: "Amazon Clone (FakeCommerce™)",
    description:
      "A full-blown fake e-commerce site built purely for practice, not profit. It's got multiple pages — products, cart (split into item summary & payment summary), and a track-orders page that’s actually fun. After placing an order, you get redirected to a timeline-style progress tracker that uses day.js and some spicy math to animate a fake delivery progress bar over time. Yeah, it's dumb, but it *works*. All built solo, from scratch, post-course grind. No fancy libraries, just good old Tailwind and raw React sauce.",
    stack: ["React", "Tailwind", "Day.js", "LocalStorage"],
    liveLink: "", // fill this later
    githubLink: "", // fill this later
  },
  {
    id: 12,
    title: "Jobs API Backend (The Painful One)",
    description:
      "This is the backend project that made me question life. Built a RESTful Jobs API from scratch using Express and MongoDB. It handles user auth (JWT + bcrypt), has full-blown CRUD ops for job listings, protected routes, and a clean middleware setup. No UI, just pure API carnage tested via Postman. Honestly, my proudest project — mostly because login/register + auth logic made me cry multiple times. Deployed on Replit like a true bootstrapped warrior.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Postman"],
    liveLink: "", // fill this later (Replit run link maybe?)
    githubLink: "", // fill this later
  },
  {
    id: 12,
    title: "Cocktail Explorer",
    description:
      "A React-based multi-page cocktail explorer app using React Router and external cocktail APIs. Home page lists all drinks, there's a single cocktail view for zooming into a drink’s details, and a search feature that filters drinks live based on queries. Also includes an 'About' page just to flex that I know how routes work. It’s clean, simple, and has that sweet 'fake app you'd find in a tutorial' energy. But hey, it works, and I built it solo.",
    stack: ["React", "React Router", "CocktailDB API", "Tailwind"],
    liveLink: "", // fill this later
    githubLink: "", // fill this later
  },
];

export default singleProjectData;
