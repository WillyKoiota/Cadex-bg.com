import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-red-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {t('ctaDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg" 
                className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-800/25 transition-all hover:shadow-red-800/40 hover:scale-105"
              >
                {t('ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+359886286396">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                0886 286 396
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}