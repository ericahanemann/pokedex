import { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import LoadingPage from "../LoadingPage/LoadingPage";
import styles from "./HomePage.module.css";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  const { pokemons, getPokemons, isLoading } = useData();
  const [activePokemonIndex, setActivePokemonIndex] = useState(0);

  useEffect(() => {
    getPokemons();
  }, []);

  const renderedPokemons =
    pokemons.length > 0
      ? pokemons.map((pokemon, index) => {
          return (
            <PokemonListItem
              key={index}
              pokemon={pokemon}
              isActive={index === activePokemonIndex}
              onHover={() => setActivePokemonIndex(index)}
            />
          );
        })
      : [];

  return isLoading ? (
    <LoadingPage />
  ) : (
    <main className={styles.homePageContainer}>
      <section>
        <PageTitle />

        <div className={styles.pokemonList}>{renderedPokemons}</div>
      </section>
    </main>
  );
}
