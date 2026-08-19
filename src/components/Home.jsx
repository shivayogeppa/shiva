import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="anime-section relative overflow-hidden">
      {/* Anime-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Magical pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-pink-300 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-purple-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
        </div>
      </div>

      <div className="anime-container text-center relative z-10">
        {/* Anime-style profile section */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="anime-heading text-4xl md:text-6xl lg:text-7xl mb-6 anime-text-gradient"
          >
            Shivayogeppa S. Chanagond
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="anime-subheading text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            AI/ML Engineer • Data Scientist • Neural Network Architect
          </motion.p>

          <div className="anime-avatar-ring inline-block mb-8">
            <img
              src="/Photo.jpeg"
              alt="Shivayogeppa S Chanagond"
              className="anime-avatar w-20 h-20 object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNODAgMTIwSDEyMFYxNDBIMTQwVjE2MEgxNjBWMjAwSDE2MFYyMDBIMDBMMCAyMDBIMDBMMCAyMDBIMDBMMCAxNjBIMDBMMCAxNDBIMDBMMCAxMjBIMDBMMCA4MEg4MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNODAgMTIwSDEyMFYxNDBIMTQwVjE2MEgxNjBWMjAwSDE2MFYyMDBIMDBMMCAyMDBIMDBMMCAyMDBIMDBMMCAxNjBIMDBMMCAxNDBIMDBMMCAxMjBIMDBMMCA4MEg4MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                e.target.alt = 'Profile picture not found';
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 items-center"
          >
            <a href="#about" className="anime-button anime-scale-in">
              <span className="flex items-center gap-2">
                Explore My Work
                <ChevronDown size={20} />
              </span>
            </a>

            <button className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl anime-scale-in animation-delay-2000">
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* Anime-style stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold anime-text-gradient">8+</div>
            <div className="text-sm text-gray-600 mt-1">Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold anime-text-gradient">5+</div>
            <div className="text-sm text-gray-600 mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold anime-text-gradient">2+</div>
            <div className="text-sm text-gray-600 mt-1">Years</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={24} className="animate-bounce text-white" />
      </motion.div>
    </section>
  );
}
