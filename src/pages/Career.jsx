import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCloud, FaPalette, FaBrain, FaCode } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Career = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardData = [
    {
      image: 'https://blog.masterofproject.com/wp-content/uploads/2019/10/project-plan-example-4-750x410.jpg',
      icon: <FaCode />,
      title: 'Real Projects',
      desc: 'Work on impactful client solutions',
    },
    {
      image: 'https://www.knowledgecity.com/blog/wp-content/uploads/2023/01/A-Mentorship-Program-1000x667pix.jpg',
      icon: <FaBrain />,
      title: 'Mentorship',
      desc: 'Learn from industry experts',
    },
    {
      image: 'https://theskillgrowth.com/frontend/images/growth-3.png',
      icon: <FaGithub />,
      title: 'Skill Growth',
      desc: 'Master modern tech stack',
    },
    {
      image: 'https://www.theforage.com/blog/wp-content/uploads/2022/07/Depositphotos_4368723_L.jpg',
      icon: <FaLinkedin />,
      title: 'Networking',
      desc: 'Connect with professionals',
    },
  ];

  const roles = [
    {
      image: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/full-stack-web-developer.png',
      title: 'Full-Stack Development',
      icon: <FaCode />,
      desc: 'Build dynamic web applications with modern frameworks',
      tech: ['React', 'Node.js', 'GraphQL'],
    },
    {
      image: 'https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2022/09/29160306/Number-Theory4.png',
      title: 'AI/ML Engineering',
      icon: <FaBrain />,
      desc: 'Develop smart automation systems',
      tech: ['Python', 'TensorFlow', 'PyTorch'],
    },
    {
      image: 'https://www.extwebtech.com/wp-content/uploads/2023/10/UI-UX-designer.webp',
      title: 'UI/UX Design',
      icon: <FaPalette />,
      desc: 'Create user-centered interfaces',
      tech: ['Figma', 'Adobe XD', 'Prototyping'],
    },
    {
      image: 'https://www.cloudjournee.com/wp-content/uploads/2023/10/cloud_devops_blog.jpg',
      title: 'Cloud DevOps',
      icon: <FaCloud />,
      desc: 'Deploy scalable infrastructure',
      tech: ['AWS', 'Docker', 'Kubernetes'],
    },
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-gray-900'}`}>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/career-bg.jpg')` }}
      >
        <div className="absolute inset-0 "></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
            Launch Your Tech Career
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mt-6 max-w-2xl mx-auto">
            Join our mission to deliver transformative technology solutions
          </p>
        </motion.div>
      </section>

      {/* Why Intern With Us */}
      <section className={`py-20 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
        <motion.div
          className="max-w-screen-xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent" variants={fadeInUp}>
            Why Intern With Us?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {cardData.map((item, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 ${darkMode ? 'bg-[#1f1f1f] border-gray-700 hover:shadow-primary/30' : 'bg-white border-gray-200 hover:shadow-lg'}`}
                variants={fadeInUp}
              >
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                <div className="p-6 text-center">
                  <div className="text-4xl text-primary mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Internship Roles */}
      <section className={darkMode ? 'bg-black py-20' : 'bg-gray-50 py-20'}>
        <motion.div
          className="max-w-screen-xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent" variants={fadeInUp}>
            Internship Roles
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                className={`flex gap-6 rounded-3xl overflow-hidden border transition-all duration-300 ${darkMode ? 'bg-[#1f1f1f] border-gray-700 hover:shadow-primary/40' : 'bg-white border-gray-200 hover:shadow-md'}`}
                variants={fadeInUp}
              >
                <img src={role.image} alt={role.title} className="w-60 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                  <p className="text-gray-400 dark:text-gray-300 mb-3">{role.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((tech, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <motion.div
          className="max-w-screen-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
            Ready to Join Us?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Send your resume and portfolio to <span className="text-cyan-500">careers@thecodesneaker.com</span>
          </p>
          <motion.a
            href="mailto:careers@thecodesneaker.com"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 transition"
            whileHover={{ scale: 1.05 }}
          >
            Apply Now
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Career;
