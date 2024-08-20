import { MutableRefObject, useEffect, useState } from "react";

export function useHasEntered(ref: MutableRefObject<HTMLElement | null>, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting && ref.current) {
          setHasEntered(entry.isIntersecting);
          observer.unobserve(ref.current);
        }
      },
      {
        // rootMargin,
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return hasEntered;
}
