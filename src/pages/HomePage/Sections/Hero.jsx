import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbRightX = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
      className="relative isolate min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-28 py-24 bg-background text-foreground overflow-hidden"
    >
      {/* Top Left Orb */}
      <motion.img
        src="/black-orb.png"
        alt="Black Orb Left"
        style={{ y: orbY }}
        className="absolute top-10 left-6 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 drop-shadow-2xl pointer-events-none z-0"
      />

      {/* Bottom Right Orb - Enhanced */}
      <motion.div
        style={{ y: orbRightY, x: orbRightX, scale: orbScale }}
        className="absolute bottom-6 right-6 pointer-events-none z-0"
      >
        <motion.div className="w-28 sm:w-32 md:w-40 lg:w-48 rounded-full">
          <div className="relative w-full h-full">
            <img
              src="/black-orb.png"
              alt="Black Orb Right"
              className="relative w-full h-full object-cover rounded-full opacity-80"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Glow Accent Top Right */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        animate={floatControls}
        className="absolute top-10 right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary opacity-30 blur-2xl z-0"
      ></motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl w-full">
        {/* LEFT: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-none w-full text-center lg:text-left space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            I code. I think. <span className="text-primary">I design.</span> I
            do everything there is to do.
          </h1>

          <p className="text-accent text-sm sm:text-base font-light max-w-xl mx-auto lg:mx-0">
            Turning caffeine & ideas into elegant, clean fullstack magic.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="#contact"
              className="
                inline-block px-7 py-3.5 sm:px-6 sm:py-3 rounded-md transition-all duration-300 ease-in-out
                text-base sm:text-sm font-semibold bg-[#46ecd5] text-black
                hover:scale-[1.05] hover:shadow-[0_8px_24px_oklch(0_0_0_/_0.25)]
                active:scale-[0.98]
              "
            >
              <span className="bg-gradient-to-r from-black to-neutral-800 bg-clip-text text-transparent">
                Contact Me
              </span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg"
        >
          <motion.div animate={floatControls}>
            {/* Light mode image */}
            <img
              src="/Hero.svg"
              alt="Hero Light"
              className="w-full h-auto rounded-3xl object-cover dark:hidden"
            />

            {/* Dark mode image */}
            <img
              src="/Hero-gray.svg"
              alt="Hero Dark"
              className="w-full h-auto rounded-3xl object-cover hidden dark:block"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
