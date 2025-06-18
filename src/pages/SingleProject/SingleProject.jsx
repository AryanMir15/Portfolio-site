import React from "react";
import { useParams, Link } from "react-router-dom";
import singleProjectData from "../../data/singleProject";
import Navbar from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

function SingleProject() {
  const { id } = useParams();
  const project = singleProjectData.find((p) => String(p.id) === id);

  if (!project)
    return <p className="text-white text-center mt-20">Project not found 😵</p>;

  const { title, description, stack, image, details, githubLink, liveLink } =
    project;

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gray-950 text-white px-4 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start">
          {/* LEFT: Title, description, buttons */}
          <div className="md:w-2/5 w-full space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 leading-tight">
              {title}
            </h1>
            <p className="text-gray-300 text-lg">
              {description || "No description available yet."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 text-white border border-gray-600 rounded hover:bg-gray-800 transition"
              >
                <ArrowLeft size={18} /> Back Home
              </Link>

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-white border border-green-600 rounded hover:bg-green-700 transition"
                >
                  Live Site <ExternalLink size={18} />
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-white border border-gray-600 rounded hover:bg-gray-800 transition"
                >
                  GitHub <Github size={18} />
                </a>
              )}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="md:w-3/5 w-full flex justify-center md:justify-end">
            <img
              src={image || "/default.png"}
              alt={title}
              className="w-full max-w-[550px] rounded-lg shadow-[0_10px_50px_rgba(0,0,0,0.6)] object-cover transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="bg-gray-950 text-white px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="flex flex-wrap gap-3">
            {stack.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-800 px-4 py-1 rounded-full text-sm text-white shadow"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="bg-gray-950 text-white px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div
            className="prose prose-invert max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: details }}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SingleProject;
