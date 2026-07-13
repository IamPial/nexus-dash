'use client'

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import logo from "@/assets/nexus.png"
import Image from "next/image";

const  Navbar =()=> {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (

    <div className="sticky top-0 z-40 w-full border-b  bg-[#0f172a]    border-white/10  backdrop-blur-xl ">
    <nav className="container mx-auto px-4 md:px-0 relative" >
      <header className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Logo" width={40} height={40}/>
            <p className="font-bold text-xl text-white">Nexus<span className="text-green-300 ">Dash</span></p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#" className="font-medium text-white" aria-current="page">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="font-medium text-white">Pricing</Link>
          </li>
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login"  className= "no-underline ">
           <Button className="border border-[#4f46e5] bg-transparent shadow-none text-white px-4 py-2 rounded-md hover:bg-[#4338ca] ">Login</Button>
          </Link>
          <Link href="/register" className= "no-underline ">
            <Button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca] ">Sign Up</Button>
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 font-medium text-accent">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2">
                Login
              </Link>
              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
      </div>
  )
}
export default Navbar