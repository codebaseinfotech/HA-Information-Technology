import React from 'react';
import { motion } from 'framer-motion';
import { Target, BadgeCheck, MapPin, FileSignature, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyTrustUsSection = () => {
    const reasons = [
        {
            icon: Target,
            title: "We own the outcome, not just the delivery",
            description: "Most IT firms define success as project closure. We define success as measurable improvement in your business outcomes. Every engagement includes a named account manager, post-launch performance reviews at 30, 60, and 90 days, and a clear documented escalation process. If the system we built is not performing as scoped, we return to resolve it — at no additional cost.",
            color: "blue"
        },
        {
            icon: BadgeCheck,
            title: "Certified expertise across every discipline",
            description: "Our engineers hold certifications including AWS Certified Solutions Architect, Microsoft Azure Administrator, Cisco CCNA, and PMP. We do not outsource to freelancers or sub-contract to junior developers. The senior engineer who scopes your project is the same engineer who leads its development.",
            color: "emerald"
        },
        {
            icon: MapPin,
            title: "UAE-specific market knowledge over 7 years",
            description: "We understand UAE compliance requirements, WPS-aligned payroll integrations, Arabic-English bilingual system architecture, UAE-approved payment gateways, and UAE commercial law expectations. This market-specific knowledge saves our clients an average of 4–6 weeks of costly rework.",
            color: "purple"
        },
        {
            icon: FileSignature,
            title: "Fixed-scope proposals with zero hidden costs",
            description: "Before any project begins, you receive a detailed written proposal with fixed pricing, clearly defined deliverables, milestone-based payment terms, and a fully scoped change-control process. If the scope changes, we discuss it with you before it affects your budget. You will never receive an unexpected invoice.",
            color: "amber"
        },
        {
            icon: Lock,
            title: "Security-first engineering on every project",
            description: "Security is not a feature we add at the end — it is a requirement built into our development process from day one. Every system includes code-level security reviews, SSL/TLS encryption, role-based access control, GDPR-aligned data handling, and third-party penetration testing. Your clients' data is treated with utmost care.",
            color: "rose"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 xl:px-12 relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 items-end">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100 shadow-sm"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#1A3C8B] animate-pulse"></div>
                            <span className="text-[#1A3C8B] font-bold text-sm tracking-widest uppercase">Why Trust Us</span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight"
                        >
                            Why Choose <span className="text-[#1A3C8B]">HA IT</span> Over Larger Agencies
                        </motion.h2>
                    </div>

                    <div className="lg:w-1/2 pb-2">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed"
                        >
                            We don't just deliver code; we deliver business outcomes. Unlike giant bureaucratic agencies, our lean operations allow us to provide dedicated senior engineers, absolute transparency, and a partnership model built on your actual success.
                        </motion.p>
                    </div>
                </div>

                {/* Grid Layout for 5 Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-${reason.color}-200 hover:shadow-xl transition-all duration-300 group flex flex-col`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-${reason.color}-50 flex items-center justify-center text-${reason.color}-600 mb-6 group-hover:scale-110 group-hover:bg-[#1A3C8B] group-hover:text-white transition-all duration-300`}>
                                <reason.icon size={28} strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {reason.title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Final CTA Card to complete the 6-slot grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-[#1A3C8B] rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-tr-full"></div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                            Ready to transform your business?
                        </h3>
                        <p className="text-blue-100 mb-8 relative z-10">
                            Book a free, no-obligation discovery consultation with our senior technical specialists today.
                        </p>
                        <Link 
                            to="/contact" 
                            className="bg-white text-[#1A3C8B] px-8 py-3 rounded-full font-bold hover:bg-gray-100 inline-flex items-center gap-2 transition-transform transform hover:scale-105 relative z-10 w-full justify-center"
                        >
                            Book Free Consultation
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WhyTrustUsSection;
