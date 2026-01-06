import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export const SocialHub: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col bg-white shadow-lg rounded-l-lg p-2 space-y-4">
      <a
        href="#"
        className="text-gray-400 hover:text-green-600 transition-colors p-2"
      >
        <Instagram size={24} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-green-600 transition-colors p-2"
      >
        <Twitter size={24} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-green-600 transition-colors p-2"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-green-600 transition-colors p-2"
      >
        <Facebook size={24} />
      </a>
    </div>
  );
};
