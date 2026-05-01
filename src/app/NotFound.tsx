import React from 'react';
import { NavLink } from 'react-router';
import { useLanguage } from './contexts/LanguageContext';
import { SEO } from './components/SEO';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  const { lang } = useLanguage();

  const seoData = {
    fr: { title: 'Page introuvable', description: "La page que vous cherchez n'existe pas." },
    pt: { title: 'Página não encontrada', description: 'A página que procura não existe.' },
    en: { title: 'Page not found', description: "The page you are looking for doesn't exist." },
  }[lang as 'fr' | 'pt' | 'en'] ?? { title: 'Page introuvable', description: '' };

  const labels = {
    fr: { heading: '404', sub: 'Page introuvable', back: "Retour à l'accueil" },
    pt: { heading: '404', sub: 'Página não encontrada', back: 'Voltar ao início' },
    en: { heading: '404', sub: 'Page not found', back: 'Back to home' },
  }[lang as 'fr' | 'pt' | 'en'] ?? { heading: '404', sub: 'Page introuvable', back: "Retour à l'accueil" };

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-brand-bg px-6">
      <SEO title={seoData.title} description={seoData.description} lang={lang} />
      <div className="text-center">
        <p className="font-display text-[120px] md:text-[180px] leading-none text-primary/10 select-none">
          {labels.heading}
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-brand-text -mt-6 mb-4">
          {labels.sub}
        </h1>
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-orange transition-colors mt-2"
        >
          <ArrowLeft size={16} />
          {labels.back}
        </NavLink>
      </div>
    </div>
  );
};
