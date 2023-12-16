import { ObjectId } from "mongodb";

export interface CatAbout {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  lifeSpan: string;
  adaptability: number;
  affectionLevel: number;
  childFriendly: number;
  dogFriendly?: number; // Add properties as needed, this is just an example
  energyLevel?: number; // Another example property
  grooming: number;
  healthIssues: number;
  intelligence: number;
  sheddingLevel?: number; // Another example property
  socialNeeds: number;
  strangerFriendly: number;
  vocalisation?: number; // Another example property
  // Add other properties as needed
}

export interface Cat {
  _id: ObjectId;
  name: string;
  popularity: number;
  description: string;
  imageUrl: string;
}

export interface RandomImage {
  id: string;
  url: string;
  name: string;
}
