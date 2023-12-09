import Image from "next/image";
import NavButton from "../../components/button/nav-button";
import { Text1, Text2 } from "../../components/typography/text";
import BorderStyle from "../../components/utils/border-style";

import image1 from "./../../../../public/assests/images/image 1.png";
import image2 from "./../../../../public/assests/images/image 2.png";
import image3 from "./../../../../public/assests/images/image 3.png";

import styles from "./cat-why-having.module.css";

export default function CatWhyHaving() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div>
          <BorderStyle />
          <Text1>
            Why should you <br></br>have a cat?
          </Text1>
        </div>
        <div className="mt-4 w-500">
          <Text2>
            Having a cat around you can actually trigger the release of calming
            chemical in your body which lower your stress and axiety leves
          </Text2>
        </div>
        <div className="mt-4">
          <NavButton title={"Read More"} />
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.anotherLayout}>
          <Image src={image2} height={170} alt="" priority />
          <Image src={image1} width={180} alt="" priority />
        </div>
        <Image src={image3} width={220} alt="" priority />
      </div>
    </div>
  );
}
