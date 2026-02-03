import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const services = [
        {
            title: 'Software Development',
            description: 'Custom software solutions tailored to meet your unique business requirements.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="12" width="48" height="40" rx="2" stroke="#3B82F6" strokeWidth="2" fill="#EFF6FF" />
                    <rect x="12" y="16" width="40" height="4" fill="#3B82F6" />
                    <path d="M20 28L26 34L20 40" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="30" y1="28" x2="30" y2="40" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                    <line x1="34" y1="28" x2="34" y2="40" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            link: '/services/software-development'
        },
        {
            title: 'Website Designing & Development',
            description: 'Creating engaging, responsive Web that drive business success.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="12" width="48" height="40" rx="2" stroke="#F59E0B" strokeWidth="2" fill="#FEF3C7" />
                    <rect x="8" y="12" width="48" height="8" fill="#F59E0B" rx="2" />
                    <rect x="16" y="28" width="12" height="16" fill="#F59E0B" opacity="0.5" />
                    <rect x="32" y="28" width="16" height="8" fill="#3B82F6" opacity="0.5" />
                    <rect x="32" y="38" width="16" height="6" fill="#10B981" opacity="0.5" />
                </svg>
            ),
            link: '/services/website-development'
        },
        {
            title: 'B2B, B2C & E-Commerce Development',
            description: 'Innovative e-commerce solutions for seamless business.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="12" y="16" width="40" height="32" rx="2" stroke="#EF4444" strokeWidth="2" fill="#FEE2E2" />
                    <rect x="12" y="16" width="40" height="6" fill="#EF4444" />
                    <path d="M24 32L28 36L24 40M36 32H44" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="26" cy="26" r="2" fill="#EF4444" />
                    <rect x="30" y="24" width="8" height="4" fill="#EF4444" />
                </svg>
            ),
            link: '/services/ecommerce'
        },
        {
            title: 'Mobile App Development',
            description: 'High-quality mobile applications designed for optimal user experience.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="20" y="8" width="24" height="48" rx="4" stroke="#10B981" strokeWidth="2" fill="#D1FAE5" />
                    <rect x="24" y="12" width="16" height="2" rx="1" fill="#10B981" />
                    <rect x="24" y="16" width="16" height="32" fill="#10B981" opacity="0.3" />
                    <circle cx="32" cy="52" r="2" fill="#10B981" />
                    <path d="M28 28L32 32L28 36" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            link: '/services/mobile-app'
        },
        {
            title: 'Domain Registrations',
            description: 'Secure your online presence with reliable domain registration services.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="16" y="12" width="32" height="40" rx="2" stroke="#8B5CF6" strokeWidth="2" fill="#F3E8FF" />
                    <line x1="16" y1="20" x2="48" y2="20" stroke="#8B5CF6" strokeWidth="2" />
                    <rect x="20" y="26" width="24" height="3" fill="#8B5CF6" opacity="0.5" />
                    <rect x="20" y="32" width="24" height="3" fill="#8B5CF6" opacity="0.5" />
                    <rect x="20" y="38" width="16" height="3" fill="#8B5CF6" opacity="0.5" />
                </svg>
            ),
            link: '/services/domain-registration'
        },
        {
            title: 'Windows & Linux Web Hosting',
            description: 'Robust and scalable web hosting solutions for Windows and Linux.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="16" y="20" width="32" height="8" rx="1" stroke="#3B82F6" strokeWidth="2" fill="#DBEAFE" />
                    <rect x="16" y="32" width="32" height="8" rx="1" stroke="#3B82F6" strokeWidth="2" fill="#DBEAFE" />
                    <rect x="16" y="44" width="32" height="8" rx="1" stroke="#3B82F6" strokeWidth="2" fill="#DBEAFE" />
                    <circle cx="20" cy="24" r="1.5" fill="#10B981" />
                    <circle cx="20" cy="36" r="1.5" fill="#10B981" />
                    <circle cx="20" cy="48" r="1.5" fill="#10B981" />
                </svg>
            ),
            link: '/services/web-hosting'
        },
        {
            title: 'IT Infrastructure',
            description: 'Comprehensive IT infrastructure services to support your business operations.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="12" y="20" width="40" height="24" rx="2" stroke="#6366F1" strokeWidth="2" fill="#E0E7FF" />
                    <rect x="20" y="28" width="6" height="8" fill="#6366F1" opacity="0.5" />
                    <rect x="29" y="28" width="6" height="8" fill="#6366F1" opacity="0.5" />
                    <rect x="38" y="28" width="6" height="8" fill="#6366F1" opacity="0.5" />
                    <circle cx="16" cy="24" r="1.5" fill="#10B981" />
                    <circle cx="20" cy="24" r="1.5" fill="#EF4444" />
                </svg>
            ),
            link: '/services/it-infrastructure'
        },
        {
            title: 'Access Controls',
            description: 'Advanced access control systems for enhanced security and management.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="20" y="28" width="24" height="20" rx="2" stroke="#EC4899" strokeWidth="2" fill="#FCE7F3" />
                    <circle cx="32" cy="20" r="8" stroke="#EC4899" strokeWidth="2" fill="#FCE7F3" />
                    <circle cx="32" cy="38" r="3" fill="#EC4899" />
                    <rect x="30" y="38" width="4" height="6" fill="#EC4899" />
                </svg>
            ),
            link: '/services/access-control'
        },
        {
            title: 'Security Solutions',
            description: 'Cutting-edge security solutions to protect your business and data.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <path d="M32 12L16 20V32C16 42 24 50 32 52C40 50 48 42 48 32V20L32 12Z" stroke="#DC2626" strokeWidth="2" fill="#FEE2E2" />
                    <path d="M26 32L30 36L38 28" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            link: '/services/security'
        },
        {
            title: 'Maintenance Contracts',
            description: 'Reliable maintenance contracts ensuring smooth and uninterrupted operations.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <path d="M32 12L20 24V48H44V24L32 12Z" stroke="#059669" strokeWidth="2" fill="#D1FAE5" />
                    <rect x="28" y="40" width="8" height="8" fill="#059669" />
                    <rect x="26" y="28" width="5" height="5" fill="#059669" opacity="0.5" />
                    <rect x="33" y="28" width="5" height="5" fill="#059669" opacity="0.5" />
                </svg>
            ),
            link: '/services/maintenance'
        },
        {
            title: 'Telephone PABX Solutions',
            description: 'Efficient and scalable PABX solutions for seamless communication.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <path d="M20 18C20 16 21 14 23 14H41C43 14 44 16 44 18V46C44 48 43 50 41 50H23C21 50 20 48 20 46V18Z" stroke="#F59E0B" strokeWidth="2" fill="#FEF3C7" />
                    <rect x="26" y="20" width="12" height="8" fill="#F59E0B" opacity="0.5" />
                    <circle cx="26" cy="34" r="2" fill="#F59E0B" />
                    <circle cx="32" cy="34" r="2" fill="#F59E0B" />
                    <circle cx="38" cy="34" r="2" fill="#F59E0B" />
                </svg>
            ),
            link: '/services/pabx'
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 px-10 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4">
                        <span className="text-green-600 font-bold text-sm tracking-wider">WHAT WE OFFER</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        It <span className="text-blue-600">Service</span> Refers To The<br />
                        Provision Of Support
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
                        We use IEEE Standards on Software Development, as well as our own standards, templates and procedures resulting from our vast experience in the field, as the basis for our approach to software development. This ensures that systems produced by we are one of a high quality and meet the most demanding business standards.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 min-h-[56px]">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                                {service.description}
                            </p>

                            {/* Read More Link */}
                            <Link
                                to={service.link}
                                className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm md:text-base group-hover:text-blue-600 transition-colors duration-300"
                            >
                                Read More
                                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
