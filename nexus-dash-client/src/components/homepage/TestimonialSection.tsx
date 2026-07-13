'use client';

import Image from 'next/image';
import React from 'react';
import { FiStar } from 'react-icons/fi';

// Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper CSS styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSection: React.FC = () => {
const reviews = [
    { 
      name: "Sarah Jenkins", 
      role: "Luxury Travel Blogger", 
      quote: "The multi-field filtering on NexusDash is unmatched. I secured a beachfront villa in Bali within two clicks, fully verified.", 
      avatar: "https://i.pravatar.cc/150?img=32" 
    },
    { 
      name: "Marcus Thorne", 
      role: "Property Operations Manager", 
      quote: "As a host, the real-time analytics suite changed how we price our alpine chalets. Our booking rates increased by 40%.", 
      avatar: "https://i.pravatar.cc/150?img=12" 
    },
    { 
      name: "Elena Rostova", 
      role: "Frequent Nomad", 
      quote: "Concierge support saved my trip when weather conditions forced a last-minute schedule adjustment. 10/10 execution.", 
      avatar: "https://i.pravatar.cc/150?img=47" 
    },
    { 
      name: "David Kim", 
      role: "Solo Backpacker", 
      quote: "Finding off-grid locations with actual host-verified security parameter data made my solo trip to Kyoto absolute peace of mind.", 
      avatar: "https://i.pravatar.cc/150?img=33" 
    },
    { 
      name: "Amélie Laurent", 
      role: "Resort Coordinator", 
      quote: "The absolute transparency of the database architecture makes inventory update so seamless. Highly recommended platform!", 
      avatar: "https://i.pravatar.cc/150?img=49" 
    },
    { 
      name: "Zayan Malik", 
      role: "Premium Explorer", 
      quote: "Swapping villas through their dynamic booking engine is fluid. No hidden costs, real-time rates, and flawless support.", 
      avatar: "https://i.pravatar.cc/150?img=68" 
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Stories from Our Global Community</h2>
        <p className="text-slate-600 mt-2">Read real logs from premium travelers who transformed their vacations via NexusDash.</p>
      </div>

      {/* Swiper Container */}
      <div className="w-full testimonial-swiper-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          breakpoints={{
         
            640: {
              slidesPerView: 2,
            },
            
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
                <div>
                  {/* Star Ratings */}
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <FiStar key={idx} fill="currentColor" size={16} />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm text-slate-600 leading-relaxed italic">{review.quote}</p>
                </div>

                {/* User Profile Footer */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full">
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      fill
                      sizes="40px"
                      className="object-cover"
                      unoptimized 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>




    </section>
  );
};

export default TestimonialSection;