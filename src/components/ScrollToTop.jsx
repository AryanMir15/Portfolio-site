import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef();

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    // Create a new Lenis instance if it doesn't exist
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });
    }

    const lenis = lenisRef.current;
    
    // Scroll to top on route change with smooth animation
    lenis.scrollTo(0, {
      immediate: false,
      duration: 0, // Instant scroll to top on route change
    });

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
