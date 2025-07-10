import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Footer from '../components/Footer'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = ['Full Stack Developer', 'React Enthusiast', 'Java Developer', 'Problem Solver']

  useEffect(() => {
    const currentRole = roles[currentIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex - 1))
              charIndex--
            } else {
              clearInterval(deleteInterval)
              setCurrentIndex((prev) => (prev + 1) % roles.length)
            }
          }, 50)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 text-center z-10 pt-20"
      >
        {/* ✨ Your header content here */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="gradient-text">Vamshi Amudala</span>
          </motion.h1>

          <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center">
            <span className="typing-animation">{displayText}</span>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative web solutions with modern technologies. 
          Specialized in React, Node.js, and full-stack development.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link to="/projects" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View My Work
          </Link>
          <Link to="/contact" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </Link>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a href="mailto:vamshiamudala126@gmail.com" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Mail size={24} />
          </motion.a>
          <motion.a href="tel:6302904268" whileHover={{ scale: 1.2, rotate: -5 }} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
            <Phone size={24} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/vamshi-amudala-b9296a229" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
            <Linkedin size={24} />
          </motion.a>
          <motion.a href="https://github.com/Vamshi-amudala" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: -5 }} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            <Github size={24} />
          </motion.a>
        </motion.div>

        {/* ❌ Removed ArrowDown because there’s nothing below */}
        {/* <motion.div variants={itemVariants} className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </motion.div> */}
      </motion.div>

      {/* 🌌 Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-500/20 rounded-full"
        />
      </div>

      {/* 💖 Our gorgeous footer is now here! */}
      <Footer />
    </div>
  )
}

export default Home
