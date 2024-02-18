import styles from "./Buttons.module.css";

export function FunctionButton({ value, onClick, label, type }) {
  const handleButtonClick = () => {
    onClick(value, type);
  };

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

export function NummericButton({ value, onClick, label, type }) {
  const handleButtonClick = () => {
    onClick(value, type);
  };

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

export function OperatorButton({ value, onClick, label, type }) {
  const handleButtonClick = () => {
    onClick(value, type);
  };
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

export function SpecialButton({ value, onClick, label, type }) {
  const handleButtonClick = () => {
    onClick(value, type);
  };

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
