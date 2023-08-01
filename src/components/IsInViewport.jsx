import React, { useState, useEffect } from "react";

function useIsInViewport(refs) {
  const [isIntersecting, setIsIntersecting] = useState(refs.map(() => false));

  useEffect(() => {
    const observers = refs.map((ref, index) =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting((prev) => {
            const newIsIntersecting = [...prev];
            newIsIntersecting[index] = true;
            return newIsIntersecting;
          });
          // Once it becomes visible, disconnect the observer to prevent further updates
          observers[index].disconnect();
        }
      })
    );

    refs.forEach((ref, index) => observers[index].observe(ref.current));

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [refs]);

  return isIntersecting;
}


export default useIsInViewport;