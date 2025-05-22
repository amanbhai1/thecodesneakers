import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode,
  FaRobot,
  FaCloud,
  FaPalette,
  FaMobileAlt,
  FaChartLine,
  FaShieldAlt,
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaLinkedin,
  FaGithub,
  FaRegHandshake,
  FaInstagram,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';

const Services = () => {
   const values = [
    {
      icon: <FaRegHandshake className="text-4xl" />,
      title: "Client-Centric Approach",
      desc: "Your success is our ultimate metric"
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: "Rapid Implementation",
      desc: "Agile development for fast time-to-market"
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovation Focused",
      desc: "Pushing technological boundaries daily"
    }
  ];
  const services = [
    { 
      icon: <FaCode />,
      title: 'Full-Stack Development',
      desc: 'Responsive, secure web applications with modern tech stacks',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      useCase: 'Enterprise web portals, SaaS platforms'
    },
    {
      icon: <FaRobot />,
      title: 'AI/ML Solutions',
      desc: 'Custom machine learning models for business automation',
      tech: ['Python', 'TensorFlow', 'Chatbots', 'Predictive Analytics'],
      useCase: 'Recommendation engines, process automation'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud DevOps',
      desc: 'Scalable cloud solutions with CI/CD pipelines',
      tech: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
      useCase: 'Cloud migration, infrastructure optimization'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      desc: 'User-centered interface design and prototyping',
      tech: ['Figma', 'Adobe XD', 'User Testing', 'Wireframing'],
      useCase: 'Web & mobile app interfaces'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Apps',
      desc: 'Cross-platform native development',
      tech: ['React Native', 'Flutter', 'Kotlin', 'Swift'],
      useCase: 'iOS/Android consumer apps'
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      desc: 'Data-driven SEO and performance marketing',
      tech: ['Google Ads', 'SEO Audit', 'Social Media', 'Analytics'],
      useCase: 'Brand visibility & conversion optimization'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      desc: 'Enterprise-grade protection systems',
      tech: ['Pen Testing', 'Encryption', 'Auth Systems', 'Monitoring'],
      useCase: 'Data protection & threat prevention'
    },
    {
      icon: <FaDatabase />,
      title: 'Data Analytics',
      desc: 'Actionable business intelligence solutions',
      tech: ['Power BI', 'Python', 'SQL', 'Dashboarding'],
      useCase: 'Data visualization & insights'
    },
    {
      icon: <FaTools />,
      title: 'API Development',
      desc: 'Seamless system integrations',
      tech: ['REST APIs', 'Webhooks', 'WebSockets', 'Postman'],
      useCase: 'Third-party service integration'
    },
    {
      icon: <FaGraduationCap />,
      title: 'IT Training',
      desc: 'Hands-on tech education programs',
      tech: ['Web Dev', 'Cloud', 'Git', 'Workshops'],
      useCase: 'Team upskilling & student training'
    },
    {
      icon: <FaBriefcase />,
      title: 'Career Platform',
      desc: 'Tech talent-job matching (Coming Soon)',
      tech: ['Job Listings', 'Resume Reviews', 'Mock Interviews'],
      useCase: 'Career development & hiring'
    },
    {
      icon: <FaTools />,
      title: 'IT Support',
      desc: '24/7 maintenance & monitoring',
      tech: ['Bug Fixing', 'Updates', 'SLAs', 'Backups'],
      useCase: 'System reliability & performance'
    }
  ];

  return (
    
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100"> {/* Changed from bg-dark-primary */}
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f0f] to-primary/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/Assets/noise.png')]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#3b82f610_50%,transparent_52%)] opacity-20 animate-shimmer" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-screen-2xl mx-auto px-4 text-center relative z-10"
        >
          <div className="space-y-8">
            <h1 className="text-6xl md:text-9xl font-bold font-clashdisplay bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-[0.85]">
              <span className="inline-block">Next-Gen</span><br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Tech Solutions
              </motion.span>
            </h1>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all" />
              <Link
                to="/contact"
                className="relative z-10 inline-block px-12 py-6 bg-gradient-to-br from-primary to-cyan-400 text-dark-primary rounded-2xl hover:shadow-2xl text-lg font-bold"
              >
                <span className="flex items-center gap-3">
                  Start Innovation Journey 
                  <FaRocket className="animate-bounce" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-3xl border border-gray-800/50 hover:border-cyan-400/30 transition-all"
            >
              <div className="mb-6 text-primary">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-screen-2xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Technology Stack
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="group relative p-8 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-3xl border border-gray-800/50 hover:border-cyan-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-[radial-gradient(300px_circle_at_var(--x)_var(--y),#3b82f610,transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
                    whileHover={{ rotate: 15 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tech.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="px-3 py-1.5 bg-[#1a1a1a] border border-gray-800 rounded-full text-sm text-gray-300 hover:text-white cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-800/50 pt-6">
                    <p className="text-sm text-gray-500">
                      <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent font-medium">
                        Typical Application:
                      </span> {service.useCase}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-screen-2xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {['React', 'Node.js', 'AWS', 'Python', 'TensorFlow', 'Docker', 'Kubernetes', 'AI/ML'].map((tech, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-2xl border border-gray-800/50 text-center hover:border-cyan-400/30 transition-all"
              >
                <div className="text-3xl mb-4 text-primary">{"</>"}</div>
                <div className="text-xl font-medium">{tech}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/Assets/circuit.svg')] opacity-20" />
        <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Ready to Disrupt
                </span>
                <br />
                <span className="text-gray-300">Your Industry?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                  className="relative px-8 py-4 bg-[#151515] border border-gray-800 rounded-xl flex items-center gap-3 hover:border-cyan-400 transition-all"
                >
                  <span className="text-cyan-400">✉️</span>
                  <span className="text-gray-200">thecodesneakers@gmail.com</span>
                </a>
              </motion.div>

              <motion.div 
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-all" />
                <a 
                  href="tel:+917451936566"
                  className="relative px-8 py-4 bg-[#151515] border border-gray-800 rounded-xl flex items-center gap-3 hover:border-emerald-400 transition-all"
                >
                  <span className="text-emerald-400">📱</span>
                  <span className="text-gray-200">+91-7451936566</span>
                </a>
              </motion.div>
            </div>

            <div className="flex justify-center gap-8 mt-12">
              {[
                { icon: <FaLinkedin />, color: 'from-blue-400 to-cyan-400', link: '#' },
                { icon: <FaGithub />, color: 'from-gray-300 to-gray-400', link: '#' },
                { icon: <FaInstagram />, color: 'from-pink-400 to-purple-400', link: '#' }
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
                className="inline-block px-16 py-6 bg-gradient-to-r from-primary to-cyan-400 text-dark-primary rounded-2xl 
                hover:shadow-2xl transition-all text-xl font-bold relative overflow-hidden group"
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

export default Services;