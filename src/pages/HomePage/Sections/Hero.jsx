import React, { useRef } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Floating image Y offsets based on scroll
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 150]); // Black orb goes down
  const objY = useTransform(scrollYProgress, [0, 1], [0, -150]); // Other object goes up

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-violet-400 text-gray-900 px-6 sm:px-10 lg:px-28 py-24 overflow-hidden"
    >
      {/* Floating Orb */}
      <motion.img
        src="/black-orb.png"
        alt="Black Orb"
        style={{ y: orbY }}
        className="absolute top-16 left-10 w-28 md:w-36 opacity-80 drop-shadow-2xl pointer-events-none z-0"
      />

      {/* Floating Object */}
      <motion.img
        src="/floating-object.png"
        alt="Floating Object"
        style={{ y: objY }}
        className="absolute bottom-10 right-8 w-32 md:w-40 opacity-80 drop-shadow-2xl pointer-events-none z-0"
      />

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-16 z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-xl text-center md:text-left w-full"
        >
          <p className="text-sm sm:text-base text-violet-600 tracking-wider font-dancing">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Tanzeel
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            I build fast, modern, and fully responsive web apps with the MERN
            stack.
          </p>

          {/* Tech Icons */}
          <div className="max-w-6xl mx-auto text-center bg-transparent flex items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-transparent rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(56,189,248,0.7)] transition duration-300">
                <i className="si si-react text-sky-400 text-4xl mb-3"></i>
              </div>
              <div className="bg-transparent rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(103,232,249,0.7)] transition duration-300">
                <i className="si si-tailwindcss text-cyan-400 text-4xl mb-3"></i>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#projects"
              className="mt-6 w-full sm:w-auto text-center inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-white text-sm sm:text-base font-medium shadow-[-4px_5px_10px_rgba(0,0,0,0.7)] hover:bg-gray-800 transition-all"
            >
              View Projects
              <ArrowDown className="w-4 h-4 animate-pulse" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm md:max-w-md h-[360px] md:h-[440px]"
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
    </section>
  );
};

export default Hero;
