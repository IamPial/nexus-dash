

const baseURl = process.env.NEXT_PUBLIC_API_URL;

export interface ExploreItem {
  _id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  date: string;
  image?: string;
  location: string;
  category: string;
  rating?: string;
}


//get all explore items
//get all explore items
export const getAllExploreItems = async (options?: { limit?: number }): Promise<ExploreItem[]> => {
  const query = options?.limit ? `?limit=${options.limit}` : "";
  const res = await fetch(`${baseURl}/api/explore${query}`);
  const data = await res.json();
  return data;
};


//get explore items details
export const getExploreItemsDetails = async(id: string): Promise<ExploreItem> =>{
  const res = await fetch(`${baseURl}/api/explore/${id}`)
  const data = await res.json()
  return data
}
