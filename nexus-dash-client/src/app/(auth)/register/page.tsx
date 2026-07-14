"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiImage, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import TravelImg from "@/assets/travel.png";
import Image from "next/image";

interface SignUpInputs {
  name: string;
  image: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);



 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
   
  
  };


  const inputStyle = `rounded-xl border border-slate-200 bg-white text-slate-900 w-full shadow-none mt-1 focus:border-[#4f46e5] focus:ring-0 focus:outline-none transition-colors autofill:shadow-[0_0_0_30px_#ffffff_inset] autofill:text-slate-900 [-webkit-text-fill-color:slate-900]`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >

      <div className="py-10 px-4 md:px-0 text-slate-900 min-h-screen flex items-center justify-center bg-slate-50">
        <Form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white shadow-xl flex border border-slate-200/60 p-8 w-full max-w-lg mx-auto flex-col gap-5"
        >
          <header className="text-center">
            <Image
              src={TravelImg}
              alt="Travel Logo"
              width={50}
              height={50}
              className="mx-auto my-2 border border-slate-200 bg-slate-400 rounded-lg p-1.5"
            />
            <h2 className="text-3xl font-extrabold tracking-tight mt-3 text-slate-900">
              Create a <span className="text-[#4f46e5]">NexusDash</span> account
            </h2>
          </header>

          {/* Full Name Input */}
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Full Name
            </Label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-3.5 text-slate-400 z-20" size={18} />
              <Input 
                className={`${inputStyle} pl-10`} 
                placeholder="Enter your full name" 
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Photo URL Input */}
          <TextField isRequired name="image" type="url" className="w-full">
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Photo URL 
            </Label>
            <div className="relative flex items-center">
              <FiImage className="absolute left-3.5 text-slate-400 z-20" size={18} />
              <Input 
                className={`${inputStyle} pl-10`} 
                placeholder="https://" 
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Unique Email Input */}
          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Email Address
            </Label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-3.5 text-slate-400 z-20" size={18} />
              <Input 
                className={`${inputStyle} pl-10`} 
                placeholder="john@example.com" 
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Password Input */}
          <TextField
            isRequired
            name="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 6) return "Password must be at least 6 characters";
              if (!/[A-Z]/.test(value)) return "Include at least one uppercase letter";
              if (!/[a-z]/.test(value)) return "Include at least one lowercase letter";
              return null;
            }}
          >
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Password 
            </Label>
            <div className="relative flex items-center">
              <FiLock className="absolute left-3.5 text-slate-400 z-20" size={18} />
              <Input 
                className={`${inputStyle} pl-10 pr-12`} 
                type={showPass ? "text" : "password"}
                placeholder="Create a password" 
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none z-20 p-1"
              >
                {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <Description className="text-xs text-slate-500 mt-1">
              At least 6 characters with 1 uppercase & 1 lowercase letter.
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Confirm Password Input */}
          <TextField 
            isRequired 
            name="confirmPassword" 
            className="w-full"
            // validate={(value) => value !== formData.password ? "Passwords do not match" : null}
          >
            <Label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center gap-0.5">
              Confirm Password 
            </Label>
            <div className="relative flex items-center">
              <FiLock className="absolute left-3.5 text-slate-400 z-20" size={18} />
              <Input 
                className={`${inputStyle} pl-10 pr-12`} 
                type={showConfirmPass ? "text" : "password"}
                placeholder="Confirm password" 
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none z-20 p-1"
              >
                {showConfirmPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Submission & Button Area */}
          <div className="mt-2 flex flex-col gap-3">
            <Button
              type="submit"
              className="cursor-pointer w-full rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold py-6 transition-colors shadow-md flex items-center justify-center"
            >
              Register Account
            </Button>

            <div className="relative flex items-center justify-center my-2">
              <Separator className="absolute w-full bg-slate-200" />
              <span className="relative bg-white px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Or continue with
              </span>
            </div>

            <Button
              type="button"
              className="w-full py-6 border border-slate-300 bg-white text-slate-700 font-bold rounded-xl   flex items-center justify-center gap-2 "
            >
              <FcGoogle className="text-xl" />
              Sign up with Google
            </Button>
          </div>

          <Separator className="bg-slate-200" />

          <footer className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#4f46e5] hover:text-[#4338ca] font-bold hover:underline ml-1"
            >
              Sign In
            </Link>
          </footer>
        </Form>
      </div>
    </motion.div>
  );
};

export default SignUpPage;