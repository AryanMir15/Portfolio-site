import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Hi I'm Tanzeel Card */}
          <div className="bg-gradient-to-br from-cyan-100 to-white dark:from-[#0e0e0e] dark:to-[#1a1a1a] rounded-3xl shadow-xl p-8 flex flex-col justify-center text-center min-h-[500px]">
            <h2 className="text-3xl font-bold mb-4">Hi, I'm Tanzeel</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Full-stack dev. Passionate about clean UI, sharp logic & building
              useful web products.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white dark:from-cyan-400 dark:to-cyan-300 dark:text-black font-medium shadow hover:scale-105 transition"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right side: Stacked Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact Me Card */}
            <div className="bg-gradient-to-br from-cyan-100 to-white dark:from-[#0d0d0d] dark:to-[#161616] rounded-3xl shadow-xl p-8 flex flex-col justify-center min-h-[220px]">
              <h3 className="text-2xl font-bold mb-2">
                Got a project in mind?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Let’s connect and build something awesome together.
              </p>
              <a
                href="/contact"
                className="inline-block w-fit px-5 py-2 border border-black dark:border-white rounded-lg font-semibold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Contact Me
              </a>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-gradient-to-br from-cyan-100 to-white dark:from-[#0d0d0d] dark:to-[#161616] rounded-3xl shadow-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Tech Stack</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Tools I use to build full-stack magic: frontend flair, backend
                brains, and version control sanity.
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                <i className="si si-html5 text-orange-400 text-3xl" />
                <i className="si si-css3 text-blue-400 text-3xl" />
                <i className="si si-javascript text-yellow-300 text-3xl" />
                <i className="si si-react text-sky-400 text-3xl" />
                <i className="si si-tailwindcss text-cyan-400 text-3xl" />
                <i className="si si-vite text-purple-400 text-3xl" />
                <i className="si si-git text-orange-500 text-3xl" />
                <i className="si si-github text-white text-3xl" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="w-7 h-7"
                  alt="Node.js"
                />
                <i className="si si-express text-gray-300 text-3xl" />
                <i className="si si-mongodb text-green-400 text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
