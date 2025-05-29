import React from 'react';
import { useSelector } from 'react-redux';

const faqs = [
  {
    question: 'What is The Code Sneakers?',
    answer: 'The Code Sneakers is a tech-driven initiative focused on delivering real-world project experience, mentorship, and growth opportunities for aspiring developers.'
  },
  {
    question: 'Who can join the internship program?',
    answer: 'Anyone with a passion for coding and learning can join—whether you’re a student, fresher, or someone looking to switch careers into tech.'
  },
  {
    question: 'Is the internship paid?',
    answer: 'Currently, our internships are unpaid but offer tremendous value through mentorship, networking, and real project exposure.'
  },
  {
    question: 'What tech stacks are covered?',
    answer: 'We focus on the MERN stack (MongoDB, Express, React, Node.js), along with tools like Tailwind CSS, GitHub, and APIs.'
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes, we provide internship certificates upon successful completion of the program.'
  }
];

export default function FAQ() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} px-6 py-32`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-10 ${darkMode ? 'text-gradient' : 'text-gradient-light'}`}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg border ${darkMode ? 'bg-zinc-900 border-zinc-700 hover:border-yellow-400' : 'bg-gray-100 border-gray-300 hover:border-blue-400'} transition`}>
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-yellow-400' : 'text-blue-600'}`}>{faq.question}</h3>
              <p className={`${darkMode ? 'text-zinc-300' : 'text-gray-700'}`}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
