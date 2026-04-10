import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Lock,
  Search,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Headphones,
  Zap,
  Award,
  FileText,
  Settings,
  Plus,
  ChevronDown,
  Server,
  Mail,
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

const DomainRegistrationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  /* ── Data ── */
  const extensions = [
    { ext: ".com", desc: "The world's most popular domain — perfect for any business or brand.", popular: true },
    { ext: ".ae", desc: "UAE country-code extension — ideal for local businesses targeting UAE customers.", popular: true },
    { ext: ".net", desc: "Great for tech companies, networks, and digital platforms." },
    { ext: ".org", desc: "Trusted by non-profits, educational institutions, and communities." },
    { ext: ".co", desc: "Short, modern alternative for startups and innovative brands." },
    { ext: ".io", desc: "Preferred by tech startups, SaaS platforms, and developer communities." },
    { ext: ".store", desc: "Purpose-built for e-commerce and online retail brands." },
    { ext: ".tech", desc: "Showcase your technology expertise with a memorable domain." },
  ];

  const whyRegisterWithUs = [
    { icon: Zap, title: "Instant Activation", desc: "Your domain is live within minutes of registration — no waiting, no delays." },
    { icon: Shield, title: "Domain Privacy Protection", desc: "Keep your personal information hidden from public WHOIS databases at no extra cost." },
    { icon: Lock, title: "Domain Lock & Security", desc: "Prevent unauthorized domain transfers with our built-in domain locking feature." },
    { icon: RefreshCw, title: "Auto-Renewal", desc: "Never lose your domain. We automatically renew before expiry and send reminders." },
    { icon: Settings, title: "Full DNS Management", desc: "Complete control over DNS records, nameservers, subdomains, and redirects." },
    { icon: Headphones, title: "Expert Domain Support", desc: "Our team assists with transfers, DNS setup, and any domain-related queries." },
  ];

  const bundledServices = [
    { icon: Mail, title: "Professional Email", desc: "Get branded email addresses (you@yourdomain.com) that build credibility and trust." },
    { icon: Server, title: "Web Hosting", desc: "Bundle your domain with our reliable Windows or Linux hosting for a seamless setup." },
    { icon: Shield, title: "SSL Certificate", desc: "Secure your domain with HTTPS encryption — essential for trust and SEO rankings." },
    { icon: Globe, title: "Website Builder", desc: "Use our drag-and-drop website builder to launch a professional site in minutes." },
  ];

  const processSteps = [
    { step: "01", title: "Search Your Domain", desc: "Enter your desired domain name and check availability across 100+ extensions instantly." },
    { step: "02", title: "Choose Your Extension", desc: "Select from .com, .ae, .net, .org or any premium extension that fits your brand." },
    { step: "03", title: "Add Extra Services", desc: "Bundle hosting, email, SSL, or privacy protection for a complete online presence." },
    { step: "04", title: "Complete Registration", desc: "Finalize your order and your domain is activated instantly. Full DNS control is available immediately." },
  ];

  const faqs = [
    { question: "What is a domain name?", answer: "A domain name is your website's address on the internet (e.g., yourbusiness.ae). It's how customers find and identify your brand online." },
    { question: "How do I choose the right domain name?", answer: "Keep it short, memorable, and relevant to your business. Avoid hyphens and numbers. If you target UAE customers, consider a .ae extension for local credibility." },
    { question: "Can I transfer my existing domain to you?", answer: "Yes. We support domain transfers from any registrar. Our team handles the entire process — usually completed within 5-7 days for most extensions." },
    { question: "What is WHOIS privacy protection?", answer: "WHOIS privacy replaces your personal registration details (name, address, phone) with proxy information in public databases, protecting you from spam and identity theft." },
    { question: "How long can I register a domain for?", answer: "Most domains can be registered for 1 to 10 years. We recommend at least 2 years for stability, and auto-renewal ensures you never lose your domain." },
    { question: "Do you offer .ae domain registration?", answer: "Yes. We are authorized to register .ae domains for businesses operating in the UAE. We handle all documentation required by the .ae registry authority." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Domain Registration UAE | .com, .ae, .net & More | Hamed Alattas Technology"
        description="Register your perfect domain name with Hamed Alattas Technology. .com, .ae, .net, .org and 100+ extensions. Instant activation, free WHOIS privacy, full DNS control, and expert support across the UAE."
        keywords="Domain Registration UAE, Buy Domain Dubai, .ae Domain, .com Domain UAE, Domain Name Registration Abu Dhabi"
        url="/services/domain-registration"
        schemas={[
          getServiceSchema({
            serviceType: "Domain Registration, Domain Name Services, DNS Management",
            description: "Hamed Alattas Technology provides domain registration services across the UAE with 100+ extensions, instant activation, WHOIS privacy, and full DNS management.",
            minPrice: "30",
            maxPrice: "500",
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
              Secure Your Brand
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Domain Registration in UAE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Your domain name is the foundation of your online identity. Secure the perfect name before someone else does.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Whether you're a startup, established business, or entrepreneur, Hamed Alattas Technology makes domain registration fast, simple, and secure. Choose from 100+ extensions including .com, .ae, .net, and more — with instant activation and full DNS control from day one.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              {["Instant Activation", "Free Privacy Protection", "100+ Extensions", "Full DNS Control"].map((tag, i) => (
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
              <span className="text-[#10B981] font-medium">Domain Registration</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/40">
                Register Your Domain <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      </div>

      {/* ─── Domain Extensions ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4 border border-blue-100">100+ Extensions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Find the Perfect Domain Extension</h2>
            <p className="text-lg text-gray-600 leading-relaxed">From global giants like .com to UAE-local .ae — pick the extension that represents your brand best.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {extensions.map((ext, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -5, scale: 1.02 }} className={`rounded-2xl p-6 border transition-all cursor-pointer relative ${ext.popular ? "bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-md" : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100"}`}>
                {ext.popular && <span className="absolute top-3 right-3 bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Popular</span>}
                <h3 className="text-3xl font-extrabold text-[#1A3C8B] mb-3">{ext.ext}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{ext.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Register With Us ─── */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Register Your Domain with Us?</h2>
            <p className="text-gray-400 text-lg leading-relaxed">More than just registration — we provide the tools, security, and support to manage your domain professionally.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyRegisterWithUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Registration Process ─── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1000px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold tracking-wider uppercase text-sm mb-4 border border-emerald-100">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">How Domain Registration Works</h2>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3C8B] to-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 text-xl font-extrabold shadow-lg">
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

      {/* ─── Bundled Services ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -left-32 top-1/2 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4 border border-blue-100">Complete Package</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">Bundle Your Domain with Essential Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A domain is just the beginning. Combine it with hosting, email, and SSL for a complete online presence — all managed from one place with one team supporting you.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#1A3C8B] to-blue-800 rounded-2xl p-6 shadow-lg border-l-4 border-[#10B981]">
                <div className="flex gap-4 items-start">
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    <Award className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Save with Bundles</h4>
                    <p className="text-blue-100 font-medium leading-relaxed">Register your domain + hosting + email together and save up to 30% on your first year.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 grid sm:grid-cols-2 gap-5">
              {bundledServices.map((svc, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-white text-[#1A3C8B] rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                    <svc.icon size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{svc.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Domain Name Today</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Great domains don't stay available for long. Search, register, and launch your online presence with Hamed Alattas Technology.
          </p>
          <Link to="/contact" className="bg-[#10B981] hover:bg-emerald-500 text-white font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center gap-2 text-lg shadow-xl">
            Register Now <ArrowRight size={22} />
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

export default DomainRegistrationPage;
