import Image from "next/image";
import React from "react";
import NavButton from "../../components/button/nav-button";
import { Text1, Text2 } from "../../components/typography/text";
import BorderStyle from "../../components/utils/border-style";

import src from "./../../../../public/assests/images/image 1.png";
import styles from "./cat-searched.module.css";

const arr = [1, 2, 3, 4];

export default function CatSearched() {
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
        <NavButton title={"see more"} />
      </h1>
      <div className="mt-5 flex gap-5">
        {arr?.map((index) => (
          <React.Fragment key={index}>
            <div>
              <CatCard />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function CatCard() {
  return (
    <>
      <Image
        width={200}
        height={200}
        className={styles.cardImage}
        src={src}
        alt=""
      />
      <div className="mt-1">
        <Text2>Bengal</Text2>
      </div>
    </>
  );
}
