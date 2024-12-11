import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.firstRectangle}>
        <div className={styles.bigLight}></div>

        <div className={styles.smallLightsContainer}>
          <div className={styles.smallLightsItem}></div>
          <div className={styles.smallLightsItem}></div>
          <div className={styles.smallLightsItem}></div>
        </div>
      </div>
      <div className={styles.secondRectangle}></div>
      <div className={styles.thirdRectangle}></div>
    </div>
  );
}
