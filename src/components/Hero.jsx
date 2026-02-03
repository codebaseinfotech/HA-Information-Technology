import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Hero = () => {
    const slides = [
        {
            title: "Designed to provide.Top-notch Apperance",
            description: "Our experience ensures that your projects will be done right and with the upmost professionalism.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        },
        {
            title: "Transforming Businesses Through Software Innovation",
            description: "Creating cutting-edge solutions that drive growth and deliver exceptional results for your business.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        },
        {
            title: "It's all about User experience that boost your Business",
            description: "We deliver innovative technology solutions that transform your vision into reality.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        }
    ];

    return (
        <section id="home" className="relative min-h-screen">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-white/50',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                className="h-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            />

                            {/* Black Overlay */}
                            <div className="absolute inset-0 bg-black/70" />

                            {/* Content */}
                            <div className="relative z-10 container mx-auto px-4 xl:px-12 h-full flex items-center">
                                <div className="max-w-xl flex flex-col gap-9">
                                    <div className='flex flex-col gap-3'>
                                        <h1 className="text-[34px] whitespace-pre-line md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                                            {slide.title}
                                        </h1>
                                        <p className="text-base md:text-lg !leading-6 font-medium text-[#f2f2f2] mb-8">
                                            {slide.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            to="/about"
                                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                                        >
                                            Learn More
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </Link>
                                        <Link
                                            to="/services"
                                            className="inline-flex items-center justify-center gap-2 bg-[#1A3C8B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1A3C8B]/80 transition-all duration-300"
                                        >
                                            Explore Services
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
