import { getNameToIdMap } from "@/app/lib/hanlder";

export async function GET(request: Request) {
  try {
    const data = await getNameToIdMap();
    const catName = Array.from(data.keys());
    return new Response(
      JSON.stringify({
        status: "success",
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
