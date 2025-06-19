import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/display";
import CalBtns from "./components/CalBtns";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        let result = eval(calVal);
        setCalVal(result);
      } catch (error) {
        setCalVal("Error");
        setTimeout(() => {
          setCalVal("");
        }, 1500);
      }
    } else {
      let newDisplatVal = calVal + buttonText;
      setCalVal(newDisplatVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <CalBtns onButtonClicked={onButtonClicked} />
    </div>
  );
}

export default App;
