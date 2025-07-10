import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import CustomCursor from './components/CustomCursor'
import ScrollIndicator from './components/ScrollIndicator'
import FloatingShapes from './components/FloatingShapes'
// import Footer from './components/Footer' // 💅 Add this line

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <CustomCursor />
        <ScrollIndicator />
        <FloatingShapes />
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            {/* Add more routes as needed */}
          </Routes>
        </motion.main>

      </div>
    </Router>
  )
}

export default App
