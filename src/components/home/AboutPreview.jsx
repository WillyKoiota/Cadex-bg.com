import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function AboutPreview() {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Calendar, value: '17+', label: t('yearsExperience') },
    { icon: Award, value: '500+', label: t('completedProjects') },
    { icon: Users, value: '300+', label: t('satisfiedClients') },
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800" 
                alt="Геодезическо оборудване и измервания на терен - КАДЕКС ООД"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-red-800 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold">2007</div>
              <div className="text-emerald-100 text-sm">EST.</div>
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t('aboutTitle')}
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t('aboutDescription')}
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t('aboutTeam')}
            </p>
            
            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {[
                'GPS, GNSS технологии',
                'Съвременно оборудване',
                'Лицензирани специалисти'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-800 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-red-800 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-500 capitalize">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}