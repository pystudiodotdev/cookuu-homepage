import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <Trans i18nKey="hero.title">
              Discover a <span className="text-green-600">Healthier</span> You with Cookuu
            </Trans>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t('hero.getStarted')} <ArrowRight size={20} />
            </button>
            <button className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm">
              {t('hero.learnMore')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  );
};
