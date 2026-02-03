import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CareersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                        Careers
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">Careers</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Main Content Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-4">CAREERS</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6">
                            Careers at <span className="text-blue-600">HA Information Technology</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left - Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Careers at HA Information Technology"
                                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2332]">
                                We're changing the way the world works
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                Today, the best jobs are limited to people who live in the world's largest cities. We're making it easier than ever for companies to hire whoever they want, wherever they live. All without the upfront cost and admin of researching complex local laws, navigating compliance, and running international payroll.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                Finally, more people worldwide can get jobs they want without moving countries, and companies can make dream hires faster by opening up their hiring borders. It's better, smarter, faster hiring for businesses everywhere and the freedom and mobility for team members to move, live, and work anywhere without a worry.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
