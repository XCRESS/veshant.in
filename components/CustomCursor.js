import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    const moveCursor = (e) => {
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
