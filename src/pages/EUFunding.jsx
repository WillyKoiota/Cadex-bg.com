import React from 'react';
import { motion } from 'framer-motion';
import { Flag, FileText, Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import SEOHead from '@/components/SEOHead';

export default function EUFunding() {
  const { language } = useLanguage();
  
  const projects = [
    {
      program: 'BG16RFOP002-2.073',
      title: language === 'bg' 
        ? '„Подкрепа на микро и малки предприятия за преодоляване на икономическите последствия от пандемията COVID-19"'
        : '"Support for micro and small enterprises to overcome the economic consequences of the COVID-19 pandemic"',
      description: language === 'bg'
        ? 'Европейско финансиране по програма за подкрепа на малки и микро предприятия, засегнати от пандемията COVID-19.'
        : 'European funding under a program to support small and micro enterprises affected by the COVID-19 pandemic.',
      icon: Building2
    },
    {
      program: 'BG16RFPR001-1.004-0013-C03',
      title: language === 'bg'
        ? 'Програма „Конкурентоспособност и иновации в предприятията" 2021-2027'
        : 'Program "Competitiveness and Innovation in Enterprises" 2021-2027',
      subtitle: language === 'bg'
        ? 'Подкрепа за семейните предприятия, предприятията от творческите индустрии и занаятите'
        : 'Support for family businesses, creative industries and crafts enterprises',
      description: language === 'bg'
        ? 'Европейско финансиране по програма за повишаване на конкурентоспособността и иновациите в предприятията.'
        : 'European funding under a program to increase competitiveness and innovation in enterprises.',
      icon: FileText
    }
  ];
  
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead page="EUFunding" />
      
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
            <div className="flex justify-center mb-6">
              <Flag className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'bg' ? 'Европейско финансиране' : 'EU Funding'}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {language === 'bg' 
                ? 'Проекти, финансирани от Европейския съюз'
                : 'Projects funded by the European Union'}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* EU Flag Banner */}
      <section className="bg-blue-900 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/200px-Flag_of_Europe.svg.png" 
              alt="EU Flag" 
              className="h-12"
            />
            <p className="text-white text-center">
              {language === 'bg' 
                ? 'Този проект е финансиран с подкрепата на Европейския съюз'
                : 'This project is funded with the support of the European Union'}
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">
                        {project.program}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h2>
                    {project.subtitle && (
                      <h3 className="text-lg text-slate-600 mb-3">
                        {project.subtitle}
                      </h3>
                    )}
                    <p className="text-slate-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 text-center">
              {language === 'bg'
                ? 'Съдържанието на този уебсайт не представлява непременно официалната позиция на Европейския съюз.'
                : 'The content of this website does not necessarily represent the official position of the European Union.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}