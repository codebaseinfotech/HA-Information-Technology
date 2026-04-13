import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Globe,
  ArrowRight,
  CheckCircle2,
  Building,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Shield,
  Zap,
  Clock,
  ChevronDown,
  Plus,
  Server,
  Layers,
  Search,
  MessageSquare,
  Users,
  Star,
  Smartphone,
  Check,
  Lock,
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

const WebsiteDevelopmentPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const platforms = [
    {
      title: "Adobe Experience Manager",
      type: "ENTERPRISE CMS",
      desc: "Enterprise CMS for multi-site, multi-language publishing. We implement AEM Assets, Sites, and Forms for large UAE corporations.",
    },
    {
      title: "Sitecore Development",
      type: "PERSONALIZATION",
      desc: "Personalization-driven DXP with xConnect and EXM. Perfect for brands needing data-backed content decisions.",
    },
    {
      title: "Optimizely / Episerver",
      type: "HEADLESS CMS",
      desc: "Headless and hybrid CMS for editorial freedom with developer flexibility — without sacrificing Core Web Vitals scores.",
    },
    {
      title: "Drupal Development",
      type: "GOVERNMENT-READY",
      desc: "Government portals, university sites, and media platforms. Handles complex permissions, multilingual content, and 200K+ monthly visitors.",
    },
    {
      title: "Angular / AngularJS",
      type: "SPA DEVELOPMENT",
      desc: "Single-page applications for dashboards, booking platforms, and real-time data interfaces that need fast, predictable UX.",
    },
    {
      title: "Ruby on Rails",
      type: "SAAS & MVPS",
      desc: "Rapid MVP development and scalable SaaS platforms. Great when speed-to-market matters with a clean, maintainable codebase.",
    },
    {
      title: "ASP.NET Development",
      type: "MICROSOFT STACK",
      desc: "Microsoft-stack web apps with Azure integration. Ideal for enterprise clients already invested in the Microsoft ecosystem.",
    },
    {
      title: "Ibexa DXP",
      type: "B2B COMMERCE",
      desc: "B2B digital experience platform for complex product catalogs, distributor portals, and customer self-service applications.",
    },
    {
      title: "Joomla Development",
      type: "SMB SOLUTIONS",
      desc: "Cost-effective solutions for SMBs needing a clean, SEO-optimized presence without enterprise-level complexity.",
    },
  ];

  const tools = [
    "React",
    "Node.js",
    "Laravel",
    "PHP 8",
    "Next.js",
    "WordPress",
    "MySQL",
    "MongoDB",
    "AWS",
    "Azure",
    "Docker",
    "Magento",
    "SSL / TLS",
    "Redis",
    "GraphQL",
    "REST APIs",
  ];

  const services = [
    {
      num: "01",
      title: "Website Design & Custom Development",
      desc: "We design and build websites from scratch using React, Laravel, and modern CSS — no page builders, no bloated templates. Our developers build scalable applications with optimized database architecture. Every layout is purpose-built for your specific audience and business goals.",
      list: [
        "UI/UX design with Figma wireframes before any code",
        "Mobile-first responsive layouts, tested on 12+ devices",
        "Arabic/English bilingual support with RTL layouts",
        "Core Web Vitals optimization from day one",
        "SEO-ready HTML structure with schema markup",
        "WCAG 2.1 accessibility compliance",
      ],
    },
    {
      num: "02",
      title: "Ecommerce Development",
      desc: "Whether you're selling 10 products or 10,000, we build online stores that convert. Proper inventory architecture, checkout flows designed to cut abandonment, and UAE-approved payment gateways with VAT-compliant invoicing from the start.",
      list: [
        "Magento, WooCommerce, or fully custom storefronts",
        "PayFort, Stripe, Telr & local bank integrations",
        "Multi-currency and UAE VAT-compliant invoicing",
        "Tabby & Tamara installment payment support",
        "Product filtering and advanced search architecture",
        "Built to handle Ramadan & White Friday traffic spikes",
      ],
    },
    {
      num: "03",
      title: "API Integration Services",
      desc: "Got a CRM, ERP, or third-party tool that needs to connect to your website? We've integrated Salesforce, SAP, Oracle, HubSpot, and dozens of UAE government APIs. Clean REST and GraphQL implementations with proper error handling and documentation.",
      list: [
        "REST and GraphQL API development & documentation",
        "CRM integrations: Salesforce, HubSpot, Zoho",
        "ERP integrations: SAP, Oracle, Microsoft Dynamics",
        "Payment gateway and fintech API connections",
        "Webhook and event-driven architecture",
        "UAE government API and UAE Pass integration",
      ],
    },
    {
      num: "04",
      title: "Cybersecurity & Website Protection",
      desc: "UAE businesses are an increasingly attractive cyberattack target. We implement layered security — WAF rules, SSL/TLS hardening, DDoS mitigation, and regular vulnerability scans — so your site doesn't become a liability.",
      list: [
        "SSL certificate setup with automated renewal",
        "Web Application Firewall (WAF) configuration",
        "Malware scanning, detection, and removal",
        "OWASP Top 10 vulnerability assessments",
        "DDoS protection and rate limiting implementation",
        "Security patches applied within 24 hours of disclosure",
      ],
    },
    {
      num: "05",
      title: "Annual Website Maintenance",
      desc: "Your website isn't 'set and forget.' We offer monthly and annual maintenance packages with a dedicated account manager who responds within the same business day. No ticket systems, no outsourcing.",
      list: [
        "CMS core, theme, and plugin updates",
        "24/7 uptime monitoring with instant alerts",
        "Security patches applied within 24 hours",
        "Monthly performance and traffic reports",
        "Content changes included in maintenance hours",
        "Dedicated account manager for your account",
      ],
    },
    {
      num: "06",
      title: "Hosting & Server Administration",
      desc: "We manage cloud servers on AWS and Azure with staging environments, automated daily backups, and CDN configuration optimized for GCC-region delivery. Your site stays fast even during Ramadan sale traffic spikes.",
      list: [
        "Managed cloud hosting: AWS, Azure, cPanel",
        "Daily automated backups with 30-day retention",
        "CDN setup for GCC-region fast delivery",
        "Load balancing for high-traffic ecommerce sites",
        "Staging environment for safe pre-live testing",
        "99.9% uptime SLA with transparent reporting",
      ],
    },
    {
      num: "07",
      title: "Website Audit & Performance Optimization",
      desc: "We run deep technical audits — not surface-level Lighthouse screenshots. We find the real bottlenecks: slow database queries, render-blocking scripts, oversized images, and broken redirect chains that silently kill your SEO rankings.",
      list: [
        "Full Core Web Vitals audit: LCP, FID, CLS",
        "Database query and server response time analysis",
        "Technical SEO and crawlability review",
        "Image, script, and CSS optimization audit",
        "Prioritized fix report with implementation included",
        "Before/after performance benchmarks documented",
      ],
    },
    {
      num: "08",
      title: "QA Testing & Quality Assurance",
      desc: "Every project ships through 200+ test cases — functional, cross-browser, responsive, and load testing to simulate real UAE traffic volumes. We don't hand over a site until it's passed every check.",
      list: [
        "Structured manual and automated test execution",
        "Cross-browser: Chrome, Safari, Firefox, Edge",
        "Responsive testing on 12+ real device sizes",
        "Load testing up to 10,000 concurrent users",
        "Security and penetration testing before launch",
        "Zero-bug launch guarantee (or we fix it free)",
      ],
    },
    {
      num: "09",
      title: "Payment Gateway Integration",
      desc: "We integrate UAE-approved payment gateways supporting AED transactions, 3D Secure authentication, and proper VAT handling. We've done this for banks, retailers, and SaaS companies across the Gulf.",
      list: [
        "PayFort, Telr, and Network International",
        "Stripe, PayPal, and Apple Pay integrations",
        "Tabby & Tamara buy-now-pay-later setup",
        "3D Secure 2.0 authentication implementation",
        "AED multi-currency and VAT-compliant receipts",
        "PCI DSS compliance guidance and documentation",
      ],
    },
    {
      num: "10",
      title: "Digital Marketing & SEO",
      desc: "A beautiful website nobody finds is a wasted investment. Our in-house SEO team handles on-page optimization, technical SEO, Google Ads, and content strategy — built specifically for UAE and GCC search audiences, including Arabic keyword research.",
      list: [
        "On-page and technical SEO with monthly reporting",
        "Google Ads and Meta campaign management",
        "Arabic keyword research for UAE/GCC markets",
        "Local SEO for Dubai, Abu Dhabi, Sharjah",
        "Content strategy and blog writing in Arabic/English",
        "Monthly ranking and traffic reports with real data",
      ],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      list: [
        "Business goals workshop (1–2 sessions)",
        "Technical requirements documentation",
        "Wireframes and information architecture",
        "Timeline and milestone agreement",
        "Written approval before coding starts",
      ],
    },
    {
      num: "02",
      title: "Design & Development",
      list: [
        "Figma UI/UX design with feedback rounds",
        "Git version control (every commit tracked)",
        "Weekly demo calls on staging environment",
        "Built-in revision rounds in the timeline",
        "Content migration if needed",
      ],
    },
    {
      num: "03",
      title: "QA Testing",
      list: [
        "Full functional test case execution",
        "Security and penetration testing",
        "Core Web Vitals and PageSpeed audit",
        "Cross-device and cross-browser QA",
        "Client UAT (User Acceptance Testing)",
      ],
    },
    {
      num: "04",
      title: "Launch & Support",
      list: [
        "Zero-downtime deployment strategy",
        "DNS, SSL, and CDN configuration",
        "Google Analytics & Search Console setup",
        "30 days free post-launch support",
        "Full handover training for your team",
      ],
    },
  ];

  const sectors = [
    {
      title: "Government & Public Sector",
      tag: "40+ GOVERNMENT PROJECTS",
      desc: "Bilingual portals with UAE Pass integration, WCAG 2.1 compliance, and strict security standards.",
      icon: Landmark,
    },
    {
      title: "Real Estate",
      tag: "60+ REAL ESTATE CLIENTS",
      desc: "Property listing platforms, virtual tours, CRM integrations, and high-converting lead gen websites.",
      icon: Building,
    },
    {
      title: "Education & Universities",
      tag: "25+ EDUCATION PROJECTS",
      desc: "Student portals, LMS integrations, and sites built to handle semester registration peaks without crashing.",
      icon: GraduationCap,
    },
    {
      title: "Healthcare",
      tag: "30+ HEALTHCARE PROJECTS",
      desc: "Patient portals, appointment booking systems, and telemedicine platforms with data privacy alignment.",
      icon: HeartPulse,
    },
    {
      title: "Retail & Ecommerce",
      tag: "80+ ECOMMERCE STORES",
      desc: "Online stores that handle UAE shopping seasons — Ramadan, White Friday, and National Day.",
      icon: ShoppingCart,
    },
    {
      title: "Finance & Banking",
      tag: "20+ FINANCE PROJECTS",
      desc: "Secure financial web applications and fintech platforms built to UAE Central Bank compliance standards.",
      icon: Briefcase,
    },
  ];

  const faqs = [
    {
      q: "What's the difference between web design and development?",
      a: "Design is what the user sees — layouts, colors, typography. Development is how it works — databases, server logic, APIs, and all the code under the hood. We handle both in-house, so your design and code stay consistent.",
    },
    {
      q: "How long does a typical web project take?",
      a: "A standard business website takes 6–10 weeks. An ecommerce store with integrations runs 10–16 weeks. Custom enterprise web applications are typically 3–6 months. We provide a detailed timeline in every proposal.",
    },
    {
      q: "What is a web development framework and why does it matter?",
      a: "A framework is a pre-built code structure that enforces best practices. We use Laravel for backend PHP and React for frontend. This means your site is more secure, easier to maintain, and built on a codebase any developer can understand.",
    },
    {
      q: "Do you build Arabic language websites?",
      a: "Yes — RTL Arabic layouts are standard for us, not an afterthought. We handle Arabic typography, bidirectional CMS content, bilingual SEO with Arabic keywords, and proper font rendering across mobile devices.",
    },
    {
      q: "How much does a website cost in UAE?",
      a: "A professional business website starts from AED 5,000. Ecommerce stores range from AED 15,000–40,000. Custom enterprise applications start at AED 50,000+. We send a fixed-price proposal after our discovery call — no surprise invoices.",
    },
    {
      q: "Will my website work properly on mobile phones?",
      a: "Every site we build is mobile-first by default. In the UAE, 76% of web traffic comes from mobile — so we design and test for mobile before desktop. We test across iPhone, Android, and tablet screens in standard QA.",
    },
    {
      q: "What happens after my website goes live?",
      a: "We provide 30 days of free post-launch support. After that, you choose a maintenance plan covering security updates, CMS upgrades, performance monitoring, and content changes. Many clients have been with us 5+ years.",
    },
    {
      q: "Do you handle website hosting as well?",
      a: "Yes. We manage cloud hosting on AWS and Azure with daily backups, uptime monitoring, security patching, and CDN configuration. We also work with your existing host if you prefer.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Custom Web Development Company in Dubai UAE | Hamed Alattas Technology"
        description="Top-rated web development company in Dubai, UAE. We've built 100+ websites using React, Laravel & Node.js for businesses across the UAE. Get a free consultation today. AED 5,000 – AED 100,000+."
        keywords="Web Development Company, custom website development Dubai, ecommerce development UAE, React Laravel web development services"
        url="/services/website-development"
        schemas={[
          getServiceSchema({
            serviceType: "Web Development Services",
            description: "Custom web development services in UAE including business websites, ecommerce stores, web applications, API integrations, and enterprise CMS development.",
            minPrice: "5000",
            maxPrice: "100000"
          }),
          getFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A3C8B]/40 border border-[#1A3C8B] text-blue-200 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>{" "}
              UAE'S LEADING WEB DEVELOPMENT COMPANY
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Custom Web Development for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3C8B] to-[#10B981]">
                Modern UAE Business
              </span>
            </h1>
            <p className="text-xl  text-gray-300 leading-relaxed mb-6 max-w-3xl">
              We've built 100+ websites and web applications for businesses
              across the UAE — using React, Laravel, Node.js, and enterprise CMS
              platforms. Fast code, real results, no templates.
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-y-3 gap-x-6 sm:gap-4 text-blue-200 text-sm font-medium mb-8 bg-white/5 p-4 rounded-2xl w-full sm:w-max  border border-white/5 mx-auto lg:mx-0 justify-center">
              <span className="flex items-center gap-1.5">
                <strong className="text-white text-base">100+</strong> Sites
              </span>
              <span className="hidden sm:block opacity-30">|</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-white text-base">7+</strong> Years
              </span>
              <span className="hidden sm:block opacity-30">|</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-white text-base">1,500+</strong> Clients
              </span>
              <span className="hidden sm:block opacity-30">|</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-white text-base">35+</strong> Experts
              </span>
            </div>

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center text-gray-400 text-sm md:text-base mb-4">
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
                Website Development
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-fit">
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30"
                >
                  Get a Free Consultation <ArrowRight size={20} />
                </Link>
              </div>

              <div className="flex flex-col gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="text-white text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
                  Budget Range:{" "}
                  <span className="text-blue-300 font-bold ml-1">
                    AED 5,000 – AED 100,000+
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#10B981]" /> Fixed-price
                    quotes
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-500 hidden sm:block"></span>
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#10B981]" /> No hidden
                    fees
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Intro Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#1A3C8B] font-bold text-sm mb-6 uppercase tracking-wider">
                About Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">
                Innovative Web Development for Businesses Across UAE
              </h2>
              <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                <p>
                  At Hamed Alattas Technology, we're a 35-person
                  team of developers, designers, and project managers based
                  right here in the UAE. We've worked with government entities,
                  banks, universities, and retail brands since 2017 — meaning we
                  know exactly what it takes to build for this market.
                </p>
                <p>
                  We don't outsource. We don't use page builders. Every project
                  gets a dedicated developer, project manager, and QA engineer.
                  You'll always know who's building your site and what they're
                  doing.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center transform rotate-12">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">
                The Problem We Solve
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most UAE businesses lose customers to slow-loading pages, broken
                mobile layouts, and outdated backends held together with duct
                tape. Your website is your highest-traffic salesperson — and
                most of them are underperforming.
              </p>
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                <Shield size={24} className="text-[#1A3C8B] shrink-0" />
                <p className="text-sm text-gray-800 font-medium">
                  Our team builds high-performance websites optimized for speed,
                  security, and scalability from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms & Tools */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-[#10B981]/5 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-[#1A3C8B]/5 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              We Build on the World's Best Platforms
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Enterprise or startup — we work with the right technology for your
              situation, not just whatever's trending.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-[1400px] mx-auto">
            {platforms.map((plat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="text-xs font-bold tracking-wider uppercase text-[#10B981] mb-3 block">
                  {plat.type}
                </span>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#1A3C8B] transition-colors">
                  {plat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {plat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#1a2332] rounded-[2.5rem] p-10 md:p-16 text-center max-w-[1400px] mx-auto overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl pointer-events-none"></div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 relative z-10">
              The Tools We Use to Build Your Site
            </h3>
            <p className="text-blue-200 mb-10 max-w-2xl mx-auto relative z-10">
              We pick the right tool for the job — not the trendiest one. Here's
              what our production code actually runs on.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors text-sm md:text-base border border-white/5 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-[#1A3C8B] font-bold tracking-wider text-sm uppercase mb-4 border border-blue-100">
              Full Lifecycle
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Everything You Need to Build, Run & Grow
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We handle the full lifecycle — from design to hosting to digital
              marketing. No need to juggle multiple agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 mb-4 inline-block">
                  {svc.num}
                </div>
                <h3 className="text-2xl font-bold text-[#1a2332] mb-4">
                  {svc.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  {svc.desc}
                </p>
                <ul className="space-y-3">
                  {svc.list.map((item, idy) => (
                    <li key={idy} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#10B981] mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 4-Step Development Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Our 4-Step Development Process
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              No surprises, no delays, no 'the developer was unavailable'
              excuses. Here's how every project runs from day one to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative flex flex-col hover:border-blue-300 hover:shadow-md transition-all h-full"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[#1A3C8B] shadow-sm mb-6 border border-gray-100">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-6 border-b border-gray-200 pb-4">
                  {step.title}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {step.list.map((item, idy) => (
                    <li key={idy} className="flex gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0"></span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Sectors */}
      <section className="py-24 bg-[#1a2332] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-[#1A3C8B]/20 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-blue-500/10 blur-[120px] pointer-events-none rounded-full"></div>

        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              7+ Years in UAE's Most Demanding Sectors
            </h2>
            <p className="text-lg text-blue-200 leading-relaxed">
              We understand the technical, regulatory, and cultural requirements
              of building digital products in the UAE — because we've been doing
              it since 2017.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {sectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-14 h-14 bg-[#1A3C8B] rounded-xl flex items-center justify-center text-white mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-sm font-bold tracking-wider text-[#10B981] uppercase mb-4">
                    {sector.tag}
                  </p>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332]">
              What Our Clients Say After We've Built Their Site
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {[
              {
                name: "Khalid Al Ansari",
                title: "CEO, Ansari Properties — Dubai",
                quote:
                  "Hamed Alattas Technology built our entire property portal from scratch. Pages load in under 2 seconds and the lead capture system has tripled our monthly inquiries. They also trained our team so we can manage content ourselves.",
              },
              {
                name: "Noura Al Mazrouei",
                title: "Digital Director, Government Entity — Abu Dhabi",
                quote:
                  "We'd worked with three agencies before Hamed Alattas Technology. None of them understood government-facing platform requirements. These guys knew about UAE Pass, accessibility standards, and bilingual CMS needs from the first meeting.",
              },
              {
                name: "Sara Rahimi",
                title: "Head of Ecommerce, Fashion Retail Brand — Sharjah",
                quote:
                  "Our ecommerce site now does 3x more revenue since the redesign. Mobile bounce rate dropped from 72% to 38%. The PayFort integration also reduced checkout failures significantly. Real, measurable ROI.",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-base leading-relaxed italic mb-8 flex-grow">
                  "{review.quote}"
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-bold text-[#1a2332] text-lg">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332]">
              Questions We Hear All the Time
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaqIndex === i}
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strategy */}
      <section className="py-24 bg-gradient-to-b from-[#1a2332] to-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYxYSIgLz4KPC9zdmc+')] opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1A3C8B]/40 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#10B981]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-4 xl:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-300 font-bold tracking-wider text-sm uppercase mb-4 border border-blue-500/20">
              READY TO START?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Make Your Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#10B981]">
                Stand Out Online
              </span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join 1,500+ UAE businesses that trust Hamed Alattas Technology to
              build, maintain, and grow their digital presence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30"
            >
              Get In Touch With Us <ArrowRight size={24} />
            </Link>
          </div>

          {/* Banner Stats Bottom */}
          <div className="bg-gradient-to-r from-[#10B981]/10 via-blue-500/10 to-[#10B981]/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/10 flex flex-col items-center text-center shadow-2xl relative z-10 overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex flex-col items-center gap-6 mb-8 w-full justify-center">
              <h4 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                We're based in Dubai. We respond within 4 business hours.
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full text-left">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">
                  📍 Office
                </p>
                <p className="text-white">
                  306 Arjumand Building-3rd Floor Dubai investment Park 1 Dubai UAE
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">
                  📞 Phone / WhatsApp
                </p>
                <p className="text-white">+91 709 685 9504</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">
                  ✉️ Email
                </p>
                <p className="text-white">info@alattastech.com</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">
                  🕐 Business Hours
                </p>
                <p className="text-white text-sm">
                  Mon–Fri: 9:00 AM – 6:00 PM GST
                  <br />
                  Sat: 10:00 AM – 2:00 PM GST
                </p>
              </div>
            </div>
            <div className="mt-8 text-[#10B981] flex items-center gap-2">
              <Lock size={16} />{" "}
              <span className="text-sm font-medium">
                Your data is protected under our NDA policy.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentPage;
