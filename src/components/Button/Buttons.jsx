import styles from "./Buttons.module.css";

export function FunctionButton({ value, handleButtonClick, label, type }) {
  return (
    <button
      name={value}
      className={styles.functionButton}
      onClick={() => handleButtonClick(value, type)}
    >
      {label}
    </button>
  );
}

export function NummericButton({ value, handleButtonClick, label, type }) {
  return (
    <button
      name={value}
      className={styles.numericButton}
      onClick={() => handleButtonClick(value, type)}
    >
      {label}
    </button>
  );
}

export function OperatorButton({ value, handleButtonClick, label, type }) {
  return (
    <button
      name={value}
      className={styles.operatorButton}
      onClick={() => handleButtonClick(value, type)}
    >
      {label}
    </button>
  );
}

export function SpecialButton({ value, handleButtonClick, label, type }) {
  return (
    <button
      name={value}
      className={styles.specialButton}
      onClick={() => handleButtonClick(value, type)}
    >
      {label}
    </button>
  );
}
