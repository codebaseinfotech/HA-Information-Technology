import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  ArrowRight,
  Camera,
  Wifi,
  AlertTriangle,
  Server,
  Monitor,
  Fingerprint,
  Radio,
  ShieldCheck,
  Zap,
  Users,
  BarChart,
  FileText,
  Headphones,
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

const SecuritySolutionsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const solutions = [
    {
      icon: Camera,
      title: "CCTV & Video Surveillance",
      desc: "Protect your premises with high-definition IP cameras, night vision, and AI-powered analytics.",
      bullets: ["HD & 4K IP Camera Systems", "Night vision & wide-angle coverage", "AI motion detection & facial recognition", "Cloud & NVR storage options", "Remote live viewing via mobile app"],
    },
    {
      icon: Shield,
      title: "Network & Cybersecurity",
      desc: "Defend your digital infrastructure against threats with enterprise-grade firewalls, endpoint protection, and monitoring.",
      bullets: ["Next-gen firewall configuration", "Endpoint detection & response (EDR)", "Email & web filtering", "Vulnerability assessments & penetration testing", "Security awareness training"],
    },
    {
      icon: Fingerprint,
      title: "Biometric & Access Control",
      desc: "Control who enters your premises with fingerprint, face recognition, and smart card access systems.",
      bullets: ["Fingerprint & face recognition devices", "RFID & smart card systems", "Visitor management integration", "Multi-door controller setups", "Time & attendance tracking"],
    },
    {
      icon: Radio,
      title: "Alarm & Intrusion Detection",
      desc: "Detect unauthorized entry instantly with motion sensors, glass-break detectors, and panic buttons.",
      bullets: ["Motion & infrared sensors", "Glass-break & vibration detectors", "Panic button integration", "24/7 alarm monitoring", "SMS & app alert notifications"],
    },
    {
      icon: Server,
      title: "Data Protection & Backup",
      desc: "Safeguard your business data with encrypted backups, disaster recovery, and compliance-ready storage.",
      bullets: ["Encrypted on-site & cloud backups", "Disaster recovery planning", "Data loss prevention (DLP)", "Compliance-ready storage (GDPR, UAE regulations)", "Automated backup scheduling"],
    },
    {
      icon: Wifi,
      title: "Secure Network Infrastructure",
      desc: "Build a secure foundation with VLAN segmentation, VPN tunnels, and zero-trust architecture.",
      bullets: ["Network segmentation & VLANs", "Site-to-site and remote VPN", "Zero-trust network architecture", "Wi-Fi security & guest isolation", "Network access control (NAC)"],
    },
  ];

  const whyChooseUs = [
    { icon: ShieldCheck, title: "Certified Security Experts", desc: "Our engineers hold industry certifications in cybersecurity, networking, and physical security systems." },
    { icon: Eye, title: "24/7 Monitoring & Response", desc: "Round-the-clock surveillance monitoring and rapid incident response across all your locations." },
    { icon: Zap, title: "Integrated Security Ecosystem", desc: "We connect CCTV, access control, alarms, and cybersecurity into a unified security platform." },
    { icon: BarChart, title: "Compliance & Reporting", desc: "Regular security audits, compliance reports, and risk assessments tailored to UAE regulations." },
    { icon: Users, title: "Scalable Solutions", desc: "From a single office to multi-branch enterprises — our solutions scale with your growth." },
    { icon: FileText, title: "Custom Security Plans", desc: "Every business faces unique threats. We design security strategies based on your specific risk profile." },
  ];

  const industries = [
    { title: "Corporate Offices", desc: "Secure entrances, monitor activity, and protect sensitive data across your office environment." },
    { title: "Retail & Showrooms", desc: "Prevent theft, monitor customer flow, and protect inventory with intelligent surveillance." },
    { title: "Warehouses & Logistics", desc: "Secure large perimeters, loading docks, and inventory areas with multi-zone coverage." },
    { title: "Healthcare Facilities", desc: "Protect patient data, secure restricted areas, and comply with healthcare regulations." },
    { title: "Educational Institutions", desc: "Ensure student safety with campus-wide surveillance and controlled access." },
    { title: "Government & Public Sector", desc: "High-security installations with classified data protection and surveillance systems." },
  ];

  const processSteps = [
    { step: "01", title: "Security Assessment", desc: "We evaluate your current security posture — physical, digital, and operational — to identify vulnerabilities." },
    { step: "02", title: "Custom Solution Design", desc: "Our experts design a tailored security plan with the right combination of cameras, access control, and cybersecurity tools." },
    { step: "03", title: "Professional Installation", desc: "Certified technicians install and configure all hardware and software with minimal disruption to your operations." },
    { step: "04", title: "Testing & Handover", desc: "We rigorously test every component, train your team, and provide full documentation before handover." },
    { step: "05", title: "Ongoing Support & Monitoring", desc: "Our team provides 24/7 monitoring, maintenance, and upgrades to keep your security posture strong." },
  ];

  const faqs = [
    { question: "What types of security solutions do you provide?", answer: "We provide a comprehensive range including CCTV/video surveillance, cybersecurity (firewalls, EDR, SIEM), biometric access control, intrusion detection, data protection, and secure network infrastructure." },
    { question: "Do you provide security solutions for small businesses?", answer: "Absolutely. We design scalable solutions that fit businesses of every size — from a single-camera setup for a small office to enterprise-grade multi-site security systems." },
    { question: "Can I monitor my CCTV remotely?", answer: "Yes. All our CCTV systems support remote viewing via mobile apps and web dashboards. You can access live feeds and recorded footage from anywhere in the world." },
    { question: "Do you handle cybersecurity as well as physical security?", answer: "Yes. We are one of the few providers in the UAE that offers both physical and cybersecurity under one roof — giving you a truly unified security solution." },
    { question: "How long does installation take?", answer: "Installation timelines depend on the scope. A small office setup takes 1-2 days, while enterprise deployments may take 1-4 weeks including testing and training." },
    { question: "Do you offer Annual Maintenance Contracts for security systems?", answer: "Yes. We offer AMC plans that cover regular servicing, firmware updates, hardware replacement, and 24/7 monitoring for all installed security systems." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Security Solutions UAE | CCTV, Cybersecurity & Access Control | Hamed Alattas Technology"
        description="Comprehensive security solutions in UAE — CCTV surveillance, cybersecurity, biometric access control, alarm systems, and data protection. Protect your business with Hamed Alattas Technology."
        keywords="Security Solutions UAE, CCTV Dubai, Cybersecurity Abu Dhabi, Access Control Systems UAE, Alarm Systems Dubai, Network Security"
        url="/services/security"
        schemas={[
          getServiceSchema({
            serviceType: "Security Solutions, CCTV, Cybersecurity, Access Control, Alarm Systems, Data Protection",
            description: "Hamed Alattas Technology provides end-to-end security solutions in the UAE including CCTV, cybersecurity, biometric access control, alarm systems, and data protection.",
            minPrice: "1000",
            maxPrice: "50000",
          }),
          getFAQSchema(faqs),
        ]}
      />

      {/* ─── Hero ─── */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1a2332] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className={`container mx-auto px-4 xl:px-12 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-4xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 font-bold tracking-wider uppercase text-sm mb-6 border border-red-500/30">
              End-to-End Protection
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Security Solutions for Businesses in UAE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Protect your people, property, and data with intelligent security that works 24/7. Physical and digital — under one roof.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
              At Hamed Alattas Technology, we combine CCTV surveillance, cybersecurity, biometric access control, intrusion detection, and data protection into a unified security ecosystem — designed, installed, and managed by certified security professionals across the UAE.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              {["CCTV & Surveillance", "Cybersecurity", "Access Control", "24/7 Monitoring"].map((tag, i) => (
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
              <span className="text-[#10B981] font-medium">Security Solutions</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/40">
                Get a Security Assessment <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-[#1A3C8B]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      </div>

      {/* ─── Solutions Grid ─── */}
      <section className="py-28 bg-[#f8fafc] border-t border-gray-100 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4">Complete Protection</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Our Security Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">From surveillance cameras to firewalls — we cover every layer of security your business needs.</p>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((sol, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="md:w-1/3 flex flex-col items-start">
                  <div className="w-16 h-16 bg-blue-50 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <sol.icon size={32} />
                  </div>
                  <div className="text-5xl font-extrabold text-[#f1f5f9] mb-4">0{idx + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{sol.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{sol.desc}</p>
                </div>
                <div className="md:w-2/3 md:border-l border-gray-100 md:pl-10 flex items-center">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 w-full">
                    {sol.bullets.map((bullet, i) => (
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

      {/* ─── Why Choose Us ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 rounded-bl-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Why Businesses Trust Us with Their Security</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-blue-100 transition-all">
                <div className="w-14 h-14 bg-white text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Secure</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Every industry has unique security challenges. We design solutions that match your environment.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold tracking-wider uppercase text-sm mb-4 border border-emerald-100">Our Approach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">How We Secure Your Business</h2>
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

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-[#1A3C8B] to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Leave Your Business Vulnerable</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            From CCTV cameras to cybersecurity firewalls — let us build a security ecosystem that protects every layer of your business across the UAE.
          </p>
          <Link to="/contact" className="bg-[#10B981] hover:bg-emerald-500 text-white font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center gap-2 text-lg shadow-xl">
            Request a Free Security Assessment <ArrowRight size={22} />
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

export default SecuritySolutionsPage;
