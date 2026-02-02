import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  const { t, language } = useLanguage();
  
  const contactInfo = [
    { 
      icon: MapPin, 
      title: t('address'), 
      value: language === 'bg' ? 'гр. Варна, ул. „Генерал Колев" 54, ет. 2, офис 6' : 'Varna, 54 General Kolev St., fl. 2, office 6'
    },
    { icon: Phone, title: t('phone'), value: '052 69-62-26 / 0886 286 396' },
    { icon: Mail, title: t('email'), value: 'cadex_bg@yahoo.com' },
    { icon: Clock, title: t('workingHours'), value: t('weekdays') },
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHead page="Contact" />
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
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-red-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-2 text-lg">{item.title}</h3>
                      {item.icon === Mail ? (
                        <p className="text-slate-600 text-lg">{item.value}</p>
                      ) : item.icon === Phone ? (
                       <div className="space-y-1">
                         <p className="text-slate-600 text-lg">052 69-62-26</p>
                         <p className="text-slate-600 text-lg">0886 286 396</p>
                         <p className="text-slate-600 text-lg">0888 894 871</p>
                         <p className="text-slate-600 text-lg">0887 887 112</p>
                       </div>
                      ) : (
                        <p className="text-slate-600 text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.7!2d27.9195!3d43.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45478a2a4d3d9%3A0x9e4bac8d7e2c0b1a!2z0YPQuy4g4oCe0JPQtdC90LXRgNCw0Lsg0JrQvtC70LXQsuKAnCA1NCwgOTAwMCDQktCw0YDQvdCw!5e0!3m2!1sbg!2sbg!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="КАДЕКС ООД - Варна, ул. Генерал Колев 54"
                />
              </div>
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-3">
                  {language === 'bg' ? 'Имате въпроси?' : 'Have Questions?'}
                </h3>
                <p className="text-red-100">
                  {language === 'bg' 
                    ? 'Свържете се с нас по телефон или имейл за безплатна консултация.'
                    : 'Contact us by phone or email for a free consultation.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}