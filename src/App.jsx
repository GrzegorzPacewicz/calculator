import styles from "./App.module.css";
import { Display } from "./components/Display/Display";
import { Keypad } from "./components/Keypad/Keypad";

function App() {
  const handleActionToPerform = () => {};
  const isScreenClear = () => {};

  return (
    <>
      <div className={styles.calculatorView}>
        <div className={styles.viewport}>
          <Display />
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
