import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Eye, Shield, CheckCircle, ChevronRight } from 'lucide-react';

const CookiePolicyPage = () => {
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
                        Cookie Policy
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base flex-wrap gap-2">
                        <Link to="/" className="hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-1">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#10B981] font-medium">Cookie Policy</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-orange-600/30 to-green-600/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
            </div>

            {/* Content Section with Staggered Animations */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 xl:px-12 max-w-5xl">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction with Fade-in */}
                        <div className={`mb-10 md:mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed bg-gradient-to-r from-orange-50 to-transparent p-4 md:p-6 rounded-lg border-l-4 border-orange-500">
                                This Cookie Policy explains how HA Information Technology uses cookies and similar tracking technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
                            </p>
                        </div>

                        {/* What Are Cookies */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Cookie className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">What Are Cookies?</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-4">
                                <p className="text-gray-700 m-0">
                                    Cookies help us understand how you use our website, remember your preferences, and improve your overall experience.
                                </p>
                            </div>
                        </div>

                        {/* Types of Cookies We Use */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Settings className="w-6 h-6 text-[#1A3C8B]" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] m-0">Types of Cookies We Use</h2>
                            </div>

                            {/* Strictly Necessary Cookies */}
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <Shield className="w-5 h-5 text-[#1A3C8B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1a2332] mb-2">1. Strictly Necessary Cookies</h3>
                                        <p className="text-gray-600 leading-relaxed mb-3">
                                            These cookies are essential for the operation of our website and delivery of services. They enable core functionality such as security, network management, and accessibility.
                                        </p>
                                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                                            <p className="text-sm text-gray-700 font-semibold mb-2">Examples:</p>
                                            <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                                <li>Session management cookies</li>
                                                <li>Security cookies</li>
                                                <li>Load balancing cookies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Performance Cookies */}
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <Eye className="w-5 h-5 text-[#1A3C8B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1a2332] mb-2">2. Performance Cookies</h3>
                                        <p className="text-gray-600 leading-relaxed mb-3">
                                            These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve how our website works.
                                        </p>
                                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                                            <p className="text-sm text-gray-700 font-semibold mb-2">Examples:</p>
                                            <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                                <li>Google Analytics cookies</li>
                                                <li>Page load time tracking</li>
                                                <li>Error reporting cookies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Functionality Cookies */}
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckCircle className="w-5 h-5 text-[#1A3C8B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1a2332] mb-2">3. Functionality Cookies</h3>
                                        <p className="text-gray-600 leading-relaxed mb-3">
                                            These cookies allow our website to remember choices you make (such as your language or region) and provide enhanced, more personalized features.
                                        </p>
                                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                                            <p className="text-sm text-gray-700 font-semibold mb-2">Examples:</p>
                                            <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                                <li>Language preference cookies</li>
                                                <li>User interface customization</li>
                                                <li>Form auto-fill preferences</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Targeting Cookies */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-start gap-3 mb-3">
                                    <Cookie className="w-5 h-5 text-[#1A3C8B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1a2332] mb-2">4. Targeting/Advertising Cookies</h3>
                                        <p className="text-gray-600 leading-relaxed mb-3">
                                            These cookies are used to deliver advertisements more relevant to you and your interests. They also help limit the number of times you see an advertisement.
                                        </p>
                                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                                            <p className="text-sm text-gray-700 font-semibold mb-2">Examples:</p>
                                            <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                                <li>Remarketing cookies</li>
                                                <li>Social media advertising pixels</li>
                                                <li>Conversion tracking cookies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third-Party Cookies */}
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">Third-Party Trackers</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may use third-party services that set cookies on our website. These third parties have their own privacy policies and cookie policies:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border border-gray-200 p-4 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Google Analytics</h4>
                                    <p className="text-sm text-gray-600">
                                        Used to analyze website traffic and user behavior
                                    </p>
                                </div>
                                <div className="border border-gray-200 p-4 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Social Media Platforms</h4>
                                    <p className="text-sm text-gray-600">
                                        For social sharing and embedded content
                                    </p>
                                </div>
                                <div className="border border-gray-200 p-4 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Marketing Tools</h4>
                                    <p className="text-sm text-gray-600">
                                        For email marketing and campaign tracking
                                    </p>
                                </div>
                                <div className="border border-gray-200 p-4 rounded-lg">
                                    <h4 className="font-bold text-[#1A3C8B] mb-2">Content Delivery Networks</h4>
                                    <p className="text-sm text-gray-600">
                                        For faster content delivery and performance
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Managing Cookies */}
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">How to Manage Cookies</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You can control and manage cookies in various ways:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                                    <h4 className="font-bold text-gray-800 mb-2">Browser Settings</h4>
                                    <p className="text-gray-600 text-sm">
                                        Most browsers allow you to refuse or accept cookies. You can usually find these settings in the "Options" or "Preferences" menu of your browser.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                                    <h4 className="font-bold text-gray-800 mb-2">Do Not Track</h4>
                                    <p className="text-gray-600 text-sm">
                                        You can enable "Do Not Track" in your browser settings to signal that you don't want to be tracked by websites.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                                    <h4 className="font-bold text-gray-800 mb-2">Third-Party Opt-Out</h4>
                                    <p className="text-gray-600 text-sm">
                                        You can opt out of third-party advertising cookies through industry opt-out programs and privacy settings on third-party platforms.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                                <p className="text-gray-700 font-semibold mb-2">⚠️ Important Note:</p>
                                <p className="text-gray-600 text-sm m-0">
                                    Please note that if you disable cookies, some features of our website may not function properly, and your user experience may be affected.
                                </p>
                            </div>
                        </div>

                        {/* Updates to This Policy */}
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">Updates to This Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we use cookies.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="bg-gradient-to-r from-[#1A3C8B] via-[#2563eb] to-[#1A3C8B] text-white p-6 md:p-8 rounded-xl mt-12 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] bg-[length:200%_100%] hover:bg-right animate-gradient">
                                <h3 className="text-lg md:text-xl font-bold mb-4">Questions About Cookies?</h3>
                                <p className="text-sm md:text-base mb-4">
                                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicyPage;
