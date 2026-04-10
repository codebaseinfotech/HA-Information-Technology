import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Search, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ValuePropSection = () => {
    const problems = [
        {
            icon: Zap,
            problem: "Your team spends hours every week on manual processes — data entry, report generation, approval workflows — that could and should run automatically.",
            solution: "We build bespoke automation software and AI-powered workflow systems that eliminate repetitive tasks entirely, freeing your team to focus on decisions that require human judgement.",
            label: "Manual Processes",
            activeClass: "from-blue-500 to-[#1A3C8B]"
        },
        {
            icon: Search,
            problem: "Your website ranks poorly on Google, loads slowly, and converts less than 2% of the visitors who do find it.",
            solution: "We develop technically excellent, SEO-optimised websites built to pass Google's Core Web Vitals assessment — with conversion architecture that turns visitors into qualified enquiries.",
            label: "Poor Conversion",
            activeClass: "from-green-400 to-green-600"
        },
        {
            icon: ShieldCheck,
            problem: "You have been let down by IT vendors who delivered below expectations, disappeared post-launch, or handed work to junior sub-contractors without telling you.",
            solution: "Our delivery model is built differently. A named senior engineer leads every project. You receive bi-weekly progress demos. A structured SLA governs every support contract.",
            label: "Vendor Reliability",
            activeClass: "from-purple-500 to-purple-700"
        }
    ];

    return (
        <section className="py-12 bg-gray-50 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#1A3C8B] opacity-[0.02] blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-400 opacity-[0.03] blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-4 xl:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
                            Is Outdated Technology <br className="hidden md:block" /> 
                            <span className="text-[#1A3C8B]">Silently Costing</span> Your UAE Business?
                        </h2>
                        <p className="text-lg md:text-lg  text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Most businesses we work with are not searching for <span className="font-semibold text-gray-900">'technology for its own sake.'</span> They are dealing with specific, daily operational frustrations that compound every quarter — eroding margins, frustrating teams, and driving customers to competitors who operate more efficiently.
                        </p>
                        <p className="mt-6 text-[#1A3C8B] font-bold text-lg">If any of the following sounds familiar, you are in the right place.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -12 }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.activeClass} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-bl-full`}></div>
                            
                            <div className="mb-10 relative">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.activeClass} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                                    <item.icon size={28} />
                                </div>
                                <div className="absolute -top-2 -right-2 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                                        Problem {index + 1}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-8 flex-grow">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1A3C8B] transition-colors">{item.label}</h3>
                                    <p className="text-gray-500 leading-relaxed italic text-sm md:text-base">
                                        "{item.problem}"
                                    </p>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                                            <ShieldCheck size={14} className="text-green-600" />
                                        </div>
                                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Our Solution</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link 
                            to="/contact"
                            className="bg-[#1A3C8B] text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-[#1A3C8B]/80 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-3"
                        >
                            See Exactly What Your Business Needs (Free)
                            <ArrowRight size={20} className="animate-pulse" />
                        </Link>
                    </motion.div>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <TrendingUp size={16} />
                            <span className="text-sm font-semibold uppercase tracking-wider">Boost Effeciency</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award size={16} />
                            <span className="text-sm font-semibold uppercase tracking-wider">Expert Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuePropSection;
