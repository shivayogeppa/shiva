import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../themecontext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/60 border-b border-white/20 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="font-bold text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => scrollToSection('home')}
        >
          Shivayogeppa
        </h1>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'resume', label: 'Resume' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
