"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

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
      {/* Outer Trailing Halo Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.85 : 0.45,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-14 h-14 border border-purple-400/60 bg-gradient-to-r from-sky-500/10 via-purple-500/15 to-pink-500/10 backdrop-blur-[1px] shadow-[0_0_25px_rgba(168,85,247,0.4)]'
              : 'w-8 h-8 border border-sky-400/50 bg-sky-400/5 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
          }`}
        />
      </motion.div>

      {/* Main Cursor Element (Dot -> Gemini AI Sparkle Star Transformation) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown ? 0.85 : isHovering ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      >
        <AnimatePresence mode="wait">
          {!isHovering ? (
            /* Default Cursor: Precision Glowing Dot */
            <motion.div
              key="dot"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-sky-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
            />
          ) : (
            /* Hover Cursor: Custom Formatyk Tech Sparkle Badge */
            <motion.div
              key="formatyk-sparkle"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 45, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className="relative w-8 h-8 flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(56,189,248,0.8)] drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
            >
              {/* Rotating Formatyk 4-Point Tech Diamond Star */}
              <motion.svg
                viewBox="0 0 36 36"
                className="w-8 h-8"
                animate={{ rotate: 90 }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              >
                <defs>
                  <linearGradient id="formatykGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                {/* Custom Formatyk Sparkle Geometry */}
                <path
                  d="M 18 2 Q 18 18 2 18 Q 18 18 18 34 Q 18 18 34 18 Q 18 18 18 2 Z"
                  fill="url(#formatykGrad)"
                />
              </motion.svg>

              {/* Glowing Core Dot */}
              <div className="absolute w-1.5 h-1.5 rounded-full bg-white blur-[0.5px] opacity-90 pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
