import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/LanguageContext';
import { Home, Briefcase, Users, Phone, Map } from 'lucide-react';

export default function Sitemap() {
  const { language } = useLanguage();
  
  const pages = [
    { 
      name: 'Home', 
      label: language === 'bg' ? 'Начало' : 'Home',
      icon: Home,
      description: language === 'bg' ? 'Главна страница на КАДЕКС ООД' : 'Main page of CADEX Ltd.'
    },
    { 
      name: 'Services', 
      label: language === 'bg' ? 'Услуги' : 'Services',
      icon: Briefcase,
      description: language === 'bg' ? 'Геодезически услуги - кадастър, проектиране, трасиране' : 'Geodetic services - cadastre, design, tracing'
    },
    { 
      name: 'About', 
      label: language === 'bg' ? 'За нас' : 'About Us',
      icon: Users,
      description: language === 'bg' ? 'Информация за фирмата и екипа' : 'Information about the company and team'
    },
    { 
      name: 'Contact', 
      label: language === 'bg' ? 'Контакти' : 'Contact',
      icon: Phone,
      description: language === 'bg' ? 'Данни за контакт и форма за запитване' : 'Contact details and inquiry form'
    },
  ];
  
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Map className="w-8 h-8 text-red-800" />
          <h1 className="text-3xl font-bold text-slate-800">
            {language === 'bg' ? 'Карта на сайта' : 'Sitemap'}
          </h1>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="space-y-6">
            {pages.map((page) => (
              <Link
                key={page.name}
                to={createPageUrl(page.name)}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <page.icon className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800 group-hover:text-red-800 transition-colors">
                    {page.label}
                  </h2>
                  <p className="text-slate-500 text-sm">{page.description}</p>
                  <span className="text-xs text-slate-400 mt-1 block">
                    /{page.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Structured Data for Search Engines */}
        <div className="mt-8 p-6 bg-white rounded-xl border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-4">
            {language === 'bg' ? 'Информация за бизнеса' : 'Business Information'}
          </h3>
          <div className="text-sm text-slate-600 space-y-2">
            <p><strong>{language === 'bg' ? 'Фирма:' : 'Company:'}</strong> КАДЕКС ООД</p>
            <p><strong>{language === 'bg' ? 'Дейност:' : 'Activity:'}</strong> {language === 'bg' ? 'Геодезия, Проектиране, Кадастър' : 'Geodesy, Design, Cadastre'}</p>
            <p><strong>{language === 'bg' ? 'Адрес:' : 'Address:'}</strong> {language === 'bg' ? 'гр. Варна, ул. „Генерал Колев" 54, ет. 2, офис 6' : 'Varna, 54 General Kolev St., fl. 2, office 6'}</p>
            <p><strong>{language === 'bg' ? 'Телефон:' : 'Phone:'}</strong> 052 69-62-26 / 0886 286 396</p>
            <p><strong>Email:</strong> cadex_bg@yahoo.com</p>
            <p><strong>{language === 'bg' ? 'Работно време:' : 'Working Hours:'}</strong> {language === 'bg' ? 'Понеделник - Петък: 8:30 - 17:00' : 'Monday - Friday: 8:30 - 17:00'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}