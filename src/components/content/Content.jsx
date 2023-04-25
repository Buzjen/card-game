import { useState } from "react";
import styles from "./Content.module.css";

const words = [
  {
    ru: "кот",
    en: "cat",
    counter: 0,
  },
  {
    ru: "собака",
    en: "dog",
    counter: 0,
  },
  {
    ru: "sol",
    en: "сол",
    counter: 0,
  },
  {
    ru: "алекс",
    en: "alex",
    counter: 0,
  },
  {
    ru: "вниз",
    en: "down",
    counter: 0,
  },
];

const Card = () => {
  const [choseWord, setChoseWord] = useState("");

  const answer = (e) => {
    setChoseWord(e.target.value);
    console.log(choseWord);
  };

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h2>Card</h2>
      </div>
      <div className={styles.game}>
        <div className={styles.wordDiv}>
          <h2 className={styles.word}>{words[0].en}</h2>
        </div>
        <div className={styles.input}>
          <input onChange={answer} value={choseWord} placeholder="..." />
        </div>
        <div className={styles.button}>
          <button onClick={() => {}}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
