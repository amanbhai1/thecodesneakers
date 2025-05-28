import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone,Instagram, Github, Linkedin, Twitter, Code2, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('https://formspree.io/f/mvgaerbz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      setStatus('Thanks for your submission!');
      e.target.reset();
    } else {
      setStatus('Oops! There was a problem submitting your form');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-poppins overflow-hidden">
      {/* Animated Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f0f] to-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Assets/noise.png')] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_70%)] animate-pulse" />
        
        <div className="max-w-screen-2xl mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Transform your ideas into reality with our expert tech solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-screen-2xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-3xl border border-gray-800/50 backdrop-blur-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="block text-gray-300 text-lg">Email</label>
                <input 
                  type="email"
                  name="email"
                  className="w-full bg-[#1a1a1a] border-2 border-gray-800/50 rounded-xl p-5 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="block text-gray-300 text-lg">Message</label>
                <input
                  type="text"
                  name="message"
                  className="w-full bg-[#1a1a1a] border-2 border-gray-800/50 rounded-xl p-5 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 bg-gradient-to-r from-primary to-cyan-400 text-[#151515] rounded-xl font-bold hover:shadow-2xl transition-all text-lg"
              >
                Send Message
              </motion.button>
            </form>
            
            {status && (
              <p className="mt-4 text-center text-primary">
                {status}
              </p>
            )}
          </motion.div>

          {/* Contact Info & Stats */}
          <div className="space-y-12">
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-3xl border border-gray-800/50 backdrop-blur-lg"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Headquarters</h4>
                    <p className="text-gray-400">The Code Sneaker'st</p>
                    <p className="text-gray-400">Mathura, 281004</p>
                    <p className="text-gray-400">Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
                    <p className="text-gray-400">+91 74519 36566</p>
                    
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Digital Inquiries</h4>
                    <p className="text-gray-400">thecodesneakers@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Company Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {[
                { icon: <Code2 />, title: "Projects Completed", value: "150+" },
                { icon: <Clock />, title: "Avg. Delivery Time", value: "4 Weeks" },
                { icon: <Globe />, title: "Global Reach", value: "15+" },
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-2xl border border-gray-800/50">
                  <div className="mb-4 text-primary">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.title}</div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="p-8 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-3xl border border-gray-800/50 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
              <div className="flex gap-6">
                {[
                  { icon: <Github />, color: 'hover:text-gray-300', link: 'https://github.com' },
                  { icon: <Instagram />, color: 'hover:text-gray-300', link: 'https://instagram.com/thecodesneakers/' },
                  { icon: <Linkedin />, color: 'hover:text-blue-400', link: 'http://linkedin.com/company/the-code-sneaker-s/' },
                  { icon: <Twitter />, color: 'hover:text-cyan-400', link: 'https://twitter.com' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className={`text-gray-400 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <div className="relative h-[600px] bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="absolute inset-0 bg-[url('/Assets/grid.svg')] opacity-20" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14113.820000000001!2d77.673676!3d27.492413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973f0b9d6e5b3b7%3A0x3b433f2f5af0c2e2!2sMathura%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1658931871272!5m2!1sen!2sin"
          className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
          style={{ filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          loading="lazy"
        />
        <div className="absolute bottom-8 left-8 right-8 bg-gradient-to-r from-primary/20 to-cyan-400/10 backdrop-blur-lg p-6 rounded-2xl border border-gray-800/50">
          <h3 className="text-xl font-semibold mb-4">Our Headquarters</h3>
          <p className="text-gray-400">Innovation Valley, Tech Street 123</p>
          <p className="text-gray-400">New Delhi, India</p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative py-20 bg-gradient-to-r from-primary/20 to-cyan-400/10">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Ready to Start Your Digital Journey?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-block px-16 py-6 bg-gradient-to-r from-primary to-cyan-400 text-[#151515] rounded-2xl font-bold hover:shadow-2xl text-lg"
              onClick={() => window.open("https://instagram.com/thecodesneakers", "_blank")}
            >
              Schedule Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;