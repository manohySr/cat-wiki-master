import { CatAbout, RandomImage } from "./entities";

const CAT_URI = process.env.CAT_URI as string;
let cachedData: Map<string, CatAbout> | null = null; // cache for the cat about
async function getNameToIdMap() {
  if (cachedData) {
    console.log("efa cache io e");
    return cachedData;
  }

  const nameToIdMap = new Map<string, CatAbout>();
  try {
    const response = await fetch(CAT_URI, { cache: "force-cache" });
    const data = await response.json();
    data.forEach((cat: any) => {
      const catAbout: CatAbout = {
        id: cat.id,
        name: cat.name,
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
      // Cache the data
      console.log("Ho cachéna e");
      cachedData = nameToIdMap;
    });
  } catch (error) {
    console.log(error);
  }
  return nameToIdMap;
}

async function getCatAbout(name: string): Promise<CatAbout | undefined> {
  const nameToIdMap = await getNameToIdMap();
  const catAbout = nameToIdMap.get(name);
  return catAbout;
}

const image_uri = process.env.IMAGES_URI;
const imageCache: Map<string, string[]> = new Map(); // cache for the image
const fetchCatImages = async (id: string): Promise<string[]> => {
  // Check if images are already in the cache
  if (imageCache.has(id)) {
    console.log("efa cache io e");
    return imageCache.get(id) || [];
  }

  const response = await fetch(`${image_uri}${id}`, { cache: "force-cache" });
  const data = await response.json();
  const images = data.map((image: any) => image.url);
  imageCache.set(id, images); //cahing

  return images;
};

export { getNameToIdMap, getCatAbout, fetchCatImages };
