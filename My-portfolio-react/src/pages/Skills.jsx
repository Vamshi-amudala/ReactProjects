import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Server, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "RESTful APIs", level: 85 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Docker", level: 65 }
      ]
    }
  ]

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

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${skill.level}%` }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-blue-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full skill-bar"
        />
      </div>
    </motion.div>
  )

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
            My Skills
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Problem Solving", icon: Code },
              { name: "Team Collaboration", icon: Globe },
              { name: "Agile Methodology", icon: Wrench },
              { name: "Code Review", icon: Database }
            ].map((competency, index) => {
              const Icon = competency.icon
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
                  <h3 className="text-lg font-bold text-white">{competency.name}</h3>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Currently Learning</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'GraphQL', 'AWS', 'Kubernetes', 'Next.js'].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills