import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import Contact from "../HomePage/Sections/Contact";
import cocktailData from "@/data/Single Projects/cocktail";
import { SiReact, SiTailwindcss } from "react-icons/si";

function CocktailProject() {
  const { title, image, githubLink, liveLink } = cocktailData;

  // Scroll to top on load
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0e0e0e] text-black dark:text-white transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
            {title}
          </h1>

          {/* Summary Section */}
          <div className="flex flex-col-reverse lg:flex-col items-center gap-10 mb-24">
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  About the project
                </h3>
                <p className="text-muted-foreground">
                  Cocktail Explorer is a React + Tailwind-based web app that
                  lets users search for drinks using the CocktailDB API, view
                  detailed info for each drink, and explore new cocktails
                  interactively.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">My Role</h3>
                <p className="text-muted-foreground">
                  Sole developer – handled API fetching, dynamic routing, UI/UX,
                  and responsive design.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Timeframe</h3>
                <p className="text-muted-foreground">5–6 days</p>
              </div>
            </div>

            <div className="flex-1 rounded-xl overflow-hidden shadow-xl">
              <img
                src={image || "/default.png"}
                alt={title}
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Tech Stack */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-10 text-center">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: SiReact, name: "React" },
                { icon: SiTailwindcss, name: "Tailwind CSS" },
              ].map(({ icon: Icon, name }, i) => (
                <div
                  key={i}
                  className="w-28 h-28 flex flex-col items-center justify-center rounded-lg border-none"
                >
                  <Icon className="text-3xl text-black dark:text-white mb-2" />
                  <p className="text-sm text-muted-foreground font-medium">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Sections */}
          <div className="space-y-14 max-w-4xl mx-auto">
            <section>
              <h3 className="text-2xl font-semibold mb-3">Project Overview</h3>
              <p className="text-muted-foreground">
                This project uses the CocktailDB API to allow users to explore
                drinks by name, browse recipes, and view full ingredient lists.
                Built to reinforce state management and conditional rendering.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Design Philosophy</h3>
              <p className="text-muted-foreground">
                Minimal, clean, and mobile-friendly. Navigation is kept simple
                with clear feedback. Components are modular and responsive.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Mobile-First Approach
              </h3>
              <p className="text-muted-foreground">
                Responsive design ensures that the search input, cocktail cards,
                and detail pages look polished across devices.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Live cocktail search via API</li>
                <li>Routing for drink detail pages</li>
                <li>Responsive grid for cocktail previews</li>
                <li>Clean separation of components and logic</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Impact and Results
              </h3>
              <p className="text-muted-foreground">
                This project solidified my understanding of React fundamentals.
                It showcases how thoughtful UI and API logic can create a fluid
                user experience.
              </p>
            </section>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-8">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  Live Preview
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg font-semibold border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </>
  );
}

export default CocktailProject;
