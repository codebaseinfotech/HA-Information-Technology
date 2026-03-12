import { Code, Layout, ShoppingCart, Server, Smartphone, Globe, Shield, Phone, Search, MessageSquare, Cloud, Database, Settings } from 'lucide-react';

export const services = [
    {
        id: 'software-development',
        title: 'Software Development',
        icon: Code,
        shortDescription: 'Custom software solutions tailored to your unique business needs.',
        content: {
            introduction: "",
            approach: []
        }
    },
    {
        id: 'website-development',
        title: 'Website Designing & Development',
        icon: Layout,
        shortDescription: 'Stunning, responsive websites that drive engagement and growth.',
        content: {
            approach: []
        }
    },
    {
        id: 'ecommerce',
        title: 'B2B, B2C & E-Commerce',
        icon: ShoppingCart,
        shortDescription: 'Robust e-commerce platforms to scale your online business.',
        content: {
            // Keep introduction for hero or meta description purposes if needed, but main content will use sections
            introduction: "Scalable e-commerce solutions for B2B and B2C businesses.",
            sections: [
                {
                    type: 'text_header',
                    title: 'Our Comprehensive e-Commerce Solutions',
                    content: `HA Information Technology, we understand that building a successful e-commerce platform involves more than just technical expertise. That's why we offer a complete e-commerce package tailored to meet your business needs, ensuring a seamless and efficient online experience for your customers. Whether you are operating in a B2B or B2C market, we have the solutions to cater to your specific requirements.`
                },
                {
                    type: 'check_list',
                    title: 'Our Typical e-Commerce Package Includes',
                    items: [
                        {
                            title: 'Specification',
                            description: 'Detailed analysis and planning to define your e-commerce needs and objectives for both B2B and B2C platforms.'
                        },
                        {
                            title: 'Complete Web Site Design',
                            description: 'Custom and user-friendly design to enhance user experience and engagement across both business models.'
                        },
                        {
                            title: 'Product Database',
                            description: 'Robust and scalable database to manage your product inventory efficiently.'
                        },
                        {
                            title: "Administrator's Section",
                            description: 'Comprehensive backend for managing your store.',
                            features: [
                                'Access, order, and product management',
                                'Discount algorithms and special offers',
                                'File upload capabilities',
                                'Shipping and sales tax settings'
                            ]
                        },
                        {
                            title: 'SSL Integration and Credit Card Processing',
                            description: 'Secure and reliable payment processing to protect your customers\' data.'
                        }
                    ]
                },
                {
                    type: 'text',
                    title: 'Simplifying the Jargon',
                    content: `Don't be overwhelmed by the technical jargon such as IIS, Apache, ASP, SQL, Java, CGI, PHP, Perl, VB, SSL, HTTPS, and WAP. Our team is here to simplify the process, making your e-commerce journey easy, flexible, and affordable. Whether it's a complex online system or a simple programming script to automate a small process, we have the expertise to assist you at every step.`
                },
                {
                    type: 'text',
                    title: 'Embrace the Mobile Era with M-commerce',
                    content: `For those who are always on the go, we offer a mobile module, or M-commerce. Our wireless applications work seamlessly on mobile phones and handheld computers, making information accessible for you and your customers anywhere, anytime. Enhance your business reach with our mobile solutions and stay connected on the move.`
                },
                {
                    type: 'text',
                    title: 'Get Started Today',
                    content: `Ready to take your e-commerce platform to the next level? Contact us now for your free initial consultation or a detailed proposal for your project. Let Vision Technologies be your partner in creating an effective and successful e-commerce solution that meets your business goals, whether in the B2B or B2C space.`
                }
            ]
        }
    },
    {
        id: 'web-hosting',
        title: 'Windows & Linux Web Hosting',
        icon: Server,
        shortDescription: 'Reliable and secure hosting solutions for your applications.',
        content: {
            introduction: "Secure and high-performance hosting on Windows and Linux platforms.",
            approach: []
        }
    },
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        icon: Smartphone,
        shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
        content: {
            introduction: "High-quality mobile application development for Android and iOS.",
            approach: []
        }
    },
    {
        id: 'domain-registration',
        title: 'Domain Registrations',
        icon: Globe,
        shortDescription: 'Secure your brand identity with our domain services.',
        content: {
            introduction: "Quick and easy domain registration services.",
            approach: []
        }
    },
    {
        id: 'it-infrastructure',
        title: 'IT Infrastructure',
        icon: Server,
        shortDescription: 'Robust IT infrastructure setup and management.',
        content: {
            introduction: "Complete IT infrastructure planning and implementation.",
            approach: []
        }
    },
    {
        id: 'maintenance',
        title: 'Maintenance Contracts',
        icon: Settings, // Assuming Settings is available or use another icon
        shortDescription: 'Comprehensive maintenance support for your systems.',
        content: {
            introduction: "Ongoing maintenance and support contracts.",
            approach: []
        }
    },
    {
        id: 'access-control',
        title: 'Access Controls',
        icon: Shield,
        shortDescription: 'Advanced access control systems for security.',
        content: {
            introduction: "Secure access control and time attendance systems.",
            approach: []
        }
    },
    {
        id: 'security',
        title: 'Security Solutions',
        icon: Shield,
        shortDescription: 'End-to-end security solutions for your enterprise.',
        content: {
            introduction: "Comprehensive security solutions for your business.",
            approach: []
        }
    },
    {
        id: 'pabx',
        title: 'Telephone PABX Solutions',
        icon: Phone,
        shortDescription: 'Modern telecommunication systems for seamless connectivity.',
        content: {
            introduction: "Advanced PABX telephone systems.",
            approach: []
        }
    },
    {
        id: 'digital-marketing',
        title: 'SEO, Social & Digital Media',
        icon: Search,
        shortDescription: 'Data-driven digital marketing strategies.',
        content: {
            introduction: "Strategic SEO and digital marketing services.",
            approach: []
        }
    },
    {
        id: 'whatsapp-marketing',
        title: 'Whatsapp Marketing',
        icon: MessageSquare,
        shortDescription: 'Engage customers directly through Whatsapp.',
        content: {
            introduction: "Effective WhatsApp marketing campaigns.",
            approach: []
        }
    },
    {
        id: 'cloud-hosting',
        title: 'Cloud Hosting',
        icon: Cloud,
        shortDescription: 'Scalable cloud hosting solutions.',
        content: {
            introduction: "Reliable cloud hosting services.",
            approach: []
        }
    }
];

// Helper to get all services
export const getAllServices = () => services;

// Helper to get service by slug/id
export const getServiceById = (id) => services.find(service => service.id === id);
