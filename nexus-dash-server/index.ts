import 'dotenv/config';
import express, {  type Express, type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import { createRemoteJWKSet, jwtVerify } from 'jose-cjs';

const app: Express = express();
const port = process.env.PORT || 5000;

declare global {
  namespace Express {
    interface Request {
      user?: import('jose-cjs').JWTPayload;
    }
  }
}



app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


interface ExploreItems {
  title: string;
  description: string
  price: string,
  duration:string,
  image?: string;
  location: string,
  category: string
}



const uri: string  = process.env.MONGODB_URI as string;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const JWKS = createRemoteJWKSet(
  new URL(`${process.env.CLIENT_URL}/api/auth/jwks`),
);


const verifyToken = async (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    req.user = payload;
    console.log(req.user);
    next();
  } catch (error) {
    console.error("Token validation failed:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const db = client.db("nexus-dash-db");

    const exploreCollection = db.collection("explore");




    //Explore related API
  app.get('/api/explore', async (req: Request, res: Response) => {
   const limit = req.query.limit ? parseInt(req.query.limit as string) : 0;
   const { search, priceHigh, priceLow, category, sortBy } = req.query;

   let query: Record<string, any> = {};

   if (search && search !== 'undefined') {
     query.title = { $regex: search as string, $options: "i" };
   }

   if (category && category !== 'undefined') {
     query.category = category as string;
   }


   let sortOption: Record<string, 1 | -1> = {};
   if (sortBy === 'priceAsc') sortOption = { price: 1 };
   else if (sortBy === 'priceDesc') sortOption = { price: -1 };
   else if (sortBy === 'newest') sortOption = { _id: -1 };

   let cursor = exploreCollection.find(query);
   if (Object.keys(sortOption).length) cursor = cursor.sort(sortOption);
   if (Number(limit)) cursor = cursor.limit(Number(limit));

   const result = await cursor.toArray();
   res.json(result);
});

    app.get("/api/explore/my-items", verifyToken, async (req, res) => {
      const userId = req.user?.id;
      const result = await exploreCollection.find({ userId }).toArray();
      res.send(result);
    });
 
    app.post('/api/explore',verifyToken, async(req:Request<{},{} ,ExploreItems>, res:Response)=>{
       const userId = req.user?.id;
      const addItems = { ...req.body, userId };
      const result = await exploreCollection.insertOne(addItems)
      res.json(result)
    })

    app.get('/api/explore/:id', async(req: Request<{ id: string }>, res: Response)=>{
      const {id} = req.params
      const result = await exploreCollection.findOne({
        _id: new ObjectId(id)
      })
      res.send(result)
    })


    app.delete("/api/explore/:id", verifyToken, async (req:Request<{id:string}>, res:Response) => {
      const id = req.params.id;
      const result = await exploreCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    })
     


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch();




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});