import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Testimonials = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  const testimonials = [
    {
      quote: "The Code Sneakers team completely transformed our digital presence. Their technical expertise and creative approach helped us increase online sales by 300% within 6 months.",
      author: "John Smith",
      role: "CEO, Tech Innovators Inc",
      rating: 5,
      industry: "E-commerce"
    },
    {
      quote: "From concept to execution, their team delivered beyond our expectations. The AI solution they implemented has automated 80% of our manual processes.",
      author: "Sarah Johnson",
      role: "CTO, HealthCare Plus",
      rating: 5,
      industry: "Healthcare"
    },
    {
      quote: "Their mobile app development expertise helped us reach 1M+ users in the first year. The user experience is simply flawless.",
      author: "Michael Chen",
      role: "Product Manager, FinTech Solutions",
      rating: 5,
      industry: "Finance"
    },
    {
      quote: "The cybersecurity solutions implemented by Code Sneakers have given us complete peace of mind. Their 24/7 support is exceptional.",
      author: "Emma Wilson",
      role: "Director, Global Logistics",
      rating: 5,
      industry: "Logistics"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "1M+", label: "Users Reached" }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0a0a0a] text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <section className={`relative h-[80vh] flex items-center justify-center bg-gradient-to-br ${darkMode ? 'from-black via-[#0f0f0f] to-primary/20' : 'from-white via-transparent'} overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('/Assets/noise.png')] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_70%)] animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-screen-2xl mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Client Success Stories
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Discover how we've helped businesses transform through technology
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <div className={`relative py-20 ${darkMode ? 'bg-gradient-to-b from-[#0a0a0a] to-[#111111]' : 'bg-gradient-to-b from-white to-gray-200'}`}>
        <div className="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`p-8 ${darkMode ? 'bg-gradient-to-b from-[#151515] to-[#0f0f0f]' : 'bg-white'} rounded-2xl border border-gray-800/50 text-center`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className={`relative py-20 ${darkMode ? 'bg-gradient-to-b from-[#111111] to-[#0a0a0a]' : 'bg-gradient-to-b from-white to-gray-200'}`}>
        <div className="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 ${darkMode ? 'bg-gradient-to-b from-[#151515] to-[#0f0f0f]' : 'bg-white'} rounded-3xl border border-gray-800/50 hover:border-cyan-400/30 transition-all`}
            >
              <div className="mb-6 text-primary text-3xl">
                <FaQuoteLeft />
              </div>
              <p className="text-xl text-gray-500 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold">{testimonial.author}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <div className="flex gap-1 mt-2 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {testimonial.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <div className={`relative py-20 ${darkMode ? 'bg-gradient-to-b from-[#0a0a0a] to-[#111111]' : 'bg-gradient-to-b from-white to-gray-200'}`}>
        <div className="max-w-screen-2xl mx-auto px-4">
          <h3 className="text-2xl text-center mb-12 text-gray-500">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 hover:opacity-100 transition-opacity">
            {[...Array(8)].map((_, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <div className="h-16 w-48 bg-gray-800/50 rounded-xl animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`relative py-32 ${darkMode ? 'bg-gradient-to-r from-primary/20 to-cyan-400/10' : 'bg-gradient-to-r from-gray-200 to-gray-400'}`}>
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-gray-200 to-gray-400' : 'from-gray-600 to-gray-800'}`}>
              Ready to Write Your Success Story?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`inline-block px-16 py-6 bg-gradient-to-r from-primary to-cyan-400 text-[#151515] rounded-2xl font-bold hover:shadow-2xl text-lg`}
            >
              Start Your Journey Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
