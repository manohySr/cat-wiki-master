import Image from "next/image";

import src from "./../../../../public/assests/CatwikiLogo.svg";

import styles from "./logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image src={src} height={48} width={144} alt="" priority />
        </Link>
      </div>
    </>
  );
}
