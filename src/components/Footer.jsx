import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-[#0a0a0a] to-[#0f0f0f] text-gray-300 pt-16 pb-10 font-sans border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/Assets/Logo.png" 
              alt="The Code Sneaker’s" 
              className="h-28 w-28 hover:scale-105 transition-transform duration-300"
            />
            <nav className="grid gap-2 text-sm">
              {["/", "/about", "/services", "/project", "/contact"].map((path, i) => (
                <Link
                  key={i}
                  to={path}
                  className="hover:text-lime-400 hover:underline underline-offset-4 transition-all duration-200"
                >
                  {["Home", "About", "Services", "Projects", "Contact"][i]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-cyan-300 tracking-wide">Resources</h4>
            <div className="space-y-2 text-sm">
              {[
                ["/career", "Career"],
                ["/blog", "Blog"],
                ["/faq", "FAQs"],
                ["/terms", "Terms & Conditions"],
                ["/privacy", "Privacy Policy"]
              ].map(([link, label], i) => (
                <Link 
                  key={i}
                  to={link}
                  className="block hover:text-lime-400 hover:underline underline-offset-4 transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-cyan-300 tracking-wide">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p><b>Address:</b> Mathura, Uttar Pradesh, 281004</p>
              <p><b>Phone:</b> +91 7451936566</p>
              <p><b>Email:</b> <a href="mailto:thecodesneakers@gmail.com" className="text-lime-400 hover:underline">thecodesneakers@gmail.com</a></p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">Follow Us</h4>
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
                    className="p-2 rounded-full bg-[#111] hover:bg-[#1a1a1a] hover:text-lime-400 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,150,0.2)]"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Glowing Border */}
        <div className="border-t border-[#1f1f1f] pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} <span className="text-lime-400">The Code Sneaker’s</span>. All rights reserved.</p>
          <p className="mt-1">Crafted with <span className="text-pink-500">❤️</span> by The Code Sneaker's Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  