import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Settings, Users, CheckCircle2, Briefcase, Share2 } from 'lucide-react';
import { useDisclosure } from '@chakra-ui/react';
import PartnerModal from '../components/PartnerModal';
import SEO from '../components/SEO';

const ResourcesPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    // Modal state
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Dynamic data for Our Partners section
    const partnerFeatures = [
        {
            icon: Monitor,
            title: "Help a business owner",
            description: "Assist your clients in legally paying their international contractors with ease, efficiency, and cost-effectiveness."
        },
        {
            icon: Settings,
            title: "Earn perks and rewards",
            description: "Explore a variety of partnership packages designed to deliver mutual benefits for both you and your clients."
        },
        {
            icon: Users,
            title: "Partner with the market leader",
            description: "Backed by industry-leading experts, HA Information Technology utilizes top-tier resources to drive continuous global expansion."
        }
    ];

    // Dynamic data for Become a Partner
    const partnerBenefits = [
        "Your clients need payroll and compliance solutions for their international team members. Partnering with us ensures they receive top-tier, reliable services.",
        "If you manage payroll for your clients, leverage HA Information Technology's advanced platform to streamline processes, enhance accuracy, and provide exceptional service.",
        "Assist your clients in hiring internationally in the most cost-effective manner. Our solutions offer affordable, efficient hiring processes, ensuring compliance and ease."
    ];

    // Dynamic data for Become an Affiliate
    const affiliateBenefits = [
        "If you know business owners who hire internationally, introduce them to HA Information Technology's superior payroll and compliance services, helping them streamline their operations.",
        "Join our affiliate program and start earning commissions by referring friends and business contacts. Use your custom affiliate link to your referrals and earnings effortlessly.",
        "Help your network scale their businesses internationally by providing them with exclusive discounts on payroll services. Empower them to grow while benefiting from your referrals."
    ];


    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Our Partners - Technology Partnerships | HA Information Technology"
                description="Meet our trusted technology partners and collaborators. Join HA Information Technology partnership program and help businesses grow with innovative IT solutions and software services."
                keywords="technology partners, IT partnerships, software partners, business collaboration, technology alliance, IT partner network, strategic partnerships, technology collaboration Dubai"
                url="/our-partner"
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-14 mb-3 animate-fade-in-up">
                        Our Partner
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">Our Partner</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Our Partners Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-4">OUR PARTNERS</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6">
                            Our Partner In <span className="text-[#1A3C8B]">Digital</span> Success
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            Becoming a HA Information Technology partner means we handle your clients. It's payments, contracts, and more all in one place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {partnerFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="text-center group transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                                        <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-gray-600 group-hover:text-[#1A3C8B] transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1a2332] mb-4 group-hover:text-[#1A3C8B] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-[#1A3C8B] rounded-2xl p-8 md:p-10 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold mb-8">Become a Partner</h3>
                            <div className="space-y-6 mb-10">
                                {partnerBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-200">
                                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="text-white/95 leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={onOpen}
                                className="bg-white text-[#1A3C8B] text-center py-4 px-4 rounded-full font-medium text-base hover:bg-gray-100 hover:scale-105 transition-all duration-200 cursor-pointer"
                            >
                                Become a Partner
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#1a2332]">Become an Affiliate</h3>
                            <div className="space-y-6 mb-10">
                                {affiliateBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-200">
                                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1 text-green-600" />
                                        <p className="text-gray-700 leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/affiliates"
                                className="bg-[#1a2332] text-white text-center py-4 px-4 rounded-full font-medium text-base hover:bg-[#1a2332]/90 hover:scale-105 transition-all duration-200"
                            >
                                Become an Affiliate
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#1A3C8B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332]">Careers</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                                Join our team of passionate technologists and innovators. We're making it easier than ever for companies to hire globally and for talented individuals to work from anywhere.
                            </p>
                            <Link
                                to="/careers"
                                className="bg-[#1A3C8B] text-white text-center py-4 px-4 rounded-full font-medium text-base hover:bg-[#1A3C8B]/80 transition-colors shadow-md"
                            >
                                Explore Careers
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerModal
                isOpen={isOpen}
                onClose={onClose}
                title="Become Our Trusted Partner"
                subtitle="Join Our Growing Network"
                description="We value strong and collaborative partnerships. If you're interested in partnering with us to create innovative solutions and explore new business opportunities, please fill out the form below. We look forward to learning more about how we can collaborate."
                benefits={['Wide network', 'Growth strategies', 'Collaborative solutions', 'Market insights']}
            />
        </div>
    );
};

export default ResourcesPage;
