'use client';
import React, { useEffect, useRef, useState } from 'react';

interface propTypes {
  name: string;
  count: number;
  sym: string;
  div: number;
  decimal: number;
}

const Counter: React.FC<propTypes> = ({ name, count, sym, div, decimal }) => {
  const [countt, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);
  const newCount = (countt / div).toFixed(decimal).toString();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1000; // Duration of the animation (2 seconds)
    const increment = count / (duration / 30); // Increment per frame (16ms per frame at 60fps)

    const updateCount = () => {
      start += increment;
      if (start < count) {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCount);
      } else {
        setCount(count); // Ensure final count is set to count
      }
    };

    updateCount();

    return () => setCount(0); // Reset count when leaving view
  }, [isInView, count]);

  return (
    <div
      className="text-fontPrimary flex justify-center items-center flex-col"
      ref={counterRef}
    >
      <h2 className="text-4xl md:text-5xl font-semibold">{newCount + sym}</h2>
      <p className="text-fontSecondary py-3">{name}</p>
    </div>
  );
};

export default Counter;
