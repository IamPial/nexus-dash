import FeatureCard from '@/components/AboutFeatureCard';
import React from 'react';
import { Button } from '@heroui/react';
import { FiMapPin, FiCompass, FiAward, FiTrendingUp } from 'react-icons/fi'; // React Icons (Feather)
import Link from 'next/link'


const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Hero Section (60-70% Height Rule Kept) */}
      <section className="relative bg-white border-b border-slate-200 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
        <div className="max-w-4xl">
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase bg-indigo-50 px-3 py-1 rounded-full">
            About NexusDash
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Redefining the Future of <span className="text-indigo-600">Travel & Experience Booking</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            NexusDash is a premium, full-stack travel marketplace and inventory platform. We empower wanderers to discover breath-taking destinations while providing property managers with smart analytics to control prices, track ratings, and scale bookings.
          </p>
        </div>
      </section>

      {/* 2. Platform Mission & Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
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
              <span className="text-3xl font-bold text-emerald-500">100%</span>
              <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Verified Stays & Tours</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-indigo-600">Real-Time</span>
              <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Pricing & Analytics</p>
            </div>
          </div>
        </div>

        {/* Brand Value Display */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900">The Travel Ecosystem</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Whether it&apos;s an overwater villa in the Maldives or a hiking trek in Sajek Valley, NexusDash acts as a robust inventory ledger. Admin dashboards leverage full database CRUD operations, meaning listing additions, date adjustments, and price updates sync flawlessly within milliseconds.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-500 italic">
            We don&apos;t just display lists. Through interactive Recharts integration, we analyze monthly booking trends and location popularity to optimize travel listings.
          </div>
        </div>
      </section>

      {/* 3. Core Features Section (Consistent Card Sizes applied) */}
      <section className="bg-white border-t border-b border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why Travelers & Managers Trust Us</h2>
            <p className="text-slate-600 mt-2">A production-ready architecture designed for seamless wandering.</p>
          </div>

          {/* Desktop: 4 Columns Responsive Grid Rule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<FiMapPin size={24} className="text-indigo-600" />}
              title="Location Intelligence"
              description="Explore handpicked global experiences mapped by strict location filtering and local host insights."
            />
            <FeatureCard 
              icon={<FiCompass size={24} className="text-indigo-600" />}
              title="Tailored Discovery"
              description="Advanced sorting by price brackets, premium star-ratings, availability dates, and unique travel categories."
            />
            <FeatureCard 
              icon={<FiTrendingUp size={24} className="text-indigo-600" />}
              title="Dynamic Insights"
              description="Integrated Chart.js/Recharts modules displaying pricing trends, vacancy metrics, and seasonal demand."
            />
            <FeatureCard 
              icon={<FiAward size={24} className="text-indigo-600" />}
              title="Verified Luxury"
              description="Secure authentication logs you into an elite tier of managing items, ensuring scam-free data hosting."
            />
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Pack Your Bags. Start Your Journey.</h2>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto leading-relaxed">
          From full responsive grid listings with skeleton loaders to protected data management, your ultimate travel dashboard is ready.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/explore" className="no-underline">
            <Button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition shadow-md shadow-indigo-100">
              Explore Destinations
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};



export default AboutPage;