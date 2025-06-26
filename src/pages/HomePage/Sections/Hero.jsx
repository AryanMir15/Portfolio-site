import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative isolate min-h-screen flex items-center justify-center bg-white text-gray-900 px-4 sm:px-6 lg:px-8"
      id="home"
    >
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-balance drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
          Building the Web
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-indigo-600">
          I’m Tanzeel — Fullstack Dev
        </p>
        <div className="pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm sm:text-base font-medium text-white shadow-md hover:bg-indigo-500 transition"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
