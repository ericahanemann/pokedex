import PokeballIcon from "../../components/PokeballIcon/PokeballIcon";
import styles from "./LoadingPage.module.css";

export default function LoadingPage() {
  return (
    <div className={styles.loadingPageContainer}>
      <div className={styles.iconContainer}>
        <PokeballIcon />
      </div>
    </div>
  );
}
