import { FiMapPin, FiChevronRight, FiClock } from "react-icons/fi";

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`}></div>
);

export default function Loading() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Breadcrumbs Skeleton */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <span className="hover:text-[#4f46e5]">Explore</span>
          <FiChevronRight size={14} />
          <Skeleton className="w-40 h-4" />
        </div>

        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2.5 w-full md:w-2/3">
            <Skeleton className="bg-indigo-100/70 w-20 h-5 rounded-full" />
            <Skeleton className="w-full h-8 md:h-10 mt-1" />
            <div className="flex items-center gap-4 text-sm text-slate-500 pt-1">
              <div className="flex items-center gap-1">
                <FiMapPin className="text-slate-300" />
                <Skeleton className="w-32 h-4" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-300 font-bold">★</span>
                <Skeleton className="w-8 h-4" />
              </div>
            </div>
          </div>

          {/* Book Button Skeleton */}
          <Skeleton className="w-full md:w-40 h-12 rounded-xl" />
        </div>

        {/* Main Image Skeleton */}
        <Skeleton className="h-75 md:h-120 w-full rounded-2xl" />

        {/* Grid Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-2">
          
          {/* Left Column - Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Description & Overview
              </h3>
              <div className="space-y-2.5 pt-1">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-5/6 h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-4/6 h-4" />
              </div>
            </div>
          </div>

          {/* Right Column - Key Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 sticky top-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Key Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 border border-slate-100 text-slate-300 rounded-xl">
                    <FiClock size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wide">
                      Duration
                    </span>
                    <Skeleton className="w-20 h-5" />
                  </div>
                </div>
              </div>

              {/* Indigo Info Box Skeleton */}
              <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl mt-4 space-y-1.5">
                <Skeleton className="bg-indigo-100 w-full h-3" />
                <Skeleton className="bg-indigo-100 w-4/5 h-3" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}