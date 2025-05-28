import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-black via-[#0a0a0a] to-[#0f0f0f] text-white px-4 py-28 md:px-8">
      <div className="max-w-5xl mx-auto border border-neutral-800 rounded-2xl p-8 bg-black/60 shadow-[0_0_30px_rgba(0,255,180,0.15)] backdrop-blur-md">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-lime-300 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 mb-10 text-center text-lg">
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
              <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{item.title}</h2>
              <p className="text-gray-400 leading-relaxed">
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
{/* 
        <div className="mt-12 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} The Code Sneakers. All rights reserved.
        </div> */}
      </div>
    </div>
  );
}
