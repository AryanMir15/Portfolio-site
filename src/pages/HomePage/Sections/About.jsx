import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r flex flex-col md:flex-row md:items-center justify-evenly from-emerald-200 to-white text-gray-900 py-24 overflow-hidden"
    >
      <div className="flex items-center justify-evenly  mx-auto px-6 flex-col md:flex-row">
        {/*   LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" h-[360px] w-[340px] md:h-[440px]"
        >
          <motion.div
            className="bg-black rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.7)] h-full relative flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <img
              src="/about.jpg"
              alt="Developer workspace"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 text-center px-6">
              <p className="text-white text-xl font-semibold leading-relaxed">
                “Shipping clean code <br /> since 2024.”
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/*RIGHT TEXT */}
      <div className="flex flex-col text-left justify-start space-y-8 p-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 md:mb-8 mx-auto ">
          About Me
        </h2>
        <p className="text-balance font-normal leading-8 max-w-4xl mx-auto text-center text-xl">
          I'm a full-stack web developer specializing in the{" "}
          <strong>MERN stack</strong> MongoDB, Express.js, React, and Node.js. I
          build modern, scalable, and high-performance web applications from
          front to back. My approach is rooted in clean architecture, efficient
          code, and a deep understanding of user-centric design.
        </p>

        <a
          href="#projects"
          className="inline-flex items-center w-fit mt-8 mx-auto shadow-[4px_5px_10px_rgba(0,0,0,0.7)]  gap-2 rounded-md bg-black px-5 py-2.5 text-sm sm:text-base font-medium text-white  hover:bg-gray-800 transition"
        >
          View Projects
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default About;
