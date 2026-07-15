"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { toast } from "sonner";

interface BookButtonProps {
  price: string;
}

const BookButton = ({ price }: BookButtonProps) => {

    const {data: session} = authClient.useSession() 
    const user = session?.user;


  const handleBook = () => {
    toast.success("Booking Successfully", {
      style: {
        color: "#00c950",
      },
    });
  };

  return (
    <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex items-center justify-between gap-8 w-full md:w-auto">
      <div>
        <span className="text-[10px] text-slate-400 uppercase tracking-wide block font-bold">Per Person</span>
        <span className="text-2xl font-black text-slate-900">${price}</span>
      </div>

      {user ? (<Button
        onClick={handleBook}
        className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
      >
        Book Package
      </Button>
      ):(
      
        <Link href="/login">
       <Button
        className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
      >
        Login to Book Now
      </Button>
    </Link>
      )}
    
    </div>
  );
};

export default BookButton;