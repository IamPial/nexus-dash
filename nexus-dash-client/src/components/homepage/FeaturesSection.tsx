import React from 'react';
import { FiMapPin, FiCompass, FiTrendingUp, FiAward } from 'react-icons/fi';

const FeaturesSection: React.FC = () => {
  const featureItems = [
    { icon: <FiMapPin size={24} />, title: "Location Intelligence", desc: "Advanced geospatial data mapped precisely by strict host-verified parameters." },
    { icon: <FiCompass size={24} />, title: "Tailored Discovery", desc: "Filter listings dynamically by exact price brackets, flexible availability, and styles." },
    { icon: <FiTrendingUp size={24} />, title: "Dynamic Insights", desc: "Live Recharts integrations keeping track of seasonal trends and vacancy updates." },
    { icon: <FiAward size={24} />, title: "Verified Assets", desc: "Zero-scam registry logs guaranteeing strict property security for absolute peace of mind." }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className=" text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Powerful Features for Smart Travel</h2>
        <p className="text-slate-600 mt-2">Explore the cutting-edge ecosystem designed to connect wanderers with handpicked global hosts.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureItems.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 bg-indigo-50 text-indigo-600 inline-block rounded-xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;