"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { FiTrendingUp, FiUsers, FiGlobe, FiDollarSign } from "react-icons/fi";

const chartData = [
  { name: "Jan", Bookings: 40, Revenue: 2400 },
  { name: "Feb", Bookings: 30, Revenue: 1398 },
  { name: "Mar", Bookings: 60, Revenue: 5800 },
  { name: "Apr", Bookings: 50, Revenue: 3908 },
  { name: "May", Bookings: 80, Revenue: 7800 },
  { name: "Jun", Bookings: 70, Revenue: 4800 },
];

const DashboardPage = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6 text-slate-950">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-500">Welcome back! Here is a summary of NexusDash today.</p>
        </div>
        <div className="text-sm font-semibold bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm">
          July 2026
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Revenue</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">$26,106</h3>
          </div>
          <div className="p-3 bg-indigo-50 text-[#4f46e5] rounded-xl">
            <FiDollarSign size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Bookings</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">330</h3>
          </div>
          <div className="p-3 bg-indigo-50 text-[#4f46e5] rounded-xl">
            <FiTrendingUp size={22} />
          </div>
        </div>


        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Users</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">1,204</h3>
          </div>
          <div className="p-3 bg-indigo-50 text-[#4f46e5] rounded-xl">
            <FiUsers size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Destinations</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">45</h3>
          </div>
          <div className="p-3 bg-indigo-50 text-[#4f46e5] rounded-xl">
            <FiGlobe size={22} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm lg:col-span-2 flex flex-col gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Revenue Analytics</h3>
            <p className="text-xs text-slate-400">Monthly breakdown of overall income stream</p>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="#94a3b8" fontSize={12} />
                <YAxis tickLine={false} axisLine={false} stroke="#94a3b8" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                  labelStyle={{ fontWeight: "bold", color: "#0f172a" }}
                />
                <Area type="monotone" dataKey="Revenue" stroke="#4f46e5" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Booking Activity</h3>
            <p className="text-xs text-slate-400">Comparison of successful tour reservations</p>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="#94a3b8" fontSize={12} />
                <YAxis tickLine={false} axisLine={false} stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                  cursor={{ fill: "#f8fafc" }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
                <Bar dataKey="Bookings" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;