import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");

  const handleCTAClick = (action) => {
    // Track event logic here
    console.log("CTA clicked:", action);
  };

  return (
    <main className="min-h-screen bg-black pt-14 lg:pt-20">
      <section
        className="relative min-h-[calc(100vh-3.5rem)] lg:min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-black"
        id="home"
        aria-label="LinkNuke - Secure Self-Destructing Links Hero Section"
      >
        {/* Base Layer: Solid Background */}
        <div className="absolute inset-0 bg-black z-0" />

        {/* Grid Layer */}
        <div className="absolute inset-0 z-10">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #4b5563 1px, transparent 1px),
                linear-gradient(to bottom, #4b5563 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse 30% 27.5% at 50% 22%, black 35%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 30% 27.5% at 50% 22%, black 35%, transparent 100%)',
              zIndex: 10
            }}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 h-full">
          <div className="container mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="flex flex-col items-center text-center">
              {/* MAIN HEADLINE */}
              <div className="space-y-8 mb-8">
                <h1 className="font-medium text-[36px] sm:text-[48px] lg:text-[60px] leading-tight tracking-tight text-white">
                  Built a <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">SaaS</span> that reached
                  <br />
                  <span className="inline-flex items-baseline">
                    <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">40+</span>
                    <span className="text-white"> countries</span>
                  </span> in launch week.
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-normal">
                  150+ visitors, 400+ sessions, and 5+ signups in week one.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                {/* Contact Me Button */}
                <div className="relative group">
                  <Link
                    to="/contact"
                    onClick={() => handleCTAClick("contact_me")}
                    className="relative inline-flex items-center justify-center text-base font-medium tracking-wider rounded-xl px-6 py-3 overflow-hidden bg-black text-white active:scale-95 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.4)]"
                    title="Contact Me"
                  >
                    <span className="relative z-10 flex items-center">
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-4 h-4 mr-2.5" 
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
                      </svg>
                      Contact Me
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-pink-500/40 to-indigo-500/0 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></span>
                  </Link>
                </div>

                {/* Learn More Button */}
                <div className="relative group">
                  <Link
                    to="/learn-more"
                    onClick={() => handleCTAClick("learn_more")}
                    className="inline-flex items-center gap-2 px-8 py-3 text-sm rounded-xl border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-200 font-semibold"
                    title="Learn More"
                  >
                    Learn More
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height={14}
                      width={14}
                      fill="none"
                      className="stroke-current"
                    >
                      <path
                        d="M1 5h7"
                        className="transition duration-200 group-hover:translate-x-0.5"
                      />
                      <path
                        d="M5 1l4 4-4 4"
                        className="transition duration-200"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* DASHBOARD IMAGE */}
              <div className="w-full max-w-[90vw] mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-28">
                <a href="https://linknuke.whynotship.me" target="_blank" rel="noopener noreferrer" className="block w-full group">
                  <div className="relative inline-flex items-center justify-center w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-pink-500/30 to-yellow-400/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-all duration-300" />
                    <div className="relative w-full group-hover:-translate-y-1 transition-transform duration-300">
                      <img
                        src="/LinkNukeHero.png"
                        alt="LinkNuke Dashboard"
                        className="relative w-full h-auto rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)]"
                        style={{ maxWidth: 'none' }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations and effects */}
      <style jsx global>{`
      /* Custom cursor trail */
      .custom-cursor-trail {
        position: fixed;
        width: 12.8px;  /* Reduced by 20% from 16px */
        height: 12.8px;  /* Reduced by 20% from 16px */
        background: linear-gradient(45deg, #ffffff, #e2e8f0);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);  /* Slightly reduced shadow to match size */
        will-change: transform;
      }
      
      /* Add a subtle pulse animation */
      @keyframes pulse {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
      }
      
      .custom-cursor-trail.pulse {
        animation: pulse 2s infinite;
      }
      
      /* Custom cursor trail hover effect */
      .custom-cursor-trail:hover {
        animation: pulse 1.5s infinite;
      }
      
      /* Hide cursor trail on mobile */
      @media (max-width: 1023px) {
        .custom-cursor-trail {
          display: none;
        }
      }
      
      /* CTA button shine effect */
      .shine-button {
        position: relative;
        overflow: hidden;
      }

      .shine-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
        );
        transition: left 0.5s ease;
      }

      .shine-button:hover::before {
        left: 100%;
      }

      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      @media (prefers-reduced-motion: no-preference) {
        html, body {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
      }
    `}</style>
    </main>
  );
};

export default Hero;
