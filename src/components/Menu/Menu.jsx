import styles from "./Menu.module.css";
import React, { useState, useCallback } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeLang = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={styles.Menu}>
      <div className={styles.selector}>
        <span className={styles.lang}>En / Ru</span>
        <button onClick={changeLang}>Select Language</button>
        {isOpen && (
          <ul className={styles.langList}>
            <li>English</li>
            <li>Russian</li>
          </ul>
        )}
      </div>
      <div className={styles.MenuTitle}>
        <h2>Menu</h2>
      </div>
      <div className={styles.NextCard}>
        <button>Next Card</button>
      </div>
    </div>
  );
};

export default Menu;
