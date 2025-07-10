import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Experience = () => {
  const certificate = {
    title: 'Java Full Stack Development',
    provider: 'Edubridge Digital Academy',
    duration: '6 Months Intensive Program',
    focus: 'Full Stack Java Development',
    overview:
      'Comprehensive certification in Java Full Stack Development covering modern web development practices, enterprise-level application development, and industry-standard tools and technologies.',
    skills: {
      Backend: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs'],
      Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
      Tools: ['MySQL', 'Git', 'Postman', 'Maven', 'Agile']
    },
    image: '/images/certificate.png'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-16">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Certification</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here's a peek at my certified journey in full stack development!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-800 to-teal-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-6 md:p-10">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{certificate.title}</h2>
                <p className="text-sm text-gray-300">{certificate.provider}</p>
              </div>
              <span className="text-green-400 border border-green-400 px-3 py-1 rounded-full text-xs font-medium">✅ Certified</span>
            </div>

            <div className="mt-6">
              <h3 className="text-white text-lg font-semibold mb-1">Certification Overview</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {certificate.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6 text-sm text-gray-200">
              <div>
                <h4 className="font-semibold text-white mb-1">Issued by:</h4>
                <p>{certificate.provider}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Duration:</h4>
                <p>{certificate.duration}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Focus Area:</h4>
                <p>{certificate.focus}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg text-white font-semibold mb-4">Skills & Technologies</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(certificate.skills).map(([section, items]) => (
                  <div key={section}>
                    <h4
                      className={`font-semibold mb-2 ${
                        section === 'Backend'
                          ? 'text-blue-400'
                          : section === 'Frontend'
                          ? 'text-green-400'
                          : 'text-orange-400'
                      }`}
                    >
                      {section} Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm text-white ${
                            section === 'Backend'
                              ? 'bg-blue-700'
                              : section === 'Frontend'
                              ? 'bg-green-700'
                              : 'bg-orange-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              {/* <h3 className="text-lg font-semibold text-white mb-4">Certificate Preview</h3>
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <img src={certificate.image} alt="Certificate" className="w-full max-w-3xl mx-auto" />
              </div> */}
              <div className="text-center mt-4">
                <a
                  href={certificate.image}
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium"
                >
                  <Download size={16} /> Download Certificate
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;