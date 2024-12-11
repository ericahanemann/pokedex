import styles from "./PokeballIcon.module.css";

export default function PokeballIcon() {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.upperHalfExternalCircle}></div>
      <div className={styles.middleStripe}></div>
      <div className={styles.internalCircleContainer}>
        <div className={styles.internalCircle}></div>
      </div>
      <div className={styles.bottomHalfExternalCircle}></div>
    </div>
  );
}
