import {
  FunctionButton,
  NummericButton,
  OpButton,
  SpecialButton,
} from "../Button/Buttons";
import styles from "./Keypad.module.css";

export function Keypad(props) {
  const { actionToPerform, allClear } = props;
  const handleClickButton = (value, keyType) => {
    actionToPerform(value, keyType);
  };

  const functionKeys = [
    { label: allClear ? "AC" : "C", value: allClear ? "AC" : "C" },
    { label: "±", value: "+/-" },
    { label: "%", value: "%" },
  ];

  const numericKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const operatorKeys = [
    { label: "÷", value: "/" },
    { label: "×", value: "x" },
    { label: "-", value: "-" },
    { label: "+", value: "+" },
    { label: "=", value: "=" },
  ];

  const lastRowKeys = [
    {
      label: "0",
      value: "0",
      type: "numeric",
      buttonStyle: "numeric-key special",
    },
    { label: "·", value: ".", type: "fx", buttonStyle: "numeric-key" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.keysWrapper}>
        {functionKeys.map((functionKey) => (
          <FunctionButton
            key={functionKey.label}
            label={functionKey.label}
            value={functionKey.value}
            onClick={handleClickButton}
          />
        ))}

        {numericKeys.map((numericKey) => (
          <NummericButton
            key={numericKey}
            label={numericKey}
            value={numericKey}
            onClick={handleClickButton}
          />
        ))}
        {/* 
        {lastRowKeys.map((lastRowKey) => (
          <NummericButton
            key={lastRowKey.label}
            label={lastRowKey.label}
            value={lastRowKey.value}
            onClick={handleClickButton}
          />
        ))} */}
        <SpecialButton label={0} onClick={handleClickButton} />
        <NummericButton label={"."} onClick={handleClickButton} />
      </div>
      <div className={styles.operators}>
        {operatorKeys.map((operatorKey) => (
          <OpButton
            key={operatorKey.label}
            label={operatorKey.label}
            value={operatorKey.value}
            onClick={handleClickButton}
          />
        ))}
      </div>
    </div>
  );
}
