import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.batuku-cultura.ch';
const SITE_NAME = 'Batuku & Cultura';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo/logo1.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  lang?: string;
}

export const SEO = ({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  lang = 'fr',
}: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path ? `/${path}` : ''}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* hreflang — même URL pour les 3 langues */}
      <link rel="alternate" hreflang="fr" href={canonical} />
      <link rel="alternate" hreflang="pt" href={canonical} />
      <link rel="alternate" hreflang="en" href={canonical} />
      <link rel="alternate" hreflang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
