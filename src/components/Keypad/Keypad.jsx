import { Button } from "../Button/Button";
import styles from "./Keypad.module.css";

export function Keypad() {
  return (
    <div className={styles.container}>
      <div className={styles.keys}>
        <Button label={2} />
      </div>

      <div className={styles.operators}>Operators</div>
    </div>
  );
}
