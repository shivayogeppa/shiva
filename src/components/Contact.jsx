import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="instagram-section relative overflow-hidden">
      {/* Instagram-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50"></div>

      <div className="instagram-container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="instagram-heading text-4xl md:text-5xl lg:text-6xl text-center mb-16 instagram-text-gradient"
        >
          Get In Touch
        </motion.h2>

        <div className="instagram-grid max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="instagram-card dark:instagram-card-dark p-8"
          >
            <h3 className="text-2xl font-bold mb-6 instagram-text-gradient text-center">Let's Connect!</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center">
              I'm always interested in new opportunities, collaborations, and connecting with fellow developers.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                  <a
                    href="mailto:shivuchanagond25@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    shivuchanagond25@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/shivayogeppa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/shivayogeppa
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Bangalore, Karnataka, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="instagram-card dark:instagram-card-dark p-8 text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-2xl inline-block mb-6">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 instagram-text-gradient">Ready to Collaborate?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Whether you have a project in mind, want to discuss AI/ML opportunities,
              or just want to connect, I'd love to hear from you!
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:shivuchanagond25@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="instagram-button block bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Email
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/shivayogeppa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="instagram-button block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Thanks for visiting my portfolio! Let's build something amazing together. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}