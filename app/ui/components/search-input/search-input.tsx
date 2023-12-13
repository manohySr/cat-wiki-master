import styles from "./search-input.module.css";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <>
      <div className={styles.container}>
        <input placeholder={placeholder} className={styles.input} />
        <IoSearchSharp className={styles.icon} />
      </div>
    </>
  );
}
