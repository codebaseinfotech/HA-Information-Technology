import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Database, Cloud, Lock, Server, Smartphone, Monitor, ChevronRight } from 'lucide-react';

const solutions = [
    {
        id: 'medical-center',
        title: 'Medical Center Software',
        description: 'Comprehensive management capability for medical centers including patient records, appointments, and billing.',
        icon: Shield
    },
    {
        id: 'dental-center',
        title: 'Dental Center Software',
        description: 'Specialized tools for dental practices to manage charting, imaging, and patient scheduling efficiently.',
        icon: Monitor
    },
    {
        id: 'pharmacy',
        title: 'Pharmacy Software',
        description: 'Inventory management, prescription processing, and point-of-sale solutions for retail pharmacies.',
        icon: Database
    },
    {
        id: 'lab',
        title: 'Laboratory Software',
        description: 'Streamline lab operations with sample tracking, result reporting, and equipment integration.',
        icon: Server
    },
    {
        id: 'hr-payroll',
        title: 'HR & Payroll Software',
        description: 'Automate human resources processes and payroll calculations with compliance features.',
        icon: Lock
    },
    {
        id: 'accounting',
        title: 'Accounting & Inventory',
        description: 'Integrated financial management and stock control for businesses of all sizes.',
        icon: Cloud
    }
];

const SolutionsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] bg-[#1a2332] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 xl:px-12 h-full flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                        Our Solutions
                    </h1>

                    <div className="flex items-center text-gray-300 text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#10B981] font-medium">Solutions</span>
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 xl:px-12 py-16 md:py-20">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-[#1A3C8B] font-bold tracking-wider uppercase text-sm mb-2 block">Enterprise Solutions</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry-Specific Software Solutions</h2>
                    <p className="text-gray-600 text-lg">
                        We offer specialized software tailored to the unique needs of various industries, ensuring efficiency, compliance, and growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((item) => (
                        <div key={item.id} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-[#10B981] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="mb-6 inline-flex p-4 rounded-xl bg-blue-50 text-[#1A3C8B] group-hover:bg-[#1A3C8B] group-hover:text-white transition-colors duration-300">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1A3C8B] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-6">{item.description}</p>
                            <Link to={`/contact?interest=${item.id}`} className="flex items-center text-[#1A3C8B] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                                Request Demo <ChevronRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#1A3C8B] py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        We can build bespoke software tailored exactly to your unique business processes and requirements.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-[#1A3C8B] font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                        Talk to an Expert
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SolutionsPage;
