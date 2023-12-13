import Image from "next/image";

import src from "./../../../../public/assests/CatwikiLogo.svg";

import styles from "./logo.module.css";

export default function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <Image src={src} height={48} width={144} alt="" priority />
      </div>
    </>
  );
}
