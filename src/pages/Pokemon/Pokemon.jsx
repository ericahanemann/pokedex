import { NavLink, useParams } from "react-router";
import useData from "../../hooks/useData";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useEffect } from "react";

export default function Pokemon() {
  const { getPokemonByName, pokemonRequired, isLoading } = useData();

  const { name } = useParams();

  useEffect(() => {
    getPokemonByName(name);
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div>
      página pokemon <NavLink to="/">{pokemonRequired.species.name}</NavLink>
    </div>
  );
}
