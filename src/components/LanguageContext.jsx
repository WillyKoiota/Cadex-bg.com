import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  bg: {
    // Navigation
    home: 'Начало',
    about: 'За нас',
    services: 'Услуги',
    contact: 'Контакти',
    
    // Hero
    heroTitle: 'КАДЕКС ООД',
    heroSubtitle: 'Проектиране, геодезия, кадастър',
    heroDescription: 'Висококачествени геодезически услуги от 2007 година',
    heroButton: 'Свържете се с нас',
    learnMore: 'Научете повече',
    
    // About
    aboutTitle: 'За нас',
    aboutDescription: 'Фирмата е основана през 2007г. и до сега предоставя висококачествени услуги в сферата на проектирането, кадастъра и други геодезически дейности.',
    aboutTeam: 'Екипът се състои от висококвалифицирани специалисти, държащи на качествено изпълнение в зададения срок на поетите задачи.',
    yearsExperience: 'години опит',
    completedProjects: 'завършени проекта',
    satisfiedClients: 'доволни клиенти',
    
    // Services
    servicesTitle: 'Нашите услуги',
    servicesSubtitle: 'Предлагаме пълен спектър от геодезически услуги',
    
    cadastre: 'Кадастър',
    cadastreDesc: 'Изготвяне на кадастрални карти и регистри, нанасяне и отстраняване на непълноти и грешки в кадастъра.',
    
    design: 'Проектиране',
    designDesc: 'Изработване на подробни устройствени планове, вертикална планировка, трасировъчни планове.',
    
    geodesy: 'Геодезия',
    geodesyDesc: 'Трасиране на сгради, пътища и съоръжения. Геодезически заснемания и измервания.',
    
    topography: 'Топография',
    topographyDesc: 'Изработване на топографски планове и карти, цифрови модели на терена.',
    
    construction: 'Строителство',
    constructionDesc: 'Геодезическо осигуряване на строителството, контрол на деформации.',
    
    consulting: 'Консултации',
    consultingDesc: 'Експертни консултации по въпроси, свързани с кадастър, проектиране и регулация.',
    
    // Contact
    contactTitle: 'Свържете се с нас',
    contactSubtitle: 'Готови сме да отговорим на вашите въпроси',
    name: 'Име',
    email: 'Имейл',
    phone: 'Телефон',
    message: 'Съобщение',
    send: 'Изпрати',
    address: 'Адрес',
    workingHours: 'Работно време',
    weekdays: 'Понеделник - Петък: 8:30 - 17:00',
    
    // Footer
    footerDesc: 'Професионални геодезически услуги с висококачествено изпълнение.',
    allRights: 'Всички права запазени.',
    
    // CTA
    ctaTitle: 'Имате проект?',
    ctaDesc: 'Свържете се с нас за безплатна консултация',
    ctaButton: 'Поискайте оферта',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'CADEX Ltd.',
    heroSubtitle: 'Design, Geodesy, Cadastre',
    heroDescription: 'High-quality surveying services since 2007',
    heroButton: 'Contact Us',
    learnMore: 'Learn More',
    
    // About
    aboutTitle: 'About Us',
    aboutDescription: 'The company was founded in 2007 and has been providing high-quality services in design, cadastre and other geodetic activities.',
    aboutTeam: 'The team consists of highly qualified specialists committed to quality execution within the set deadlines.',
    yearsExperience: 'years experience',
    completedProjects: 'completed projects',
    satisfiedClients: 'satisfied clients',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'We offer a full range of geodetic services',
    
    cadastre: 'Cadastre',
    cadastreDesc: 'Preparation of cadastral maps and registers, correction of incompleteness and errors in the cadastre.',
    
    design: 'Design',
    designDesc: 'Development of detailed spatial plans, vertical planning, tracing plans.',
    
    geodesy: 'Geodesy',
    geodesyDesc: 'Tracing of buildings, roads and facilities. Geodetic surveys and measurements.',
    
    topography: 'Topography',
    topographyDesc: 'Preparation of topographic plans and maps, digital terrain models.',
    
    construction: 'Construction',
    constructionDesc: 'Geodetic support of construction, deformation control.',
    
    consulting: 'Consulting',
    consultingDesc: 'Expert consultations on issues related to cadastre, design and regulation.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are ready to answer your questions',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    address: 'Address',
    workingHours: 'Working Hours',
    weekdays: 'Monday - Friday: 8:30 - 17:00',
    
    // Footer
    footerDesc: 'Professional geodetic services with high-quality execution.',
    allRights: 'All rights reserved.',
    
    // CTA
    ctaTitle: 'Have a Project?',
    ctaDesc: 'Contact us for a free consultation',
    ctaButton: 'Request a Quote',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('bg');
  
  useEffect(() => {
    const saved = localStorage.getItem('cadex-language');
    if (saved) setLanguage(saved);
  }, []);
  
  const toggleLanguage = () => {
    const newLang = language === 'bg' ? 'en' : 'bg';
    setLanguage(newLang);
    localStorage.setItem('cadex-language', newLang);
  };
  
  const t = (key) => translations[language][key] || key;
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);