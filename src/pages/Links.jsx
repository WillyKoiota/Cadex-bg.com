import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Building2, MapPin, Scale, Landmark } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import SEOHead from '@/components/SEOHead';

const linkCategories = {
  bg: [
    {
      title: 'Кадастър и институции',
      icon: MapPin,
      links: [
        { name: 'КАИС - Кадастрална карта', url: 'https://kais.cadastre.bg/', desc: 'Онлайн достъп до кадастралната карта на България' },
        { name: 'Агенция по геодезия, картография и кадастър', url: 'https://cadastre.bg/', desc: 'Официален сайт на АГКК' },
        { name: 'Община Варна', url: 'https://varna.bg/', desc: 'Официален сайт на Община Варна' },
        { name: 'РИОСВ - Варна', url: 'https://riosv-varna.bg/', desc: 'Регионална инспекция по околната среда и водите' },
        { name: 'Агенция по вписванията', url: 'https://www.registryagency.bg/', desc: 'Имотен регистър' },
      ]
    },
    {
      title: 'Законодателство',
      icon: Scale,
      links: [
        { name: 'Закон за кадастъра и имотния регистър', url: 'https://www.lex.bg/laws/ldoc/2134918656', desc: 'Основен закон за кадастъра и имотния регистър' },
        { name: 'Закон за устройство на територията', url: 'https://www.lex.bg/laws/ldoc/2135163904', desc: 'Регулиране устройството на територията' },
        { name: 'НАРЕДБА № РД-02-20-5 ОТ 15 ДЕКЕМВРИ 2016 Г. ЗА СЪДЪРЖАНИЕТО, СЪЗДАВАНЕТО И ПОДДЪРЖАНЕТО НА КАДАСТРАЛНАТА КАРТА И КАДАСТРАЛНИТЕ РЕГИСТРИ', url: 'https://lex.bg/bg/laws/ldoc/2136991982', desc: 'Създаване и поддържане на кадастралната карта' },
        { name: 'НАРЕДБА № 8 ОТ 14 ЮНИ 2001 Г. ЗА ОБЕМА И СЪДЪРЖАНИЕТО НА УСТРОЙСТВЕНИТЕ ПЛАНОВЕ', url: 'https://lex.bg/laws/ldoc/-549161982', desc: 'Обем и съдържание на устройствените планове' },
        { name: 'НАРЕДБА № 7 ОТ 22 ДЕКЕМВРИ 2003 Г. ЗА ПРАВИЛА И НОРМАТИВИ ЗА УСТРОЙСТВО НА ОТДЕЛНИТЕ ВИДОВЕ ТЕРИТОРИИ И УСТРОЙСТВЕНИ ЗОНИ', url: 'https://lex.bg/laws/ldoc/2135476546', desc: 'Правила и нормативи за устройство на територията' },
        { name: 'НАРЕДБА № РД-02-20-2 ОТ 20 ДЕКЕМВРИ 2017 Г. ЗА ПЛАНИРАНЕ И ПРОЕКТИРАНЕ НА КОМУНИКАЦИОННО-ТРАНСПОРТНАТА СИСТЕМА НА УРБАНИЗИРАНИТЕ ТЕРИТОРИИ', url: 'https://lex.bg/en/laws/ldoc/2137180231', desc: 'Планиране и проектиране на комуникационно-транспортните системи' },
      ]
    }
  ],
  en: [
    {
      title: 'Cadastre and Institutions',
      icon: MapPin,
      links: [
        { name: 'KAIS - Cadastral Map', url: 'https://kais.cadastre.bg/', desc: 'Online access to Bulgaria\'s cadastral map' },
        { name: 'Geodesy, Cartography and Cadastre Agency', url: 'https://cadastre.bg/', desc: 'Official website of AGCC' },
        { name: 'Varna Municipality', url: 'https://varna.bg/', desc: 'Official website of Varna Municipality' },
        { name: 'RIEW - Varna', url: 'https://riosv-varna.bg/', desc: 'Regional Inspectorate of Environment and Water' },
        { name: 'Registry Agency', url: 'https://www.registryagency.bg/', desc: 'Property Register' },
      ]
    },
    {
      title: 'Legislation',
      icon: Scale,
      links: [
        { name: 'Agricultural Land Ownership Act', url: 'https://www.lex.bg/laws/ldoc/2134918656', desc: 'Regulation of agricultural land ownership' },
        { name: 'Regulation for Application of CPRA', url: 'https://www.lex.bg/laws/ldoc/2135163904', desc: 'Implementation of cadastre law' },
        { name: 'Ordinance RD-02-20-5 on Cadastral Map', url: 'https://lex.bg/bg/laws/ldoc/2136991982', desc: 'Content, creation and maintenance of cadastral map' },
        { name: 'Cadastre and Property Register Act (CPRA)', url: 'https://lex.bg/laws/ldoc/-549161982', desc: 'Main cadastre and property register law' },
        { name: 'Ordinance No. 7 on Planning Standards', url: 'https://lex.bg/laws/ldoc/2135476546', desc: 'Rules and standards for territorial development' },
        { name: 'Ordinance RD-02-20-2 on Transport Systems', url: 'https://lex.bg/en/laws/ldoc/2137180231', desc: 'Planning and design of communication and transport systems' },
      ]
    }
  ]
};

export default function Links() {
  const { language } = useLanguage();
  const categories = linkCategories[language];
  
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead page="Links" />
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-red-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'bg' ? 'Полезни връзки' : 'Helpful Links'}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {language === 'bg' 
                ? 'Институции, закони и ресурси в сферата на геодезията и кадастъра'
                : 'Institutions, laws and resources in geodesy and cadastre'}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Links */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-red-800" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: linkIndex * 0.05 }}
                      className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-red-200 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-slate-800 group-hover:text-red-800 transition-colors">
                          {link.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-red-800 transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-sm text-slate-600">{link.desc}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}