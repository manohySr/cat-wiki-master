import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        <span className={styles.copyright}>&copy;</span> created by{" "}
        <span className={styles.username}>ManohySr</span> - devChallenge.io 2021
      </div>
    </div>
  );
}
