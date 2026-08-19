import { motion } from "framer-motion";
import { User, Heart, Code, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="anime-section relative overflow-hidden">
      {/* Anime-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>

      <div className="anime-container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="anime-heading text-4xl md:text-5xl lg:text-6xl text-center mb-16 anime-text-gradient"
        >
          About Me
        </motion.h2>

        <div className="anime-grid max-w-6xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="anime-card dark:anime-card-dark p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 anime-text-gradient">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello, my name is Shivayogeppa S. Chanagond. I am currently a 4th-semester engineering student specializing in Artificial Intelligence and Machine Learning. I have a strong interest in applying AI concepts to solve real-world problems and building intelligent systems that can learn and adapt.
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="anime-card dark:anime-card-dark p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-2xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold anime-text-gradient">My Experience</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I have worked on projects such as Sign Language Recognition using AI, where I gained hands-on experience with Python, OpenCV, MediaPipe, deep learning models, TensorFlow, and computer vision algorithms. I'm passionate about exploring the frontiers of AI and machine learning to create innovative solutions.
            </p>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="anime-card dark:anime-card-dark p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold anime-text-gradient">My Interests</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I enjoy learning new technologies, building intelligent systems, and continuously improving my problem-solving and analytical skills through AI/ML projects. I am motivated to grow as a professional and contribute effectively to innovative and impactful AI solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Neural Networks</span>
              <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Computer Vision</span>
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">NLP</span>
              <span className="bg-gradient-to-r from-green-100 to-pink-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Reinforcement Learning</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
