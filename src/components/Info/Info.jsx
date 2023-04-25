import styles from "./Info.module.css";

const Info = ({ closeInfo }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.infoBlock}>
        <h3>Rules</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo,
            nisi, obcaecati reiciendis quia ad nihil accusamus porro cupiditate
            voluptatum deleniti repudiandae eum soluta magnam minima deserunt,
            dolores aut. Ad.
          </p>
        </div>
        <button onClick={closeInfo}>Ok</button>
      </div>
    </div>
  );
};

export default Info;
