import React from "react";
import Navbar from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import apiData from "@/data/Single Projects/api";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";

function ApiProject() {
  const { title, image, githubLink, liveLink } = apiData;

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
            className="w-full max-w-[700px] rounded-lg object-cover shadow-[0_0px_10px_rgba(16,185,129,0.15)] hover:shadow-[0_15px_45px_rgba(16,185,129,0.7)] transition-shadow duration-700"
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
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(100,255,100,0.12)] hover:shadow-[0_8px_30px_rgba(100,255,100,0.7)] transition duration-300">
              <SiNodedotjs className="text-green-500 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">Node.js</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.7)] transition duration-300">
              <SiExpress className="text-white text-4xl mb-2" />
              <p className="text-gray-200 font-medium">Express</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(0,255,255,0.12)] hover:shadow-[0_8px_30px_rgba(0,255,255,0.7)] transition duration-300">
              <SiMongodb className="text-green-400 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">MongoDB</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(255,255,100,0.12)] hover:shadow-[0_8px_30px_rgba(255,255,100,0.7)] transition duration-300">
              <SiJsonwebtokens className="text-yellow-400 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">JWT</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(255,153,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,153,0,0.7)] transition duration-300">
              <SiPostman className="text-orange-400 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">Postman</p>
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
            <p>
              Ever wondered what goes on under the hood of a real-world backend
              API? This one’s got it all: auth, validation, protected routes,
              and a clean modular setup — built with Node.js, Express, and
              MongoDB.
            </p>

            <p>
              And the best part? I broke the whole thing down in a{" "}
              <strong>quick 3-minute video</strong> that explains exactly how
              everything works — in plain English, no boring BS.
            </p>

            <a
              href="https://x.com/Tanzeelmirr/status/1935317760218907097"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition duration-300 hover:shadow-[0_5px_25px_rgba(59,130,246,0.6)]"
            >
              🎥 Watch the Full 3-Minute Explanation
            </a>

            <div className="space-y-6 mt-8 text-gray-300 leading-relaxed text-lg">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  🔐 Core Features:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>JWT-based authentication with bcrypt</li>
                  <li>CRUD operations on job listings</li>
                  <li>Access control with protected routes</li>
                  <li>Request validation & custom error handling</li>
                  <li>Fully tested via Postman</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  💡 What I Learned:
                </h3>
                <p>
                  This project sharpened my understanding of secure backend
                  flows, middleware chaining, modular file structure, and
                  user-focused API design. From route protection to error
                  handling — every part was written with clean, maintainable
                  code in mind.
                </p>
              </div>
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

export default ApiProject;
