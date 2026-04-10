import React, { useEffect, useRef, useState } from 'react';
import aboutMain1 from '../assets/images/unsplash/about-main-1.jpg';
import aboutMain2 from '../assets/images/unsplash/about-main-2.jpg';
import aboutMain3 from '../assets/images/unsplash/about-main-3.jpg';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const [featuresVisible, setFeaturesVisible] = useState(false);
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            observerOptions
        );

        const statsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsVisible(true);
                }
            },
            observerOptions
        );

        const featuresObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFeaturesVisible(true);
                }
            },
            observerOptions
        );

        if (sectionRef.current) sectionObserver.observe(sectionRef.current);
        if (statsRef.current) statsObserver.observe(statsRef.current);
        if (featuresRef.current) featuresObserver.observe(featuresRef.current);

        return () => {
            if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
            if (statsRef.current) statsObserver.unobserve(statsRef.current);
            if (featuresRef.current) featuresObserver.unobserve(featuresRef.current);
        };
    }, []);

    const stats = [
        {
            icon: '👥',
            number: '35 +',
            label: 'Certified Engineers',
            color: 'from-blue-400 to-blue-600'
        },
        {
            icon: '📅',
            number: '200 +',
            label: 'Projects Delivered',
            color: 'from-purple-400 to-purple-600'
        },
        {
            icon: '🏢   ',
            number: '7 +',
            label: 'Years in UAE Market',
            color: 'from-green-400 to-green-600'
        },
        {
            icon: '🤝',
            number: '95 %',
            label: 'Client Retention Rate',
            color: 'from-pink-400 to-pink-600'
        }
    ];

    const features = [
        {
            number: '01',
            title: 'Understanding not only the IT requirements of the customers but the business process involved'
        },
        {
            number: '02',
            title: 'Multi-level testing of the solution prior during and post deployment'
        },
        {
            number: '03',
            title: 'Continuous training programmers on the latest technologies'
        },
        {
            number: '04',
            title: 'Managing projects according to international project management methods'
        },
        {
            number: '05',
            title: 'Ensuring professional customer support and warranty services'
        }
    ];

    return (
        <section id="about" className="py-12 md:py-20 lg:py-24 px-4 xl:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#1A3C8B]/20 via-blue-400/10 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>

                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-700">
                            <img
                                src={aboutMain1}
                                alt="Business Analytics Strategy - Hamed Alattas Technology"
                                width="800"
                                height="450"
                                loading="lazy"
                                className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C8B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#1A3C8B] to-blue-600 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700 animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700 delay-100 animate-bounce"></div>
                    </div>
                    <div className={`space-y-4 md:space-y-6 order-1 lg:order-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        <div className="inline-block animate-fade-in">
                            <span className="text-green-600 font-bold text-xs md:text-sm tracking-wider uppercase bg-green-50 px-4 py-2 rounded-full">WHO WE ARE ?</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
                            Hamed Alattas Technology — UAE's Trusted Partner for <br className="hidden md:block" />
                            <span className="text-[#1A3C8B] relative inline-block">
                                Custom Software,
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A3C8B] to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                            </span> AI & Digital Innovation
                        </h2>
                        <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                            <p className="transform hover:translate-x-2 transition-transform duration-300">
                                Every day your business runs on outdated systems, disconnected tools, or a website that fails to convert —
                            </p>
                            <p className="transform hover:translate-x-2 transition-transform duration-300 delay-75">
                                you are losing revenue you should already have. We design and build custom software, intelligent AI-powered automation, enterprise-grade e-commerce platforms, and high-performance digital infrastructure specifically engineered for UAE businesses
                            </p>
                            <p className="transform hover:translate-x-2 transition-transform duration-300 delay-75">
                                Our team of certified engineers delivers solutions that are measurably faster, more secure, and more scalable than anything off-the-shelf can offer.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={statsRef} className={`mb-16 md:mb-20 transition-all duration-1000 delay-300 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="bg-gradient-to-r from-[#1A3C8B] via-[#1A3C8B]/90 to-[#1A3C8B]/80 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '40px 40px'
                            }}></div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center text-center group transform hover:scale-110 transition-all duration-500 ${statsVisible ? 'animate-fade-in' : 'opacity-0'}`}
                                    style={{
                                        animationDelay: `${index * 150}ms`,
                                        transitionDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:shadow-2xl group-hover:rotate-12 transition-all duration-500">
                                        <span className="text-2xl md:text-3xl transform group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                                    </div>
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                                    <div className="text-xs md:text-sm lg:text-base text-blue-100 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-10 md:mb-12">
                        <div className="inline-block mb-3 md:mb-4">
                            <span className="text-gray-600 font-semibold text-xs md:text-sm tracking-wider uppercase bg-gray-100 px-4 py-2 rounded-full">INSIDE VISION TECHNOLOGIES</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight px-4">
                            The Power Of <span className="text-[#1A3C8B] relative inline-block">
                                Software
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="#1A3C8B" strokeWidth="2" opacity="0.3" />
                                </svg>
                            </span><br className="hidden md:block" />
                            The Simplicity Of Solutions
                        </h2>
                    </div>

                    <div ref={featuresRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <div className={`transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-6 md:mb-8">
                                High Standard in Development & Services
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`flex gap-3 md:gap-4 group hover:bg-gray-50 p-3 md:p-4 rounded-xl transition-all duration-500 transform hover:translate-x-4 hover:shadow-md ${featuresVisible ? 'animate-fade-in' : 'opacity-0'}`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#1A3C8B] to-[#1A3C8B]/80 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                                {feature.number}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base group-hover:text-[#1A3C8B] transition-colors duration-300">
                                                {feature.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`grid grid-cols-2 gap-4 md:gap-6 transition-all duration-1000 delay-200 ${featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                            <div className="col-span-2 relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C8B]/20 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                                <img
                                    src={aboutMain2}
                                    alt="Team Collaboration at Hamed Alattas Technology"
                                    width="800"
                                    height="250"
                                    loading="lazy"
                                    className="w-full h-[200px] md:h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="col-span-2 relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-500 delay-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C8B]/20 to-[#1A3C8B]/10 group-hover:scale-105 transition-transform duration-700"></div>
                                <img
                                    src={aboutMain3}
                                    alt="Software Development Workspace at Hamed Alattas Technology"
                                    width="800"
                                    height="250"
                                    loading="lazy"
                                    className="w-full h-[200px] md:h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default About;
