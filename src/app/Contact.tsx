import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { SEO } from './components/SEO';
import { FadeIn } from './components/FadeIn';
import { Button } from './components/Button';
import { MapPin, Mail, Phone, Instagram, ExternalLink, CheckCircle } from 'lucide-react';
import { PatternBg, Confetti, CarnivalMask, CapeVerdeIslands } from './components/Decorations';
import { MotifTribal, MotifDrum, CapeVerdeStars } from './components/CulturalMotifs';
import { useLanguage } from './contexts/LanguageContext';

const ASSOCIATION_CONTACT = {
  address: { line1: "Grand'Rue 36", line2: '1530 Payerne (VD)' },
  email: 'ercelinabatuku11cultura@gmail.com',
  phone1: '079 965 03 54',
  phone1Href: '+41799650354',
  phone2: '079 617 53 87',
  phone2Href: '+41796175387',
  instagram: '@as.batuku_et_cultura',
  instagramUrl: 'https://instagram.com/as.batuku_et_cultura',
};

export const Contact = () => {
  const { t, lang } = useLanguage();
  const [state, handleSubmit] = useForm('mzdobqna');

  const contactItems = [
    {
      icon: <MapPin size={28} />,
      title: t('Contact', 'addressLabel'),
      color: 'text-primary',
      bg: 'bg-primary/10',
      href: `https://maps.google.com/?q=${encodeURIComponent(ASSOCIATION_CONTACT.address.line1 + ' ' + ASSOCIATION_CONTACT.address.line2)}`,
      target: '_blank',
      content: (
        <div className="font-body text-brand-text/80 font-medium text-center leading-relaxed group-hover:text-primary transition-colors">
          <p>{ASSOCIATION_CONTACT.address.line1}</p>
          <p>{ASSOCIATION_CONTACT.address.line2}</p>
        </div>
      ),
    },
    {
      icon: <Mail size={28} />,
      title: t('Contact', 'emailLabel'),
      color: 'text-accent',
      bg: 'bg-accent/10',
      href: `mailto:${ASSOCIATION_CONTACT.email}`,
      target: '_self',
      content: (
        <span className="font-body text-brand-text/80 font-medium text-center break-all text-sm leading-relaxed group-hover:text-accent transition-colors">
          {ASSOCIATION_CONTACT.email}
        </span>
      ),
    },
    {
      icon: <Phone size={28} />,
      title: t('Contact', 'phoneLabel'),
      color: 'text-nature',
      bg: 'bg-nature/10',
      href: `tel:${ASSOCIATION_CONTACT.phone1Href}`,
      target: '_self',
      content: (
        <div className="flex flex-col items-center gap-1 font-body text-brand-text/80 font-medium tracking-widest group-hover:text-nature transition-colors">
          <span>{ASSOCIATION_CONTACT.phone1}</span>
          <span>{ASSOCIATION_CONTACT.phone2}</span>
        </div>
      ),
    },
    {
      icon: <Instagram size={28} />,
      title: t('Contact', 'instagramLabel'),
      color: 'text-deep',
      bg: 'bg-deep/10',
      href: ASSOCIATION_CONTACT.instagramUrl,
      target: '_blank',
      content: (
        <span className="font-body text-brand-text/80 font-medium text-center flex items-center gap-1.5 group-hover:text-deep transition-colors">
          {ASSOCIATION_CONTACT.instagram}
          <ExternalLink size={12} className="shrink-0 opacity-60" />
        </span>
      ),
    },
  ];

  return (
    <div className="w-full bg-brand-bg min-h-screen relative overflow-hidden">
      <SEO
        title={{ fr: 'Contact & Adhésion', pt: 'Contacto & Adesão', en: 'Contact & Join Us' }[lang as 'fr'|'pt'|'en'] ?? 'Contact'}
        description={{ fr: "Contactez l'association Batuku & Cultura à Payerne (VD) ou rejoignez notre communauté cap-verdienne. Grand'Rue 36, 1530 Payerne — ercelinabatuku11cultura@gmail.com", pt: "Contacte a associação Batuku & Cultura em Payerne (VD) ou junte-se à nossa comunidade cabo-verdiana.", en: "Contact the Batuku & Cultura association in Payerne (VD) or join our Cape Verdean community in Switzerland." }[lang as 'fr'|'pt'|'en'] ?? ''}
        path="contact"
        lang={lang}
        pageType="ContactPage"
        breadcrumbs={[{ name: ({ fr: 'Contact & Adhésion', pt: 'Contacto & Adesão', en: 'Contact & Join Us' }[lang as 'fr'|'pt'|'en'] ?? 'Contact'), path: 'contact' }]}
      />
      {/* ── DYNAMIC BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/Sections_fonds/fond page contact.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.9 }}
        />
        <PatternBg className="text-primary opacity-[0.03] absolute inset-0 mix-blend-multiply" />
      </div>

      <CapeVerdeStars className="absolute -top-[200px] -right-[200px] text-accent opacity-10 w-[800px] h-[800px] pointer-events-none z-0 animate-[spin_100s_linear_infinite]" />
      <CapeVerdeIslands className="absolute top-20 right-10 text-primary opacity-[0.03] w-[500px] h-[300px] pointer-events-none z-0 rotate-[-15deg]" />

      <section className="py-section pb-32 md:pb-40 px-4 md:px-xl max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <h1 className="text-primary text-center mb-16 text-6xl drop-shadow-sm">
            {t('Contact', 'pageTitle')}
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col gap-8 border border-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none" />
              <img
                src="/logo/logo8.jpg"
                alt="Sceau Batuku & Cultura"
                className="absolute top-6 right-6 h-12 w-12 rounded-full object-cover ring-2 ring-white/70 shadow-md opacity-95"
                loading="lazy"
              />

              {/* ── Succès ── */}
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle size={56} className="text-green-500" />
                  <h3 className="font-display text-2xl text-brand-text">{t('Contact', 'formSuccessTitle')}</h3>
                  <p className="font-body text-brand-text/60">{t('Contact', 'formSuccessText')}</p>
                </div>
              ) : (
                <>
                  <div>
                    <h2 className="text-brand-text mb-2 text-3xl md:text-4xl font-display">{t('Contact', 'formTitle')}</h2>
                    <p className="font-body text-brand-text/60 font-medium">{t('Contact', 'formSubtitle')}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="font-body font-bold text-brand-text/70 uppercase tracking-[0.15em] text-xs">
                      {t('Contact', 'formName')}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder={t('Contact', 'formNamePlaceholder')}
                      className="h-14 bg-white/50 backdrop-blur-sm border border-black/5 rounded-[1rem] px-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all text-base text-brand-text placeholder:text-brand-text/30 shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="font-body font-bold text-brand-text/70 uppercase tracking-[0.15em] text-xs">
                      {t('Contact', 'formEmail')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder={t('Contact', 'formEmailPlaceholder')}
                      className="h-14 bg-white/50 backdrop-blur-sm border border-black/5 rounded-[1rem] px-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all text-base text-brand-text placeholder:text-brand-text/30 shadow-sm"
                    />
                    <ValidationError field="email" errors={state.errors} className="font-body text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="subject" className="font-body font-bold text-brand-text/70 uppercase tracking-[0.15em] text-xs">
                      {t('Contact', 'formSubject')}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder={t('Contact', 'formSubjectPlaceholder')}
                      className="h-14 bg-white/50 backdrop-blur-sm border border-black/5 rounded-[1rem] px-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all text-base text-brand-text placeholder:text-brand-text/30 shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="font-body font-bold text-brand-text/70 uppercase tracking-[0.15em] text-xs">
                      {t('Contact', 'formMessage')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder={t('Contact', 'formMessagePlaceholder')}
                      className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[1rem] p-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all resize-none text-base text-brand-text placeholder:text-brand-text/30 shadow-sm"
                    />
                    <ValidationError field="message" errors={state.errors} className="font-body text-red-500 text-sm" />
                  </div>

                  <ValidationError errors={state.errors} className="font-body text-red-500 text-sm" />

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={state.submitting}
                    className="mt-4 py-5 text-lg font-bold bg-primary text-white hover:bg-deep shadow-[0_10px_20px_rgba(0,56,147,0.2)] rounded-2xl transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {state.submitting ? t('Contact', 'formSending') : t('Contact', 'formSend')}
                  </Button>
                </>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.4}>
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.target}
                  rel={item.target === '_blank' ? 'noreferrer' : undefined}
                  className="group bg-white/70 backdrop-blur-md px-6 py-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white flex flex-col items-center text-center hover:shadow-[0_20px_40px_rgba(0,56,147,0.12)] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-5 shadow-sm shrink-0 border border-white/50 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>
                  <h3 className={`${item.color} mb-3 text-xl opacity-90`}>{item.title}</h3>
                  {item.content}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
