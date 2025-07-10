import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users } from 'lucide-react'

const Projects = () => {
const projects = [
  {
    title: "Job Portal Application",
    description: "A full-featured job portal built with Spring Boot and REST APIs, offering role-based authentication, job search, and application management.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Spring Boot", "MySQL", "Spring Security", "HTML", "CSS", "Bootstrap", "REST API"],
    github: "https://github.com/Vamshi-amudala/jobPortal_project",
    demo: "#",
    features: [
      "Role-based access: Employer & Job Seeker",
      "Post & apply to jobs",
      "Email-based OTP login",
      "Job filters and resume uploads",
      "Admin approval and dashboard"
    ]
  },
  {
    title: "Airline Management System",
    description: "Console-based airline booking system built in Java. Handles flight booking, user registration, and ticket management with internal logic for domestic/international flights.",
    image: "https://images.pexels.com/photos/731207/pexels-photo-731207.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Java", "MySQL", "JDBC", "OOP"],
    github: "https://github.com/Vamshi-amudala/project/tree/main/airline",
    demo: "#",
    features: [
      "User registration and login",
      "Flight booking (domestic/international)",
      "Ticket update & cancellation",
      "Admin & user role handling",
      "Flight price logic implementation"
    ]
  },
  {
    title: "Health Tracker System",
    description: "Health app that tracks fitness goals, displays progress with charts, and stores vital health stats securely using MERN stack.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "CSS"],
    github: "https://github.com/Vamshi-amudala/project/tree/main/health_tracker",
    demo: "#",
    features: [
      "Health metrics tracking (BMI, calories, etc.)",
      "Chart-based data visualization",
      "Goal progress & streak monitoring",
      "Responsive and sleek UI",
      "Secure MongoDB data storage"
    ]
  }
]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
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
    <div className="min-h-screen pt-20 pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills
            in full-stack development and problem-solving.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </motion.a>
                  
                  {/* <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in My Work?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always working on new projects and learning new technologies. 
            Check out my GitHub for more projects and contributions.
          </p>
          <motion.a
            href="https://github.com/Vamshi-amudala"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            <Github size={24} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects