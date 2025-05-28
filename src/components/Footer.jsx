import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-0">
            <img 
              src="/Assets/Logo.png" 
              alt="The Code Sneaker’s" 
              className="h-32 w-32"
            />
            <nav className="grid grid-cols-1 gap-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/project" className="hover:text-primary transition-colors">Projects</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <div className="space-y-2">
              <Link to="/career" className="block hover:text-primary transition-colors">Career</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
              <Link to="/faq" className="block hover:text-primary transition-colors">FAQs</Link>
              <Link to="/terms" className="block hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="block hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p><b>Address:</b> Mathura, Uttar Pradesh, 281004</p>
              <p><b>Phone:</b> +91 7451936566</p>
              <p><b>Email:</b> thecodesneakers@gmail.com</p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="p-2 hover:text-primary transition-colors">
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" className="p-2 hover:text-primary transition-colors">
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/thecodesneakers/" className="p-2 hover:text-primary transition-colors">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/company/the-code-sneaker-s" className="p-2 hover:text-primary transition-colors">
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a href="https://youtube.com" className="p-2 hover:text-primary transition-colors">
                  <FiYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} The Code Sneaker’s. All rights reserved.</p>
          <p className="mt-1">Crafted with ❤️ by The Code Sneaker's Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;