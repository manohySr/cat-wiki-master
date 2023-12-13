import { getTop10 } from "@/app/lib/dbAccess";

export async function GET(request: Request) {
  try {
    const data = await getTop10();
    return new Response(
      JSON.stringify({
        stauts: "success",
        data,
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
