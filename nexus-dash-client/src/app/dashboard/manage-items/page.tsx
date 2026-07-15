import { Button } from "@heroui/react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { getDestinations, type ExploreItem } from "@/lib/api/explore";
import ItemsTable from "@/components/ItemsTable";
import { DeleteModal } from "@/components/DeleteModal";


const ManageItemsPage = async () => {
  const filteredItems = await getDestinations();


  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Manage Items</h1>
          <p className="text-sm text-slate-500">View, monitor, and delete active travel packages.</p>
        </div>
        <Link href="/add-items">
          <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold rounded-xl px-4 py-2 flex items-center gap-2 shadow-md transition-colors cursor-pointer">
            <FiPlus size={18} /> Add New Item
          </Button>
        </Link>
      </div>

      <div className="bg-white border border-slate-200/60 rounded-2xl shadow-lg overflow-hidden">
        <ItemsTable items={filteredItems} />

        <div className=" p-4 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#0f172a] md:text-4xl font-bold">You haven&apos;t created any destinations!</div>
          ) : ( 
            filteredItems.map((item: ExploreItem) => (
              <div key={item._id} className="border border-slate-100 rounded-xl p-4 flex flex-col gap-3 shadow-sm bg-white  md:hidden">
                <div className="flex gap-3">
                  {item.image && (
                    <div className="relative w-14 h-14 overflow-hidden rounded-xl border border-slate-200 shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-slate-900 text-sm truncate">{item.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">{item.description}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-slate-50 pt-2.5 mt-1">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Price / Duration</span>
                    <span className="text-sm font-bold text-slate-800">${item.price}</span>
                    <span className="text-xs text-slate-500 ml-2">{item.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/items/view/${item._id}`}>
                      <Button size="sm" className="bg-slate-100 text-slate-700 font-medium rounded-lg px-3 py-1.5 text-xs cursor-pointer">
                        View
                      </Button>
                    </Link>
                    <DeleteModal destinations={item}/>
                  </div>
                </div>
              </div>
            ))
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ManageItemsPage;