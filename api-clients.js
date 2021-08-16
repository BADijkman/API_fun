const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const apiUrl2 = "https://pokeapi.co/api/v2/pokemon/";
// const ID=22

const getPokemon = async (ID) => {
  const ApiEndPoint = `${apiUrl2}${ID}`;
  try {
    const response = await fetch(ApiEndPoint, { methode: "GET" });
    return await response.json();
  } catch (error) {
    console.log(error);
    setPokemon(21)
  }
};
