import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserCheck, Database, FileCheck, ChevronRight } from 'lucide-react';

const PrivacyPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section with Enhanced Animation */}
            <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-[#1a2332] via-[#2a3a52] to-[#1a2332] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className={`container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-14 mb-4 leading-tight">
                        Privacy Policy
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base flex-wrap gap-2">
                        <Link to="/" className="hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-1">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#10B981] font-medium">Privacy Policy</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-purple-600/30 to-green-600/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
            </div>

            {/* Content Section with Staggered Animations */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 xl:px-12 max-w-5xl">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction with Fade-in */}
                        <div className={`mb-10 md:mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed bg-gradient-to-r from-purple-50 to-transparent p-4 md:p-6 rounded-lg border-l-4 border-purple-500">
                                At HA Information Technology, we respect and value both the information you share with us and your privacy. This Privacy Policy explains how we collect, use, protect, and share your personal information.
                            </p>
                        </div>

                        {/* Privacy and Your Information */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">Privacy and Your Information</h2>
                            </div>
                            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                <p className="text-gray-700 font-semibold m-0">
                                    HA Information Technology respects and values both the information you share with us and your privacy. We will not sell your personal information.
                                </p>
                            </div>
                        </div>

                        {/* Scope of the Policy */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <FileCheck className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">Scope of the Policy</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                This Privacy Policy covers all information received by HA Information Technology through:
                            </p>
                            <ul className="text-gray-600 space-y-2 ml-6">
                                <li>Online forms and contact forms on our website</li>
                                <li>Email addresses published on our website</li>
                                <li>Marketing materials such as brochures, direct mail, and advertisements</li>
                                <li>Partner and affiliate applications</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                This policy does not cover any information received by other means such as postal mail or telephone calls.
                            </p>
                        </div>

                        {/* How Information is Collected */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">How Information is Collected</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                HA Information Technology collects and maintains information through various channels:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Website Forms</h4>
                                    <p className="text-gray-600 text-sm">
                                        Information submitted via contact forms, partner applications, and service inquiry forms
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Email Communications</h4>
                                    <p className="text-gray-600 text-sm">
                                        Information sent to email addresses published on our website
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Website Analytics</h4>
                                    <p className="text-gray-600 text-sm">
                                        Logs of pages visited, links clicked, and browser information
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Cookies</h4>
                                    <p className="text-gray-600 text-sm">
                                        Data stored locally on your browser for improved user experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How Information is Used */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">How Information is Used</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Information received by HA Information Technology may be used for the following purposes:
                            </p>
                            <ul className="text-gray-600 space-y-2 ml-6">
                                <li>To respond to your inquiries and provide requested services</li>
                                <li>To send news, announcements, and updates about our products and services</li>
                                <li>To improve our website and user experience</li>
                                <li>To analyze website traffic and user behavior</li>
                                <li>To process partner and affiliate applications</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Information may be shared among internal departments, offices, and affiliates. Third-party agents may be employed to help manage the distribution of announcements and analyze information.
                            </p>
                        </div>

                        {/* Data Protection Principles */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">Data Protection Principles</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                HA Information Technology adheres to the following data protection principles:
                            </p>
                            <div className="space-y-4 mt-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1A3C8B] text-white rounded-full flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">Lawfulness, Fairness, and Transparency</h4>
                                        <p className="text-gray-600 text-sm">We process personal data lawfully, fairly, and in a transparent manner</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1A3C8B] text-white rounded-full flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">Purpose Limitation</h4>
                                        <p className="text-gray-600 text-sm">Data is collected for specified, explicit, and legitimate purposes</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1A3C8B] text-white rounded-full flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">Data Minimization</h4>
                                        <p className="text-gray-600 text-sm">We collect only data that is adequate, relevant, and necessary</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1A3C8B] text-white rounded-full flex items-center justify-center font-bold">4</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">Accuracy</h4>
                                        <p className="text-gray-600 text-sm">Personal data is kept accurate and up to date</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1A3C8B] text-white rounded-full flex items-center justify-center font-bold">5</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">Storage Limitation</h4>
                                        <p className="text-gray-600 text-sm">Data is retained only as long as necessary</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1A3C8B] text-white rounded-full flex items-center justify-center font-bold">6</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">Integrity and Confidentiality</h4>
                                        <p className="text-gray-600 text-sm">Data is processed securely with appropriate technical measures</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <UserCheck className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">Your Rights</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="text-gray-600 space-y-2 ml-6">
                                <li><strong>Right to Access:</strong> Request access to your personal data</li>
                                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                                <li><strong>Right to Restriction:</strong> Request restriction of processing</li>
                                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                                <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
                            </ul>
                        </div>

                        {/* Controlling Your Information */}
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">Controlling Your Information</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you would like your information to be suppressed from future communications or would like to provide/update your contact information, please contact our privacy coordinator.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Information gathered from third-party services may be limited or prevented through browser configuration (such as "Do Not Track" mode) and managing your privacy preferences on third-party sites.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="bg-gradient-to-r from-[#1A3C8B] via-[#2563eb] to-[#1A3C8B] text-white p-6 md:p-8 rounded-xl mt-12 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] bg-[length:200%_100%] hover:bg-right animate-gradient">
                                <h3 className="text-lg md:text-xl font-bold mb-4">Data Protection Manager</h3>
                                <p className="text-sm md:text-base mb-4">
                                    If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact our Data Protection Manager:
                                </p>
                                <div className="space-y-2 text-sm md:text-base">
                                    <p className="hover:translate-x-2 transition-transform duration-200"><strong>Email:</strong> info@alattastech.com</p>
                                    <p className="hover:translate-x-2 transition-transform duration-200"><strong>Phone:</strong> +971 523003423</p>
                                    <p className="hover:translate-x-2 transition-transform duration-200"><strong>Address:</strong> Dubai, UAE</p>
                                </div>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-500 text-sm">
                                Last Updated: February 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
