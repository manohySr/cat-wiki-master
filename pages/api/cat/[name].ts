import { fetchCatImages, getCatAbout } from "@/app/lib/data";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let catName = req.query.name as string;
    if (!catName) {
      throw new Error("your dumb searching nothing");
    }

    const catAbout = await getCatAbout(catName);

    if (!catAbout) {
      throw new Error("No data found for the given cat name");
    }
    const catImages: string[] = await fetchCatImages(catAbout.id);

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
  }
}
