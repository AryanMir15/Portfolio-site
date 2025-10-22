import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRouting, setIsRouting] = useState(false);
  const location = useLocation();

  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Route change detection
  useEffect(() => {
    const handleRouteChange = () => {
      setIsRouting(true);

      const timer = setTimeout(() => {
        setIsRouting(false);
      }, 800);

      return () => clearTimeout(timer);
    };

    handleRouteChange();
  }, [location]);

  // Scroll management
  useEffect(() => {
    // Scroll to top when route changes start
    if (isRouting) {
      window.scrollTo({
        top: 0,
        behavior: 'auto'  // Instant scroll when route changes
      });
    }

    // Smooth scroll after content loads
    if (!isLoading && !isRouting) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 50); // Small delay to ensure DOM is ready

      return () => clearTimeout(timer);
    }
  }, [isLoading, isRouting, location]);

  if (!isLoading && !isRouting) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative w-16 h-16">
        {/* Spinning ring - using the gradient from Hero component */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            borderImage: 'linear-gradient(to right, #6366f1, #ec4899) 1',
            animation: 'spin 1s linear infinite',
          }}
        ></div>

        {/* Inner glow */}
        <div
          className="absolute inset-0 border-4 border-transparent rounded-full"
          style={{
            borderImage: 'linear-gradient(to right, #6366f1, #ec4899) 1',
            opacity: 0.3,
            animation: 'spin 1.5s linear infinite',
            animationDirection: 'reverse'
          }}
        ></div>
      </div>

      {/* Add global styles for the animation */}
      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
