import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCode as Code,
  FaLaptopCode as LaptopCode,
  FaPalette as Palette,
  FaMobileAlt as MobileAlt,
  FaShoppingCart as Cart,
  FaChartLine as Chart,
  FaTools as Tools,
  FaCloud as Cloud,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaCheck
} from 'react-icons/fa';

const coreServices = [
  { icon: <Code />, title: 'Website Development', desc: 'Build fast, responsive, and SEO-optimized websites tailored to your brand' },
  { icon: <LaptopCode />, title: 'Custom Software', desc: 'Bespoke solutions to streamline operations and automate workflows' },
  { icon: <Palette />, title: 'UI/UX Design', desc: 'Create intuitive interfaces with stunning visual experiences' },
  { icon: <MobileAlt />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences' },
  { icon: <Cart />, title: 'E-commerce', desc: 'Secure, scalable online stores with integrated payments' },
  { icon: <Chart />, title: 'Digital Marketing', desc: 'Data-driven strategies to amplify brand reach' },
  { icon: <Tools />, title: 'Maintenance', desc: 'Proactive support and updates for digital assets' },
  { icon: <Cloud />, title: 'Cloud DevOps', desc: 'Scalable infrastructure and automation solutions' }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f0f] to-primary/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/Assets/aman.png')]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_70%)] animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-screen-2xl mx-auto px-4 text-center relative z-10"
        >
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-clashdisplay bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              <span className="block">The Code</span>
              <span className="block bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mt-2">
                Sneaker's
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Transformative technology solutions powered by innovation and precision
              <span className="block mt-4 text-white/80">Build. Scale. Disrupt. Together.</span>
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all" />
              <Link
                to="/contact"
                className="relative z-10 inline-block px-8 py-4 md:px-12 md:py-6 bg-gradient-to-br from-primary to-cyan-400 text-dark-primary rounded-2xl hover:shadow-2xl text-base md:text-lg font-bold"
              >
                Build With Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Services Grid */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="absolute inset-0 bg-[url('/Assets/grid.svg')] opacity-10" />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Digital Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-6 md:p-8 bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-2xl lg:rounded-3xl border border-gray-800/50 hover:border-cyan-400/30 transition-all"
              >
                <div className="text-3xl md:text-4xl mb-4 md:mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <div className="relative bg-dark-secondary/95 py-24 md:py-32 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Why Choose The Code Sneaker's
              </h2>
              <p className="text-gray-400/90 md:text-lg">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
              <div className="space-y-4 md:space-y-6">
                {[
                  'Full-cycle development from concept to deployment',
                  'Agile methodology with transparent communication',
                  'Cutting-edge technology stack',
                  'ROI-focused solutions'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FaCheckCircle className="text-primary text-sm md:text-base" />
                    </div>
                    <span className="text-gray-300/90 md:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform group-hover:rotate-1 transition-all duration-500" />
              <img 
                src="/Assets/services.jpg" 
                alt="Services" 
                className="rounded-3xl w-full h-[400px] md:h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Packages */}
      <div className="relative bg-black py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Tailored Solutions
      </h2>
      <p className="text-gray-400/90 max-w-2xl mx-auto md:text-lg">
        Flexible packages designed for businesses at every stage
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {[
        { 
          title: 'Starter', 
          price: '₹3999', 
          features: ['Basic Website', '3 Revisions', 'SEO Setup', '1 Month Support'],
          borderColor: 'border-gray-800'
        },
        { 
          title: 'Professional', 
          price: '₹9999', 
          features: ['Custom Software', 'UI/UX Design', 'Digital Marketing', '3 Months Support'],
          borderColor: 'border-primary/40',
          popular: true
        },
        { 
          title: 'Enterprise', 
          price: 'Custom', 
          features: ['Full Solution', 'Priority Support', 'Dedicated Team', 'Ongoing Maintenance'],
          borderColor: 'border-gray-800'
        }
      ].map((pkg, index) => (
        <motion.div 
          key={index}
          className={`p-6 md:p-8 bg-dark-secondary/50 rounded-xl md:rounded-2xl border ${pkg.borderColor} hover:border-primary/40 transition-all relative`}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          {pkg.popular && (
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs md:text-sm">
              Most Popular
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{pkg.title}</h3>
          <div className="text-3xl md:text-4xl font-bold text-primary mb-4">{pkg.price}</div>
          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                <FaCheck className="text-primary text-xs md:text-sm" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 md:py-3 rounded-lg transition-all text-sm md:text-base"
            onClick={() => {
              const message = encodeURIComponent(
                `Hi, I'm interested in the ${pkg.title} Plan (${pkg.price}) for ${pkg.features.join(', ')}.`
              );
              window.open(`https://instagram.com/thecodesneakers`, '_blank');
              navigator.clipboard.writeText(decodeURIComponent(message)).then(() => {
                alert("Message copied! Paste it into Instagram DM.");
              });
            }}
          >
            Get Started
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      {/* Team Section */}
      <div className="relative bg-gradient-to-b from-[#0a0a0a] to-[#111111] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Leadership Team
          </motion.h2>

          {[
            {
              name: "Aman Gupta",
              role: "Founder & CEO",
              experience: `As the Founder of The Code Sneakers, I’m passionate about turning innovative ideas into powerful digital solutions. With a background in full-stack development and a vision for smart, scalable technology, I lead a team dedicated to crafting web, mobile, AI, and IT products that help businesses grow and thrive. My mission is to blend creativity with cutting-edge tech to deliver seamless experiences that make a real impact.`,
              image: "/Assets/aman.jpg",
              expertise: ["Node.js", "Cloud Architecture", "AI Integration"],
              linkedinLink: "https://www.linkedin.com/in/aman-gupta-a11a672ab/"
            },
            {
              name: "Krish Bhardawaj",
              role: "Co-Founder & CTO",
              experience: `Expert in crafting engaging and responsive UI using React.js. Focused on user experience and design consistency across projects.`,
              image: "/Assets/team3.jpg",
              expertise: ["React Ecosystem", "Performance Optimization", "WebGL"],
              linkedinLink: "https://www.linkedin.com/in/krishbharadwaj23/"
            },
            {
              name: "Vikash Shakaya",
              role: "Co-Founder & CDO",
              experience: `Designed intuitive interfaces and enhanced interactive features for various projects, ensuring seamless user experience.`,
              image: "/Assets/vikash.jpg",
              expertise: ["UX Research", "Design Systems", "Motion Design"],
              linkedinLink: "https://www.linkedin.com/in/vikash-shakya-978a052b2/"
            },
            {
              name: "Tanishka Varshney",
              role: "Co-Founder & COO", 
              experience: `Contributed to UI development and helped enhance user experience with modern design practices and clean code.`,
              image: "/Assets/team4.jpg",
              expertise: ["Project Management", "Client Relations", "Agile Workflows"],
              linkedinLink: "https://www.linkedin.com/in/tanishka-varshney-349366272/"
            },
            // ... other team members
          ].map((member, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 mb-16 md:mb-24 last:mb-0`}
              initial={{ opacity: 0, x: index % 2 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="md:w-1/2 relative group overflow-hidden rounded-2xl md:rounded-3xl">
                <motion.img 
                  src={member.image}
                  className="w-full h-[300px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt={member.name}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 z-10 flex gap-2 flex-wrap">
                  {member.expertise?.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">
                <motion.span 
                  className="text-primary font-semibold text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {member.role}
                </motion.span>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {member.name}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-400 text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {member.experience}
                </motion.p>

                <motion.div 
                  className="flex gap-4 md:gap-6 mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {member.projectsLink && (
                    <motion.a 
                      href={member.projectsLink}
                      className="flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FaGithub className="text-xl md:text-2xl" />
                      <span className="font-medium text-sm md:text-base">Projects</span>
                    </motion.a>
                  )}
                  {member.linkedinLink && (
                    <motion.a 
                      href={member.linkedinLink}
                      className="flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FaLinkedin className="text-xl md:text-2xl" />
                      <span className="font-medium text-sm md:text-base">Connect</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-black to-primary/20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.div 
            className="space-y-8 md:space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Ready to Innovate?
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 md:mt-16"
            >
              <Link
                to="/contact"
                className="inline-block px-12 py-4 md:px-16 md:py-6 bg-gradient-to-r from-primary to-cyan-400 text-dark-primary rounded-2xl hover:shadow-2xl text-lg md:text-xl font-bold"
              >
                Start Your Project Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;