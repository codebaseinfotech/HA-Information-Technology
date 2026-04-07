import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    const faqs = [
        {
            question: "How much does custom software development cost in the UAE?",
            answer: "The investment required for custom software development in the UAE depends on the system's complexity, user scale, and third-party integrations required. As a general framework: straightforward internal tools typically range from AED 15,000–50,000. Mid-complexity business platforms range from AED 50,000–200,000. We provide a detailed, fixed-price proposal following a free discovery consultation."
        },
        {
            question: "How long does it take to build a professional website in Dubai?",
            answer: "A professionally designed, technically optimised, SEO-ready business website typically requires 4–8 weeks from final brief to launch. E-commerce platforms generally require 8–14 weeks. Every proposal we issue includes a detailed timeline broken down by milestone, so you know exactly when each deliverable is expected."
        },
        {
            question: "Do you provide ongoing support after a project is delivered?",
            answer: "Yes. All projects include a post-launch warranty period during which we resolve any defects at no additional charge. Beyond the warranty, we offer structured maintenance and support contracts at tiered pricing levels — from basic monthly health monitoring to fully managed IT service agreements."
        },
        {
            question: "Can your AI solutions integrate with our existing software systems?",
            answer: "In the majority of cases, yes. Our AI solutions are designed to layer onto your existing infrastructure rather than replace it — using API integrations and middleware layers to connect intelligent automation. We conduct a full technical discovery before recommending any AI architecture."
        },
        {
            question: "Are your systems compliant with UAE data protection laws?",
            answer: "Yes. Every system we develop is designed to comply with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection, as well as sector-specific requirements including KHDA, DHA, MOHAP, and WPS regulations depending on your industry."
        },
        {
            question: "Do you serve businesses outside Dubai?",
            answer: "Yes. We serve businesses across all seven Emirates — including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also work with UAE-registered businesses that operate across the wider GCC region."
        },
        {
            question: "What makes your e-commerce development different?",
            answer: "We design e-commerce platforms around conversion optimisation from the ground up — including checkout flow analysis, mobile-first performance, UAE payment gateway selection, and post-purchase retention mechanics. We also possess deep experience in complex B2B e-commerce architectures."
        },
        {
            question: "How do I get started?",
            answer: "The first step is a free, no-obligation discovery consultation. During this session, we listen to your challenge, ask the questions needed to understand your business context, and provide an honest assessment of the best approach. There is no sales pressure and no commitment required at this stage."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="!py-10 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 xl:px-12 relative z-10">
                
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column - Header Info */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100 shadow-sm"
                        >
                            <MessageCircleQuestion className="text-[#1A3C8B]" size={16} />
                            <span className="text-[#1A3C8B] font-bold text-sm tracking-widest uppercase">FAQ</span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-6"
                        >
                            Frequently Asked <span className="text-[#1A3C8B]">Questions</span>
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-600 leading-relaxed mb-8"
                        >
                            Everything you need to know about working with us, from project timelines and fixed-cost guarantees to post-launch support and UAE market compliance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Still have questions?</h4>
                                <p className="text-gray-600 text-sm mb-4">We are available on WhatsApp for immediate support.</p>
                                <Link 
                                    to="/contact"
                                    className="inline-block bg-[#10B981] hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-bold transition-colors shadow-lg shadow-emerald-500/30"
                                >
                                    Message the Team
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                                            isOpen ? 'border-blue-200 shadow-lg shadow-blue-100/50' : 'border-gray-200 shadow-sm hover:border-gray-300'
                                        }`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                        >
                                            <h3 className={`font-bold pr-8 ${isOpen ? 'text-[#1A3C8B] text-lg lg:text-xl' : 'text-gray-900 text-lg'}`}>
                                                {faq.question}
                                            </h3>
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                                isOpen ? 'bg-[#1A3C8B] text-white' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                            </div>
                                        </button>
                                        
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
