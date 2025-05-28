import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/services", text: "Services" },
    { path: "/project", text: "Projects" },
    { path: "/testimonials", text: "Testimonials" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-dark/90' 
        : 'bg-white/90 border-b border-gray-100'
    } ${isScrolled ? 'backdrop-blur-md shadow-lg' : ''}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="z-50">
            <motion.img 
              src={isDarkMode ? "/Assets/22.png" : "/Assets/22-light.png"} 
              alt="Logo"
              className="h-10 md:h-12 transition-all hover:opacity-80"
              whileHover={{ scale: 1.05 }}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex space-x-6 lg:space-x-8">
              {navLinks.map((item) => (
                <li key={item.path} className="group relative">
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `text-sm font-medium transition-colors ${
                        isDarkMode 
                          ? `text-gray-300 hover:text-primary ${isActive ? 'text-primary' : ''}`
                          : `text-gray-600 hover:text-primary ${isActive ? 'text-primary' : ''}`
                      }`
                    }
                  >
                    {item.text}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                      isDarkMode ? 'bg-primary' : 'bg-primary'
                    } transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                      // Removed undefined isActive reference
                      ({ isActive }) => isActive ? 'scale-x-100' : ''
                    }`} />
                  </NavLink>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5 text-gray-300" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5 text-gray-300" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              ) : (
                <FiMenu className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40"
            >
              <div 
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
                className={`absolute inset-y-0 right-0 w-80 max-w-full ${
                  isDarkMode ? 'bg-dark/95' : 'bg-white/95'
                } backdrop-blur-lg`}
              >
                <div className="flex flex-col h-full p-6">
                  <div className="flex justify-between items-center mb-8">
                    <img 
                      src={isDarkMode ? "/Assets/22.png" : "/Assets/22-light.png"} 
                      alt="Logo" 
                      className="h-10 transition-all"
                    />
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <FiX className={`w-8 h-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                    </button>
                  </div>

                  <ul className="space-y-4 flex-1">
                    {navLinks.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) => 
                            `block py-3 px-4 text-lg font-medium rounded-lg transition-all ${
                              isDarkMode
                                ? `text-gray-300 hover:text-primary hover:bg-gray-800/50 ${
                                    isActive ? 'text-primary bg-gray-800/50' : ''
                                  }`
                                : `text-gray-600 hover:text-primary hover:bg-gray-100 ${
                                    isActive ? 'text-primary bg-gray-100' : ''
                                  }`
                            }`
                          }
                        >
                          {item.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-200/10">
                    <p className="text-sm text-gray-400">
                      © {new Date().getFullYear()} The Code Sneakers
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;