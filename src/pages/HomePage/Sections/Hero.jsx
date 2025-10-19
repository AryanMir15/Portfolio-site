import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");
  const trailRef = useRef(null);

  const handleCTAClick = (action) => {
    // Track event logic here
    console.log("CTA clicked:", action);
  };

  useEffect(() => {
    // Only run on client-side and for desktop
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const trail = document.createElement("div");
    trail.className = "custom-cursor-trail";
    document.body.appendChild(trail);
    trailRef.current = trail;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const updateTrail = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      if (trail) {
        trail.style.left = trailX + "px";
        trail.style.top = trailY + "px";
      }

      requestAnimationFrame(animateTrail);
    };

    // Start animation
    requestAnimationFrame(animateTrail);
    document.addEventListener("mousemove", updateTrail);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateTrail);
      if (trailRef.current && trailRef.current.parentNode) {
        trailRef.current.parentNode.removeChild(trailRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <section
        className="relative min-h-screen w-full overflow-hidden bg-black"
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
              maskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, black 35%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, black 35%, transparent 100%)',
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

            {/* CTA BUTTON */}
            <div className="mb-8">
              {isLoggedIn ? (
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  <Link
                    to="/dashboard"
                    onClick={() => handleCTAClick("go_to_dashboard")}
                    className="group relative inline-flex items-center justify-center text-sm rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 transition-all duration-200"
                    title="dashboard"
                  >
                    Go to Dashboard
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height={10}
                      width={10}
                      fill="none"
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                      <path
                        d="M0 5h7"
                        className="transition opacity-0 group-hover:opacity-100"
                      />
                      <path
                        d="M1 1l4 4-4 4"
                        className="transition group-hover:translate-x-[3px]"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  <Link
                    to="/register"
                    onClick={() => handleCTAClick("start_sharing_securely")}
                    className="group relative inline-flex items-center justify-center text-sm rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 transition-all duration-200"
                    title="Get Started"
                  >
                    Get Started For Free
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height={10}
                      width={10}
                      fill="none"
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                      <path
                        d="M0 5h7"
                        className="transition opacity-0 group-hover:opacity-100"
                      />
                      <path
                        d="M1 1l4 4-4 4"
                        className="transition group-hover:translate-x-[3px]"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {/* DASHBOARD IMAGE */}
            <div className="w-full max-w-[90vw] mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-28">
              <a href="https://linknuke.whynotship.me" target="_blank" rel="noopener noreferrer" className="block w-full">
                <div className="relative inline-flex items-center justify-center w-full group">
                  <div className="hidden group-hover:block absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-2xl blur-lg" />
                  <img
                    src="/LinkNukeHero.png"
                    alt="LinkNuke Dashboard"
                    className="relative w-full h-auto rounded-2xl ring-1 ring-white/10 group-hover:shadow-lg group-hover:-translate-y-0.5 group-hover:shadow-gray-600/30 cursor-pointer transition-all duration-200" style={{ maxWidth: 'none' }}
                  />
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
        width: 16px;
        height: 16px;
        background: linear-gradient(45deg, #6366f1, #ec4899);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        box-shadow: 0 0 15px rgba(99, 102, 241, 0.6);
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
