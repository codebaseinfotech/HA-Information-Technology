import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    // WhatsApp business number (UAE)
    const whatsappNumber = '971523003423';
    const defaultMessage = 'Hello! I would like to know more about your services.';

    const openWhatsApp = () => {
        const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(defaultMessage)}&type=phone_number&app_absent=0`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-16 right-6 z-50 flex flex-col items-end">
                {/* Chat Popup */}
                {isOpen && (
                    <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 animate-fade-in">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-2xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <FaWhatsapp className="w-7 h-7 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Hamed Alattas Technology</h3>
                                    <p className="text-green-100 text-xs">Typically replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 bg-gray-50">
                            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    👋 Hi there! Welcome to <strong>Hamed Alattas Technology</strong>
                                </p>
                                <p className="text-gray-600 text-sm mt-2">
                                    How can we help you today? Click the button below to chat with us on WhatsApp!
                                </p>
                            </div>

                            {/* WhatsApp Button */}
                            <button
                                onClick={openWhatsApp}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                <span>Start Chat on WhatsApp</span>
                            </button>

                            <p className="text-center text-gray-500 text-xs mt-3">
                                We'll respond as soon as possible
                            </p>
                        </div>
                    </div>
                )}

                {/* Floating Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group relative"
                    aria-label="WhatsApp Chat"
                >
                    {isOpen ? (
                        <X className="w-8 h-8" />
                    ) : (
                        <>
                            <FaWhatsapp className="w-8 h-8 animate-pulse" />
                        </>
                    )}
                </button>
            </div>
        </>
    );
};

export default WhatsAppWidget;
