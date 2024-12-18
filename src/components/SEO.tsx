import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const SEO = ({ 
  title, 
  description, 
  image = '/og-image.png',
  type = 'website',
  keywords = 'business solutions egypt, شركة برمجيات مصر, business efficiency middle east, workflow automation egypt, الشرق الأوسط تحسين الأعمال, egypt business automation, تطوير الأعمال مصر, business operations MENA, حلول الشركات القاهرة, alexandria business solutions',
  canonicalUrl
}: SEOProps) => {
  const siteUrl = window.location.origin;
  const url = canonicalUrl || window.location.href;

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "illustraV",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.svg`,
    "description": "Leading business operations solutions company in Egypt and MENA region. Trusted by Egyptian and Middle Eastern businesses for efficiency improvement and cost reduction.",
    "slogan": "Transforming Business Operations in Egypt & MENA",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-155-221-0065",
      "contactType": "customer service",
      "email": "info@illustraV.com",
      "availableLanguage": ["English", "Arabic"],
      "areaServed": ["Egypt", "Middle East", "North Africa"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Egypt",
      "addressLocality": "Alexandria"
    },
    "sameAs": [
      "https://www.linkedin.com/company/illustrav",
      "https://twitter.com/illustrav"
    ]
  };

  // Structured data for service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Operations Solutions in Egypt & MENA",
    "provider": {
      "@type": "Organization",
      "name": "illustraV"
    },
    "description": "Comprehensive business efficiency solutions tailored for Egyptian and MENA region businesses, including workflow optimization and process automation.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Egypt"
      },
      {
        "@type": "GeoCircle",
        "name": "Middle East and North Africa",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "30.0444",
          "longitude": "31.2357"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Solutions for MENA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Process Automation for Egyptian Businesses",
            "description": "Reduce operational costs by 60% through smart automation tailored for MENA businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Middle East Workflow Optimization",
            "description": "Streamline operations and improve efficiency by 40% with localized solutions"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${title} | illustraV - Leading Business Solutions in Egypt & MENA`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="illustraV" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={url} />

      {/* Region and Language Tags */}
      <meta name="geo.region" content="EG" />
      <meta name="geo.position" content="30.0444;31.2357" />
      <meta name="geo.placename" content="Egypt" />
      <meta httpEquiv="content-language" content="en-EG, ar-EG" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={`${title} | illustraV - Business Solutions Egypt`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="illustraV" />
      <meta property="og:locale" content="en_EG" />
      <meta property="og:locale:alternate" content="ar_EG" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | illustraV - Egypt`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};