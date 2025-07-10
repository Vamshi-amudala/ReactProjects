import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Award, Mail, Phone } from 'lucide-react'

const About = () => {
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

  const education = [
    {
      degree: "Masters in Computer Applications",
      institution: "Aurora's Post Graduate College, Ramanthapur",
      period: "2023 - 2025",
      grade: "8.01 CGPA",
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Government Arts & Science College, Kamareddy",
      period: "2020 - 2023",
      grade: "8.0 CGPA",
      icon: GraduationCap
    }
  ]

  const achievements = [
    {
      title: "Full Stack Development",
      description: "Proficient in both frontend and backend technologies",
      icon: Award
    },
    {
      title: "Problem Solving",
      description: "Strong analytical and problem-solving skills",
      icon: Award
    },
    {
      title: "Team Collaboration",
      description: "Excellent communication and teamwork abilities",
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a strong foundation in computer science and 
            hands-on experience in modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a dedicated Computer Science student at Aurora's Post Graduate College, 
              currently pursuing MCA with a strong academic record of 8.01 CGPA. My passion for 
              technology drives me to continuously learn and adapt to new challenges in the ever-evolving 
              world of software development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With expertise in full-stack development, I enjoy creating seamless user experiences 
              through clean, efficient code. My projects demonstrate proficiency in React, Node.js, 
              and modern web technologies, always focusing on best practices and scalable solutions.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <MapPin size={20} />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <Calendar size={20} />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="glass-effect rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">Vamshi Amudala</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Mail size={16} /> Email:
                  </span>
                  <span className="text-blue-400">vamshiamudala126@gmail.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Phone size={16} /> Phone:
                  </span>
                  <span className="text-green-400">+91 6302904268</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Degree:</span>
                  <span className="text-white">MCA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CGPA:</span>
                  <span className="text-yellow-400">8.01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fun Fact:</span>
                  <span className="text-pink-400">Solving LeetCode at 2am 🌙</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full glow-pulse">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-gray-400">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span className="text-yellow-400">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Strengths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-xl p-6 text-center card-hover"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Resume CTA */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 transition transform duration-300"
          >
            Download Resume 💼
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default About
