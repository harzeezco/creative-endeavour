import type { Metadata } from 'next';

import config from '../../config';

export const getSEOTags = ({
  canonicalUrlRelative,
  description,
  extraTags,
  keywords,
  openGraph,
  title,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
} = {}) => ({
  // up to 50 characters (what does your app do for the user?) > your main should be here
  title: title || config.appName,
  // up to 160 characters (how does your app help the user?)
  description: description || config.appDescription,
  // some keywords separated by commas. by default it will be your app name
  keywords: keywords || [config.appName],
  applicationName: config.appName,
  // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://${config.domainName}/`,
  ),

  openGraph: {
    title: openGraph?.title || config.appName,
    description: openGraph?.description || config.appDescription,
    url: openGraph?.url || `https://${config.domainName}/`,
    siteName: openGraph?.title || config.appName,
    locale: ['en_US', 'Arabic'],
    type: 'website',
  },

  twitter: {
    title: openGraph?.title || config.appName,
    description: openGraph?.description || config.appDescription,
    card: 'summary_large_image',
    creator: '@sanaam.sa',
  },

  ...(canonicalUrlRelative && {
    alternates: { canonical: canonicalUrlRelative },
  }),
  ...extraTags,
});

export const renderSchemaTags = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'SoftwareApplication',
        name: config.appName,
        description: config.appDescription,
        image: `https://${config.domainName}/icon.png`,
        url: `https://${config.domainName}/`,
        author: {
          '@type': 'COmpany',
          name: 'Sanaam',
        },
        datePublished: '2023-08-01',
        applicationCategory: 'EducationalApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '12',
        },
      }),
    }}
    type='application/ld+json'
  />
);
