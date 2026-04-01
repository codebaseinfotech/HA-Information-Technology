import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  ShoppingCart,
  Globe,
  Smartphone,
  ShieldCheck,
  PhoneCall,
  Server,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CoreServicesSection = () => {
  // Top 3 Priority Services
  const priorityServices = [
    {
      title: "Custom Software Development",
      description:
        "When off-the-shelf software limits your growth, a system built precisely around your workflows becomes your competitive advantage. We design and develop fully bespoke software solutions — from internal operations platforms and ERP systems to complex multi-user applications and API integrations — engineered to remove manual inefficiency, connect disconnected data, and scale reliably as your business grows. Every system we deliver is documented, tested, and handed over with staff training included. We have built custom software across healthcare, real estate, logistics, retail, and facilities management sectors across the UAE.",
      icon: Code2,
      color: "blue",
    },
    {
      title: "AI Solutions & Business Automation",
      description:
        "Artificial intelligence is no longer a future consideration — it is the operational advantage your competitors are already deploying. We build practical, business-ready AI systems including intelligent chatbots that handle customer enquiries around the clock, automated document processing pipelines that eliminate manual data handling, predictive analytics dashboards that surface insights hidden in your existing data, and AI-powered workflow automation that reduces process time by an average of 60–80%. Every AI solution we deliver integrates with your existing platforms — no disruptive system replacement required. We scope AI solutions based on your actual business data, not a generic template.",
      icon: Bot,
      color: "emerald",
    },
    {
      title: "B2B & B2C E-Commerce Development",
      description:
        "A high-performing e-commerce platform is not simply a product catalogue with a checkout button. It is a revenue engine — and the difference between a platform that converts at 1.2% and one that converts at 4.5% is entirely in the engineering and UX decisions made during development. We build complete e-commerce ecosystems with UAE-compliant payment gateway integration (including Telr, PayTabs, and Stripe), real-time inventory management, multi-language and multi-currency support, abandoned cart recovery, and performance-optimised product pages. We work across custom builds and WooCommerce — the platform choice is always driven by your business model, not our convenience.",
      icon: ShoppingCart,
      color: "purple",
    },
  ];

  // Remaining 6 Complementary Services
  const standardServices = [
    {
      title: "Custom Web Design & Development",
      description:
        "Your website is either your most effective sales asset or your most expensive missed opportunity — and the difference is almost entirely technical. We build modern, lightning-fast, mobile-first websites that pass Google's Core Web Vitals assessment, rank for your target UAE search terms, and convert qualified visitors into enquiries. Every site includes on-page SEO foundations, bilingual Arabic/English capability where required, a content management system your team can use without technical support, and structured data markup for enhanced Google search appearance.",
      icon: Globe,
    },
    {
      title: "Mobile App Development",
      description:
        "In a country where smartphone penetration exceeds 97%, the quality of your mobile presence directly affects your revenue. We build high-performance native and cross-platform mobile applications for Android and iOS — from customer-facing service apps that enhance your brand experience to internal workforce management tools that keep distributed teams connected and productive. Every app we deliver is UX-tested across real devices, performance-optimised for UAE network conditions, and built with an architecture that scales as your user base grows.",
      icon: Smartphone,
    },
    {
      title: "Cybersecurity & Access Control",
      description:
        "Cyber threats targeting UAE businesses increased significantly in recent years, and a single breach can result in regulatory penalties, operational paralysis, and irreparable reputational damage. We provide end-to-end cybersecurity services — including network security audits, firewall architecture, biometric and RFID access control systems, real-time threat monitoring, vulnerability assessments, and staff awareness training — designed to protect your business at every layer, from physical access points to cloud-hosted data.",
      icon: ShieldCheck,
    },
    {
      title: "PABX & Business Communication Systems",
      description:
        "Fragmented communication costs businesses more than most realise — in missed calls, delayed decisions, and customer experience failures. We supply, configure, and maintain IP PABX and VoIP communication systems designed around your team size, office layout, and operational requirements. Whether you need a single-office setup or a unified communication network across multiple UAE locations, we deliver systems that reduce call infrastructure costs and integrate with your existing CRM.",
      icon: PhoneCall,
    },
    {
      title: "IT Infrastructure",
      description:
        "Every business faces unique operational challenges—manual processes, disconnected systems, compliance risks, and inefficiencies that slow growth. At Hamed Al Attas, we build custom IT infrastructure solutions that solve these problems. Our platforms automate workflows, secure sensitive data, integrate disparate systems, and provide real-time insights—helping your team work smarter, reduce errors, and scale faster. With solutions designed to fit your exact operational needs, you gain speed, reliability, and measurable performance improvements across your organization.",
      icon: Server,
    },
    {
      title: "Digital Marketing Services",
      description:
        "Visibility without conversion is an expense, not an investment. We deliver data-driven digital marketing strategies—including search engine optimization, Google Ads management, social media marketing, and conversion rate optimisation — calibrated specifically for UAE market dynamics, Arabic search behaviour, and the competitive landscapes of Dubai, Abu Dhabi, and Sharjah. Every campaign is tracked and reported in full so you know exactly what your marketing investment is returning.",
      icon: LineChart,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-100 opacity-30 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 text-balance">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#1A3C8B] animate-pulse"></div>
            <span className="text-[#1A3C8B] font-bold text-sm tracking-widest uppercase">
              CORE SERVICES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#111827] mb-8 leading-tight"
          >
            Complete IT & Digital Services — <br className="hidden md:block" />
            <span className="text-[#1A3C8B]">
              Everything Your Business Needs, Under One Roof
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            From the first line of code to full-scale enterprise infrastructure
            — we design, build, deploy, and support every digital system your
            UAE business depends on. Our three priority disciplines are Custom
            Software Development, AI & Automation, and E-Commerce — supported by
            a full suite of complementary IT services.
          </motion.p>
        </div>

        {/* Priority Services (Top 3 Large Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {priorityServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}-50 rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-110 -z-10`}
              ></div>

              <div className="mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-${service.color}-50 flex items-center justify-center text-${service.color}-600 mb-6 group-hover:scale-110 group-hover:bg-[#1A3C8B] group-hover:text-white transition-all duration-500 shadow-sm`}
                >
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#1A3C8B] transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed flex-grow text-[15px] xl:text-base">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100 translate-y-2 opacity-80 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#1A3C8B] font-bold gap-2 group/link"
                >
                  Discuss Your Project
                  <ArrowRight
                    size={18}
                    className="transform group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-24 bg-gray-300"></div>
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
            Complementary IT Services
          </span>
          <div className="h-px w-24 bg-gray-300"></div>
        </div>

        {/* Standard Services Grid (Remaining 6 Small Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {standardServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl border border-gray-100 flex gap-5 hover:border-blue-100 cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-blue-50 group-hover:text-[#1A3C8B] transition-colors shadow-inner">
                  <service.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1A3C8B] transition-colors leading-tight">
                  {service.title}
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 text-sm leading-relaxed transition-all"
                >
                  {service.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
