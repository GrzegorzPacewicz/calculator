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

export function OperatorButton({ value, handleButtonClick, label }) {
  return (
    <button
      name={value}
      className={styles.operatorButton}
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
