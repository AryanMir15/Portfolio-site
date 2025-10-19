import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  const lenisRef = useRef();

  useEffect(() => {
    const lenis = new Lenis({
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

    lenisRef.current = lenis;

    // Optimized animation frame loop
    let animationFrameId;
    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    
    animationFrameId = requestAnimationFrame(raf);

    // Handle scroll events more efficiently
    const handleWheel = (e) => {
      // Prevent default only for touchpad/mouse wheel
      if (e.ctrlKey) return; // Allow zooming
      if (Math.abs(e.deltaY) < 3) return; // Ignore tiny movements
      
      e.preventDefault();
      lenis.scrollTo('current', { lock: false });
    };

    // Add passive: false for better touchpad support
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

export default useSmoothScroll;
