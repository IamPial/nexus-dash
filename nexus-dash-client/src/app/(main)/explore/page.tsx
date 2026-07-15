import { FiSearch } from "react-icons/fi";
import { getAllExploreItems, type ExploreItem } from "@/lib/api/explore";
import { 
  Select, 
  Label, 
  ListBox 
} from "@heroui/react";
import TravelCard from "@/components/TravelCard";



const ExplorePage = async () => {
 const exploreData = await getAllExploreItems()

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        

        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Explore <span className="text-[#4f46e5]">Destinations</span>
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl">
            Discover premium travel experiences tailored just for you. Explore and book your next adventure.
          </p>
        </div>

    
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
       
            <div className="md:col-span-5 space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Search Destination</label>
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
                <FiSearch className="text-slate-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="e.g., Maldives, Ski, Safari..."
                  className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none"
                  disabled
                />
              </div>
            </div>

     
     <div className="md:col-span-3 space-y-1.5">
      <Select  className="w-full">
 
        <Label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
          Category
        </Label>


        <Select.Trigger className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-700 flex items-center justify-between outline-none hover:bg-slate-100/70 focus-within:border-[#4f46e5] transition-colors cursor-pointer">
          <Select.Value className="text-sm font-medium" />
          <Select.Indicator className="text-slate-400 text-xs ml-2" />
        </Select.Trigger>



        <Select.Popover className="bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden mt-1 p-1 min-w-50">
          <ListBox className="p-0">
  
            <ListBox.Item 
              id="Beach" 
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors data-[selected=true]:text-[#4f46e5] data-[selected=true]:bg-indigo-50/50"
            >
              <Label className="cursor-pointer font-medium">Beach & Resort</Label>
              
              <ListBox.ItemIndicator />
            </ListBox.Item>

   
            <ListBox.Item 
              id="City" 
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors data-[selected=true]:text-[#4f46e5] data-[selected=true]:bg-indigo-50/50"
            >
              <Label className="cursor-pointer font-medium">City & Romance</Label>
            
              <ListBox.ItemIndicator />
            </ListBox.Item>


            <ListBox.Item 
              id="Culture" 
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors data-[selected=true]:text-[#4f46e5] data-[selected=true]:bg-indigo-50/50"
            >
              <Label className="cursor-pointer font-medium">Culture & Heritage</Label>
              
              <ListBox.ItemIndicator />
            </ListBox.Item>


            <ListBox.Item 
              id="Adventure" 
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors data-[selected=true]:text-[#4f46e5] data-[selected=true]:bg-indigo-50/50"
            >
              <Label className="cursor-pointer font-medium">Adventure</Label>
             
              <ListBox.ItemIndicator />
            </ListBox.Item>

          </ListBox>
        </Select.Popover>
      </Select>
    </div>

     
            <div className="md:col-span-4 space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Sort By</label>
              <select disabled className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-400 outline-none">
                <option>Featured</option>
              </select>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreData .map((item: ExploreItem) => (
            <TravelCard key={item._id} travelData={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExplorePage;