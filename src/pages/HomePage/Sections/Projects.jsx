import React from "react";
import projectData from "@/data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Projects I've Built
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => {
            const { title, description, image, tech, id, to } = project;

            return (
              <Link to={`/projects/${to}`} key={id}>
                <div className="rounded-2xl overflow-hidden bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{description}</p>
                    <div className="flex gap-4 text-xl">
                      {tech.map((logo, index) => {
                        const { icon, color } = logo;
                        return (
                          <span
                            key={index}
                            className={`text-xl ${color} flex items-center justify-center`}
                          >
                            {typeof icon === "string" ? (
                              <i className={icon}></i>
                            ) : (
                              React.createElement(icon, { size: "1.2em" })
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
