"use client";
import React from "react";
import SearchInput from "../../components/search-input/search-input";
import { TextWhite1 } from "../../components/typography/text";
import styles from "./cat-discovery.module.css";

export default function CatDiscovery() {
  const [catNames, setCatNames] = React.useState<string[]>([]);
  const [inputSearch, setInputSearch] = React.useState("");
  React.useEffect(() => {
    const fetchCatName = async () => {
      const res = await fetch("/api/cat");
      const { data } = await res.json();
      setCatNames(data);
    };
    fetchCatName();
  }, []);
  const handleChange = (e: any) => {
    setInputSearch(e.target.value.trim());
  };

  const filteredCatNames = catNames.filter((catName) =>
    catName.toLowerCase().includes(inputSearch.toLowerCase())
  );
  return (
    <>
      <div className={`${styles.container} mt-3`}>
        <div className={styles.discovery}>
          <div className={styles.logo}></div>
          <div className={"mt-1"}>
            <TextWhite1>
              Get to know more about your <br></br>cat breed
            </TextWhite1>
          </div>
          <div className="mt-4">
            <SearchInput
              placeholder={"Enter your breed"}
              onChange={handleChange}
              suggestions={filteredCatNames}
            />
          </div>
        </div>
      </div>
    </>
  );
}
