'use client'

import { useState } from "react";
import { Link, Button, Avatar, Dropdown } from "@heroui/react";
import logo from "@/assets/nexus.png"
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "sonner";

const  Navbar =()=> {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const {data: session} = authClient.useSession() 
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
     toast.success("Logged out successfully!", {
             style: {
               color: "#00c950",
             },
           })
     }


  return (
    <div className="sticky top-0 z-40 w-full border-b bg-[#0f172a] border-white/10  backdrop-blur-xl">
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
            <Image src={logo} alt="Logo" width={40} height={40} className="hidden sm:flex" />
            <p className="font-bold text-xl text-white">Nexus<span className="text-green-300 ">Dash</span></p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <NavLink href="/" className="font-medium text-white">Home</NavLink>
          </li>
          <li>
            <NavLink href="/explore" className="font-medium text-white">Explore</NavLink>
          </li>
          <li>
            <NavLink href="/about" className="font-medium text-white">About</NavLink>
          </li>
          <li>
            <NavLink href="/contact" className="font-medium text-white">Contact</NavLink>
          </li>
        </ul>



        <div className=" flex items-center gap-4 ">
         {user ? (  <Dropdown>
                <Button
                  aria-label="Menu"
                  className="py-6 bg-[#131129]/80 backdrop-blur-lg text-white"
                  variant="secondary"
                >
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name}
                      src={user?.image ?? undefined}
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>{" "}
                  <span className="text-white">
                    Hi, {user?.name?.split(" ")[0]} !
                  </span>
                </Button>

                <Dropdown.Popover>
                  <Dropdown.Menu
                    className="bg-[#0f172a] text-white border border-white/10"
                    onAction={(key) => console.log(`Selected: ${String(key)}`)}
                  >
                    <Dropdown.Item
                      id="new-file"
                      textValue="New file"
                      className="hover:bg-white/5"
                    >
                      <div>
                        <h3 className="font-semibold">{user?.name}</h3>
                        <small className="text-slate-400">{user?.email}</small>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="hover:bg-white/5">
                      <NavLink
                        href={`/dashboard`}
                        className="font-medium"
                        aria-current="page"
                      >
                        Dashboard
                      </NavLink>
                    </Dropdown.Item>

                    <Dropdown.Item className="hover:bg-white/5 p-1">
                      <Button
                        onClick={handleSignOut}
                        className="w-full bg-[#da3214] hover:bg-[#c1290f] text-white font-semibold transition-colors"
                      >
                        <IoIosLogOut /> Log Out
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown> ) :  ( <>
          <Link href="/login"  className= "no-underline ">
           <Button className="border border-[#4f46e5] bg-transparent shadow-none text-white px-4 py-2 rounded-md hover:bg-[#4338ca] ">Login</Button>
          </Link>
          <Link href="/register" className= "no-underline ">
            <Button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca] ">Sign Up</Button>
          </Link>
      </>
    )}


         
        </div>
      </header>
      {isMenuOpen && (
        <div  className="w-50 absolute top-[calc(100%+8px)] left-4 right-4 z-50 lg:hidden rounded-xl border border-white/10 bg-[#0f172a] backdrop-blur-md p-2 shadow-2xl transition-all duration-200 ease-out">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <NavLink href="/" onClick={() => setIsMenuOpen(false)} className="font-medium text-white">Home</NavLink>
            </li>
            <li>
              <NavLink href="/explore" onClick={() => setIsMenuOpen(false)} className="font-medium text-white">Explore</NavLink>
            </li>
            <li>
              <NavLink href="/about"  onClick={() => setIsMenuOpen(false)} className="font-medium text-white">About</NavLink>
            </li>
            <li>
              <NavLink  href="/contact"  onClick={() => setIsMenuOpen(false)} className="font-medium text-white">Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  </div>
  )
}
export default Navbar