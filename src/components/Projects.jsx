import { motion } from "framer-motion";
import { Download, ExternalLink, Github, FileText, Cpu, Eye, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sign Language Recognition using AI",
      description: "A comprehensive AI-powered system for real-time sign language recognition using computer vision and deep learning techniques. The project implements gesture detection, hand tracking, and machine learning models to translate sign language into text.",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Computer Vision", "Deep Learning"],
      features: [
        "Real-time hand gesture detection",
        "Sign language to text conversion",
        "High accuracy recognition model",
        "User-friendly interface",
        "Extensive gesture vocabulary"
      ],
      status: "Completed",
      category: "AI/ML",
      reportAvailable: true,
      githubLink: "#", // Add your GitHub link here
      demoLink: "#" // Add your demo link here
    }
  ];

  return (
    <section id="projects" className="anime-section relative overflow-hidden">
      {/* Anime-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      <div className="anime-container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="anime-heading text-4xl md:text-5xl lg:text-6xl text-center mb-16 anime-text-gradient"
        >
          My Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="anime-card dark:anime-card-dark p-8 mb-8 relative"
            >
              {/* Project Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold anime-text-gradient">{project.title}</h3>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Action Buttons - Bottom Right Corner */}
              <div className="absolute bottom-6 right-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.reportAvailable && (
                    <motion.a
                      href="/Report.pdf"
                      download="Sign-Language-Recognition-Report.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="anime-button flex items-center gap-2 whitespace-nowrap"
                    >
                      <FileText size={18} />
                      <span>Project Report</span>
                    </motion.a>
                  )}

                  {project.githubLink !== "#" && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                  )}

                  {project.demoLink !== "#" && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
                    >
                      <Eye size={18} />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 anime-text-gradient">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold mb-3 anime-text-gradient">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-1 rounded-full">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Interested in seeing more of my work? Check out my GitHub or download the detailed project reports above.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="anime-button"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}