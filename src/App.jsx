import styles from "./App.module.css";
import { Display } from "./components/Display/Display";

function App() {
  return (
    <>
      <div className={styles.calculatorView}>
        <div className={styles.viewport}>
          <Display />
        </div>
      </div>
    </>
  );
}

export default App;
