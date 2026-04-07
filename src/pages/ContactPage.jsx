import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact, { SupportSection } from '../components/Contact';
import LocationMapSection from '../components/LocationMapSection';
import SEO from '../components/SEO';
import { getLocalBusinessSchema } from '../utils/seo';

const ContactPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <SEO
                title="Contact Us - Hamed Alattas Technology | Get in Touch"
                description="Contact Hamed Alattas Technology for IT solutions and software development services. Reach us in UAE (+971 551882023) or India (+91-7096859504). Email: info@alattastech.com"
                keywords="contact IT company UAE, software development inquiry Dubai, IT support contact, technology consultation UAE, contact Hamed Alattas Technology, IT services inquiry, get quote software development, contact web development company, IT company Dubai contact, software company contact India"
                url="/contact"
                schema={getLocalBusinessSchema()}
            />
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] bg-[#1a2332] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className={`container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-14 mb-4 leading-tight">
                        Contact Us
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">Contact</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Support Section */}
            <SupportSection />

            {/* Location Map Section */}
            <LocationMapSection />

            {/* Contact Form - WITHOUT Image */}
            <Contact hideImage={true} />
        </div>
    );
};

export default ContactPage;
