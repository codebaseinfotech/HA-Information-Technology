import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Shield,
  Code,
  Globe,
  ArrowRight,
  CheckCircle2,
  Settings,
  Zap,
  Clock,
  ChevronDown,
  Plus,
  Users,
  Server,
  Lock,
  Layers,
  Database,
  Cloud,
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

const MobileAppDevelopmentDubai = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description: (
        <>
          We build <strong>native Android apps</strong> with Kotlin that run
          smoothly, look great, and are fully optimised for the{" "}
          <strong>Google Play Store</strong>. Full Arabic/RTL support is
          included so your app feels right at home for UAE users.
        </>
      ),
      tech: ["Kotlin", "Jetpack Compose", "Google Play Store"],
    },
    {
      icon: Code,
      title: "iOS App Development",
      description: (
        <>
          From sleek designs to high-performing code, our{" "}
          <strong>iOS apps</strong> are built with Swift and SwiftUI. We handle
          everything from App Store submission to Apple guideline compliance and
          in-app purchase integration — perfect for the UAE market.
        </>
      ),
      tech: ["Swift", "SwiftUI", "Apple App Store"],
    },
    {
      icon: Layers,
      title: "Flutter App Development",
      description: (
        <>
          One code, two platforms. With Flutter, we create apps that look
          pixel-perfect on both Android and iOS — fast to build, easy to
          maintain, and ideal for{" "}
          <strong>startups launching quickly in Dubai or Abu Dhabi</strong>.
        </>
      ),
      tech: ["Flutter", "Dart", "Firebase"],
    },
    {
      icon: Settings,
      title: "React Native Development",
      description: (
        <>
          If you want{" "}
          <strong>cross-platform apps with near-native performance</strong>,
          React Native is the way to go. It’s cost-effective and perfect for
          businesses looking to scale across{" "}
          <strong>Dubai, Sharjah, and Abu Dhabi</strong> at the same time.
        </>
      ),
      tech: ["React Native", "JavaScript", "Expo"],
    },
    {
      icon: Server,
      title: "Enterprise Mobile Apps",
      description: (
        <>
          We create <strong>scalable enterprise apps</strong> that make work
          easier and keep your business running smoothly. From ERP and CRM
          integrations to role-based access and UAE data compliance, we’ve got
          it covered.
        </>
      ),
      tech: ["SAP", "Salesforce", "AWS", "Node.js"],
    },
    {
      icon: Zap,
      title: "Custom Mobile App Development",
      description: (
        <>
          Every business is different, so some apps need a{" "}
          <strong>custom approach</strong>. Whether it’s a real estate portal in
          Dubai, a logistics platform in Abu Dhabi, or an e-commerce app in
          Sharjah, we build apps tailored to your exact workflow.
        </>
      ),
      tech: ["Custom Logic", "API Integration", "UAE-Ready"],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Top Ranked Mobile App Development in UAE | Hamed Alattas Technology Dubai"
        description="Build fast, secure, and user-friendly Android & iOS apps with Hamed Alattas Technology. Trusted by 1500+ clients in Dubai, Abu Dhabi & Sharjah. Get your free strategy session!"
        keywords="Mobile App Development UAE, Android App Development Dubai, iOS App Dubai, Custom Mobile Apps, Flutter App UAE"
        url="/services/mobile-app"
        schemas={[
          getServiceSchema({
            serviceType: "Mobile App Development",
            description:
              "We build fast, secure, and user-friendly mobile apps for Android, iOS, and cross-platform solutions. Trusted by 1500+ clients across Dubai, Abu Dhabi & Sharjah.",
            minPrice: "15000",
            maxPrice: "50000",
          }),
          getFAQSchema([
            {
              question: "How much does mobile app development cost in Dubai?",
              answer:
                "A simple app usually starts around $15,000, while business-level apps can range between $15,000–$50,000. For more advanced or enterprise platforms, the cost can go beyond $50,000+ depending on features, integrations, and complexity.",
            },
            {
              question: "How long does it take to build a mobile app?",
              answer:
                "MVP apps take around 6–10 weeks, while fully developed business or enterprise apps may take 12–20 weeks or more. We share a clear timeline before starting.",
            },
            {
              question: "Android or iOS — which is better for UAE?",
              answer:
                "iOS holds a slightly higher user share (55–60%) in the UAE. However, most businesses launch on both platforms using cross-platform solutions like Flutter or React Native to reach a wider audience.",
            },
            {
              question: "Do startups in Dubai really need a mobile app?",
              answer:
                "Yes — absolutely. With smartphone usage close to 99% in the UAE, apps drive up to 3× more engagement and around 40% better customer retention compared to websites alone.",
            },
            {
              question: "Can you build Arabic apps with RTL support?",
              answer:
                "Yes, we build fully bilingual apps in Arabic and English, including proper RTL (Right-to-Left) layout support ensuring a natural feel for local audiences.",
            },
            {
              question: "Which UAE payment gateways can be integrated?",
              answer:
                "We integrate all major UAE payment solutions including Telr, PayTabs, Checkout.com, Tabby, Tamara, Network International, Noon Pay, Apple Pay, and Google Pay.",
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
              Custom Mobile App Development in Dubai
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-2 max-w-3xl">
              Transform Your Business with Fast, Secure, and Intuitive Apps.
            </p>
            <p className="text-base text-gray-300 font-semibold leading-relaxed mb-4 max-w-3xl">
              Bring your brand to life on every smartphone. We design and
              develop iOS and Android apps that digitalize operations, engage
              real users, and drive measurable growth. Over 07 years,
              <strong> Hamed Alattas Technology a </strong>{" "}
              <Link
                to="https://alattastech.com"
                className="hover:text-[#10B981]/80 transition-colors text-[#10B981]"
              >
                leading mobile app development Company in UAE
              </Link>{" "}
              has delivered 200+ successful apps for startups, enterprises, and
              leading UAE brands — turning ideas into powerful mobile
              experiences.
            </p>
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
                Mobile App Development
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#1A3C8B]/30"
              >
                Get Your Free App Strategy Session <ArrowRight size={20} />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a2332] border border-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-white/10"
              >
                View Our Portfolio
              </Link>
            </div>
            <p className="text-sm text-[#10B981] font-bold mt-6 tracking-wide uppercase">
              Build smarter. Launch faster. Grow stronger.
            </p>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

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
              Top-Ranked Mobile App <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3C8B] to-[#10B981]">
                Development Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Whether you're testing a new idea or running a full-scale
              enterprise, we create mobile apps that work for real people in the
              UAE — designed with your users, local culture, and regulations in
              mind.
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

      {/* Intro transforming business */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
              Transform and Grow Your Business with Innovative Mobile App
              Development
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Developing the right mobile app can completely transform the way
              your business grows. Our mobile app development services are
              designed to help you move your business to the next level by
              creating smart, user-focused applications that connect you
              directly with your customers. A well-built mobile app opens the
              door to new opportunities, improves customer engagement, and
              strengthens your brand in a highly competitive digital market.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By combining innovative technology with practical business
              solutions, we help turn your ideas into powerful mobile platforms
              that support long-term growth, scalability, and continuous
              innovation—placing your business in a stronger position for future
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/40 text-blue-300 font-bold tracking-wider uppercase text-sm mb-4 border border-blue-500/20">
                Tech Stack
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Our Mobile App Technology Stack
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We choose technologies based on your project requirements — not
                trends. Our stack is enterprise-proven and UAE-market tested.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Flutter", desc: "Cross-Platform UI" },
                  { title: "React Native", desc: "Cross-Platform Logic" },
                  { title: "Swift / SwiftUI", desc: "Native iOS" },
                  { title: "Kotlin", desc: "Native Android" },
                  { title: "Node.js", desc: "Backend API" },
                  { title: "Firebase", desc: "Real-time Database" },
                  { title: "AWS", desc: "Cloud Infrastructure" },
                  { title: "PostgreSQL", desc: "Relational Database" },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <strong className="text-white text-lg">{tech.title}</strong>
                    <span className="text-sm text-gray-400 mt-1">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Panel */}
            <div className="bg-[#121824] p-8 md:p-10 rounded-2xl border border-white/5">
              <Lock className="text-red-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-white">
                Mobile App Security for UAE Fintech & E-commerce
              </h3>
              <p className="text-red-400 font-medium uppercase tracking-wider text-sm mb-6">
                Security-First Approach
              </p>
              <p className="text-gray-400 mb-8 text-base leading-relaxed">
                When it comes to fintech and e-commerce apps, security isn’t
                something you add later — it has to be built in from the start.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    t: "End-to-End Encryption",
                    d: "AES-256 encryption securing all data transferred or stored.",
                  },
                  {
                    t: "Biometric Authentication",
                    d: "Face ID, Touch ID, and UAE Pass integration.",
                  },
                  {
                    t: "OWASP Compliance",
                    d: "Top 10 mobile guidelines and thorough vulnerability check.",
                  },
                  {
                    t: "UAE PDPL & GDPR",
                    d: "Strict alignment with digital privacy laws.",
                  },
                  {
                    t: "PCI-DSS Processing",
                    d: "Secure, encrypted, compliant payment gateways.",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                  >
                    <div className="min-w-6 mt-1 text-red-400">
                      <Shield size={18} />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <strong className="text-white block mb-1">
                        {item.t}
                      </strong>
                      {item.d}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Dev Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1A3C8B] font-bold uppercase tracking-wider text-sm block mb-3">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Our Simple 5-Step Mobile App Development Process
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the years, we’ve refined a clear and practical process for
              building mobile apps that actually work for businesses. Each step
              keeps you involved, informed, and confident about how your app is
              shaping up.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Discovery & Planning",
                desc: "Everything starts with a conversation. We learn about your business, your goals, and what you want the app to achieve. Our team reviews your requirements, looks at what competitors are doing, and suggests the right technologies to build a reliable and scalable app for your market.",
              },
              {
                title: "UI/UX Design",
                desc: "Once the plan is clear, our designers start shaping the user experience. We create wireframes and visual layouts so you can see how the app will look and feel before development begins. The focus is always on simplicity, smooth navigation, and a design that reflects your brand.",
              },
              {
                title: "App Development",
                desc: "After the design is approved, our developers bring the app to life. We build the app step-by-step, sharing regular updates and demos so you can see the progress. This approach allows us to improve things along the way and make sure everything stays aligned with your expectations.",
              },
              {
                title: "Testing & Checks",
                desc: "Before launch, the app goes through detailed testing. We check performance, security, and usability to make sure everything works smoothly on different devices. The goal is simple—your users should enjoy a fast, stable, and reliable experience.",
              },
              {
                title: "Launch & Support",
                desc: "Once everything is ready, we help publish your app on the App Store and Google Play. But our work doesn’t stop there. We continue to support your app with updates, improvements, and new features so it can keep growing along with your business.",
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
              Why Choose Hamed Alattas Technology in UAE?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We’ve spent the last <strong>7+ years</strong> helping brands turn
              ideas into real, working mobile apps. With a team of{" "}
              <strong>35+ experienced experts</strong>,{" "}
              <strong>1500+ happy clients</strong>, and{" "}
              <strong>2 branches in the UAE</strong>, we understand what
              businesses actually need — not just technically, but commercially
              too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Proven Track Record",
                d: "We’ve worked with a wide range of businesses, from startups to established brands. Our focus has always been the same — build apps that perform well, handle growth, and don’t break under pressure.",
              },
              {
                t: "Strong Expertise in Android, iOS & Beyond",
                d: "Whether it’s Android, iOS, or cross-platform, we handle everything from start to finish. You don’t need multiple teams — we take care of the full process under one roof.",
              },
              {
                t: "Business-Focused Approach",
                d: "We don’t just build apps that look nice. We think about your users, your goals, and how the app will actually help your business grow and generate results.",
              },
              {
                t: "UI/UX That Fits the UAE Market",
                d: "AUser behavior matters. What works in one country may not work here. We design apps that feel natural for UAE users — clean, fast, and easy to use.",
              },
              {
                t: "Transparent Pricing & Clear Process",
                d: "No confusing quotes or hidden charges. We explain everything upfront — cost, timeline, and process — so you always know what’s happening.",
              },
              {
                t: "Smooth Communication & Project Handling",
                d: "You’ll always stay in the loop. Our project managers keep things simple, give regular updates, and make sure everything moves without confusion.",
              },
              {
                t: "Strong Security & Data Protection",
                d: "We build apps with proper security in place, so your data — and your users’ data — stays safe at every level.",
              },
              {
                t: "Ongoing Support & Scalability",
                d: "Launching the app is just the beginning. We stay with you for updates, improvements, and scaling as your business grows.",
              },
              {
                t: "Fast & High-Performance Apps",
                d: "Nobody likes slow apps. We make sure your app runs smoothly, loads fast, and gives users a seamless experience every time.",
              },
              {
                t: "Innovation That Keeps You Ahead",
                d: "We don’t follow trends blindly — we use the right ideas and technologies to help your app stand out and stay competitive in the market.",
                e: "At the end of the day, brands choose Hamed Alattas Technology because we keep things real — clear communication, solid work, and apps that actually make a difference.",
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
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    {reason.e}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Testimonials */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 max-w-[1400px] mx-auto">
            {/* Team */}
            <div>
              <h3 className="text-3xl font-bold text-[#1a2332] mb-6">
                Meet Our Mobile Development Team
              </h3>
              <p className="text-gray-600 mb-10">
                Our Dubai-based engineers have shipped applications used by{" "}
                <strong>tens of thousands of UAE residents</strong>.
              </p>
              <div className="space-y-6">
                {[
                  {
                    role: "Founder & Lead Architect",
                    exp: (
                      <>
                        15 years in UAE tech. Former senior engineer at a
                        leading <strong>Dubai enterprise solutions firm</strong>
                        . Expert in native{" "}
                        <strong>iOS & Android architecture</strong>.
                      </>
                    ),
                  },
                  {
                    role: "Head of Flutter Development",
                    exp: (
                      <>
                        8 years Flutter & Dart expertise. Delivered{" "}
                        <strong>40+ cross-platform apps</strong> for UAE
                        startups. Flutter Certified.
                      </>
                    ),
                  },
                  {
                    role: "iOS & Swift Lead",
                    exp: (
                      <>
                        Apple Developer Program member since 2012. Specializes
                        in <strong>fintech and healthcare iOS</strong>. Apple
                        Certified.
                      </>
                    ),
                  },
                  {
                    role: "Senior UI/UX Designer",
                    exp: (
                      <>
                        UI/UX specialist focused on{" "}
                        <strong>
                          Arabic-first interfaces and UAE consumer
                          behaviour{" "}
                        </strong>
                        . UXAI Certified
                      </>
                    ),
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#10B981]/10 text-[#10B981] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1a2332] mb-1">
                        {member.role}
                      </h4>
                      <p className="text-sm text-gray-600">{member.exp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-3xl font-bold text-[#1a2332] mb-6">
                What Our UAE Clients Say
              </h3>
              <div className="space-y-6 mt-10">
                {[
                  {
                    quote:
                      "Hamed Alattas Technology delivered our Dubai taxi app in under 8 weeks — on budget and with zero critical bugs at launch.",
                    author: "CEO, Al Noor Transport — Dubai",
                  },
                  {
                    quote:
                      "As a DIFC-regulated fintech startup, we needed a development partner who understood compliance requirements.",
                    author: "Founder, PayLoop — Abu Dhabi",
                  },
                  {
                    quote:
                      "They understood Sharjah's local market and recommended React Native, saving us AED 80,000 in development costs.",
                    author: "Operations Director, FreshCart — Sharjah",
                  },
                ].map((test, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                  >
                    <div className="text-yellow-400 font-bold tracking-widest text-xl mb-4">
                      ★★★★★
                    </div>
                    <p className="text-gray-700 italic mb-6 leading-relaxed">
                      "{test.quote}"
                    </p>
                    <p className="text-[#1A3C8B] font-bold text-sm uppercase tracking-wide">
                      {test.author}
                    </p>
                    <div className="absolute top-8 right-8 text-gray-100">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
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
                question: "How much does mobile app development cost in Dubai?",
                answer:
                  "The cost really depends on what you're building. A simple app usually starts around $15,000, while business-level apps can range between $15,000–$50,000. For more advanced or enterprise platforms, the cost can go beyond $50,000+ depending on features, integrations, and complexity.",
              },
              {
                question: "How long does it take to build a mobile app?",
                answer:
                  "There's no one-size answer here — it depends on the scope. A basic MVP app can take around 6–10 weeks, while a fully developed business or enterprise app may take 12–20 weeks or more. We always share a clear timeline before starting, so you know exactly what to expect.",
              },
              {
                question: "Android or iOS — which is better for UAE?",
                answer:
                  "In the UAE, iOS has a slightly higher user share (around 55–60%). But in most cases, businesses prefer launching on both Android and iOS using cross-platform solutions like Flutter or React Native to reach a wider audience.",
              },
              {
                question: "Do startups in Dubai really need a mobile app?",
                answer:
                  "Yes — absolutely. With smartphone usage close to 99% in the UAE, having a mobile app can significantly improve customer engagement. In many cases, apps drive up to 3× more engagement and around 40% better customer retention compared to websites alone.",
              },
              {
                question: "Can you build Arabic apps with RTL support?",
                answer:
                  "Yes, we build fully bilingual apps in Arabic and English, including proper RTL (Right-to-Left) layout support. This ensures your app feels natural and user-friendly for local audiences.",
              },
              {
                question: "Which UAE payment gateways can be integrated?",
                answer:
                  "We integrate all major UAE payment solutions, including Telr, PayTabs, Checkout.com, Tabby, Tamara, Network International, Noon Pay, along with Apple Pay and Google Pay for smooth and secure transactions.",
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
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="relative bg-[#1a2332] rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl mx-auto max-w-[1400px]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1A3C8B]/40 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#10B981]/20 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYxYSIgLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white font-bold tracking-wider uppercase text-sm mb-6 border border-white/20 backdrop-blur-sm">
                Let's Work Together
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Ready to Build Your App in Dubai?
              </h2>
              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl">
                Join 200+ UAE businesses who trusted Hamed Alattas Technology. Your free strategy session includes a project estimate, technology recommendation, and timeline.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#10B981] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#059669] transition-all duration-300 shadow-xl shadow-[#10B981]/30 transform hover:scale-105 w-full sm:w-auto"
                >
                  Get Free App Strategy Session <ArrowRight size={24} />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  View Our Portfolio
                </Link>
              </div>

              {/* Contact Info Footer */}
              <div className="grid sm:grid-cols-2 gap-8 w-full max-w-2xl pt-10 border-t border-white/10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#10B981] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <h5 className="text-white font-bold text-lg mb-1">Email Us</h5>
                  <a
                    href="mailto:info@alattastech.com"
                    className="text-gray-400 hover:text-[#10B981] transition-colors"
                  >
                    info@alattastech.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#10B981] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <h5 className="text-white font-bold text-lg mb-1">Visit Us</h5>
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

export default MobileAppDevelopmentDubai;
