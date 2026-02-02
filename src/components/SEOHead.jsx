import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export default function SEOHead({ page }) {
  const { language } = useLanguage();
  
  const seoData = {
    Home: {
      bg: {
        title: 'КАДЕКС ООД - Геодезия, Проектиране, Кадастър | Варна',
        description: 'КАДЕКС ООД предлага професионални геодезически услуги във Варна от 2007г. Кадастър, проектиране, трасиране, топографски планове. ☎ 052 69-62-26',
        keywords: 'геодезия варна, кадастър варна, проектиране варна, геодезически услуги, трасиране, топографски план, КАДЕКС'
      },
      en: {
        title: 'CADEX Ltd. - Geodesy, Design, Cadastre | Varna, Bulgaria',
        description: 'CADEX Ltd. offers professional geodetic services in Varna since 2007. Cadastre, design, tracing, topographic plans. ☎ 052 69-62-26',
        keywords: 'geodesy varna, cadastre varna, surveying bulgaria, geodetic services, land surveying, CADEX'
      }
    },
    Services: {
      bg: {
        title: 'Геодезически услуги | КАДЕКС ООД Варна',
        description: 'Пълен спектър геодезически услуги: кадастър, проектиране, трасиране на сгради и пътища, топографски планове, GPS измервания. Професионално изпълнение.',
        keywords: 'геодезически услуги, кадастрални карти, трасиране сгради, топографски план, вертикална планировка, GPS измервания'
      },
      en: {
        title: 'Geodetic Services | CADEX Ltd. Varna',
        description: 'Full range of geodetic services: cadastre, design, building and road tracing, topographic plans, GPS measurements. Professional execution.',
        keywords: 'geodetic services, cadastral maps, building tracing, topographic plan, vertical planning, GPS measurements'
      }
    },
    About: {
      bg: {
        title: 'За нас | КАДЕКС ООД - Геодезическа фирма Варна',
        description: 'КАДЕКС ООД е основана през 2007г. Екипът се състои от висококвалифицирани специалисти с дългогодишен опит в геодезията и кадастъра.',
        keywords: 'КАДЕКС ООД, геодезическа фирма варна, за нас, екип геодезисти, опит геодезия'
      },
      en: {
        title: 'About Us | CADEX Ltd. - Geodetic Company Varna',
        description: 'CADEX Ltd. was founded in 2007. The team consists of highly qualified specialists with many years of experience in geodesy and cadastre.',
        keywords: 'CADEX Ltd, geodetic company varna, about us, surveying team, geodesy experience'
      }
    },
    Contact: {
      bg: {
        title: 'Контакти | КАДЕКС ООД Варна - ул. Генерал Колев 54',
        description: 'Свържете се с КАДЕКС ООД. Адрес: Варна, ул. Генерал Колев 54, ет. 2, офис 6. Телефон: 052 69-62-26, 0886 286 396. Email: cadex_bg@yahoo.com',
        keywords: 'КАДЕКС контакти, геодезия варна адрес, телефон геодезист варна'
      },
      en: {
        title: 'Contact | CADEX Ltd. Varna - 54 General Kolev St.',
        description: 'Contact CADEX Ltd. Address: Varna, 54 General Kolev St., fl. 2, office 6. Phone: 052 69-62-26, 0886 286 396. Email: cadex_bg@yahoo.com',
        keywords: 'CADEX contact, geodesy varna address, surveyor varna phone'
      }
    },
    EUFunding: {
      bg: {
        title: 'Европейско финансиране | КАДЕКС ООД - Проекти с подкрепа от ЕС',
        description: 'КАДЕКС ООД участва в европейски програми за финансиране - BG16RFOP002-2.073 и BG16RFPR001-1.004-0013-C03 за подкрепа на предприятията.',
        keywords: 'европейско финансиране, ЕС проекти, BG16RFOP002, BG16RFPR001, европейски фондове'
      },
      en: {
        title: 'EU Funding | CADEX Ltd. - EU Supported Projects',
        description: 'CADEX Ltd. participates in European funding programs - BG16RFOP002-2.073 and BG16RFPR001-1.004-0013-C03 for enterprise support.',
        keywords: 'EU funding, European projects, BG16RFOP002, BG16RFPR001, European funds'
      }
    },
    Sitemap: {
      bg: {
        title: 'Карта на сайта | КАДЕКС ООД',
        description: 'Карта на сайта на КАДЕКС ООД - Всички страници и секции на уебсайта за лесна навигация.',
        keywords: 'карта на сайта, навигация, КАДЕКС'
      },
      en: {
        title: 'Sitemap | CADEX Ltd.',
        description: 'CADEX Ltd. sitemap - All pages and sections of the website for easy navigation.',
        keywords: 'sitemap, navigation, CADEX'
      }
    },
    Links: {
      bg: {
        title: 'Полезни връзки | КАДЕКС ООД - Ресурси за геодезия и кадастър',
        description: 'Полезни връзки към институции, законодателство и ресурси в сферата на геодезията, кадастъра и устройството на територията във Варна и България.',
        keywords: 'КАДЕКС ресурси, геодезия връзки, кадастър институции, АГКК, КАИС, закони геодезия'
      },
      en: {
        title: 'Helpful Links | CADEX Ltd. - Geodesy and Cadastre Resources',
        description: 'Helpful links to institutions, legislation and resources in geodesy, cadastre and spatial planning in Varna and Bulgaria.',
        keywords: 'CADEX resources, geodesy links, cadastre institutions, AGCC, KAIS, geodesy laws'
      }
    }
  };
  
  useEffect(() => {
    const data = seoData[page]?.[language] || seoData.Home[language];
    
    // Update title
    document.title = data.title;
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = data.description;
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = data.keywords;
    
    // Open Graph tags
    const ogTags = {
      'og:title': data.title,
      'og:description': data.description,
      'og:type': 'website',
      'og:locale': language === 'bg' ? 'bg_BG' : 'en_US',
      'og:site_name': 'КАДЕКС ООД',
      'og:url': window.location.href,
      'og:image': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop'
    };
    
    // Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': data.title,
      'twitter:description': data.description,
      'twitter:image': 'https://images.unsplash.com/photo-504307651254-35680f356dfd?w=1200&h=630&fit=crop'
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
    
    // Twitter Card tags
    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Language alternate
    let langAlt = document.querySelector('link[rel="alternate"][hreflang]');
    if (!langAlt) {
      langAlt = document.createElement('link');
      langAlt.rel = 'alternate';
      document.head.appendChild(langAlt);
    }
    langAlt.hreflang = language === 'bg' ? 'en' : 'bg';

    // Favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697f7803190b96ccb9f98d24/353fdb801_Screenshot2026-02-02100034.jpg';

    // Remove any Base44 edit buttons
    const removeEditButtons = () => {
      const buttons = document.querySelectorAll('[class*="edit"], [class*="base44"], button[class*="fixed"]');
      buttons.forEach(btn => {
        const text = btn.textContent?.toLowerCase() || '';
        if (text.includes('edit') && text.includes('base44')) {
          btn.remove();
        }
      });
    };
    removeEditButtons();
    const observer = new MutationObserver(removeEditButtons);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
    }, [page, language]);
  
  return null;
}