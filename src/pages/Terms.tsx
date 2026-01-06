import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Terms & Conditions
      </h1>
      <div className="prose prose-green max-w-none text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
          1. Agreement to Terms
        </h2>
        <p className="mb-4">
          By accessing or using the Cookuu application and website, you agree to
          be bound by these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
          2. Intellectual Property
        </h2>
        <p className="mb-4">
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of Cookuu and its licensors.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
          3. User Accounts
        </h2>
        <p className="mb-4">
          When you create an account with us, you must provide us information
          that is accurate, complete, and current at all times. Failure to do so
          constitutes a breach of the Terms, which may result in immediate
          termination of your account on our Service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
          4. Limitation of Liability
        </h2>
        <p className="mb-4">
          In no event shall Cookuu, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages.
        </p>
      </div>
    </div>
  );
};

export default Terms;
