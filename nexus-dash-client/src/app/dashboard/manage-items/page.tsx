"use client";

import React, { useState } from "react";
import { Button, Table } from "@heroui/react";
import { motion } from "framer-motion";
import { FiEye, FiTrash2, FiSearch, FiPlus } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

// ১. আইটেমের ইন্টারফেস স্ট্রাকচার
interface Item {
  id: string;
  title: string;
  shortDescription: string;
  price: string;
  date: string;
  imageUrl?: string;
}

// ২. ডামি ডাটা (আপনার ট্রাভেল ড্যাশবোর্ডের সাথে সামঞ্জস্যপূর্ণ)
const initialItems: Item[] = [
  {
    id: "1",
    title: "Luxury Beach Resort Package",
    shortDescription: "5 days all-inclusive premium stay at Maldives.",
    price: "1299",
    date: "2026-08-12",
    imageUrl: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=150",
  },
  {
    id: "2",
    title: "Alpine Ski Adventure",
    shortDescription: "Thrilling ski experience in the Swiss Alps.",
    price: "899",
    date: "2026-12-05",
    imageUrl: "https://images.unsplash.com/photo-1551632613-eb1e8f6f95e0?q=80&w=150",
  },
  {
    id: "3",
    title: "Kyoto Cultural Tour",
    shortDescription: "Explore historical temples and traditional tea houses.",
    price: "650",
    date: "2026-10-20",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=150",
  },
];

const ManageItemsPage = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [searchQuery, setSearchQuery] = useState("");

 
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const handleDelete = (id: string, title: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${title}"?`);
    if (confirmDelete) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 bg-slate-50 min-h-screen space-y-6 text-slate-950"
    >
      {/* হেডার সেকশন */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Manage Items</h1>
          <p className="text-sm text-slate-500">View, monitor, and delete active travel packages.</p>
        </div>
        <Link href="/dashboard/add-items">
          <Button
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold rounded-xl px-4 py-2 flex items-center gap-2 shadow-md transition-colors cursor-pointer"
          >
            <FiPlus size={18} /> Add New Item
          </Button>
        </Link>
      </div>

   

      <div className="bg-white border border-slate-200/60 rounded-2xl shadow-xl overflow-hidden">

        <div className="hidden md:block">
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Items Management Table" className="min-w-full">
                <Table.Header>
                  <Table.Column className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4 pl-6">
                    Item Info
                  </Table.Column>
                  <Table.Column className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4">
                    Price
                  </Table.Column>
                  <Table.Column className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4">
                    Relevant Date
                  </Table.Column>
                  <Table.Column className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4 pr-6 text-right">
                    Actions
                  </Table.Column>
                </Table.Header>
                <Table.Body
                  items={filteredItems}
                >
                  {(item) => (
                    <Table.Row
                      key={item.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                    >
                      <Table.Cell className="py-4 pl-6">
                        <div className="flex items-center gap-3">
                          {item.imageUrl ? (
                            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-slate-200">
                              <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-bold text-xs">
                              No Img
                            </div>
                          )}
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm max-w-[280px] truncate">{item.title}</h4>
                            <p className="text-xs text-slate-400 max-w-70 truncate">{item.shortDescription}</p>
                          </div>
                        </div>
                      </Table.Cell>

                      <Table.Cell className="font-semibold text-slate-800 text-sm">
                        ${item.price}
                      </Table.Cell>

                      <Table.Cell className="text-sm text-slate-500">{item.date}</Table.Cell>

                      <Table.Cell className="py-4 pr-6 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/items/view/${item.id}`}>
                            <Button size="sm" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg p-2 min-w-0 transition-colors cursor-pointer">
                              <FiEye size={16} />
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            onClick={() => handleDelete(item.id, item.title)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-lg p-2 min-w-0 transition-colors cursor-pointer"
                          >
                            <FiTrash2 size={16} />
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>

        <div className="block md:hidden p-4 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-sm text-slate-400">No items found.</div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.id} className="border border-slate-100 rounded-xl p-4 flex flex-col gap-3 shadow-sm bg-white">
                <div className="flex gap-3">
                  {item.imageUrl && (
                    <div className="relative w-14 h-14 overflow-hidden rounded-xl border border-slate-200 shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-slate-900 text-sm truncate">{item.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">{item.shortDescription}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-slate-50 pt-2.5 mt-1">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Price / Date</span>
                    <span className="text-sm font-bold text-slate-800">${item.price}</span>
                    <span className="text-xs text-slate-500 ml-2">({item.date})</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/items/view/${item.id}`}>
                      <Button size="sm" className="bg-slate-100 text-slate-700 font-medium rounded-lg px-3 py-1.5 text-xs cursor-pointer">
                        View
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      onClick={() => handleDelete(item.id, item.title)}
                      className="bg-red-50 text-red-600 font-medium rounded-lg px-3 py-1.5 text-xs cursor-pointer"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default ManageItemsPage;