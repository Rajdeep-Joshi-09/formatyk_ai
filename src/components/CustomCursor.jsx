"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth physics for outer trailing aura
  const springConfig = { damping: 22, stiffness: 280 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default system cursor on document root
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target or any ancestor is interactive/clickable
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('label') ||
        target.closest('summary') ||
        target.closest('[role="button"]') ||
        target.closest('[role="link"]') ||
        target.closest('.cursor-pointer') ||
        target.closest('[data-cursor="pointer"]') ||
        target.closest('[onclick]') ||
        (target.style && target.style.cursor === 'pointer') ||
        (typeof window !== 'undefined' && window.getComputedStyle(target).cursor === 'pointer');

      setIsHovering(Boolean(isClickable));
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing Outer Magnetic Fluid Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown ? 0.85 : isHovering ? 1.6 : 1,
          opacity: isHovering ? 0.9 : 0.35,
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-11 h-11 border border-[#38bdf8]/70 bg-[#38bdf8]/10 backdrop-blur-[2px] shadow-[0_0_25px_rgba(56,189,248,0.3)]'
              : 'w-7 h-7 border border-[#38bdf8]/40 shadow-[0_0_10px_rgba(56,189,248,0.15)]'
          }`}
        />
      </motion.div>

      {/* Main Precision Tech Core Node */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown ? 0.75 : isHovering ? 1.3 : 1,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
      >
        <div className="relative flex items-center justify-center">
          {/* Inner Precision Tech Glow Core */}
          <div
            className={`rounded-full transition-all duration-250 ${
              isHovering
                ? 'w-3 h-3 bg-gradient-to-tr from-[#38bdf8] via-[#3b82f6] to-[#8b5cf6] shadow-[0_0_12px_#38bdf8]'
                : 'w-2 h-2 bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]'
            }`}
          />
          {/* Pulse Ring on Hover */}
          {isHovering && (
            <span className="absolute w-5 h-5 rounded-full border border-[#38bdf8]/50 animate-ping pointer-events-none" />
          )}
        </div>
      </motion.div>
    </>
  );
}
