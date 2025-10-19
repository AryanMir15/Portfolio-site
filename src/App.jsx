import React, { useEffect, useRef } from "react";
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/amazon-clone" element={<AmazonClone />} />
        <Route path="/projects/jobs-API-Backend" element={<ApiProject />} />
        <Route path="/projects/cocktail-explorer" element={<CocktailProject />} />
        <Route path="/projects/client-portal" element={<CpmProject />} />
        <Route path="/projects/linknuke" element={<LinkNukeProject />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
