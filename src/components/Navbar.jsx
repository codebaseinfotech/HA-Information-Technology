import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from 'lucide-react';
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Box,
    VStack,
    Flex,
} from '@chakra-ui/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { onClose } = useDisclosure(); // We'll manage open state manually to keep existing toggle logic

    const handleMobileClose = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Services', path: '/services' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Resources', path: '/our-partner' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-[#ffffff] shadow-lg py-3' : 'bg-[#ffffff]/80 backdrop-blur-sm py-4'
            } `}>
            <div className="container mx-auto px-4 xl:px-12">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <Link to="/">
                            <img src={logo} alt="HA IT Logo" className=" w-56 lg:w-72 h-auto object-contain cursor-pointer" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <Link to="/" className={`font-medium text-sm transition-all duration-300 ${scrolled ? 'text-[#1A3C8B]' : 'text-[#1A3C8B]'} `}>
                            Home
                        </Link>
                        <Link to="/about" className={`font-medium text-sm transition-all duration-300 ${scrolled ? 'text-[#1A3C8B]' : 'text-[#1A3C8B]'} `}>
                            About
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={`font-medium text-sm transition-all duration-300 ${scrolled ? 'text-[#1A3C8B]' : 'text-[#1A3C8B]'} `}
                            >
                                {item.label}
                            </Link>
                        ))}
                        {/* <Link to="/contact"
                            className="bg-[#1A3C8B] text-sm text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1A3C8B]/80 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Get Started
                        </Link> */}
                    </div>

                    <button
                        className="lg:hidden flex items-center justify-center cursor-pointer z-50"
                        onClick={() => setIsOpen(true)}
                        aria-label="Toggle menu"
                    >
                        <Menu className={`transition-all duration-300 ${scrolled ? 'text-[#1A3C8B]' : 'text-white'} `} size={28} />
                    </button>
                </div>

                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={handleMobileClose}
                    size="full"
                >
                    <DrawerOverlay />
                    <DrawerContent p={0} m={0}>
                        <Box px={6} py={4}>
                            <Flex align="center" className='justify-end'>
                                <button
                                    onClick={handleMobileClose}
                                    className="text-[#1A3C8B] hover:text-[#1A3C8B]/80 transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </Flex>
                        </Box>

                        <DrawerBody p={0}>
                            <VStack align="stretch" spacing={0} px={6} py={8}>
                                <Box py={3}>
                                    <Link
                                        to="/"
                                        className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors block"
                                        onClick={handleMobileClose}
                                    >
                                        Home
                                    </Link>
                                </Box>

                                <Box borderBottom="1px solid" borderColor="gray.200" py={3}>
                                    <Link
                                        to="/about"
                                        className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors flex items-center justify-between"
                                        onClick={handleMobileClose}
                                    >
                                        About Us
                                        {/* <ChevronDown size={20} className="text-gray-600" /> */}
                                    </Link>
                                </Box>

                                <Box borderBottom="1px solid" borderColor="gray.200" py={3}>
                                    <Link
                                        to="/services"
                                        className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors flex items-center justify-between"
                                        onClick={handleMobileClose}
                                    >
                                        Services
                                        {/* <ChevronDown size={20} className="text-gray-600" /> */}
                                    </Link>
                                </Box>

                                <Box borderBottom="1px solid" borderColor="gray.200" py={3}>
                                    <Link
                                        to="/solutions"
                                        className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors flex items-center justify-between"
                                        onClick={handleMobileClose}
                                    >
                                        Solutions
                                        {/* <ChevronDown size={20} className="text-gray-600" /> */}
                                    </Link>
                                </Box>

                                <Box borderBottom="1px solid" borderColor="gray.200" py={3}>
                                    <Link
                                        to="/our-partner"
                                        className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors flex items-center justify-between"
                                        onClick={handleMobileClose}
                                    >
                                        Resources
                                        {/* <ChevronDown size={20} className="text-gray-600" /> */}
                                    </Link>
                                </Box>

                                <Box py={3}>
                                    <Link
                                        to="/contact"
                                        className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors block"
                                        onClick={handleMobileClose}
                                    >
                                        Contact Us
                                    </Link>
                                </Box>

                                <Box py={3}>
                                    <Link
                                        to="/support"
                                        className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors block"
                                        onClick={handleMobileClose}
                                    >
                                        Support
                                    </Link>
                                </Box>

                                {/* <Box mt={6} display="flex" alignItems="center" p={4} width="fit-content">
                                    <Link
                                        to="/contact"
                                        className="bg-[#1A3C8B] text-sm text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1A3C8B]/80 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                        onClick={handleMobileClose}
                                    >
                                        Get Started
                                    </Link>
                                </Box> */}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;
