'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Form, TextField, Input, Button, FieldError,  Label } from '@heroui/react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


type SignInForm = {
  email: string;
  password:string
}

const  LoginPage=()=> {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = (): void => setIsVisible((prev) => !prev);
  const router = useRouter();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as SignInForm;
    const { data,error } = await authClient.signIn.email({ 
        email:user.email, 
        password:user.password,
     })
      if (data) {
      toast.success("Login successful!", {
        style: {
          color: "#00c950",
        },
      });
      router.push("/");
      router.refresh();
    }

    if(error){
      toast.error("Login failed! Please check your credentials.", {
        style: {
          color: "#ff4d4f",
        },
      });
    }
   
}

  const handleGoogleSignIn = async () => {
   await authClient.signIn.social({
    provider: "google",
    
  });
  toast.success("Sign In successful with google!", {
        style: {
          color: "#00c950",
        },
      });
      router.push("/");
      router.refresh();
};

  

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden px-2">
      
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-45 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back to <span className="text-indigo-600">NexusDash</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Enter your credentials to manage your premium travel experience.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="bg-white py-8 px-4 shadow-lg border border-slate-200/60 rounded-2xl sm:px-10">
          
          <Form onSubmit={handleSubmit} className="space-y-6">
            
            <TextField isRequired className="w-full flex flex-col gap-1.5">
              <Label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Email Address
              </Label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 z-20" size={18} />
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all text-slate-900"
                />
              </div>
              <FieldError className="text-xs text-rose-500 mt-1" />
            </TextField>

            <TextField isRequired className="w-full flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Password
                </Label>
              </div>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 z-20" size={18} />
                <Input
                  name="password"
                  type={isVisible ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-12 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all text-slate-900"
                />
                <button
                  type="button"
                  onClick={toggleVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none z-20 p-1"
                >
                  {isVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              <FieldError className="text-xs text-rose-500 mt-1" />
            </TextField>

            <div>
              <Button
                type="submit"
                className="w-full py-6 bg-[#4f46e5] hover:bg-indigo-700 text-white font-bold rounded-xl transition duration-200 shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
              >
                Sign In
              </Button>
            </div>
          </Form>

          <div className="mt-6">
            <div className="relative flex items-center justify-center my-4">
              <div className="absolute w-full border-t border-slate-200" />
              <span className="relative bg-white px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Or continue with
              </span>
            </div>

            <Button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-6 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition duration-200 flex items-center justify-center gap-2.5"
            >
              
                <svg className="h-5 w-5" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              
              Sign in with Google
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600">
              New to NexusDash?{' '}
              <Link href="/register" className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                Create a free account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;