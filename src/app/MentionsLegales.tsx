import React from 'react';
import { NavLink } from 'react-router';
import { useLanguage } from './contexts/LanguageContext';
import { MapPin, Mail, Phone, FileText, Shield, User, ArrowLeft } from 'lucide-react';

const ASSOC = {
  name: 'Association Batuku & Cultura Cap-Vert Suisse — Cultura dos PALOP',
  shortName: 'Batuku & Cultura',
  address: "Grand'Rue 36, 1530 Payerne (VD), Suisse",
  che: 'CHE-333.176.096',
  fosc: 'HR01-1006600096',
  statuts: '14.11.2025',
  publication: '18.03.2026',
  email: 'ercelinabatuku11cultura@gmail.com',
  phone1: '079 965 03 54',
  phone2: '079 617 53 87',
  instagram: 'https://instagram.com/as.batuku_et_cultura',
  presidence: 'Correia Garcia Ercelina',
  vicePresidence: 'Mendes Santos Stevens Emilita',
  secretariat: 'Lopes de Oliveira Carla Sofia',
};

export const MentionsLegales = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-brand-bg pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Retour */}
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 text-brand-text/40 hover:text-primary font-body text-sm transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
          {t('Footer', 'home') ?? 'Accueil'}
        </NavLink>

        {/* Titre */}
        <div className="mb-10">
          <span className="inline-block font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange/80 mb-3">
            {t('Footer', 'legalLabel')}
          </span>
          <h1 className="font-display text-primary text-4xl md:text-5xl leading-tight">
            {t('Footer', 'legalTitle')}
          </h1>
        </div>

        <div className="space-y-6">

          {/* Identité légale */}
          <Block icon={<FileText size={16} className="text-primary" />} title={t('Footer', 'legalIdentity')}>
            <Row label={t('Footer', 'legalName')} value={ASSOC.name} />
            <Row label={t('Footer', 'legalForm')} value={t('Footer', 'legalFormValue')} />
            <Row label={t('Footer', 'legalCHE')} value={ASSOC.che} mono />
            <Row label={t('Footer', 'legalFOSC')} value={ASSOC.fosc} mono />
            <Row label={t('Footer', 'legalStatuts')} value={ASSOC.statuts} />
            <Row label={t('Footer', 'legalPublication')} value={ASSOC.publication} />
          </Block>

          {/* Siège social */}
          <Block icon={<MapPin size={16} className="text-orange" />} title={t('Footer', 'legalSiege')}>
            <p className="font-body text-brand-text/70 text-sm leading-relaxed">{ASSOC.address}</p>
          </Block>

          {/* Responsables */}
          <Block icon={<User size={16} className="text-green" />} title={t('Footer', 'legalResponsables')}>
            <Row label={t('Footer', 'legalPresident')} value={ASSOC.presidence} />
            <Row label={t('Footer', 'legalVicePresident')} value={ASSOC.vicePresidence} />
            <Row label={t('Footer', 'legalSecretaire')} value={ASSOC.secretariat} />
          </Block>

          {/* Contact */}
          <Block icon={<Mail size={16} className="text-primary" />} title={t('Footer', 'contact')}>
            <div className="space-y-2">
              <a href={`mailto:${ASSOC.email}`} className="flex items-center gap-2 font-body text-sm text-primary hover:text-primary/70 transition-colors">
                <Mail size={13} className="shrink-0" />{ASSOC.email}
              </a>
              <a href={`tel:+41799650354`} className="flex items-center gap-2 font-body text-sm text-brand-text/60 hover:text-brand-text transition-colors">
                <Phone size={13} className="shrink-0" />{ASSOC.phone1}
              </a>
              <a href={`tel:+41796175387`} className="flex items-center gap-2 font-body text-sm text-brand-text/60 hover:text-brand-text transition-colors">
                <Phone size={13} className="shrink-0" />{ASSOC.phone2}
              </a>
            </div>
          </Block>

          {/* Données personnelles */}
          <Block icon={<Shield size={16} className="text-yellow" />} title={t('Footer', 'legalPrivacy')}>
            <p className="font-body text-brand-text/60 text-sm leading-relaxed">
              {t('Footer', 'legalPrivacyText')}
            </p>
          </Block>

          {/* Propriété intellectuelle */}
          <Block icon={<FileText size={16} className="text-brand-text/40" />} title={t('Footer', 'legalIP')}>
            <p className="font-body text-brand-text/60 text-sm leading-relaxed">
              {t('Footer', 'legalIPText')}
            </p>
          </Block>

        </div>

        <p className="mt-12 font-body text-brand-text/30 text-xs text-center">
          {t('Footer', 'rights')}
        </p>
      </div>
    </div>
  );
};

const Block = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-black/5">
      {icon}
      <h2 className="font-body font-bold text-brand-text text-sm uppercase tracking-wider">{title}</h2>
    </div>
    <div className="space-y-2">{children}</div>
  </div>
);

const Row = ({ label, value, mono }: { label: string; value: string; mono?: boolean }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
    <span className="font-body text-brand-text/40 text-xs uppercase tracking-wider shrink-0 w-36">{label}</span>
    <span className={`font-body text-brand-text/80 text-sm ${mono ? 'font-mono' : ''}`}>{value}</span>
  </div>
);
