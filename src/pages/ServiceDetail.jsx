import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceById, getAllServices } from '../data/services';
import { ChevronRight, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { getServiceSchema } from '../utils/seo';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = getServiceById(slug);
    const allServices = getAllServices();
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <SEO
                title={`${service.title} - IT Services | Hamed Alattas Technology`}
                description={service.description}
                keywords={`${service.title}, ${service.title} UAE, ${service.title} Dubai, IT services, technology solutions, ${service.title} India, professional IT services`}
                url={`/services/${service.id}`}
                schema={getServiceSchema(service)}
            />
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] bg-[#1a2332] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Content */}
                <div className={`container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-14 mb-3 animate-fade-in-up">
                        {service.title}
                    </h1>

                    {/* Breadcrumb */}
                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">{service.title}</span>
                    </div>
                </div>

                {/* Network Graphic Overlay (Right Side) */}
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,0 L100,0 L100,100 L50,100 z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 xl:px-12 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Service Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Dynamic Sections Rendering */}
                        {service.content.sections ? (
                            <div className="space-y-12">
                                {service.content.sections.map((section, index) => {
                                    switch (section.type) {
                                        case 'text_header':
                                            return (
                                                <div key={index}>
                                                    <h2 className="text-3xl font-bold text-[#1a2332] mb-6">{section.title}</h2>
                                                    <div className="prose prose-lg text-gray-600 max-w-none text-justify leading-relaxed">
                                                        {section.content}
                                                    </div>
                                                </div>
                                            );
                                        case 'text':
                                            return (
                                                <div key={index}>
                                                    <h3 className="text-2xl font-bold text-[#1a2332] mb-4">{section.title}</h3>
                                                    <div className="prose prose-lg text-gray-600 max-w-none text-justify leading-relaxed">
                                                        {section.content}
                                                    </div>
                                                </div>
                                            );
                                        case 'check_list':
                                            return (
                                                <div key={index}>
                                                    <h3 className="text-2xl font-bold text-[#1a2332] mb-6">{section.title}</h3>
                                                    <div className="space-y-6">
                                                        {section.items.map((item, idx) => (
                                                            <div key={idx} className="flex gap-4">
                                                                <div className="flex-shrink-0 mt-1">
                                                                    {/* Check Icon */}
                                                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                                                    <p className="text-gray-600 leading-relaxed text-justify">
                                                                        {item.description}
                                                                    </p>
                                                                    {/* Nested Features/Sub-items */}
                                                                    {item.features && (
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                                                            {item.features.map((feature, fIdx) => (
                                                                                <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md border border-[#e5e5e5]">
                                                                                    <div className="w-2 h-2 rounded-full bg-[#1a2332]"></div>
                                                                                    {feature}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        case 'image_text':
                                            return (
                                                <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                                                    <div className="md:w-1/2">
                                                        <h3 className="text-2xl font-bold text-[#1a2332] mb-4">{section.title}</h3>
                                                        <p className="text-gray-600 leading-relaxed text-justify">
                                                            {section.content}
                                                        </p>
                                                    </div>
                                                    <div className="md:w-1/2">
                                                        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                                            <img
                                                                src={section.image}
                                                                alt={section.title}
                                                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        ) : (
                            /* Fallback for legacy content structure (Software Development etc) */
                            <div className="space-y-12">
                                {/* Introduction */}
                                <div>
                                    <h2 className="text-3xl font-bold text-[#1a2332] mb-6">Introduction</h2>
                                    <div className="prose prose-lg text-gray-600 max-w-none text-justify whitespace-pre-line leading-relaxed">
                                        {service.content.introduction}
                                    </div>
                                </div>

                                {/* Approach Section */}
                                {service.content.approach && service.content.approach.length > 0 && (
                                    <div>
                                        <h2 className="text-3xl font-bold text-[#1a2332] mb-8">Our Approach</h2>
                                        <div className="space-y-8">
                                            {service.content.approach.map((item, index) => (
                                                <div key={index} className="flex gap-4">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                                        <p className="text-gray-600 leading-relaxed text-justify">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Call to Action Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mt-8">
                            <h3 className="text-xl font-bold text-[#1a2332] mb-3">Get in touch, have any questions?</h3>
                            <p className="text-gray-700 mb-6">Innovative, tailored solutions designed for seamless integration and highly effective {service.title.toLowerCase()} processes.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
                                Chat with us <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-[#1a2332]">All Services lists</h3>

                            <div className="space-y-1">
                                {allServices.map((s) => (
                                    <Link
                                        key={s.id}
                                        to={`/services/${s.id}`}
                                        className={`block px-4 py-3 rounded-lg transition-all duration-300 border-b border-gray-100 last:border-0 ${slug === s.id
                                            ? 'bg-blue-50 text-blue-700 pl-6 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50 hover:pl-6'
                                            }`}
                                    >
                                        {s.title}
                                    </Link>
                                ))}
                            </div>

                            {/* Contact Widget */}
                            <div className="mt-10 bg-[#1a2332] p-6 rounded-xl text-white text-center">
                                <h4 className="font-bold text-xl mb-4">Need Help?</h4>
                                <p className="text-blue-200 mb-6 text-sm">Contact our experts for a detailed consultation on your project.</p>
                                <a href="tel:+1234567890" className="inline-block bg-[#10B981] text-white px-6 py-2 rounded-full font-bold hover:bg-[#059669] transition-colors">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
