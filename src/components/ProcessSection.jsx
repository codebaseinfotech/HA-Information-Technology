import React from 'react';
import { motion } from 'framer-motion';
import { Eye, FileText, PlayCircle, ShieldCheck, Rocket } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            icon: Eye,
            number: "01",
            title: "Discovery & Requirement Analysis",
            description: "We begin every engagement by listening carefully. In a structured discovery session with your key stakeholders, we map your current systems, understand your business objectives, document your operational pain points, and define clear, measurable success criteria for your project. You receive a written discovery summary — at no charge and with no obligation to proceed."
        },
        {
            icon: FileText,
            number: "02",
            title: "Solution Architecture & Fixed-Price Proposal",
            description: "Our senior engineers design the technical architecture of your solution and our project team produces a detailed, fixed-price proposal. This document includes the recommended technology stack with rationale, system architecture overview, project timeline broken down by milestone, payment schedule, and identified risks with mitigation strategies."
        },
        {
            icon: PlayCircle,
            number: "03",
            title: "Agile Development with Bi-Weekly Client Demos",
            description: "Development follows a sprint-based agile methodology. Every two weeks, you attend a live demo of real, working software. You provide feedback; we incorporate it in the next sprint. You will never reach the end of a six-month project to find surprises — because you see the product evolving throughout the entire build."
        },
        {
            icon: ShieldCheck,
            number: "04",
            title: "Quality Assurance & User Acceptance Testing",
            description: "Before any system goes live, it passes through our structured QA process: functional testing across all defined user journeys, performance load testing against your expected traffic volumes, cross-device and cross-browser compatibility verification, security review, and User Acceptance Testing with your team to ensure every feature performs exactly as scoped."
        },
        {
            icon: Rocket,
            number: "05",
            title: "Launch, Team Training & Ongoing Support",
            description: "We handle the full production deployment, conduct structured training sessions with every team member who will use the system, and transition you to your chosen support plan. Your account manager remains your direct point of contact for the full lifecycle of the product — not just until the invoice is paid."
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A3C8B] opacity-10 blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 xl:px-12 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full mb-6 border border-slate-700 shadow-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
                        <span className="text-gray-300 font-bold text-sm tracking-widest uppercase">OUR PROCESS</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight"
                    >
                        How We Turn Your Business Challenge Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Working Digital Solution</span>
                    </motion.h2>
                </div>

                {/* Timeline Layout */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Connecting Line (Hidden on Mobile) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12 md:space-y-0">
                        {steps.map((step, index) => {
                            const isEven = index % 2 !== 0; // Alternating sides for desktop
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    
                                    {/* Timeline Node Center (Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#1A3C8B] border-4 border-slate-900 items-center justify-center z-10 shadow-xl shadow-[#1A3C8B]/30">
                                        <span className="text-xl font-bold text-white">{step.number}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'}`}>
                                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 group shadow-lg">
                                            
                                            {/* Mobile Node / Icon Header */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="md:hidden w-12 h-12 rounded-full bg-[#1A3C8B] flex items-center justify-center font-bold shadow-lg">
                                                    {step.number}
                                                </div>
                                                {/* Fallback lucide icon rendering correctly (some lucide icons like Blueprint might be named differently, so using regular icons) */}
                                                <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-inner">
                                                    <span className="opacity-90"><step.icon size={24} /></span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors leading-tight">
                                                {step.title}
                                            </h3>
                                            
                                            <p className="text-slate-400 leading-relaxed text-[15px] lg:text-base">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;
