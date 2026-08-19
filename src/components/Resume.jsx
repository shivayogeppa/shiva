import { motion } from "framer-motion";
import { Download, FileText, Sparkles } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-pink-900/20">
        <div className="absolute top-12 left-12 w-48 h-48 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-12 right-12 w-36 h-36 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-5xl font-bold mb-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent"
        >
          Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20 max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
          </div>

          <div className="relative z-10">
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-6 rounded-2xl shadow-lg inline-block mb-6">
              <FileText size={80} className="text-white" />
            </div>

            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Download My Resume</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Get a detailed overview of my experience, skills, and achievements in AI/ML development.
            </p>

            <motion.a
              href="/resume.pdf"
              download="Shivayogeppa_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
              onClick={(e) => {
                // Check if file exists before allowing download
                fetch('/resume.pdf')
                  .then(response => {
                    if (!response.ok) {
                      e.preventDefault();
                      alert('Resume file not found. Please add your resume.pdf to the public folder.');
                    }
                  })
                  .catch(() => {
                    e.preventDefault();
                    alert('Resume file not found. Please add your resume.pdf to the public folder.');
                  });
              }}
            >
              <Download size={100} />
              Download PDF
              <Sparkles className="w-5 h-5 animate-pulse" />
            </motion.a>
          </div>
        </motion.div>

        {/* Additional call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Interested in my work? Let's connect and build something amazing together!  email:shivuchanagond25@GMAIL.COM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
