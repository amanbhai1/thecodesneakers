import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set initial theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
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
    <header className={`fixed w-full top-0 left-0 z-[999] ${
      isDarkMode 
        ? 'bg-dark/95 backdrop-blur-md dark' 
        : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <NavLink to="/">
          <img 
            src={isDarkMode ? "/Assets/22.png" : "/Assets/22-light.png"} 
            alt="Logo" 
            className="h-12 md:h-14 transition-all duration-300"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-6">
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
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    isDarkMode ? 'bg-primary' : 'bg-primary'
                  } transition-all group-hover:w-full`} />
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FiSun className="w-5 h-5 text-gray-300" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FiSun className="w-5 h-5 text-gray-300" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            ) : (
              <FiMenu className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className={`absolute inset-y-0 right-0 w-full max-w-xs transform transition-transform duration-300 ${
              isDarkMode ? 'bg-dark/95' : 'bg-white/95'
            } backdrop-blur-lg`}>
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <img 
                    src={isDarkMode ? "/Assets/22.png" : "/Assets/22-light.png"} 
                    alt="Logo" 
                    className="h-12 transition-all"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                          `block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                            isDarkMode
                              ? `text-gray-300 hover:text-primary hover:bg-gray-800 ${isActive ? 'text-primary bg-gray-800' : ''}`
                              : `text-gray-600 hover:text-primary hover:bg-gray-100 ${isActive ? 'text-primary bg-gray-100' : ''}`
                          }`
                        }
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;