'use server'

import { getTokenServer } from "../getToken";

const baseURl = process.env.NEXT_PUBLIC_API_URL

interface ExploreItems {
  title: string;
  description: string
  price: string,
  image?: string;
  location: string,
  duration:string
  category: string
}

//create Destinations
export const createExploreItems = async(exploreData:ExploreItems)=>{
    const token = await getTokenServer()
    const res = await fetch(`${baseURl}/api/explore`,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            authorization: `Bearer ${token}`
        },
        body:JSON.stringify(exploreData)
    })

    const data = await res.json()
    return data
}



interface DeleteItems {
  acknowledged: boolean;
  deletedCount: number;
}
//delete Destination

export const deleteDestinations = async(id : string): Promise<DeleteItems> =>{
    const token = await getTokenServer()
    const res = await fetch(`${baseURl}/api/explore/${id}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json",
            authorization:`Bearer ${token}`
        }
    })
    const data = await res.json()
    return data
}