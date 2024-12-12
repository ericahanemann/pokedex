import { useEffect } from "react";
import { useParams } from "react-router";
import useData from "../../hooks/useData";
import LoadingPage from "../LoadingPage/LoadingPage";
import PageTitle from "../../components/PageTitle/PageTitle";
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
import styles from "./PokemonPage.module.css";

export default function Pokemon() {
  const { getPokemonByName, pokemonRequired, isLoading } = useData();

  const { name } = useParams();

  useEffect(() => {
    getPokemonByName(name);
  }, []);

  const pokemonTypesIcons = {
    GRASS: <BiSolidLeaf className={styles.typeIcon} />,
    FIRE: <BsFire className={styles.typeIcon} />,
    WATER: <BsDropletFill className={styles.typeIcon} />,
    ELECTRIC: <BiSolidBolt className={styles.typeIcon} />,
    SNOW: <BsSnow2 className={styles.typeIcon} />,
    FIGHTING: <FaFistRaised className={styles.typeIcon} />,
    POISON: <GiPoisonGas className={styles.typeIcon} />,
    GROUND: <GiGroundbreaker className={styles.typeIcon} />,
    ROCK: <GiStoneSphere className={styles.typeIcon} />,
    BUG: <BsBugFill className={styles.typeIcon} />,
    FLYING: <GiLibertyWing className={styles.typeIcon} />,
    NORMAL: <RiBearSmileLine className={styles.typeIcon} />,
  };

  const renderedPokemonTypes =
    pokemonRequired && pokemonRequired.types
      ? pokemonRequired.types.map((type, index) => {
          return (
            <div key={index} className={styles.pokemonTypeItem}>
              {pokemonTypesIcons[type.type.name.toLocaleUpperCase()]}
              {type.type.name}
            </div>
          );
        })
      : [];

  const renderedPokemonStats =
    pokemonRequired && pokemonRequired.stats
      ? pokemonRequired.stats.map((statItem) => {
          const statName = statItem.stat.name.replace("-", " ");
          const baseStat = statItem.base_stat;

          const maxStat = 150;
          const statPercentage = (baseStat / maxStat) * 100;

          return (
            <div key={statName} className={styles.pokemonStatsItem}>
              <div className={styles.pokemonStatsItemTitle}>
                {statName} ({baseStat})
              </div>
              <div className={styles.pokemonStatsItemBar}>
                <div
                  className={styles.pokemonStatsItemValue}
                  style={{
                    width: `${statPercentage}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })
      : [];

  return isLoading ? (
    <LoadingPage />
  ) : (
    <main className={styles.pokemonPageContainer}>
      <PageTitle></PageTitle>
      <section className={styles.pokemonData}>
        <div className={styles.pokemonDataImg}>
          <div className={styles.pokemonImgBg}>
            <h3>{pokemonRequired.name}</h3>
            <h3>{pokemonRequired.name}</h3>
            <h3>{pokemonRequired.name}</h3>
            <h3>{pokemonRequired.name}</h3>
            <h3>{pokemonRequired.name}</h3>
            <h3>{pokemonRequired.name}</h3>

            <img
              src={pokemonRequired.sprites.other.dream_world.front_default}
              alt={pokemonRequired.name}
            />
          </div>
        </div>
        <div className={styles.pokemonDataInfo}>
          <div className={styles.pokemonTypes}>{renderedPokemonTypes}</div>
          <div
            id={styles[pokemonRequired.types[0].type.name.toLocaleLowerCase()]}
            className={styles.pokemonStats}
          >
            {renderedPokemonStats}
          </div>
        </div>
      </section>
    </main>
  );
}
