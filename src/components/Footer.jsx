import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllServices } from '../data/services';
import solutionsData from '../data/solutions';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaChevronRight } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import AE from 'country-flag-icons/react/3x2/AE';
import IN from 'country-flag-icons/react/3x2/IN';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [newsletter, setNewsletter] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Track scroll position to show/hide Back to Top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-footer-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully! We will contact you soon.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                toast.error(data.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        if (!newsletter) {
            toast.error('Please enter your email address');
            return;
        }

        setIsNewsletterSubmitting(true);

        try {
            const response = await fetch('/api/send-newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: newsletter }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Successfully subscribed to newsletter!');
                setNewsletter('');
            } else {
                toast.error(data.message || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong. Please try again later.');
        } finally {
            setIsNewsletterSubmitting(false);
        }
    };

    const services = getAllServices();

    const socialLinks = [
        { icon: FaFacebookF, href: '#', label: 'Facebook' },
        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
        { icon: FaWhatsapp, href: 'https://wa.me/919879527272', label: 'WhatsApp' },
        { icon: FaYoutube, href: '#', label: 'YouTube' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaTwitter, href: '#', label: 'Twitter' }
    ];

    const resources = [
        { name: 'Our partners', href: '/our-partner' },
        { name: 'Affiliates', href: '/affiliates' },
        { name: 'Careers', href: '/careers' }
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-16  pb-8 px-4 xl:px-12">
            <Toaster position="top-right" />
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12 px-4">
                    {/* Stay in Touch - Contact Form */}
                    <div className="lg:col-span-1">
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6">Stay in Touch</h3>
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white text-gray-800 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white text-gray-800 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white text-gray-800 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Enter Your Message ..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2.5 bg-white text-gray-800 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                                    required
                                ></textarea>

                                {/* reCAPTCHA placeholder */}
                                {/* <div className="flex items-center gap-2 bg-gray-200 p-3 rounded">
                                    <input type="checkbox" id="notRobot" className="w-4 h-4" required />
                                    <label htmlFor="notRobot" className="text-gray-700 text-xs">I'm not a robot</label>
                                </div> */}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#1A3C8B] hover:bg-[#1A3C8B]/60 text-white font-medium py-3 px-6 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Resources & Newsletter */}
                        <div>
                            <div className="mt-10">
                                <h3 className="text-white text-lg font-semibold mb-3">Subscribe Newsletter</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Subscribe to our newsletter and be the first to know about our latest updates
                                </p>
                                <form onSubmit={handleNewsletterSubmit} className="flex relative">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        value={newsletter}
                                        onChange={(e) => setNewsletter(e.target.value)}
                                        disabled={isNewsletterSubmitting}
                                        required
                                        className="flex-1 px-4 py-2.5 bg-white text-gray-800 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isNewsletterSubmitting}
                                        className="bg-[#1A3C8B] absolute right-0 top-0 bottom-0 hover:bg-[#1A3C8B]/80 text-white px-4 py-2.5 rounded-r-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isNewsletterSubmitting ? (
                                            <span className="text-xs">...</span>
                                        ) : (
                                            <span className="text-lg"><FaChevronRight className='text-white text-[10px]' /></span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Our Service */}
                    <div >
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6">Our Service</h3>
                            <ul className="space-y-2">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link to={`/services/${service.id}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
                                            <FaChevronRight className="text-[#1A3C8B] text-xs cursor-pointer group-hover:translate-x-1 transition-transform duration-300" />
                                            <span className='cursor-pointer'>{service.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h3 className="text-white text-lg font-semibold my-4">Resources</h3>
                        <ul className="space-y-2.5 mb-8">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <Link to={resource.href} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-300 group">
                                        <FaChevronRight className="text-[#1A3C8B] text-xs cursor-pointer group-hover:translate-x-1 transition-transform duration-300" />
                                        <span className='cursor-pointer'>{resource.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Solutions</h3>
                        <ul className="space-y-2.5">
                            {solutionsData.map((solution) => (
                                <li key={solution.id}>
                                    <Link to={`/solutions/${solution.id}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
                                        <FaChevronRight className="text-[#1A3C8B] text-xs cursor-pointer group-hover:translate-x-1 transition-transform duration-300" />
                                        <span className='cursor-pointer'>{solution.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        {/* Global Presence */}
                        <h3 className="text-white text-lg font-semibold mb-5">Global Presence</h3>
                        <div className="space-y-5 mb-8">
                            {/* UAE Office */}
                            <div className="group">
                                <div className="flex items-center gap-2 mb-2">
                                    <AE title="UAE" className="w-6 h-4 rounded-sm flex-shrink-0" />
                                    <h4 className="text-white text-sm font-semibold">U.A.E.</h4>
                                </div>
                                <div className="flex items-start gap-2 text-gray-400 text-sm ml-1 mb-1.5">
                                    <svg className="w-4 h-4 text-[#1A3C8B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="leading-snug">274 Street - Dubai Investment Park - 2, Dubai - United Arab Emirates</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm ml-1 hover:text-green-400 transition-colors">
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=971523003423&text&type=phone_number&app_absent=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 cursor-pointer"
                                        title="Chat on WhatsApp"
                                    >
                                        <FaPhone className="w-3.5 h-3.5" />
                                        <FaWhatsapp className="w-3.5 h-3.5" />
                                        <span>+971 523003423</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Development Centers */}
                        <h3 className="text-white text-lg font-semibold mb-5">Development Centers</h3>
                        <div className="space-y-5 mb-6">
                            {/* Surat Office */}
                            <div className="group">
                                <div className="flex items-center gap-2 mb-2">
                                    <IN title="India" className="w-6 h-4 rounded-sm flex-shrink-0" />
                                    <h4 className="text-white text-sm font-semibold">India</h4>
                                </div>
                                <div className="flex items-start gap-2 text-gray-400 text-sm ml-1 mb-1.5">
                                    <svg className="w-4 h-4 text-[#1A3C8B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="leading-snug">201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat, India - 395004</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm ml-1 hover:text-green-400 transition-colors">
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=917096859504&text&type=phone_number&app_absent=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 cursor-pointer"
                                        title="Chat on WhatsApp"
                                    >
                                        <FaPhone className="w-3.5 h-3.5" />
                                        <FaWhatsapp className="w-3.5 h-3.5" />
                                        <span>+91-7096859504</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        to={social.href}
                                        className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded flex items-center justify-center transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8">
                            <h4 className="text-white text-base font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
                                            <span className="mr-2 mt-1"><FaChevronRight className='text-[#1A3C8B] text-[10px]' /></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-gray-400">
                            © 2020 - {currentYear} HA Information Technology | All Rights Reserved
                        </p>
                        <div className="flex items-center gap-2 text-sm whitespace-nowrap">
                            <Link
                                to="/terms-conditions"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Terms & Conditions
                            </Link>

                            <span className="text-gray-500">|</span>

                            <Link
                                to="/privacy-policy"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </Link>

                            <span className="text-gray-500">|</span>

                            <Link
                                to="/cookie-policy"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Cookie Policy
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
                    aria-label="Back to top"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}
        </footer>
    );
};

export default Footer;
