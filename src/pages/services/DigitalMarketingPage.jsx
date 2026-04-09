import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Share2,
  PenTool,
  MousePointerClick,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart,
  MapPin,
  ArrowRight,
  Headphones,
  FileText,
  Clock,
  MessageSquare,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";
import SEO from "../../components/SEO";

// Fallback SEO if getServiceSchema needs specific tuning
const getDigitalSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Hamed Alattas Technology",
    "image": "https://alattastech.com/logo.png",
    "@id": "https://alattastech.com/services/digital-marketing",
    "url": "https://alattastech.com/services/digital-marketing",
    "telephone": "+971-50-3448254", // Replace with real one if different
    "priceRange": "AED 3000+",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Bay",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "UAE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.183921",
      "longitude": "55.266265"
    },
    "areaServed": {
      "@type": "Country",
      "name": "UAE"
    },
    "description": "Hamed Alattas Technology provides full-service digital marketing in UAE including SEO, social media marketing, PPC, content marketing, and local business growth solutions tailored for real estate, fashion, pest control, and other local businesses.",
    "serviceType": [
      "Digital Marketing",
      "SEO Services",
      "Social Media Marketing",
      "PPC Management",
      "Content Marketing"
    ]
  };
};

const DigitalMarketingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      desc: "Dominate search results and increase organic traffic over time. We ensure your website ranks for keywords that matter.",
      bullets: [
        "Local & multilingual keyword research",
        "On-page and technical SEO",
        "Link building & authority optimization",
        "SEO audits and ongoing optimization for UAE market",
      ]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      desc: "Build a strong community and engage with your target audience where they spend their time.",
      bullets: [
        "Instagram, Facebook, LinkedIn, TikTok, and YouTube campaigns",
        "Engaging content creation & community management",
        "Paid social campaigns for faster results",
      ]
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      desc: "Tell your brand story and convert visitors into loyal customers with high-quality content.",
      bullets: [
        "Blog posts, articles, and website content",
        "Email marketing campaigns & newsletters",
        "Video scripts, infographics, and graphics",
      ]
    },
    {
      icon: MousePointerClick,
      title: "Pay-Per-Click (PPC) Advertising",
      desc: "Generate immediate, high-quality leads with hyper-targeted paid advertising.",
      bullets: [
        "Google Ads and social media paid campaigns",
        "Targeted campaigns to reduce cost per lead",
        "Analytics, conversion tracking, and reporting",
      ]
    },
    {
      icon: Briefcase,
      title: "Industry-Focused Campaigns",
      desc: "Customized growth strategies built specifically for your niche.",
      bullets: [
        "Real Estate: Attract buyers and investors organically",
        "Fashion & Clothing Brands: Boost brand awareness and online sales",
        "Pest Control & Local Services: Capture local leads efficiently",
        "Other Local Businesses: Customized growth strategies",
      ]
    }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Industry-Specific Strategies", desc: "We craft campaigns tailored to your business — from real estate in Dubai to fashion brands in Abu Dhabi." },
    { icon: TrendingUp, title: "Organic Growth Focus", desc: "Reduce dependency on costly paid campaigns with long-term growth tactics." },
    { icon: BarChart, title: "Cost-Effective Marketing", desc: "Achieve higher ROI by targeting the right audience organically." },
    { icon: MapPin, title: "Local Expertise", desc: "Reach both Arabic and English-speaking customers across Dubai, Abu Dhabi, Sharjah, and other Emirates." },
    { icon: FileText, title: "Results & Analytics", desc: "Monitor growth with detailed performance reports and actionable insights." }
  ];

  const benefits = [
    "Increase website traffic, leads, and sales",
    "Build brand authority & trust in UAE market",
    "Reduce marketing spend with organic strategies",
    "Access detailed analytics and ROI tracking",
    "Expand your business across all Emirates"
  ];

  const supportSystems = [
    { icon: Briefcase, text: "Dedicated account manager for every client" },
    { icon: BarChart, text: "Monthly performance reports & recommendations" },
    { icon: Headphones, text: "24/7 support for any questions or issues" },
    { icon: MessageSquare, text: "Strategy updates and growth consultations" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <SEO
        title="Digital Marketing Services UAE | SEO, Social Media & PPC"
        description="Grow your UAE business with Hamed Alattas Technology Digital Marketing. SEO, social media, PPC, and content strategies for real estate, fashion, pest control, and local businesses — organic growth, lower costs, measurable results."
        keywords="Digital Marketing UAE, SEO Services Dubai, Social Media Marketing Abu Dhabi, PPC Management UAE, Content Marketing Dubai"
        url="/services/digital-marketing"
        schemas={[getDigitalSchema()]}
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#1a2332] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)" }}></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20px 20px, white 2px, transparent 0)", backgroundSize: "100px 100px" }}></div>
        
        <div className={`container mx-auto px-4 xl:px-12 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold tracking-wider uppercase text-sm mb-6 border border-emerald-500/30"
            >
              Result-Driven Strategies
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8"
            >
              Digital Marketing Services in UAE
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6 font-medium max-w-3xl"
            >
              Helping local businesses like real estate agencies, clothing brands, and service companies grow organically while reducing marketing costs.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl"
            >
              At Hamed Alattas Technology, our strategies focus on sustainable growth, high-quality leads, and measurable ROI across the UAE.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {["Sustainable Growth", "High-Quality Leads", "Measurable ROI"].map((stat, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white text-sm font-semibold flex items-center gap-2 shadow-lg">
                  <Star size={18} className="text-yellow-400" /> {stat}
                </span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30">
                Start Your Organic Growth <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">
                Why Choose Our Digital Marketing?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We craft campaigns tailored strictly to your business objectives, minimizing waste and maximizing organic visibility from Dubai to Abu Dhabi.
              </p>
              <div className="hidden lg:block">
                <div className="w-24 h-2 bg-[#10B981] rounded-full mb-8"></div>
                <p className="text-[#1A3C8B] font-bold text-xl italic border-l-4 border-emerald-400 pl-4">
                  "Organic growth builds long-term assets instead of temporary spikes."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 grid sm:grid-cols-2 gap-6"
            >
              {whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-blue-100 transition-all"
                >
                  <div className="w-14 h-14 bg-white text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-28 bg-[#f8fafc] border-t border-gray-100 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4">
              Comprehensive Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Our Digital Marketing Services in UAE
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className="md:w-1/3 flex flex-col items-start">
                  <div className="w-16 h-16 bg-blue-50 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} />
                  </div>
                  <div className="text-5xl font-extrabold text-[#f1f5f9] mb-4">0{idx + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
                </div>
                
                <div className="md:w-2/3 md:border-l border-gray-100 md:pl-10 flex items-center">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 w-full">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 bg-gray-50/50 p-4 rounded-xl">
                        <CheckCircle2 size={24} className="text-[#10B981] flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Support Structure */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a2332] to-[#1A3C8B] rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Benefits of Choosing Hamed Alattas Technology</h2>
              <ul className="space-y-6 relative z-10">
                {benefits.map((benefit, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] rounded-xl flex items-center justify-center shrink-0">
                      <TrendingUp size={20} />
                    </div>
                    <span className="font-semibold text-lg text-blue-50">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Support System & Client Care
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                We don't just execute campaigns; we partner with you to understand the granular details of your revenue pipeline. 
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {supportSystems.map((item, i) => (
                  <motion.div 
                    whileHover={{ y: -5 }}
                    key={i} 
                    className="bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-white text-[#1A3C8B] rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                      <item.icon size={24} />
                    </div>
                    <p className="font-bold text-gray-800">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-[3rem] p-10 md:p-20 text-center shadow-xl relative overflow-hidden"
          >
             <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#1A3C8B] to-[#10B981]"></div>
             <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">Grow Your Business Organically in UAE</h2>
             <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
               Whether you run a real estate company, clothing brand, pest control service, or any local business, Hamed Alattas Technology Digital Marketing Services can help you reach the right audience, reduce costs, and grow sustainably.
             </p>
             <Link to="/contact" className="inline-flex items-center gap-3 bg-[#1A3C8B] hover:bg-blue-800 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/30">
                Start Your Organic Growth Journey <ArrowRight size={24} />
             </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketingPage;
