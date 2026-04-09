import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Code,
  Globe,
  ArrowRight,
  CheckCircle2,
  Settings,
  Zap,
  ChevronDown,
  Plus,
  Users,
  Server,
  Lock,
  Layers,
  Smartphone,
  Cloud,
  Database,
  Wifi,
  Monitor,
  HardDrive,
  Phone,
  Camera,
  BarChart3,
  Cpu,
  Network,
  Cable,
} from "lucide-react";
import SEO from "../../components/SEO";
import { getServiceSchema, getFAQSchema } from "../../utils/seo";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 ${isOpen ? "border-[#1A3C8B]/30" : "border-gray-200"}`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-[#1A3C8B] text-white" : "bg-[#1A3C8B]/10 text-[#1A3C8B]"}`}
          >
            {isOpen ? (
              <ChevronDown
                size={20}
                className="transform rotate-180 transition-transform duration-300"
              />
            ) : (
              <Plus size={20} className="transition-transform duration-300" />
            )}
          </div>
          <span
            className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? "text-[#1A3C8B]" : "text-gray-900"}`}
          >
            {question}
          </span>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed text-left">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const ITInfrastructurePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Network,
      title: "Network Infrastructure Design & Implementation",
      description:
        "A strong network is the backbone of your business. We design and deploy secure, high-performance networks tailored to your operations.",
      offerings: [
        "LAN / WAN setup",
        "Enterprise WiFi solutions",
        "SD-WAN architecture",
        "VPN & remote access",
      ],
      benefits: [
        "Faster connectivity",
        "Secure data transfer",
        "Seamless scalability",
      ],
    },
    {
      icon: Cable,
      title: "Structured Cabling Solutions (LAN / Fiber / Data)",
      description:
        "Reliable cabling ensures long-term performance. Clean, organized infrastructure for better performance and easy maintenance.",
      offerings: [
        "Structured cabling systems",
        "Fiber optic installation",
        "Data rack setup & management",
      ],
      benefits: ["LAN / Fiber / Data", "Organized racks", "Easy maintenance"],
    },
    {
      icon: Server,
      title: "Server Installation & Virtualization",
      description:
        "We help businesses move from physical limitations to virtual efficiency.",
      offerings: [
        "Server setup & configuration",
        "VMware / Hyper-V virtualization",
        "Performance optimization",
      ],
      benefits: [
        "Reduce hardware costs",
        "Improve system efficiency",
        "Easy scalability",
      ],
    },
    {
      icon: Database,
      title: "Data Center Solutions (On-Premise & Hybrid)",
      description:
        "We build powerful data environments tailored to your business.",
      offerings: [
        "On-premise data center setup",
        "Hybrid infrastructure",
        "Cooling & power optimization",
      ],
      benefits: [
        "High availability",
        "Maximum uptime",
        "Disaster-ready systems",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Migration",
      description: "Modern businesses need flexible cloud environments.",
      offerings: [
        "AWS & Microsoft Azure deployment",
        "Hybrid cloud architecture",
        "Cloud migration services",
      ],
      benefits: ["Remote access", "Cost optimization", "Business continuity"],
    },
    {
      icon: HardDrive,
      title: "Storage, Backup & Disaster Recovery",
      description: "Your data is your most valuable asset.",
      offerings: [
        "Automated backups",
        "Disaster recovery planning",
        "Business continuity solutions",
      ],
      benefits: [
        "Protect against data loss",
        "Fast recovery systems",
        "Compliance-ready solutions",
      ],
    },
    {
      icon: Shield,
      title: "IT Security & Cybersecurity Services",
      description:
        "Cyber threats are growing rapidly in the UAE. We protect your business with advanced security solutions.",
      offerings: [
        "Next-generation firewall",
        "Endpoint protection",
        "Email security",
        "Intrusion detection & prevention",
        "Vulnerability assessment",
        "Penetration testing",
        "Zero Trust security",
      ],
      benefits: [
        "Prevent cyber attacks",
        "Protect sensitive data",
        "Ensure compliance",
      ],
    },
    {
      icon: Phone,
      title: "Communication & Collaboration Systems",
      description: "Enhance team productivity and communication.",
      offerings: [
        "IP Telephony (VoIP)",
        "Unified communication systems",
        "Video conferencing solutions",
        "Contact center setup",
      ],
      benefits: [
        "Better team collaboration",
        "Cost-effective communication",
        "Remote workforce support",
      ],
    },
    {
      icon: Settings,
      title: "Managed IT Services in Dubai (AMC & Support)",
      description:
        "This is where long-term success happens. We provide fully managed IT services in Dubai to keep your business running smoothly.",
      offerings: [
        "IT AMC services Dubai",
        "24/7 monitoring & support",
        "Helpdesk (L1, L2, L3 support)",
        "IT outsourcing",
      ],
      benefits: [
        "Reduce IT costs",
        "Proactive maintenance",
        "Zero downtime approach",
      ],
    },
    {
      icon: Globe,
      title: "Cloud & Digital Transformation",
      description: "We help businesses move forward with digital innovation.",
      offerings: [
        "Microsoft 365 / Google Workspace",
        "SaaS deployment",
        "Digital workplace solutions",
        "Cloud transformation strategy",
      ],
      benefits: [
        "Improve efficiency",
        "Enable remote work",
        "Increase productivity",
      ],
    },
    {
      icon: Monitor,
      title: "Hardware Supply & IT Integration",
      description: "We provide and install enterprise-grade IT hardware.",
      offerings: [
        "Servers & storage systems",
        "Network switches",
        "CCTV & surveillance",
        "Access control & biometrics",
        "POS systems",
      ],
      benefits: [
        "One vendor for everything",
        "High-quality products",
        "Seamless integration",
      ],
    },
    {
      icon: BarChart3,
      title: "Business Applications & Advanced Solutions",
      description: "Take your business to the next level.",
      offerings: [
        "ERP systems",
        "CRM solutions",
        "Business intelligence (Power BI)",
        "Automation (RPA)",
      ],
      benefits: [
        "Better decision making",
        "Increased efficiency",
        "Business growth",
      ],
    },
  ];

  const industries = [
    {
      title: "Finance & Banking",
      desc: "Secure, high-availability systems with DIFC & PCI DSS compliance and zero downtime.",
      icon: Shield,
    },
    {
      title: "Healthcare",
      desc: "DHA-compliant infrastructure ensuring data security and 24/7 system availability.",
      icon: Zap,
    },
    {
      title: "Retail & Hospitality",
      desc: "POS systems, guest Wi-Fi, inventory management, and payment integration.",
      icon: Monitor,
    },
    {
      title: "Manufacturing & Logistics",
      desc: "24/7 infrastructure for warehouses, IoT, tracking, and real-time inventory.",
      icon: Cpu,
    },
    {
      title: "Professional Services",
      desc: "Secure setups for law & consulting firms with remote work support.",
      icon: Users,
    },
    {
      title: "Education",
      desc: "Campus-wide Wi-Fi, LMS systems, and secure student data compliance.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="IT Infrastructure Services in Dubai & UAE | Hamed Alattas Technology"
        description="Complete IT infrastructure solutions in Dubai, Abu Dhabi & UAE. Network, servers, cloud, security, 24/7 support. 35+ certified engineers. 99.9% uptime guarantee. Free assessment."
        keywords="IT Infrastructure Dubai, Network Setup UAE, Cloud Migration Dubai, Managed IT Services, Cybersecurity UAE, Server Installation Dubai, IT Support UAE"
        url="/services/it-infrastructure"
        schemas={[
          getServiceSchema({
            serviceType: "IT Infrastructure Services",
            description:
              "Complete IT infrastructure solutions in Dubai — network, servers, cloud, cybersecurity, and 24/7 managed support. 35+ certified engineers. 99.9% uptime.",
            minPrice: "30000",
            maxPrice: "1000000",
          }),
          getFAQSchema([
            {
              question: "How much do IT infrastructure solutions cost in UAE?",
              answer:
                "Small businesses may invest AED 30K–80K, while medium to large companies can range from AED 150K to AED 1M+. Monthly managed services vary from AED 3K–50K+.",
            },
            {
              question: "How quickly can you deploy IT infrastructure?",
              answer:
                "Small setups: 2–4 weeks, medium projects: 6–10 weeks, large deployments: 3–6 months. Urgent setups can be completed within 72 hours.",
            },
            {
              question: "Do you provide 24/7 IT support?",
              answer:
                "Yes, we offer 24/7 monitoring and support with fast response times, remote troubleshooting, and on-site assistance across Dubai and UAE.",
            },
            {
              question: "Do you support cloud migration (AWS/Azure)?",
              answer:
                "Yes, we provide full cloud migration to AWS, Microsoft Azure, and hybrid environments.",
            },
          ]),
        ]}
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1a2332] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className={`container mx-auto px-4 xl:px-12 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              IT Infrastructure Services in Dubai
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed mb-3 max-w-3xl">
              Build a Powerful IT Backbone for Your Business in Dubai & UAE
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
              From startups to large enterprises,{" "}
              <strong className="text-white">Hamed Alattas Technology</strong> delivers
              complete{" "}
              <strong className="text-white">
                IT infrastructure services in Dubai
              </strong>
              —covering network setup, cybersecurity, cloud, and 24/7 managed
              support.
            </p>

            {/* Checkmark List */}
            <div className="space-y-2 mb-8">
              {[
                "35+ Expert Engineers & IT Specialists",
                "UAE-Based Support Team",
                "Fast Deployment & Scalable Solutions",
                "24/7 Managed IT Services",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#10B981] flex-shrink-0"
                  />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center text-gray-300 text-sm md:text-base mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#10B981] font-medium break-words">
                IT Infrastructure
              </span>
            </div>
            {/* 3 CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-sm gap-2 bg-[#10B981] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#059669] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#10B981]/30"
              >
                Get Free IT Infrastructure Assessment
              </Link>
              <a
                href="tel:+971523003423"
                className="inline-flex items-center justify-center text-sm gap-2 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                📞 Call +971-523003423
              </a>
              <a
                href="https://wa.me/971523003423"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm gap-2 bg-white text-[#1a2332] px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-white/10"
              >
                💬 WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="relative z-10 mt-6">
          <div className="container mx-auto px-4 xl:px-12">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-4 max-w-4xl">
              {[
                "500+ Projects Delivered",
                "35+ Certified Engineers",
                "99.9% Uptime Guarantee",
                "24/7 UAE-Based Support",
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#10B981] rounded text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-white text-sm font-bold">{stat}</span>
                  {i < 3 && (
                    <span className="text-gray-500 ml-3 hidden sm:inline">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

      {/* What Is IT Infrastructure */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
              What Is IT Infrastructure & Why It Matters for UAE Businesses
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              In today’s digital world, your business is only as strong as your
              IT infrastructure.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Think about it—slow networks, system downtime, or cyber threats
              can instantly impact your operations, customer trust, and revenue.
              In fast-growing markets like Dubai and across the UAE, businesses
              face unique challenges:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              {[
                "Rapid expansion & scaling needs",
                "Increasing cybersecurity threats",
                "High demand for uptime & performance",
                "Cloud adoption & remote work",
              ].map((challenge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-xl px-5 py-3 text-left"
                >
                  <span className="text-amber-500 text-lg font-bold">⚡</span>
                  <span className="text-gray-700 text-sm font-medium">
                    {challenge}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong>Hamed Alattas Technology</strong>, we design, build, and
              manage complete IT ecosystems — so your business runs smoothly,
              securely, and without interruption.
            </p>
            <p>
              We don't just install systems — we create{" "}
              <strong>future-ready infrastructure</strong> that grows with your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-[#10B981]/5 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-[#1A3C8B]/5 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4 border border-blue-100 shadow-sm">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2332] mb-6 leading-tight">
              Complete IT Infrastructure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3C8B] to-[#10B981]">
                Services
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {services.map((srv, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-[#1A3C8B]/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1A3C8B]/5 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125"></div>
                <div className="w-16 h-16 bg-[#1A3C8B]/5 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#1A3C8B] group-hover:to-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/30">
                  <srv.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#1A3C8B] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  {srv.description}
                </p>

                {/* What we offer */}
                <div className="mb-5 flex-grow">
                  <p className="text-xs font-bold text-[#1A3C8B] uppercase tracking-wider mb-3">
                    What we offer
                  </p>
                  <ul className="space-y-2">
                    {srv.offerings.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-[#1A3C8B] rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="pt-5 border-t border-gray-100 mt-auto">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">
                    Benefits
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {srv.benefits.map((b, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100"
                      >
                        <CheckCircle2 size={12} /> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Deployment Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Our Proven 6-Step IT Deployment Process
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We follow a structured approach to ensure success at every stage.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Free Assessment & IT Audit",
                desc: "We analyze your current infrastructure — identifying gaps, risks, and opportunities for improvement before recommending any solution.",
              },
              {
                title: "Design & Planning",
                desc: "Custom solution designed based on your specific needs, budget, and growth plans. No cookie-cutter approaches — everything is tailored.",
              },
              {
                title: "Procurement & Integration",
                desc: "We supply and integrate enterprise-grade hardware and software from leading vendors like Dell, Cisco, Microsoft, and Fortinet.",
              },
              {
                title: "Implementation & Migration",
                desc: "Smooth setup with minimal downtime. Whether it's on-premise, cloud, or hybrid — we handle the heavy lifting so your team stays productive.",
              },
              {
                title: "Testing & Go-Live",
                desc: "Full system testing before launch — performance, security, connectivity, failover. Nothing goes live until it's bullet-proof.",
              },
              {
                title: "Ongoing Support & Optimization",
                desc: "24/7 monitoring, proactive maintenance, and continuous improvements. We don't disappear after deployment — we stay as your IT partner.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#1A3C8B]/5 transition-all duration-300 relative overflow-hidden group flex flex-col md:flex-row gap-6 md:gap-8 items-start"
              >
                <div className="absolute -right-6 -top-10 text-[140px] font-black text-gray-50 leading-none group-hover:scale-110 transition-transform duration-500 z-0 select-none pointer-events-none">
                  0{i + 1}
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-[#1A3C8B] flex items-center justify-center font-bold text-2xl shadow-sm border border-blue-100/50">
                    {i + 1}
                  </div>
                </div>

                <div className="relative z-10 flex-grow pt-2">
                  <h4 className="text-2xl font-bold text-[#1a2332] mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Why Businesses Choose Hamed Alattas Technology
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are not just another IT service provider in Dubai — we are your
              technology partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "35+ Skilled Engineers",
                d: "Certified network, security, cloud, and systems experts under one roof.",
              },
              {
                t: "Proven UAE Experience",
                d: "500+ successful projects across every major industry in Dubai, Abu Dhabi, and Sharjah.",
              },
              {
                t: "Fast Response & Deployment",
                d: "Urgent setups within 72 hours. On-site support response within 2 hours across UAE.",
              },
              {
                t: "Transparent Pricing",
                d: "No hidden costs. Clear proposals and predictable budgets for every project.",
              },
              {
                t: "Long-Term Partnership",
                d: "We don't disappear after deployment. Ongoing optimization, updates, and strategic IT guidance.",
              },
              {
                t: "99.9% Uptime Guarantee",
                d: "SLA-backed reliability your business demands. Proactive monitoring prevents issues before they happen.",
              },
              {
                t: "Vendor Partnerships",
                d: "Dell, HPE, Cisco, Microsoft, Fortinet, VMware authorized partners — best-in-class hardware and software.",
              },
              {
                t: "Security-First Approach",
                d: "Full compliance with DHA, DIFC, UAE cybersecurity standards. Your data stays safe.",
              },
              {
                t: "Complete Lifecycle Management",
                d: "Design, deploy, manage, optimize, refresh — we handle the full IT lifecycle end-to-end.",
              },
            ].map((reason, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-blue-100 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1A3C8B]">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2332] text-lg mb-2">
                    {reason.t}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Proven Results Across Dubai Industries
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-[#10B981]/10 text-[#10B981] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300">
                  <ind.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1a2332] mb-3">
                  {ind.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/40 text-blue-300 font-bold tracking-wider uppercase text-sm mb-4 border border-blue-500/20">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Real Results: Infrastructure Success Stories
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
            {/* Case Study 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Multi-Specialty Clinics
                  </h3>
                  <p className="text-gray-400 text-sm">
                    4 Locations, Healthcare
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                <strong className="text-white">Challenge:</strong> Non-compliant
                systems, insecure patient data, manual errors, and unreliable
                servers affecting operations.
              </p>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                <strong className="text-white">Solution:</strong> Deployed
                secure, DHA-compliant infrastructure with centralized storage,
                virtualization, encrypted connectivity, backup systems, and 24/7
                managed support.
              </p>
              <div className="space-y-2">
                {[
                  "DHA compliance achieved (first inspection)",
                  "Zero data loss & fast recovery (2 hours)",
                  "99.8% system uptime",
                  "20% productivity increase",
                  "Scalable for new clinic expansion",
                ].map((result, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 flex-shrink-0"
                    />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-xl flex items-center justify-center">
                  <Server size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Jebel Ali Logistics
                  </h3>
                  <p className="text-gray-400 text-sm">
                    3PL Provider, 50,000 sqm Warehouse
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                <strong className="text-white">Challenge:</strong> Frequent
                system crashes, poor Wi-Fi coverage, and weak network unable to
                support 100+ scanners, risking data loss.
              </p>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                <strong className="text-white">Solution:</strong> Deployed HPE
                servers with VMware, full warehouse Wi-Fi, dedicated scanner
                network, SD-WAN, secure storage, and 24/7 managed support.
              </p>
              <div className="space-y-2">
                {[
                  "99.95% system uptime (from 95%)",
                  "100% warehouse Wi-Fi coverage",
                  "Zero shipment loss",
                  "Inventory accuracy improved to 99%",
                  "Scalable for 3x growth",
                ].map((result, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-blue-400 flex-shrink-0"
                    />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              Answers to your Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332]">
              Frequently Asked Questions
            </h2>
          </div>

          <div>
            {[
              {
                question:
                  "How much do IT infrastructure solutions cost in UAE?",
                answer:
                  "Costs depend on business size and needs. Small businesses may invest AED 30K–80K, while medium to large companies can range from AED 150K to AED 1M+. Monthly managed services vary from AED 3K–50K+. We provide custom quotes after a free assessment.",
              },
              {
                question:
                  "What is the difference between managed IT services and one-time setup?",
                answer:
                  "One-time setup is a one-off installation, while managed IT services include ongoing monitoring, support, updates, and maintenance. Most Dubai businesses prefer managed services for long-term stability and cost control.",
              },
              {
                question: "Do you support cloud migration (AWS/Azure)?",
                answer:
                  "Yes, we provide full cloud migration to AWS, Microsoft Azure, and hybrid environments. This helps reduce costs, improve performance, and enable remote access.",
              },
              {
                question: "How quickly can you deploy IT infrastructure?",
                answer:
                  "Small setups take 2–4 weeks, medium projects 6–10 weeks, and large deployments 3–6 months. Urgent setups can be completed within 72 hours.",
              },
              {
                question: "Do you provide 24/7 IT support?",
                answer:
                  "Yes, we offer 24/7 monitoring and support with fast response times, remote troubleshooting, and on-site assistance across Dubai and UAE.",
              },
              {
                question: "What compliance standards do you support?",
                answer:
                  "We support UAE and international standards like ISO 27001, PCI DSS, GDPR, DHA, and financial regulations for secure and compliant infrastructure.",
              },
              {
                question: "Can you integrate with existing systems?",
                answer:
                  "Yes, we usually upgrade and integrate with your current infrastructure instead of replacing everything — saving cost and maximizing ROI.",
              },
              {
                question: "Do you provide training for staff?",
                answer:
                  "Yes, we offer training for both IT teams and end users, including system usage, troubleshooting, and best practices.",
              },
              {
                question: "What happens if systems fail?",
                answer:
                  "We ensure 99.9% uptime with backup systems, monitoring, and fast response. In case of failure, we act quickly to restore operations.",
              },
              {
                question: "Do you support remote work infrastructure?",
                answer:
                  "Yes, we provide secure remote access, cloud tools, collaboration systems, and endpoint security for hybrid and remote teams.",
              },
              {
                question: "What vendors do you work with?",
                answer:
                  "We partner with leading brands like Cisco, Microsoft, Dell, Fortinet, VMware, and AWS to deliver reliable solutions.",
              },
              {
                question: "How do you ensure data security?",
                answer:
                  "We use firewalls, encryption, access control, monitoring, and compliance frameworks to keep your business data safe and protected.",
              },
            ].map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === i}
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="relative bg-[#1a2332] rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl mx-auto max-w-[1400px]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1A3C8B]/40 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#10B981]/20 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYxYSIgLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white font-bold tracking-wider uppercase text-sm mb-6 inline-block border border-white/20 backdrop-blur-sm">
                  Get Started Today
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Ready to Build Enterprise-Grade IT Infrastructure for Your
                  Dubai Business?
                </h2>
                <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto">
                  Don't let inadequate technology limit your business growth,
                  expose you to security risks, or frustrate employees and
                  customers.{" "}
                  <strong className="text-white">
                    Hamed Alattas Technology
                  </strong>{" "}
                  transforms IT infrastructure from liability into strategic
                  asset powering success across Dubai, Abu Dhabi, and UAE.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center text-sm gap-3 bg-[#10B981] text-white px-10 py-5 rounded-full font-bold hover:bg-[#059669] transition-all duration-300 shadow-xl shadow-[#10B981]/30 transform hover:scale-105 w-full sm:w-auto"
                >
                  Book Free Assessment <ArrowRight size={24} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  Talk to an Expert
                </Link>
              </div>

              {/* What You Get Working With Us */}
              <div className="pt-10 border-t border-white/10 mb-14">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  What You Get Working With Us:
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    {
                      bold: "Free Infrastructure Assessment",
                      text: "Comprehensive evaluation of current state, gaps, recommendations",
                    },
                    {
                      bold: "35+ Certified Engineers",
                      text: "Network, security, cloud, systems expertise under one roof",
                    },
                    {
                      bold: "99.9% Uptime Guarantee",
                      text: "SLA-backed reliability your business demands",
                    },
                    {
                      bold: "24/7 UAE-Based Support",
                      text: "Local engineers responding within 2 hours anywhere in Dubai/Abu Dhabi/Sharjah",
                    },
                    {
                      bold: "Complete Lifecycle Management",
                      text: "Design, deploy, manage, optimize, refresh",
                    },
                    {
                      bold: "Transparent Fixed Pricing",
                      text: "No hidden costs, clear proposals, predictable budgets",
                    },
                    {
                      bold: "Vendor Partnerships",
                      text: "Dell, HPE, Cisco, Microsoft, Fortinet, VMware authorized partners",
                    },
                    {
                      bold: "Proven Track Record",
                      text: "500+ successful projects across every Dubai industry",
                    },
                    {
                      bold: "Security-First Approach",
                      text: "Compliance with DHA, DIFC, UAE cybersecurity standards",
                    },
                    {
                      bold: "Strategic IT Guidance",
                      text: "Technology roadmap aligned with business objectives",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <CheckCircle2
                        size={18}
                        className="text-[#10B981] flex-shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-gray-300 leading-relaxed">
                        <strong className="text-white">{item.bold}</strong> –{" "}
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started Today – Three Easy Options */}
              <div className="pt-10 border-t border-white/10 mb-14">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Get Started Today – Three Easy Options:
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {/* Call */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981] mx-auto mb-4">
                      <Phone size={24} />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      📞 Call for Immediate Consultation
                    </h4>
                    <a
                      href="tel:+971523003423"
                      className="text-[#10B981] font-semibold text-lg hover:underline"
                    >
                      +971-523003423
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Available 24/7</p>
                  </div>

                  {/* Email */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      📧 Email Our Team
                    </h4>
                    <a
                      href="mailto:info@ha-information-technology.com"
                      className="text-blue-400 font-semibold hover:underline text-sm break-all"
                    >
                      info@ha-information-technology.com
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      💬 WhatsApp Direct
                    </h4>
                    <a
                      href="https://wa.me/971523003423"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-semibold hover:underline text-sm"
                    >
                      Quick questions answered within minutes
                    </a>
                  </div>
                </div>
              </div>

              {/* Schedule Free Assessment */}
              <div className="pt-10 border-t border-white/10 mb-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Schedule Free IT Infrastructure Assessment:
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-sm text-white px-8 py-4 rounded-full font-bold hover:bg-[#059669] transition-all duration-300 shadow-lg shadow-[#10B981]/20 transform hover:scale-105"
                  >
                    Book Free Assessment Now
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>

              {/* Company Footer */}
              <div className="text-center pt-8 border-t border-white/10">
                <h4 className="text-xl font-bold text-white mb-1">
                  Hamed Alattas Technology
                </h4>
                <p className="text-gray-400 italic text-sm">
                  Your Trusted IT Infrastructure Partner in Dubai & UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructurePage;
