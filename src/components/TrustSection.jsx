import React from 'react';
import trustAvatar1 from '../assets/images/unsplash/trust-avatar-1.jpg';
import trustAvatar2 from '../assets/images/unsplash/trust-avatar-2.jpg';
import trustAvatar3 from '../assets/images/unsplash/trust-avatar-3.jpg';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Star, Code, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  FaHospital, 
  FaGraduationCap, 
  FaTruck, 
  FaShoppingCart, 
  FaPlane, 
  FaHeartbeat, 
  FaCogs, 
  FaEllipsisH,
  FaUniversity,
  FaVideo,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';

const TrustSection = () => {
    // Industries data matching Image 1
    const industries = [
        { icon: FaUniversity, label: 'Banking, Finance, & Insurance' },
        { icon: FaHospital, label: 'HealthCare' },
        { icon: FaGraduationCap, label: 'Education' },
        { icon: FaTruck, label: 'Logistics' },
        { icon: FaShoppingCart, label: 'eCommerce' },
        { icon: FaPlane, label: 'Travel & Hospitality' },
        { icon: FaHeartbeat, label: 'Lifestyle' },
        { icon: FaCogs, label: 'ERP / CRM' },
        { icon: FaVideo, label: 'Social Media & Entertainment' },
        { icon: FaEllipsisH, label: 'Other' },
    ];

    // Testimonials data matching Image 2
    const testimonials = [
        {
            brandIcon: Code,
            brandName: "bind AI",
            quote: "Saved a Critical Project in 48 Hours",
            authorAvatar: trustAvatar1,
            authorName: "Sam",
            authorCompany: "Bind AI"
        },
        {
            brandIcon: Terminal,
            brandName: "Tez Wealth",
            quote: "Hired a React.js Developer seamlessly",
            authorAvatar: trustAvatar2,
            authorName: "Pranoy",
            authorCompany: "Tez Wealth"
        },
        {
            brandIcon: Cpu,
            brandName: "TechFlow",
            quote: "Delivered scalable infrastructure on time",
            authorAvatar: trustAvatar3,
            authorName: "Alex",
            authorCompany: "TechFlow"
        }
    ];

    // Social Media Icons for the carousel
    const socialLogos = [FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter];

    return (
        <>
            {/* --- SECTION 1: What Our Clients Have to Say (Light Background) --- */}
            <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto px-4 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                        
                        {/* Left Side: Heading & Ratings */}
                        <div className="space-y-6 max-w-lg">
                            <motion.h2 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3a3a3a] leading-[1.1]"
                            >
                                What Our <br/> Clients Have to <br/> Say About <br/>
                                <span className="text-[#1A3C8B]">Hamed Alattas Technology</span>
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-gray-600 text-lg md:text-xl leading-relaxed"
                            >
                                Trusted by startups & enterprises worldwide. Our clients hire faster, reduce hiring risks, and scale seamlessly with Hamed Alattas Technology.
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex items-center gap-3 pt-4"
                            >
                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={28} fill="currentColor" />
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-gray-800">4.9 / 5</span>
                                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Google Business Rating</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Swiper Carousel */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full pb-10" // Padding bottom for pagination dots
                        >
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet !bg-gray-300', bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#1A3C8B]' }}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                className="w-full max-w-md mx-auto drop-shadow-2xl"
                            >
                                {testimonials.map((testi, idx) => (
                                    <SwiperSlide key={idx} className="pb-12">
                                        <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col items-center text-center h-full border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                                            
                                            {/* Brand Header */}
                                            <div className="flex items-center justify-center gap-2 mb-8">
                                                <testi.brandIcon size={32} className="text-gray-800" />
                                                <span className="text-xl font-bold tracking-tight text-gray-900">{testi.brandName}</span>
                                            </div>

                                            {/* Quote */}
                                            <p className="text-gray-500 font-medium text-lg mb-8 italic">
                                                "{testi.quote}"
                                            </p>

                                            {/* Author Info */}
                                            <div className="flex flex-col items-center gap-2 mb-8">
                                                <img 
                                                    src={testi.authorAvatar} 
                                                    alt={testi.authorName} 
                                                    width="64"
                                                    height="64"
                                                    loading="lazy"
                                                    className="w-16 h-16 rounded-full object-cover border-4 border-gray-50 mb-2" 
                                                />
                                                <p className="font-bold text-gray-900">{testi.authorName}, {testi.authorCompany}</p>
                                            </div>

                                            {/* CTA Button Inside Card */}
                                            <Link 
                                                to="/contact" 
                                                className="bg-[#1A3C8B] text-white px-8 py-3 w-full rounded-md font-bold text-base hover:bg-[#122b64] transition-colors shadow-lg hover:shadow-xl"
                                            >
                                                Get IT Solutions Now
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </div>

                    {/* Social Media Logos Banner (As Requested) */}
                    <div className="mt-8 pt-10 border-t border-gray-100">
                        <p className="text-center text-gray-400 font-semibold uppercase tracking-widest text-sm mb-8">Connect With Us Across Platforms</p>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={40}
                            slidesPerView={3}
                            breakpoints={{
                                640: { slidesPerView: 4 },
                                768: { slidesPerView: 5 },
                            }}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            className="w-full opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                            {[...socialLogos, ...socialLogos].map((Icon, idx) => (
                                <SwiperSlide key={idx} className="flex justify-center">
                                    <Icon size={40} className="text-gray-400 hover:text-[#1A3C8B] transition-colors" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </section>


            {/* --- SECTION 2: Our Expertise (Dark Background) --- */}
            <section className="py-24 bg-slate-900">
                <div className="container mx-auto px-4 xl:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link 
                                to="/contact" 
                                className="bg-[#1A3C8B] text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-[#1A3C8B]/80 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-3"
                            >
                                Get Your Free IT Consultation
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Link 
                                to="/contact" 
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-slate-900 transition-all shadow-md hover:shadow-xl hover:scale-105 inline-block text-center whitespace-nowrap"
                            >
                                Get a Custom Solution Plan in 48 Hours
                            </Link>
                        </motion.div>
                    </div>

                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
                        >
                            Trusted by <span className="text-[#1A3C8B] italic pr-1">Leading Businesses</span> Across the UAE
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                        {industries.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, backgroundColor: '#1e293b' }}
                                className="bg-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 border border-white/5 cursor-pointer transition-colors duration-300 min-h-[160px] md:min-h-[180px]"
                            >
                                <item.icon size={42} className="text-white mb-2" />
                                <span className="text-white text-sm md:text-base font-medium text-center leading-tight">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrustSection;
