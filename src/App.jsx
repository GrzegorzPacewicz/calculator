import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Display } from "./components/Display/Display";
import { Keypad } from "./components/Keypad/Keypad";

function App() {
  const [accumulativeValue, setAccumulativeValue] = useState(null);
  const [screenValue, setScreenValue] = useState("0");
  const [currentOperator, setCurrentOperator] = useState(null);
  const [expectsOperand, setExpectsOperand] = useState(false);

  const handleActionToPerform = (value, keyType) => {
    switch (keyType) {
      case "fx":
        handleClickFunctionKey(value);
        break;
      case "numeric":
        handleClickNumericKey(value);
        break;
      case "operator":
        handleClickOperator(value);
        break;
    }
  };
  const handleClickFunctionKey = (value) => {
    switch (value) {
      case "AC":
        allClear();
        break;
      case "C":
        clearScreen();
        break;
      case "+/-":
        reverseSign();
        break;
      case "%":
        percentage();
        break;
      case ".":
        addDecimalPoint();
        break;
    }
  };

  const allClear = () => {
    setAccumulativeValue(null);
    setScreenValue("0");
    setCurrentOperator(null);
    setExpectsOperand(false);
  };

  const clearScreen = () => {
    setScreenValue("0");
  };

  const isScreenClear = screenValue === "0";

  const reverseSign = () => {
    setScreenValue(String(-parseFloat(screenValue)));
  };

  const percentage = () => {
    setScreenValue(String(parseFloat(screenValue) / 100));
  };

  const addDecimalPoint = () => {
    if (expectsOperand) {
      setScreenValue("0.");
    } else {
      if (!screenValue.includes(".")) setScreenValue(screenValue + ".");
    }
    setExpectsOperand(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  //removed dependency in useEffect , [screenValue]

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      clearLastDigit();
    }
  };

  const clearLastDigit = () => {
    if (screenValue !== "0")
      if (screenValue.length > 1) setScreenValue("0");
      else {
        setScreenValue(screenValue.substring(0, screenValue.length - 1));
      }
  };

  const handleClickNumericKey = (value) => {
    if (expectsOperand) {
      setScreenValue(String(value));
      setExpectsOperand(false);
    } else
      setScreenValue(screenValue === "0" ? String(value) : screenValue + value);
  };

  const handleClickOperator = (operator) => {
    const inputValue = parseFloat(screenValue);

    if (accumulativeValue === null) {
      setAccumulativeValue(0);
    } else {
      if (currentOperator) {
        if (currentOperator === "/" && inputValue === 0) {
          return;
        }
        const resultValue = operate(
          currentOperator,
          accumulativeValue,
          inputValue
        );
        setAccumulativeValue(resultValue);
        setScreenValue(String(resultValue));
      }
    }

    setExpectsOperand(true);
    setCurrentOperator(operator);
  };

  const operate = (operator, accValue, inputValue) => {
    switch (operator) {
      case "+":
        return accValue + inputValue;
      case "-":
        return accValue - inputValue;
      case "x":
        return accValue * inputValue;
      case "/":
        return accValue / inputValue;
      case "=":
        return inputValue;
    }
  };

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
