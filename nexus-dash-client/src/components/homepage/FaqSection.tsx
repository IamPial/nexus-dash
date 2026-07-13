'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How does the real-time pricing filter operate?", a: "Our dynamic inventory ledger uses instantaneous API calls that sync directly with host adjustments, ensuring the price you view matches live database metrics perfectly within milliseconds." },

    { q: "Are all listings on NexusDash verified?", a: "Yes. Every single boutique resort or custom travel experience undergoes a strict multi-step verification protocol to confirm secure hosting and data transparency." },

    { q: "Can property managers modify listings on the fly?", a: "Absolutely. The verified administrator dashboard grants full CRUD controls, letting you adjust parameters like dates, vacancy brackets, and operational costs seamlessly." }
  ];

  return (
    <section className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        <p className="text-slate-600 mt-2">Clear, transparent logic answering your fundamental inquiries.</p>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors">
            <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-5 text-left font-bold text-slate-950 flex items-center justify-between text-sm md:text-base">
              <span>{faq.q}</span>
              <FiChevronDown className={`transform transition-transform duration-300 text-slate-500 ${openFaq === idx ? "rotate-180 text-indigo-600" : ""}`} />
            </button>
            {openFaq === idx && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FaqSection;