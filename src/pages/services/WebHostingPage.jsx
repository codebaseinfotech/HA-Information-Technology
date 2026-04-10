import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  HardDrive,
  RefreshCw,
  Headphones,
  Lock,
  BarChart,
  Settings,
  Monitor,
  Database,
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

const WebHostingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  /* ── Data ── */
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for small websites & portfolios",
      features: ["5 GB SSD Storage", "1 Website", "Free SSL Certificate", "5 Email Accounts", "Weekly Backups", "99.5% Uptime"],
      highlight: false,
    },
    {
      name: "Business",
      tagline: "Best for growing businesses & e-commerce",
      features: ["50 GB NVMe SSD", "Unlimited Websites", "Free SSL + CDN", "Unlimited Email Accounts", "Daily Backups", "99.9% Uptime", "Staging Environment", "Priority Support"],
      highlight: true,
    },
    {
      name: "Enterprise",
      tagline: "For mission-critical & high-traffic applications",
      features: ["200 GB NVMe SSD", "Unlimited Websites", "Wildcard SSL + CDN", "Unlimited Email", "Real-Time Backups", "99.99% Uptime", "Dedicated Resources", "24/7 Premium Support"],
      highlight: false,
    },
  ];

  const features = [
    { icon: Zap, title: "Blazing-Fast NVMe SSD", desc: "All hosting plans run on next-generation NVMe solid-state drives for lightning-fast page loads." },
    { icon: Shield, title: "Enterprise-Grade Security", desc: "Free SSL certificates, DDoS protection, firewalls, and malware scanning keep your website safe." },
    { icon: RefreshCw, title: "Automated Daily Backups", desc: "We back up your data daily and store copies off-site so you never lose critical information." },
    { icon: Globe, title: "Global CDN Integration", desc: "Content Delivery Network ensures fast loading times for visitors anywhere in the UAE and worldwide." },
    { icon: Headphones, title: "24/7 Expert Support", desc: "Our hosting engineers are available around the clock via live chat, phone, and ticket system." },
    { icon: Settings, title: "One-Click Installs", desc: "Deploy WordPress, Joomla, Magento, Laravel and 100+ apps instantly from cPanel or Plesk." },
    { icon: BarChart, title: "99.99% Uptime Guarantee", desc: "Redundant infrastructure and proactive monitoring ensure your site is always accessible." },
    { icon: Lock, title: "Free SSL Certificates", desc: "Every plan includes free Let's Encrypt SSL to protect your visitors' data and improve SEO." },
  ];

  const platforms = [
    { icon: Monitor, title: "Windows Hosting", desc: "ASP.NET, MSSQL, IIS-powered hosting ideal for enterprise .NET applications and SharePoint." },
    { icon: Server, title: "Linux Hosting", desc: "Apache/Nginx, PHP, MySQL hosting powering WordPress, Laravel, Magento and more." },
    { icon: Cloud, title: "Cloud Hosting", desc: "Auto-scaling cloud infrastructure with load balancing for high-traffic websites and apps." },
    { icon: Database, title: "Managed VPS", desc: "Dedicated virtual server resources with full root access and our managed support layer." },
  ];

  const faqs = [
    { question: "What is the difference between Windows and Linux hosting?", answer: "Windows hosting supports ASP.NET and MSSQL — best for Microsoft-stack applications. Linux hosting runs PHP, MySQL, and open-source frameworks like WordPress and Laravel. We help you choose the right platform based on your project." },
    { question: "Do you provide domain registration with hosting?", answer: "Yes. We offer domain registration as a standalone service and as part of bundled hosting packages. You can register .com, .ae, .net, .org and many more extensions." },
    { question: "Can I upgrade my hosting plan later?", answer: "Absolutely. All our plans are scalable. You can upgrade storage, bandwidth, or move to a VPS or cloud plan at any time without downtime." },
    { question: "Do you offer website migration?", answer: "Yes — we provide free website migration for all Business and Enterprise plans. Our team handles the entire transfer so there's zero disruption." },
    { question: "What control panel do you use?", answer: "We support cPanel (Linux) and Plesk (Windows). Both provide intuitive interfaces for managing files, databases, email accounts, and DNS." },
    { question: "Is managed support included?", answer: "All plans include standard support. Business and Enterprise plans include priority and managed support where our team handles server maintenance, security patches, and performance tuning." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Windows & Linux Web Hosting in UAE | Hamed Alattas Technology"
        description="Reliable, fast, and secure Windows & Linux web hosting in UAE. NVMe SSD, free SSL, 99.99% uptime, daily backups, and 24/7 expert support from Hamed Alattas Technology."
        keywords="Web Hosting UAE, Linux Hosting Dubai, Windows Hosting Abu Dhabi, Cloud Hosting UAE, VPS Hosting Dubai, cPanel Hosting"
        url="/services/web-hosting"
        schemas={[
          getServiceSchema({
            serviceType: "Web Hosting, Windows Hosting, Linux Hosting, Cloud Hosting, VPS Hosting",
            description: "Hamed Alattas Technology provides reliable Windows & Linux web hosting with NVMe SSD, free SSL, daily backups, and 24/7 support across the UAE.",
            minPrice: "50",
            maxPrice: "5000",
          }),
          getFAQSchema(faqs),
        ]}
      />

      {/* ─── Hero ─── */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1a2332] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className={`container mx-auto px-4 xl:px-12 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-4xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold tracking-wider uppercase text-sm mb-6 border border-emerald-500/30">
              Reliable UAE Hosting
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Windows & Linux Web Hosting in UAE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Fast, secure, and scalable hosting for businesses of every size across Dubai, Abu Dhabi, and the entire UAE.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Whether you're launching a personal blog, an e-commerce store, or a high-traffic enterprise application, Hamed Alattas Technology delivers hosting infrastructure that never lets you down. Built on NVMe SSD, protected with enterprise-grade firewalls, and backed by 24/7 expert support.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              {["99.99% Uptime", "Free SSL", "NVMe SSD", "24/7 Support"].map((tag, i) => (
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
              <span className="text-[#10B981] font-medium">Web Hosting</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/40">
                Get Started <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/40 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      </div>

      {/* ─── Hosting Platforms ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 rounded-bl-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4 border border-blue-100">Platforms</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Choose Your Hosting Environment</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Whether you build on Microsoft or open-source technologies, we have the right platform configured and optimized for your stack.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all">
                <div className="w-14 h-14 bg-blue-50 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-6">
                  <p.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Plans ─── */}
      <section className="py-28 bg-[#1a2332] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 max-w-[1200px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Hosting Plans</h2>
            <p className="text-gray-400 text-lg leading-relaxed">No hidden fees. No complicated add-ons. Pick the plan that fits your needs and scale when you're ready.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${plan.highlight ? "bg-gradient-to-br from-[#1A3C8B] to-blue-700 border-2 border-blue-400/40 shadow-2xl shadow-blue-900/40" : "bg-white/5 border border-white/10"}`}>
                {plan.highlight && (
                  <span className="absolute top-0 right-0 bg-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wide">Most Popular</span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.tagline}</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#10B981] flex-shrink-0" />
                      <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-gray-300"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 ${plan.highlight ? "bg-white text-[#1A3C8B] shadow-lg" : "bg-white/10 text-white border border-white/20 hover:bg-white/20"}`}>
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold tracking-wider uppercase text-sm mb-4 border border-emerald-100">Why Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Hosting Features That Set Us Apart</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -5 }} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#1A3C8B]/10 text-[#1A3C8B] rounded-xl flex items-center justify-center mb-4">
                  <feat.icon size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feat.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Managed Hosting Section ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4 border border-blue-100">Managed Services</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">Focus on Your Business, We Handle the Server</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our managed hosting plans take the technical burden off your shoulders. From security patches and performance optimization to uptime monitoring and emergency recovery — our team keeps your infrastructure running at peak performance.
              </p>
              <ul className="space-y-4 mb-8">
                {["Server monitoring & proactive alerts", "Automatic security patching", "Performance tuning & caching", "Emergency incident response", "Monthly performance reports"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Talk to Our Hosting Team <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:w-1/2 grid grid-cols-2 gap-5 relative">
              <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-[100px] z-0" />
              {[
                { val: "99.99%", label: "Uptime", color: "bg-blue-50 text-[#1A3C8B]" },
                { val: "24/7", label: "Support", color: "bg-emerald-50 text-[#10B981]" },
                { val: "<200ms", label: "Response Time", color: "bg-purple-50 text-purple-600" },
                { val: "100+", label: "One-Click Apps", color: "bg-orange-50 text-orange-600" },
              ].map((stat, i) => (
                <motion.div key={i} animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }} transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl z-10 flex flex-col items-center text-center">
                  <span className={`text-4xl font-extrabold mb-2 ${stat.color.split(" ")[1]}`}>{stat.val}</span>
                  <span className="text-gray-500 font-medium text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-[#1A3C8B] to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Host Your Next Project?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you need shared hosting for a simple website or a managed cloud server for a full-stack application, we'll set you up with the right solution.
          </p>
          <Link to="/contact" className="bg-[#10B981] hover:bg-emerald-500 text-white font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center gap-2 text-lg shadow-xl">
            Get a Free Quote <ArrowRight size={22} />
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

export default WebHostingPage;
