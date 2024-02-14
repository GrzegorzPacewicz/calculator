import styles from "./Display.module.css";

export function Display(value) {
  return (
    <div className={styles.display}>
      <input type="text" tabIndex={-1} value={value} />
    </div>
  );
}
