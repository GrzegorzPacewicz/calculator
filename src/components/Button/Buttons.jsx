import styles from "./Buttons.module.css";

export function FunctionButton({ value, handleButtonClick, label }) {
  return (
    <button
      name={value}
      className={styles.functionButton}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
}

export function NummericButton({ value, handleButtonClick, label }) {
  return (
    <button
      name={value}
      className={styles.numericButton}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
}

export function OpButton({ value, handleButtonClick, label }) {
  return (
    <button
      name={value}
      className={styles.opButton}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
}

export function SpecialButton({ value, handleButtonClick, label }) {
  return (
    <button
      name={value}
      className={styles.specialButton}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
}
