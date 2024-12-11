import { useEffect } from "react";
import { NavLink } from "react-router";
import Tilt from "react-parallax-tilt";
import useData from "../../hooks/useData";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import styles from "./PokemonListItem.module.css";

export default function PokemonListItem({ pokemon }) {
  const { pokemonRequired, getPokemonByName, isLoading } = useData();

  useEffect(() => {
    getPokemonByName(pokemon.name);
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <Tilt
      tiltReverse={true}
      tiltMaxAngleX={6}
      tiltMaxAngleY={5}
      scale={1.02}
      glareMaxOpacity={0.2}
      glareColor="#919191"
      glarePosition="all"
      glareBorderRadius="10px"
    >
      {" "}
      <NavLink
        to={`/pokemon/${pokemonRequired.name}`}
        className={styles.cardItem}
      >
        <div className={styles.cardImg}>
          <img
            src={pokemonRequired.sprites.other.dream_world.front_default}
            alt=""
          />
        </div>

        <h4 className={styles.cardTitle}>{pokemonRequired.name}</h4>
      </NavLink>
    </Tilt>
  );
}
