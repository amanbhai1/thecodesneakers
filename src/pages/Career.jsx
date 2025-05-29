import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCloud, FaPalette, FaBrain, FaCode } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Career = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0f0f0f] text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <section className={`relative h-[60vh] flex items-center bg-gradient-to-br ${darkMode ? 'from-black via-[#0f0f0f] to-primary/20' : 'from-white via-transparent'} overflow-hidden`}>
        <div className="max-w-screen-2xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Launch Your Tech Career
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Join our mission to deliver transformative technology solutions
          </motion.p>
        </div>
      </section>

      {/* Why Intern Section */}
      <section className={`relative py-16 md:py-24 ${darkMode ? 'bg-dark-secondary/95' : 'bg-white'}`}>
        <div className="max-w-screen-2xl mx-auto px-4">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r ${darkMode ? 'from-gray-200 to-gray-400' : 'from-primary via-cyan-400 to-emerald-400'} bg-clip-text text-transparent`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Why Intern With Us?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaCode />, title: 'Real Projects', desc: 'Work on impactful client solutions' },
              { icon: <FaBrain />, title: 'Mentorship', desc: 'Learn from industry experts' },
              { icon: <FaGithub />, title: 'Skill Growth', desc: 'Master modern tech stack' },
              { icon: <FaLinkedin />, title: 'Networking', desc: 'Connect with professionals' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`p-6 ${darkMode ? 'bg-gradient-to-b from-[#151515] to-[#0f0f0f]' : 'bg-white'} rounded-2xl border border-gray-800/50`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-4xl mb-4 text-primary">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-600">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className={`py-16 md:py-24 ${darkMode ? 'bg-gradient-to-b from-black to-[#111111]' : 'bg-gradient-to-b from-white to-gray-200'}`}>
        <div className="max-w-screen-2xl mx-auto px-4">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r ${darkMode ? 'from-primary to-cyan-400' : 'from-gray-800 to-gray-400'} bg-clip-text text-transparent`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Internship Roles
          </motion.h2>
          
          <div className="space-y-8">
            {[
              { 
                title: 'Full-Stack Development', 
                icon: <FaCode />,
                desc: 'Build dynamic web applications with modern frameworks',
                tech: ['React', 'Node.js', 'GraphQL']
              },
              {
                title: 'AI/ML Engineering',
                icon: <FaBrain />,
                desc: 'Develop smart automation systems',
                tech: ['Python', 'TensorFlow', 'PyTorch']
              },
              {
                title: 'UI/UX Design',
                icon: <FaPalette />,
                desc: 'Create user-centered interfaces',
                tech: ['Figma', 'Adobe XD', 'Prototyping']
              },
              {
                title: 'Cloud DevOps',
                icon: <FaCloud />,
                desc: 'Deploy scalable infrastructure',
                tech: ['AWS', 'Docker', 'Kubernetes']
              }
            ].map((role, index) => (
              <motion.div 
                key={index}
                className={`group p-8 ${darkMode ? 'bg-dark-secondary/80' : 'bg-white'} rounded-3xl border border-gray-800 hover:border-primary/40 transition-all`}
                initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl text-primary">{role.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-500 mb-2">{role.title}</h3>
                    <p className="text-gray-400 mb-4">{role.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className={`relative py-16 md:py-24 ${darkMode ? 'bg-gradient-to-br from-dark-secondary to-black' : 'bg-white'}`}>
        <div className="max-w-screen-2xl mx-auto px-4 text-center">
          <motion.div 
            className="inline-block bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-2xl p-1 rounded-3xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className={`bg-dark-secondary/95 ${darkMode ? 'bg-dark-secondary/95' : 'bg-white'} p-8 md:p-12 rounded-3xl`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Send your resume and portfolio to careers@thecodesneaker.com
              </p>
              <motion.a
                href="mailto:careers@thecodesneaker.com"
                className={`inline-flex items-center gap-2 px-8 py-4 ${darkMode ? 'bg-primary text-dark-primary' : 'bg-gray-800 text-white'} rounded-2xl hover:bg-primary/90 transition-all text-lg font-bold`}
                whileHover={{ scale: 1.05 }}
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
