import React from 'react';
import TravelCard from '../TravelCard';
import { getAllExploreItems, type ExploreItem } from "@/lib/api/explore";

const FeaturesSection = async () => {
  const exploreData = await getAllExploreItems({limit:8})
  return (
      <div className="bg-slate-50 min-h-screen text-slate-900 py-10 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-8">
              
      
              <div className="text-center md:text-left space-y-2">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Features Destinations
                </h1>
                <p className="text-sm text-slate-500 max-w-2xl">
                  Discover premium travel experiences tailored just for you. Explore and book your next adventure.
                </p>
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

export default FeaturesSection;