import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const floatControls = useAnimation();

  useEffect(() => {
    floatControls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [floatControls]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate h-[110vh] flex items-center justify-center px-6 sm:px-10 lg:px-28 -mt-20 py-20 text-foreground overflow-hidden"
    >
      {/* 🔮 CHILLED BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3f4f6] to-[#e0e3e8] dark:from-[#0d1117] dark:to-[#161b22] z-0" />

      {/* 🌊 WAVE TOP */}
      <img
        src="/wave-dark.svg"
        alt="Top Wave Light"
        className="absolute top-0 left-0 w-full object-cover dark:hidden z-10 pointer-events-none"
      />
      <img
        src="/wave-dark.svg"
        alt="Top Wave Dark"
        className="absolute top-0 left-0 w-full object-cover hidden dark:block z-10 pointer-events-none"
      />

      {/* 👑 MAIN CONTENT */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center space-y-6 max-w-4xl
                   pt-44 sm:pt-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          I code. I think. <span className="text-primary">I design.</span> I do
          everything there is to do.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-accent text-sm sm:text-base font-light max-w-xl"
        >
          Turning caffeine & ideas into elegant, clean fullstack magic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-4"
        >
          <a
            href="#contact"
            className="
              inline-block px-7 py-3.5 sm:px-6 sm:py-3 rounded-md transition-all duration-300 ease-in-out
              text-base sm:text-sm font-semibold bg-[#46ecd5] text-black
              hover:scale-[1.05] hover:shadow-[0_8px_24px_oklch(0_0_0_/_0.25)]
              active:scale-[0.98] mb-32 md:mb-0
            "
          >
            <span className="bg-gradient-to-r from-black to-neutral-800  bg-clip-text text-transparent">
              Contact Me
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
