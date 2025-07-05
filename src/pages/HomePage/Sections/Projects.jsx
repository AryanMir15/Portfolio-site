import React from "react";
import projectData from "@/data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-white to-gray-50 dark:from-[#0e0e0e] dark:to-[#151515] text-foreground py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold mb-20 tracking-tight text-black dark:text-white"
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => {
            const { title, description, image, id, to } = project;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <Link to={`/projects/${to}`}>
                  <div className="group rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-[0_8px_20px_rgba(0,0,0,0.4)] dark:shadow-[0_8px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_12px_24px_rgba(255,255,255,0.08)] transition-all duration-300 overflow-hidden flex flex-col justify-between h-full min-h-[450px]">
                    {/* Content */}
                    <div className="p-6 text-left flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                          {title}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
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

                    {/* Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full px-4 py-2 rounded-md border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition duration-300 font-semibold">
                        Live Preview
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
