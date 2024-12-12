import { useEffect } from "react";
import { NavLink } from "react-router";
import Tilt from "react-parallax-tilt";
import useData from "../../hooks/useData";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { BsFire, BsDropletFill, BsSnow2, BsBugFill } from "react-icons/bs";
import { BiSolidLeaf, BiSolidBolt } from "react-icons/bi";
import { FaFistRaised } from "react-icons/fa";
import {
  GiPoisonGas,
  GiStoneSphere,
  GiGroundbreaker,
  GiLibertyWing,
} from "react-icons/gi";
import { RiBearSmileLine } from "react-icons/ri";
import styles from "./PokemonListItem.module.css";

export default function PokemonListItem({ pokemon, isActive, onHover }) {
  const { pokemonRequired, getPokemonByName, isLoading } = useData();

  const pokemonTypesIcons = {
    GRASS: <BiSolidLeaf className={styles.cardType} />,
    FIRE: <BsFire className={styles.cardType} />,
    WATER: <BsDropletFill className={styles.cardType} />,
    ELECTRIC: <BiSolidBolt className={styles.cardType} />,
    SNOW: <BsSnow2 className={styles.cardType} />,
    FIGHTING: <FaFistRaised className={styles.cardType} />,
    POISON: <GiPoisonGas className={styles.cardType} />,
    GROUND: <GiGroundbreaker className={styles.cardType} />,
    ROCK: <GiStoneSphere className={styles.cardType} />,
    BUG: <BsBugFill className={styles.cardType} />,
    FLYING: <GiLibertyWing className={styles.cardType} />,
    NORMAL: <RiBearSmileLine className={styles.cardType} />,
  };

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
      <NavLink
        to={`/pokemon/${pokemonRequired.name}`}
        id={styles[pokemonRequired.types[0].type.name.toLocaleLowerCase()]}
        className={`${styles.cardItem} ${isActive ? styles.active : ""}`}
        onMouseEnter={onHover}
      >
        {
          pokemonTypesIcons[
            pokemonRequired.types[0].type.name.toLocaleUpperCase()
          ]
        }

        <div className={styles.cardImg}>
          <img
            src={pokemonRequired.sprites.other.dream_world.front_default}
            alt={pokemonRequired.name}
          />
        </div>
        <h4 className={`${styles.cardTitle} ${styles.cardText}`}>
          {pokemonRequired.name}
        </h4>
      </NavLink>
    </Tilt>
  );
}
