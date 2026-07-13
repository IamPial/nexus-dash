'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { Form, TextField, Label, Input, TextArea, FieldError, Button } from '@heroui/react';
import { toast } from 'sonner';

const ContactPage: React.FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log('Form data submitted:', data);

    toast.success('Thank you for contacting NexusDash! We will get back to you soon.', {
      style: {
        color: "#00c950",
      },
    });
  };

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      
      {/* 1. Hero / Header Section */}
      <section className="relative bg-white border-b border-slate-200 py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ x: [0, 25, -25, 0], y: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
          className="absolute top-5 left-5 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50"
        />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase bg-indigo-50 px-3 py-1 rounded-full">
            Contact Us
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch with Our <span className="text-indigo-600">Travel Experts</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Have questions about a premium resort, booking dates, or listing custom travel experiences on NexusDash? Drop us a line, and our 24/7 concierge team will assist you.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section (Grid Layout) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-4 lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
            
            <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Email Support</h4>
                <p className="text-xs text-slate-500 mt-1">For booking queries & partnerships</p>
                <a href="mailto:support@nexusdash.com" className="text-sm text-indigo-600 font-medium mt-1 block hover:underline">support@nexusdash.com</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Call Concierge</h4>
                <p className="text-xs text-slate-500 mt-1">Direct support for verified property managers</p>
                <p className="text-sm text-slate-700 font-medium mt-1">+1 (555) 839-2001</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Headquarters</h4>
                <p className="text-xs text-slate-500 mt-1">NexusDash Global Operations Ltd.</p>
                <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">742 Evergreen Terrace, <br />Dhaka-1201, Dhaka</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                <FiClock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Operation Hours</h4>
                <p className="text-xs text-slate-500 mt-1">Automated backend ledger active 24/7</p>
                <p className="text-sm text-slate-700 font-medium mt-1">Sat - Sun: 9:00 AM - 6:00 PM GMT+6</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive HeroUI Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
            <p className="text-sm text-slate-500 mb-6">Fill out the form below, and our team will respond within 24 hours.</p>

            {/* HeroUI Form Component Wrapper */}
            <Form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                
                {/* Full Name Input */}
                <TextField isRequired className="w-full flex flex-col gap-1.5">
                  <Label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                  <FieldError className="text-xs text-red-500 mt-0.5" />
                </TextField>

                {/* Email Address Input */}
                <TextField isRequired className="w-full flex flex-col gap-1.5">
                  <Label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                  <FieldError className="text-xs text-red-500 mt-0.5" />
                </TextField>
              </div>

              {/* Subject Input */}
              <TextField isRequired className="w-full flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Booking inquiry for Maldives Resort..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
                <FieldError className="text-xs text-red-500 mt-0.5" />
              </TextField>

              {/* Message TextArea */}
              <TextField isRequired className="w-full flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Your Message
                </Label>
                <TextArea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Provide detailed information regarding your experience package..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 resize-none min-h-30"
                />
                <FieldError className="text-xs text-red-500 mt-0.5" />
              </TextField>

              {/* Submit Button Container */}
              <div className="pt-2 flex justify-end">
                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                >
                  <Button 
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition shadow-md shadow-indigo-100 flex items-center justify-center gap-2"
                  >
                    Submit Message
                  </Button>
                </motion.div>
              </div>
            </Form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;