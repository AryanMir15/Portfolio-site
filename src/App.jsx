import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import HomePage from "./HomePage";
import AmazonClone from "./pages/SingleProject/amazon-clone";
import ApiProject from "./pages/SingleProject/api";
import CocktailProject from "./pages/SingleProject/cocktail";
import LearnMore from "./pages/LearnMore";
import NotFound from "./Boiler/NotFound";
import CpmProject from "./pages/SingleProject/client-portal";
import LinkNukeProject from "./pages/SingleProject/linknuke";
import ContactMe from "./pages/Contact-me";
import PageLoader from "./components/PageLoader";

// Disable default smooth scrolling
const disableSmoothScroll = `
  html {
    scroll-behavior: auto !important;
  }
  * {
    scroll-behavior: auto !important;
  }
`;

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main App component
function App() {
  const lenisRef = useRef();
  const trailRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Cursor effect
  useEffect(() => {
    // Only run on client-side and for desktop
    const isDesktopView = window.innerWidth >= 1024;
    setIsDesktop(isDesktopView);

    if (!isDesktopView) return;

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

    // Handle window resize
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 1024;
      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateTrail);
      window.removeEventListener('resize', handleResize);
      if (trailRef.current?.parentNode) {
        trailRef.current.parentNode.removeChild(trailRef.current);
      }
    };
  }, [isDesktop]);

  // Initialize Lenis
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Create style element for smooth scroll disabling
    const style = document.createElement('style');
    style.innerHTML = disableSmoothScroll;
    document.head.appendChild(style);

    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1.2,
    });

    // Store Lenis instance
    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Set dark mode
    document.documentElement.classList.add("dark");

    // Enable scrolling on the body
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy();
      }
      document.head.removeChild(style);
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <>
      <PageLoader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/amazon-clone" element={<AmazonClone />} />
        <Route path="/api" element={<ApiProject />} />
        <Route path="/cocktail" element={<CocktailProject />} />
        <Route path="/client-portal" element={<CpmProject />} />
        <Route path="/linknuke" element={<LinkNukeProject />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
