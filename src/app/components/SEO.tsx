import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.batuku-cultura.ch';
const SITE_NAME = 'Batuku & Cultura';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo/logo1.jpg`;
const DEFAULT_OG_IMAGE_ALT = 'Logo Batuku & Cultura — Association Cap-Verdienne Suisse Romande';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
  lang?: string;
  breadcrumbs?: BreadcrumbItem[];
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}

export const SEO = ({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  lang = 'fr',
  breadcrumbs,
  pageType = 'WebPage',
}: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path ? `/${path}` : ''}`;

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: fullTitle,
    description,
    url: canonical,
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo/logo_icon.png` },
    },
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            ...(b.path && { item: `${SITE_URL}/${b.path}` }),
          })),
        ],
      }
    : null;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* hreflang */}
      <link rel="alternate" hreflang="fr" href={canonical} />
      <link rel="alternate" hreflang="pt" href={canonical} />
      <link rel="alternate" hreflang="en" href={canonical} />
      <link rel="alternate" hreflang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* JSON-LD WebPage */}
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>

      {/* JSON-LD BreadcrumbList */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};
