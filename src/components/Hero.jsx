import React from "react";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hey, I'm <span className="text-indigo-500">Tanzeel Mir</span>
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          A fullstack developer who builds fast, responsive, and user-focused
          web applications. From slick frontends to powerful backend systems — I
          bring ideas to life with clean code and solid UX.
        </p>

        <p className="text-base text-gray-400 mb-10">
          Want to see what I can do? Check out my projects or let’s talk.
        </p>

        <div className="flex justify-center gap-4">
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
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}

export default Hero;
