import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Target, Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import SEOHead from '@/components/SEOHead';

export default function About() {
  const { t, language } = useLanguage();
  
  const stats = [
    { icon: Calendar, value: '17+', label: t('yearsExperience') },
    { icon: Award, value: '500+', label: t('completedProjects') },
    { icon: Users, value: '300+', label: t('satisfiedClients') },
  ];
  
  const values = language === 'bg' ? [
    { icon: Target, title: 'Прецизност', desc: 'Използваме най-съвременно оборудване за постигане на максимална точност.' },
    { icon: Shield, title: 'Надеждност', desc: 'Гарантираме качеството на всички наши услуги и измервания.' },
    { icon: Clock, title: 'Навременност', desc: 'Спазваме стриктно договорените срокове за изпълнение.' },
  ] : [
    { icon: Target, title: 'Precision', desc: 'We use state-of-the-art equipment to achieve maximum accuracy.' },
    { icon: Shield, title: 'Reliability', desc: 'We guarantee the quality of all our services and measurements.' },
    { icon: Clock, title: 'Timeliness', desc: 'We strictly adhere to agreed deadlines.' },
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHead page="About" />
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
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('aboutDescription')}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-red-800" />
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-500 capitalize">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                {language === 'bg' ? 'Нашата история' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>{t('aboutDescription')}</p>
                <p>{t('aboutTeam')}</p>
                <p>
                  {language === 'bg' 
                    ? 'Разполагаме със съвременно геодезическо оборудване от водещи производители - Leica, Trimble, Topcon, което ни позволява да постигаме най-високи стандарти на точност.'
                    : 'We have modern surveying equipment from leading manufacturers - Leica, Trimble, Topcon, which allows us to achieve the highest standards of accuracy.'
                  }
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400"
                  alt="Surveying equipment"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400"
                  alt="Land surveying"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400"
                  alt="Construction site"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
                  alt="Urban planning"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {language === 'bg' ? 'Нашите ценности' : 'Our Values'}
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-red-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}