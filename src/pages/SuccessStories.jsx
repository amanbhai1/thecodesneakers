import { motion } from 'framer-motion';

const SuccessStories = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Scaling",
      description: "Scaled infrastructure to handle 10M+ monthly transactions",
      results: ["300% Performance boost", "99.9% Uptime", "AWS Architecture"],
      client: "FashionTech Inc"
      
    },
    {
      title: "AI-Powered Healthcare System",
      description: "ML-driven patient diagnostics platform",
      results: ["95% Accuracy", "Real-time Analytics", "HIPAA Compliant"],
      client: "MediCare Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-dark-secondary to-primary/10">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 via-primary to-blue-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-dark-secondary/50 backdrop-blur-lg">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((caseStudy, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-dark-primary rounded-2xl border border-gray-800"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-400">{caseStudy.description}</p>
                </div>
                <div className="space-y-4">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3 text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-4 border-t border-gray-800">
                  <p className="text-gray-400">Client: {caseStudy.client}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-dark-primary rounded-2xl border border-gray-800"
              >
                <div className="w-16 h-16 mb-4">
                  <img 
                    src={`/Assets/clients/client-${index+1}.png`} 
                    alt="Client logo" 
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Project Title</h4>
                <p className="text-gray-400 text-sm">Industry: Technology</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;