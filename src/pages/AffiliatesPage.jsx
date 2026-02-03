import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Share2, DollarSign } from 'lucide-react';

const AffiliatesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Dynamic data for affiliate benefits
    const affiliateSteps = [
        {
            icon: Code,
            title: "Start in seconds",
            description: "Click the button below, fill in a few details, and you'll be a registered HA Information Technology Affiliate in no time. We'll send your referral link straight to your inbox."
        },
        {
            icon: Share2,
            title: "Spread the word",
            description: "Share your referral link with your network and friends via email and social media. Let them know how HA Information Technology can help them scale globally."
        },
        {
            icon: DollarSign,
            title: "Earn for every referral",
            description: "For every company you refer, you'll earn 30% of the invoice amount. It's a simple way to generate significant income while helping others succeed."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] bg-[#1a2332] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-14 mb-3 animate-fade-in-up">
                        Affiliates
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">Affiliates</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Main Content Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-4">AFFILIATES</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6">
                            Become an affiliate. Use your<span className="text-blue-600">network</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            Help your network discover how HA Information Technology makes hiring and paying global teams stress-free while earning rewards along the way.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
                        {affiliateSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <div key={index} className="text-center group transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
                                        <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-gray-600 group-hover:text-green-600 transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1a2332] mb-4 group-hover:text-green-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AffiliatesPage;
