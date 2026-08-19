import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
      institution: "Bangalore Institute of Technology",
      year: "2027",
      description: "I enjoy learning new technologies, building creative projects, and continuously improving my problem-solving and analytical skills. I am motivated to grow as a professional and contribute effectively to innovative and impactful teams.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "PUC",
      institution: "Expert Pre University College",
      year: "2023",
      description: "Completed pre-university education with focus on science and mathematics.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {education.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.3 }}
                className="relative"
              >
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-purple-400 opacity-50"></div>
                )}

                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl shadow-lg flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{item.year}</span>
                        </div>
                      </div>

                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{item.institution}</p>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
