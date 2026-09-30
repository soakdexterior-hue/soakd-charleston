import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://soakdcharleston.com';
// Social share image: Base44's 1200x630 crop of the wide logo (house standard).
const DEFAULT_IMAGE = 'https://media.base44.com/images/public/69bdabf65e992908c9993001/e35df7792_Soakdlogo1.jpg/v1/fill/w_1200,h_630/e35df7792_Soakdlogo1.jpg';

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