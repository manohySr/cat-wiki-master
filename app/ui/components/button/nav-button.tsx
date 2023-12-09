import styles from "./button.module.css";

export default function NavButton({ title }: { title: string }) {
  return (
    <div className={styles.button}>
      {title} <span className={styles.arrow}>&rarr;</span>
    </div>
  );
}
