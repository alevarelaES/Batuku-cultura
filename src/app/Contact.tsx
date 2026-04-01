import React from 'react';
import { FadeIn } from './components/FadeIn';
import { Button } from './components/Button';
import { MapPin, Mail, Phone, Instagram, ExternalLink } from 'lucide-react';
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
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: <MapPin size={28} />,
      title: t('Contact', 'addressLabel'),
      color: 'text-primary',
      bg: 'bg-primary/10',
      borderColor: 'border-primary',
      content: (
        <div className="font-body text-text/80 font-medium text-center leading-relaxed">
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
      borderColor: 'border-accent',
      content: (
        <a
          href={`mailto:${ASSOCIATION_CONTACT.email}`}
          className="font-body text-accent/80 font-medium text-center hover:text-accent transition-colors break-all text-sm leading-relaxed"
        >
          {ASSOCIATION_CONTACT.email}
        </a>
      ),
    },
    {
      icon: <Phone size={28} />,
      title: t('Contact', 'phoneLabel'),
      color: 'text-nature',
      bg: 'bg-nature/10',
      borderColor: 'border-nature',
      content: (
        <div className="flex flex-col items-center gap-1">
          <a
            href={`tel:${ASSOCIATION_CONTACT.phone1Href}`}
            className="font-body text-nature/80 font-medium text-center hover:text-nature transition-colors tracking-widest"
          >
            {ASSOCIATION_CONTACT.phone1}
          </a>
          <a
            href={`tel:${ASSOCIATION_CONTACT.phone2Href}`}
            className="font-body text-nature/80 font-medium text-center hover:text-nature transition-colors tracking-widest"
          >
            {ASSOCIATION_CONTACT.phone2}
          </a>
        </div>
      ),
    },
    {
      icon: <Instagram size={28} />,
      title: t('Contact', 'instagramLabel'),
      color: 'text-deep',
      bg: 'bg-deep/10',
      borderColor: 'border-deep',
      content: (
        <a
          href={ASSOCIATION_CONTACT.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="font-body text-deep/70 font-medium text-center hover:text-deep transition-colors flex items-center gap-1.5"
        >
          {ASSOCIATION_CONTACT.instagram}
          <ExternalLink size={12} className="shrink-0 opacity-60" />
        </a>
      ),
    },
  ];

  return (
    <div className="w-full bg-brand-bg min-h-screen relative overflow-hidden">
      <PatternBg className="text-primary opacity-5 fixed inset-0 z-0" />
      <CapeVerdeStars className="absolute -top-[200px] -right-[200px] text-accent opacity-10 w-[800px] h-[800px] pointer-events-none z-0 animate-[spin_100s_linear_infinite]" />
      <CapeVerdeIslands className="absolute top-20 right-10 text-primary opacity-[0.03] w-[500px] h-[300px] pointer-events-none z-0 rotate-[-15deg]" />

      <section className="py-section px-4 md:px-xl max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <h1 className="text-primary text-center mb-16 text-6xl drop-shadow-sm">
            {t('Contact', 'pageTitle')}
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.2}>
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white/80 backdrop-blur-md p-8 rounded-[30px] shadow-xl border-t-4 ${item.borderColor} flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all`}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-5 shadow-inner shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <h3 className={`${item.color} mb-3 text-xl`}>{item.title}</h3>
                  {item.content}
                </div>
              ))}
            </div>

            {/* Join card */}
            <div className="mt-12 bg-deep rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl border-4 border-deep">
              <PatternBg className="text-white opacity-10" />
              <CarnivalMask className="absolute -top-10 -right-10 text-accent opacity-20 w-64 h-64 rotate-[20deg] pointer-events-none" />
              <Confetti className="absolute inset-0 text-white opacity-20 pointer-events-none" />

              <div className="relative z-10 text-center">
                <h2 className="text-accent mb-6 text-5xl leading-tight drop-shadow-md">
                  {t('Contact', 'joinTitle')}
                </h2>
                <p className="font-body opacity-90 mb-10 text-xl font-medium">
                  {t('Contact', 'joinText')}
                </p>
                <Button className="bg-accent text-deep hover:bg-white w-full py-5 text-xl shadow-[0_10px_20px_rgba(245,184,0,0.3)]">
                  {t('Contact', 'joinBtn')}
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <form className="bg-white/90 backdrop-blur-md p-10 md:p-14 rounded-[40px] shadow-2xl flex flex-col gap-8 border-t-8 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

              <h2 className="text-deep mb-2 text-4xl">{t('Contact', 'formTitle')}</h2>
              <p className="font-body text-text opacity-70 mb-4 font-medium">
                {t('Contact', 'formSubtitle')}
              </p>

              <div className="flex flex-col gap-3">
                <label className="font-body font-bold text-deep uppercase tracking-wide text-sm">
                  {t('Contact', 'formName')}
                </label>
                <input
                  type="text"
                  placeholder={t('Contact', 'formNamePlaceholder')}
                  className="h-14 bg-brand-bg border-2 border-transparent rounded-2xl px-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-body font-bold text-deep uppercase tracking-wide text-sm">
                  {t('Contact', 'formEmail')}
                </label>
                <input
                  type="email"
                  placeholder={t('Contact', 'formEmailPlaceholder')}
                  className="h-14 bg-brand-bg border-2 border-transparent rounded-2xl px-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-body font-bold text-deep uppercase tracking-wide text-sm">
                  {t('Contact', 'formSubject')}
                </label>
                <input
                  type="text"
                  placeholder={t('Contact', 'formSubjectPlaceholder')}
                  className="h-14 bg-brand-bg border-2 border-transparent rounded-2xl px-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-body font-bold text-deep uppercase tracking-wide text-sm">
                  {t('Contact', 'formMessage')}
                </label>
                <textarea
                  rows={6}
                  placeholder={t('Contact', 'formMessagePlaceholder')}
                  className="bg-brand-bg border-2 border-transparent rounded-2xl p-6 font-body font-medium focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all resize-none text-lg"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="mt-4 py-5 text-xl bg-primary text-white hover:bg-deep shadow-[0_10px_20px_rgba(232,98,10,0.3)]"
              >
                {t('Contact', 'formSend')}
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};