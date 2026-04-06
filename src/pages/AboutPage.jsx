import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Lightbulb, Users, Target, Eye, Shield, ArrowRight, CheckCircle2, Plus } from 'lucide-react';
import SEO from '../components/SEO';
import { getOrganizationSchema } from '../utils/seo';

const MissionVisionSection = ({ qualityStandards }) => {
    const [activeTab, setActiveTab] = useState('mission');
    const [imageKey, setImageKey] = useState(0);

    // Trigger image animation when tab changes
    useEffect(() => {
        setImageKey(prev => prev + 1);
    }, [activeTab]);

    return (
        <section className="mb-16 md:mb-24">
            <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-8 md:mb-12 gap-4 sm:gap-0">
                <button
                    onClick={() => setActiveTab('mission')}
                    className={`pb-3 md:pb-4 px-4 md:px-8 text-lg md:text-xl font-bold transition-all duration-300 relative ${activeTab === 'mission'
                        ? 'text-[#1A3C8B]'
                        : 'text-gray-400 hover:text-[#1A3C8B]/60'
                        }`}
                >
                    Our Mission
                    {activeTab === 'mission' && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1A3C8B] rounded-t-full animate-slide-in"></div>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('vision')}
                    className={`pb-3 md:pb-4 px-4 md:px-8 text-lg md:text-xl font-bold transition-all duration-300 relative ${activeTab === 'vision'
                        ? 'text-[#1A3C8B]'
                        : 'text-gray-400 hover:text-[#1A3C8B]/60'
                        }`}
                >
                    Our Vision
                    {activeTab === 'vision' && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1A3C8B] rounded-t-full animate-slide-in"></div>
                    )}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                <div
                    key={imageKey}
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px] group animate-fade-in-scale"
                >
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#1A3C8B]/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>

                    <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden">
                        <img
                            src={activeTab === 'mission'
                                ? "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                            alt={activeTab === 'mission' ? "Our Mission" : "Our Vision"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C8B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6 animate-fade-in-right">
                    {activeTab === 'mission' ? (
                        <>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1a2332] leading-tight">
                                <span className="text-[#1A3C8B]">HA Information Technology</span> To consistently create value for our stakeholders
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                                by providing solutions which enable our customers to achieve excellence and sustainable competitive edge.
                            </p>
                            <div className="space-y-3 md:space-y-4 pt-4">
                                {qualityStandards.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-3 group hover:bg-gray-50 p-2 md:p-3 rounded-lg transition-all duration-300 hover:translate-x-2"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                            <CheckCircle2 size={14} color="#1A3C8B" strokeWidth={3} />
                                        </div>
                                        <p className="text-gray-700 font-medium text-sm md:text-base group-hover:text-[#1A3C8B] transition-colors">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-500 italic mt-4 md:mt-6 border-l-4 border-[#1A3C8B]/30 pl-4 py-2 text-sm md:text-base bg-gray-50 rounded-r-lg">
                                In order to achieve the above all the staff are committed to follow the Quality Management System developed based on ISO 9001:2000 requirements.
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1a2332] mb-4 leading-tight">
                                A One Stop Professional IT Solutions Provider & Trusted Local IT Partner
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-justify text-sm md:text-base">
                                The idea behind HA Information Technology is very simple - "A One Stop Professional IT Solutions Provider & Trusted Local IT Partner". We strive to provide a wide range of Customize Software Development, Web Design, Network Solutions, Access Controls, Security Solutions, PABX Solutions, IT Infrastructure, for you, our valued client, to cover even the most demanding technical needs.
                            </p>

                            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-4 md:p-6 rounded-xl border border-gray-100 mb-6 hover:shadow-lg transition-shadow duration-300">
                                <h4 className="font-bold text-[#1a2332] mb-4 text-base md:text-lg">We offer our clients :</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    {[
                                        "Detailed Free Proposals",
                                        "Expert Management",
                                        "Fast Communication",
                                        "Professionalism and Flexibility",
                                        "Latest Technologies",
                                        "Responsive Support"
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex gap-2 items-center group hover:translate-x-1 transition-transform duration-200"
                                            style={{ animationDelay: `${idx * 50}ms` }}
                                        >
                                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                                <CheckCircle2 size={12} color="#1A3C8B" strokeWidth={3} />
                                            </div>
                                            <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-[#1A3C8B] transition-colors">{item}</span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-in {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }

                @keyframes fade-in-scale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                    transform-origin: left;
                }

                .animate-fade-in-scale {
                    animation: fade-in-scale 0.6s ease-out;
                }

                .animate-fade-in-right {
                    animation: fade-in-right 0.6s ease-out;
                }
            `}</style>
        </section>
    );
};

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
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

    const features = [
        {
            icon: Lightbulb,
            title: 'Innovative Solutions',
            description: 'Delivering cutting-edge, customized software solutions that adapt to the evolving needs of our clients.'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'A team of highly skilled professionals dedicated to providing exceptional service and high-quality results.'
        }
    ];

    const values = [
        {
            icon: Lightbulb,
            title: 'INNOVATION',
            description: 'Flexibility is the key to our offerings, and intrinsic to this flexibility, is the spirit of Innovation that we bring to our products and services - from the very stage of design to implementation and customer support.'
        },
        {
            icon: Eye,
            title: 'INSIGHT',
            description: 'We have always prided ourselves on the vision, skills, expertise and professionalism of our team. Our team members make use of their keen Insight to foresee industry trends and meet demanding customer needs.'
        },
        {
            icon: Shield,
            title: 'INTEGRITY',
            description: 'At HA Information Technology, the very soul of our company. This is reflected in our finances, the trusted relationship that we share with our customers and business partners, and the faith reposed in us by our stakeholders.'
        }
    ];

    const benefits = [
        'Detailed Free Proposals',
        'Expert Management',
        'Fast Communication',
        'Professionalism and Flexibility',
        'Comprehensive Design Specifications for all Projects',
        'Unique Design',
        'Latest Technologies and Technical Expertise',
        'Responsive Customer Support',
        'Reasonable Cost',
        'Extensive Testing by our in-house Testing Laboratory',
        'Outstanding Service Record'
    ];

    const qualityStandards = [
        'Understanding not only the IT requirements of the customers but the business process involved',
        'Multi-level testing of the solution prior during and post deployment',
        'Continuous training programmers on the latest technologies',
        'Managing projects according to international project management methods',
        'Ensuring professional customer support and warranty services'
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="About Us - HA Information Technology | IT Solutions Company UAE & India"
                description="Learn about HA Information Technology, your trusted IT solutions partner in UAE and India. Discover our mission, vision, values, and commitment to delivering innovative software development and technology services."
                keywords="IT company UAE, software development company Dubai, technology solutions India, IT consulting services, custom software development, web development company, mobile app development, about HA Information Technology, IT services provider, software company Dubai, technology partner UAE"
                url="/about"
                schema={getOrganizationSchema()}
            />
            <section className="relative h-[300px] md:h-[400px] bg-cover bg-center overflow-hidden" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
            }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 animate-fade-in"></div>
                <div className="absolute inset-0 bg-[#1A3C8B]/10"></div>
                <div className={`relative container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-14 mb-3 animate-fade-in-up">
                        About Us
                    </h1>
                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-blue-400 transition-colors hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">About Us</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 xl:px-12">
                <section className="py-16 md:py-20" ref={sectionRef}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative group">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="HA Information Technology Team - Business Professional"
                                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 bg-[#1A3C8B] hover:bg-[#1A3C8B]/80 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse">
                                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            <div>
                                <span className="text-green-600 font-bold text-xs md:text-sm tracking-wider inline-block mb-3 md:mb-4 uppercase bg-green-50 px-3 py-1.5 rounded-full">About Us</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a2332] leading-tight mb-4 md:mb-6">
                                    Simple and the <span className="text-[#1A3C8B] relative inline-block">
                                        Fast
                                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A3C8B] to-blue-400 opacity-30"></span>
                                    </span> for your Business.
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-justify">
                                    HA Information Technology is a Software and Web Development Company focused on creating custom applications and laying special emphasis on the unique business needs of its corporate clients. HA Information Technology infrastructure and processes are concentrated at designing and implementing solutions for middle & large-sized companies.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-gray-50 to-blue-50/20 p-4 md:p-6 rounded-xl border border-gray-100 hover:border-[#1A3C8B]/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                                            style={{ animationDelay: `${index * 150}ms` }}
                                        >
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mb-3 md:mb-4 shadow-sm text-[#1A3C8B] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                            <h3 className="text-base md:text-lg font-bold text-black mb-2 group-hover:text-[#1A3C8B] transition-colors">{feature.title}</h3>
                                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center mb-8 md:mb-12 pt-8 md:pt-12 border-t border-gray-100">
                    <span className="text-green-600 font-bold text-xs md:text-sm tracking-wider inline-block mb-3 md:mb-4 uppercase bg-green-50 px-4 py-2 rounded-full">INSIDE HA Information Technology</span>
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

                {/* Mission & Vision Tabs Section (Replaces generic text) */}
                <MissionVisionSection qualityStandards={qualityStandards} />

                <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white -mx-4 md:-mx-6 px-4 md:px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-10 md:mb-16">
                            <span className="text-green-600 font-bold text-xs md:text-sm tracking-wider inline-block mb-3 md:mb-4 uppercase bg-green-50 px-4 py-2 rounded-full">Our Values</span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a2332] leading-tight px-4">
                                The Values We <span className="text-[#1A3C8B]">Stand</span> For
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-gray-100 to-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#1A3C8B] stroke-[1.5]" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-[#1a2332] mb-3 md:mb-4 uppercase tracking-wide group-hover:text-[#1A3C8B] transition-colors">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Services Technology / Process Section */}
                <section className="py-6">
                    <div className="mb-12">
                        <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-2">Services Technology</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-8">
                            Advancing <span className="text-[#1A3C8B]">Beyond</span> Your Expectations
                        </h2>

                        <p className="text-gray-600 text-lg mb-12 max-w-4xl text-justify">
                            We use IEEE Standards on Software Development, as well as our own standards, templates and procedures resulting from our vast experience in the field, as the basis for our approach to software development.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                            {/* Stage 1 */}
                            <div className="space-y-6">
                                <h3 className="flex items-center gap-3 text-xl font-bold text-[#1a2332]">
                                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                                    Stage 1 - Analysis, Proposal and Specification
                                </h3>
                                <p className="text-gray-600 text-justify leading-relaxed">
                                    It all begins with our initial understanding of your needs and wishes. Based on this, we create a detailed proposal with an outline of the tools, technologies, components, deliverables and milestones of the project. We estimate efforts and provide time frames for each item.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h4 className="flex items-center gap-2 font-bold text-[#1a2332] mb-6 uppercase text-sm">
                                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <ArrowRight size={12} />
                                    </div>
                                    A System Specification Usually Contains:
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        "System Purpose, Functions and Architecture",
                                        "User Interface and Reports, including all screens",
                                        "Object Model, Data Structures, Communication",
                                        "System Performance and Acceptance criteria",
                                        "Project Plan with schedules and costs"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stage 2 */}
                            <div className="space-y-6">
                                <h3 className="flex items-center gap-3 text-xl font-bold text-[#1a2332]">
                                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                                    Stage 2 - Implementation and Testing
                                </h3>
                                <p className="text-gray-600 text-justify leading-relaxed">
                                    Once the Specification has been accepted, software development is initiated. Programmers begin coding using the specification, while designers develop necessary elements of the user interface. Testers develop the test plan and scripts to verify the system.
                                </p>

                                <div className="bg-blue-50 p-6 rounded-lg mt-6 border border-blue-100">
                                    <h4 className="flex items-center gap-2 font-bold text-blue-800 mb-4 text-sm uppercase">
                                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                            <ArrowRight size={12} />
                                        </div>
                                        The Results of this stage are:
                                    </h4>
                                    <div className="space-y-2">
                                        <div className="flex gap-2 items-center">
                                            <Plus className="w-4 h-4 text-blue-600" />
                                            <span className="text-gray-700 font-semibold">Regular Deliveries of the Code Developed</span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Plus className="w-4 h-4 text-blue-600" />
                                            <span className="text-gray-700 font-semibold">Test Plan and Acceptance Testing Criteria</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h4 className="flex items-center gap-2 font-bold text-[#1a2332] mb-6 uppercase text-sm">
                                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <ArrowRight size={12} />
                                    </div>
                                    Deliverables Include:
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        "Test Cases and Testing Scripts, if Required",
                                        "Testing Reports",
                                        "Labor and Status Reports, if Required",
                                        "Project Plan Updates",
                                        "Integrated Software Product Installed",
                                        "System and Source Code Documentation",
                                        "User's Guide & Context-Sensitive Help",
                                        "Installation program and instructions"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Creating Digital Masterpieces */}
                <FAQSection />
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How can I benefit from working with HA Information Technology ?",
            answer: "HA Information Technology assures that your project will be done on time, on budget, and in accordance with the latest quality and technical standards. You can outsource to HA Information Technology your IT projects ranging from a simple utility to a total automation of your business. Our services are confidential and reliable. Copyright on the final system belongs to you. Also, custom information systems are expensive, as development requires hiring skilled professionals. By using our services, you will reduce your cost. You also achieve savings on equipment, maintenance and infrastructure required during the development. Learn additional information with our Service Technology and Development Process"
        },
        {
            question: "What services does HA Information Technology ?",
            answer: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>Development of custom software systems for Windows and Linux platforms</li>
                    <li>Internet/Intranet application development and Ecommerce solutions</li>
                    <li>Software testing</li>
                    <li>Information Technology and Internet research and consulting</li>
                    <li>Web Site Translation and Software Localization</li>
                    <li>Data entry and conversion</li>
                </ul>
            )
        },
        {
            question: "What, besides cost, is the difference between developing locally and doing it offshore ?",
            answer: "The main difference is the communication model and cost structure. Offshore development offers significant cost savings while maintaining high quality standards through effective communication channels and project management methodologies."
        },
        {
            question: "How can I be assured that I am not wasting my time and money ?",
            answer: "We ensure transparency through regular reports, milestone-based deliveries, and strict adherence to project specifications. Our track record and client testimonials speak to our reliability."
        },
        {
            question: "How can I be sure of your productivity ?",
            answer: "We use industry-standard project management tools and methodologies to track progress. You receive regular updates and have visibility into the development process at every stage."
        },
        {
            question: "What risks do I have in outsourcing development ?",
            answer: "We mitigate risks through clear contracts, intellectual property protection, and rigorous quality assurance processes. Our experienced team identifies potential issues early to ensure project success."
        }
    ];

    return (
        <section className="py-6 md:py-8 bg-white">
            <div className="container mx-auto">
                <div className="mb-12">
                    <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-4">SOME FAQ'S</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
                        Creating <span className="text-blue-600">Digital</span> Masterpieces
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-4xl">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-100 last:border-0 pb-4">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-start gap-4 py-4 text-left group hover:bg-gray-50/50 rounded-lg transition-colors px-2"
                                >
                                    <div className={`flex-shrink-0 w-8 h-8 rounded flex items-center justify-center mt-1 transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
                                        {isOpen ? <span className="text-xl font-bold">-</span> : <span className="text-xl font-bold">+</span>}
                                    </div>
                                    <span className={`text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-[#1a2332] group-hover:text-blue-600'}`}>
                                        {faq.question}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden pl-[52px] pr-4">
                                        <div className="text-gray-600 leading-relaxed text-justify">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
