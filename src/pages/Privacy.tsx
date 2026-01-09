import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
      <div className="prose prose-green max-w-none text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">1. Introduction</h2>
        <p className="mb-4">
          At Cookuu, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
          disclose, and safeguard your information when you use our mobile application and website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">2. Data We Collect</h2>
        <p className="mb-4">
          We collect information that helps us provide you with the best experience possible. This may include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Account information (name, email address)</li>
          <li>Health and fitness data you choose to share</li>
          <li>Usage data and analytics</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">3. How We Use Your Data</h2>
        <p className="mb-4">
          We use your data to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Personalize your app experience</li>
          <li>Improve our services</li>
          <li>Communicate with you about updates and offers</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational security measures to protect your personal data.
          We do not sell your personal data to third parties.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
