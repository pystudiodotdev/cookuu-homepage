import React from 'react';
import { Shield, Smartphone, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface VisionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VisionCard: React.FC<VisionCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
    <div className="p-4 bg-green-50 text-green-600 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const VisionWidget: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('vision.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('vision.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VisionCard 
            icon={<Smartphone size={32} />}
            title={t('vision.buildingSmart.title')}
            description={t('vision.buildingSmart.description')}
          />
          <VisionCard 
            icon={<Shield size={32} />}
            title={t('vision.privacyFirst.title')}
            description={t('vision.privacyFirst.description')}
          />
          <VisionCard 
            icon={<Heart size={32} />}
            title={t('vision.lifeCaused.title')}
            description={t('vision.lifeCaused.description')}
          />
        </div>
      </div>
    </section>
  );
};
