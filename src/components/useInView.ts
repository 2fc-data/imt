import { useEffect, useRef, useState } from "react";

/**
 * A custom hook that uses the Intersection Observer API to detect
 * when an element enters the viewport.
 * 
 * @param options - IntersectionObserverInit options (threshold, root, rootMargin)
 * @returns An object containing the ref to attach and a boolean indicating visibility.
 */
export const useInView = (options: IntersectionObserverInit = { threshold: 0.15 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, we can stop observing if we only want a one-time animation
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
};
