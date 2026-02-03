import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact, { SupportSection } from '../components/Contact';
import LocationMapSection from '../components/LocationMapSection';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Compact Version for Contact which often assumes header style */}
            <div className="relative h-[300px] md:h-[400px] bg-[#1a2332] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-14 mb-3 animate-fade-in-up">
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

            {/* Support Section - Only on Contact Page */}
            <SupportSection />

            {/* Location Map Section - Only on Contact Page */}
            <LocationMapSection />

            {/* Reuse Existing Contact Section but remove its padding if needed or let it be */}
            <Contact />
        </div>
    );
};

export default ContactPage;
