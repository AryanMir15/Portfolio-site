const cocktailData = {
  id: 12,
  title: "Cocktail Finder App",
  description:
    "A dynamic drink browser powered by the CocktailDB API. Built using <span class='text-cyan-400'>React</span> and <span class='text-sky-400'>Tailwind CSS</span>, this app lets you search and view cocktails with detailed info fetched live.",

  stack: ["React", "Tailwind CSS"],
  liveLink: "https://cocktails-project-two.vercel.app",
  githubLink: "https://github.com/AryanMir15/Cocktail-App",
  details: `
This project uses the CocktailDB public API to fetch cocktail recipes and display them based on user search input.

### Features:
- **Search Bar**: Users can type in cocktail names and get live filtered results.
- **Details Page**: Clicking on a cocktail shows its image, ingredients, and instructions.
- **Routing**: Uses React Router for smooth navigation between home and detail views.

This was a core practice project to solidify understanding of:
- React Router v6
- API fetch using useEffect
- Component-based architecture
- Tailwind utility styling
- Error and loading state handling
  `,
  image: "/projects/cocktail.png",
};

export default cocktailData;
