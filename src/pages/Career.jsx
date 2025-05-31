import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaBrain, FaCode } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { FiExternalLink } from "react-icons/fi";

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
  const techInternships = [
    {
      title: "MERN Stack Developer",
      desc: "Full-stack web apps using MongoDB, Express, React, Node",
      image: "https://miro.medium.com/v2/resize:fit:768/1*jyvi6rdhEWdbKbybyuht9w.png",
      stipend: "Unpaid",
      location: "Remote",
      duration: "3 months",
      fullDesc: "Build scalable full-stack applications with the MERN stack including REST APIs, authentication, and deployment."
    },
    {
      title: "UI/UX Designer",
      desc: "Figma, Adobe XD, user-centric designs & prototyping",
      image: "https://leaves-rootsworld.ltd/wp-content/uploads/2025/04/ui-and-ux-Designing-agency.png",
      stipend: "Unpaid",
      location: "Remote",
      duration: "2 months",
      fullDesc: "Design engaging and user-friendly interfaces using Figma and Adobe XD, focusing on UX research and prototyping."
    },
    {
      title: "Frontend Developer",
      desc: "Website UI using React.js / Next.js / HTML-CSS-JS",
      image: "https://miro.medium.com/v2/resize:fit:1192/1*jXusXvCfxECPU_Jh9S_E3w.jpeg",
      stipend: "Unpaid",
      location: "Remote",
      duration: "2 months",
      fullDesc: "Develop responsive, interactive UIs using modern frontend frameworks and CSS libraries with performance optimization."
    },
    {
      title: "Backend Developer",
      desc: "API development, database handling, server setup",
      image: "https://datawrapper.de/cdn-cgi/image/quality=85,width=1800,f=auto,fit=cover/https://kirby.datawrapper.de/media/pages/blog/datawrapper-hiring-backend-developer/eceb8f8aba-1740123123/2107-hire-backend2-1.png",
      stipend: "Unpaid",
      location: "Remote",
      duration: "3 months",
      fullDesc: "Build and manage scalable server-side logic using Node.js or PHP, integrate databases, and handle deployments."
    },
    {
      title: "Android App Developer",
      desc: "Kotlin/Java-based native mobile apps",
      image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2F8_Best_Android_Frameworks_for_App_Development_in_2025_eebb938f9a.png&w=4500&q=90",
      stipend: "Unpaid",
      location: "Remote",
      duration: "3 months",
      fullDesc: "Create intuitive Android applications using Java or Kotlin with hands-on exposure to Firebase, APIs, and publishing."
    },
    {
      title: "Full Stack Stack Developer",
      desc: "MERN, DevOps, Docker,  full-stack development",
      image: "https://quickops.pt/wp-content/uploads/2023/04/fullstack_developer.png",
      stipend: "Unpaid",
      location: "Remote",
      duration: "3 months",
      fullDesc: "Create enterprise-grade web applications using, ReactJs, Node.js, Express, and MongoDB with a focus on performance."
    },

    {
      title: "React Native App Developer",
      desc: "Cross-platform app development (Android + iOS)",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQEP6gFxfcRh2w/article-cover_image-shrink_720_1280/B4DZUgK38YHYAI-/0/1740001477079?e=2147483647&v=beta&t=xyarR-FA3KvPcm0xZcCxpZELEKew0SlG7O3pYpA-Xo4",
      stipend: "Unpaid",
      location: "Remote",
      duration: "3 months",
      fullDesc: "Design and build cross-platform mobile applications using React Native. Integrate APIs and Firebase services."
    },
    {
      title: "WordPress Developer",
      desc: "CMS-based websites, blogging platforms",
      image: "https://rootinfosol.com/sites/default/files/2018-03/wordpress.jpg",
      stipend: "Unpaid",
      location: "Remote",
      duration: "2 months",
      fullDesc: "Build and customize WordPress websites including themes, plugins, WooCommerce, and SEO optimization."
    },
    {
      title: "Custom Web App Development",
      desc: "LMS, ERP, Admin Dashboards, CRMs, etc.",
      image: "https://neurosys.com/wp-content/uploads/2022/09/custom-web-app-benefits.jpg",
      stipend: "Unpaid",
      location: "Remote",
      duration: "4 months",
      fullDesc: "Create customized web apps for business solutions using full-stack technologies with authentication and admin panels."
    },
  ]

  const nonTechInternships = [

    {
      title: "Graphic Designer",
      desc: "Logos, banners, brochures, pitch decks",
      image: "https://www.andacademy.com/resources/wp-content/uploads/2023/07/image5.jpg",
      stipend: "Unpaid",
      location: "Remote",
      duration: "2 months",
      fullDesc: "Create marketing and branding materials using Photoshop, Illustrator, and Canva."
    },
    {
      title: "Motion Graphics Designer",
      desc: "Short reels, animations, ad creatives",
      image: "https://www.andacademy.com/resources/wp-content/uploads/2025/01/Feature-1.webp",
      stipend: "Unpaid",
      location: "Remote",
      duration: "2 months",
      fullDesc: "Design motion content using After Effects and Premiere Pro for marketing campaigns and reels."
    },
    {
      title: "Social Media Manager",
      desc: "Instagram, LinkedIn, Facebook content planning",
      image: "https://files.selar.co/product-images/2021/products/thesparkbizng/social-media-management-t-selar.co-618013370bf45.png",
      stipend: "Unpaid",
      location: "Remote",
      duration: "1-2 months",
      fullDesc: "Plan, create and schedule social content to grow and engage brand audiences across platforms."
    },
    {
      title: "SEO Specialist",
      desc: "On-page, off-page SEO, keyword research",
      image: "https://www.jobillico.com/blog/wp-content/uploads/2022/10/What-to-Look-For-When-Hiring-an-SEO-Expert-For-Your-Company.jpg",
      stipend: "Unpaid",
      location: "Remote",
      duration: "2-3 months",
      fullDesc: "Optimize content and website performance for search engines using tools like SEMrush, Google Analytics, and more."
    },
    {
      title: "HR & Talent Acquisition",
      desc: "Hiring, resume screening, onboarding",
      image: "https://employernews.co.uk/wp-content/uploads/2022/12/AdobeStock_211443786-scaled.jpeg",
      stipend: "Unpaid",
      location: "Remote",
      duration: "2-3 months",
      fullDesc: "Manage job postings, candidate screening, interview scheduling, and onboarding process."
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1],
        type: "spring",
        stiffness: 80,
      },
    },
  };


  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-gray-100 text-gray-900'}`}>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://assets.trainingindustry.com/content/uploads/2024/05/5.7.24-Man-discussing-something-with-Woman-1334472503-1920x1080.jpg')` }}
      >
        <div className={`absolute inset-0 bg-black ${darkMode ? 'opacity-80' : 'opacity-70'} `}></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
            Launch Your Tech Career
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Join our mission to deliver transformative technology solutions
          </p>
        </motion.div>
      </section>




      {/* Tech Internships */}
      <section className={darkMode ? 'bg-black py-24' : 'bg-gray-40 py-24'}>
        <motion.div
          className="max-w-screen-xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {["Tech Internships", "Non-Tech Internships"].map((sectionTitle, secIndex) => {
            const roles = secIndex === 0 ? techInternships : nonTechInternships;

            return (
              <div key={sectionTitle} className="mb-32">
                <motion.h2
                  className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-yellow-400 via-yellow-300 to-cyan-500 bg-clip-text text-transparent flex justify-center items-center gap-3"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <FiExternalLink className="animate-pulse text-4xl text-yellow-400" />
                  {sectionTitle}
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                  {roles.map((role, i) => (
                    <motion.div
                      key={i}
                      className={`relative group rounded-3xl p-[2px] hover:scale-[1.02] transition-transform duration-500 bg-gradient-to-br from-yellow-400 via-white/5 to-cyan-500/30 backdrop-blur-xl ${darkMode ? 'border border-cyan-600 shadow-cyan-500/20' : 'border border-gray-200'
                        }`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 60 }}
                    >
                      <div className={`rounded-[22px] p-6 ${darkMode ? 'bg-[#141414]' : 'bg-white'} transition-all`}>
                        <img src={role.image} className="h-52 w-full object-cover rounded-xl mb-4 shadow-md" />
                        <h3 className="text-2xl font-bold mb-2 text-yellow-500 dark:text-yellow-400">{role.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{role.desc}</p>
                        {/* <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <p><strong>Duration:</strong> {role.duration}</p>
                    <p><strong>Location:</strong> {role.location}</p>
                  </div> */}
                        <button
                          onClick={() => {
                            setSelectedInternship(role);
                            setShowModal(true);
                          }}
                          className="text-cyan-500 font-semibold underline mt-4 inline-block hover:text-yellow-500 transition-all"
                        >
                          Read more →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* MODAL */}
        {showModal && selectedInternship && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center"
            onClick={() => setShowModal(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl w-[90%] max-w-2xl border border-cyan-400/20 shadow-2xl relative animate-fadeIn"
            >
              <button
                className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-cyan-400"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 mb-4">{selectedInternship.title}</h2>
              <img
                src={selectedInternship.image}
                alt={selectedInternship.title}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow"
              />
              <p className="mb-3 text-gray-700 dark:text-gray-300">{selectedInternship.desc}</p>
              <ul className="text-gray-600 dark:text-gray-400 text-sm mt-4 space-y-1">
                {selectedInternship.duration && <li><strong>Duration:</strong> {selectedInternship.duration}</li>}
                {selectedInternship.location && <li><strong>Location:</strong> {selectedInternship.location}</li>}
                {selectedInternship.stipend && <li><strong>Stipend:</strong> {selectedInternship.stipend}</li>}
                {selectedInternship.fullDesc && <li><strong>Detailed:</strong> {selectedInternship.fullDesc}</li>}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Why Intern With Us */}
      <section className={`py-24 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-gradient-to-br from-gray-100 to-white'}`}>
        <motion.div
          className="max-w-screen-xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Why Intern With Us?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {cardData.map((item, index) => (
              <motion.div
                key={index}
                className={`
            rounded-3xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 group
            ${darkMode
                    ? 'bg-[#111] border-cyan-700/30 hover:shadow-[0_0_30px_#00ffff55] backdrop-blur-md'
                    : 'bg-white border-yellow-300 hover:shadow-xl'}
          `}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover rounded-t-3xl" />

                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
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
            Send your resume and portfolio to{' '}
            <span className="text-cyan-500">careers@thecodesneaker.com</span>
          </p>
          <motion.a
            href="mailto:careers@thecodesneaker.com"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-cyan-600 transition duration-300"
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
