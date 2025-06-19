import styles from "./CalBtns.module.css";

const CalBtns = ({ onButtonClicked }) => {
  let allButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {allButtons.map((btnName) => (
        <button
          key={btnName}
          className={`${styles.Abutton} ${"btn"}`}
          onClick={() => onButtonClicked(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default CalBtns;
