import React from 'react';

 const StatsSection: React.FC = () => {
  const statItems = [
    { metric: "15k+", label: "Happy Wanderers" },
    { metric: "100%", label: "Verified Luxury Stays" },
    { metric: "4.9/5", label: "Top Customer Rating" },
    { metric: "24/7", label: "Live Concierge Support" }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200 relative z-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statItems.map((stat, i) => (
          <div key={i} className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-600">{stat.metric}</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;