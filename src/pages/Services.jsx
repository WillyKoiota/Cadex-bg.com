import React from 'react';
import { motion } from 'framer-motion';
import { Map, Ruler, Mountain, Building2, HardHat, MessageSquare, Check } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import SEOHead from '@/components/SEOHead';

const services = [
  { 
    key: 'cadastre', 
    icon: Map,
    features: ['Кадастрални карти', 'Кадастрални регистри', 'Нанасяне на имоти, сгради и самостоятелни обекти', 'Отстраняване на непълноти и грешки'],
    featuresEn: ['Cadastral maps', 'Cadastral registers', 'Parcel, building and individual objects registration', 'Error correction']
  },
  { 
    key: 'design', 
    icon: Ruler,
    features: ['Подробни устройствени планове', 'Вертикална планировка', 'Трасировъчни планове', 'Регулационни планове', 'Парцеларни планове', 'План на новообразувани имоти'],
    featuresEn: ['Detailed spatial plans', 'Vertical planning', 'Tracing plans', 'Regulation plans', 'Parcel plans', 'Newly formed parcel plans']
  },
  { 
    key: 'geodesy', 
    icon: Mountain,
    features: ['Трасиране на имоти и сгради', 'Трасиране на линейни обекти', 'Геодезически заснемания', 'GPS измервания'],
    featuresEn: ['Building and parcel tracing', 'Linear object tracing', 'Geodetic surveys', 'GPS measurements']
  },
  { 
    key: 'topography', 
    icon: Building2,
    features: ['Топографски планове', 'Цифрови модели на терена', '3D визуализации'],
    featuresEn: ['Topographic plans', 'Digital terrain models', '3D visualizations']
  },
  { 
    key: 'construction', 
    icon: HardHat,
    features: ['Геодезическо осигуряване', 'Мониторинг на деформации', 'Изпълнителни снимки /екзекутив/', 'Фасадни планове'],
    featuresEn: ['Geodetic support', 'Deformation monitoring', 'As-built surveys', 'Facade plans']
  },
  { 
    key: 'consulting', 
    icon: MessageSquare,
    features: ['Кадастрални консултации', 'Проектни консултации', 'Регулационни въпроси', 'Правни съвети'],
    featuresEn: ['Cadastral consulting', 'Design consulting', 'Regulation issues', 'Legal advice']
  },
];

export default function Services() {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead page="Services" />
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
              {t('servicesTitle')}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-red-800" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    {t(service.key)}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {t(`${service.key}Desc`)}
                  </p>
                  <ul className="space-y-3">
                    {(language === 'bg' ? service.features : service.featuresEn).map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-red-800" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={[
                        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697f7803190b96ccb9f98d24/92d487d5f_CADASTRE.jpg',
                        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
                        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697f7803190b96ccb9f98d24/cf0d6ebd2_stock-photo-red-colored-wooden-pole-for-the-setting-out-of-a-field-survey.jpg',
                        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697f7803190b96ccb9f98d24/d73f1dfde_stock-photo-surveyor-engineer-making-measure-on-the-field.jpg',
                        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
                        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
                      ][index]}
                      alt={t(service.key)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-800/10 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-200/50 rounded-2xl -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}