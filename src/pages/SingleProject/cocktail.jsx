import React from "react";
import Navbar from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import cocktailData from "@/data/Single Projects/cocktail";
import { SiReact, SiTailwindcss } from "react-icons/si";

function CocktailProject() {
  const { title, image, githubLink, liveLink } = cocktailData;

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gray-950 text-white px-4 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          <h1 className="text-3xl md:text-5xl font-semibold text-white text-center drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]">
            {title}
          </h1>

          <img
            src={image || "/default.png"}
            alt={title}
            className="w-full max-w-[700px] rounded-lg object-cover shadow-[0_0px_10px_rgba(59,130,246,0.15)] hover:shadow-[0_15px_45px_rgba(59,130,246,0.7)] transition-shadow duration-700"
          />

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-white border border-gray-600 rounded hover:bg-gray-800 transition hover:shadow-[0_5px_25px_rgba(0,0,0,0.4)]"
            >
              <ArrowLeft size={18} /> Back Home
            </Link>

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-white border border-green-600 rounded hover:bg-green-700 transition hover:shadow-[0_5px_25px_rgba(0,255,0,0.3)]"
              >
                Live Site <ExternalLink size={18} />
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-white border border-gray-600 rounded hover:bg-gray-800 transition hover:shadow-[0_5px_25px_rgba(255,255,255,0.2)]"
              >
                GitHub <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="bg-gray-950 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-10">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(97,219,251,0.12)] hover:shadow-[0_8px_30px_rgba(97,219,251,0.7)] transition duration-300">
              <SiReact className="text-cyan-400 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">React</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(56,189,248,0.12)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.7)] transition duration-300">
              <SiTailwindcss className="text-sky-400 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED DESCRIPTION SECTION */}
      <section className="bg-slate-950 text-white px-16 py-14">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-3">
            📋 Detailed Overview
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                1. Features:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Search cocktails by name using the CocktailDB API</li>
                <li>Individual cocktail detail pages</li>
                <li>
                  Clean responsive UI built with React Router and Tailwind
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">2. Purpose:</h3>
              <p>
                To learn API data fetching, routing, and handling async state in
                React. This was one of my earliest React projects and a major
                step in mastering frontend architecture.
                <br />
                <br />
                👉{" "}
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 underline hover:text-green-500 transition"
                >
                  Try the live project here
                </a>{" "}
                and see it in action.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                3. Challenges:
              </h3>
              <p>
                Understanding how to handle loading states and errors while
                keeping the UI smooth was tricky at first. But this taught me to
                trust the React component lifecycle.
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-white border border-gray-600 rounded hover:bg-gray-800 transition hover:shadow-[0_5px_25px_rgba(0,0,0,0.4)]"
          >
            <ArrowLeft size={18} /> Back Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CocktailProject;
