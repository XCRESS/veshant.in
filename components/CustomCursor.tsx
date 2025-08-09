'use client';

import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorRing = document.querySelector('.cursor-ring') as HTMLElement;

    if (!cursorDot || !cursorRing) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      cursorDot.style.transform = `translate(${x}px, ${y}px)`;
      cursorRing.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseEnter = () => {
      cursorRing.classList.add('cursor-grow');
    };

    const handleMouseLeave = () => {
      cursorRing.classList.remove('cursor-grow');
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .interactive').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .interactive').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;
