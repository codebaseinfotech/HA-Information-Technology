// Get the canonical URL for a given pathname
export const getCanonicalUrl = (pathname) => {
    const base = typeof window !== "undefined" ? window.location.origin : "https://ha-information-technology.vercel.app";
    return `${base}${pathname}`;
};

// Get the site URL
export const getSiteUrl = () => {
    return typeof window !== "undefined" ? window.location.origin : "https://ha-information-technology.vercel.app";
};

// Company Information
export const COMPANY_INFO = {
    name: "HA Information Technology",
    fullName: "HA Information Technology - IT Solutions & Software Development",
    logo: "/logo.png", // Update with actual logo path
    description: "Leading IT solutions and software development company in UAE and India. We provide custom software, web development, mobile apps, and IT consulting services.",
    email: "info@alattastech.com",
    phone: {
        uae: "+971 523003423",
        india: "+91-7096859504"
    },
    address: {
        uae: "Dubai, United Arab Emirates",
        india: "India"
    },
    social: {
        facebook: "https://facebook.com/ha-information-technology", // Update with actual
        twitter: "@HAInfoTech", // Update with actual
        linkedin: "https://linkedin.com/company/ha-information-technology", // Update with actual
        instagram: "https://instagram.com/ha_infotech" // Update with actual
    }
};

// Default SEO Configuration
export const DEFAULT_SEO = {
    title: "HA Information Technology - IT Solutions & Software Development",
    description: "Leading IT solutions and software development company in UAE and India. We provide custom software, web development, mobile apps, cloud hosting, and IT consulting services.",
    keywords: "IT solutions UAE, software development Dubai, web development company, mobile app development, IT consulting, cloud hosting, custom software development, technology solutions India",
    image: COMPANY_INFO.logo,
    type: "website"
};

// Generate Schema.org Organization markup
export const getOrganizationSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "url": getSiteUrl(),
        "logo": `${getSiteUrl()}${COMPANY_INFO.logo}`,
        "description": COMPANY_INFO.description,
        "email": COMPANY_INFO.email,
        "telephone": COMPANY_INFO.phone.uae,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
        },
        "sameAs": [
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.twitter,
            COMPANY_INFO.social.linkedin,
            COMPANY_INFO.social.instagram
        ]
    };
};

// Generate Schema.org LocalBusiness markup
export const getLocalBusinessSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": COMPANY_INFO.name,
        "image": `${getSiteUrl()}${COMPANY_INFO.logo}`,
        "url": getSiteUrl(),
        "telephone": COMPANY_INFO.phone.uae,
        "email": COMPANY_INFO.email,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.2048",
            "longitude": "55.2708"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.linkedin
        ]
    };
};

// Generate Schema.org Service markup
export const getServiceSchema = (service) => {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": COMPANY_INFO.name,
            "url": getSiteUrl()
        },
        "areaServed": ["AE", "IN"],
        "serviceType": service.title
    };
};

// Generate Schema.org SoftwareApplication markup
export const getSoftwareSchema = (solution) => {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": solution.title,
        "description": solution.description,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Windows, iOS, Android",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "provider": {
            "@type": "Organization",
            "name": COMPANY_INFO.name,
            "url": getSiteUrl()
        }
    };
};
