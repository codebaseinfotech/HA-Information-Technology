import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Briefcase, Award } from 'lucide-react';

const ResourcesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
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
                        Resources
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">Resources</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Partners */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                                <Users size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Our Partners</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We collaborate with leading technology providers to deliver the best solutions to our clients. Our partnerships ensure that we have access to the latest tools, platforms, and support to drive your success.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Placeholders for partner logos */}
                            <div className="h-16 bg-gray-50 rounded flex items-center justify-center text-gray-400 text-sm font-semibold">Partner 1</div>
                            <div className="h-16 bg-gray-50 rounded flex items-center justify-center text-gray-400 text-sm font-semibold">Partner 2</div>
                            <div className="h-16 bg-gray-50 rounded flex items-center justify-center text-gray-400 text-sm font-semibold">Partner 3</div>
                        </div>
                    </div>

                    {/* Careers */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                <Briefcase size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Careers</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Join our team of passionate technologists and innovators. We are always looking for talented individuals who are eager to make an impact and grow their careers in a dynamic environment.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#1A3C8B] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1A3C8B]/90 transition-colors">
                            View Openings
                        </Link>
                    </div>

                    {/* Affiliates */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 md:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                <Award size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Affiliate Program</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Partner with us and earn rewards by referring clients to our services. Our affiliate program is designed to be mutually beneficial, offering competitive commissions and dedicated support.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact" className="inline-block border border-[#1A3C8B] text-[#1A3C8B] px-6 py-2 rounded-lg font-medium hover:bg-[#1A3C8B] hover:text-white transition-colors">
                                Become an Affiliate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
