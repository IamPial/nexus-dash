"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { FiSearch } from "react-icons/fi";

const CATEGORIES = [
  { id: "Beach & Resort", label: "Beach & Resort" },
  { id: "City & Romance", label: "City & Romance" },
  { id: "Culture & Heritage", label: "Culture & Heritage" },
  { id: "Adventure", label: "Adventure" },
];

const SORT_OPTIONS = [
  { id: "", label: "Featured" },
  { id: "priceAsc", label: "Price: Low to High" },
  { id: "priceDesc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
];

const ExploreFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      value ? params.set(key, value) : params.delete(key);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  // debounce করে search param আপডেট
  useEffect(() => {
    const timeout = setTimeout(() => updateParam("search", search), 400);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        <div className="md:col-span-5 space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Search Destination
          </label>
          <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
            <FiSearch className="text-slate-400 mr-2" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g., Maldives, Ski, Safari..."
              className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none"
            />
          </div>
        </div>

        <div className="md:col-span-3 space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Category</label>
          <select
            value={searchParams.get("category") ?? ""}
            onChange={(e) => updateParam("category", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-700 outline-none"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-4 space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Sort By</label>
          <select
            value={searchParams.get("sortBy") ?? ""}
            onChange={(e) => updateParam("sortBy", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-700 outline-none"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExploreFilters;