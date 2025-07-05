import React from "react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import NavbarCom from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Contact from "../HomePage/Sections/Contact";
import cpmData from "@/data/Single Projects/cpmdata";

function CpmProject() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { title, image, githubLink, liveLink } = cpmData;

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
                  CPM (Client Portal Manager) is a fullstack freelance tracker
                  app built with the MERN stack. Clients can submit projects,
                  and admins can manage them via dashboards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">My Role</h3>
                <p className="text-muted-foreground">
                  Fullstack dev – built authentication, UI, admin dashboard
                  logic, and MongoDB models.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Timeframe</h3>
                <p className="text-muted-foreground">2–3 weeks</p>
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

          {/* Tech Stack (Minimal, includes React + Tailwind) */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-10 text-center">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: SiReact, name: "React" },
                { icon: SiTailwindcss, name: "Tailwind CSS" },
                { icon: SiNodedotjs, name: "Node.js" },
                { icon: SiExpress, name: "Express" },
                { icon: SiMongodb, name: "MongoDB" },
                { icon: SiJsonwebtokens, name: "JWT" },
                { icon: SiPostman, name: "Postman" },
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
                A centralized hub for freelancers and clients to manage
                projects, with secure login, project status, and admin-side
                workflow updates.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Design Philosophy</h3>
              <p className="text-muted-foreground">
                Clean dashboard UI, minimal friction for client input, and
                intuitive project state indicators. Designed for practical
                real-world use.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Mobile-First Approach
              </h3>
              <p className="text-muted-foreground">
                The design adapts smoothly across screens, ensuring clients and
                admins can interact easily on both desktop and mobile.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>JWT auth with role separation (admin/client)</li>
                <li>Project CRUD with live status updates</li>
                <li>Responsive admin/client dashboards</li>
                <li>Global project state with context</li>
                <li>Secure and scalable API</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Impact and Results
              </h3>
              <p className="text-muted-foreground">
                This project is a real-world SaaS template for freelance work
                management. It's built for clarity, maintainability, and
                practical daily use.
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

export default CpmProject;
