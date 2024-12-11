import "./App.css";
import { NavLink } from "react-router";
import useData from "./hooks/useData";
import { useEffect } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  const { pokemons, getPokemons, isLoading } = useData();

  useEffect(() => {
    getPokemons();
  }, []);

  const renderedPokemons =
    pokemons.length > 0
      ? pokemons.map((pokemon, index) => {
          return (
            <NavLink to={`/pokemon/${pokemon.name}`} key={index}>
              {pokemon.name} <br />
            </NavLink>
          );
        })
      : [];

  isLoading ? console.log("carregando") : console.log(pokemons);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div>
      pokedex
      <NavLink to="/pokemon/1">pokemon</NavLink>
      <br />
      <br />
      {renderedPokemons}
    </div>
  );
}

export default App;
