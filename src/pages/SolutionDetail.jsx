import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import solutions from '../data/solutions';

const SolutionDetail = () => {
    const { slug } = useParams();
    const solution = solutions.find(s => s.id === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!solution) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Solution Not Found</h2>
                    <Link to="/solutions" className="text-blue-600 hover:underline">Return to Solutions</Link>
                </div>
            </div>
        );
    }

    const Icon = solution.icon;

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

                <div className="container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-14 my-3 animate-fade-in-up">
                        {solution.title}
                    </h1>

                    {/* Breadcrumb */}
                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">{solution.title}</span>
                    </div>
                </div>

                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 xl:px-12 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Solution Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Introduction */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-blue-50 rounded-xl text-[#1A3C8B]">
                                    <Icon size={40} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#1a2332]">Overview</h2>
                                    <p className="text-gray-500">Complete solution for your business</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {solution.content.introduction}
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-3xl font-bold text-[#1a2332] mb-6">Key Features</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {solution.content.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="bg-gradient-to-br from-[#1A3C8B] to-[#2563eb] rounded-2xl p-8 shadow-lg text-white">
                            <h2 className="text-3xl font-bold mb-6">Benefits</h2>
                            <div className="space-y-4">
                                {solution.content.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                                        <span className="text-blue-50 text-lg">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                            <p className="text-gray-600 mb-6">
                                Contact us today to learn more about how {solution.title} can transform your business operations.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-[#1A3C8B] text-white font-bold py-3 px-8 rounded-full hover:bg-[#2563eb] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Quick Info Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Information</h3>
                                <div className="space-y-4">
                                    <div className="pb-4 border-b border-gray-100">
                                        <p className="text-sm text-gray-500 mb-1">Solution Type</p>
                                        <p className="font-semibold text-gray-900">Industry Software</p>
                                    </div>
                                    <div className="pb-4 border-b border-gray-100">
                                        <p className="text-sm text-gray-500 mb-1">Deployment</p>
                                        <p className="font-semibold text-gray-900">Cloud & On-Premise</p>
                                    </div>
                                    <div className="pb-4 border-b border-gray-100">
                                        <p className="text-sm text-gray-500 mb-1">Support</p>
                                        <p className="font-semibold text-gray-900">24/7 Available</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Customization</p>
                                        <p className="font-semibold text-gray-900">Fully Customizable</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-gradient-to-br from-[#1A3C8B] to-[#2563eb] rounded-2xl p-6 text-white shadow-lg">
                                <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                                <p className="text-blue-100 mb-6 text-sm">
                                    Our experts are ready to answer your questions and provide a personalized demo.
                                </p>
                                <Link
                                    to="/contact"
                                    className="block w-full bg-white text-[#1A3C8B] text-center font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition-all"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            {/* Other Solutions */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Other Solutions</h3>
                                <div className="space-y-3">
                                    {solutions
                                        .filter(s => s.id !== solution.id)
                                        .slice(0, 4)
                                        .map((otherSolution) => (
                                            <Link
                                                key={otherSolution.id}
                                                to={`/solutions/${otherSolution.id}`}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                            >
                                                <div className="p-2 bg-blue-50 rounded-lg text-[#1A3C8B] group-hover:bg-[#1A3C8B] group-hover:text-white transition-colors">
                                                    <otherSolution.icon size={20} />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-[#1A3C8B] flex-1">
                                                    {otherSolution.title}
                                                </span>
                                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#1A3C8B]" />
                                            </Link>
                                        ))}
                                </div>
                                <Link
                                    to="/solutions"
                                    className="block mt-4 text-center text-[#1A3C8B] font-semibold text-sm hover:underline"
                                >
                                    View All Solutions →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionDetail;
