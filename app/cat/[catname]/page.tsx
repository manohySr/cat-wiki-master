import CatAbout from "@/app/ui/cat-about/cat-about";
import React from "react";
async function getData(catname: string) {
  try {
    const res = await fetch(`${process.env.API_LOCAL}/api/cat/${catname}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function Page({
  params,
}: {
  params: { catname: string };
}) {
  const res = await getData(params.catname);
  return (
    <>
      <div className="mt-3">{res?.data && <CatAbout data={res.data} />}</div>
    </>
  );
}
