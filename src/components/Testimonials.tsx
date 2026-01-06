import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, rating }) => (
  <div className="bg-gray-50 p-8 rounded-2xl">
    <div className="flex gap-1 mb-4 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "" : "text-gray-300"} />
      ))}
    </div>
    <p className="text-gray-700 italic mb-6">"{content}"</p>
    <div>
      <h4 className="font-bold text-gray-900">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{t('testimonials.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Sarah Johnson"
            role={t('testimonials.reviews.1.role')}
            rating={5}
            content={t('testimonials.reviews.1.content')}
          />
          <TestimonialCard 
            name="Michael Chen"
            role={t('testimonials.reviews.2.role')}
            rating={5}
            content={t('testimonials.reviews.2.content')}
          />
          <TestimonialCard 
            name="Emma Davis"
            role={t('testimonials.reviews.3.role')}
            rating={4}
            content={t('testimonials.reviews.3.content')}
          />
        </div>
      </div>
    </section>
  );
};
