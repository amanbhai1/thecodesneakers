import { motion } from 'framer-motion';
import { GitBranch, ExternalLink } from 'lucide-react';
import image1 from './projects/p1.jpg';
import p2 from './projects/p2.jpg';
import { Clock, Users, Globe, Code2, ChevronDown } from 'lucide-react';
import { useSelector } from 'react-redux';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: "Grow Together",
    image: image1,
    description: "Collaborative learning platform with study groups, real-time chat, and video sessions. Hackvision 2024 project.",
    techStack: ["MERN Stack", "Socket.io", "Framer Motion"],
    team: ["Aman Gupta", "Vikash Shakya", "Krish Bhardwaj", "Tanishka Varshney"],
    demo: "https://grow-together-frontend.vercel.app/"
  },
  {
    name: "LOST AND FOUND Cell",
    image: p2,
    description: "University lost item management system with admin verification and donation features.",
    techStack: ["React", "Node.js", "MongoDB"],
    team: ["Aman Gupta"],
    demo: "https://glaulostandfound.vercel.app/home"
  }
];

const ProjectCard = ({ project, index }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl border ${darkMode ? 'border-gray-800 bg-dark-secondary/50' : 'border-gray-300 bg-white'} backdrop-blur-lg hover:border-primary/40 transition-all`}
    >
      <div className="h-64 bg-dark-secondary">
        <img 
          src={project.image} 
          alt={project.name}
          className={`w-full h-full object-cover transition-all ${darkMode ? 'grayscale group-hover:grayscale-0' : ''}`}
        />
      </div>
      
      <div className={`p-6 ${darkMode ? 'bg-gradient-to-b from-black/80 to-black/95' : 'bg-gradient-to-b from-white/80 to-white/95'}`}>
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-400 italic mb-6">
          Team: {project.team.join(', ')}
        </p>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-white transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className={`flex items-center border p-2 rounded-lg gap-2 transition-colors ${darkMode ? 'hover:text-white text-primary' : 'text-black hover:text-primary border-primary hover:border-black'}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Add new sections
const services = [
  { icon: <Code2 />, title: "Custom Development", desc: "Tailored software solutions for unique business needs" },
  { icon: <Globe />, title: "Cloud Solutions", desc: "Scalable cloud infrastructure & migration services" },
  { icon: <Users />, title: "Team Augmentation", desc: "Expert developer teams for project scaling" },
  { icon: <Clock />, title: "24/7 Support", desc: "Round-the-clock technical support & maintenance" }
];

const Projects = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0f0f0f] text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/Assets/tech-bg.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-green-400 bg-clip-text text-transparent">
              Innovation Delivered
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-3xl text-gray-500 mb-8 max-w-3xl mx-auto"
          >
            Transforming ideas into scalable digital solutions
          </motion.p>
          
          <div className="animate-bounce mt-20" aria-hidden="true">
            <ChevronDown className="h-12 w-12 text-primary mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className={`py-20 ${darkMode ? 'bg-gradient-to-b from-black to-dark-secondary' : 'bg-gradient-to-b from-white to-gray-200'}`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className={`bg-gradient-to-r  from-primary to-green-400 bg-clip-text text-transparent`}>
              Our Core Services
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className={`p-8 ${darkMode ? 'bg-dark-secondary/50' : 'bg-white'} backdrop-blur-lg rounded-2xl border border-gray-800 hover:border-primary/40 transition-all`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Project Grid */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-dark-secondary' : 'bg-white'}`}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className={`bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent`}>
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${darkMode ? 'bg-gradient-to-br from-black to-primary/10' : 'bg-gradient-to-br from-white to-gray-200'}`}>
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <div className={`p-6 ${darkMode ? 'bg-dark-secondary/50' : 'bg-white'} backdrop-blur-lg rounded-2xl`}>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-dark-secondary/50' : 'bg-white'} backdrop-blur-lg rounded-2xl`}>
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-dark-secondary/50' : 'bg-white'} backdrop-blur-lg rounded-2xl`}>
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-gray-400">Active Clients</div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-dark-secondary/50' : 'bg-white'} backdrop-blur-lg rounded-2xl`}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400">Support Hours</div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className={`relative py-32 overflow-hidden ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="absolute inset-0 bg-[url('/Assets/circuit.svg')] opacity-20" />
        <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="space-y-6">
              <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                <span className={`bg-gradient-to-r ${darkMode ? 'from-primary via-cyan-400 to-emerald-400' : 'from-primary via-cyan-400 to-emerald-400'} bg-clip-text text-transparent`}>
                  Ready to Disrupt
                </span>
                <br />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600' }`}>Your Industry?</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Partner with us to create technology that redefines possibilities
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8">
              <motion.div 
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-all" />
                <a 
                  href="mailto:thecodesneakers@gmail.com"
                  className={`relative px-8 py-4 ${darkMode ? 'bg-[#151515]' : 'bg-white'} border border-gray-800 rounded-xl flex items-center gap-3 hover:border-cyan-400 transition-all`}
                >
                  <span className="text-cyan-400">✉️</span>
                  <span className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>thecodesneakers@gmail.com</span>
                </a>
              </motion.div>

              <motion.div 
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-all" />
                <a 
                  href="tel:+917451936566"
                  className={`relative px-8 py-4 ${darkMode ? 'bg-[#151515]' : 'bg-white'} border border-gray-800 rounded-xl flex items-center gap-3 hover:border-emerald-400 transition-all`}
                >
                  <span className="text-emerald-400">📱</span>
                  <span className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>+91-7451936566</span>
                </a>
              </motion.div>
            </div>

            <div className="flex justify-center gap-8 mt-12">
              {[
                { icon: <FaLinkedin />, color: 'from-blue-400 to-cyan-400', link: 'http://linkedin.com/company/the-code-sneaker-s' },
                { icon: <FaGithub />, color: 'from-gray-300 to-gray-400', link: '#' },
                { icon: <FaInstagram />, color: 'from-pink-400 to-purple-400', link: 'https://instagram.com/thecodesneakers/' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  className={`bg-gradient-to-r ${social.color} rounded-full p-3 hover:shadow-2xl transition-all`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-16"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/contact"
                className={`inline-block px-16 py-6 bg-gradient-to-r from-primary to-cyan-400 text-dark-primary rounded-2xl 
                hover:shadow-2xl transition-all text-xl font-bold relative overflow-hidden group`}
              >
                <span className="relative z-10">Accelerate Innovation →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
