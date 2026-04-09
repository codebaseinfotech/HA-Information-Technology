import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Cloud,
  Headset,
  MessageSquare,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Plus,
  ChevronDown,
  Building2,
  Stethoscope,
  Plane,
  Truck,
  Users,
  AlertTriangle,
  Server,
  TrendingDown,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
  PhoneCall,
  Eye,
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
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-[#1A3C8B] text-white" : "bg-[#1A3C8B]/10 text-[#1A3C8B]"}`}
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

const BusinessCommunicationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Server,
      title: "IP PABX System Installation",
      desc: "For businesses that prefer a dedicated in-house setup, we design and install reliable IP PABX systems.",
      bullets: [
        "Office phone system setup with extensions",
        "Internal call routing and department connections",
        "Hardware configuration and testing",
        "Clean and organized system structure",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud PABX Solutions",
      desc: "If you want flexibility without maintaining hardware, cloud PABX is a practical choice.",
      bullets: [
        "No heavy infrastructure required",
        "Access your system from anywhere",
        "Easy to scale as your team grows",
        "Suitable for remote and hybrid teams",
      ],
    },
    {
      icon: Phone,
      title: "VoIP Phone Systems",
      desc: "Handle calls over the internet, reducing traditional telecom costs while improving flexibility.",
      bullets: [
        "Local and international calling setup",
        "Smart call routing",
        "Clear voice quality",
        "Integration with business tools",
      ],
    },
    {
      icon: MessageSquare,
      title: "Unified Communication Systems",
      desc: "Communication today goes beyond voice calls. We help you bring everything together.",
      bullets: [
        "Voice, messaging, and video in one system",
        "CRM integration for better customer tracking",
        "Mobile access for teams on the move",
      ],
    },
    {
      icon: Headset,
      title: "Call Center Solutions",
      desc: "For businesses that rely heavily on customer interaction, we build structured call handling systems.",
      bullets: [
        "Interactive Voice Response (IVR)",
        "Call recording and monitoring",
        "Auto-dialing features",
        "Queue management",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Ongoing Support",
      desc: "A communication system should not stop working when you need it most.",
      bullets: [
        "Regular system checks",
        "Quick troubleshooting",
        "Software updates and improvements",
        "AMC support plans",
      ],
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Real Estate Companies",
      desc: "Manage high volumes of inquiries, track leads, and ensure no potential client call goes unanswered.",
    },
    {
      icon: Plane,
      title: "Travel Agencies",
      desc: "Handle booking calls, customer inquiries, and international communication without delays.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Clinics",
      desc: "Organize patient calls, appointment scheduling, and internal communication between staff.",
    },
    {
      icon: Truck,
      title: "Logistics & Transport",
      desc: "Coordinate drivers, operations, and office teams in real time.",
    },
    {
      icon: Users,
      title: "Corporate Offices",
      desc: "Improve internal communication and streamline department coordination.",
    },
  ];

  const processSteps = [
    {
      title: "Understanding Your Needs",
      desc: "We begin by learning how your team works, how many users you have, and what challenges you face.",
    },
    {
      title: "Site Review & Planning",
      desc: "We assess your office layout or remote setup and design the most practical system.",
    },
    {
      title: "Installation & Configuration",
      desc: "Our team sets up the system, configures extensions, and ensures everything connects properly.",
    },
    {
      title: "Testing & Optimization",
      desc: "We test call quality, routing, and system performance before final delivery.",
    },
    {
      title: "Team Guidance",
      desc: "We guide your team on how to use the system comfortably.",
    },
    {
      title: "Ongoing Support",
      desc: "We stay available for updates, support, and future upgrades.",
    },
  ];

  const whyChooseUs = [
    {
      title: "7+ Years of Proven Experience",
      desc: "With over seven years serving UAE businesses, our solutions are built on real-world experience, not just theory.",
    },
    {
      title: "Highly Experienced Technical Team",
      desc: "Our engineers bring deep expertise in IP PABX, VoIP, and unified systems handled with precision.",
    },
    {
      title: "Complete End-to-End Support",
      desc: "From consultation to setup, training, and maintenance, we provide a full UAE-based support ecosystem.",
    },
    {
      title: "Cost-Efficient & Scalable Solutions",
      desc: "We design systems that reduce telecom costs, scale with your growth, and integrate cleanly.",
    },
    {
      title: "Reliability You Can Trust",
      desc: "Downtime is costly. We focus on stable, high-performance systems that keep your calls flowing smoothly 24/7.",
    },
    {
      title: "Simplified, User-Friendly Systems",
      desc: "Our systems are intuitive, easy to manage, and hassle-free, so your team can focus on business.",
    },
    {
      title: "Proven Results & Business Impact",
      desc: "Reduced missed calls, faster response times, and better internal coordination you can see and measure.",
    },
  ];

  const locations = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Business Bay",
    "Deira",
    "Al Qusais",
  ];

  const faqs = [
    {
      question: "What is a PABX system?",
      answer:
        "A PABX system is a private phone network used within a business to manage internal and external calls efficiently.",
    },
    {
      question: "What is the difference between PABX and VoIP?",
      answer:
        "PABX is the system itself, while VoIP is the technology that allows calls over the internet. Modern PABX systems often use VoIP.",
    },
    {
      question: "Is cloud PABX better than traditional systems?",
      answer:
        "Cloud systems are more flexible and easier to scale, while traditional setups give more control. The right choice depends on your business needs.",
    },
    {
      question: "Can my team use the system remotely?",
      answer:
        "Yes, with VoIP and cloud systems, your team can stay connected from anywhere.",
    },
    {
      question: "How much does a system cost in the UAE?",
      answer:
        "Costs vary based on users, features, and setup. We provide tailored quotes after understanding your requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="PABX & VoIP Business Communication Systems in UAE | Hamed Alattas Technology"
        description="Simplify and strengthen your business communication with Hamed Alattas Technology. IP PABX, VoIP, and unified systems designed for Dubai, Abu Dhabi, and across UAE. Reduce costs and improve response time."
        keywords="PABX Systems UAE, VoIP Dubai, Cloud PABX Abu Dhabi, Business Communication Systems UAE, IP PABX Setup"
        url="/services/pabx"
        schemas={[
          getServiceSchema({
            serviceType:
              "Business Communication System, IP PABX, VoIP, Cloud PABX, Unified Communication",
            description:
              "Hamed Alattas Technology provides IP PABX, VoIP, cloud PABX, and unified communication systems across the UAE. We offer installation, configuration, CRM integration, and ongoing support.",
            minPrice: "1000",
            maxPrice: "30000",
          }),
          getFAQSchema(faqs),
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              PABX & Business Communication Systems in UAE
            </h1>
            <p className="text-xl md:text-2xl text-[#10B981] font-bold leading-relaxed mb-4 max-w-3xl">
              Running a business in the UAE means staying responsive, connected,
              and efficient every day.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
              Yet many companies still deal with scattered communication —
              missed calls, slow responses, and rising telecom costs that
              quietly affect performance. At Hamed Alattas Technology, we make business communication simple and reliable.
              Our IP PABX and VoIP systems are built around how your team
              actually works.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Reduce communication costs",
                "Stay connected from anywhere",
                "Never miss important calls",
              ].map((stat, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2"
                >
                  <CheckCircle2 size={16} className="text-[#10B981]" /> {stat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center text-gray-300 text-sm md:text-base mb-8">
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
                PABX & VoIP
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/40"
              >
                Request a Free Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1A3C8B]/40 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
              Is Your Communication System Holding Your Business Back?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Many businesses don't realize how much they lose due to poor
              communication until it starts affecting daily operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
            <div className="bg-white border border-red-100 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-red-500 w-8 h-8" />
                <h3 className="text-xl font-bold text-red-900">
                  You might be dealing with:
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Calls going unanswered during busy hours",
                  "High monthly telecom bills without clear control",
                  "Teams struggling to coordinate across departments",
                  "Difficulty managing communication across multiple locations",
                  "No visibility into call performance or customer interactions",
                ].map((risk, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg mt-0.5">
                      ✗
                    </span>
                    <span className="text-gray-600">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a2332] text-white rounded-3xl p-10 shadow-lg relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">
                These small issues add up quickly.
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6 relative z-10">
                Missed calls can mean missed opportunities. Slow internal
                communication delays decisions. And without proper tracking, it
                becomes difficult to improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Way Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 rounded-bl-[150px] pointer-events-none"></div>
        <div className="absolute -left-32 top-1/2 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold tracking-wider uppercase text-sm mb-4 border border-emerald-100">
                A Smarter Way
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">
                A Smarter Way to Manage Business Communication
              </h2>
              <p className="text-xl text-[#1A3C8B] font-bold leading-relaxed mb-6">
                Fragmented communication silently drains business performance — missed calls, delayed responses, and lost customer opportunities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our IP PABX and VoIP communication systems are designed to bring everything together into one reliable, cost-efficient platform. We supply, configure, and maintain business phone systems tailored to your team size, office structure, and daily operations. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you operate from a single office or manage multiple branches across the UAE, our solutions ensure seamless internal and external communication. From cloud-based VoIP systems to advanced call routing and CRM integration, we help businesses reduce telecom costs, improve response time, and stay connected from anywhere.
              </p>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#1A3C8B] to-blue-800 rounded-2xl p-6 shadow-lg border-l-4 border-[#10B981]"
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    <Zap className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Our Goal is Simple</h4>
                    <p className="text-blue-100 font-medium leading-relaxed">
                      Help you reduce costs, improve response time, and stay connected without complications.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative w-full font-sans"
            >
              <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-[100px] z-0"></div>
              
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-xl z-10 flex flex-col items-center text-center lg:mt-12 h-full justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-[#1A3C8B] rounded-2xl flex items-center justify-center mb-4">
                  <Cloud size={28} className="md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 md:text-lg">Cloud PBX</h4>
                <p className="text-xs md:text-sm text-gray-500">Host anywhere, connect constantly.</p>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-xl z-10 flex flex-col items-center text-center h-full justify-center lg:-mt-12">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-50 text-[#10B981] rounded-2xl flex items-center justify-center mb-4">
                  <PhoneCall size={28} className="md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 md:text-lg">VoIP Systems</h4>
                <p className="text-xs md:text-sm text-gray-500">Crystal clear voice over internet.</p>
              </motion.div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }} className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-xl z-10 flex flex-col items-center text-center h-full justify-center lg:mt-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare size={28} className="md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 md:text-lg">Unified Comms</h4>
                <p className="text-xs md:text-sm text-gray-500">Voice, chat, video in one place.</p>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }} className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-xl z-10 flex flex-col items-center text-center h-full justify-center lg:-mt-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <Headset size={28} className="md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 md:text-lg">Call Routing</h4>
                <p className="text-xs md:text-sm text-gray-500">Never miss a customer queue.</p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our PABX & VoIP Communication Services
            </h2>
            <p className="text-gray-400 text-lg">
              We don't offer one-size-fits-all systems. Every setup is planned
              based on your business size, structure, and workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl flex flex-col group hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-medium h-20">
                  {service.desc}
                </p>
                <ul className="space-y-3 flex-grow border-t border-white/10 pt-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#10B981] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-300 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Designed for UAE Businesses Across Industries
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every industry communicates differently. We tailor systems to
              match how your business operates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1A3C8B]/10 text-[#1A3C8B] rounded-xl flex items-center justify-center mb-4">
                  <ind.icon size={24} />
                </div>
                <h4 className="font-bold text-[#1a2332] text-xl mb-3">
                  {ind.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 xl:px-12 relative z-10 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold tracking-wider uppercase text-sm mb-4 border border-emerald-100">
                The Outcomes
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">
                What You Gain from a Proper Communication System
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                When your communication system works the way it should, the
                difference becomes clear quickly.
              </p>
              <p className="text-lg text-[#1A3C8B] font-medium italic">
                These are not just technical improvements — they directly affect
                how your business performs every day.
              </p>
            </div>
            <div className="lg:w-1/2 grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Lower monthly communication costs",
                  icon: TrendingDown,
                },
                { label: "Faster response to customer inquiries", icon: Clock },
                { label: "Better coordination between teams", icon: Users },
                { label: "Fewer missed opportunities", icon: PhoneCall },
                { label: "Clear visibility into call performance", icon: Eye },
                { label: "Flexibility to work from anywhere", icon: MapPin },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-center gap-4 hover:border-blue-200 transition-colors"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex shrink-0 items-center justify-center text-[#1A3C8B] shadow-sm">
                    <benefit.icon size={20} />
                  </div>
                  <span className="font-bold text-gray-800 text-sm leading-snug">
                    {benefit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We Set Up Your System
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We follow a simple and structured process to make sure everything
              fits your business perfectly.
            </p>
          </div>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-600 before:to-transparent">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 bg-[#1A3C8B] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-white text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Example */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1000px]">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 rounded-[2rem] p-10 md:p-14 relative overflow-hidden shadow-sm">
            <div className="absolute -top-10 -right-10 text-[180px] text-blue-100 opacity-50 z-0">
              <MessageSquare />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white font-bold tracking-wider uppercase text-sm mb-6 shadow-sm">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                A Practical Example: Mid-Sized Business in Dubai
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A mid-sized business in Dubai approached us with high
                communication costs and frequent missed calls. Their team worked
                across two locations, and coordination was difficult. We
                replaced their traditional setup with a cloud-based VoIP system.
              </p>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
                <h4 className="font-bold text-[#10B981] mb-4">
                  Within a few weeks:
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Call costs dropped noticeably",
                    "Internal communication became faster",
                    "Missed calls reduced significantly",
                    "Management gained better visibility into call activity",
                  ].map((res, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 font-medium text-gray-800"
                    >
                      <CheckCircle2
                        className="text-[#10B981] flex-shrink-0"
                        size={20}
                      />{" "}
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xl text-[#1A3C8B] font-bold italic">
                "This is the kind of improvement most businesses experience when
                the system fits their actual needs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Options */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A3C8B] opacity-50 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible Options That Fit Your Business
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Every company is different, so we offer flexible solutions based on
            your size and requirements. We help you choose the right setup
            without overcomplicating things.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
              <h4 className="font-bold text-xl mb-2">Small Office</h4>
              <p className="text-blue-100">Setups optimized for startups</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
              <h4 className="font-bold text-xl mb-2">Scalable Systems</h4>
              <p className="text-blue-100">Built for growing businesses</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
              <h4 className="font-bold text-xl mb-2">Advanced Solutions</h4>
              <p className="text-blue-100">For multi-branch operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-[1400px]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Why Choose Hamed Alattas Technology for Your Business Communication Needs?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              When it comes to business communication in the UAE, you need more
              than just a phone system — you need a trusted partner who ensures
              your team stays connected, your customers are always heard, and
              your communication costs are controlled.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#1A3C8B] text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{reason.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served & Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#1a2332] mb-6">
            Serving Businesses Across the UAE
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg text-sm"
              >
                {loc}
              </span>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1A3C8B] to-blue-800 rounded-3xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Upgrade Your Business Communication
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              If your current system feels difficult to manage or no longer
              supports your growth, it may be time for a better approach. Let's
              build a communication system that works the way your business
              does.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-[#10B981] hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
              >
                Request a Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCommunicationPage;
