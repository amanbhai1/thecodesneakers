import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    { title: 'Healthcare', icon: '🏥', description: 'Digital health solutions and patient management systems' },
    { title: 'Manufacturing', icon: '🏭', description: 'Industry 4.0 automation and IoT solutions' }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-gray-100">
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-dark-secondary to-primary/10">
        // ... similar hero section structure ...
      </section>

      <section className="py-20 bg-dark-secondary/50">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-dark-primary rounded-2xl border border-gray-800"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
              <p className="text-gray-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;