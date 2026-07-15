'use server'

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

export const createExploreItems = async(exploreData:ExploreItems)=>{
    const res = await fetch(`${baseURl}/api/explore`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(exploreData)
    })

    const data = await res.json()
    return data
}