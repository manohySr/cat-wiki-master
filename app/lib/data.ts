import fs from "fs/promises";
import { CatAbout } from "./entities";

let cachedData: Map<string, CatAbout> | null = null; // cache for the cat about
async function getNameToIdMap() {
  if (cachedData) {
    console.log("efa cache io e");
    return cachedData;
  }

  const nameToIdMap = new Map<string, CatAbout>();
  let data: any = await fs.readFile("./public/data-mock.json");
  data = JSON.parse(data);
  data.forEach((cat: any) => {
    const catAbout: CatAbout = {
      id: cat.id,
      description: cat.description,
      temperament: cat.temperament,
      origin: cat.origin,
      lifeSpan: cat.life_span,
      adaptability: cat.adaptability,
      affectionLevel: cat.affection_level,
      childFriendly: cat.child_friendly,
      grooming: cat.grooming,
      intelligence: cat.intelligence,
      healthIssues: cat.health_issues,
      socialNeeds: cat.social_needs,
      strangerFriendly: cat.stranger_friendly,
    };
    nameToIdMap.set(cat.name, catAbout);
  });

  // Cache the data
  console.log("Ho cachéna e");
  cachedData = nameToIdMap;
  return nameToIdMap;
}

async function getCatAbout(name: string): Promise<CatAbout | undefined> {
  const nameToIdMap = await getNameToIdMap();
  const catAbout = nameToIdMap.get(name);
  return catAbout;
}

const imageCache: Map<string, string[]> = new Map(); // cache for the image
const fetchCatImages = async (id: string): Promise<string[]> => {
  // Check if images are already in the cache
  if (imageCache.has(id)) {
    console.log("efa cache io e");
    return imageCache.get(id) || [];
  }

  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}`
  );
  const data = await response.json();
  const images = data.map((image: any) => image.url);
  imageCache.set(id, images); //cahing

  return images;
};

export { getNameToIdMap, getCatAbout, fetchCatImages };
