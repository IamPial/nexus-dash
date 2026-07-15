

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
export const getAllExploreItems = async (): Promise<ExploreItem[]> => {
  const res = await fetch(`${baseURl}/api/explore`);
  const data = await res.json();
  return data;
};
