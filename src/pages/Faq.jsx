import React from 'react';

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
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gradient mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-700 hover:border-yellow-400 transition">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{faq.question}</h3>
              <p className="text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
