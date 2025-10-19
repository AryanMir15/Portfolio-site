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
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });
    
    // Store Lenis instance
    lenisRef.current = lenis;
    
    // Animation frame loop
    let lastTime = 0;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Set dark mode
    document.documentElement.classList.add("dark");
    
    // Cleanup
    return () => {
      lenis.destroy();
      document.head.removeChild(style);
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
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
