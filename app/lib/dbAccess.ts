import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.DB_URI as string;
const DB_NAME = process.env.DB_NAME;
let db: Db;
async function connectToDatabase(): Promise<Db> {
  if (!db) {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log("connected e");
    db = client.db(DB_NAME);
  }
  return db;
}

async function incrementPopularity(
  name: string,
  description: string,
  imageUrl: string
) {
  const database = await connectToDatabase();
  const catBreedsCollection = database.collection("cat");

  try {
    const result = await catBreedsCollection.findOneAndUpdate(
      { name: name },
      {
        $inc: { popularity: 1 },
        $set: { description: description, imageUrl: imageUrl },
      },
      { upsert: true, returnDocument: "after" }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getTop10() {
  const database = await connectToDatabase();
  const catBreedsCollection = database.collection("cat");

  const topCatBreeds = await catBreedsCollection
    .aggregate([{ $sort: { popularity: -1 } }, { $limit: 10 }])
    .toArray();

  return topCatBreeds;
}
export { incrementPopularity, getTop10 };
