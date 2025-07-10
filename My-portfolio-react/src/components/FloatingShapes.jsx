import React from 'react'
import { motion } from 'framer-motion'

const FloatingShapes = () => {
  const shapes = [
    { size: 80, color: 'bg-blue-500', top: '20%', left: '10%', delay: 0 },
    { size: 120, color: 'bg-purple-500', top: '60%', right: '10%', delay: 2 },
    { size: 60, color: 'bg-pink-500', bottom: '20%', left: '20%', delay: 4 },
    { size: 100, color: 'bg-indigo-500', top: '40%', right: '30%', delay: 1 },
    { size: 70, color: 'bg-cyan-500', bottom: '40%', right: '20%', delay: 3 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} rounded-full opacity-10`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes