import React from 'react';
import { motion } from 'framer-motion';
import { 
    HeartPulse, 
    Building2, 
    Wrench, 
    Users, 
    Calculator, 
    MessageSquare, 
    Headset, 
    Clock, 
    Sparkles, 
    GraduationCap 
} from 'lucide-react';

const IndustrySection = () => {
    const industries = [
        {
            icon: HeartPulse,
            title: "IVF & Healthcare Software Solutions",
            description: "Patient data security, clinical appointment scheduling, EMR system integration, and healthcare workflow automation built to UAE Ministry of Health and Prevention standards. Our platforms have reduced patient administration processing time by over 40%."
        },
        {
            icon: Building2,
            title: "Real Estate & Property Management",
            description: "CRM platforms, property listing portals, tenancy lifecycle management tools, and automated payment tracking systems built for UAE's dynamic property market — with integration capability for DLD and RERA compliance requirements."
        },
        {
            icon: Wrench,
            title: "Auto Garage & Workshop Management",
            description: "Digital job card management, parts inventory tracking, technician scheduling, automated customer SMS notifications, service history logging, and invoicing systems purpose-built for the UAE automotive aftermarket sector."
        },
        {
            icon: Users,
            title: "HR & Payroll Management Systems",
            description: "WPS-compliant payroll processing platforms, leave and attendance management, employee self-service portals, automated end-of-service gratuity calculation, and HR reporting dashboards built specifically for UAE labour law compliance."
        },
        {
            icon: Calculator,
            title: "Accounting & Inventory Management",
            description: "UAE VAT-compliant accounting platforms with real-time multi-location inventory tracking, supplier management, automated financial reporting, and FTA-compliant VAT return preparation for UAE-registered trading businesses."
        },
        {
            icon: MessageSquare,
            title: "Bulk SMS & Communication Platforms",
            description: "High-volume SMS gateway solutions with delivery tracking dashboards, REST API integration for automated triggers, campaign scheduling tools, and full UAE telecommunications carrier compliance."
        },
        {
            icon: Headset,
            title: "Call Monitoring & Tracking Systems",
            description: "Cloud-based call recording and archiving, live monitoring dashboards, agent performance analytics, CRM-integrated call logging, and compliance recording solutions for contact centres operating across the UAE."
        },
        {
            icon: Clock,
            title: "Time Attendance & Workforce Management",
            description: "Biometric fingerprint, RFID card, facial recognition, and mobile-based attendance systems with automated shift scheduling, overtime calculation, and direct payroll system connectivity."
        },
        {
            icon: Sparkles,
            title: "Cleaning Service Management",
            description: "End-to-end job scheduling, field team dispatch, real-time location tracking, client communication automation, digital invoicing, and performance reporting software built for facility management companies."
        },
        {
            icon: GraduationCap,
            title: "School & Nursery Management Systems",
            description: "KHDA-compliant school management platforms covering student enrolment, fee collection, academic assessment management, parent communication portals, and staff payroll integration."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 xl:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100 shadow-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#1A3C8B] animate-pulse"></div>
                        <span className="text-[#1A3C8B] font-bold text-sm tracking-widest uppercase">INDUSTRIES WE SERVE</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-6"
                    >
                        Deep Industry Knowledge. <br className="hidden md:block" />
                        <span className="text-[#1A3C8B]">Precision-Engineered</span> Digital Solutions.
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed"
                    >
                        Every industry has unique compliance requirements, user expectations, and workflow dynamics. We do not apply generic templates to sector-specific problems — every solution we build reflects the operational reality of your industry.
                    </motion.p>
                </div>

                {/* Grid Layout for 10 Industries */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {industries.map((industry, index) => {
                        // Let's make the last item (10th) span wider if we want to fill a 3-column grid nicely, 
                        // or just leave it as standard grid flow. 10 items in 3 cols leaves 1 dangling.
                        // We can center the last item by using md:col-start-2 lg:col-start-2 if needed, 
                        // but auto-flow is usually fine. Let's just use standard flow.
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col pt-12"
                            >
                                {/* Floating Top Banner Line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-[#1A3C8B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                                {/* Icon floating top right */}
                                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1A3C8B] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                    <industry.icon size={24} />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1A3C8B] transition-colors pr-10">
                                    {industry.title}
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                                    {industry.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default IndustrySection;
