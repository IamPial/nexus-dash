'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Features Type Definition for TypeScript
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -10, 
        borderColor: '#a5b4fc',
        backgroundColor: '#ffffff'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between min-h-55 group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div>
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="p-3 bg-white inline-block rounded-xl border border-slate-100 shadow-sm mb-4 group-hover:bg-indigo-50 transition-colors duration-300"
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;