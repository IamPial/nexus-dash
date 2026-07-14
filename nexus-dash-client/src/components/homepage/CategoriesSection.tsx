import React from 'react';
import Link from "next/link";
import { FiChevronRight, FiCompass, FiHeart, FiBriefcase, FiShield } from 'react-icons/fi';

const CategoriesSection: React.FC = () => {
  const categoryItems = [
    { title: "Over water Villas", count: "142 Properties", icon: <FiHeart className="text-rose-500" /> },
    { title: "Alpine Treks", count: "89 Experiences", icon: <FiCompass className="text-emerald-500" /> },
    { title: "Urban Penthouses", count: "210 Rentals", icon: <FiBriefcase className="text-amber-500" /> },
    { title: "Private Islands", count: "34 Locations", icon: <FiShield className="text-indigo-500" /> }
  ];

  return (
    <section className="py-20 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Curated Travel Categories</h2>
            <p className="text-slate-600 mt-1">Whether you seek high-altitude thrills or tropical solace, we hold the ledger.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryItems.map((cat, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-300 hover:bg-white hover:shadow-md transition-all cursor-pointer flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <Link href="/explore" className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-slate-50">{cat.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{cat.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{cat.count}</p>
                </div>
                </Link>
              </div>
              <FiChevronRight className="text-slate-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;