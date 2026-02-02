import React from 'react';
import { motion } from 'framer-motion';
import { Map, Ruler, Mountain, Building2, HardHat, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';

const services = [
  { key: 'cadastre', icon: Map },
  { key: 'design', icon: Ruler },
  { key: 'geodesy', icon: Mountain },
  { key: 'topography', icon: Building2 },
  { key: 'construction', icon: HardHat },
  { key: 'consulting', icon: MessageSquare },
];

export default function ServicesPreview() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={createPageUrl('Services')}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-red-200 h-full">
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-800 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-red-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-red-800 transition-colors">
                    {t(service.key)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t(`${service.key}Desc`)}
                  </p>
                  <div className="flex items-center text-red-800 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">{t('learnMore')}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}