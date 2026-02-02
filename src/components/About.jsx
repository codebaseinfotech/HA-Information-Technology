import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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

    const stats = [
        {
            icon: '🏢',
            number: '8',
            label: 'Branches',
            color: 'from-blue-400 to-blue-600'
        },
        {
            icon: '📅',
            number: '19 +',
            label: 'Years Services',
            color: 'from-purple-400 to-purple-600'
        },
        {
            icon: '👥',
            number: '100 +',
            label: 'Employees',
            color: 'from-green-400 to-green-600'
        },
        {
            icon: '🤝',
            number: '5,000 +',
            label: 'Customers',
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
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6">
                {/* First Section - Who We Are */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Left - Image */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Business Analytics"
                            className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="text-green-600 font-bold text-sm tracking-wider">WHO WE ARE ?</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Transforming Businesses Through <br />
                            <span className="text-blue-600">Software</span> Innovation
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Vision Technologies is a global information Technology company which provides technology solutions to over 6000 customers. Vision Technologies is a Software, Web & Mobile Development Company focused on creating custom applications and laying special emphasis on the unique business needs of its corporate clients.
                            </p>
                            <p>
                                Vision Technologies infrastructure and processes are concentrated at designing and implementing solutions for middle & large-sized companies. Vision Technologies long-term-relationship-based strategy ensures a continuously stable growth and a solid customer base.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Banner */}
                <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                        <span className="text-3xl md:text-4xl">{stat.icon}</span>
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-sm md:text-base text-blue-100 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second Section - Inside Vision Technologies */}
                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <span className="text-gray-600 font-semibold text-sm tracking-wider">INSIDE VISION TECHNOLOGIES</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            The Power Of <span className="text-blue-600">Software</span><br />
                            The Simplicity Of Solutions
                        </h2>
                    </div>

                    {/* Features and Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left - Features List */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-8">
                                High Standard in Development & Services
                            </h3>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                                                {feature.number}
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <p className="text-gray-700 leading-relaxed">{feature.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Content and Image */}
                        <div className="space-y-8">
                            <div className="text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    Vision Technologies offers a comprehensive range of software and IT solutions, including packaged applications for the Recruitment, Clinic, Real Estate, School & Product Catalogue industries. In addition, it offers a broad range of software services such as Custom Software Development, IT Consulting, IS and IT Security Consulting, Enterprise Application Integration (EAI), and specialized services such as Product Re-engineering, Compliance Consultancy, Application Rehabilitation and e-Governance, among others.
                                </p>
                                <p>
                                    Vision Technologies integrates its products and services to create customized solutions to allow you to undertake technology-based business transformation that allows reorganization in line with today's dynamic digital business environment. In order to achieve the high standard in development and services the staff are committed to follow the Quality Management System developed based on ISO 9001:2000 requirements.
                                </p>
                            </div>

                            {/* Bottom Image */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Development Workspace"
                                    className="relative rounded-3xl shadow-2xl w-full h-[300px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
