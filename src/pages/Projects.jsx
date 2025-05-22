import { motion } from 'framer-motion';
import { GitBranch, ExternalLink } from 'lucide-react';
import image1 from './projects/p1.jpg'
import p2 from './projects/p2.jpg'
import { Clock, Users, Globe, Code2, ChevronDown } from 'lucide-react';

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

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-dark-secondary/50 backdrop-blur-lg hover:border-primary/40 transition-all"
  >
    <div className="h-64 bg-dark-secondary">
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
    
    <div className="p-6 bg-gradient-to-b from-black/80 to-black/95">
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
            className="flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// Add new sections
const services = [
  { icon: <Code2 />, title: "Custom Development", desc: "Tailored software solutions for unique business needs" },
  { icon: <Globe />, title: "Cloud Solutions", desc: "Scalable cloud infrastructure & migration services" },
  { icon: <Users />, title: "Team Augmentation", desc: "Expert developer teams for project scaling" },
  { icon: <Clock />, title: "24/7 Support", desc: "Round-the-clock technical support & maintenance" }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
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
            className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transforming ideas into scalable digital solutions
          </motion.p>
          
          <div className="animate-bounce mt-20" aria-hidden="true">
            <ChevronDown className="h-12 w-12 text-primary mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-gradient-to-b from-black to-dark-secondary">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Our Core Services
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-dark-secondary/50 backdrop-blur-lg rounded-2xl border border-gray-800 hover:border-primary/40 transition-all"
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
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
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
      <section className="py-20 bg-gradient-to-br from-black to-primary/10">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-dark-secondary/50 backdrop-blur-lg rounded-2xl">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="p-6 bg-dark-secondary/50 backdrop-blur-lg rounded-2xl">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-dark-secondary/50 backdrop-blur-lg rounded-2xl">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-gray-400">Active Clients</div>
          </div>
          <div className="p-6 bg-dark-secondary/50 backdrop-blur-lg rounded-2xl">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400">Support Hours</div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-2xl p-1 rounded-3xl"
          >
            <div className="bg-dark-secondary/95 p-12 rounded-3xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create innovative solutions that drive your business forward
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="inline-block px-12 py-4 bg-gradient-to-r from-primary to-green-400 text-black font-bold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all"
                href="/contact"
              >
                Start Your Project Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;