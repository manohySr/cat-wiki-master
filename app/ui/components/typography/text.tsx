import styles from "./text.module.css";

export function Text1({ children }: { children: React.ReactNode }) {
  return <div className={styles.t1}>{children}</div>;
}

export function Text2({ children }: { children: React.ReactNode }) {
  return <div className={styles.t2}>{children}</div>;
}

export function TextWhite1({ children }: { children: React.ReactNode }) {
  return <div className={styles.tligth}>{children}</div>;
}

export function Title({ children }: { children: React.ReactNode }) {
  return <div className={styles.title}>{children}</div>;
}

export function Paragraphe({ children }: { children: React.ReactNode }) {
  return <div className={styles.paragraphe}>{children}</div>;
}
