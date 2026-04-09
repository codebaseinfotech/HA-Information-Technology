import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, BarChart3, Quote, Star } from 'lucide-react';

const CaseStudySection = () => {
    const caseStudies = [
        {
            metricInfo: {
                icon: Clock,
                value: "72%",
                label: "Reduction in Processing Time",
                color: "text-blue-600",
                bg: "bg-blue-50"
            },
            quote: "This system completely transformed how our HR team operates. A process that used to take three full working days every month now completes automatically overnight. The system is exactly what we needed — and the support since launch has been exceptional.",
            author: {
                name: "Ahmed Al Mansoori",
                title: "Operations Director",
                company: "Fix Auto Parts",
                city: "Sharjah, UAE",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
            }
        },
        {
            metricInfo: {
                icon: TrendingUp,
                value: "+60%",
                label: "Increase in Qualified Enquiries",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
            },
            quote: "After working with two previous web agencies in Dubai that delivered below expectations, the difference with this team was immediate. Our website now ranks on page one for our core service terms, and qualified enquiries have skyrocketed since launch.",
            author: {
                name: "Sarah Jenkins",
                title: "Marketing Head",
                company: "Toretto Recovery",
                city: "Dubai, UAE",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
            }
        },
        {
            metricInfo: {
                icon: BarChart3,
                value: "20 hrs",
                label: "Manual Work Saved Weekly",
                color: "text-purple-600",
                bg: "bg-purple-50"
            },
            quote: "The AI automation system they built for our operations has saved our team over 20 hours of manual work every single week. The ROI was visible within the first month. I would not hesitate to recommend them to any UAE business looking to scale efficiently.",
            author: {
                name: "Tariq Mahmood",
                title: "Managing Director",
                company: "Prime Logistics LLC",
                city: "Abu Dhabi, UAE",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
            }
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="container mx-auto px-4 xl:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100 shadow-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#1A3C8B] animate-pulse"></div>
                        <span className="text-[#1A3C8B] font-bold text-sm tracking-widest uppercase">CASE STUDIES</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-extrabold text-[#111827] leading-tight mb-6"
                    >
                        Measurable Results. Real UAE Businesses. <span className="text-[#1A3C8B]">Verified Outcomes.</span>
                    </motion.h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden"
                        >
                            {/* Accent Top Line */}
                            <div className={`absolute top-0 left-0 right-0 h-2 ${study.metricInfo.bg.replace('50', '500')}`}></div>

                            {/* Top Metric Strip */}
                            <div className={`p-8 pb-6 border-b border-gray-100 ${study.metricInfo.bg} flex justify-between items-center`}>
                                <div>
                                    <h4 className={`text-4xl font-extrabold ${study.metricInfo.color} mb-1`}>
                                        {study.metricInfo.value}
                                    </h4>
                                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        {study.metricInfo.label}
                                    </p>
                                </div>
                                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm ${study.metricInfo.color}`}>
                                    <study.metricInfo.icon size={24} strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Quote Content */}
                            <div className="p-8 flex-grow flex flex-col relative">
                                <Quote className="absolute top-6 left-6 text-gray-100 w-16 h-16 -z-10 rotate-180" />
                                
                                <div className="flex gap-1 text-amber-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                
                                <p className="text-gray-700 leading-relaxed italic mb-8 relative z-10 font-medium">
                                    "{study.quote}"
                                </p>

                                {/* Author Block */}
                                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-50">
                                    <img 
                                        src={study.author.image} 
                                        alt={study.author.name} 
                                        width="56"
                                        height="56"
                                        loading="lazy"
                                        className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white ring-2 ring-gray-100"
                                    />
                                    <div>
                                        <h5 className="font-bold text-gray-900">{study.author.name}</h5>
                                        <p className="text-xs text-[#1A3C8B] font-semibold">{study.author.title}</p>
                                        <p className="text-xs text-gray-500">{study.author.company} • {study.author.city}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
