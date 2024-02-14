import styles from "./App.module.css";
import { Display } from "./components/Display/Display";
import { Keypad } from "./components/Keypad/Keypad";

function App() {
  return (
    <>
      <div className={styles.calculatorView}>
        <div className={styles.viewport}>
          <Display />
          <Keypad />
        </div>
      </div>
    </>
  );
}

export default App;
