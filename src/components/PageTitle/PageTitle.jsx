import { NavLink } from "react-router";
import PokeballIcon from "../PokeballIcon/PokeballIcon";
import styles from "./PageTitle.module.css";

export default function PageTitle() {
  return (
    <NavLink to="/" className={styles.titleContainer}>
      <div className={styles.iconTitleContainer}>
        <PokeballIcon />
      </div>
      <h1 className={styles.title}>pokédex</h1>
    </NavLink>
  );
}
