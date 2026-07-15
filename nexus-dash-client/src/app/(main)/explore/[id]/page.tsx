"use client";

import React from "react";
import { Button } from "@heroui/react";
import { FiMapPin, FiCalendar, FiClock, FiUsers, FiCheckCircle, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// ১. টাইপ-সেফ ইন্টারফেস স্ট্রাকচার
export interface TravelItemDetails {
  id: string;
  title: string;
  category: string;
  location: string;
  rating: string;
  price: string;
  duration: string;
  image: string;
  description: string;

}

interface ItemDetailsPageProps {
  data: TravelItemDetails;
}

const dummyItemDetail: TravelItemDetails = {
  id: "1",
  title: "Luxury Beach Resort Package",
  category: "Beach & Resort",
  location: "Maldives, South Asia",
  rating: "4.9",
  price: "1299",
  duration: "5 Days / 4 Nights",
  image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800",
  description:
    "Escape to a tropical paradise where pristine white sands meet crystalline turquoise waters. Our Luxury Beach Resort Package offers an all-inclusive premium stay tailored for travelers seeking both relaxation and adventure. From private overwater villas to guided snorkeling tours among vibrant coral reefs, every detail is crafted to perfection. Experience world-class dining, relaxing spa sessions, and unforgettable sunsets right from your private deck.",
 
};


const ItemDetailsPage = ({ data = dummyItemDetail }: ItemDetailsPageProps) => {

    const router = useRouter()
   const handleBook =()=>{
    toast.success("Booking Successfully",{
       style: {
          color: "#00c950",
        },
    })

    router.push("/explore")
    router.refresh()    
   }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
  
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <Link href="/explore" className="hover:text-[#4f46e5] transition-colors">Explore</Link>
          <FiChevronRight size={14} />
          <span className="text-slate-600 truncate">{data.title}</span>
        </div>

      
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="bg-indigo-50 text-[#4f46e5] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {data.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-1">
              {data.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <FiMapPin className="text-slate-400" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500 font-bold">★ {data.rating}</span>
              
              </div>
            </div>
          </div>

   
          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex items-center justify-between gap-8 w-full md:w-auto">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wide block font-bold">Per Person</span>
              <span className="text-2xl font-black text-slate-900">${data.price}</span>
            </div>
            <Button onClick={handleBook} className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer">
              Book Package
            </Button>
          </div>
        </div>

      
        <div className="relative h-75 md:h-120 w-full rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-2">
          
     
          <div className="lg:col-span-2 space-y-8">
      
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Description & Overview
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {data.description}
              </p>
            </div>

   
         
          </div>

          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 sticky top-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Key Information
              </h3>
              
         
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 border border-slate-100 text-slate-500 rounded-xl">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wide">Duration</span>
                    <span className="text-sm font-bold text-slate-800">{data.duration}</span>
                  </div>
                </div> 
              </div>

            
              <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl mt-4">
                <p className="text-xs text-[#4f46e5] font-semibold leading-relaxed">
                  Need custom dates or private group booking? Contact our travel desk support team for immediate setup.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ItemDetailsPage;