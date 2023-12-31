import { CatAbout } from "@/app/lib/entities";
import Image from "next/image";
import React from "react";
import Bars from "../components/bar/bar";
import { Paragraphe, Text2, Title } from "../components/typography/text";

import styles from "./cat-about.module.css";

export default function Cat({ data }: { data: any }) {
  const { catAbout, catImages }: { catAbout: CatAbout; catImages: string[] } =
    data;
  const [firstImage, ...rest] = catImages;
  return (
    <>
      <div className={`${styles.container}`}>
        <Description catAbout={catAbout} firstImage={firstImage} />
        <div className="mt-3">
          <Title>Other photos</Title>
          <div className={styles.imageGallery}>
            {rest?.length > 0 &&
              rest.map((item) => {
                return (
                  <>
                    <img src={item} />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

function Description({
  catAbout,
  firstImage,
}: {
  catAbout: CatAbout;
  firstImage: string;
}) {
  return (
    <>
      <div className={styles.catabout}>
        <div className={styles.containerFirstImage}>
          <div className={styles.firstImage}>
            <img src={firstImage} alt="cat image" />
          </div>
          <div className={styles.borderLeft}></div>
        </div>
        <div>
          <Title>{catAbout.name}</Title>
          <div className="mt-2">
            <Paragraphe>{catAbout.description}</Paragraphe>
          </div>
          <div className={styles.flex}>
            <div className="mt-1pt">
              <Text2>Temperament:&nbsp;&nbsp;</Text2>
              <Paragraphe>{catAbout.temperament}</Paragraphe>
            </div>
          </div>
          <div className={styles.flex}>
            <Text2>Origin:&nbsp;&nbsp;</Text2>
            <Paragraphe>{catAbout.origin}</Paragraphe>
          </div>
          <div className={styles.flex}>
            <Text2>Life Span:&nbsp;&nbsp;</Text2>
            <Paragraphe>{catAbout.lifeSpan}</Paragraphe>
          </div>

          <div className={styles.barcontainer}>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Adaptability:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.adaptability}></Bars>
            </div>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Affection level:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.affectionLevel}></Bars>
            </div>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Child Friendly:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.childFriendly}></Bars>
            </div>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Grooming:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.grooming}></Bars>
            </div>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Intelligence:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.intelligence}></Bars>
            </div>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Health issues:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.healthIssues}></Bars>
            </div>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Social needs:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.socialNeeds}></Bars>
            </div>
            <div className={styles.bar}>
              <div className={styles.label}>
                <Text2>Stranger friendly:&nbsp;&nbsp;</Text2>
              </div>
              <Bars count={catAbout.strangerFriendly}></Bars>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
