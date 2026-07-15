"use client";

import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import Image from "next/image";
import { ExploreItem } from "@/lib/api/explore";
import Link from "next/link";


interface TravelCardProps {
  travelData: ExploreItem;
}

const TravelCard = ({  travelData }: TravelCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
    >

      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
       {travelData.image && (
    <Image
      src={travelData.image}
      alt={travelData.title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
  )}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
          {travelData.category}
        </span>
        <span className="absolute top-3 right-3 bg-[#4f46e5] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
          ★ {travelData.rating}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base line-clamp-1 group-hover:text-[#4f46e5] transition-colors">
            {travelData.title}
          </h3>
          
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-xs text-slate-400 gap-1">
              <FiMapPin size={14} className="text-slate-400" />
              <span>{travelData.location}</span>
            </div>
            <div className="flex items-center text-xs text-slate-400 gap-1">
              <FiCalendar size={14} className="text-slate-400" />
              <span>{travelData.duration}</span>
            </div>
          </div>
        </div>

        {/* প্রাইস ও বুকিং অ্যাকশন */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Price</span>
            <span className="text-lg font-black text-slate-900">${travelData.price}</span>
          </div>
          <Link href={`/explore/${travelData._id}`}>
          <Button
            size="sm"
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-bold rounded-xl px-4 py-2 transition-colors cursor-pointer shadow-sm"
          >
          View Details
          </Button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TravelCard;