import styles from "./Buttons.module.css";

export function FunctionButton({ value, onClick, label }) {
  return (
    <button name={value} className={styles.functionButton} onClick={onClick}>
      {label}
    </button>
  );
}

export function NummericButton({ value, onClick, label }) {
  return (
    <button name={value} className={styles.numericButton} onClick={onClick}>
      {label}
    </button>
  );
}

export function OperatorButton({ value, onClick, label }) {
  return (
    <button name={value} className={styles.operatorButton} onClick={onClick}>
      {label}
    </button>
  );
}

export function SpecialButton({ value, onClick, label }) {
  return (
    <button name={value} className={styles.specialButton} onClick={onClick}>
      {label}
    </button>
  );
}
