import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-red-950">
        <div className="absolute inset-0 bg-[url('https://cadex-bg.com/wp-content/uploads/2018/11/FON_1.jpg')] bg-cover bg-center opacity-30" role="img" aria-label="Геодезическо оборудване на терен" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/40" />
      </div>
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 border border-red-800/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 border border-red-800/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight" style={{ color: '#8B2323' }}>
            {t('heroTitle')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-red-300 font-medium mb-6 tracking-wide uppercase">
            {t('heroSubtitle')}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            {t('heroDescription')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg" 
                className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-800/25 transition-all hover:shadow-red-800/40 hover:scale-105"
              >
                <MapPin className="mr-2 h-5 w-5" />
                {t('heroButton')}
              </Button>
            </Link>
            <Link to={createPageUrl('Services')}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
              >
                {t('learnMore')}
              </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}