import 'dotenv/config';
import express, {  type Express, type Request, type Response } from 'express';
import cors from 'cors';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

const app: Express = express();
const port = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


interface ExploreItems {
  title: string;
  description: string
  price: string,
  date:string,
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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("nexus-dash-db");

    const exploreCollection = db.collection("explore");




    //Explore related API
    app.get('/api/explore', async (req: Request, res: Response) => {
        const result = await exploreCollection.find().toArray();
        res.json(result); 
    });

    app.post('/api/explore', async(req:Request<{},{} ,ExploreItems>, res:Response)=>{
      const addItems = req.body
      const result = await exploreCollection.insertOne(addItems)
      res.json(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
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