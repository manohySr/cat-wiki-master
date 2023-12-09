import SearchInput from "../../components/search-input/search-input";
import { TextWhite1 } from "../../components/typography/text";
import styles from "./cat-discovery.module.css";

export default function CatDiscovery() {
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
            <SearchInput placeholder={"Enter your breed"} />
          </div>
        </div>
      </div>
    </>
  );
}
