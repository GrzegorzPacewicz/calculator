import { FunctionButton, OpButton, SpecialButton } from "../Button/Buttons";
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

  return (
    <div className={styles.container}>
      <div className={styles.functionButtons}></div>
      {functionKeys.map((functionKey) => (
        <FunctionButton
          key={functionKey.label}
          label={functionKey.label}
          value={functionKey.value}
          onClick={handleClickButton}
        />
      ))}
      <div className={styles.operators}></div>
    </div>
  );
}
