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
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Contact from "../HomePage/Sections/Contact";
import linknukeData from "@/data/Single Projects/linknukedata";

function LinkNukeProject() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { title, image, githubLink, liveLink } = linknukeData;


  return (
    <>
      <NavbarCom />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0e0e0e] text-black dark:text-white transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            to="/#projects"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>

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
                  LinkNuke is a secure platform for creating self-destructing links and private file sharing with automatic deletion.
                  It's designed for sharing sensitive information that shouldn't remain accessible indefinitely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">My Role</h3>
                <p className="text-muted-foreground">
                  Fullstack developer – built the entire application including authentication, file handling,
                  link generation, and the responsive frontend interface.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Timeframe</h3>
                <p className="text-muted-foreground">3-4 weeks</p>
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
                { icon: SiNodedotjs, name: "Node.js" },
                { icon: SiExpress, name: "Express" },
                { icon: SiMongodb, name: "MongoDB" },
                { icon: SiJsonwebtokens, name: "JWT" },
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
                LinkNuke provides a secure way to share sensitive information through self-destructing links and files.
                It's perfect for sharing confidential data that should only be accessible for a limited time or number of views.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Design Philosophy</h3>
              <p className="text-muted-foreground">
                Clean, intuitive interface focused on security and ease of use. The design prioritizes clarity and simplicity
                while ensuring all security features are easily accessible.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Security First Approach
              </h3>
              <p className="text-muted-foreground">
                Built with security as the top priority, featuring end-to-end encryption, automatic deletion, and secure
                link generation to protect sensitive information.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Secure, self-destructing links and files</li>
                <li>Password protection for shared content</li>
                <li>Custom expiration settings</li>
                <li>One-time view option for sensitive information</li>
                <li>Real-time link tracking</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Impact and Results
              </h3>
              <p className="text-muted-foreground">
                LinkNuke has been successfully used to share sensitive information securely across 40+ countries.
                The platform's intuitive design and robust security features have made it a reliable solution for
                professionals who need to share confidential data with peace of mind.
              </p>
            </section>
          </div>

          {/* CTA */}
          <section className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Like what you see?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Get in Touch
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </section>
        </div>
      </main>

      <Contact />
      <Footer />
    </>
  );
}

export default LinkNukeProject;
