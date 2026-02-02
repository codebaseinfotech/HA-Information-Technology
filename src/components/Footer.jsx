import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllServices } from '../data/services';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [newsletter, setNewsletter] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const services = getAllServices();

    const solutions = [
        'Medical Center Software',
        'Dental Center Software',
        'Home Care Center Software',
        'IVF Software',
        'Laboratory Software',
        'Pharmacy Software',
        'Recruitment Software',
        'Real Estate / Property Software',
        'Auto Garage / Workshop Software',
        'HR & Payroll Software',
        'Accounting & Inventory Software',
        'Cheque Printing Software',
        'Bulk SMS Software',
        'Call Monitoring Software',
        'Time Attendance Software',
        'Cleaning Software',
        'School / Nursery Software',
        'RCM Software'
    ];

    const contacts = [
        { country: 'U.A.E.', phones: ['+974-44762301', '+974-66285558'] },
        { country: 'Oman', phones: [] },
        { country: 'Qatar', phones: [] },
        { country: 'Bahrain', phones: [] },
        { country: 'India', phones: [] }
    ];

    const socialLinks = [
        { icon: FaFacebookF, href: '#', label: 'Facebook' },
        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
        { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
        { icon: FaYoutube, href: '#', label: 'YouTube' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaTwitter, href: '#', label: 'Twitter' }
    ];

    const resources = [
        { name: 'Our partners', href: '#partners' },
        { name: 'Affiliates', href: '#affiliates' },
        { name: 'Careers', href: '#careers' }
    ];

    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 ">
            <div className="container mx-auto px-4 md:px-0">
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
                                    className="w-full bg-[#1A3C8B] hover:bg-[#1A3C8B]/60 text-white font-medium py-3 px-6 rounded transition-colors duration-300"
                                >
                                    Send Message
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
                                <div className="flex relative">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        value={newsletter}
                                        onChange={(e) => setNewsletter(e.target.value)}
                                        className="flex-1 px-4 py-2.5 bg-white text-gray-800 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    <button className="bg-blue-600 absolute right-0 top-0 bottom-0 hover:bg-blue-700 text-white px-4 py-2.5 rounded-r-md transition-colors duration-300">
                                        <span className="text-lg"><FaChevronRight className='text-white text-[10px]' /></span>
                                    </button>
                                </div>
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
                                            <FaChevronRight className="text-secondary text-xs group-hover:translate-x-1 transition-transform duration-300" />
                                            <span>{service.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h3 className="text-white text-lg font-semibold my-4">Resources</h3>
                        <ul className="space-y-2.5 mb-8">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <a href={resource.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
                                        <span className="mr-2 mt-1"><FaChevronRight className='text-[#333f4d] text-[10px]' /></span>
                                        {resource.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Solutions</h3>
                        <ul className="space-y-2.5">
                            {solutions.map((solution, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-start">
                                        <span className="mr-2 mt-1"><FaChevronRight className='text-[#333f4d] text-[10px]' /></span>
                                        <span>{solution}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Contact us</h3>
                        <ul className="space-y-4">
                            {contacts.map((contact, index) => (
                                <li key={index}>
                                    <a href="#" className="text-white hover:text-blue-400 text-sm font-medium transition-colors flex items-center">
                                        Contact {contact.country}
                                        <span className="mr-2 mt-1"><FaChevronRight className='text-[#333f4d] text-[10px]' /></span>
                                    </a>
                                    {contact.phones.length > 0 && (
                                        <div className="mt-2 space-y-1">
                                            {contact.phones.map((phone, pIndex) => (
                                                <a key={pIndex} href={`tel:${phone}`} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                                                    <FaPhone className="w-3 h-3" />
                                                    <FaWhatsapp className="w-3 h-3" />
                                                    <span>{phone}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded flex items-center justify-center transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8">
                            <h4 className="text-white text-base font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {['Home', 'Contact Us', 'Support'].map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
                                            <span className="mr-2 mt-1"><FaChevronRight className='text-[#333f4d] text-[10px]' /></span>
                                            {link}
                                        </a>
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
                            © 2006 - {currentYear} Vision Technologies | All Rights Reserved
                        </p>
                        <div className="flex gap-6">
                            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
                            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Back to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;
