import styles from "./Keypad.module.css";

export function Keypad() {
  return (
    <div className={styles.container}>
      <button className={styles.fxKey}>1</button>
      <button className={styles.numericKey}>1</button>

      <div className={styles.operators}>
        <button className={styles.opKey}>1</button>
      </div>
    </div>
  );
}
