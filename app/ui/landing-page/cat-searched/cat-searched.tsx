import Image from "next/image";
import React, { cache } from "react";
import NavButton from "../../components/button/nav-button";
import { Text1, Text2 } from "../../components/typography/text";
import BorderStyle from "../../components/utils/border-style";

import styles from "./cat-searched.module.css";
import { RandomImage } from "@/app/lib/entities";
import Link from "next/link";
import { getTop10 } from "@/app/lib/dbAccess";

const arr = [1, 2, 3, 4];

export default async function CatSearched() {
  const cats = await getTop10();
  return (
    <div className={styles.container}>
      <Text2>Most Searched Breed</Text2>
      <div className="mt-1">
        <BorderStyle />
      </div>
      <h1 className={`mt-2 ${styles.flex}`}>
        <Text1>
          66+ Breeds For you <br></br>to discover
        </Text1>
        <Link href={"/top10"} className={styles.navbutton}>
          <NavButton title={"see more"} />
        </Link>
      </h1>
      <div className={styles.catGrid}>
        {cats?.slice(0, 4).map((cat, key) => (
          <React.Fragment key={key}>
            <div>
              <CatCard src={cat.imageUrl} name={cat.name} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function CatCard({ src, name }: { src: string; name: string }) {
  return (
    <>
      <img
        className={styles.cardImage}
        src={src}
        loading="lazy"
        alt="cat image"
      />
      <div className="mt-1">
        <Text2>{name}</Text2>
      </div>
    </>
  );
}
