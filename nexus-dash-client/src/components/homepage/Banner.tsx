'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { FiChevronRight, FiChevronLeft, FiChevronsRight } from 'react-icons/fi';
import Link from "next/link";
import bannerFirstImg from "@/assets/banner1.jpg";
import bannerSecondImg from "@/assets/banner2.jpg";
import bannerThirdImg from "@/assets/banner3.jpg";
import bannerFourthImg from "@/assets/banner4.jpg";

// Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper CSS styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Chart Your Next Adventure",
    subtitle: "Map out your global destinations and take off toward seamless, borderless travel experiences.",
    image: bannerFirstImg, 
  },
  {
    id: 2,
    title: "Pack Light, Explore Deep",
    subtitle: "Gear up with the essentials and document your journey across breathtaking landscapes.",
    image: bannerSecondImg, 
  },
  {
    id: 3,
    title: "Discover Historic Wonders",
    subtitle: "Immerse yourself in timeless architecture and culturally enriched waterfront cities.",
    image: bannerThirdImg, 
  },
  {
    id: 4,
    title: "Minimalist & Smart Escapes",
    subtitle: "Leave the heavy lifting to us. Enjoy stress-free bookings tailored for the modern wanderer.",
    image: bannerFourthImg, 
  }
];

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[65vh] md:h-[70vh] overflow-hidden bg-slate-900">
      
      {/* 1. Swiper Image Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0 w-full h-full mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105 motion-safe:animate-[zoom_20s_infinite_alternate]"
              fill
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div className="absolute inset-0 z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          {slides.map((slide, index) => 
            activeIndex === index && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="inline-block text-[#0f172a] font-semibold tracking-widest uppercase text-xs mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                  Welcome to NexusDash
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
                  {slide.subtitle}
                </p>

           
                   <Link href="/explore" >
                     <Button 
                    size="lg"
                    className="w-40 sm:w-auto px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                     Explore Now <FiChevronsRight className="ml-2" />
                  </Button>
                   </Link>
              
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* 3. Custom Navigation and Visual Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 px-6 flex items-center justify-between pointer-events-none">
        
        {/* Left/Right Navigation buttons using Swiper Instance API */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="p-3 rounded-full border border-white/20 bg-black/20 text-white hover:bg-white hover:text-indigo-600 transition-all backdrop-blur-md"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={20} />
          </button>
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="p-3 rounded-full border border-white/20 bg-black/20 text-white hover:bg-white hover:text-indigo-600 transition-all backdrop-blur-md"
            aria-label="Next slide"
          >
            <FiChevronRight size={20} />
          </button>
        </div>



        {/* Custom Pagination Dots linked with Swiper State */}
        <div className="flex gap-2 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                activeIndex === index ? "w-7 bg-indigo-500" : "w-1.5 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;