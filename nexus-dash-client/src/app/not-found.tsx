import { Button } from "@heroui/react";
import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center">
      <div className="max-w-md w-full space-y-6">
        
        <div className="relative select-none">
          <h1 className="text-9xl font-black tracking-tighter text-slate-200/80 animate-pulse">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-[#4f46e5] tracking-wide uppercase mt-4">
            Page Not Found
          </p>
        </div>


        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Lost in Destination?
          </h2>
          <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row justify-center items-center pt-2">
          
          <Link href="/" className="w-full sm:w-auto">
            <Button 
              className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold rounded-xl px-5 py-2.5 text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FiHome size={16} /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}