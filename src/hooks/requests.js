import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

async function httpGetPokemons() {
  try {
    const response = await axios.get(`${API_URL}`);
    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpGetPokemonByName(name) {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

export {
    httpGetPokemons,
    httpGetPokemonByName
}
