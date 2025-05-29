import React from 'react';
import { useSelector } from 'react-redux';

export default function TermsAndConditions() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-b from-black via-[#0a0a0a] to-[#0f0f0f]' : 'bg-gradient-to-b from-white to-gray-200'} text-${darkMode ? 'white' : 'black'} px-4 py-28 md:px-8`}>
      <div className={`max-w-5xl mx-auto border rounded-2xl p-8 ${darkMode ? 'bg-black/60 border-neutral-800' : 'bg-white border-gray-300'} shadow-[0_0_30px_rgba(0,255,180,0.15)] backdrop-blur-md`}>
        
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r ${darkMode ? 'from-lime-300 to-cyan-400' : 'from-blue-500 to-blue-300'} bg-clip-text text-transparent animate-gradient-x`}>
          Terms & Conditions
        </h1>

        <p className={`mb-10 text-center text-lg ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
          Welcome to <span className="text-lime-300 font-semibold">The Code Sneakers</span>. By using our platform, you agree to the following terms. Please read them carefully.
        </p>

        <div className="space-y-10">
          {[
            {
              title: '1. Eligibility',
              text: 'You must be at least 16 years old to participate in our programs, internships, or use any of our services.',
            },
            {
              title: '2. Use of Platform',
              text: 'You agree to use the platform for lawful purposes only. Misuse, including hacking, spreading malware, or violating intellectual property rights, is strictly prohibited.',
            },
            {
              title: '3. Intellectual Property',
              text: 'All content, branding, and materials provided by The Code Sneakers remain our intellectual property and may not be reproduced without permission.',
            },
            {
              title: '4. Termination',
              text: 'We reserve the right to suspend or terminate access to our services if any user violates these terms.',
            },
            {
              title: '5. Changes to Terms',
              text: 'We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the updated terms.',
            },
            {
              title: '6. Contact',
              text: 'For any queries related to these terms, contact us at ',
              link: 'mailto:contact@thecodesneakers.me',
            },
          ].map((item, index) => (
            <section key={index}>
              <h2 className={`text-2xl font-semibold ${darkMode ? 'text-cyan-300' : 'text-blue-600'} mb-2`}>{item.title}</h2>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                {item.text}
                {item.link && (
                  <a href={item.link} className="text-lime-300 underline ml-1">
                    contact@thecodesneakers.me
                  </a>
                )}
              </p>
            </section>
          ))}
        </div>

        {/* Uncomment if you want to show the copyright notice */}
        {/* 
        <div className="mt-12 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} The Code Sneakers. All rights reserved.
        </div> */}
      </div>
    </div>
  );
}
