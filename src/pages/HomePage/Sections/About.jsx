import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      className="py-40 px-4 sm:px-6 lg:px-8 bg-black text-foreground"
      id="about"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-center"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Hi I'm Tanzeel Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111111] rounded-xl p-8 flex flex-col justify-center text-center min-h-[500px]"
          >
            <h2 className="text-3xl font-bold mb-4">Hi, I'm Tanzeel</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Full-stack dev. Passionate about clean UI, sharp logic & building
              useful web products that actually matter.
            </p>
            <Link
              to="/learn-more"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition font-medium"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right side: Stacked Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact Me Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-[#111111] rounded-xl p-8 flex flex-col justify-center min-h-[220px]"
            >
              <h3 className="text-2xl font-bold mb-2">
                Got a project in mind?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Let’s connect and build something awesome together.
              </p>
              <Link
                to="/contact"
                className="inline-block w-fit px-5 py-2 border border-black dark:border-white rounded-lg font-semibold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#111111] rounded-xl p-8 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-3">Tech Stack</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Tools I use to build full-stack magic: frontend flair, backend
                brains, and version control sanity.
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 items-center">
                {/* ICONS */}
                {[
                  ["si-html5", "text-orange-400"],
                  ["si-css3", "text-blue-400"],
                  ["si-javascript", "text-yellow-300"],
                  ["si-react", "text-sky-400"],
                  ["si-tailwindcss", "text-cyan-400"],
                  ["si-vite", "text-purple-400"],
                  ["si-git", "text-orange-500"],
                  ["si-express", "text-gray-300"],
                  ["si-mongodb", "text-green-400"],
                ].map(([icon, color], i) => (
                  <div
                    key={i}
                    className="bg-black dark:bg-[#1a1a1a] rounded-md p-2 flex items-center justify-center"
                  >
                    <i className={`si ${icon} ${color} text-2xl`} />
                  </div>
                ))}

                {/* Node.js icon */}
                <div className="bg-black dark:bg-[#1a1a1a] rounded-md p-2 flex items-center justify-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-8"
                    alt="Node.js"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
