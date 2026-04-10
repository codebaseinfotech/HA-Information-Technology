import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
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
  TrendingUp,
  Package,
  CreditCard,
  BarChart3,
  Search,
  Languages,
  Gauge,
  Store,
  Shirt,
  Monitor,
  Apple,
  Heart,
  Boxes,
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

const ECommerceDevelopmentPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Ecommerce Development",
      description: (
        <>
          <p className="mb-4 font-semibold">
            Every business is different — so why use a generic template?
          </p>
          <p>
            As a <strong>custom ecommerce development company</strong>, we
            create platforms from the ground up, designed around your products,
            customers, and growth goals. Whether you need advanced features,
            integrations, or a completely unique shopping experience, we build
            it exactly how your business needs it.
          </p>
          <p>
            This is ideal for brands that want flexibility, scalability, and
            full control over their ecommerce ecosystem.
          </p>
        </>
      ),
      tech: ["Custom UI/UX", "API Integration", "Scalable Architecture"],
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: (
        <>
          <p className="mb-4 font-semibold">
            Looking for something fast, reliable, and easy to manage?
          </p>
          <p>
            As a <strong>Shopify ecommerce development company</strong>, we
            build clean, conversion-focused stores that are perfect for startups
            and growing brands in Dubai and across the UAE.
          </p>
          <p>
            From theme customization to app integration, we make sure your
            Shopify store looks great, loads fast, and sells effectively —
            without unnecessary complexity.
          </p>
        </>
      ),
      tech: ["Shopify", "Liquid", "Shopify Apps"],
    },
    {
      icon: Server,
      title: "Magento Development",
      description: (
        <>
          <p className="mb-4 font-semibold">
            For large-scale ecommerce businesses, flexibility and power matter.
          </p>
          <p>
            As a <strong>Magento ecommerce development company</strong>, we
            create robust, scalable platforms that handle complex catalogs, high
            traffic, and advanced functionalities.
          </p>
          <p>
            Perfect for enterprises and businesses that need deep customization,
            multi-store setups, and strong backend performance.
          </p>
        </>
      ),
      tech: ["Magento", "PHP", "Multi-Store"],
    },
    {
      icon: Globe,
      title: "WooCommerce Development",
      description: (
        <>
          <p className="mb-4 font-semibold">
            If you’re already using WordPress, WooCommerce is a smart choice
          </p>
          <p>
            As a <strong>WooCommerce ecommerce web development company</strong>,
            we build user-friendly, SEO-optimized online stores that are easy to
            manage and cost-effective.
          </p>
          <p>
            It’s a great option for small to mid-sized businesses looking for
            flexibility without heavy investment.
          </p>
        </>
      ),
      tech: ["WooCommerce", "WordPress", "PHP"],
    },
    {
      icon: Store,
      title: "Marketplace Development",
      description: (
        <>
          <p className="mb-4 font-semibold">
            Want to build the next Amazon-style platform?
          </p>
          <p>
            We develop multi-vendor ecommerce marketplaces where multiple
            sellers can list and manage their products — all under one platform.
          </p>
          <p>
            From vendor dashboards to commission systems, we handle everything
            to help you scale a marketplace business in the UAE.
          </p>
        </>
      ),
      tech: ["Multi-Vendor", "Commission System", "Vendor Dashboard"],
    },
    {
      icon: Smartphone,
      title: "Ecommerce Mobile App Development",
      description: (
        <>
          <p className="mb-4 font-semibold">Did you know?</p>
          <p>
            Over <strong>75% of ecommerce traffic in the UAE</strong>
          </p>
          <p>
            If your store isn’t optimized for mobile — you’re missing a huge
            opportunity. As an <strong>ecommerce app development company</strong>,
            we create fast, intuitive mobile apps that increase engagement,
            retention, and repeat purchases.
          </p>
        </>
      ),
      tech: ["React Native", "Flutter", "iOS & Android"],
    },
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Secure Payment Integration",
      desc: "Stripe, PayTabs, Telr, and all major UAE payment gateways.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive Design",
      desc: "Optimized for 90%+ UAE mobile shoppers.",
    },
    {
      icon: Search,
      title: "SEO-Friendly Structure",
      desc: "Built to rank on Google and drive organic traffic.",
    },
    {
      icon: Gauge,
      title: "Fast Loading Speed",
      desc: "Critical for conversions — sub-3-second load times.",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      desc: "Full Arabic + English with RTL layout support.",
    },
    {
      icon: Package,
      title: "Smart Inventory Management",
      desc: "Automated stock tracking and order management.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      desc: "Real-time tracking of performance and sales metrics.",
    },
  ];

  const industries = [
    {
      icon: Store,
      title: "Retail",
      desc: "Whether it's a cozy local shop or a big online brand, we make shopping easy and enjoyable.",
    },
    {
      icon: Shirt,
      title: "Fashion",
      desc: "Eye-catching designs, smooth browsing, and a shopping experience that feels effortless.",
    },
    {
      icon: Monitor,
      title: "Electronics",
      desc: "Smart, feature-packed stores with filters, product comparisons, and quick checkout.",
    },
    {
      icon: Apple,
      title: "Grocery",
      desc: "Fast, mobile-friendly platforms that make ordering and reordering a breeze.",
    },
    {
      icon: Heart,
      title: "Healthcare",
      desc: "Safe, reliable, and compliant ecommerce for medical products and equipment.",
    },
    {
      icon: Boxes,
      title: "B2B Wholesale",
      desc: "Efficient bulk ordering, custom pricing, and account management for serious businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Ecommerce Development Company in UAE | Shopify, Magento & WooCommerce Experts"
        description="Looking for the best ecommerce website development company in Dubai, Abu Dhabi, or Sharjah? We build custom Shopify, Magento, and WooCommerce stores with mobile-first design, fast checkout, and high conversions."
        keywords="Ecommerce Development UAE, Shopify Development Dubai, Magento Development, WooCommerce UAE, Custom Ecommerce, B2B B2C Ecommerce, Online Store Dubai"
        url="/services/ecommerce"
        schemas={[
          getServiceSchema({
            serviceType: "Ecommerce Web Development",
            description:
              "Custom Shopify, Magento & WooCommerce solutions built for UAE businesses. 7+ years experience, 200+ projects delivered.",
            minPrice: "5000",
            maxPrice: "50000",
          }),
          getFAQSchema([
            {
              question:
                "What does it cost to develop an ecommerce store in the UAE?",
              answer:
                "The cost varies: Basic store for startups, Advanced store with custom UI/UX, and Custom solution for fully tailored platforms. We provide transparent pricing upfront.",
            },
            {
              question: "How long does it take to launch an ecommerce store?",
              answer:
                "Basic store: 2–4 weeks, Advanced store: 4–8 weeks, Custom solution: 2–4 months.",
            },
            {
              question: "Which ecommerce platform is best for my business?",
              answer:
                "Shopify for quick launch, WooCommerce for WordPress users, Magento for large-scale businesses. We guide you to the right choice.",
            },
            {
              question: "Do you provide ongoing support?",
              answer:
                "Yes, we provide updates, maintenance, technical support, and growth strategies.",
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
              E-commerce Web Development Service
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-2 max-w-3xl">
              Custom Shopify, Magento & WooCommerce Solutions Built for UAE
              Businesses
            </p>
            <p className="text-base text-gray-300 font-semibold leading-relaxed mb-4 max-w-3xl">
              Running an online store in the UAE isn't just about having a
              website anymore. Customers in Dubai, Abu Dhabi, and Sharjah expect{" "}
              <strong>
                fast loading, smooth checkout, mobile-friendly design
              </strong>
              , and a shopping experience that feels effortless. With{" "}
              <strong>7+ years</strong> of experience and{" "}
              <strong>200+ ecommerce projects</strong> delivered,{" "}
              <Link
                to="https://alattastech.com"
                className="hover:text-[#10B981]/80 transition-colors text-[#10B981]"
              >
                Hamed Alattas Technology
              </Link>{" "}
              builds stores that actually sell.
            </p>
            {/* Stats Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                "7+ Years Experience",
                "200+ Ecommerce Projects",
                "Deep UAE Market Knowledge",
              ].map((stat, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  ✓ {stat}
                </span>
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
                E-Commerce Development
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30"
              >
                Get Free Consultation <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a2332] border border-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-white/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Problem Statement Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
              Struggling to Build a Profitable Ecommerce Business in UAE?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Let's be honest — most ecommerce websites fail not because the
              idea is bad, but because the execution is weak.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              {[
                "Visitors come… but don't buy",
                "Website feels slow or confusing",
                "Checkout process is frustrating",
                "Mobile experience is poor",
                "No clear sales growth",
              ].map((problem, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-5 py-3 text-left"
                >
                  <span className="text-red-400 text-xl">✗</span>
                  <span className="text-gray-700 text-sm font-medium">
                    {problem}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              That's where we step in. We build{" "}
              <strong>high-converting ecommerce platforms</strong> tailored
              specifically for UAE audiences — combining design, speed, and
              strategy to actually drive revenue.
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
              Professional Ecommerce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3C8B] to-[#10B981]">
                Development Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We're not just another ecommerce development company. We build
              systems that sell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {services.map((srv, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-[#1A3C8B]/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1A3C8B]/5 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125"></div>
                <div className="w-16 h-16 bg-[#1A3C8B]/5 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-[#1A3C8B] group-hover:to-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/30">
                  <srv.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2332] mb-4 group-hover:text-[#1A3C8B] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                  {srv.description}
                </p>
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {srv.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B & B2C Section */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/40 text-blue-300 font-bold tracking-wider uppercase text-sm mb-4 border border-blue-500/20">
              B2B & B2C
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              B2B & B2C Ecommerce Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
            {/* B2B */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="w-14 h-14 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6">
                <Boxes size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                B2B Ecommerce Development
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Selling to businesses is very different from selling to
                individuals. We build B2B platforms with:
              </p>
              <ul className="space-y-3">
                {[
                  "Bulk pricing systems",
                  "Custom user roles",
                  "ERP & CRM integrations",
                  "Wholesale ordering workflows",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-blue-400 flex-shrink-0"
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-6 italic">
                Perfect for distributors, manufacturers, and suppliers across
                the UAE.
              </p>
            </div>

            {/* B2C */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingCart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                B2C Ecommerce Development
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                This is where user experience matters the most. We design B2C
                ecommerce platforms that focus on:
              </p>
              <ul className="space-y-3">
                {[
                  "Clean and modern UI",
                  "Fast checkout process",
                  "Mobile-first experience",
                  "Conversion optimization",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-400 flex-shrink-0"
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-6 italic">
                Whether you're selling fashion, electronics, or groceries — we
                build stores that turn visitors into buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Powerful Features of Our Ecommerce Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every ecommerce website we build includes features that directly
              impact your sales and growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-50"
              >
                <div className="w-12 h-12 bg-[#1A3C8B]/10 text-[#1A3C8B] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1A3C8B] group-hover:text-white transition-all duration-300">
                  <feature.icon size={24} />
                </div>
                <h4 className="font-bold text-[#1a2332] text-lg mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Industries We Serve in UAE
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every business is different, so we tailor our ecommerce solutions
              to fit each industry perfectly.
            </p>
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

      {/* Development Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Our Ecommerce Development Process
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We keep things simple, transparent, and result-focused.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Requirement Analysis",
                desc: "We understand your business, audience, and goals. We dig into what makes your customers buy and what's currently holding your store back.",
              },
              {
                title: "UI/UX Design",
                desc: "We design a user experience that drives conversions. Every element — from product pages to checkout — is crafted to feel intuitive and fast.",
              },
              {
                title: "Development",
                desc: "Our developers build a fast, scalable ecommerce platform using the right tech stack for your needs. Regular demos keep you in the loop.",
              },
              {
                title: "Testing & QA",
                desc: "We test everything — speed, performance, usability, payment flows, and mobile responsiveness. Nothing goes live without thorough QA.",
              },
              {
                title: "Launch",
                desc: "Your store goes live smoothly, without issues. We handle deployment, DNS, SSL, and all the technical details so you can focus on selling.",
              },
              {
                title: "Ongoing Support",
                desc: "We stay with you for updates, improvements, and scaling. Your store evolves as your business grows — and we're right there with you.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#1A3C8B]/5 transition-all duration-300 relative overflow-hidden group flex flex-col md:flex-row gap-6 md:gap-8 items-start"
              >
                <div className="absolute -right-6 -top-10 text-[140px] font-black text-gray-100/50 leading-none group-hover:scale-110 transition-transform duration-500 z-0 select-none pointer-events-none">
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

      {/* Results Section */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Results Speak for Themselves
            </h2>
            <p className="text-gray-400 text-lg">
              We focus on outcomes — not just design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-16">
            {[
              {
                stat: "150%",
                label: "Increased Sales",
                desc: "For a Dubai-based fashion brand",
              },
              {
                stat: "40%",
                label: "Reduced Bounce Rate",
                desc: "Through UX improvements",
              },
              {
                stat: "60%",
                label: "Improved Page Speed",
                desc: "Boosting conversions significantly",
              },
            ].map((result, i) => (
              <div
                key={i}
                className="text-center bg-white/5 border border-white/10 rounded-3xl p-10"
              >
                <p className="text-5xl md:text-6xl font-extrabold text-[#10B981] mb-3">
                  {result.stat}
                </p>
                <p className="text-white font-bold text-lg mb-2">
                  {result.label}
                </p>
                <p className="text-gray-400 text-sm">{result.desc}</p>
              </div>
            ))}
          </div>

          {/* Before vs After */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Before vs After
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {["Slow site", "Low engagement", "Random traffic"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-3"
                    >
                      <span className="text-red-400 font-bold">✗</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ),
                )}
              </div>
              <div className="space-y-4">
                {[
                  "Fast, optimized store",
                  "High conversion rate",
                  "Targeted buyers",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-3"
                  >
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Why Choose Us for Ecommerce Development
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              There are many ecommerce developers in Dubai, but few combine
              experience, technology, and local market insight the way we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Proven Experience",
                d: "With 7+ years in ecommerce development and 200+ successful projects, we know what it takes to create stores that sell.",
              },
              {
                t: "Deep UAE Market Expertise",
                d: "We understand Dubai, Abu Dhabi, and Sharjah shoppers — their behavior, payment preferences, and expectations.",
              },
              {
                t: "Technologically Advanced",
                d: "Shopify, Magento, WooCommerce, custom platforms — we leverage the latest tools and frameworks.",
              },
              {
                t: "ROI-Focused Design",
                d: "Every element is crafted to increase conversions and revenue. Your store is a profit-driving machine.",
              },
              {
                t: "Transparent Pricing",
                d: "No hidden costs. No vague estimates. You'll always know exactly what you're paying for.",
              },
              {
                t: "Dedicated Support",
                d: "We stay with you before, during, and after launch — providing updates, support, and growth strategies.",
              },
              {
                t: "Scalability First",
                d: "Your business evolves, and so should your store. We design platforms that grow with you.",
              },
              {
                t: "Mobile-First & Performance-Optimized",
                d: "90%+ UAE shoppers use mobile. Our stores are fast-loading, mobile-friendly, and SEO-ready.",
              },
              {
                t: "Security & Compliance",
                d: "Secure payment gateways, SSL, GDPR/PCI compliance — your customers shop safely and confidently.",
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

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We choose the right tools based on your business needs — ensuring
              your ecommerce platform is fast, scalable, and future-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1000px] mx-auto">
            {[
              { name: "Shopify", desc: "Quick Launch" },
              { name: "Magento", desc: "Enterprise Scale" },
              { name: "WooCommerce", desc: "WordPress Flex" },
              { name: "Laravel", desc: "Custom Backend" },
              { name: "React", desc: "Modern Frontend" },
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-14 h-14 bg-[#1A3C8B]/10 text-[#1A3C8B] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1A3C8B] group-hover:text-white transition-all duration-300">
                  <Code size={28} />
                </div>
                <h4 className="font-bold text-[#1a2332] text-lg">
                  {tech.name}
                </h4>
                <p className="text-gray-500 text-xs mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Ecommerce Development Cost
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Let's talk numbers — because this is what most people want to
              know.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {[
              {
                tier: "Basic Store",
                audience: "Ideal for startups",
                features: [
                  "Simple, clean design",
                  "Essential ecommerce features",
                  "Mobile responsive",
                  "Payment gateway integration",
                ],
                timeline: "2–4 weeks",
                highlight: false,
              },
              {
                tier: "Advanced Store",
                audience: "Growing businesses",
                features: [
                  "Custom UI/UX design",
                  "Advanced integrations",
                  "Performance optimization",
                  "Multi-language support",
                  "Analytics dashboard",
                ],
                timeline: "4–8 weeks",
                highlight: true,
              },
              {
                tier: "Custom Solution",
                audience: "Enterprise / Complex needs",
                features: [
                  "Fully tailored platform",
                  "Advanced features & scalability",
                  "ERP/CRM integrations",
                  "Multi-store / Multi-vendor",
                  "Priority support",
                ],
                timeline: "2–4 months",
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 md:p-10 border-2 relative overflow-hidden flex flex-col ${
                  plan.highlight
                    ? "bg-[#1a2332] text-white border-[#1A3C8B] shadow-2xl shadow-[#1A3C8B]/20 scale-[1.02]"
                    : "bg-white text-[#1a2332] border-gray-200 shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#10B981] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Popular
                  </span>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[#1a2332]"}`}
                >
                  {plan.tier}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}
                >
                  {plan.audience}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className={
                          plan.highlight ? "text-[#10B981]" : "text-[#1A3C8B]"
                        }
                      />
                      <span
                        className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`text-sm font-medium pt-4 border-t ${plan.highlight ? "border-white/10 text-gray-400" : "border-gray-100 text-gray-500"}`}
                >
                  Timeline: <strong>{plan.timeline}</strong>
                </div>
                <Link
                  to="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#10B981] text-white hover:bg-[#059669]"
                      : "bg-[#1A3C8B] text-white hover:bg-[#1A3C8B]/80"
                  }`}
                >
                  Get Quote <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            👉 Final cost depends on your requirements — we always provide a
            clear estimate upfront.
          </p>
        </div>
      </section>

      {/* UAE Market Insights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              UAE Ecommerce Market Insights
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto mb-12">
            {[
              { stat: "$9B+", label: "Market size by 2026" },
              { stat: "99%", label: "Internet penetration rate" },
              { stat: "75%+", label: "Purchases via mobile" },
              { stat: "#1", label: "Fastest-growing hub in MENA" },
            ].map((insight, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
              >
                <p className="text-4xl font-extrabold text-[#1A3C8B] mb-2">
                  {insight.stat}
                </p>
                <p className="text-gray-600 text-sm font-medium">
                  {insight.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The opportunity is huge — but competition is growing fast. You need
            the <strong>right ecommerce foundation</strong> to win.
          </p>
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
                  "What does it cost to develop an ecommerce store in the UAE?",
                answer:
                  "The cost varies depending on your business needs, store size, and the features you want. Basic store: Ideal for startups with simple design and essential features. Advanced store: Custom UI/UX, payment integrations, and performance optimization. Custom solution: Fully tailored platforms with complex features, scalability, and high performance. We provide transparent pricing upfront so there are no surprises.",
              },
              {
                question: "How long does it take to launch an ecommerce store?",
                answer:
                  "Timeframes depend on complexity: Basic store: 2–4 weeks. Advanced store: 4–8 weeks. Custom solution: 2–4 months. We follow a structured process — from planning and design to development and testing — to ensure your store is launched on time without compromising quality.",
              },
              {
                question: "Which ecommerce platform is best for my business?",
                answer:
                  "It depends on your goals: Shopify is quick to launch, easy to manage, perfect for small-to-medium stores. WooCommerce is flexible, cost-effective, ideal if you already use WordPress. Magento is robust and scalable, suitable for large stores with advanced features. We guide you through the selection process.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! Ecommerce is an ongoing journey. We offer regular updates and maintenance, technical support, optimization for speed, SEO, and conversions, plus growth support including feature upgrades and integrations. You can focus on your business while we keep your store running smoothly.",
              },
              {
                question:
                  "Can you handle multi-language or multi-currency stores for UAE customers?",
                answer:
                  "Absolutely. We build ecommerce platforms that support Arabic, English, and other languages, along with multiple currencies and payment gateways used across UAE. This ensures a seamless experience for all customers.",
              },
              {
                question: "Will my ecommerce store be mobile-friendly?",
                answer:
                  "Yes — over 90% of UAE shoppers use mobile devices. We design mobile-first stores that are fast, responsive, and easy to navigate on any screen, so your customers can shop anywhere, anytime.",
              },
              {
                question: "How do you ensure my store is secure?",
                answer:
                  "Security is a top priority. We implement SSL certificates for encrypted connections, secure payment gateways for safe transactions, and PCI/DSS compliance and best practices to protect customer data. Your customers can shop confidently.",
              },
              {
                question: "Can I scale my store as my business grows?",
                answer:
                  "Yes — all our ecommerce solutions are built to scale. You can add more products, handle increased traffic, integrate advanced features or third-party apps, and expand to new markets in UAE or internationally.",
              },
              {
                question: "Do you offer custom design and branding?",
                answer:
                  "Absolutely. We create unique, brand-aligned designs that reflect your identity and attract your target audience. Your store won't look like anyone else's — it'll be a true representation of your business.",
              },
              {
                question: "How do you improve conversions and sales?",
                answer:
                  "We focus on user experience, smooth navigation, fast checkout, and optimized product pages. Plus, our stores are SEO-friendly, mobile-optimized, and integrated with analytics tools to track performance and continuously improve sales.",
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
          <div className="relative bg-[#1a2332] rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl mx-auto max-w-[1400px]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1A3C8B]/40 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#10B981]/20 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYxYSIgLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white font-bold tracking-wider uppercase text-sm mb-6 border border-white/20 backdrop-blur-sm">
                Let's Build Together
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Ready to Build Your Ecommerce Business?
              </h2>
              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl">
                If you're serious about growing your online business in Dubai,
                Abu Dhabi, or Sharjah, now is the time. Let's build something
                that doesn't just look good — but actually sells.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#10B981] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#059669] transition-all duration-300 shadow-xl shadow-[#10B981]/30 transform hover:scale-105 w-full sm:w-auto"
                >
                  Get Free Consultation <ArrowRight size={24} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  Talk to an Expert
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 w-full max-w-2xl pt-10 border-t border-white/10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#10B981] mb-4">
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
                  <h5 className="text-white font-bold text-lg mb-1">
                    Email Us
                  </h5>
                  <a
                    href="mailto:info@alattastech.com"
                    className="text-gray-400 hover:text-[#10B981] transition-colors"
                  >
                    info@alattastech.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#10B981] mb-4">
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
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h5 className="text-white font-bold text-lg mb-1">
                    Visit Us
                  </h5>
                  <p className="text-gray-400">Dubai Internet City, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerceDevelopmentPage;
