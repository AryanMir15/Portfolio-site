import React from "react";
import projectData from "@/data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-white via-cyan-100 to-cyan-50 dark:from-[#0a0a0a] dark:via-[#0d0d0d] dark:to-black text-foreground py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden"
    >
      {/* Optional subtle cyan flare on sides in dark mode */}
      <div className="hidden dark:block absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-cyan-900 to-transparent opacity-20" />
      <div className="hidden dark:block absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-cyan-900 to-transparent opacity-20" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-foreground">
          Projects I’ve Built
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => {
            const { title, description, image, id, to } = project;

            return (
              <Link to={`/projects/${to}`} key={id}>
                <div className="group rounded-3xl border border-border bg-white dark:bg-card shadow-xl dark:shadow-[0_15px_25px_rgba(0,255,255,0.05)] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full min-h-[450px]">
                  {/* Content Section including image */}
                  <div className="p-6 text-left flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {description}
                      </p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl max-h-40">
                      <img
                        src={image}
                        alt={title}
                        className="rounded-xl object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Live Preview Button */}
                  <div className="px-6 pb-6">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white dark:from-cyan-400 dark:to-cyan-300 dark:text-black py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
                      Live Preview
                    </button>
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
