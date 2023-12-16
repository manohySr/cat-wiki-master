import { Cat, CatAbout } from "./entities";

export const mapDocumentToCat = (doc: any): Cat => {
  return {
    _id: doc._id,
    name: doc.name || "",
    description: doc.description || "",
    imageUrl: doc.imageUrl || "",
    popularity: doc.popularity || 0,
  };
};
