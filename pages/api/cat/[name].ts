import { incrementPopularity } from "@/app/lib/dbAccess";
import { CatAbout } from "@/app/lib/entities";
import { fetchCatImages, getCatAbout } from "@/app/lib/hanlder";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let catName = req.query.name as string;
  let catImages: string[] = [];
  let catAbout: CatAbout | undefined;
  try {
    if (!catName) {
      throw new Error("you dumb searching nothing");
    }

    catAbout = await getCatAbout(catName);

    if (!catAbout) {
      throw new Error("No data found for the given cat name");
    }
    catImages = await fetchCatImages(catAbout.id);

    res.status(200).json({
      status: "success",
      data: {
        catAbout,
        catImages,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "fail",
      message: error.stack,
    });
  } finally {
    if (catName && catAbout && res.statusCode === 200 && catImages[0]) {
      await incrementPopularity(catName, catAbout.description, catImages[0]);
    }
  }
}
