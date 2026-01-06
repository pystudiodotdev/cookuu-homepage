import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-green-600 mb-4 block">cookuu</Link>
            <p className="text-gray-600 max-w-sm">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-green-600">{t('footer.contactUs')}</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-green-600">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-green-600">{t('footer.terms')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.connect')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} cookuu. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
