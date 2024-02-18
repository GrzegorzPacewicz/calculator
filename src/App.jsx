import { useState } from "react";
import styles from "./App.module.css";
import { Display } from "./components/Display/Display";
import { Keypad } from "./components/Keypad/Keypad";

function App() {
  const [accValue, setAccValue] = useState(null);
  const [screenValue, setScreenValue] = useState("0");
  const [currentOperator, setCurrentOperator] = useState(null);
  const [expectsOperand, setExpectsOperand] = useState(false);

  const handleActionToPerform = () => {};
  const isScreenClear = () => {};

  return (
    <>
      <div className={styles.calculatorView}>
        <div className={styles.viewport}>
          <Display value={screenValue} />
          <Keypad
            actionToPerform={handleActionToPerform}
            allClear={isScreenClear}
          />
        </div>
      </div>
    </>
  );
}

export default App;
