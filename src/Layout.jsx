import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';

function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: t('home'), page: 'Home' },
    { name: t('services'), page: 'Services' },
    { name: t('about'), page: 'About' },
    { name: language === 'bg' ? 'ЕС Финансиране' : 'EU Funding', page: 'EUFunding' },
    { name: language === 'bg' ? 'Полезни връзки' : 'Links', page: 'Links' },
    { name: t('contact'), page: 'Contact' },
  ];
  
  const isHome = location.pathname === '/' || location.pathname.includes('Home');
  const navBg = scrolled || !isHome 
    ? 'bg-white/95 backdrop-blur-md shadow-sm' 
    : 'bg-transparent';
  const navText = scrolled || !isHome ? 'text-slate-800' : 'text-white';
  
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697f7803190b96ccb9f98d24/353fdb801_Screenshot2026-02-02100034.jpg"
                alt="КАДЕКС ООД"
                className="h-10 w-10"
              />
              <span className={`text-2xl font-bold tracking-tight ${scrolled || !isHome ? 'text-red-800' : 'text-white'}`} style={scrolled || !isHome ? { color: '#8B2323' } : {}}>
                КАДЕКС ООД
              </span>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`text-sm font-medium transition-colors hover:text-red-800 ${navText}`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-red-800 ${navText}`}
              >
                <Globe className="w-4 h-4" />
                {language === 'bg' ? 'EN' : 'BG'}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 ${navText}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-20"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-slate-800 border-b border-slate-100"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 py-3 text-lg font-medium text-slate-800"
              >
                <Globe className="w-5 h-5" />
                {language === 'bg' ? 'English' : 'Български'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold" style={{ color: '#8B2323' }}>КАДЕКС ООД</span>
            </div>
            <p className="text-slate-400 max-w-md">
              {t('footerDesc')}
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{language === 'bg' ? 'Страници' : 'Pages'}</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to={createPageUrl('Home')} className="hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to={createPageUrl('Services')} className="hover:text-white transition-colors">{t('services')}</Link></li>
              <li><Link to={createPageUrl('About')} className="hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link to={createPageUrl('EUFunding')} className="hover:text-white transition-colors">{language === 'bg' ? 'ЕС Финансиране' : 'EU Funding'}</Link></li>
              <li><Link to={createPageUrl('Links')} className="hover:text-white transition-colors">{language === 'bg' ? 'Полезни връзки' : 'Links'}</Link></li>
              <li><Link to={createPageUrl('Contact')} className="hover:text-white transition-colors">{t('contact')}</Link></li>
              <li><Link to={createPageUrl('Sitemap')} className="hover:text-white transition-colors">{language === 'bg' ? 'Карта на сайта' : 'Sitemap'}</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>052 69-62-26 / 0886 286 396</li>
              <li>cadex_bg@yahoo.com</li>
              <li>{language === 'bg' ? 'гр. Варна, ул. „Генерал Колев" 54' : 'Varna, 54 General Kolev St.'}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500 text-sm">
          © {new Date().getFullYear()} КАДЕКС ООД. {t('allRights')}
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <style>{`
        [class*="base44-edit"], 
        [id*="base44-edit"],
        button[class*="fixed"][class*="bottom"],
        a[href*="base44.com/edit"],
        div[class*="fixed"][class*="bottom"][class*="right"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}