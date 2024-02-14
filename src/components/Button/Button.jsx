import styles from "./Button.module.css";

export function Button({ value, handleButtonClick, label }) {
  return (
    <button name={value} className={styles.button} onClick={handleButtonClick}>
      {label}
    </button>
  );
}
