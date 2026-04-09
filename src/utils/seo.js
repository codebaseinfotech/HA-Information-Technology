// Get the canonical URL for a given pathname
export const getCanonicalUrl = (pathname) => {
    const base = typeof window !== "undefined" ? window.location.origin : "https://alattastech.com";
    return `${base}${pathname}`;
};

// Get the site URL
export const getSiteUrl = () => {
    return typeof window !== "undefined" ? window.location.origin : "https://alattastech.com";
};

// Company Information
export const COMPANY_INFO = {
    name: "Hamed Alattas Technology",
    fullName: "Hamed Alattas Technology - IT Solutions & Software Development",
    logo: "/logo.png",
    image: "/office.jpg",
    description: "Leading IT solutions and software development company in UAE and India. We provide custom software, web development, mobile apps, and IT consulting services.",
    email: "info@alattastech.com",
    availableLanguage: ["English", "Arabic"],
    phone: {
        uae: "+91-709-685-9504",
        india: "+91-709-685-9504"
    },
    address: {
        streetAddress: "274 Street – Dubai Investment Park – 2",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        postalCode: "00000",
        addressCountry: "AE"
    },
    contactType: "customer service",
    social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://instagram.com/ha_infotech"
    },
    priceRange: "AED 5000 - AED 100000+",
    openingHours: [
        {
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00"
        },
        {
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "14:00"
        }
    ]
};

// Default SEO Configuration
export const DEFAULT_SEO = {
    title: "Hamed Alattas Technology - IT Solutions & Software Development",
    description: "Leading IT solutions and software development company in UAE and India. We provide custom software, web development, mobile apps, cloud hosting, and IT consulting services.",
    keywords: "IT solutions UAE, software development Dubai, web development company, mobile app development, IT consulting, cloud hosting, custom software development, technology solutions India",
    image: COMPANY_INFO.logo,
    type: "website",
    availableLanguage: COMPANY_INFO.availableLanguage
};

// Generate Schema.org Organization markup
export const getOrganizationSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "url": getSiteUrl(),
        "logo": `${getSiteUrl()}${COMPANY_INFO.logo}`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_INFO.phone.uae,
            "contactType": COMPANY_INFO.contactType,
            "areaServed": COMPANY_INFO.address.addressCountry,
            "availableLanguage": COMPANY_INFO.availableLanguage
        },
        "sameAs": [
            COMPANY_INFO.social.linkedin,
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.twitter
        ]
    };
};

// Generate Schema.org LocalBusiness markup
export const getLocalBusinessSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": COMPANY_INFO.name,
        "image": `${getSiteUrl()}${COMPANY_INFO.image}`,
        "url": getSiteUrl(),
        "telephone": COMPANY_INFO.phone.uae,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address.streetAddress,
            "addressLocality": COMPANY_INFO.address.addressLocality,
            "addressRegion": COMPANY_INFO.address.addressRegion,
            "postalCode": COMPANY_INFO.address.postalCode,
            "addressCountry": COMPANY_INFO.address.addressCountry
        },
        "openingHoursSpecification": COMPANY_INFO.openingHours.map(hours => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": hours.dayOfWeek,
            "opens": hours.opens,
            "closes": hours.closes
        })),
        "priceRange": COMPANY_INFO.priceRange
    };
};

// Generate Schema.org Service markup
export const getServiceSchema = (serviceProps) => {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceProps?.serviceType || "Web Development Services",
        "provider": {
            "@type": "Organization",
            "name": COMPANY_INFO.name,
            "url": getSiteUrl()
        },
        "areaServed": {
            "@type": "Country",
            "name": "United Arab Emirates"
        },
        "description": serviceProps?.description || "Custom web development services in UAE including business websites, ecommerce stores, web applications, API integrations, and enterprise CMS development.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "AED",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": serviceProps?.minPrice || "5000",
                "maxPrice": serviceProps?.maxPrice || "100000",
                "priceCurrency": "AED"
            }
        }
    };
};

// Generate Schema.org FAQ markup
export const getFAQSchema = (faqs) => {
    if (!faqs || faqs.length === 0) return null;
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

// Default FAQs fallback
export const DEFAULT_FAQS = [
    {
        question: "What’s the difference between web design and web development?",
        answer: "Web design focuses on visual layout, colors, and typography, while web development handles coding, databases, APIs, and server functionality."
    },
    {
        question: "How long does a web development project take?",
        answer: "A business website typically takes 6–10 weeks, ecommerce stores take 10–16 weeks, and custom web applications may take 3–6 months depending on complexity."
    },
    {
        question: "Do you build Arabic language websites?",
        answer: "Yes, we develop bilingual Arabic and English websites with RTL support, Arabic typography, and localized SEO strategies for UAE markets."
    },
    {
        question: "How much does a website cost in UAE?",
        answer: "Professional websites start from AED 5,000, ecommerce stores range from AED 15,000 to AED 40,000, and enterprise web applications can exceed AED 50,000."
    }
];

// Generate Schema.org SoftwareApplication markup (kept for compatibility)
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
        },
        "availableLanguage": COMPANY_INFO.availableLanguage
    };
};
