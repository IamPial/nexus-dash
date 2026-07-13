"use client";

import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";
import footerLogo from "@/assets/nexus.png";

const Footer = () => {
  const inputStyle = `rounded-lg bg-[#131129] border border-white/10 text-white w-full shadow-none focus:border-[#4f46e5] focus:ring-0 focus:outline-none transition-colors autofill:shadow-[0_0_0_30px_#131129_inset] autofill:text-white [-webkit-text-fill-color:white]`;

  return (
    <div className="bg-[#0f172a] text-white border-t border-white/5 py-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Info Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex gap-2 items-center">
              <Image src={footerLogo} alt="NexusDash" width={50} height={50} />
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Nexus<span className="text-green-300">Dash</span>
              </h1>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Connecting you to the world&apos;s most exclusive destinations and premium experiences. Fast, seamless, and uniquely curated for luxury explorers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4f46e5] transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="hover:text-[#4f46e5] transition-colors cursor-pointer"
                >
                  Explore 
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#4f46e5] transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#4f46e5] transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-4">
              Social Links
            </h2>
            <div className="flex flex-wrap gap-3 text-white">
              <Link href="#" className="cursor-pointer">
                <Button
                  isIconOnly
                  className="bg-[#131129] border border-white/10 hover:border-[#4f46e5] hover:bg-[#4f46e5] text-white rounded-lg transition-all min-w-10 h-10"
                >
                  <LuFacebook className="text-lg" />
                </Button>
              </Link>
              <Link href="#" className="cursor-pointer">
                <Button
                  isIconOnly
                  className="bg-[#131129] border border-white/10 hover:border-[#4f46e5] hover:bg-[#4f46e5] text-white rounded-lg transition-all min-w-10 h-10"
                >
                  <FaXTwitter className="text-lg" />
                </Button>
              </Link>
              <Link href="#" className="cursor-pointer">
                <Button
                  isIconOnly
                  className="bg-[#131129] border border-white/10 hover:border-[#4f46e5] hover:bg-[#4f46e5] text-white rounded-lg transition-all min-w-10 h-10"
                >
                  <SlSocialLinkedin className="text-lg" />
                </Button>
              </Link>
              <Link href="#" className="cursor-pointer">
                <Button
                  isIconOnly
                  className="bg-[#131129] border border-white/10 hover:border-[#4f46e5] hover:bg-[#4f46e5] text-white rounded-lg transition-all min-w-10 h-10"
                >
                  <LuInstagram className="text-lg" />
                </Button>
              </Link>
            </div>
            <div className="mt-5 text-xs text-slate-400 space-y-1">
              <p>+880 1786 901 1622</p>
              <p>info@nexusdash.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold text-slate-400 tracking-wider uppercase">
              Newsletter
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get latest updates and room availability
              notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full items-stretch">
              <Input
                type="email"
                placeholder="Your email address"
                className={inputStyle}
              />
              <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold rounded-lg px-5 h-11 transition-colors shadow-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 NexusDash. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;