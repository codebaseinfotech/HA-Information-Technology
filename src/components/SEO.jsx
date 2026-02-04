import React from 'react';
import { Helmet } from 'react-helmet';
import { getCanonicalUrl, getSiteUrl, COMPANY_INFO, DEFAULT_SEO } from '../utils/seo';

const SEO = ({
    title = DEFAULT_SEO.title,
    description = DEFAULT_SEO.description,
    keywords = DEFAULT_SEO.keywords,
    image = DEFAULT_SEO.image,
    url = '',
    type = DEFAULT_SEO.type,
    schema = null,
    robots = 'index, follow',
    author = COMPANY_INFO.name
}) => {
    const canonicalUrl = getCanonicalUrl(url);
    const fullImage = image.startsWith('http') ? image : `${getSiteUrl()}${image}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Tags (Facebook, LinkedIn) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={COMPANY_INFO.name} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:site" content={COMPANY_INFO.social.twitter} />
            <meta name="twitter:creator" content={COMPANY_INFO.social.twitter} />

            {/* Additional Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
