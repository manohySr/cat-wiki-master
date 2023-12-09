import { getNameToIdMap } from "@/app/lib/data";

export async function GET(request: Request) {
  try {
    const data = await getNameToIdMap();
    const catName = Array.from(data.keys());
    return new Response(
      JSON.stringify({
        stauts: "success",
        data: catName,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        stauts: "fail",
      })
    );
  }
}

// I should have access to :
//   description
//   temperament
//   Origin
//   Life Span
//   sur une note sur 5:
//   Adaptability
//   Affection level
//   Child Friendly
//   Grooming
//   Intelligence
//   Health issues
//   Social needs
//   Stranger friendly
//    => (from the original api)
//   Other image:  https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=abys
