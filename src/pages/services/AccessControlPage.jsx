import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Smartphone,
  Fingerprint,
  Building2,
  Home,
  GraduationCap,
  Key,
  Users,
  Eye,
  Server,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Plus,
  ChevronDown,
  Activity,
  Cpu,
  MapPin,
  MessageSquare,
  AlertTriangle,
  Layers,
  Settings,
  Star,
  RefreshCw,
  HeartPulse
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

const AccessControlPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const technologies = [
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      desc: "Fingerprint and facial recognition for maximum security. Eliminates the risk of lost or shared credentials.",
    },
    {
      icon: Key,
      title: "RFID Cards & Keyless Entry",
      desc: "Efficient, contactless access for employees or residents using encrypted smart cards and fobs.",
    },
    {
      icon: Smartphone,
      title: "Mobile-Based Access",
      desc: "Turn smartphones into secure access keys. Grant or revoke access instantly via cloud portals.",
    },
    {
      icon: Eye,
      title: "Centralized Monitoring",
      desc: "Real-time visibility and management from anywhere using powerful dashboard software.",
    },
  ];

  const propertyTypes = [
    {
      icon: Building2,
      title: "For Businesses & Workplaces in Dubai, Abu Dhabi & Sharjah",
      desc: "Managing employees, visitors, and restricted zones manually is inefficient and risky. With a smart access solution:",
      bullets: [
        "Assign role-based permissions for employees and staff",
        "Monitor activity in real-time with audit logs",
        "Protect sensitive areas like server rooms, labs, and storage areas",
        "Integrate with CCTV cameras and alarm systems for a complete security ecosystem"
      ]
    },
    {
      icon: Home,
      title: "For Residential Communities & Villas",
      desc: "Uncontrolled entry compromises safety and privacy. With electronic door access, residents can:",
      bullets: [
        "Manage entry points and verify visitors",
        "Enjoy keyless entry via mobile apps or RFID cards",
        "Monitor activity in real-time for peace of mind",
        "Reduce the risk of unauthorized access or theft"
      ]
    },
    {
      icon: GraduationCap,
      title: "For Schools, Hospitals & Institutions",
      desc: "Safety is critical. With a security entry system in place:",
      bullets: [
        "Only authorized staff, students, and visitors gain access",
        "Emergency lockdowns can be activated instantly",
        "Sensitive areas, like labs or patient wards, remain secure",
        "Administrators can generate reports for audits or inspections"
      ]
    },
  ];

  const comprehensivePlanning = [
    {
      title: "Consultation & Requirement Analysis",
      bullets: [
        "Detailed property assessment",
        "Understanding security concerns and operational needs",
        "Identifying optimal smart access solutions tailored for your environment"
      ],
      icon: Eye
    },
    {
      title: "Custom System Design",
      bullets: [
        "Selecting hardware and software that integrates seamlessly",
        "Planning for cloud-based management, IoT connectivity, and AI analytics",
        "Ensuring future scalability for multi-site properties"
      ],
      icon: Layers
    },
    {
      title: "Professional Installation & Configuration",
      bullets: [
        "Accurate installation of access readers, control panels, and supporting infrastructure",
        "Configuration based on access rules, user roles, and emergency protocols",
        "Full testing to ensure reliability and smooth operation"
      ],
      icon: Wrench
    },
    {
      title: "Training & Handover",
      bullets: [
        "Clear guidance for your team on managing access and monitoring activity",
        "Step-by-step instructions for updates, adding new users, and generating reports"
      ],
      icon: Users
    },
    {
      title: "Ongoing Support & Maintenance",
      bullets: [
        "Continuous system updates, troubleshooting, and enhancements",
        "Technical assistance for both residential and commercial properties",
        "Ensuring compliance with UAE regulations and long-term system reliability"
      ],
      icon: RefreshCw
    }
  ];

  const powerfulFeatures = [
    { title: "Biometric Authentication", desc: "Fingerprint and facial recognition eliminate lost or shared credentials.", icon: Fingerprint },
    { title: "Fast Card/Tag Access", desc: "Efficient and quick entry for employees, residents, or visitors.", icon: Key },
    { title: "Mobile Access", desc: "Smartphones become secure access keys — grant or revoke access instantly.", icon: Smartphone },
    { title: "Remote Management", desc: "Centralized dashboards allow on-site and off-site control.", icon: Server },
    { title: "Integrated Ecosystem", desc: "Connect with CCTV cameras, alarm systems, and building management software.", icon: Shield },
    { title: "Real-Time Logs", desc: "Track who accessed what and when, improving accountability and decision-making.", icon: Activity },
    { title: "Multi-Factor Access", desc: "Add an extra layer of security for sensitive areas.", icon: Shield },
    { title: "AI Analytics", desc: "Detect unusual access patterns and potential security threats.", icon: Cpu }
  ];

  const faqs = [
    {
      question: "What is an access control system?",
      answer: "A system that manages who can enter specific areas using biometrics, RFID cards, mobile apps, or digital codes, controlled from a central dashboard."
    },
    {
      question: "Why invest in Dubai or Abu Dhabi?",
      answer: "Prevent unauthorized entry, protect sensitive areas, and comply with UAE safety standards."
    },
    {
      question: "Can these systems be managed remotely?",
      answer: "Yes. Cloud-based systems allow property managers to grant/revoke access and monitor activity from anywhere."
    },
    {
      question: "What is the installation time in the UAE?",
      answer: "Typically 1–3 days depending on property size, doors, and system complexity."
    },
    {
      question: "Are systems reliable in UAE climates?",
      answer: "Designed for high temperatures, humidity, and dust. Hardware is durable, software encrypted."
    },
    {
      question: "Is support available?",
      answer: "Ongoing updates, on-site assistance, and expert support across all Emirates."
    },
    {
      question: "Can access control integrate with existing security systems?",
      answer: "Yes — CCTV, alarms, and building management software for a unified ecosystem."
    },
    {
      question: "How much does it cost?",
      answer: "Varies by property size, doors, system type, and features. Transparent quotes ensure no hidden fees."
    },
    {
      question: "Are they suitable for homes & villas?",
      answer: "Ideal for keyless entry, visitor management, and real-time monitoring."
    },
    {
      question: "How to get a customized solution in Dubai/Abu Dhabi?",
      answer: "Contact Hamed Al Attas for a free consultation and tailored installation."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Access Control Systems in UAE | Smart Security Entry Solutions Dubai, Abu Dhabi"
        description="Secure your property with advanced access control systems in UAE. Smart entry solutions for offices, villas & buildings in Dubai, Abu Dhabi & Sharjah. Get expert installation."
        keywords="Access Control Systems UAE, Smart Security Solutions, Biometric Authentication Dubai, RFID Door Locks Abu Dhabi, Mobile Access Systems UAE"
        url="/services/access-control"
        schemas={[
          getServiceSchema({
            serviceType: "Access Control Systems",
            description: "Advanced Access Control Systems in UAE. Secure, Smart & Fully Controlled Entry for Every Property using Biometrics, RFID, and Mobile Authentication.",
            minPrice: "2500",
            maxPrice: "50000",
          }),
          getFAQSchema(faqs)
        ]}
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1a2332] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className={`container mx-auto px-4 xl:px-12 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Advanced Access Control Systems in UAE
            </h1>
            <p className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Secure, Smart & Fully Controlled Entry for Every Property
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
              In today's world, securing your property requires more than just traditional locks. 
              Whether it's an office, residential complex, school, or warehouse, unrestricted access and outdated entry systems expose your premises to serious risks. 
              At <Link to="/" className="text-white font-bold hover:text-[#10B981] transition-colors">Hamed Al Attas</Link>, we provide advanced access control systems that deliver full control over who enters your property.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Certified Security Experts",
                "Tailored System Design",
                "Fast Installation in UAE",
                "Ongoing Maintenance"
              ].map((stat, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  ✓ {stat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center text-gray-300 text-sm md:text-base mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-[#10B981] font-medium break-words">Access Control</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/40"
              >
                Get Free Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/40 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
              Who Really Has Access to Your Property?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Have you ever wondered how many people can enter your building without your knowledge?
              Lost keys, untracked visitors, and outdated locks create invisible security gaps.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 font-medium leading-relaxed italic border-l-4 border-[#1A3C8B] pl-6 text-left">
                "Electronic door access systems allow you to control exactly who can enter, when, and under what conditions — eliminating uncertainty and protecting your property from unauthorized access."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-4 border border-blue-100 shadow-sm">
              Smart Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Technologies in Modern Access Control
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="group bg-gray-50 hover:bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3C8B]/5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#1A3C8B]/10 text-[#1A3C8B] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A3C8B] group-hover:text-white transition-all duration-300">
                  <tech.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#1A3C8B] transition-colors">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-24 bg-[#1a2332] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A3C8B] opacity-20 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Smart Access Control for Every Property Type
            </h2>
            <p className="text-gray-400 text-lg">
              No two properties have the same security requirements. That's why our access control systems are designed to adapt completely to your environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto mb-10">
            {propertyTypes.map((type, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl flex flex-col">
                <div className="w-14 h-14 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                  {type.desc}
                </p>
                <ul className="space-y-4 flex-grow">
                  {type.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-6 text-center max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-sm text-blue-100 font-bold">Goal: Effortless control and real-time monitoring across all property types.</p>
          </div>
        </div>
      </section>

      {/* Why Organizations Are Switching */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1200px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Why Organizations Are Switching to Smart Access Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="bg-white border border-red-100 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-red-500 w-8 h-8" />
                <h3 className="text-xl font-bold text-red-900">The Hidden Risks of Traditional Locks</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Unauthorized individuals entering restricted areas",
                  "Lost, duplicated, or shared keys",
                  "No clear record of who accessed which areas",
                  "Multiple entry points that are difficult to monitor"
                ].map((risk, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg mt-0.5">✗</span>
                    <span className="text-gray-600">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a2332] rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Shield className="text-[#10B981] w-8 h-8" />
                <h3 className="text-xl font-bold text-white">The Modern Transformation</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  "Centralized management of users, permissions, and access points",
                  "Real-time monitoring and alerts",
                  "Role-based access for employees, visitors, or residents",
                  "Integration with IoT devices, CCTV cameras, and alarm systems"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl relative z-10">
                <p className="text-sm text-blue-200 font-medium">
                  With these systems, organizations in Dubai, Abu Dhabi, and Sharjah gain full visibility and control, protecting their property, staff, and assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Planning */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Comprehensive Access Control — <br/>From Planning to Ongoing Support
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Implementing an access control system isn't just installing devices — it's creating a solution that works seamlessly for your property, your people, and your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comprehensivePlanning.map((phase, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-[#1A3C8B] rounded-xl flex items-center justify-center mb-6">
                  <phase.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[15px] text-gray-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Comparison */}
      <section className="py-24 bg-[#1a2332] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px] relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful Features That Make Access Control Simple, Secure & Efficient
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              A modern access control system is more than security — it simplifies day-to-day operations while protecting your property.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerfulFeatures.map((feat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <feat.icon size={28} className="text-[#10B981] mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-blue-300 font-medium">Every feature reduces complexity while providing complete visibility and control.</p>
          </div>
        </div>
      </section>

      {/* Installation Step-by-Step */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Installation Process — Seamless & Efficient
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Installing a new access control system doesn't need to disrupt daily operations.
            </p>
          </div>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {[
              { title: "On-Site Assessment", desc: "Review layout, entry points, and priorities." },
              { title: "Custom Design", desc: "Tailor devices, access points, and architecture to your property." },
              { title: "Professional Installation", desc: "Install readers, panels, and infrastructure with precision." },
              { title: "Integration & Configuration", desc: "Connect to central software, set roles, and access rules." },
              { title: "Testing & QA", desc: "Verify performance, reliability, and usability." },
              { title: "Training & Handover", desc: "Ensure confidence in managing access, monitoring, and updates." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#1A3C8B] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10 transition-transform group-hover:scale-110">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[#1a2332] text-lg mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-xl font-bold text-[#10B981]">
            Minimal disruption. Maximum efficiency.
          </div>
        </div>
      </section>

      {/* Flexible Solutions */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
                Flexible Solutions — Designed Around Your Needs & Budget
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Security is a long-term investment. Our flexible solutions cater to every requirement seamlessly.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#1A3C8B]">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">One-Time Installation Packages</h4>
                    <p className="text-gray-600">Hardware, setup, and training in a single investment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#1A3C8B]">
                    <Server size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Cloud-Based Subscriptions</h4>
                    <p className="text-gray-600">Remote management, scalability, and real-time control from anywhere.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#1A3C8B]">
                    <RefreshCw size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Ongoing Support Plans</h4>
                    <p className="text-gray-600">Regular updates, technical assistance, and future upgrades.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-[#1A3C8B] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                <h3 className="text-2xl font-bold mb-6">Pricing Transparency</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Typical one-door setup starts around a highly accessible flat rate, while enterprise systems scale dynamically to meet wider structural needs.
                </p>
                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="font-medium">Custom quotes provided immediately based on property size, entry points, and desired features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Experts & Success */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Experts */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Meet the Experts Behind Your Security
              </h2>
              <p className="text-gray-600 mb-8">
                A powerful access control system works best when supported by experienced professionals. Your system won't just be installed — it will be optimized for long-term performance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Security System Engineers", desc: "Design efficient, reliable solutions for any property type.", icon: Shield },
                  { title: "Network & Software Specialists", desc: "Ensure seamless communication, cloud integration, and scalability.", icon: Server },
                  { title: "Professional Installation Technicians", desc: "Accurate setup and smooth integration with existing infrastructure.", icon: Wrench },
                  { title: "Dedicated Support Staff", desc: "Provide ongoing assistance, updates, and absolute peace of mind training.", icon: Users }
                ].map((expert, i) => (
                  <div key={i} className="border border-gray-100 bg-gray-50 rounded-2xl p-6">
                    <expert.icon className="text-[#10B981] mb-3" size={24} />
                    <h4 className="font-bold text-[#1a2332] mb-2">{expert.title}</h4>
                    <p className="text-sm text-gray-600">{expert.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Real Examples of Success
              </h2>
              <p className="text-gray-600 mb-8">
                See how we've deployed systems across the UAE flawlessly. <span className="font-bold text-[#1A3C8B]">Your property could be next.</span>
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Corporate Offices, Dubai", desc: "Multi-floor access control system with centralized monitoring — enhanced security, controlled access, and streamlined visitor management.", icon: Building2 },
                  { title: "Residential Communities, Abu Dhabi", desc: "Mobile and card-based smart access solution replaced traditional keys — residents enjoy safe, convenient entry.", icon: Home },
                  { title: "Educational Institutions", desc: "Role-based permissions, emergency lockdowns, and clear access logs — improved safety for students and staff.", icon: GraduationCap },
                  { title: "Healthcare & Hospitals", desc: "Integrated access control with alarms and staff badges — restricted sensitive areas, compliance with safety standards, and smooth daily operations.", icon: HeartPulse }
                ].map((caseStudy, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <div className="w-12 h-12 bg-blue-50 text-[#1A3C8B] rounded-xl flex items-center justify-center shrink-0">
                      <caseStudy.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a2332] text-lg mb-1">{caseStudy.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{caseStudy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final Block */}
      <section className="py-20 bg-gradient-to-br from-[#1A3C8B] to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Start Securing Your Space Today</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">
            Protect people, property, and sensitive areas with the right smart access solution. Get in touch to schedule a free property assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-emerald-500/20 text-lg"
            >
              Contact Hamed Al Attas <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Frequently Asked Questions 
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              Access Control Systems in UAE
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessControlPage;
