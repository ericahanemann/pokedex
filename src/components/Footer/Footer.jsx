import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <p>
          &copy; {new Date().getFullYear()} érica vanessa hanemann. all rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
