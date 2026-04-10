import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Globe,
  Lock,
  BarChart,
  HardDrive,
  Settings,
  Headphones,
  ArrowUpRight,
  Database,
  Monitor,
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

const CloudHostingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Cloud,
      title: "Public Cloud Hosting",
      desc: "Scalable, pay-as-you-go cloud infrastructure on leading platforms like AWS, Azure, and Google Cloud.",
      bullets: ["Auto-scaling compute resources", "Global data center selection", "Pay-only-for-what-you-use pricing", "Multi-region redundancy"],
    },
    {
      icon: Server,
      title: "Private Cloud Solutions",
      desc: "Dedicated cloud infrastructure with enhanced security, compliance, and full resource isolation.",
      bullets: ["Single-tenant dedicated resources", "Custom network architecture", "Regulatory compliance (GDPR, UAE data laws)", "Full administrative control"],
    },
    {
      icon: RefreshCw,
      title: "Hybrid Cloud Architecture",
      desc: "The best of both worlds — combine on-premise infrastructure with cloud flexibility.",
      bullets: ["Seamless on-prem to cloud integration", "Workload portability", "Unified management dashboard", "Cost-optimized resource allocation"],
    },
    {
      icon: Database,
      title: "Managed Databases",
      desc: "Fully managed database hosting for MySQL, PostgreSQL, MongoDB, and MSSQL with automated backups.",
      bullets: ["Automated scaling & replication", "Point-in-time recovery", "Performance optimization", "99.99% database availability"],
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      desc: "Protect your cloud workloads with enterprise-grade security, encryption, and compliance frameworks.",
      bullets: ["Identity & access management", "Data encryption at rest & in transit", "Security monitoring & SIEM", "UAE data residency compliance"],
    },
    {
      icon: HardDrive,
      title: "Cloud Backup & Disaster Recovery",
      desc: "Business continuity solutions with automated backups, geo-replication, and rapid disaster recovery.",
      bullets: ["Automated scheduled backups", "Geo-redundant storage", "RPO & RTO optimization", "One-click disaster recovery"],
    },
  ];

  const advantages = [
    { icon: Zap, title: "Instant Scalability", desc: "Scale resources up or down in seconds without hardware purchases or delays." },
    { icon: Globe, title: "Global Reach", desc: "Deploy workloads close to your users with data centers across the Middle East, Europe, and beyond." },
    { icon: Lock, title: "Enterprise Security", desc: "Multi-layered security with firewalls, encryption, IAM, and real-time threat monitoring." },
    { icon: BarChart, title: "Cost Optimization", desc: "Eliminate capital expenditure on hardware — pay only for the resources you consume." },
    { icon: RefreshCw, title: "99.99% Uptime SLA", desc: "Redundant infrastructure and auto-failover ensure maximum availability for your applications." },
    { icon: Headphones, title: "Managed Support", desc: "Our certified cloud architects manage your environment — migrations, monitoring, and optimization." },
  ];

  const migrationSteps = [
    { step: "01", title: "Cloud Readiness Assessment", desc: "We analyze your current infrastructure, applications, and workloads to determine the optimal cloud strategy." },
    { step: "02", title: "Architecture Design", desc: "Our architects design a cloud-native architecture tailored to your performance, security, and compliance requirements." },
    { step: "03", title: "Migration & Deployment", desc: "We migrate your applications, data, and configurations with zero downtime using proven migration methodologies." },
    { step: "04", title: "Optimization & Tuning", desc: "Post-migration, we optimize performance, right-size resources, and implement cost-saving measures." },
    { step: "05", title: "Ongoing Cloud Management", desc: "We provide 24/7 monitoring, security patching, backup management, and continuous optimization." },
  ];

  const plans = [
    {
      name: "Cloud Starter",
      tagline: "Small apps & testing environments",
      features: ["2 vCPUs, 4GB RAM", "50 GB SSD Storage", "Free SSL", "Basic Monitoring", "Standard Support", "99.5% Uptime"],
      highlight: false,
    },
    {
      name: "Cloud Business",
      tagline: "Production workloads & growing apps",
      features: ["4 vCPUs, 16GB RAM", "200 GB NVMe SSD", "Free SSL + CDN", "Advanced Monitoring & Alerts", "Auto-Scaling", "Priority Support", "Daily Backups", "99.9% Uptime SLA"],
      highlight: true,
    },
    {
      name: "Cloud Enterprise",
      tagline: "High-traffic & mission-critical systems",
      features: ["8+ vCPUs, 32GB+ RAM", "500 GB+ NVMe SSD", "Wildcard SSL + CDN", "SIEM & Security Monitoring", "Auto-Scaling + Load Balancing", "24/7 Dedicated Engineer", "Real-Time Backups", "99.99% Uptime SLA"],
      highlight: false,
    },
  ];

  const faqs = [
    { question: "What cloud platforms do you support?", answer: "We work with all major cloud providers including AWS, Microsoft Azure, Google Cloud Platform (GCP), and DigitalOcean. We help you choose the best platform based on your workload, budget, and compliance requirements." },
    { question: "How is cloud hosting different from traditional web hosting?", answer: "Traditional hosting runs on a single physical server; cloud hosting distributes your workload across a cluster of virtual servers with auto-scaling, redundancy, and pay-as-you-go pricing — delivering better uptime, performance, and flexibility." },
    { question: "Can you migrate our existing infrastructure to the cloud?", answer: "Yes. We handle end-to-end cloud migrations — from assessment and planning to execution, optimization, and ongoing management — with zero or minimal downtime." },
    { question: "Is UAE data residency supported?", answer: "Absolutely. Both AWS and Azure offer UAE-based data centers. We ensure your data stays within the UAE or your preferred region to comply with local regulations." },
    { question: "Do I need to manage the cloud servers myself?", answer: "No. Our managed cloud hosting plans include 24/7 monitoring, security patching, backup management, and performance optimization — we handle everything so you can focus on your business." },
    { question: "How does cloud hosting pricing work?", answer: "Cloud hosting typically uses a pay-as-you-go model based on compute, storage, and network usage. We also offer fixed monthly plans for predictable budgeting — contact us for a tailored quote." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Cloud Hosting UAE | AWS, Azure & GCP | Hamed Alattas Technology"
        description="Scalable, secure cloud hosting in the UAE. Public, private, and hybrid cloud solutions on AWS, Azure, and Google Cloud. Managed services, 99.99% uptime, and 24/7 support from Hamed Alattas Technology."
        keywords="Cloud Hosting UAE, AWS Dubai, Azure Abu Dhabi, Google Cloud UAE, Managed Cloud Hosting, Cloud Migration"
        url="/services/cloud-hosting"
        schemas={[
          getServiceSchema({
            serviceType: "Cloud Hosting, AWS, Azure, Google Cloud, Cloud Migration, Managed Cloud",
            description: "Hamed Alattas Technology provides scalable cloud hosting on AWS, Azure, and Google Cloud with managed services, 99.99% uptime, and 24/7 support across the UAE.",
            minPrice: "200",
            maxPrice: "20000",
          }),
          getFAQSchema(faqs),
        ]}
      />

      {/* ─── Hero ─── */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1a2332] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className={`container mx-auto px-4 xl:px-12 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-4xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-400 font-bold tracking-wider uppercase text-sm mb-6 border border-sky-500/30">
              Scalable Infrastructure
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Cloud Hosting Solutions in UAE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Move to the cloud with confidence. Scalable, secure, and fully managed infrastructure on AWS, Azure, and Google Cloud.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
              At Hamed Alattas Technology, we design, deploy, and manage cloud environments for UAE businesses — from startups running their first app to enterprises migrating mission-critical workloads. With 99.99% uptime guarantees and certified cloud architects, your infrastructure is in expert hands.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              {["99.99% Uptime", "Auto-Scaling", "UAE Data Centers", "Managed 24/7"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-sky-400" /> {tag}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap items-center text-gray-300 text-sm md:text-base mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-sky-400 font-medium">Cloud Hosting</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/40">
                Start Cloud Migration <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      </div>

      {/* ─── Cloud Advantages ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50/40 rounded-bl-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Why Move to the Cloud?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Cloud hosting gives your business the agility, security, and performance to compete in today's market.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-sky-100 transition-all">
                <div className="w-14 h-14 bg-white text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-28 bg-[#f8fafc] border-t border-gray-100 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 font-bold tracking-wider uppercase text-sm mb-4">Cloud Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Our Cloud Hosting Services</h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((svc, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 hover:shadow-xl hover:border-sky-100 transition-all group">
                <div className="md:w-1/3 flex flex-col items-start">
                  <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svc.icon size={32} />
                  </div>
                  <div className="text-5xl font-extrabold text-[#f1f5f9] mb-4">0{idx + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{svc.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{svc.desc}</p>
                </div>
                <div className="md:w-2/3 md:border-l border-gray-100 md:pl-10 flex items-center">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 w-full">
                    {svc.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 bg-gray-50/50 p-4 rounded-xl">
                        <CheckCircle2 size={24} className="text-sky-500 flex-shrink-0" />
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

      {/* ─── Cloud Plans ─── */}
      <section className="py-28 bg-[#1a2332] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 xl:px-12 max-w-[1200px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Cloud Hosting Plans</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Scalable plans built for growth. Start small and scale seamlessly as your business expands.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${plan.highlight ? "bg-gradient-to-br from-sky-600 to-blue-700 border-2 border-sky-400/40 shadow-2xl shadow-sky-900/40" : "bg-white/5 border border-white/10"}`}>
                {plan.highlight && <span className="absolute top-0 right-0 bg-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wide">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 ${plan.highlight ? "text-sky-200" : "text-gray-400"}`}>{plan.tagline}</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#10B981] flex-shrink-0" />
                      <span className={`text-sm ${plan.highlight ? "text-sky-100" : "text-gray-300"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 ${plan.highlight ? "bg-white text-sky-700 shadow-lg" : "bg-white/10 text-white border border-white/20 hover:bg-white/20"}`}>
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Migration Process ─── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1000px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-bold tracking-wider uppercase text-sm mb-4 border border-sky-100">Migration Path</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">Your Cloud Migration Journey</h2>
          </motion.div>

          <div className="space-y-6">
            {migrationSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 text-xl font-extrabold shadow-lg">
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
      <section className="py-20 bg-gradient-to-r from-[#1A3C8B] to-sky-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Go Cloud?</h2>
          <p className="text-sky-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're migrating from on-premise or optimizing your existing cloud — our team is ready to architect, deploy, and manage your cloud infrastructure.
          </p>
          <Link to="/contact" className="bg-[#10B981] hover:bg-emerald-500 text-white font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center gap-2 text-lg shadow-xl">
            Talk to a Cloud Expert <ArrowRight size={22} />
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

export default CloudHostingPage;
