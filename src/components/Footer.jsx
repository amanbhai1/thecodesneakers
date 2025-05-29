import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
      <footer
        className={`pt-16 pb-10 font-sans border-t transition-all duration-500 ${darkMode
            ? "bg-gradient-to-b from-black via-[#0a0a0a] to-[#0f0f0f] text-gray-300 border-[#1f1f1f]"
            : "bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-800 border-gray-300"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-14">
            {/* Company Info */}
            <div className="space-y-6">
              <img
                src="/Assets/Logo.png"
                alt="The Code Sneaker’s"
                className={`h-28 w-28 hover:scale-105 transition-transform duration-300 ${darkMode ? 
                  '' : 'invert'
                }`}
              />
              <nav className="grid gap-2 text-sm">
                {["/", "/about", "/services", "/project", "/contact"].map(
                  (path, i) => (
                    <Link
                      key={i}
                      to={path}
                      className={`hover:underline underline-offset-4 transition-all duration-200 ${darkMode
                          ? "hover:text-lime-400"
                          : "hover:text-blue-600"
                        }`}
                    >
                      {["Home", "About", "Services", "Projects", "Contact"][i]}
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4
                className={`text-xl font-semibold tracking-wide ${darkMode ? "text-cyan-300" : "text-blue-600"
                  }`}
              >
                Resources
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  ["/career", "Career"],
                  ["/blog", "Blog"],
                  ["/faq", "FAQs"],
                  ["/terms", "Terms & Conditions"],
                  ["/privacy", "Privacy Policy"],
                ].map(([link, label], i) => (
                  <Link
                    key={i}
                    to={link}
                    className={`block hover:underline underline-offset-4 transition-all duration-200 ${darkMode ? "hover:text-lime-400" : "hover:text-blue-600"
                      }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4
                className={`text-xl font-semibold tracking-wide ${darkMode ? "text-cyan-300" : "text-blue-600"
                  }`}
              >
                Contact
              </h4>
              <div
                className={`space-y-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
              >
                <p>
                  <b>Address:</b> Mathura, Uttar Pradesh, 281004
                </p>
                <p>
                  <b>Phone:</b> +91 7451936566
                </p>
                <p>
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:thecodesneakers@gmail.com"
                    className={`hover:underline ${darkMode ? "text-lime-400" : "text-blue-600"
                      }`}
                  >
                    thecodesneakers@gmail.com
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h4
                  className={`text-lg font-semibold mb-3 ${darkMode ? "text-cyan-300" : "text-blue-600"
                    }`}
                >
                  Follow Us
                </h4>
                <div className="flex items-center space-x-4">
                  {[
                    ["https://facebook.com", FiFacebook],
                    ["https://twitter.com", FiTwitter],
                    ["https://instagram.com/thecodesneakers/", FiInstagram],
                    ["https://linkedin.com/company/the-code-sneaker-s", FiLinkedin],
                    ["https://youtube.com", FiYoutube],
                  ].map(([href, Icon], i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-all duration-300 shadow-md ${darkMode
                          ? "bg-[#111] hover:bg-[#1a1a1a] hover:text-lime-400 shadow-[0_0_10px_rgba(0,255,150,0.2)]"
                          : "bg-gray-200 hover:bg-white hover:text-blue-600 shadow"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glowing Border */}
          <div
            className={`border-t pt-6 text-center text-sm transition-all duration-300 ${darkMode
                ? "border-[#1f1f1f] text-gray-500"
                : "border-gray-300 text-gray-600"
              }`}
          >
            <p>
              © {new Date().getFullYear()}{" "}
              <span className={darkMode ? "text-lime-400" : "text-blue-600"}>
                The Code Sneaker’s
              </span>
              . All rights reserved.
            </p>
            <p className="mt-1">
              Crafted with{" "}
              <span className={darkMode ? "text-pink-500" : "text-red-500"}>
                ❤️
              </span>{" "}
              by The Code Sneaker's Team
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
