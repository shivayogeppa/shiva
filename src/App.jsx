import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { ThemeProvider } from "./themecontext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 anime-bg text-gray-900 dark:text-gray-100 relative overflow-hidden">
        {/* Anime floating elements - Sakura petals */}
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>

        {/* Magical sparkles */}
        <div className="fixed top-20 left-10 w-2 h-2 magical-sparkle"></div>
        <div className="fixed bottom-32 right-16 w-3 h-3 magical-sparkle animation-delay-2000"></div>
        <div className="fixed top-1/2 right-8 w-2 h-2 magical-sparkle animation-delay-4000"></div>
        <div className="fixed top-1/3 left-1/4 w-3 h-3 magical-sparkle animation-delay-1000"></div>
        <div className="fixed bottom-1/3 right-1/4 w-2 h-2 magical-sparkle animation-delay-3000"></div>

        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
