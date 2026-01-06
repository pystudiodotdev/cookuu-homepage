import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">cookuu</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">{t('header.home')}</Link>
          <a href="#vision" className="text-gray-600 hover:text-green-600 transition-colors">{t('header.vision')}</a>
          <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">{t('header.testimonials')}</a>
          <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">{t('header.contact')}</Link>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
          >
            <Globe size={20} />
            <span className="uppercase text-sm font-medium">{i18n.language}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
          >
            <Globe size={20} />
            <span className="uppercase text-sm font-medium">{i18n.language}</span>
          </button>
          <button 
            className="p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
            <a 
              href="#vision" 
              className="text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.vision')}
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.testimonials')}
            </a>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
