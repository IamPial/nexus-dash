import React from "react";
import { Skeleton, Card } from "@heroui/react";
import { FiSearch } from "react-icons/fi";

const ExploreSkeleton = () => {
  // ৪টি স্কেলেটন কার্ড জেনারেট করার জন্য লুপ অ্যারে
  const skeletonCards = Array.from({ length: 4 });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* হেডার সেকশন স্কেলেটন */}
        <div className="text-center md:text-left space-y-3">
          <Skeleton className="h-9 w-64 md:w-80 rounded-xl mx-auto md:mx-0" />
          <Skeleton className="h-4 w-full max-w-2xl rounded-lg mx-auto md:mx-0" />
        </div>

        {/* ফিল্টার বার স্কেলেটন */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Search Destination</span>
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
            <div className="md:col-span-3 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Category</span>
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Sort By</span>
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
          </div>
        </div>

        {/* কার্ডের গ্রিড স্কেলেটন */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skeletonCards.map((_, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm flex flex-col h-full space-y-5 p-0"
       
            >
              {/* ইমেজ থাম্বনেইল স্কেলেটন */}
              <Skeleton className="h-48 w-full rounded-t-2xl" />

              {/* কার্ড বডি কন্টেন্ট স্কেলেটন */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-6 pt-0">
                <div className="space-y-3">
                  {/* টাইটেল */}
                  <Skeleton className="h-5 w-3/4 rounded-lg" />
                  
                  {/* মেটা ডাটা (লোকেশন ও ডেট) */}
                  <div className="space-y-2 pt-1">
                    <Skeleton className="h-3 w-1/2 rounded-md" />
                    <Skeleton className="h-3 w-1/3 rounded-md" />
                  </div>
                </div>

                {/* প্রাইস ও বাটন সেকশন */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="space-y-1">
                    <Skeleton className="h-2 w-8 rounded" />
                    <Skeleton className="h-5 w-14 rounded-md" />
                  </div>
                  {/* আপনার প্রাইমারি কালার [#4f46e5] এর সাথে ম্যাচড বাটন লোডার */}
                  <Skeleton className="h-9 w-24 rounded-xl bg-indigo-100" />
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExploreSkeleton;