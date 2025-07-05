import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import NavbarCom from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import apiData from "@/data/Single Projects/api";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";
import Contact from "../HomePage/Sections/Contact";

function ApiProject() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { title, image, githubLink, liveLink } = apiData;

  return (
    <>
      <NavbarCom />

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
                  This REST API includes complete backend logic for user auth,
                  job CRUD, and more. Clean modular file structure with
                  JWT-based flow and tested endpoints.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">My Role</h3>
                <p className="text-muted-foreground">
                  Backend developer, architecture planning, Postman testing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Timeframe</h3>
                <p className="text-muted-foreground">2 weeks</p>
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
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: SiNodedotjs, name: "Node.js" },
                { icon: SiExpress, name: "Express" },
                { icon: SiMongodb, name: "MongoDB" },
                { icon: SiJsonwebtokens, name: "JWT" },
                { icon: SiPostman, name: "Postman" },
              ].map(({ icon: Icon, name }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-28 h-28"
                >
                  <Icon className="text-3xl mb-2" />
                  <p className="text-sm text-muted-foreground">{name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Sections */}
          <div className="space-y-14 max-w-4xl mx-auto">
            <section>
              <h3 className="text-2xl font-semibold mb-3">Project Overview</h3>
              <p className="text-muted-foreground">
                A robust API setup that handles authentication, authorization,
                and job CRUD — structured for scalability and real-world use
                cases.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Design Philosophy</h3>
              <p className="text-muted-foreground">
                Designed for clarity and maintainability. Each controller,
                route, and middleware was broken out to maximize separation of
                concerns.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Mobile-First Approach
              </h3>
              <p className="text-muted-foreground">
                Although this is backend-only, the structure allows seamless
                integration with mobile or web clients, providing a fast and
                secure experience across platforms.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>JWT-based auth with bcrypt hashing</li>
                <li>Role-based protected routes</li>
                <li>Custom error handling</li>
                <li>Express middleware chaining</li>
                <li>Postman-tested endpoints</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Impact and Results
              </h3>
              <p className="text-muted-foreground">
                Built to be a solid backend foundation for any fullstack SaaS.
                Highlights clean RESTful design and backend confidence.
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

export default ApiProject;
