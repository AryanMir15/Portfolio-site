import React from "react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import NavbarCom from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import singleProjectData from "@/data/singleProject";
import Contact from "../HomePage/Sections/Contact";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { ArrowLeft } from "lucide-react";

function AmazonClone() {
  const amazonCloneData = singleProjectData.find((item) => item.id === 11);

  const { title, image, liveLink, githubLink } = amazonCloneData;

  // Scroll to top on load
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
                  A sleek e-commerce frontend replicating the Amazon shopping
                  experience — built entirely using HTML, CSS, and JavaScript.
                  From browsing to checkout and even order tracking, all with
                  zero backend.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">My Role</h3>
                <p className="text-muted-foreground">
                  UI/UX design, frontend dev, localStorage handling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Timeframe</h3>
                <p className="text-muted-foreground">8–10 days</p>
              </div>
            </div>

            <div className="flex-1 rounded-xl overflow-hidden shadow-xl">
              <img
                src={image}
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
                { icon: SiHtml5, name: "HTML" },
                { icon: SiCss3, name: "CSS" },
                { icon: SiJavascript, name: "JavaScript" },
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
                Amazon Clone is a fully responsive shopping experience that
                simulates core e-commerce workflows. Users can browse products,
                manage their cart, and track delivery — all on the frontend
                using localStorage.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Design Philosophy</h3>
              <p className="text-muted-foreground">
                The design mimics Amazon’s structure but keeps it lightweight,
                clean, and fast. Emphasis was placed on usability, responsive
                spacing, and interaction feedback to make the flow intuitive.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Mobile-First Approach
              </h3>
              <p className="text-muted-foreground">
                Every screen is optimized for mobile. Whether you're browsing or
                checking out, the layout adjusts perfectly without sacrificing
                clarity or control.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Responsive product grid + live search</li>
                <li>Interactive cart with real-time updates</li>
                <li>Animated order progress tracker</li>
                <li>Full frontend logic (no backend)</li>
                <li>LocalStorage persistence</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">
                Impact and Results
              </h3>
              <p className="text-muted-foreground">
                This build shows how clean UI + smart client-side logic can
                create a convincing product experience. It proves frontend alone
                can replicate high-functionality workflows when done with care.
              </p>
            </section>

            {/* Project Links */}
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

export default AmazonClone;
