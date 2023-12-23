import { MongoClient, Db, ServerApiVersion } from "mongodb";
import { Cat } from "./entities";
import { mapDocumentToCat } from "./utils";

const DB_URI_PROD = process.env.DB_URI_PROD as string;
const DB_NAME = process.env.DB_NAME;
let db: Db;
const COLLECTION = "cat";

async function connectToDatabase(): Promise<Db> {
  try {
    if (!db) {
      const client = new MongoClient(DB_URI_PROD, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

      // Connect the client to the server
      await client.connect();

      console.log("Connected to the database.");

      // Set the 'db' variable to the connected database
      db = client.db(DB_NAME);
    }

    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

async function incrementPopularity(
  name: string,
  description: string,
  imageUrl: string
) {
  const database = await connectToDatabase();
  const catBreedsCollection = database.collection(COLLECTION);

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

async function getTop10(): Promise<Cat[]> {
  try {
    const database = await connectToDatabase();
    const catBreedsCollection = database.collection(COLLECTION);

    const topCatBreedsDocuments = await catBreedsCollection
      .aggregate([{ $sort: { popularity: -1 } }, { $limit: 10 }])
      .toArray();

    const topCatBreeds: Cat[] = topCatBreedsDocuments.map(mapDocumentToCat);

    return topCatBreeds;
  } catch (error) {
    // Handle error
    console.error("Error fetching top 10 cat breeds:", error);
    return [];
  }
}
export { incrementPopularity, getTop10 };
