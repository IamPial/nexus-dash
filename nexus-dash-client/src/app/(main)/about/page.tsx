'use client';

import FeatureCard from '@/components/AboutFeatureCard';
import React from 'react';
import { Button } from '@heroui/react';
import { FiMapPin, FiCompass, FiAward, FiTrendingUp } from 'react-icons/fi'; 
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  // Animation Variants for Scroll-triggered elements
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  } as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  } ;

  const cardContainerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } }
  } as const;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      
      {/* 1. Hero Section with Floating Shapes & Smooth Entrance */}
      <section className="relative bg-white border-b border-slate-200 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ x: [0, 30, -15, 0], y: [0, -25, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
        />
        <motion.div 
          animate={{ x: [0, -25, 30, 0], y: [0, 30, -25, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
        />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl relative z-10"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-sm font-semibold text-indigo-600 tracking-wide uppercase bg-indigo-50 px-3 py-1 rounded-full cursor-default inline-block"
          >
            About NexusDash
          </motion.span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Redefining the Future of <span className="text-indigo-600">Travel & Experience Booking</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            NexusDash is a premium, full-stack travel marketplace and inventory platform. We empower wanderers to discover breath-taking destinations while providing property managers with smart analytics to control prices, track ratings, and scale bookings.
          </p>
        </motion.div>
      </section>

      {/* 2. Platform Mission & Impact (Scroll Triggered) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInVariants}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Journey & Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            Finding the perfect stay or tour package shouldn&apos;t feel like a chore. NexusDash was crafted to bridge the gap between world-class travel experiences and cutting-edge data architecture. 
          </p>
          <p className="text-slate-600 leading-relaxed">
            With our real-time, multi-field filtering system, users can effortlessly sort through thousands of premium luxury resorts and experience packages based on specific locations, verified user ratings, flexible dates, and budget brackets.
          </p>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div>
              <motion.span whileHover={{ scale: 1.1 }} className="text-3xl font-bold text-emerald-500 block origin-left cursor-default">100%</motion.span>
              <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Verified Stays & Tours</p>
            </div>
            <div>
              <motion.span whileHover={{ scale: 1.1 }} className="text-3xl font-bold text-indigo-600 block origin-left cursor-default">Real-Time</motion.span>
              <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Pricing & Analytics</p>
            </div>
          </div>
        </motion.div>

        {/* Brand Value Display */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md"
        >
          <h3 className="text-xl font-bold text-slate-900">The Travel Ecosystem</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Whether it&apos;s an overwater villa in the Maldives or a hiking trek in Sajek Valley, NexusDash acts as a robust inventory ledger. Admin dashboards leverage full database CRUD operations, meaning listing additions, date adjustments, and price updates sync flawlessly within milliseconds.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-500 italic">
            We don&apos;t just display lists. Through interactive Recharts integration, we analyze monthly booking trends and location popularity to optimize travel listings.
          </div>
        </motion.div>
      </section>

      {/* 3. Core Features Section (Staggered Children Entrance) */}
      <section className="bg-white border-t border-b border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why Travelers & Managers Trust Us</h2>
            <p className="text-slate-600 mt-2">A production-ready architecture designed for seamless wandering.</p>
          </div>

          {/* Desktop: 4 Columns Responsive Grid Rule */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={cardContainerVariants}>
              <FeatureCard 
                icon={<FiMapPin size={24} className="text-indigo-600" />}
                title="Location Intelligence"
                description="Explore handpicked global experiences mapped by strict location filtering and local host insights."
              />
            </motion.div>
            <motion.div variants={cardContainerVariants}>
              <FeatureCard 
                icon={<FiCompass size={24} className="text-indigo-600" />}
                title="Tailored Discovery"
                description="Advanced sorting by price brackets, premium star-ratings, availability dates, and unique travel categories."
              />
            </motion.div>
            <motion.div variants={cardContainerVariants}>
              <FeatureCard 
                icon={<FiTrendingUp size={24} className="text-indigo-600" />}
                title="Dynamic Insights"
                description="Integrated Chart.js/Recharts modules displaying pricing trends, vacancy metrics, and seasonal demand."
              />
            </motion.div>
            <motion.div variants={cardContainerVariants}>
              <FeatureCard 
                icon={<FiAward size={24} className="text-indigo-600" />}
                title="Verified Luxury"
                description="Secure authentication logs you into an elite tier of managing items, ensuring scam-free data hosting."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA Section with Button Micro-interaction */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 tracking-tight"
        >
          Pack Your Bags. Start Your Journey.
        </motion.h2>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto leading-relaxed">
          From full responsive grid listings with skeleton loaders to protected data management, your ultimate travel dashboard is ready.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/explore" className="no-underline">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition shadow-md shadow-indigo-100">
                Explore Destinations
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;