import React from "react";
import CatDiscovery from "./cat-discovery/cat-discovery";
import CatSearched from "./cat-searched/cat-searched";
import CatWhyHaving from "./cat-why-having/cat-why-having";
import Logo from "../components/logo/logo";
import Footer from "../components/footer/footer";
import styles from "./../../styles/Home.module.css";
export default function LandingPage() {
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <div>
          <CatDiscovery />
          <CatSearched />
          <CatWhyHaving />
        </div>
      </div>
      <Footer />
    </>
  );
}
