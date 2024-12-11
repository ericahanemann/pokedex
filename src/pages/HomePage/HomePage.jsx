import { NavLink } from "react-router";
import useData from "../../hooks/useData";
import { useEffect } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import styles from "./HomePage.module.css";
import PokeballIcon from "../../components/PokeballIcon/PokeballIcon";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";

export default function HomePage() {
  const { pokemons, getPokemons, isLoading } = useData();

  useEffect(() => {
    getPokemons();
  }, []);

  const renderedPokemons =
    pokemons.length > 0
      ? pokemons.map((pokemon, index) => {
          return <PokemonListItem key={index} pokemon={pokemon} />;
        })
      : [];

  return isLoading ? (
    <LoadingPage />
  ) : (
    <main className={styles.homePageContainer}>
      <section>
        <NavLink to="/" className={styles.titleContainer}>
          <div className={styles.iconTitleContainer}>
            <PokeballIcon />
          </div>
          <h1 className={styles.title}>pokedex</h1>
        </NavLink>

        <div className={styles.pokemonList}>{renderedPokemons}</div>
      </section>
    </main>
  );
}
