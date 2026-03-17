import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Server,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle2,
  Building,
  HeartPulse,
  Landmark,
  Truck,
  ShoppingCart,
  HardHat,
  GraduationCap,
  Briefcase,
  Rocket,
  Lock,
  Zap,
  Clock,
  ChevronDown,
  Plus,
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

const SoftwareDevelopmentPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const industries = [
    {
      icon: Building,
      title: "Real Estate & Property Management",
      features: [
        "Full property lifecycle management — listings, tenancies, renewals, maintenance, financials",
        "Agent CRM with pipeline tracking, lead management, and commission calculation",
        "Tenant portals with self-service maintenance requests, payment history, document access",
        "Integration with land registry systems, property portals, and tenancy compliance platforms commonly used in property markets like Dubai and Abu Dhabi",
        "Multi-property, multi-unit, multi-owner architectures for agencies and large portfolios",
      ],
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Medical Services",
      features: [
        "Patient management systems handling hundreds of daily appointments without breaking",
        "Electronic health records with appropriate access controls and audit trails",
        "Telemedicine platforms built to the standard patients and regulators actually expect",
        "Insurance provider integrations — eligibility checks, pre-authorizations, claims submission",
        "Compliance with healthcare data protection standards relevant to your country and region including healthcare authorities across the UAE",
      ],
    },
    {
      icon: Landmark,
      title: "Finance & Fintech",
      features: [
        "Investment and portfolio management platforms with real-time data and reporting",
        "Payment processing systems with full audit trails and fraud detection logic",
        "AML/KYC workflows that satisfy regulators without creating friction for legitimate customers critical in regulated financial environments like the UAE",
        "Digital banking features, wealth management tools, transaction monitoring",
        "Security architecture meeting financial sector cybersecurity frameworks",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      features: [
        "Fleet management systems with live GPS tracking, driver management, and route optimization",
        "Warehouse management covering receiving, picking, packing, dispatch, and inventory accuracy",
        "Last-mile delivery tracking with real-time customer notifications",
        "Integration with major shipping carriers and customs systems used across the UAE and regional logistics hubs",
        "Fuel and maintenance cost tracking with reporting that actually surfaces actionable data",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      features: [
        "Omnichannel platforms connecting physical locations with online channels seamlessly",
        "Inventory management across multiple locations with automatic reorder triggers",
        "POS integration, loyalty programs, promotions engine, customer segmentation",
        "Integration with major marketplaces and payment gateways relevant to your market including platforms widely used across the UAE and Middle East",
        "Returns management, supplier portals, demand forecasting",
      ],
    },
    {
      icon: HardHat,
      title: "Construction & Contracting",
      features: [
        "Project tracking across multiple active sites with budget vs actual reporting",
        "Subcontractor coordination, bid management, RFI and document control",
        "Material procurement and supplier management",
        "Site reporting, safety incident logging, progress photography",
        "Client portals for project visibility without exposing internal data",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      features: [
        "Learning management systems with course creation, progress tracking, assessment, and certification",
        "Student information systems managing enrollment, scheduling, attendance, and communication",
        "Corporate training platforms with department-level reporting and compliance tracking",
        "Online exam systems with anti-cheating controls and automated grading",
        "Parent and student portals designed around actual user behavior, not system convenience",
      ],
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      subTitle:
        "Custom business systems for law firms, consultancies, and accounting practices serving clients across Dubai and the wider UAE.",
      features: [
        "Practice management for law firms, consultancies, and accounting practices",
        "Matter or project tracking with time recording, billing, and profitability reporting",
        "Client portals for secure document sharing, approvals, and communication",
        "Conflict checking, compliance tracking, and regulatory filing management",
        "Integration with accounting platforms and document management systems",
      ],
    },
    {
      icon: Rocket,
      title: "Startups & SaaS",
      features: [
        "MVP development focused on validating your concept quickly and cost-effectively",
        "SaaS platform architecture built to scale from your first customer to your ten-thousandth",
        "Investor-ready demonstrations that show a working product, not a prototype",
        "Technical co-founder support for non-technical founders who need more than a development agency",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Custom Software Development | Validated MVP & Scalable SaaS | HA InfoTech"
        description="Custom software development company serving healthcare, logistics, finance, retail, and real estate. Fixed-price projects, full code ownership, global delivery."
        keywords="Custom Software Development, MVP Development, Healthcare Software, Logistics Software, Fintech Development, Real Estate Software, SaaS Development"
        url="/services/software-development"
        schemas={[
          getServiceSchema({
            serviceType: "Custom Software Development",
            description:
              "Custom software development services for healthcare, logistics, finance, retail, and real estate. Validated MVP and scalable SaaS solutions.",
            minPrice: "15000",
            maxPrice: "300000",
          }),
          getFAQSchema([
            {
              question: "How much does custom software development cost?",
              answer:
                "Small business systems: $8,000–$25,000. Mid-size platforms: $25,000–$80,000. Enterprise solutions: $80,000–$300,000+. MVPs for startups: $15,000–$45,000.",
            },
            {
              question: "How long does development take?",
              answer:
                "MVP: 6–12 weeks. Small to mid-size system: 3–6 months. Enterprise platform: 6–12 months.",
            },
            {
              question: "Do you work with businesses in any country?",
              answer:
                "Yes. We serve clients across North America, Europe, the Middle East, Asia, and Australia.",
            },
            {
              question:
                "Can you integrate with our existing tools and platforms?",
              answer:
                "Yes — ERP systems, CRM platforms, accounting software, payment gateways, government APIs, shipping carriers, and third-party data feeds.",
            },
            {
              question: "What happens if we need changes after launch?",
              answer:
                "Bug fixes are covered under maintenance. New features are scoped and quoted before work starts. You get predictable costs, not open-ended invoices.",
            },
            {
              question: "Do you work with non-technical founders?",
              answer:
                "Yes. We handle all technology decisions, explain everything in plain language, and provide CTO-level guidance on architecture, team building, and technology strategy.",
            },
            {
              question: "Who owns the software?",
              answer:
                "You do. Full source code is delivered. You're not dependent on us to keep your system running.",
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Custom Software Development In UAE
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-4 max-w-3xl">
              For many growing businesses across the UAE — from Dubai and Abu
              Dhabi to Sharjah — this frustration is surprisingly common.
            </p>
            <p className="text-xl text-gray-300 font-semibold leading-relaxed mb-4 max-w-3xl">
              Hamed Al Attas Information Technology builds custom software that
              removes those limitations, giving your business the systems it
              needs to operate smoothly, scale confidently, and grow without
              technical barriers.
            </p>
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center text-gray-300 text-sm md:text-base mb-4">
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
                Software Development
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30"
              >
                Get a Free Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Introduction & The Real Cost */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side: General Intro */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
                Built Around How Your Business Actually Works
              </h2>

              <p className="text-base text-gray-600  leading-relaxed mb-4">
                Most software is built for the average business. If yours isn't
                average, that's a problem. - a challenge many ambitious
                companies across the UAE face as they scale.
              </p>
              <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                <p>
                  You've probably been through it — trialling platforms that
                  almost work, paying for features you'll never use, manually
                  bridging gaps between systems that don't talk to each other,
                  and watching your team spend real time on workarounds instead
                  of actual work. For many growing businesses across the UAE —
                  from Dubai and Abu Dhabi to Sharjah and the wider GCC region —
                  this frustration is surprisingly common.
                </p>
                <p>
                  Off-the-shelf software is designed to serve the widest
                  possible audience. That means it makes compromises — on
                  features, on workflows, on integrations, on compliance. And
                  those compromises quietly cost businesses more than they
                  realize: in staff hours, in errors, in frustrated customers,
                  and in growth opportunities that never happen because the
                  system simply can't handle them.
                </p>
                <p>
                  Custom software removes those compromises. It's built around
                  your actual workflows, your team's real processes, your
                  customers' expectations, and the regulations that apply to
                  your specific industry. For companies operating in the UAE and
                  across the Middle East, those regulatory and operational
                  details matter even more.Nothing unnecessary. Nothing missing.
                </p>
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-[#1a2332] font-semibold text-sm leading-relaxed flex items-center gap-3">
                    <div className="w-1.5 h-48 bg-gradient-to-b from-[#1A3C8B] to-[#10B981] rounded-full"></div>
                    <span>
                      <strong className="text-[#1A3C8B] text-base">
                        Hamed Al Attas Information Technology
                      </strong>{" "}
                      is a leading{" "}
                      <a
                        href="https://ha-information-technology.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A3C8B] hover:underline"
                      >
                        website design and development agency
                      </a>{" "}
                      that delivers custom software and digital solutions for
                      businesses across the UAE and internationally. They
                      specialize in building platforms tailored to each
                      company's unique needs — for organizations that have
                      outgrown generic software or never found one that truly
                      fits.
                    </span>
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex mt-4 items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30"
                  >
                    Talk to Our Experts <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side: The Real Cost */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4 flex items-center gap-3">
                  <div className="p-2.5 bg-red-50 text-red-500 rounded-xl">
                    <Zap size={24} />
                  </div>
                  The Real Cost of the Wrong Software
                </h3>
                <p className="text-gray-600 text-sm mb-8 pb-6 border-b border-gray-100">
                  Before looking at what custom development delivers, it's worth
                  being honest about what staying with the wrong platform
                  actually costs.
                </p>

                <ul className="space-y-6 text-sm">
                  {[
                    {
                      t: "Staff time lost to manual workarounds",
                      d: "Your team fills gaps the software can't handle, usually with spreadsheets, copy-pasting, or duplicate data entry.",
                    },
                    {
                      t: "Integration failures",
                      d: "Platforms that don't connect cleanly force your team to move data by hand, introducing errors at every step.",
                    },
                    {
                      t: "Compliance gaps",
                      d: "Generic software rarely keeps pace with your industry's specific regulatory requirements. something businesses in the UAE and GCC often face when using software built for completely different markets",
                    },
                    {
                      t: "Scaling ceilings",
                      d: "Systems built for small operations buckle under growth, and replacing them mid-scale is expensive and disruptive.",
                    },
                    {
                      t: "Licensing costs that compound",
                      d: "Per-seat pricing on SaaS platforms grows faster than your business does, often delivering less value as you get larger.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <XCircle size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a2332] text-sm">
                          {item.t}
                        </h4>
                        <p className="text-gray-600 mt-1 text-sm">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-red-50 rounded-2xl">
                  <p className="text-gray-800 text-sm font-medium leading-relaxed italic">
                    None of these costs appear on a single invoice. They
                    accumulate quietly — in payroll hours, in error-correction
                    time, in customer complaints, in the decisions you can't
                    make because the data isn't where you need it.
                  </p>
                </div>
                <div>
                  <h1 className="text-gray-800 text-sm font-medium leading-relaxed italic mt-4">
                    Custom software addresses all of them at the source.
                  </h1>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-6 py-3 bg-[#1A3C8B] text-white font-bold rounded-full hover:bg-[#10B981] transition-colors"
                  >
                    Request a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Build For */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-[#10B981]/5 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-[#1A3C8B]/5 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#10B981] font-bold tracking-wider uppercase text-sm mb-4 border border-green-100 shadow-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2332] mb-6 leading-tight">
              Industries Where We Build —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3C8B] to-[#10B981]">
                And What We Already Know
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              This is where the difference between a generalist developer and a
              specialist partner becomes obvious. We don't arrive at your
              project and start learning your industry. We already understand
              the workflows, the compliance frameworks, the integrations, and
              the operational realities that define how businesses in your
              sector run. including industries rapidly growing across the UAE
              and wider Middle East.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-[#1A3C8B]/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1A3C8B]/5 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125"></div>
                <div className="w-16 h-16 bg-[#1A3C8B]/5 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-[#1A3C8B] group-hover:to-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/30">
                  <ind.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2332] mb-6 group-hover:text-[#1A3C8B] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {ind.subTitle}
                </p>
                <ul className="space-y-4 flex-grow">
                  {ind.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="min-w-6 mt-0.5 text-[#10B981]">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-gray-600 leading-relaxed text-[15px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features (Scale & Language) & Security */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-12">
              {/* Multilingual Software */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Multilingual Software{" "}
                  <span className="block text-[#10B981] font-medium text-xl mt-2">
                    — Built for Your Users, Not Just Your Market
                  </span>
                </h3>
                <p className="text-gray-400 mb-6 text-base leading-relaxed">
                  If your customers speak more than one language, or if your
                  business operates across markets where language expectations
                  differ, this is an area where generic platforms consistently
                  fall short.
                </p>
                <p className="text-gray-400 mb-6 text-base leading-relaxed">
                  For many companies in the{" "}
                  <strong>UAE's multicultural business environment,</strong>{" "}
                  multilingual capability isn't optional — it's operational
                  infrastructure.
                </p>
                <ul className="space-y-4">
                  {[
                    "Full multilingual content management — your team updates both language versions from one interface",
                    "Proper RTL (right-to-left) implementation for Arabic, Hebrew, Urdu, and other RTL languages — not just flipped text, but fully restructured layouts and interfaces",
                    "Language-aware UI design — menus, forms, notifications, and error messages that work naturally in every supported language",
                    "Locale-specific formatting for dates, numbers, currencies, and addresses",
                    "Native speakers involved in development and testing — not translation tools applied after the fact",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="min-w-6 mt-1 text-[#10B981]">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-gray-300 text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-5 border-l-2 border-[#10B981] bg-white/5 rounded-r-lg">
                  <p className="text-sm text-gray-400 italic">
                    This matters for customer-facing applications,
                    employee-facing systems in multi-nationality workforces, and
                    any platform where language errors carry trust or compliance
                    consequences.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Panel */}
            <div className="bg-[#121824] p-8 md:p-10 rounded-2xl border border-white/5 h-max lg:sticky lg:top-32">
              <Lock className="text-red-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-white">
                Security & Compliance
              </h3>
              <p className="text-red-400 font-medium uppercase tracking-wider text-sm mb-6">
                Built In, Not Bolted On
              </p>

              <p className="text-gray-400 mb-8 text-base leading-relaxed">
                Security isn't a feature list we add at the end. It's embedded
                in how we write code and architect systems from the first line.
              </p>

              <ul className="space-y-4">
                {[
                  "AES-256 encryption at rest, TLS 1.3 for all data in transit",
                  "Role-based access control with granular permissions per user role",
                  "Multi-factor authentication, secure session management, automatic timeouts",
                  "OWASP Top 10 vulnerability prevention across every application we build",
                  "SQL injection protection, XSS prevention, CSRF tokens, rate limiting",
                  "Web Application Firewall, DDoS protection, intrusion detection",
                  "Compliance-ready architecture for GDPR (Europe), HIPAA (US healthcare), PCI DSS (payment processing), ISO 27001 (international information security standard) and regional regulatory expectations across the Middle East",
                  "Data residency options — including hosting within the UAE or other required jurisdictions when regulations demand it",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                  >
                    <div className="min-w-6 mt-1 text-red-400">
                      <Shield size={18} />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-700 py-2 mt-4" />

          {/* Built to Scale */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Built to Scale{" "}
              <span className="block text-blue-400 font-medium text-xl mt-2">
                — From Where You Are to Where You're Going
              </span>
            </h3>
            <p className="text-gray-400 mb-6 text-base leading-relaxed">
              One of the most expensive mistakes in software development is
              building for your current size. We design every system to handle
              ten times your current requirements from day one. especially
              important for companies scaling quickly in markets like the UAE
              and the broader GCC.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-4">
                What genuine scalability looks like:
              </h4>
              <ul className="space-y-4">
                {[
                  {
                    t: "User volume:",
                    d: "Architecture supporting growth from 50 concurrent users to 10,000+ without a rebuild",
                  },
                  {
                    t: "Transaction volume:",
                    d: "Systems handling hundreds of daily transactions scaling to hundreds of thousands",
                  },
                  {
                    t: "Geographic expansion:",
                    d: "Multi-location, multi-currency, multi-language from a centralized platform",
                  },
                  {
                    t: "Regulatory expansion:",
                    d: "Country-specific configurations for tax rates, compliance rules, and local requirements added as modules — not system rebuilds",
                  },
                  {
                    t: "Feature growth:",
                    d: "Modular architecture allowing new capabilities to be added without destabilizing existing ones",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="min-w-6 mt-1 text-blue-400">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-gray-300 text-base">
                      <strong className="text-white">{item.t}</strong> {item.d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-blue-900/20 rounded-xl border border-blue-900/50">
              <h4 className="font-bold text-blue-300 mb-2">
                The investment reality:
              </h4>
              <ul className="space-y-1 text-gray-400 text-sm mb-3">
                <li>
                  • Scalable architecture adds approximately 15–25% to initial
                  development cost
                </li>
                <li>
                  • Rebuilding a system that wasn't designed to scale typically
                  costs 50–100% of the original project
                </li>
              </ul>
              <p className="text-blue-200 font-medium italic text-sm">
                The choice is usually: invest slightly more upfront, or invest
                significantly more later under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive MVP Process Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              Startups & New Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              MVP Development — Validate Before You Build Everything
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For startups and new product lines, an MVP is the most sensible
              path forward. Build only the core features that prove your
              concept, put it in front of real users, collect feedback, and then
              invest in the full product once you've confirmed demand.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-[#1a2332] mb-10">
              Our MVP Process:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
              {[
                {
                  weeks: "Weeks 1–2",
                  title: "Product discovery",
                  desc: "Defining your core value proposition, identifying must-have versus nice-to-have features, mapping user journeys, setting measurable success metrics",
                },
                {
                  weeks: "Weeks 3–4",
                  title: "UI/UX design",
                  desc: "High-fidelity mockups and a clickable prototype you can show investors and early users",
                },
                {
                  weeks: "Weeks 5–10",
                  title: "Core development",
                  desc: "Working features, user authentication, essential integrations (payments, email, SMS), basic admin panel",
                },
                {
                  weeks: "Weeks 11–12",
                  title: "Testing and launch",
                  desc: "QA, beta user feedback, cloud hosting setup, soft launch with monitoring",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
                >
                  <div className="bg-gray-50 rounded-xl p-4 inline-block w-max mb-6">
                    <span className="text-[#1A3C8B] font-bold text-sm flex items-center gap-2">
                      <Clock size={16} /> {step.weeks}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#1a2332] mb-3">
                    {i + 1}. {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto align-stretch">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#1a2332] mb-6 border-b pb-4">
                Timeline & Investment
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">
                    Typical Timeline
                  </p>
                  <p className="text-2xl font-bold text-[#1a2332]">
                    6–12 weeks
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">
                    Typical Investment
                  </p>
                  <p className="text-2xl font-bold text-[#10B981]">
                    $15,000 – $45,000 USD
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    depending on scope and complexity
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#1a2332] mb-6 border-b pb-4">
                Real Outcomes from our MVP builds
              </h4>
              <ul className="space-y-4">
                {[
                  "Fintech platform built in 8 weeks → secured $550K seed funding from investors",
                  "Telemedicine MVP launched with 5 doctors → scaled to 50+ doctors across two countries",
                  "PropTech app → $500K angel investment, 25,000+ downloads within first year",
                  "Logistics SaaS → first 5 paying customers signed within 2 months of launch, reached $270K ARR",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-gray-600 leading-relaxed"
                  >
                    <div className="min-w-6 text-[#10B981] mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-700 block mb-1">
                    For non-technical founders:
                  </span>
                  We function as your technical co-founder — handling technology
                  decisions, architecture, infrastructure, and team guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Launch */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="bg-[#1a2332] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-2 bg-gradient-to-br from-[#1A3C8B] to-[#122b63] p-8 md:p-12 text-white flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Post-Launch: What Happens After You Go Live
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Whether you're operating in Dubai, Abu Dhabi, or anywhere
                  across the UAE, software support doesn’t stop after launch.
                  Ongoing reliability and improvement are part of the process.
                </p>
              </div>
              <div className="lg:col-span-3 p-8 md:p-12 bg-white">
                <ul className="space-y-6">
                  {[
                    {
                      title: "Critical bugs",
                      desc: "Resolved within 4–24 hours.",
                    },
                    {
                      title: "Minor updates",
                      desc: "UI tweaks, content changes, security patches—covered under maintenance.",
                    },
                    {
                      title: "New features",
                      desc: "Scoped, quoted, and approved before development begins—no surprise invoices.",
                    },
                    {
                      title: "Monthly retainer plans",
                      desc: "Businesses expecting ongoing development at predictable cost.",
                    },
                    {
                      title: "Full source code ownership",
                      desc: "No vendor lock-in.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 p-2 bg-[#10B981]/10 text-[#10B981] rounded-full h-max">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#1a2332] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
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
                question: "How much does custom software development cost?",
                answer: (
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Small business systems: $8,000–$25,000</li>
                    <li>Mid-size platforms: $25,000–$80,000</li>
                    <li>Enterprise solutions: $80,000–$300,000+</li>
                    <li>
                      MVPs for startups: $15,000–$45,000+ Every project receives
                      a fixed-price quote after a detailed discovery session. No
                      hourly surprises.
                    </li>
                    <li className="list-none mt-4 font-semibold text-gray-800">
                      For businesses in the UAE, pricing may vary slightly
                      depending on integrations, compliance requirements, and
                      infrastructure needs.
                    </li>
                  </ul>
                ),
              },
              {
                question: "How long does development take?",
                answer: (
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>MVP: 6–12 weeks</li>
                    <li>Small to mid-size system: 3–6 months</li>
                    <li>
                      Enterprise platform: 6–12 months Timeline is agreed before
                      development starts, with fortnightly demo sessions
                      throughout. Many of our clients across the UAE and GCC
                      prefer this staged approach so they can see progress and
                      provide feedback during development.
                    </li>
                  </ul>
                ),
              },
              {
                question: "Do you work with businesses in any country?",
                answer:
                  "Yes. We serve clients across North America, Europe, the Middle East, Asia, and Australia. Many of our projects come from businesses in Dubai and across the UAE, All client communication is handled in English, with project management adapted to your time zone.",
              },
              {
                question:
                  "Can you integrate with our existing tools and platforms?",
                answer:
                  "Yes — ERP systems, CRM platforms, accounting software, payment gateways, government APIs, shipping carriers, and third-party data feeds. If an API exists, we can integrate with it.",
              },
              {
                question: "What happens if we need changes after launch?",
                answer:
                  "Bug fixes are covered under maintenance. New features are scoped and quoted before work starts. You get predictable costs, not open-ended invoices.",
              },
              {
                question: "Do you work with non-technical founders?",
                answer:
                  "Yes. We handle all technology decisions, explain everything in plain language, and provide CTO-level guidance on architecture, team building, and technology strategy. This approach works especially well for startup founders in Dubai and across the UAE who need technical leadership without building an in-house team immediately.",
              },
              {
                question: "Who owns the software?",
                answer:
                  "You do. Full source code is delivered. You're not dependent on us to keep your system running — though most clients choose to stay for ongoing development and support.",
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

      {/* CTA Strategy */}
      <section className="py-24 bg-gradient-to-b from-[#1a2332] to-[#0f172a] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYxYSIgLz4KPC9zdmc+')] opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1A3C8B]/40 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#10B981]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-300 font-bold tracking-wider text-sm uppercase mb-4 border border-blue-500/20">
              The Roadmap
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Getting Started — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#10B981]">
                Three Steps, No Pressure
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 z-0"></div>

            {[
              {
                step: "1",
                time: "30–60 minutes",
                title: "Free consultation",
                desc: "We talk through your current challenges, existing systems, business goals, and timeline. Video call, phone, or in person meetings for businesses in the Dubai, Abudhabi or Sharjah when required.. No sales pitch — just an honest conversation about whether custom software is the right move for your situation.",
              },
              {
                step: "2",
                time: "3–5 business days",
                title: "Detailed proposal",
                desc: "Full project scope, fixed-price quote, technology recommendations, timeline with milestones, team composition, and post-launch support plan.",
              },
              {
                step: "3",
                time: "Ongoing transparent process",
                title: "Development begins",
                desc: "Fortnightly demos, staging environment access for real-time testing, and transparent progress tracking throughout. You always know exactly where your project stands.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center md:text-center h-full"
              >
                <div className="w-20 h-20 bg-[#1a2332] border-4 border-[#10B981]/20 rounded-full flex items-center justify-center font-black text-3xl text-white mb-8 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative backdrop-blur-sm group hover:border-[#10B981]/50 hover:shadow-[#10B981]/30 transition-all duration-300">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-b from-[#1A3C8B] to-blue-600 flex items-center justify-center">
                    {s.step}
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex-grow w-full flex flex-col hover:bg-white/10 transition-colors shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors pointer-events-none"></div>

                  <div className="inline-flex items-center justify-center md:justify-start gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] font-bold text-xs uppercase tracking-wider w-max md:mx-auto mb-5 border border-[#10B981]/20">
                    <Clock size={12} /> {s.time}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-center text-left flex-grow">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-20 relative z-20">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30"
            >
              Book Your Free Consultation <ArrowRight size={24} />
            </Link>
          </div>

          {/* Banner Stats Bottom */}
          <div className="bg-gradient-to-r from-[#10B981]/10 via-blue-500/10 to-[#10B981]/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/10 flex flex-col items-center text-center shadow-2xl backdrop-blur-sm relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-12 pb-10 border-b border-white/10 w-full justify-center">
              <h4 className="text-xl  font-extrabold text-white tracking-wide">
                Hamed Al Attas Information Technology — Custom Software Development Supporting Businesses Across Dubai, the UAE, and International Markets.
              </h4>
            </div>

            <div className="grid md:grid-cols-3 gap-10 w-full max-w-5xl items-center">
              <div className="flex flex-col items-center">
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">
                  100+
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-wider text-sm md:text-base">
                  Businesses Served
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">
                  85%+
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-wider text-sm md:text-base">
                  Client Retention
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/10">
                <Shield className="text-[#10B981] mb-3" size={48} />
                <p className="text-[#10B981] font-extrabold text-xl lg:text-2xl tracking-tight">
                  Built right. Built to last.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 w-full text-center">
              <a
                href="https://ha-information-technology.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium text-lg"
              >
                <Globe size={20} className="text-blue-400" />{" "}
                ha-information-technology.vercel.app
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// SVG Icon Component (used for XCircle and AlertCircle)
const XCircle = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

const AlertCircle = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

export default SoftwareDevelopmentPage;
