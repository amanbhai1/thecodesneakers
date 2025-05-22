import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Code2, LayoutPanelLeft, Smartphone, Brush, ShoppingCart, Rocket, Mail } from 'lucide-react';

const About = () => {
  const team = [
    { 
      img: '/Assets/aman.jpg', 
      name: 'Aman Gupta', 
      role: 'Founder & Lead Developer',
      bio: 'MERN Stack expert driving innovation in every build'
    },
    { 
      img: '/Assets/vikash.jpg', 
      name: 'Vikash Shakya', 
      role: 'Co-Founder & Frontend Expert',
      bio: 'Crafting visually stunning interfaces'
    },
    { 
      img: '/Assets/team3.jpg', 
      name: 'Krish Bhardwaj', 
      role: 'Co-Founder & UI/UX Designer',
      bio: 'Transforming complexity into elegant experiences'
    },
    { 
      img: '/Assets/team4.jpg', 
      name: 'Tanishka', 
      role: 'Co-Founder & Project Manager',
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
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
      {/* Hero Section - Add video background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Assets/noise.png')] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_70%)] animate-pulse" />
        
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
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
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
      <section className="py-20 bg-gradient-to-b from-black to-dark-secondary backdrop-blur-lg">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-8">🚀 Who We Are</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded by Aman Gupta and partners, we blend technical excellence with creative problem-solving 
              to deliver digital solutions that stand out in today's competitive landscape.
            </p>
          </div>
          
          {/* Services Grid - Match Projects' card styling */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-dark-secondary/50 rounded-2xl border border-gray-800 hover:border-primary/40 transition-all"
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
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">👨💻 Founding Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-dark-secondary/50 backdrop-blur-lg border border-gray-800 hover:border-primary/40 transition-all"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fix duplicate content */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-black to-primary/10">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-2xl p-1 rounded-3xl"
          >
            <div className="bg-dark-secondary/95 p-12 rounded-3xl">
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