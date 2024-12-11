import { useCallback, useState } from "react";
import { httpGetPokemons, httpGetPokemonByName } from "./requests";

function useData() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonRequired, setPokemonRequired] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const getPokemons = useCallback(async () => {
    setIsLoading(true);

    const pokemons = await httpGetPokemons();
    setPokemons(pokemons.data.results);

    setIsLoading(false);
  }, []);

  const getPokemonByName = useCallback(async (name) => {
    setIsLoading(true);

    const pokemon = await httpGetPokemonByName(name);
    setPokemonRequired(pokemon.data);

    setIsLoading(false);
  }, []);

  return {
    getPokemons,
    pokemons,
    getPokemonByName,
    pokemonRequired,
    isLoading,
  };
}

export default useData;
