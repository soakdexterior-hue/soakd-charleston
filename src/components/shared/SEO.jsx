import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://soakdcharleston.com';
const DEFAULT_IMAGE = 'https://media.base44.com/images/public/69bdabf65e992908c9993001/e8ae08491_Soakdlogo2.jpg';

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  schema = null,
}) {
  const fullCanonical = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Soakd Window Cleaning" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}