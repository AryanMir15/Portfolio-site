import React from "react";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            Hey, I'm <span className="text-indigo-500">Tanzeel Mir</span>
          </h1>
          <h2 className="text-indigo-400 text-lg font-medium mb-6">
            Full Stack Developer • UI Crafter
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            I build fast, responsive, and user-focused web applications. From
            slick frontends to solid backend systems — I bring ideas to life
            with clean code and focused UX.
          </p>
          <p className="text-gray-400 text-base mb-8">
            Want to see what I can do? Check out my projects or let’s talk.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="#projects"
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block rounded border border-gray-700 px-5 py-3 font-medium text-gray-300 shadow-sm transition-colors hover:bg-gray-800 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-2 items-center text-lg">
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <i className="si si-mail"></i>
            </a>
            <a
              href="https://github.com/AryanMir15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tanzeel-mir-45615734b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.fiverr.com/s/99Qb1zE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fiverr"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/fiverr.png"
                alt="Fiverr"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://x.com/Tanzeelmirr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/x--v1.png"
                alt="X logo"
                className="w-5 h-5"
              />
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-2 items-center text-lg">
            <a
              href="mailto:tanzeelmir112@gmail.com"
              className="mt-5 text-sm text-gray-400 hover:text-white transition"
            >
              tanzeelmir112@gmail.com
            </a>
          </div>
        </div>

        <div className="hidden md:block md:max-w-fit justify-end ">
          <img
            src="/Profile.png"
            alt="Profile"
            className="w-1.5 h-1.5 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-indigo-600"
            style={{
              imageRendering: "auto",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}

export default Hero;
