import styles from "./Header.module.css";

const Header = ({ openInfo }) => {
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <button className={styles.buttonInfo} onClick={openInfo}>
          info
        </button>
      </div>
      <div className={styles.title}>
        <h2>Card Game</h2>
      </div>
      <div className={styles.test}>
        <p>Log In</p>
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default Header;
