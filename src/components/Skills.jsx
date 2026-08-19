import { motion } from "framer-motion";
import { Code, Database, GitBranch, Brain, Cpu, Zap, Network, BarChart3 } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Python", level: 85, icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Machine Learning", level: 80, icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Deep Learning", level: 75, icon: Network, color: "from-indigo-500 to-purple-600" },
    { name: "Computer Vision", level: 70, icon: Cpu, color: "from-green-500 to-teal-500" },
    { name: "Data Science", level: 75, icon: BarChart3, color: "from-orange-500 to-red-500" },
    { name: "Git", level: 85, icon: GitBranch, color: "from-red-500 to-pink-500" },
    { name: "TensorFlow", level: 70, icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "SQL", level: 75, icon: Database, color: "from-blue-600 to-indigo-600" }
  ];

  return (
    <section id="skills" className="anime-section relative overflow-hidden">
      {/* Anime-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>

      <div className="anime-container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="anime-heading text-4xl md:text-5xl lg:text-6xl text-center mb-16 anime-text-gradient"
        >
          AI/ML Skills & Technologies
        </motion.h2>

        <div className="anime-grid max-w-6xl mx-auto mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="anime-card dark:anime-card-dark p-6 text-center"
              >
                <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-2xl inline-block mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 anime-text-gradient">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                  ></motion.div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </motion.div>
            );
          })}
        </div>

        {/* AI/ML Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 anime-text-gradient">AI/ML Learning Journey</h3>
          <div className="anime-grid max-w-4xl mx-auto">
            {[
              { name: "Neural Networks", level: "Advanced", color: "from-pink-500 to-purple-500" },
              { name: "Computer Vision", level: "Intermediate", color: "from-purple-500 to-blue-500" },
              { name: "Natural Language Processing", level: "Learning", color: "from-blue-500 to-cyan-500" },
              { name: "Reinforcement Learning", level: "Exploring", color: "from-green-500 to-pink-500" },
              { name: "MLOps", level: "Learning", color: "from-cyan-500 to-purple-500" },
              { name: "Big Data Analytics", level: "Intermediate", color: "from-pink-500 to-blue-500" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="anime-card dark:anime-card-dark p-6 text-center"
              >
                <h4 className="font-semibold text-lg mb-2 anime-text-gradient">{tech.name}</h4>
                <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${tech.color} text-white`}>
                  {tech.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}