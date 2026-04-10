import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Users,
  BarChart,
  Zap,
  Shield,
  Send,
  Image,
  Bot,
  Target,
  Clock,
  ShoppingCart,
  Building2,
  Headphones,
  FileText,
  Star,
  Plus,
  ChevronDown,
} from "lucide-react";
import SEO from "../../components/SEO";
import { getServiceSchema, getFAQSchema } from "../../utils/seo";

/* ─── FAQ Accordion ─── */
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`border rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 ${isOpen ? "border-[#1A3C8B]/30" : "border-gray-200"}`}>
    <button onClick={onClick} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-[#1A3C8B] text-white" : "bg-[#1A3C8B]/10 text-[#1A3C8B]"}`}>
          {isOpen ? <ChevronDown size={20} className="transform rotate-180" /> : <Plus size={20} />}
        </div>
        <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? "text-[#1A3C8B]" : "text-gray-900"}`}>{question}</span>
      </div>
    </button>
    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
      <div className="overflow-hidden">
        <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed">{answer}</div>
      </div>
    </div>
  </div>
);

const WhatsAppMarketingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Send,
      title: "Bulk WhatsApp Messaging",
      desc: "Reach thousands of verified customers instantly with personalized messages — text, images, videos, and documents.",
      bullets: ["Personalized bulk message campaigns", "Rich media support (images, videos, PDFs)", "Scheduled message delivery", "Delivery & read receipt tracking"],
    },
    {
      icon: Bot,
      title: "WhatsApp Chatbot Automation",
      desc: "Automate customer interactions with intelligent chatbots that handle inquiries, bookings, and support 24/7.",
      bullets: ["AI-powered auto-replies", "Lead qualification & routing", "FAQ automation", "Seamless human handoff"],
    },
    {
      icon: Target,
      title: "Targeted Campaign Management",
      desc: "Segment your audience and run hyper-targeted campaigns that drive engagement and conversions.",
      bullets: ["Audience segmentation by demographics", "Behavioral & purchase-based targeting", "A/B testing for messages", "Campaign performance analytics"],
    },
    {
      icon: ShoppingCart,
      title: "WhatsApp Commerce & Catalogs",
      desc: "Turn WhatsApp into a sales channel with product catalogs, order management, and payment links.",
      bullets: ["Product catalog integration", "In-chat order placement", "Payment link generation", "Order status notifications"],
    },
    {
      icon: Users,
      title: "WhatsApp Business API Setup",
      desc: "We set up and configure the official WhatsApp Business API for your company — verified, secure, and scalable.",
      bullets: ["Green tick verification assistance", "API integration with CRM & ERP", "Multi-agent team inbox setup", "Compliance with WhatsApp policies"],
    },
    {
      icon: BarChart,
      title: "Analytics & Performance Tracking",
      desc: "Measure every message, click, and conversion with detailed campaign analytics and ROI reports.",
      bullets: ["Real-time delivery dashboards", "Click-through & conversion tracking", "Customer engagement metrics", "Monthly ROI reports"],
    },
  ];

  const whyWhatsApp = [
    { icon: Users, title: "2B+ Active Users", desc: "WhatsApp is the most-used messaging app globally — your customers are already there." },
    { icon: Zap, title: "98% Open Rate", desc: "WhatsApp messages have near-perfect open rates compared to email's 20% average." },
    { icon: Clock, title: "Instant Delivery", desc: "Messages arrive in seconds — no spam folders, no delays, no algorithms hiding your content." },
    { icon: Shield, title: "End-to-End Encryption", desc: "Every message is encrypted by default, ensuring customer data privacy and trust." },
    { icon: Star, title: "Rich Media Support", desc: "Send images, videos, PDFs, location pins, and interactive buttons — not just plain text." },
    { icon: MessageSquare, title: "Two-Way Conversations", desc: "Unlike SMS or email blasts, WhatsApp enables real-time two-way customer dialogue." },
  ];

  const industries = [
    { icon: Building2, title: "Real Estate", desc: "Share property listings, schedule viewings, and follow up with leads via WhatsApp catalogs and automation." },
    { icon: ShoppingCart, title: "E-Commerce & Retail", desc: "Send order confirmations, abandoned cart reminders, flash sale alerts, and product recommendations." },
    { icon: Headphones, title: "Service Businesses", desc: "Automate appointment bookings, service reminders, and customer support for salons, clinics, and repair shops." },
    { icon: Building2, title: "Hospitality & Travel", desc: "Manage bookings, send itineraries, and handle customer queries with interactive WhatsApp messages." },
    { icon: FileText, title: "Education & Training", desc: "Share course updates, admission info, and handle student queries via organized WhatsApp workflows." },
  ];

  const processSteps = [
    { step: "01", title: "Strategy & Planning", desc: "We understand your audience, goals, and messaging tone to craft a WhatsApp marketing strategy aligned with your business." },
    { step: "02", title: "API Setup & Verification", desc: "We set up the WhatsApp Business API, configure your business profile, and assist with green tick verification." },
    { step: "03", title: "Chatbot & Template Design", desc: "We design conversation flows, message templates, and chatbot logic tailored to your use cases." },
    { step: "04", title: "Campaign Launch", desc: "We execute targeted campaigns with automated scheduling, audience segmentation, and rich media content." },
    { step: "05", title: "Optimization & Reporting", desc: "We track performance, optimize messaging, and provide monthly analytics reports with actionable insights." },
  ];

  const faqs = [
    { question: "Is WhatsApp marketing legal in the UAE?", answer: "Yes, WhatsApp marketing through the official Business API is fully compliant with UAE regulations, provided you have customer opt-in consent and follow WhatsApp's commerce and messaging policies." },
    { question: "What is the WhatsApp Business API?", answer: "The WhatsApp Business API is the official enterprise-grade interface for businesses to send messages at scale, integrate chatbots, and manage customer conversations through a verified business account." },
    { question: "How is this different from regular WhatsApp?", answer: "The Business API supports bulk messaging, chatbot automation, CRM integration, multi-agent support, and analytics — features not available in the regular WhatsApp or WhatsApp Business app." },
    { question: "Can I send promotional messages on WhatsApp?", answer: "Yes. With the Business API and proper opt-in from customers, you can send promotional messages including offers, product launches, event invitations, and more." },
    { question: "How much does WhatsApp marketing cost?", answer: "Costs depend on message volume, API provider fees, and campaign complexity. We provide transparent pricing with no hidden charges — contact us for a tailored quote." },
    { question: "Can I integrate WhatsApp with my CRM?", answer: "Absolutely. We integrate WhatsApp with popular CRMs like HubSpot, Salesforce, Zoho, and custom platforms for seamless lead management and customer tracking." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="WhatsApp Marketing Services UAE | Bulk Messaging & Chatbots | Hamed Alattas Technology"
        description="Grow your UAE business with WhatsApp marketing. Bulk messaging, chatbot automation, WhatsApp Business API setup, and targeted campaigns from Hamed Alattas Technology."
        keywords="WhatsApp Marketing UAE, WhatsApp Business API Dubai, Bulk WhatsApp Messaging, WhatsApp Chatbot Abu Dhabi, WhatsApp Commerce"
        url="/services/whatsapp-marketing"
        schemas={[
          getServiceSchema({
            serviceType: "WhatsApp Marketing, Bulk Messaging, Chatbot Automation, WhatsApp Business API",
            description: "Hamed Alattas Technology provides WhatsApp marketing services in UAE including bulk messaging, chatbot automation, Business API setup, and targeted campaign management.",
            minPrice: "500",
            maxPrice: "10000",
          }),
          getFAQSchema(faqs),
        ]}
      />

      {/* ─── Hero ─── */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1a2332] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className={`container mx-auto px-4 xl:px-12 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-4xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 font-bold tracking-wider uppercase text-sm mb-6 border border-green-500/30">
              98% Open Rate Marketing
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              WhatsApp Marketing Services in UAE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Reach your customers where they already spend their time — directly on WhatsApp. No spam folders. No algorithms. Just instant, personal communication.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
              At Hamed Alattas Technology, we help UAE businesses leverage the power of WhatsApp Business API for bulk messaging, chatbot automation, product catalogs, and targeted campaigns — turning conversations into conversions.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              {["Bulk Messaging", "Chatbot Automation", "Business API", "Rich Media"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#10B981]" /> {tag}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap items-center text-gray-300 text-sm md:text-base mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-[#10B981] font-medium">WhatsApp Marketing</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-900/40">
                Start WhatsApp Marketing <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-green-500/15 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-[#1A3C8B]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      </div>

      {/* ─── Why WhatsApp ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/40 rounded-bl-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">Why WhatsApp for Business?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Email gets buried. Social media gets filtered. But WhatsApp? It sits right in your customer's pocket with a 98% open rate.
              </p>
              <div className="hidden lg:block">
                <div className="w-24 h-2 bg-[#25D366] rounded-full mb-8" />
                <p className="text-[#1A3C8B] font-bold text-xl italic border-l-4 border-green-400 pl-4">
                  "The average WhatsApp message is read within 3 minutes of delivery."
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyWhatsApp.map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:border-green-100 transition-all">
                  <div className="w-12 h-12 bg-white text-[#25D366] rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-28 bg-[#f8fafc] border-t border-gray-100 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold tracking-wider uppercase text-sm mb-4">Full Service</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Our WhatsApp Marketing Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed">End-to-end WhatsApp solutions — from API setup to campaign execution and analytics.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all group flex flex-col">
                <div className="w-14 h-14 bg-green-50 text-[#25D366] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svc.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-3 flex-grow border-t border-gray-100 pt-6">
                  {svc.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries Using WhatsApp Marketing</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Every business can benefit from direct customer communication. Here's how different industries use it.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center mb-4">
                  <ind.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{ind.title}</h4>
                <p className="text-gray-400 leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1000px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold tracking-wider uppercase text-sm mb-4 border border-emerald-100">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">How We Launch Your WhatsApp Campaign</h2>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-green-600 text-white rounded-2xl flex items-center justify-center shrink-0 text-xl font-extrabold shadow-lg">
                  {step.step}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-[#25D366] to-green-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Turn Conversations into Conversions?</h2>
          <p className="text-green-50 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Start reaching your customers where they already are. Let us set up and manage your WhatsApp marketing — from API to analytics.
          </p>
          <Link to="/contact" className="bg-white text-[#25D366] hover:bg-green-50 font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center gap-2 text-lg shadow-xl">
            Get Started Today <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">Frequently Asked Questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppMarketingPage;
