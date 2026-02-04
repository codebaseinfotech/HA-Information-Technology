import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Scale, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const TermsPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <SEO
                title="Terms & Conditions - HA Information Technology"
                description="Read our terms and conditions for using HA Information Technology services. Learn about usage rights, intellectual property, warranties, and legal policies."
                keywords="terms and conditions, user agreement, service terms, legal terms, website terms, IT services agreement, software terms, terms of use"
                url="/terms-conditions"
                robots="index, follow"
            />
            {/* Hero Section with Enhanced Animation */}
            <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-[#1a2332] via-[#2a3a52] to-[#1a2332] overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className={`container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-14 mb-4 leading-tight">
                        Terms & Conditions
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base flex-wrap gap-2">
                        <Link to="/" className="hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-1">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#10B981] font-medium">Terms & Conditions</span>
                    </div>
                </div>

                {/* Animated Gradient Orb */}
                <div className="absolute -right-20 -bottom-40 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-green-600/30 to-blue-600/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
            </div>

            {/* Content Section with Staggered Animations */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 xl:px-12 max-w-5xl">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction with Fade-in */}
                        <div className={`mb-10 md:mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed bg-gradient-to-r from-blue-50 to-transparent p-4 md:p-6 rounded-lg border-l-4 border-blue-500">
                                Welcome to HA Information Technology. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
                            </p>
                        </div>

                        {/* Right to Use - Animated Card */}
                        <div className={`mb-8 md:mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="group hover:shadow-xl transition-all duration-300 rounded-xl p-4 md:p-6 hover:bg-gray-50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        <Scale className="w-5 h-5 md:w-6 md:h-6 text-[#1A3C8B]" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2332] m-0">Right to Use</h2>
                                </div>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                                    HA Information Technology grants you a non-exclusive, non-transferable, limited right to access, use, and display this website and the materials thereon only for personal and informational purposes. Permission to use documents (such as white papers, case studies, and other publications) that can be downloaded from this website is granted, provided that:
                                </p>
                                <ul className="text-sm md:text-base text-gray-600 space-y-2 ml-4 md:ml-6">
                                    <li className="hover:text-[#1A3C8B] transition-colors duration-200">HA Information Technology's copyright notice appears in all copies of documents</li>
                                    <li className="hover:text-[#1A3C8B] transition-colors duration-200">Use of such documents from this website is for informational and non-commercial use only and will not be copied or posted on any network computer or broadcast in any media</li>
                                    <li className="hover:text-[#1A3C8B] transition-colors duration-200">No modifications of any documents are made</li>
                                </ul>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                                    Any unauthorized use is expressly prohibited by law and may result in severe civil and criminal penalties.
                                </p>
                            </div>
                        </div>

                        {/* Intellectual Property Rights - Animated Card */}
                        <div className={`mb-8 md:mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="group hover:shadow-xl transition-all duration-300 rounded-xl p-4 md:p-6 hover:bg-gray-50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#1A3C8B]" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2332] m-0">Intellectual Property Rights</h2>
                                </div>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    This website, including its design, layout, code, and contents, and all the material present (excluding any third-party materials) is the exclusive property of HA Information Technology and protected by copyright laws. Copying, reproducing in whole or in part, or creating derivative works in any form or medium, without express written permission is prohibited.
                                </p>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                                    HA Information Technology does not grant any express or implied rights under any patents, trademarks, copyrights, trade secret information, or any other intellectual property rights. The HA Information Technology logo and the names of HA Information Technology products referenced herein are trademarks of HA Information Technology and protected by trademark laws.
                                </p>
                            </div>
                        </div>

                        {/* Third Party Content - Animated Card */}
                        <div className={`mb-8 md:mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="group hover:shadow-xl transition-all duration-300 rounded-xl p-4 md:p-6 hover:bg-gray-50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1A3C8B]" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2332] m-0">Third Party Content</h2>
                                </div>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    The website may make information or material of third parties available ("Third Party Content"). By accessing such Third Party Content, you may leave this website and be directed to an external website that is not maintained by HA Information Technology. Any access or use of such third-party website by you shall be at your own risk and responsibility.
                                </p>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                                    The website may provide links to third-party sites. These linked sites are not under the control of HA Information Technology, and HA Information Technology is not responsible for the contents of any linked site or any link contained in a linked site. HA Information Technology provides links to you only for your convenience, and the inclusion of any link does not imply endorsement by HA Information Technology of the site.
                                </p>
                            </div>
                        </div>

                        {/* No Warranties - Animated Alert Box */}
                        <div className={`mb-8 md:mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2332] mb-4">No Warranties</h2>
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-r-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <p className="text-sm md:text-base text-gray-700 font-semibold mb-2">
                                    ALL THE INFORMATION AND MATERIAL AVAILABLE ON THIS WEBSITE IS PROVIDED ON AN "AS IS" BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES OR REPRESENTATIONS OF ANY KIND.
                                </p>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    HA Information Technology hereby expressly disclaims, to the fullest extent permitted by law, all express, implied, statutory, or other warranties or representations, including without limitation, the implied warranties of non-infringement, merchantability, or fitness for a particular purpose.
                                </p>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                                While all the documents and graphics included in the website are factual and true, HA Information Technology and/or its respective partners make no representations about the suitability of the information contained in the documents and related graphics published on this website for any purpose.
                            </p>
                        </div>

                        {/* Indemnity & Limitation of Liability */}
                        <div className={`mb-8 md:mb-10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="hover:shadow-xl transition-all duration-300 rounded-xl p-4 md:p-6 hover:bg-gray-50">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2332] mb-4">Indemnity & Limitation of Liability</h2>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    You agree to indemnify, defend, and hold harmless HA Information Technology, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorneys' fees) relating to or arising out of your use of or inability to use the website or services, any user postings made by you, your violation of any terms of this agreement, or your violation of any rights of a third party.
                                </p>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                                    In no event shall HA Information Technology, its officers, directors, employees, or agents be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any errors, mistakes, or inaccuracies of content, personal injury or property damage, or any other damages resulting from your access to and use of our website.
                                </p>
                            </div>
                        </div>

                        {/* Laws & Jurisdiction */}
                        <div className={`mb-8 md:mb-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="hover:shadow-xl transition-all duration-300 rounded-xl p-4 md:p-6 hover:bg-gray-50">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2332] mb-4">Laws & Jurisdiction</h2>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    These terms and conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts located in India.
                                </p>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                                    By using this website, you consent to the jurisdiction and venue of such courts in connection with any action, suit, proceeding, or claim arising under or by reason of these terms and conditions.
                                </p>
                            </div>
                        </div>

                        {/* Contact Information - Animated Card */}
                        <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="bg-gradient-to-r from-[#1A3C8B] via-[#2563eb] to-[#1A3C8B] text-white p-6 md:p-8 rounded-xl mt-12 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] bg-[length:200%_100%] hover:bg-right animate-gradient">
                                <h3 className="text-lg md:text-xl font-bold mb-4">Questions About Our Terms?</h3>
                                <p className="text-sm md:text-base mb-4">
                                    If you have any questions about these Terms & Conditions, please contact us:
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

export default TermsPage;
