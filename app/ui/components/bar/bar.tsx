import React from "react";
import styles from "./bar.module.css";

const Bars = ({ count }: { count: number }) => {
  const normalizedCount = Math.max(1, Math.min(count, 5));

  const bars = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={`${styles.bar} ${
        index < normalizedCount ? `${styles.marron}` : `${styles.gray}`
      }`}
    ></div>
  ));

  return <div className={styles.container}>{bars}</div>;
};

export default Bars;
