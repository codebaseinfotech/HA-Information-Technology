import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = ({ hideImage = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

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
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success('Thank you! Your message has been sent successfully. We will get back to you soon!', {
                    duration: 5000,
                    position: 'top-right',
                    style: {
                        background: '#10B981',
                        color: '#fff',
                        padding: '16px',
                        borderRadius: '10px',
                    },
                    icon: '✅',
                });

                // Reset form
                setFormData({
                    name: '',
                    contact: '',
                    email: '',
                    service: '',
                    message: ''
                });

                // Reset checkbox
                document.getElementById('notRobot').checked = false;
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Oops! Something went wrong. Please try again or contact us directly.', {
                duration: 5000,
                position: 'top-right',
                style: {
                    background: '#EF4444',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '10px',
                },
                icon: '❌',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        'Software Development',
        'Medical / Dental Software',
        'Home Care Software',
        'Laboratory Software',
        'HR & Payroll Software',
        'Accounting Software',
        'Cheque Printing Software',
        'Auto Garage / Workshop Software',
        'Bulk SMS Software',
        'Pharmacy Software',
        'Recruitment Software',
        'Retail(POS) Software',
        'Real Estate / Property Software',
        'School / Nursery Software',
        'Cleaning Software',
        'Time Attendance Software',
        'CCTV Security System',
        'Telephone PABX Solution',
        'Call Monitoring Software',
        'Website Designing & Development',
        'Mobile App Development',
        'E-Commerce Solutions',
        'IT Infrastructure',
        'Security Solutions',
        'Cloud Hosting',
        'Other'
    ];

    return (
        <div className="min-h-screen bg-white">
            <Toaster />
            <section id="contact" className="py-16 md:py-24 px-4 xl:px-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 xl:px-12">
                    <div className={`grid grid-cols-1 ${!hideImage ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-16 items-center`}>
                        <div>
                            <div className="mb-8">
                                <div className="inline-block mb-4">
                                    <span className="text-green-600 font-bold text-sm tracking-wider uppercase">GET IN TOUCH</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                                    Your Business To <span className="text-[#1A3C8B]">Growth</span><br />
                                    Please Touch ?
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Reach out to us with any inquiries or concerns, and our dedicated team will respond promptly to assist you.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name Here"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="Contact Here"
                                        value={formData.contact}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Here"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-600"
                                        required
                                        disabled={isSubmitting}
                                    >
                                        <option value="">Select a Product or Service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Message ..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>

                                <div className="flex items-center gap-3 mb-4">
                                    <input
                                        type="checkbox"
                                        id="notRobot"
                                        className="w-4 h-4"
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <label htmlFor="notRobot" className="text-sm text-gray-600">
                                        I'm not a robot
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-[#1A3C8B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Contact Us
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Right - Image with Decoration */}
                        {!hideImage && <div className="relative">
                            <div className="absolute -top-8 -left-8 w-64 h-64 opacity-20">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    {[...Array(10)].map((_, i) => (
                                        [...Array(10)].map((_, j) => (
                                            <circle key={`${i}-${j}`} cx={i * 10 + 5} cy={j * 10 + 5} r="1.5" fill="#3B82F6" />
                                        ))
                                    ))}
                                </svg>
                            </div>

                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#1A3C8B] rounded-full opacity-80 blur-2xl"></div>

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Business Growth - HA Information Technology"
                                    className="w-full h-[300px] md:h-[500px] object-cover"
                                />
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
        </div>
    );
};

const SupportSection = () => {
    return (
        <section className="py-10 md:py-16 bg-white">
            <div className="container mx-auto px-4 xl:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-4">SUPPORT US</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                        Get <span className="text-[#1A3C8B]">in Touch</span> With Us. We are<br className="hidden md:block" />
                        Happy Help.
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-2">
                        HA Information Technology is a Software and Web Development Company focused on creating offers 24/7 Support. Get answers to all your queries immediately.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {/* Contact Us Card */}
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1A3C8B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-black">Contacts us</h3>
                                <div className="space-y-3 text-gray-600 font-medium text-sm md:text-base">
                                    {['+971 523003423', '+91-7096859504'].map((phone, idx) => {
                                        const cleanPhone = phone.replace(/[^0-9]/g, '');
                                        const whatsappLink = `https://api.whatsapp.com/send/?phone=${cleanPhone}&text&type=phone_number&app_absent=0`;

                                        return (
                                            <a
                                                key={idx}
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 hover:text-green-600 transition-colors cursor-pointer`}
                                                title="Chat on WhatsApp"
                                            >
                                                <Phone className="w-6 h-6 transform rotate-12 text-[#1A3C8B]" />
                                                <FaWhatsapp className="w-6 h-6 cursor-pointer" />
                                                <span className="cursor-pointer">{phone}</span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Your Email Card */}
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1A3C8B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-black">Your Email</h3>
                                <p className="text-gray-600 font-medium text-sm md:text-base">Get Instant Support & Maintenance Updates.</p>
                                <div className="pt-2 space-y-3">
                                    <a href="mailto:info@alattastech.com" className="flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors text-sm md:text-base break-all">
                                        <Mail size={16} />
                                        info@alattastech.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { SupportSection };
export default Contact;
