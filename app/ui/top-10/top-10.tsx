import React from "react";
import { getTop10 } from "@/app/lib/dbAccess";
import { Paragraphe, Title } from "../components/typography/text";

import styles from "./top-10.module.css";
import { Cat } from "@/app/lib/entities";
import Link from "next/link";

export default async function Top10() {
  const cats = await getTop10();
  return (
    <div className={styles.container}>
      <Title>Top 10 most searched breeds</Title>
      {cats?.length > 0 &&
        cats.map((cat, key) => {
          return (
            <React.Fragment key={key}>
              <Cat cat={cat} id={key} />
            </React.Fragment>
          );
        })}
    </div>
  );
}
function Cat({ cat, id }: { cat: Cat; id: number }) {
  return (
    <>
      <Link href={`/cat/${cat.name}`} className={styles.catcontainer}>
        <div className={styles.image}>
          <img src={cat.imageUrl} alt="cat image" />
        </div>
        <div className={styles.description}>
          <Title>
            {id + 1}. {cat.name}
          </Title>
          <Paragraphe>{cat.description}</Paragraphe>
        </div>
      </Link>
    </>
  );
}
