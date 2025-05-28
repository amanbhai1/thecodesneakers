import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-gray-300 px-6 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto bg-[#0e0e0e] p-8 rounded-2xl shadow-lg border border-gray-700">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400">
          Privacy Policy
        </h1>

        <p className="mb-6 text-lg">
          At <span className="text-white font-semibold">The Code Sneaker's</span>, your privacy is our top priority. This policy outlines how we collect, use, and safeguard your information.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">1. Information We Collect</h2>
          <p>
            We collect data you provide directly to us, such as your name, email, and any message you submit through our contact forms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">2. How We Use It</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and improve our services</li>
            <li>To communicate with you</li>
            <li>To ensure platform security</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">3. Data Sharing</h2>
          <p>
            We do not sell or trade your personal data. Your information is only shared with trusted partners when required for legal or service delivery reasons.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">4. Cookies</h2>
          <p>
            We may use cookies to personalize content and analyze traffic. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us at
            <a href="mailto:thecodesneakers@gmail.com" className="text-cyan-400 underline ml-1">thecodesneakers@gmail.com</a>
            for any such requests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">6. Contact</h2>
          <p>
            <span className="text-white font-semibold">The Code Sneaker's</span><br />
            Mathura, Uttar Pradesh, 281004<br />
            Email: <a href="mailto:thecodesneakers@gmail.com" className="text-cyan-400 underline">thecodesneakers@gmail.com</a>
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-10">Last Updated: May 28, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
