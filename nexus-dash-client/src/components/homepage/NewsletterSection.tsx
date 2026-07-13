'use client';

import React from 'react';
import { Form, TextField, Input, Button, FieldError } from '@heroui/react';
import { FiMail } from 'react-icons/fi';
import { toast } from 'sonner';

const NewsletterSection: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault();
         toast.success("Subscribed successfully!",{
      style: {
        color: "#00c950",
      },
    }); 
        
    }
  return (
    <section className="py-20  text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80  rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase bg-white px-3 py-1.5 rounded-full border border-indigo-900/40">Join the Elite Club</span>
          <h2 className="text-3xl mt-5 sm:text-4xl text-[#0f172a] font-extrabold tracking-tight">Ready to Begin Your Next Journey?</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Subscribe to receive verified flight deal alerts, custom resort promotions, and early-bird analytical insights directly in your inbox.
          </p>
        </div>
        
        <Form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <TextField isRequired className="w-full flex flex-col items-stretch gap-1.5 text-left">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="relative flex-1">
                <FiMail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 z-20" size={18} />
                <Input type="email" placeholder="Enter your premium email address" className="w-full rounded-xl border border-slate-700 bg-white pl-10 pr-4 py-3 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all" />
              </div>
              <Button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-md ">
                Subscribe Now
              </Button>
            </div>
            <FieldError className="text-xs text-rose-400 mt-1" />
          </TextField>
        </Form>
      </div>
    </section>
  );
};

export default NewsletterSection;