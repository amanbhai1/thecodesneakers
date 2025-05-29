import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Code2, LayoutPanelLeft, Smartphone, Brush, ShoppingCart, Rocket, Mail } from 'lucide-react';
import { useSelector } from 'react-redux';

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const team = [
    {
      img: '/Assets/aman.jpg',
      name: 'Aman Gupta',
      role: 'Founder & CEO',
      bio: 'MERN Stack expert driving innovation in every build'
    },
    {
      img: '/Assets/vikash.jpg',
      name: 'Vikash Shakya',
      role: 'Founder & CEO',
      bio: 'Crafting visually stunning interfaces'
    },
    {
      img: '/Assets/team3.jpg',
      name: 'Krish Bhardwaj',
      role: 'Founder & CEO',
      bio: 'Transforming complexity into elegant experiences'
    },
    {
      img: '/Assets/team4.jpg',
      name: 'Tanishka Varshney',
      role: 'Co-Founder & COO',
      bio: 'Ensuring flawless execution & delivery'
    }
  ];

  const services = [
    { icon: <Code2 />, title: "Full-Stack Development", desc: "Robust web applications with modern tech stack" },
    { icon: <LayoutPanelLeft />, title: "UI/UX Design", desc: "User-centered interfaces that drive engagement" },
    { icon: <Smartphone />, title: "Mobile Apps", desc: "Cross-platform solutions for iOS & Android" },
    { icon: <ShoppingCart />, title: "E-Commerce", desc: "Secure online stores with payment integration" },
    { icon: <Brush />, title: "Brand Design", desc: "Visual identity that stands out in market" },
    { icon: <Rocket />, title: "Digital Growth", desc: "SEO & marketing strategies that convert" }
  ];

  return (
    // Update background colors and gradients to match Projects.jsx
    <div className={`min-h-screen ${darkMode ? 'bg-[#0f0f0f] text-gray-100' : 'bg-white text-gray-900'}`}>

      {/* Hero Section - Add video background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Assets/noise.png')] opacity-20" />
        <div className={`absolute inset-0 ${darkMode ? "bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_70%)]" : "bg-[radial-gradient(circle_at_center,#3b82f610_0%,transparent_70%)]"} animate-pulse`} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-screen-2xl mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-6xl md:text-9xl font-bold font-clashdisplay mb-6">
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Building Digital
            </span>
            <br />
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-gray-200 to-gray-400' : 'from-gray-400 to-gray-700' }`}>
              Foundations
            </span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Pioneering technology solutions since 2025, transforming ideas into market-leading digital products
          </motion.p>
          <div className="animate-bounce mt-20" aria-hidden="true">
            <ChevronDown className="h-12 w-12 text-primary mx-auto" />
          </div>
        </motion.div>

      </section>


      {/* Mission Section - Update background */}
     <section className={`py-20 ${darkMode ? "bg-gradient-to-b from-black to-dark-secondary" : "bg-gradient-to-b from-gray-100 to-white"}`}>

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-8">🚀 Who We Are</h2>
            <p className={`text-xl  max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Founded by The Code Sneaker's Team, we blend technical excellence with creative problem-solving
              to deliver digital solutions that stand out in today's competitive landscape.
            </p>
          </div>

          {/* Services Grid - Match Projects' card styling */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`p-8 ${darkMode ? "bg-dark-secondary/50 border-gray-800 hover:border-primary/40 text-white" : "bg-white border-gray-200 hover:border-yellow-400 text-gray-800"} rounded-2xl border transition-all`}

              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Fix JSX structure */}
  <section className={`py-20 ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-gray-900"}`}>
      👨‍💻 Founding Team
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {team.map((member, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8, scale: 1.02 }}
          className={`group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 border 
            ${darkMode 
              ? "bg-[#1c1c1c] border-gray-700 hover:border-primary/40" 
              : "bg-white border-gray-200 hover:border-primary/40"}`}
        >
          <div className="overflow-hidden rounded-t-3xl">
            <img
              src={member.img}
              alt={member.name}
              className={`w-full h-72 object-cover transition-all duration-300 
                ${darkMode ? "grayscale group-hover:grayscale-0" : "brightness-95 hover:brightness-100"}`}
            />
          </div>

          <div className={`p-6 ${darkMode ? "bg-gradient-to-t from-black/80 to-transparent" : "bg-white"}`}>
            <h3 className={`text-2xl font-semibold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-2">{member.role}</p>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed`}>
              {member.bio}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section - Fix duplicate content */}
   <section className={`relative py-32 overflow-hidden ${darkMode ? "bg-gradient-to-br from-black to-primary/10" : "bg-gradient-to-br from-yellow-50 to-yellow-100"}`}>

        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-2xl p-1 rounded-3xl"
          >
            <div className={`${darkMode ? "bg-dark-secondary/95" : "bg-white"} p-12 rounded-3xl`}>

              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Ready to Start Your Project?
              </h2>
              <a
                href="mailto:thecodesneakers@gmail.com"
                className="inline-block px-14 py-5 bg-primary text-dark-primary rounded-2xl hover:bg-yellow-300 hover:scale-105 transition-all text-xl font-bold"
              >
                <Mail className="inline-block mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;