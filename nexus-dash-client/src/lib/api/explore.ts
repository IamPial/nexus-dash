import { getTokenServer } from "../getToken";


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
interface ExploreQueryParams {
  limit?: number;
  search?: string;
  category?: string;
  sortBy?: string;
  priceLow?: number;
  priceHigh?: number;
}

export const getAllExploreItems = async (
  options?: ExploreQueryParams
): Promise<ExploreItem[]> => {
  const params = new URLSearchParams();
  if (options?.limit) params.set("limit", String(options.limit));
  if (options?.search) params.set("search", options.search);
  if (options?.category) params.set("category", options.category);
  if (options?.sortBy) params.set("sortBy", options.sortBy);
  if (options?.priceLow) params.set("priceLow", String(options.priceLow));
  if (options?.priceHigh) params.set("priceHigh", String(options.priceHigh));

  const query = params.toString() ? `?${params.toString()}` : "";
  const res = await fetch(`${baseURl}/api/explore${query}`, { cache: "no-store" });
  const data = await res.json();
  return data;
};


//get explore items details
export const getExploreItemsDetails = async(id: string): Promise<ExploreItem> =>{
  const res = await fetch(`${baseURl}/api/explore/${id}`)
  const data = await res.json()
  return data
}


//get destination by user
export const getDestinations = async (): Promise<ExploreItem[]> => {
  const token = await getTokenServer();
  const res = await fetch(`${baseURl}/api/explore/my-items`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
};


