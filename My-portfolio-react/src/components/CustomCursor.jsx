import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* 🔥 Bright Red Glowing Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: '#ff0000',
          boxShadow: `
            0 0 12px 4px rgba(255, 0, 0, 0.7),     /* outer red glow */
            0 0 30px 12px rgba(255, 0, 0, 0.5)      /* soft large glow */
          `,
          mixBlendMode: 'difference',
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 1200,
          damping: 20,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default CustomCursor;
