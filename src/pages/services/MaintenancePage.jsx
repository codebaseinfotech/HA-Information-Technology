import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Settings,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Headphones,
  Wrench,
  FileText,
  RefreshCw,
  Zap,
  BarChart,
  AlertTriangle,
  Monitor,
  Server,
  HardDrive,
  Users,
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

const MaintenancePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const contractTypes = [
    {
      icon: Shield,
      title: "Comprehensive AMC",
      tagline: "All-inclusive coverage",
      desc: "Full hardware and software support including parts replacement, labour, and preventive maintenance visits.",
      bullets: ["Unlimited on-site support calls", "Hardware parts replacement included", "Quarterly preventive maintenance", "Priority 4-hour response time"],
      highlight: true,
    },
    {
      icon: Wrench,
      title: "Standard AMC",
      desc: "Labour-only coverage for businesses that prefer to manage parts procurement separately.",
      tagline: "Labour coverage",
      bullets: ["Unlimited on-site support calls", "Labour costs fully covered", "Monthly system health checks", "Same-day response guarantee"],
      highlight: false,
    },
    {
      icon: Monitor,
      title: "Remote Support Plan",
      desc: "Cost-effective remote monitoring and troubleshooting ideal for cloud-first environments.",
      tagline: "Remote monitoring",
      bullets: ["24/7 remote monitoring", "Helpdesk & ticket support", "Software updates & patches", "Monthly performance reports"],
      highlight: false,
    },
  ];

  const services = [
    { icon: Server, title: "Server & Network Maintenance", desc: "Proactive monitoring, patch management, and performance tuning for your servers, switches, routers, and firewalls." },
    { icon: Monitor, title: "Desktop & Workstation Support", desc: "Hardware troubleshooting, OS reinstallation, driver updates, and peripheral configuration for all employee devices." },
    { icon: HardDrive, title: "Data Backup & Recovery", desc: "Scheduled backups, disaster recovery planning, and rapid data restoration to minimize business disruption." },
    { icon: RefreshCw, title: "Software Updates & Patching", desc: "Regular updates for operating systems, applications, antivirus, and firmware to keep your environment secure." },
    { icon: Shield, title: "Security & Antivirus Management", desc: "Endpoint protection, firewall management, and vulnerability assessments to safeguard your IT assets." },
    { icon: Settings, title: "IT Asset Management", desc: "Complete inventory tracking, lifecycle management, and warranty tracking for all your hardware and software." },
  ];

  const whyAmcMatters = [
    { icon: Clock, title: "Minimize Downtime", desc: "Guaranteed response times and proactive maintenance prevent costly outages." },
    { icon: BarChart, title: "Predictable IT Costs", desc: "Fixed monthly or annual fees eliminate unexpected repair bills and budget surprises." },
    { icon: Zap, title: "Peak Performance", desc: "Regular tuning and optimization keep your systems running at maximum efficiency." },
    { icon: Users, title: "Dedicated Technical Team", desc: "A team of certified engineers assigned to your account who know your infrastructure." },
    { icon: FileText, title: "Compliance & Reporting", desc: "Detailed monthly reports on system health, issues resolved, and recommendations." },
    { icon: AlertTriangle, title: "Risk Mitigation", desc: "Early detection of hardware failures and security threats before they impact operations." },
  ];

  const processSteps = [
    { step: "01", title: "IT Infrastructure Audit", desc: "We assess your current hardware, software, network, and security setup to identify gaps and risks." },
    { step: "02", title: "Custom AMC Proposal", desc: "Based on the audit, we create a tailored maintenance plan with transparent pricing and clear SLAs." },
    { step: "03", title: "Onboarding & Setup", desc: "We deploy monitoring tools, document your infrastructure, and assign a dedicated support team." },
    { step: "04", title: "Ongoing Maintenance & Support", desc: "Scheduled preventive maintenance, real-time monitoring, and rapid incident response — month after month." },
  ];

  const faqs = [
    { question: "What does an AMC cover?", answer: "An Annual Maintenance Contract covers regular servicing, troubleshooting, hardware repairs (in comprehensive plans), software updates, security management, and technical support — all for a fixed annual or monthly fee." },
    { question: "What is the difference between Comprehensive and Standard AMC?", answer: "Comprehensive AMC includes parts replacement along with labour, while Standard AMC covers only labour costs. Choose Comprehensive if you want full coverage without worrying about spare parts." },
    { question: "Do you provide support outside office hours?", answer: "Yes. Our Comprehensive and Remote Support plans include extended and 24/7 support options. Emergency support is available for critical issues regardless of the plan." },
    { question: "Can the AMC be customized to our needs?", answer: "Absolutely. We tailor every contract based on your infrastructure size, industry requirements, budget, and SLA expectations." },
    { question: "How quickly do you respond to issues?", answer: "Response times depend on your plan — typically 4 hours for Comprehensive, same-day for Standard, and within 1 hour for remote support tickets." },
    { question: "Do you support both Windows and Linux environments?", answer: "Yes. Our team is certified in both Microsoft and Linux ecosystems, including servers, workstations, and hybrid cloud environments." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="IT Maintenance Contracts & AMC in UAE | Hamed Alattas Technology"
        description="Keep your IT infrastructure running smoothly with Hamed Alattas Technology. Comprehensive AMC, server maintenance, desktop support, and 24/7 monitoring across Dubai, Abu Dhabi, and the UAE."
        keywords="IT Maintenance UAE, AMC Dubai, Annual Maintenance Contract Abu Dhabi, Server Maintenance UAE, IT Support Dubai"
        url="/services/maintenance"
        schemas={[
          getServiceSchema({
            serviceType: "IT Maintenance, Annual Maintenance Contract, AMC, Server Support, Desktop Support",
            description: "Hamed Alattas Technology provides IT maintenance contracts covering servers, networks, desktops, security, and data backup across the UAE.",
            minPrice: "500",
            maxPrice: "15000",
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
              Proactive IT Care
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              IT Maintenance Contracts & AMC in UAE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Don't wait for systems to break. Prevent downtime, reduce costs, and keep your business running with proactive IT maintenance.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
              At Hamed Alattas Technology, our Annual Maintenance Contracts (AMC) give UAE businesses predictable IT costs, dedicated support teams, and round-the-clock monitoring — so your infrastructure is always available, secure, and performing at its best.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              {["Preventive Maintenance", "24/7 Monitoring", "Fixed Monthly Cost", "Certified Engineers"].map((tag, i) => (
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
              <span className="text-[#10B981] font-medium">Maintenance Contracts</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/40">
                Request AMC Quote <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/40 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      </div>

      {/* ─── Why AMC Matters ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 rounded-bl-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">Why Businesses Need IT Maintenance Contracts</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Unplanned IT failures cost UAE businesses thousands in lost productivity, emergency repairs, and data recovery. A proactive AMC eliminates these risks.
              </p>
              <div className="hidden lg:block">
                <div className="w-24 h-2 bg-[#10B981] rounded-full mb-8" />
                <p className="text-[#1A3C8B] font-bold text-xl italic border-l-4 border-emerald-400 pl-4">
                  "Prevention costs a fraction of what emergency repairs do."
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyAmcMatters.map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:border-blue-100 transition-all">
                  <div className="w-12 h-12 bg-white text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-5 shadow-sm">
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

      {/* ─── AMC Plans ─── */}
      <section className="py-28 bg-[#1a2332] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 max-w-[1200px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Maintenance Plan</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Flexible plans designed for businesses of every size — from startups to large enterprises.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${plan.highlight ? "bg-gradient-to-br from-[#1A3C8B] to-blue-700 border-2 border-blue-400/40 shadow-2xl shadow-blue-900/40" : "bg-white/5 border border-white/10"}`}>
                {plan.highlight && <span className="absolute top-0 right-0 bg-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wide">Recommended</span>}
                <div className="w-14 h-14 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6">
                  <plan.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.tagline}</p>
                <p className={`mb-6 leading-relaxed ${plan.highlight ? "text-blue-100" : "text-gray-300"}`}>{plan.desc}</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {plan.bullets.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#10B981] flex-shrink-0" />
                      <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-gray-300"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 ${plan.highlight ? "bg-white text-[#1A3C8B] shadow-lg" : "bg-white/10 text-white border border-white/20 hover:bg-white/20"}`}>
                  Get Quote <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Covered ─── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4 border border-blue-100">What's Covered</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Services Included in Our AMC Plans</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svc.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1000px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold tracking-wider uppercase text-sm mb-4 border border-emerald-100">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">How We Set Up Your Maintenance Contract</h2>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your IT Infrastructure Today</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Stop paying for emergency repairs. Start with a predictable, proactive maintenance plan that keeps your business running smoothly across the UAE.
          </p>
          <Link to="/contact" className="bg-[#10B981] hover:bg-emerald-500 text-white font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center gap-2 text-lg shadow-xl">
            Get a Free AMC Quote <ArrowRight size={22} />
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

export default MaintenancePage;
