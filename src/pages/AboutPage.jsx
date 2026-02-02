import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Lightbulb, Users, Target, Eye, Shield, ArrowRight, CheckCircle2, Plus } from 'lucide-react';

const MissionVisionSection = ({ qualityStandards }) => {
    const [activeTab, setActiveTab] = useState('mission');

    return (
        <section className="mb-24">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 mb-12">
                <button
                    onClick={() => setActiveTab('mission')}
                    className={`pb-4 px-8 text-xl font-bold transition-all duration-300 relative ${activeTab === 'mission'
                        ? 'text-blue-600'
                        : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    Our Mission
                    {activeTab === 'mission' && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('vision')}
                    className={`pb-4 px-8 text-xl font-bold transition-all duration-300 relative ${activeTab === 'vision'
                        ? 'text-blue-600'
                        : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    Our Vision
                    {activeTab === 'vision' && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>
                    )}
                </button>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fade-in">
                {/* Image Side */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                    <img
                        src={activeTab === 'mission'
                            ? "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                        alt={activeTab === 'mission' ? "Our Mission" : "Our Vision"}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>

                {/* Text Side */}
                <div className="space-y-6">
                    {activeTab === 'mission' ? (
                        <>
                            <h3 className="text-2xl font-bold text-[#1a2332]">
                                <span className="text-gray-500">HA Information Technology</span> To consistently create value for our stakeholders
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                by providing solutions which enable our customers to achieve excellence and sustainable competitive edge.
                            </p>
                            <div className="space-y-4 pt-4">
                                {qualityStandards.map((item, idx) => (
                                    <div key={idx} className="flex gap-3">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                            <CheckCircle2 size={14} strokeWidth={3} />
                                        </div>
                                        <p className="text-gray-700 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-500 italic mt-6 border-l-4 border-gray-200 pl-4 py-2">
                                In order to achieve the above all the staff are committed to follow the Quality Management System developed based on ISO 9001:2000 requirements.
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-[#1a2332] mb-4">
                                A One Stop Professional IT Solutions Provider & Trusted Local IT Partner
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                                The idea behind HA Information Technology is very simple - "A One Stop Professional IT Solutions Provider & Trusted Local IT Partner". We strive to provide a wide range of Customize Software Development, Web Design, Network Solutions, Access Controls, Security Solutions, PABX Solutions, IT Infrastructure, for you, our valued client, to cover even the most demanding technical needs.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                                <h4 className="font-bold text-[#1a2332] mb-4">We offer our clients :</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Detailed Free Proposals",
                                        "Expert Management",
                                        "Fast Communication",
                                        "Professionalism and Flexibility",
                                        "Latest Technologies",
                                        "Responsive Support"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-2 items-center">
                                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                                <CheckCircle2 size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700">{item}</span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
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
            {/* Hero Section */}
            <section className="relative h-[400px] bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
            }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
                    <div className="flex items-center gap-2 text-white text-lg">
                        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-green-400">About Us</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6">
                {/* Main Content Section */}
                {/* Main Content Section - Simple and Fast */}
                <section className="py-16 md:py-24" ref={sectionRef}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Left - Image with Play Button */}
                        <div className="relative group">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Business Professional"
                                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse">
                                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-green-600 font-bold text-sm tracking-wider inline-block mb-4 uppercase">About Us</span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] leading-tight mb-6">
                                    Simple and the <span className="text-blue-600">Fast</span> for your Business.
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6 text-justify">
                                    HA Information Technology is a Software and Web Development Company focused on creating custom applications and laying special emphasis on the unique business needs of its corporate clients. HA Information Technology infrastructure and processes are concentrated at designing and implementing solutions for middle & large-sized companies.
                                </p>
                            </div>

                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm text-blue-600">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-[#1a2332] mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inside HA Information Technology Header */}
                <div className="text-center mb-12 pt-12 border-t border-gray-100">
                    <span className="text-green-600 font-bold text-sm tracking-wider inline-block mb-4 uppercase">INSIDE HA Information Technology</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] leading-tight">
                        The Power Of <span className="text-blue-600">Software</span><br />
                        The Simplicity Of Solutions
                    </h2>
                </div>

                {/* Mission & Vision Tabs Section (Replaces generic text) */}
                <MissionVisionSection qualityStandards={qualityStandards} />

                {/* Values Section */}
                <section className="py-16 md:py-24 bg-gray-50 -mx-4 md:-mx-6 px-4 md:px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-bold text-sm tracking-wider inline-block mb-4 uppercase">Our Values</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] leading-tight">
                                The Values We <span className="text-blue-600">Stand</span> For
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300"
                                    >
                                        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                            <Icon className="w-8 h-8 text-[#1a2332] stroke-[1.5]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#1a2332] mb-4 uppercase tracking-wide">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
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
                            Advancing <span className="text-blue-600">Beyond</span> Your Expectations
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

            {/* Scroll to Top Button (Floating) */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center border border-gray-100 text-blue-600 hover:-translate-y-1 transition-transform"
                >
                    <ArrowRight className="w-6 h-6 -rotate-90" />
                </button>
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
